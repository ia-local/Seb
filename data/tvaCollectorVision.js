/**
 * @file tvaCollectorVision.js
 * @version 2.2.0 (ESM Edition)
 * @description Analyseur de tickets multi-taux et pont de synchronisation Blockchain CVNU.
 */

// --- MIGRATION REQUIRE -> IMPORT ---
import { ethers } from "ethers";

const FISCAL_CONFIG = {
    RATES: {
        STANDARD: 2000, 
        REDUCED: 550,   
        INTERMEDIATE: 1000 
    },
    TAX_AI_RATE: 680,   // 6.8%
    PRECISION: 10000
};

const ReceiptProcessor = {
    /**
     * Analyse et valide les données fiscales d'un ticket.
     */
    processReceipt(rawData) {
        const htAmount = parseFloat(rawData.totalHT);
        const tvaAmount = parseFloat(rawData.tvaAmount);
        
        const detectedRate = this.detectRate(htAmount, tvaAmount);
        const taxAIContribution = (tvaAmount * FISCAL_CONFIG.TAX_AI_RATE) / FISCAL_CONFIG.PRECISION;

        return {
            isValid: detectedRate !== null,
            detectedRate: (detectedRate / 100) + "%",
            dataForContract: {
                baseAmount: ethers.utils.parseUnits(htAmount.toFixed(2), "ether"),
                tvaToPay: ethers.utils.parseUnits(tvaAmount.toFixed(2), "ether")
            },
            accounting: {
                rupFonds: taxAIContribution.toFixed(4),
                netState: (tvaAmount - taxAIContribution).toFixed(4)
            },
            metadata: {
                enseigne: rawData.enseigne,
                siret: rawData.siret,
                date: rawData.date
            }
        };
    },

    detectRate(ht, tva) {
        const ratio = Math.round((tva / ht) * FISCAL_CONFIG.PRECISION);
        if (Math.abs(ratio - FISCAL_CONFIG.RATES.STANDARD) < 50) return FISCAL_CONFIG.RATES.STANDARD;
        if (Math.abs(ratio - FISCAL_CONFIG.RATES.REDUCED) < 50) return FISCAL_CONFIG.RATES.REDUCED;
        return null;
    },

    async syncToBlockchain(processedReceipt, wallet) {
        const contractAddress = process.env.TVA_COLLECTOR_ADDRESS;
        const abi = [
            "function payTVA(uint256 _baseAmount) public payable",
            "event PaymentReceived(address indexed payer, uint256 amount, uint256 tvaAmount)"
        ];
        
        const contract = new ethers.Contract(contractAddress, abi, wallet);

        try {
            console.log(`📡 Injection Blockchain : ${processedReceipt.metadata.enseigne}...`);
            const tx = await contract.payTVA(
                processedReceipt.dataForContract.baseAmount, 
                { value: processedReceipt.dataForContract.tvaToPay }
            );
            return await tx.wait();
        } catch (error) {
            console.error("❌ Échec de synchronisation CVNU to RUP:", error.message);
            throw error;
        }
    }
};

// --- EXPORT ESM POUR Node.js v25 ---
export default ReceiptProcessor;