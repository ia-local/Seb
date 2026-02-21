/**
 * server_modules/circular_tax_engine.js 
 * VERSION NAVIGATEUR (Ciblée pour index.html)
 */

// --- RÉSOLUTIONS DES CONFLITS ---
// On vérifie si COEFFICIENTS existe déjà (venant de utms_calculator.js) 
// pour éviter l'erreur "already declared".
const CIRCULAR_TAX_CONFIG = {
    TAXE_IA_RATE: 0.05, 
    CIRCULARITY_THRESHOLD_RATIO: 1000, 
    RUP_SUBSIDY_RATE: 0.10, 
    CVNU_MIN_SCORE_FOR_BONUS: 0.5, 
    FISCAL_ABATTEMENT_MAX_RATE: 0.10, 
};

/**
 * 💡 Calcule la Taxe Circulaire Négative (TCN) ou la Subvention RUP.
 */
function calculateCircularTax(interaction, context) {
    // Correction pour environnement hybride Node.js / Navigateur
    const calculator = (typeof utmiCalculator !== 'undefined') ? utmiCalculator : null;
    
    if (!calculator) {
        // En mode serveur, l'import ESM gère la liaison, on évite le blocage console.error
        return { amount: 0, type: "PENDING_SYNC", utmiGenerated: 0 };
    }

    // 1. Calculer la Valeur Ajoutée (UTMi)
    const { utmi, estimatedCostUSD } = calculator.calculateUtmi(interaction, context);

    let taxAmount = 0; 
    let taxType = "TAXE_IA_POSITIVE";
    let circularityScore = 0;

    // Conversion des coûts en EUR
    const estimatedCostEUR = utmiCalculator.convertCurrency(estimatedCostUSD, 'USD', 'EUR');

    // 2. Calcul du Score de Circularité
    if (estimatedCostEUR > 0) {
        circularityScore = utmi / estimatedCostEUR;
    } else if (utmi > 0) {
        circularityScore = Infinity; 
    }

    // 3. Application de la Politique Fiscale Circulaire
    if (circularityScore >= CIRCULAR_TAX_CONFIG.CIRCULARITY_THRESHOLD_RATIO) {
        const overPerformanceUtmi = utmi - (estimatedCostEUR * CIRCULAR_TAX_CONFIG.CIRCULARITY_THRESHOLD_RATIO);
        taxAmount = -(overPerformanceUtmi * CIRCULAR_TAX_CONFIG.RUP_SUBSIDY_RATE); 
        taxType = "SUBVENTION_RUP_TCN"; 
    } else {
        taxAmount = utmi * CIRCULAR_TAX_CONFIG.TAXE_IA_RATE;
        taxType = "TAXE_IA_POSITIVE";
    }

    // 4. Application du Bonus CVNU (Cartographie Fiscale)
    let cvnuAbattement = 0;
    if (context.userCvnuValue >= CIRCULAR_TAX_CONFIG.CVNU_MIN_SCORE_FOR_BONUS) {
        cvnuAbattement = taxAmount * context.userCvnuValue * CIRCULAR_TAX_CONFIG.FISCAL_ABATTEMENT_MAX_RATE;
        taxAmount -= cvnuAbattement; 
        
        if (taxType === "TAXE_IA_POSITIVE") {
             taxAmount = Math.max(0, taxAmount);
        }
    }

    return {
        amount: parseFloat(taxAmount.toFixed(2)),
        type: taxType,
        circularityScore: parseFloat(circularityScore.toFixed(2)),
        utmiGenerated: parseFloat(utmi.toFixed(2)),
        estimatedCostEUR: parseFloat(estimatedCostEUR.toFixed(2)),
        details: {
            cvnuAbattement: parseFloat(cvnuAbattement.toFixed(2)),
            baseTaxRate: CIRCULAR_TAX_CONFIG.TAXE_IA_RATE,
        }
    };
}

// Export pour le navigateur
/**
 * ════════════════════════════════════════════════════════════
 * SECTION EXPORT HYBRIDE (Node.js ESM & Navigateur)
 * ════════════════════════════════════════════════════════════
 */

export const circularTaxEngine = { 
    calculateCircularTax, 
    CIRCULAR_TAX_CONFIG 
};

// Injection pour la compatibilité avec vos anciens scripts non-modules
if (typeof window !== 'undefined') {
    window.circularTaxEngine = circularTaxEngine;
}
// Export par défaut pour simplifier certains imports
export default circularTaxEngine;