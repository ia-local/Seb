/**
 * RUP_MANAGER
 * @version 1.0.0
 * @role Pilotage du Revenu Universel Progressif (RUP)
 * @generated J1 / Cycle 28j
 * @cvnu Certified
 */

class RUPManager {

  constructor(config = {}) {
    this.fund_total = config.fund_total || 0;
    this.beneficiaries = [];
    this.redistribution_rate = config.redistribution_rate || 0.068;
    this.history = [];
    this.created_at = new Date().toISOString();
  }

  /**
   * Enregistre un bénéficiaire CVNU
   */
  registerBeneficiary(userCVNU) {
    this.beneficiaries.push({
      level: userCVNU.level,
      trust: userCVNU.neutrality_score,
      value: userCVNU.value_points
    });
  }

  /**
   * Alimente le fonds RUP
   */
  feed(amount, source = "TAX_AI") {
    this.fund_total += amount;
    this.history.push({
      ts: Date.now(),
      type: "FEED",
      source,
      amount
    });
  }

  /**
   * Calcule la part individuelle selon niveau & confiance
   */
  calculateShare(beneficiary) {
    const levelFactor = beneficiary.level / 10;
    const trustFactor = beneficiary.trust;
    return (levelFactor * 0.6 + trustFactor * 0.4);
  }

  /**
   * Distribue le RUP de manière progressive
   */
  distribute() {
    const totalWeight = this.beneficiaries.reduce(
      (sum, b) => sum + this.calculateShare(b),
      0
    );

    return this.beneficiaries.map(b => {
      const weight = this.calculateShare(b) / totalWeight;
      const payout = Math.floor(this.fund_total * weight);

      return {
        level: b.level,
        trust: b.trust,
        payout
      };
    });
  }

  /**
   * Audit de transparence
   */
  audit() {
    return {
      fund_total: this.fund_total,
      beneficiaries: this.beneficiaries.length,
      last_event: this.history[this.history.length - 1] || null,
      timestamp: new Date().toISOString()
    };
  }
}

// Export
// 1. Export pour ES Modules (Node.js v25 / serveur.js)
export default RUPManager;

// 2. Export pour le Navigateur (index.html / docs)
if (typeof window !== 'undefined') {
    window.RUP_MANAGER = RUPManager;
}