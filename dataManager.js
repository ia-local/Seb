const path = require('path');

// 1. Importation sécurisée des modules hybrides CVNU
const rawCVNU = require('./data/CORE_SYSTEM_CVNU.js');

// 💡 CORRECTION : Résolution dynamique de l'export (Babel / Node / ES6)
const CVNU_EXPORTS = rawCVNU.default || rawCVNU.CVNU_EXPORTS || rawCVNU;

const KERNEL = CVNU_EXPORTS.KERNEL;
const system = CVNU_EXPORTS.system;

// Sécurité anti-crash : on s'assure que le KERNEL est bien monté
if (!KERNEL || !KERNEL.STATE) {
    console.error("❌ ERREUR FATALE : Le KERNEL est introuvable. Voici ce que Node a lu :", Object.keys(rawCVNU));
    throw new Error("Echec du chargement de CORE_SYSTEM_CVNU.js");
}

// 2. Importation sécurisée des moteurs de calcul
const rawUtmi = require('./data/utms_calculator.js');
const utmiCalculator = rawUtmi.default || rawUtmi.utmiCalculator || rawUtmi;

const rawTax = require('./data/circular_tax_engine.js');
const circularTaxEngine = rawTax.default || rawTax.circularTaxEngine || rawTax;

const rawRup = require('./data/rup_manager.js');
const RUPManager = rawRup.default || rawRup.RUPManager || rawRup;
class DataManager {
    constructor() {
        // Initialisation du gestionnaire de Revenu Universel Progressif
        this.rupManager = new RUPManager({ 
            fund_total: 0, 
            redistribution_rate: 0.068 // Taxe IA fixée à 6.8%
        });
        
        this.initSebastienProfile();
    }

    /**
     * Initialise l'identité souveraine de Sébastien dans le KERNEL
     */
    initSebastienProfile() {
        // Paramétrage de l'utilisateur dans le cadre légal du CVNU
        KERNEL.STATE.USER_CVNU.firstName = "Sébastien";
        KERNEL.STATE.USER_CVNU.lastName = "Mission Camion";
        KERNEL.STATE.USER_CVNU.level = 1;
        KERNEL.STATE.USER_CVNU.value_points = 675; // Solde de départ actuel
        KERNEL.STATE.USER_CVNU.target_points = 4500; // Objectif pour le camion
        KERNEL.STATE.USER_CVNU.neutrality_score = 0.8; 
    }

    /**
     * Traite une nouvelle mission d'intérim (ou autre flux)
     * @param {number} rawAmount - Le montant brut gagné en euros
     * @param {string} source - L'origine du gain (ex: "Adecco BTP")
     */
    processMission(rawAmount, source) {
        // 1. Définition de l'interaction pour le moteur cognitif
        const interaction = {
            type: 'user_interaction',
            data: { text: `Mission ${source} accomplie par Sébastien`, wordCount: 15 }
        };

        // 2. Calcul de la taxation circulaire via le moteur dédié
        // On simule que utmi == rawAmount pour respecter 1 UTMi = 1 EUR
        const mockUtmiCalculation = { utmi: rawAmount, estimatedCostUSD: 0 }; 
        
        const fiscalData = circularTaxEngine.calculateCircularTax(
            { ...interaction, data: { ...interaction.data, forceUtmi: rawAmount } },
            { userCvnuValue: KERNEL.STATE.USER_CVNU.neutrality_score }
        );

        // Si la fonction pure ne permet pas le forçage, on applique la règle manuellement pour le MVP :
        const taxAmount = rawAmount * 0.068; // 6.8% pour le RUP
        const netAmount = rawAmount - taxAmount;

        // 3. Mise à jour de l'état (La cagnotte de Sébastien monte)
        system.addCVNUPoints(netAmount);

        // 4. Alimentation du fonds RUP commun
        this.rupManager.feed(taxAmount, "TAX_AI_INTERIM");

        return {
            source: source,
            gross: rawAmount,
            taxCollected: parseFloat(taxAmount.toFixed(2)),
            netAdded: parseFloat(netAmount.toFixed(2)),
            newBalance: parseFloat(KERNEL.STATE.USER_CVNU.value_points.toFixed(2)),
            globalRupFund: parseFloat(this.rupManager.fund_total.toFixed(2))
        };
    }

    /**
     * Récupère l'état actuel pour le Dashboard HTML
     */
    getDashboardState() {
        return {
            balance: KERNEL.STATE.USER_CVNU.value_points,
            target: KERNEL.STATE.USER_CVNU.target_points,
            level: KERNEL.STATE.USER_CVNU.level,
            rupFund: this.rupManager.fund_total
        };
    }
}

// Export d'une instance unique (Singleton)
module.exports = new DataManager();