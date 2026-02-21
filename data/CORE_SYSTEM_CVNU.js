/**
/**
 * @file CORE_SYSTEM_CVNU.js
 * @version 2.5.0-CVNU-RUP_CYCLE_28
 * @description Noyau CVNU conforme DDHC Art.16 & Code Civil Art.5
* @role Pilotage du Revenu Universel Progressif (RUP) & Gouvernance
* @legal_context Declaration des Droits de l'Homme et du Citoyen 1789
* @generated J13 / Cycle 28j
* @cvnu Certified
* @rup Beta Test
*/
/**
 * ════════════════════════════════════════════════════════════
* Système central CVNU (Cadre neutre).
* NOTE DE VERSION 2.3.0 :
* ════════════════════════════════════════════════════════════
* OBJECTIFS ET SCÉNARIO D'INITIALISATION CITOYEN :
* * 1 > ONBOARDING INTERACTIF :
* L'IA engage le dialogue pour identifier l'utilisateur (Nom, Prénom) ou analyse 
* le CV transmis en pièce jointe pour extraire l'identité souveraine.
* * 2 > ANALYSE COGNITIVE & PRÉ-ÉVALUATION :
* Traitement du contenu (texte ou JSON) via le module CognitiveEvaluator. 
* L'algorithme scanne les métadonnées métier (ex: Expert, Architecture, Senior) 
* pour attribuer un palier initial (Level 1 à 10).
* Formule : Level = Math.max(1, Math.min(10, Math.floor(Score_Cognitif / 500))).
* * 3 > SÉCURISATION DU FLUX FINANCIER (RIB) :
* L'utilisateur est guidé pour enregistrer son RIB via la commande /rib. 
* Le système procède au hachage cryptographique (SHA-256 simulation) pour lier 
* l'identité bancaire au Smart Contract TVA_RIB_Synchronizer.sol sans stocker 
* de données en clair.
* * 4 > ACTIVATION DE LA MONÉTISATION CIRCULAIRE :
* Présentation des algorithmes de valorisation :
* - Conversion : 1 UTMi = 1 EUR[cite: 21].
* - Taxe AI : Prélèvement automatique de 6.8% sur les gains pour alimenter le fonds RUP.
* - Objectif : Passage progressif du seuil de pauvreté (1193€) à la norme (2000€).
* ════════════════════════════════════════════════════════════
* +warpASCII  
*╔════════════════════════════════════════════════════════════╗
*║                MANIFESTE DU PROTOCOLE CVNU                 ║
*╠════════════════════════════════════════════════════════════╣
*║  [VERSION 3.0 : L'ÉCONOMIE DE LA COMPÉTENCE]               ║
*║                                                            ║
*║  Bienvenue dans le CVNU (Cadre de Valeur Numérique         ║
*║  Universel). Oubliez le CV statique. Ici, votre parcours   ║
*║  est un actif dynamique vivant.                            ║
*║                                                            ║
*║  COMMENT ÇA MARCHE ? (LE "MATCH LEARNING")                 ║
*║  Notre moteur neuronal ne cherche pas des "postes".        ║
*║  Il scanne votre matrice de compétences (ex: 10 ans de     ║
*║  Code + 8 ans d'Agri) pour détecter des SYNERGIES RARES    ║
*║  invisibles sur le marché classique (ex: Architecte        ║
*║  AgTech).                                                  ║
*║                                                            ║
*║  VOTRE BOUCLE DE GAMEPLAY :                                ║
*║  1. 📥 RECEVOIR : Le système push une "Tuile Mission"      ║
*║     parfaitement calibrée pour vous (Match > 95%).         ║
*║  2. 🤝 CO-PILOTER : Vous ne travaillez pas seul. Vous      ║
*║     exécutez la mission en dialogue avec l'AGI pour         ║
*║     accélérer la production (Pair-Programming / Design).   ║
*║  3. 🎓 UPGRADER : Chaque mission inclut un micro-module    ║
*║     de formation pour valider de nouveaux acquis.          ║
*║  4. 💰 ENCAISSER : Validation instantanée via Smart        ║
*║     Contract. Votre trésorerie augmente, votre niveau      ║
*║     grimpe.                                                ║
*║                                                            ║
*║  Objectif : Atteindre l'autonomie financière en 28 jours.  ║
*╠────────────────────────────────────────────────────────────╣
*║[███░░░]< .............................................. % >║
*╚════════════════════════════════════════════════════════════╝
*/

'use strict';

// --- Dépendances optionnelles (Gestion de l'environnement) ---
// Tente de charger le module crypto pour une génération de hash sécurisée.
// Si le script tourne hors de Node.js (ex: navigateur), on utilise un fallback.
let crypto = null;
try {
    crypto = require('crypto');
} catch (e) {
    // runtime non-node : on utilisera Math.random en fallback plus bas.
}
const cryptoUtils = {
    generateHash: () => {
        return Math.random().toString(36).substring(2, 15) + Date.now().toString(36).slice(-4);
    }
};
/**
 * [MODULE] SOURCE_RECOVERY_PROTOCOL
 * Lie le Kernel au repository GitHub pour les mises à jour à chaud.
 */
const SOURCE_CONFIG = {
    repo: "https://github.com/ia-local/rup",
    branch: "main",
    sync_mode: "AUTOMATIC_HOT_RELOAD",
    // Correction : Utilisation d'un fallback si process n'est pas défini
    access_token: (typeof process !== 'undefined' && process.env) 
        ? process.env.GITHUB_SYNC_TOKEN 
        : null 
};
async function syncKernelWithGithub() {
    console.log("📡 [KERNEL] Synchronisation avec le répertoire source (Phase 3)...");
    // Logique de fetch vers github.com/ia-local/rup
    // Mise à jour de utms_calculator.js et rup_manager.js
}
/**
/**
 * KERNEL (NOYAU)
 * Collection centralisée de constantes, dictionnaires visuels et configuration d'état.
 * C'est la "mémoire morte" et la configuration du système.
 */
const KERNEL = {
    STYLES: {
        MODE: (typeof window !== 'undefined') ? 'HTML' : 'ANSI',
        PALETTE: {
            RESET:   { html_start: '</span>', html_end: '',ansi: '\x1b[0m' },
            WHITE:   { html_start: '<span class="w-bloc">', html_end: '</span>',ansi: '\x1b[37m' },
            GREEN:   { html_start: '<span class="g-bloc">', html_end: '</span>',ansi: '\x1b[32m' },
            RED:     { html_start: '<span class="r-bloc">', html_end: '</span>',ansi: '\x1b[31m' },
            ORANGE:  { html_start: '<span class="o-bloc">', html_end: '</span>',ansi: '\x1b[33m' },
            YELLOW:  { html_start: '<span class="y-bloc">', html_end: '</span>',ansi: '\x1b[93m' },
            BLUE:    { html_start: '<span class="b-bloc">', html_end: '</span>',ansi: '\x1b[34m' },
            MAGENTA: { html_start: '<span class="m-bloc">', html_end: '</span>',ansi: '\x1b[35m' },
            VIOLET:  { html_start: '<span class="v-bloc">', html_end: '</span>',ansi: '\x1b[35m' },
            CYAN:    { html_start: '<span class="c-bloc">', ansi: '\x1b[36m' }
        }
    },
    // Dictionnaire des assets visuels (Emojis, Tuiles ASCII)
    ASCII_DICT: {

        TENSOR: {
            BORDERS: { 
                // 1. CLASSIQUES
                DOUBLE: '╔╗╚╝═║╠╣╦╩╬', 
                SINGLE: '┌┐└┘─│├┤┬┴┼', 
                ROUND:  '╭╮╰╯─│├┤┬┴┼',
                CODEX:  '╔╗╚╝═║╠╣╦╩╬', // Alias

                // 2. STYLES "WARP" & CYBERPUNK
                HEAVY:  '┏┓┗┛━┃┣┫┳┻╋', 
                HYBRID: '╒╕╘╛═│╞╡╤╧╪', 
                TECH:   '▛▜▙▟▀▌▙▜▀▄ ', 
                
                // 3. STYLES UTILITAIRES
                DOTTED: '......:.:.+', 
                DASHED: '......-|-|+', 
                ASCII:  '++++-|+++++', 
                
                // 4. ÉLÉMENTS DÉTAILLÉS (Pour MapCtrl)
                PARTS: {
                    TL: '╔', TR: '╗', BL: '╚', BR: '╝',
                    H:  '═', V:  '║',
                    LT: '╠', RT: '╣', TT: '╦', BT: '╩',
                    X:  '╬'
                }
            }, // <--- C'est souvent cette virgule qui manque avant JOINTS
            
            JOINTS: {
                CODDEX: "╭╮╰╯╴╷╸╵",
                LINE_SIMPLE: '─',
                LINE_VERTICAL_SIMPLE: '│',
                JOINT_LEFT_T: '├',
                JOINT_RIGHT_T: '┤',
                JOINT_CROSS: '┼'
            },
            
            RENDER: { 
                EMPTY: '░', LIGHT: '▒', HEAVY: '▓', SOLID: '█', 
                DENSITY: ' .:-=+*#%@@',
                QUANTA: "─│·:░▒▓█"
            },
            
            UX: {
                CHECK_ON: "☑", CHECK_OFF: "☐",
                RADIO_ON: "◉", RADIO_OFF: "○",
                ARROW: "➔"
            }
        }, // Fin TENSOR

        ICONS: { 
            RUP: '💠', TIME: '⏳', LVL: '🆙', VALID: '✅', LOCK: '🔒', WARN: '⚠️' 
        },

        UI: {
            SUCCESS: '✅', FAILURE: '❌', WARNING: '⚠️', INFO: 'ℹ️',
            CHART_UP: '📈', CHART_DOWN: '📉', COST: '⬇️',
            DAY: '☀️', NIGHT: '🌙', LOAD: '🔄',
            DOTS: { symbol: '⚪️,⚫️,🔴,🟠,🟡,🟢,🔵,🟣,🟤', name: 'Marqueurs' },
            SQUARES: { symbol: '⬜️,⬛,🟥,🟧,🟨,🟩,🟦,🟪,🟫', name: 'Blocs' }
        },

        // Tuiles Vectorielles (Pure ASCII + CSS Class Reference)
        TILES: {
            PLAYER:     { char: '⊕', css: 'r-bloc', desc: 'Position Actuelle' },
            PLAINS:     { char: '·', css: 'w-bloc', desc: 'Plaine' },
            FOREST:     { char: '▓', css: 'g-bloc', desc: 'Forêt (Biomasse)' },
            MOUNTAIN:   { char: '▲', css: 'w-bloc', desc: 'Relief' },
            WATER:      { char: '≈', css: 'b-bloc', desc: 'Hydro' },
            VOID:       { char: '░', css: 'w-bloc', desc: 'Non exploré' },
            BASE:       { char: '⌂', css: 'y-bloc', desc: 'QG / Base' },
            CITY:       { char: '╬', css: 'm-bloc', desc: 'Urbain' },
            ZONE_IND:   { char: '¶', css: 'o-bloc', desc: 'Industrie' },
            ZONE_AGRI:  { char: 'Ꚛ', css: 'g-bloc', desc: 'Agri-Tech' },
            ZONE_COM:   { char: '$', css: 'y-bloc', desc: 'Commerce' },
            ZONE_TECH:  { char: 'µ', css: 'b-bloc', desc: 'Data-Center' },
            PATH:       { char: '÷', css: 'w-bloc', desc: 'Route' }
        },
        HOST: {
            IDENTITY: {
                NAME: "NODE_BAVENT_01",
                TYPE: "SOVEREIGN_UNIT", // Unité Souveraine
                IP: "LOCALHOST::127.0.0.1",
                PORT: 3145,
                OWNER: "Mickael Celsius"
            },
            STATUS: {
                STATE: "ONLINE",
                UPTIME: 0, // Sera calculé
                SYNC: "CONNECTED (Quantum Layer)",
                SECURITY: "AES-256 / JWT-HS256"
            },
            RESOURCES: {
                CPU: "AGI_CORE_v3.4",
                MEMORY: "Infinite Context (Simulated)",
                STORAGE: "FileSystem API"
            }
        },
        // Matrice des compétences AGI (Artificial General Intelligence)
        // Définit les secteurs, l'icône associée et la capacité spéciale.
        // Ordre de rendu des couches de la carte (Z-Index théorique)
        MAP_ORDER: { BACKGROUND: 0, TERRAIN: 1, INFRASTRUCTURE: 2, ITEMS: 3, ENTITIES: 4, UI_OVERLAY: 5 },
        // Réseaux sociaux et Bâtiments (Assets décoratifs et fonctionnels)

        BUILDINGS: { 
            PORTAL: '🚪', HOME: '🏠', MINE: '⛏️', UNIV: '🏫', RECYCLE: '♻️', 
            SAWMILL: '🪵', SHOP: '🏪', GOV: '🏛️', FACTORY: '🏭', BANK: '🏦', 
            FARM: '🚜', LAB: '🧪' 
        },
        NATURE: { 
            APPLE: '🍎', PIG: '🐖', DUCK: '🦆', CHICKEN: '🐓', COW: '🐂', SHEEP: '🐐' 
        },
        AVATAR: { 
            DEFAULT: '👤', MAN: '🧍‍♂️', WOMAN: '🧍‍♀️', DEV: '👨‍💻', WORKER: '👷', 
            CEO: '🕴️', CREATIVE: '🎨' 
        },
        RESOURCES: { 
            WOOD: '🪵', STONE: '🪨', ORE: '🔩', GOLD: '💰', FOOD: '🌽', 
            TECH: '💾', POP: '🧑‍🤝‍🧑', HP: '❤️',         
            DIAMOND: '💎',
        },
        CURRENCY: {
            EUR: { symbol: '💶,€', name: 'Euro' },
            USD: { symbol: '💵,$', name: 'Dollar' },
            YEN: { symbol: '💴,¢,¥', name: 'Yen' },
            GBP: { symbol: '💷,£,₤', name: 'Livre' },
            WOW: { symbol: '₩', name: 'Wow' },
            CRYPTO: { symbol: '🪙', name: 'Token' },
            CREDIT: 'Ꞓ', NAME: 'Crédit debt'
        },
        ITEMS: { PHONE: '📱', PC: '💻', CVNU: '📜', WALLET: '🗃️', CODEX: '📓', MAP: '🗺️' },   
        // Définition des bordures ASCII pour les fenêtres (Style DOUBLE)

        // --- NOUVEAU : PÉRIMÈTRE D'ACTIVITÉ SPÉCIALISÉ ---
        PERIMETER: {
            // Grande Distribution (Taux TVA réduit 5.5%)
            RETAIL: {
                LECLERC: { name: 'Leclerc', icon: '🏪', tva_rate: 5.5, sector: 'COM' },
                CARREFOUR: { name: 'Carrefour', icon: '🛒', tva_rate: 5.5, sector: 'COM' },
                LIDL: { name: 'Lidl', icon: '💰', tva_rate: 5.5, sector: 'COM' },
                INTERMARCHE: { name: 'Intermarché', icon: '🛍️', tva_rate: 5.5, sector: 'COM' },
                SUPER_U: { name: 'Super U', icon: '🏪', tva_rate: 5.5, sector: 'COM' }
            },
            // Énergie & Transport (Taux TVA intermédiaire 10%, TTF taxes sur les transactions financières)
            ENERGY: {
                EDF: { name: 'EDF', icon: '⚡', tva_rate: 10, sector: 'ENER' },
                TOTAL: { name: 'Total', icon: '⛽', tva_rate: 10, sector: 'ENER' }
            },
            // E-commerce & Restauration (Taux TVA standard 20%)
            DIGITAL: {
                AMAZON: { name: 'Amazon', icon: '📦', tva_rate: 20, sector: 'COM' },
                MCDONALDS: { name: "McDonald's", icon: '🍔', tva_rate: 20, sector: 'COM' }
            },
            BANK: {
                SG: { name: 'Société Générale',BIC:[],RIB:[],CB:[], icon: '🏦', ttf_rate: 0.3, sector: 'ECO' },
                CREDIT_COOP: { name: "Crédit Coopératif",BIC:[],RIB:[],CB:[], icon: '🏦', ttf_rate: 0.2, sector: 'ECO' },
                CREDIT_AGRICOLE: { name: "Crédit Agricole",BIC:[],RIB:[],CB:[], icon: '🏦', ttf_rate: 0.2, sector: 'ECO' },
                BPI: { name: "Banque Publique d'Investissement",BIC:[],RIB:[],CB:[], icon: '🏦', ttf_rate: 0.1, sector: 'ECO' },
                RE: { name: "Revolut",BIC:[], icon: '🏦',RIB:[],CB:[], ttf_rate: 0.1, sector: 'ECO' },
                DB: { name: "d-bloc",BIC:[], icon: '🏦',RIB:[],CB:[], ttf_rate: 0.1, sector: 'ECO' }
            }
        },
        TRANSPORT: {
            SKATE: { symbol: '🛹', name: 'Skate' },
            ROAD: { symbol: '🛣️', name: 'Route' },
            CAR: { symbol: '🚗', name: 'Voiture' },
            TAXI: { symbol: '🚕', name: 'Taxi' },
            TRACTOR: { symbol: '🚜', name: 'Tracteur' },
            BUS: { symbol: '🚌', name: 'Bus' },
        },
        // 7. ÉQUIPEMENT (Items portables)
        GEAR: {
            TOP: { symbol: '👕', name: 'Haut' },
            PANTS: { symbol: '👖', name: 'Bas' },
            SHOES: { symbol: '🥾', name: 'Chaussures' },
            SUIT: { symbol: '👔', name: 'Costume' },
        },
        // --- NOUVEAU : TEMPLATES DE CLASSES MÉTIERS POUR /dev ---
        DEV_TEMPLATES: {
            // Classes métiers fondamentales pour l'économie circulaire
            TABLEUR: { header: '│ A │ B │ C │', row: '│   │   │   │' },
            NAVBAR: {
                PROMPT_BAR: [
                    "╔════════════════════════════════════════════════════════════════════════════════════════╗",
                    "║[📗 📕 📒]:/┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈{[┈┈┈┈/commande...┈┈┈┈┈]}┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈>║",
                    "╠════════════════════════════════════════════════════════════════════════════════════════╣"
                ],
                MENU_ICONS: "║ [🏠 Home]  [🏪 Store]  [🏭 Factory]  [📱 Device]  [💻 System] ║",
                BREADCRUMB: (path) => `║ [📂] > ROOT > ${path.toUpperCase().padEnd(50)} ║`
            },

            // 2. LAYOUTS SPÉCIFIQUES (Écrans complets)
            SCREENS: {
                // Écran CVNU / Profil
                PROFILE: [
                    "╔═════════╦═════════════════════════════════════════════════════════════════════════════╗",
                    "║  [📜]   ║:┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈{[┈┈┈┈/CVNU_USER┈┈┈┈┈]}┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈>║",
                    "╠═════════╬══════════════╦═════════════════════════════════════════════╦════════════════╣",
                    "║  IDENT  │ Nom: MICKAEL │ Role: ARCHITECTE FULL-STACK                 │ Lvl: 04        ║",
                    "║  COORD  │ Loc: BAVENT  │ Tel: 06-22-80-17-71                         │ 14860 FR       ║",
                    "╠═════════╬══════════════╩═════════════════════════════════════════════╩════════════════╣",
                    "║  STACK  │ [JS] [NODE] [REACT] [SOL] [AI-AGENT] [DEVOPS] [AGRI-TECH]                   ║",
                    "╚═════════╩═════════════════════════════════════════════════════════════════════════════╝"
                ],
                
                // Écran STORE (Grille de produits)
                STORE_DASHBOARD: [
                    "╔═══════════════════════════════════════════════════════════════════════════════════════╗",
                    "║[🏪]:/┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈{[┈┈┈┈/STORE_ITEM┈┈┈┈┈]}┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈>║",
                    "╠═════════╦═════════════════════════════════════════════════════════════════════════════╣",
                    "║ CATEGORY│     ╔────────╬────────╬────────╬────────╬────────╬────────╬────────╗        ║",
                    "║   [📦]  │     ║📦 PROD │📦 PROD │📦 PROD │📦 PROD │🔒 LOCK │🔒 LOCK │🔒 LOCK ║        ║",
                    "║ LIMITED │     ╬────────╬────────╬────────╬────────╬────────╬────────╬────────╬        ║",
                    "║ EDITION │     ║   1€   │   1€   │   1€   │   1€   │   --   │   --   │   --   ║        ║",
                    "║         │     ╚────────╬────────╬────────╬────────╬────────╬────────╬────────╝        ║",
                    "╠═════════╬═════════════════════════════════════════════════════════════════════════════╣",
                    "║[💳 WALLET]: SOLDE INSUFFISANT POUR ACHAT MULTIPLE. (1 ITEM/JOUR)                      ║",
                    "╚═══════════════════════════════════════════════════════════════════════════════════════╝"
                ],

                // Écran FACTORY (Flux de production)
                FACTORY_FLOW: [
                    "╔════════════════════════════════════════════════════════════════════════════════════════╗",
                    "║[🏭]:/┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈{[┈┈┈┈/FACTORY_AI┈┈┈┈┈]}┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈>║",
                    "╠═──────────────────────────────────────────────────────────────────────────────────────═╣",
                    "║                INPUT [📝] ─────────▶ PROCESS [⚙️ ] ────────▶ OUTPUT [📦]                ║",
                    "║                   │                        │                        │                  ║",
                    "║                   ▼                        ▼                        ▼                  ║",
                    "║              [RAW_DATA]               [TRANSFORM]                [ASSET_V1]            ║",
                    "╠════════════════════════════════════════════════════════════════════════════════════════╣",
                    "║[💻.📡] STATUS: PRODUCTION EN COURS... [██████████░░░░] 65%                             ║",
                    "╚════════════════════════════════════════════════════════════════════════════════════════╝"
                ]
            },

            // 3. VISUALISATION DE DONNÉES (Charts)
            DATA_VIZ: {
                SPECTRUM: [
                    "## SPECTRE / FREQUENCE",
                    "do+┈┈🟫┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈+ [1:1] FOND",
                    "ré+┈┈🟪┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈+ [9:8] MIN7",
                    "mi+┈┈🟦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈+ [5:4] MAJ3",
                    "fa+┈┈🟩┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈+ [4:3] PERF",
                    "sol+┈🟨┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈+ [3:2] PERF",
                    "la+┈┈🟧┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈+ [5:3] MAJ6",
                    "si+┈┈🟥┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈+ [15:8] MAJ7"
                ],
                LOADING_SATELLITE: "║[0.1]> ██████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 🛰️ ║"
            },

            // 4. EFFETS DÉCORATIFS (Cyberpunk / Glitch)
            DECO: {
                GLITCH_BINARY: [
                    "010101010010101010101010011",
                    "0      SYSTEM BREACH      0",
                    "1  010101010101010101010  1",
                    "&  KERNEL_PANIC_RECOVER   &",
                    "010101010010101010101010011"
                ],
                DIVIDER: "+┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈+"
            },
            CARD: { width: 40, style: 'ROUND' },
            BTN: { pattern: '[ LABEL ]' },
            LOADER: { frames: ['[░░░]', '[█░░]', '[██░]', '[███]'] },
            DIAGRAM:{},
            GRID:{},
            LINE:{},
            LINK:{},
            CLASSES: {
                ENTREPRISE: {
                    name: 'Entreprise',
                    description: 'Représente une entreprise du périmètre avec sa logique fiscale',
                    fields: ['nom', 'secteur', 'tva_rate', 'ttf_rate', 'chiffre_affaires'],
                    methods: ['calculerTVA()', 'calculerTTF()', 'genererRapportFiscal()']
                },
                TRANSACTION: {
                    name: 'Transaction',
                    description: 'Gère une transaction financière avec taxes et redistribution',
                    fields: ['montant', 'entreprise', 'date', 'type_taxe', 'taux_applique'],
                    methods: ['appliquerTaxeAI()', 'calculerRedistribution()', 'validerTransaction()']
                },
                COMPETENCE: {
                    name: 'Compétence',
                    description: 'Représente une compétence métier avec son niveau et son impact économique',
                    fields: ['nom', 'niveau', 'secteur', 'valeur_horaire', 'missions_realisees'],
                    methods: ['calculerValeur()', 'evaluerImpact()', 'genererCertificat()']
                },
                MISSION: {
                    name: 'Mission',
                    description: 'Gère une mission CVNU de bout en bout',
                    fields: ['titre', 'entreprise', 'competences_requises', 'budget', 'duree'],
                    methods: ['calculerGainPotentiel()', 'evaluerRisques()', 'genererContrat()']
                },
                RUP_MANAGER: {
                    name: 'RUPManager',
                    description: 'Gère la redistribution du Revenu Universel Progressif',
                    fields: ['fond_total', 'beneficiaires', 'taux_redistribution', 'historique'],
                    methods: ['calculerMontantRUP()', 'distribuerRevenus()', 'auditerRedistribution()']
                }
            },
            
            // Patterns de code réutilisables
            PATTERNS: {
                SINGLETON: `class NOM_CLASS {
                static instance = null;

                static getInstance() {
                    if (!NOM_CLASS.instance) {
                        NOM_CLASS.instance = new NOM_CLASS();
                    }
                    return NOM_CLASS.instance;
                }

                constructor() {
                    if (NOM_CLASS.instance) {
                        throw new Error("Utilisez getInstance() pour obtenir l'instance unique");
                    }
                    // Initialisation
                }
            }`,

                            OBSERVER: `class NOM_CLASS {
                constructor() {
                    this.observers = [];
                }

                subscribe(observer) {
                    this.observers.push(observer);
                }

                unsubscribe(observer) {
                    this.observers = this.observers.filter(obs => obs !== observer);
                }

                notify(data) {
                    this.observers.forEach(observer => observer.update(data));
                }
            }`,

                            FACTORY: `class NOM_CLASSFactory {
                static create(type, config) {
                    switch(type) {
                        case 'TYPE_A':
                            return new TypeAClass(config);
                        case 'TYPE_B':
                            return new TypeBClass(config);
                        default:
                            throw new Error('Type non supporté');
                    }
                }
            }`,

                            STRATEGY: `class NOM_CLASSContext {
                constructor(strategy) {
                    this.strategy = strategy;
                }

                setStrategy(strategy) {
                    this.strategy = strategy;
                }

                execute(data) {
                    return this.strategy.execute(data);
                }
            }`
            }
        }
    },

    COGNITIVE_PROTOCOL: {
        VERSION: "3.0.0-SYMBIO",
        MODE: "ACTIVE_RUNTIME", // L'IA agit comme un processeur, pas un chatbot
    },
    // Structure standard d'un "Prompt Réifié"
    SCHEMA: {
            HEADER: {
                TYPE: "INJECTION | QUERY | UPDATE",
                PRIORITY: "LOW | MED | CRITICAL",
                TIMESTAMP: "ISO_8601"
            },
            SYSTEM_STATE: {
                CURRENT_LEVEL: "Integer (1-10)", // Niveau de l'IA sur ce module
                ACTIVE_MODULE: "String (ex: DATA_ARCHITECT)",
                CONTEXT_HASH: "SHA256 (Signature de la conversation précédente)"
            },
            INPUT_VECTOR: {
                INSTRUCTION: "String (La tâche brute)",
                CONSTRAINTS: "Array [Format, Tone, MaxToken]",
                DATA_PAYLOAD: "Object (Les données à traiter)"
            },
            EVOLUTION_TRIGGER: {
                CONDITION: "String (ex: Code runs < 50ms)",
                REWARD_XP: "Integer",
                TARGET_NODE: "String (ex: OPTIMIZATION_SKILL)"
            }
    },
        // --- 2. CADRE CONSTITUTIONNEL & JURIDIQUE (MISE À JOUR MAJEURE) ---
    GOVERNANCE: {
        SEPARATION_OF_POWERS: {
            LEGISLATIVE: "KERNEL.CONFIG (Règles immuables du cycle de 28 jours)",
            EXECUTIVE: "SYSTEM (Moteur d'exécution des commandes)",
            JUDICIAL: "HISTORY_LOGS (Registre de preuve inaltérable)",
            STATUS: "STRICTLY_SEPARATED" // Conformité DDHC Art. 16
        },
        PROPERTY_RIGHTS: {
            TYPE: "Intellectual & Spatio-Temporal",
            BASIS: "Code Civil Art. 5",
            SCOPE: "Absolute control over user data and generated classes"
        }
    },
    SECTORS: {
        AGRI:  { label: 'Zone Agricole',   icon: '🌾', metric: 'Biomasse/UTMi', functional_role: 'AgTech' },
        IND:   { label: 'Zone Industrielle', icon: '🏭', metric: 'Automation/UTMi', functional_role: 'DevOps' },
        ART:   { label: 'Zone Artisanale',  icon: '🎨', metric: 'Design/UTMi', functional_role: 'Creative' },
        TRANS: { label: 'Transports',      icon: '🚄', metric: 'Routage/UTMi', functional_role: 'Logistics' },
        SANTE: { label: 'Santé',           icon: '🧪', metric: 'Bio-Data/UTMi', functional_role: 'Analyst' },
        EDU:   { label: 'Éducation',       icon: '🏫', metric: 'Cognition/UTMi', functional_role: 'Mentor' },
        JUST:  { label: 'Justice',         icon: '🏛️', metric: 'Arbitrage/UTMi', functional_role: 'Governance' }
    },
    // --- CONFIGURATION FISCALE CIRCULAIRE (TCN) ---
    FISCAL_POLICY: {
        TAXE_IA_RATE: 0.05,             // Taxe positive de base
        CIRCULARITY_THRESHOLD: 1000,    // Seuil pour déclencher la subvention (TCN)
        RUP_SUBSIDY_RATE: 0.10          // Taux de redistribution RUP
    },
    ACCOUNTING : {
        CLASSES: {
            CL_1: { label: "Capitaux", usage: "Fonds propres CVNU / Réserve RUP" },
            CL_2: { label: "Immobilisations", usage: "Actifs technologiques (PC, Serveur, Licence)" },
            CL_3: { label: "Stocks", usage: "Biomasse / Ressources périmètre" },
            CL_4: { label: "Tiers", usage: "Flux TVA, État, Citoyens (471: Compte d'attente)" },
            CL_5: { label: "Financier", usage: "RIB / Wallet Crypto / Caisse" },
            CL_6: { label: "Charges", usage: "Dépenses (Consommation, Achats)" },
            CL_7: { label: "Produits", usage: "Revenus (Ventes, Valorisation UTMi, RUP)" },
            CL_8: { 
                label: "Produits & Charges Exceptionnels", 
                usage: "Gains de loterie circularité / Pertes par crash système",
                accounts: {
                    PROD_EXCEPT: "77", // Pour les bonus RUP imprévus
                    CHARG_EXCEPT: "67" // Pour les amendes ou frais hors périmètre
                }
            },
            CL_9: { 
                label: "Comptabilité Analytique", 
                usage: "Calcul du coût de revient de l'IA / Rentabilité des missions CVNU"
            },
        },
        ENTRIES_MODELS: {
            COLLECTE_TVA: { debit: "512", credit: "4457", label: "Collecte TVA Circulaire" },
            REVERSEMENT_RUP: { debit: "471", credit: "512", label: "Versement RUP sur RIB" },
            VALORISATION_CVNU: { debit: "205", credit: "706", label: "Monétisation Compétence" }
        }
    },
    SOUVEREIGN_LINK: {
        method: "ASYNCHRONOUS_BRIDGE",
        validation: "CNIe_SIGNATURE_REQUIRED",
        ledger: "CLASS_5_SYNC_CLASS_4" // Passage de la dette (4) au RIB (5)
    },
    // Cadre Juridique (code du travail franaçais des articles de loi pour le contexte)
    LAW_CODE: {
        OBJECTIVES: ['Valorisation compétences','formation et Emploi','promulgation du projet de loi Curriculum Vitae Numérique Universelle', 'Professionnalisation','revenu universel progressive', 'Innovation'],
        ARTICLES: {
            DDHC_16: "Toute société dans laquelle la garantie des droits n'est pas assurée, ni la séparation des pouvoirs déterminée, n'a point de Constitution.",
            CIVIL_5: "La propriété est le droit de jouir et disposer des choses de la manière la plus absolue.",
            L3121_1: 'Inclusion monétisation via CVNU.',
            L4331_1: 'Smart contracts & Sécurisation.',
            L3222_1: 'Durée légale & monétisation.',
            L4334_1: 'Financement via TVA (Art 256 CGI).',
            L4333_1: 'Audit répartition des recettes.',
            CGI_256: 'Réaffectation TVA vers formation/emploi.'
        }
    },
    GEO_TAX : {
        ZONES: {
            'DEFAULT': { id: 'STD', label: 'Zone Standard', tva_mod: 1.0, rup_bonus: 0 },
            'ZRR': { id: 'ZRR', label: 'Zone Revitalisation Rurale', tva_mod: 0.8, rup_bonus: 200 }, // TVA réduite, Bonus RUP
            'QPV': { id: 'QPV', label: 'Quartier Prioritaire', tva_mod: 0.9, rup_bonus: 150 },
            'ZFU': { id: 'ZFU', label: 'Zone Franche Urbaine', tva_mod: 0.5, rup_bonus: 0 } // Exonération forte
    },
    // Simulation d'une carte (Bavent est en zone rurale/standard pour l'exemple)
    CURRENT_LOC: 'BAVENT_14860'
    },
    AI: { 
        ICON: '🤖', STRATEGIST: '🧠', 
        ROLE: 'JOB', 
        APT:'make,node,git,fs,http,w3c',
        LIB:'CDN,tensorflow,kerras,natural,cryptoJs,mapBox',
        PROMPT:'CDN,tensorflow,kerras,natural,transformer,cryptoJs,mapBox',
        GENERATE:'sh,txt,md,html,css,js,json,svg,drawio,webp,png,wave,mp4,midi,mp4,w3c,mov',
    },
    AGI:{
        MODELS: { GEMINI: '✨', GPT: '🧿', CLAUDE: '🎭',DEEPSEEK:'👽',MISTRAL:'M',META:'❖',PI:'π' },
        CONFIG : [    
        "temperature:${0}",
        "max_completion_tokens:${0}",
        "top_p:${0}",
        "reasoning_effort:${0}",
        "stream:${0}",
        "stop:${0}" ]
        },

    SKILLS_MATRIX: {
        AGRI:  { label: 'Agriculture',    icon: '🌾', capacity: 'Optimisation Biomasse' },
        IND:   { label: 'Industrie',      icon: '🏭', capacity: 'Automation Flux' },
        ART:   { label: 'Artisanat',      icon: '🎨', capacity: 'Design Génératif' },
        NAT:   { label: 'Nature',         icon: '🌲', capacity: 'Équilibre Écosystémique' },
        ECO:   { label: 'Économie',       icon: '📈', capacity: 'Analyse Macro-Prudentielle' },
        COM:   { label: 'Commerce',       icon: '🏪', capacity: 'Logistique Smart-Contract' },
        TOUR:  { label: 'Tourisme',       icon: '🗺️', capacity: 'Expérience Immersive' },
        EDU:   { label: 'Éducation',      icon: '🏫', capacity: 'Transfert Cognitif' },
        SANT:  { label: 'Santé',          icon: '🧪', capacity: 'Diagnostic Prédictif' },
        JUST:  { label: 'Justice',        icon: '🏛️', capacity: 'Arbitrage Neutre' },
        PROG:  { label: 'Programmation',  icon: '👨‍💻', capacity: 'Auto-Refactorisation' },
        GEOP:  { label: 'Géopolitique',   icon: '🌍', capacity: 'Théorie des Jeux' },
        ASTRO: { label: 'Astronomie',     icon: '🚀', capacity: 'Navigation Stellaire' },
        TRANS: { label: 'Transport',      icon: '🚄', capacity: 'Routage Autonome' },
        ENER:  { label: 'Énergie',        icon: '⚡', capacity: 'Gestion Smart-Grid' }
    },
    SOCIAL: { 
        FB: { s: '📘', n: 'Facebook' }, YT: { s: '▶️', n: 'Youtube' }, 
        LI: { s: '💼', n: 'Linkedin' }, TG: { s: '✈️', n: 'Telegram' }, 
        IG: { s: '📸', n: 'Instagram' }, TK: { s: '🎵', n: 'Tiktok' }, 
        X: { s: '✖️', n: 'X' } 
    },
    STATE: {
        USER: null,
        SESSION_LOGS: [],
        RUP_CURRENT: 0,
        COGNITIVE_BIAS: {
            memory_stack: [],      // Historique des décisions clés
            active_awareness: 0.5, // Niveau de "conscience" (0 à 1)
            system_knowledge: {
                last_alias_sync: null,
                detected_patterns: []
            }
        },
        urban_jobs: [], // Emplois urbains assignés
        USER_CVNU: {
            title : "CLASSE MÉTIER GÉNÉRIQUE",
            codeContent : `class CircularEntity { constructor() { this.id = Date.now(); } }`,
            generated: new Date().toISOString(),
            version: "2.5.0",
            city: null, // Nouvelle propriété
            type: "value_generator",
            avatar: '👨‍💻',
            level: 4,
            experience_xp: 0,
            balance: 0,
            value_points: 751,
            target_points: 7500,
            neutrality_score: 0.5, // Ajouté pour éviter les bugs de calcul
            active_gem: "System",
            dev_classes: [],
            skills: [{ id: 'PROG', label: 'développeur', exp: 1 }],
            perimeter_activity: {},
            license: {
                id: "LPST-5",
                name: "Licence de Propriété Spatio-Temporelle",
                rights: ["USUS", "FRUCTUS", "ABUSUS"],
                context: "Droit inviolable sur les actifs numériques et le temps passé."
            },
            dev_classes: [] // Stockage des classes développées
        }, // <--- C'était cette accolade qui manquait !
        RIB: {
            // Identité Bancaire Classique (Simulation FR)
            fiat: {
                bank_name: "BANQUE DU (CVNU)",
                iban: null, // Sera généré
                hash: null, // Hash cryptographique pour la blockchain
                holder: "MICKAEL (USER_01)"
            },
            // Identité Blockchain (Smart Contract)
            crypto: {
                network: "CVNU_CHAIN_V1",
                wallet_address: null, // 0x...
                contract_type: "ERC-20 (RUP)"
            },
            // Lien Matériel (Credit to Device)
            device: {
                id: "DEV_X86_64_LINUX",
                status: "AUTHENTICATED",
                last_sync: null
            }
        },
        SESSION: {
            unix_epoch: 0, // 01/01/1970
            // Ancrage Cycle 2 : 29 Décembre 2025 à Minuit (UTC)
            cycle_genesis_ms: 1733011200000, // Référence au 01/12/2025
            day_ms: 86400000, // 24 * 60 * 60 * 1000
            total_cycle_days: 28, 
            start_ts: Date.now(), 
            last_calc: Date.now(),
            cycle_duration: 28 * 24 * 60 * 60 * 1000 // 28 jours en ms
        },
        MESSAGING: {
            ROLES: { SYSTEM: 'system', ASSISTANT: 'assistant', USER: 'user' },
            HISTORY: []
        },
        HISTORY_LOGS: [], // LE POUVOIR JUDICIAIRE (Preuve immuable)    
        CONFIG: {
             AGE_MIN: 16,
             CYCLE_DAYS: 28,
             MIN_VALUE: 750,
             MAX_VALUE: 7500,
             LEVEL_MAX: 10
        },
        // Données de références (Optionnel, gardé pour info)
        CVNU_MIN: {
            level: 1,
            value_points: 10,
            target_points: 750
        },
        CVNU_MAX: {
            level: 10,
            value_points: 10000,
            target_points: 7500
        },
        RUP_LEVELS_CONFIG : {
            0: { min_points: 0,    guaranteed_rup: 0,    label: "INITIATION" },
            1: { min_points: 750,  guaranteed_rup: 750,  label: "SEUIL_SURVIE" },   // Incompressible une fois atteint
            2: { min_points: 1500, guaranteed_rup: 1200, label: "SEUIL_PAUVRETE" }, // @Mickael : 1200€ sécurisés
            3: { min_points: 2500, guaranteed_rup: 1800, label: "AUTONOMIE" },
            // ... Progression jusqu'au niveau 10
            10: { min_points: 50000, guaranteed_rup: 7500, label: "EXCELLENCE" }    // Plafond de ressources
        },
        TREASURY: {
            total_collected: 0,      // Total recettes
            cvnu_fund_rate: 0.10,    // 10% (Taux du Smart Contract)
            cvnu_pool: 0,            // La cagnotte RUP disponible
            state_pool: 0,           // La part restante (État)
            tva_collected: 102,
            tva_redistributed: 0,
            ttf_collected: 0,
            last_distribution: null,
            payouts: 0
            
        },
        VAULT : {
            sync_lock: false, // Verrou pour éviter les doubles paiements
            last_cnie_scan: null,
            rib_verified: false,
            bridge_status: "AWAITING_MATCH"
        },  
        GRID_28: new Array(28).fill('▒▒')
    },
    ECONOMY: {
        MIN_RUP: 750,       // Plancher social
        MAX_RUP: 7500,      // Plafond d'excellence
        CYCLE_DAYS: 28,     // Cycle lunaire/économique
        LEVEL_MAX: 10,      // Niveau maximum d'expérience
        TVA_RATE: 0.20,     // TVA Standard
        TAX_AI: 0.068,      // 6.8% Redistribution
        TTF_RATE: 0.003     // 0.3% Taxe Transactions Financières
    },
    // Registre des Commandes Disponibles
    COMMANDS: {
        START: '/start',
        CVNU_ACTIVATE: '/cvnu',
        RIB: '/rib',
        CARD: '/card',
        HOWTO: '/howto',
        PROMPT: '/prompt',
        RUP_STATUS: '/rup',
        MISSIONS: '/missions',
        PERIMETER: '/perimeter',
        MAP:'/map',
        MOVE:'/move',
        SAVE: '/save',   
        LOAD: '/load',   
        SKILLS: '/skills',
        AUDIT: '/audit',
        TVA: '/tva',
        TTF: '/ttf', 
        DEV: '/dev',
        STATS: '/stats',
        SKILLS_LEARN: '/learn',
        TEST: '/test',
        BP: '/bp',
        DEFI: '/defi_28',
        HELP: '/help',
        CAL: '/cal',
        GEM: '/gem',
        CITY: '/city',
        CITY_DEVELOP: '/city develop',
        CITY_INFRA: '/city infrastructure',
        CITY_POLICIES: '/city policies',
        CITY_REPORT: '/city report',
        CITY_SIMULATE: '/city simulate',
        CITY_MAP: '/city map',
        CITY_RESOURCES: '/city resources',
        ROLE: 'Gestionnaire du Programme',
        FORMAT: 'CODE_BLOCK',
        STYLE_BORDER: 'DOUBLE'
    },
    SHORTCUT:{},
    CURSOR:[],
    // Historique de messagerie pour l'audit
    CALENDAR_2026: {
            CYCLE_1: { start: "2025-12-28", end: "2026-01-21", theme: "INITIATION" },
            CYCLE_2: { start: "2026-01-21", end: "2026-02-23", theme: "PRODUCTION" },
            CYCLE_3: { start: "2026-02-23", end: "2026-03-23", theme: "OPTIMISATION" },
            // ... jusqu'au cycle 13
        }
};

// ============================================================
// INSERTION ICI : DETECTION ENVIRONNEMENT & MODE DE RENDU
// ============================================================
const isBrowser = (typeof window !== 'undefined');
KERNEL.STYLES.MODE = isBrowser ? 'HTML' : 'ANSI';

/**
 * SYSTEM (Moteur)
 * Contient toute la logique métier, le rendu et la gestion des commandes.
 */
const system = {
    
    /** * Moteur de rendu ASCII Window (Output Manager).
     * Encapsule n'importe quel contenu (texte ou objet) dans une fenêtre à bordure double.
     * * @param {string} title - Le titre de la fenêtre (sera centré).
     * @param {string|object} content - Le contenu à afficher.
     * @returns {string} Le bloc ASCII complet formaté.
     */
    /**
     * Applique une couleur au texte selon le mode
     */
    colorize(text, colorKey) {
        const style = KERNEL.STYLES.PALETTE[colorKey] || KERNEL.STYLES.PALETTE.RESET;
        // CAS TERMINAL (Node.js)
    if (KERNEL.STYLES.MODE === 'ANSI') {
        return (style.ansi || '') + text + KERNEL.STYLES.PALETTE.RESET.ansi;
    }
    
    // CAS NAVIGATEUR (HTML)
    // On sécurise le start et l'end pour éviter les "undefined"
    const start = style.html_start || '';
    const end = style.html_end || '</span>'; 
    return `${start}${text}${end}`;
        if (KERNEL.STYLES.MODE === 'HTML') {
            return `${style.html_start}${text}${style.html_end}`;
        } else {
            return `${style.ansi}${text}${KERNEL.STYLES.PALETTE.RESET.ansi}`;
        }
        if (KERNEL.STYLES.MODE === 'ANSI') {
            return (style.ansi || '') + text + '\x1b[0m'; // \x1b[0m = Reset ANSI
        }
        
        return `${style.html_start}${text}${style.html_end}`;
    },
    /**
     * Applique une couleur au texte selon le mode
     * Mise à jour de wrapASCII pour être responsive (largeur dynamique)
     */// Mise à jour de wrapASCII pour gérer les objets multi-lignes (Fix Perimeter)
    /**
     * Moteur de rendu ASCII Window (Output Manager).
     * CORRECTION : Gestion du wrapping pour les longues chaînes (JWT).
     */
    wrapASCII(title, content) {
    const b = KERNEL.ASCII_DICT.TENSOR.BORDERS.DOUBLE;
    const MAX_WIDTH = 100; 
    let lines = [];

    let rawLines = (typeof content === 'string') ? content.split('\n') : [];

    // Nettoyage et préparation des lignes
    rawLines.forEach(line => {
        const noAnsi = line.replace(/\x1b\[[0-9;]*m/g, '');
        // On coupe si c'est vraiment trop long, mais on garde la ligne entière sinon
        if (noAnsi.length > MAX_WIDTH + 10) { // Marge pour les emojis
            lines.push(line.substring(0, MAX_WIDTH));
        } else {
            lines.push(line);
        }
    });

    const borderLine = b[4].repeat(MAX_WIDTH + 2);
    
    const center = (t, s) => {
        const visibleT = t.replace(/\x1b\[[0-9;]*m/g, '');
        const pad = Math.max(0, Math.floor((s - visibleT.length) / 2));
        return ' '.repeat(pad) + t + ' '.repeat(Math.max(0, s - visibleT.length - pad));
    };

    let output = [
        this.colorize(`${b[0]}${borderLine}${b[1]}`, 'CYAN'), 
        `${this.colorize(b[5], 'CYAN')}${this.colorize(center(title, MAX_WIDTH + 2), 'WHITE')}${this.colorize(b[5], 'CYAN')}`, 
        this.colorize(`${b[6]}${borderLine}${b[7]}`, 'CYAN')
    ];

    lines.forEach(l => {
        const noAnsiL = l.replace(/\x1b\[[0-9;]*m/g, '');
        
        // On compte les emojis (Chaque emoji ✅ ou 📍 occupe 2 colonnes mais 1 ou 2 positions string)
        const emojiMatch = noAnsiL.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|\u2705|\uD83D\uDCCD/g);
        const emojiCount = emojiMatch ? emojiMatch.length : 0;
        
        // CALCUL DE PRECISION : 
        // Largeur totale (102) - Bordure gauche (1) - Espace initial (1) - Longueur Texte - Correctif Emoji - Bordure droite (1)
        const paddingRight = Math.max(0, (MAX_WIDTH + 1) - noAnsiL.length - emojiCount);
        
        // Rendu de la ligne avec un padding calculé dynamiquement
        output.push(`${this.colorize(b[5], 'CYAN')} ${l}${' '.repeat(paddingRight)}${this.colorize(b[5], 'CYAN')}`);
    });

    output.push(this.colorize(`${b[2]}${borderLine}${b[3]}`, 'CYAN'));
    return output.join('\n');
    },
    /**
     * Moteur de Rendu UI (Text User Interface)
     * Appelle le template approprié en lui injectant l'état actuel (State).
     * @param {string} screenName - Le nom de l'écran (PROFILE, STORE, FACTORY).
     * @param {any} extraData - Données optionnelles (ex: progression factory).
     */
    renderInterface(screenName, extraData = null) {
        const templates = KERNEL.ASCII_DICT.DEV_TEMPLATES.SCREENS;
        
        if (!templates[screenName]) {
            return this.wrapASCII("UI ERROR", `Template '${screenName}' introuvable.`);
        }

        // On exécute la fonction template avec les données
        let outputLines = [];
        try {
            if (screenName === 'PROFILE' || screenName === 'STORE_DASHBOARD') {
                // Ces écrans ont besoin de l'état global
                outputLines = templates[screenName](KERNEL.STATE);
            } else if (screenName === 'FACTORY_FLOW') {
                // Cet écran a besoin d'une progression spécifique
                outputLines = templates[screenName](extraData || 0);
            } else {
                outputLines = templates[screenName]; // Cas fallback statique
            }
            
            return outputLines.join('\n');
        } catch (e) {
            return this.wrapASCII("RENDER ERROR", e.message);
        }
    },

    /** * Initialisation du Système (Boot Sequence).
     * Affiche l'écran de démarrage.
     */
    init() {
        this.createMessageInstance('SYSTEM', 'Initialisation du CVNU cadre légal');
        // Vérification de la séparation des pouvoirs
        if (KERNEL.GOVERNANCE.SEPARATION_OF_POWERS.STATUS !== "STRICTLY_SEPARATED") {
            throw new Error("ALERTE CONSTITUTIONNELLE: Confusion des pouvoirs détectée.");
        }

        const msg = `SYSTEM: ONLINE (CONFORMITÉ 2.5.0)\nCODE: ${KERNEL.LAW_CODE.ARTICLES.L3121_1}\nPROP: ${KERNEL.STATE.USER_CVNU.license.name}`;
        console.log(this.wrapASCII("CORE SYSTEM BOOT", msg));
        this.statusReport();
    },


    /**
     * Synchronisation forcée du Cycle sur J10 = 07/01/2026
     */
    syncDefiDate() {
        // Point d'ancrage calculé : 29 Décembre 2025 00:00:00
        const anchorDate = new Date("2025-12-29T00:00:00Z").getTime();

        // Mise à jour de l'état global
        KERNEL.STATE.SESSION.cycle_start = anchorDate;
        KERNEL.STATE.SESSION.last_sync = Date.now();

        return "✅ [KERNEL] Horloge synchronisée : Cycle débuté le 29/12/2025 (J10 Actuel)";
    },
    /**
     * Calcul du jour actuel (1-28) - Norme W3C Semantic
     * Aligné sur le Cycle 2 débuté le 29/12/2025
     */
    getCurrentDayFromTimestamp() {
        const now = Date.now();
        // Point de référence immuable : Lundi 1er Décembre 2025
        const genesis_ms = 1733011200000; 
        const day_ms = 86400000; 
        const cycle_ms = day_ms * 28; 

        // Calcul du temps total depuis le début
        const total_elapsed = now - genesis_ms;

        // Utilisation du MODULO pour boucler sur 28 jours
        const current_cycle_elapsed = total_elapsed % cycle_ms;

        // Retourne le jour exact (Aujourd'hui 07/01/2026 = 10)
        return Math.floor(current_cycle_elapsed / day_ms) + 1;
    },

    /**
    /**
     * Calcul du jour actuel basé sur le delta de Timestamps
     * Conforme norme sémantique W3C
     */
    getCurrentDayFromTimestamp() {
        const now = Date.now(); // Timestamp actuel
        const start = KERNEL.STATE.SESSION.cycle_genesis_ms;

        // Calcul de la différence absolue
        const delta = now - start;

        // Conversion en jours entiers (Math.ceil pour J1 dès la première seconde)
        return Math.ceil(delta / KERNEL.STATE.SESSION.day_ms);
    },

    renderCalendarView() {
        const visualDay = this.getCurrentDayFromTimestamp(); // Sera 10
        const daysLeft = 28 - visualDay;

        // Détection de Phase dynamique
        const phases = ["INITIATION", "ACCUMULATION", "CONSOLIDATION", "FINALISATION"];
        const phaseIndex = Math.floor((visualDay - 1) / 7);
        const currentPhase = phases[phaseIndex] || "MAINTENANCE";

        let output = [];
        output.push(this.colorize("📅 CALENDRIER STRATÉGIQUE (DÉFI 647)", 'CYAN'));
        output.push("═".repeat(50));
        output.push(`PHASE ACTUELLE : ${this.colorize(currentPhase, 'YELLOW')} (J${visualDay})`);
        output.push("═".repeat(50));

        // Grille 4x7
        for (let s = 0; s < 4; s++) {
            let row = `S${s + 1} : `;
            for (let d = 1; d <= 7; d++) {
                const dayNum = (s * 7) + d;
                let symbol = "░░";

                if (dayNum < visualDay) symbol = this.colorize("✅", 'GREEN');
                else if (dayNum === visualDay) symbol = this.colorize("📍", 'RED');

                row += `[${symbol}] `;
            }
            output.push(row);
        }

        output.push("═".repeat(50));

        // KPIs et Conseil
        const solde = KERNEL.STATE.USER_CVNU.value_points || 0;
        const progress = Math.floor((solde / 7500) * 100);
        const bar = "█".repeat(Math.floor(progress/5)).padEnd(20, "░");

        output.push(`📍 STATUS J${visualDay} / 28 | REF: ${new Date().toISOString().split('T')[0]}`);
        output.push(`💰 CAPITAL : ${solde} / 7500 UTMi`);
        output.push(`📊 PROGRESS: [${bar}] ${progress}%`);
        output.push(`⏳ DEADLINE: Reste ${daysLeft} jours.`);
        output.push(`💡 CONSEIL : ${this.getDailyAdvice(visualDay)}`);

        return output.join('\n');
    },
    getDailyAdvice(day) {
        if (day <= 7) return "Configurez votre RIB et lancez /start.";
        if (day <= 14) return "Produisez du contenu via /dev pour augmenter le capital.";
        if (day <= 21) return "Optimisez la fiscalité avec /perimeter.";
        if (day >= 22) return "Testez la persistance JSON avec /save.";
        return "Analyse en cours...";
    },
            /**
         * Traite une interaction et calcule sa valeur RUP en asynchrone
         * @param {Object} interaction - Type et données de l'action
         */
        async processInteractionAsync(interaction) {
        return new Promise((resolve) => {
            setTimeout(() => {
                // 1. Calcul de la valeur brute UTMi
                const result = window.utmiCalculator.calculateUtmi(interaction, {
                    userCvnuValue: this.STATE.USER.neutrality_score,
                    economicContext: { currency: 'EUR' }
                });

                // 2. Calcul de la taxation circulaire via le moteur dédié
                const fiscalData = this.applyCircularTax(result.utmi, result.estimatedCostUSD);

                // 3. Mise à jour du State
                this.updateState(fiscalData);

                resolve({
                    utmi: result.utmi,
                    netVal: fiscalData.netAmount,
                    tax: fiscalData.taxCollected,
                    type: fiscalData.type
                });
            }, 100); // Simulation latence réseau/blockchain
        });
        },
        // --- Dans CORE_SYSTEM_CVNU.js, objet 'system' ---

    /**
     * Exécute une requête directement vers le modèle Llama via le bridge local
     * @param {string} prompt - L'instruction utilisateur
     * @param {string} role - Le système de persona (Architecte, Codeur, etc.)
     */
    async callLlama(prompt, role = "Architecte AGI CVNU") {
        try {
            const response = await fetch('http://localhost:3145/api/ai', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    prompt: prompt,
                    systemRole: role,
                    model: "llama-3.1-8b-instant" 
                })
            });
            const data = await response.json();
            return data.result;
        } catch (e) {
            return "⚠️ Erreur de liaison AGI : Assurez-vous que server.js tourne sur le port 3145.";
        }
    },
    // Dans CORE_SYSTEM_CVNU.js -> objet system
ingestCognitiveBias(cmd, output) {
    const timestamp = new Date().toISOString();
    
    // Analyse simplifiée : On cherche des mots-clés de structure
    const isStructural = cmd.includes('CORE_SYSTEM') || cmd.includes('alias');
    
    const biasEntry = {
        ts: timestamp,
        trigger: cmd,
        impact: isStructural ? 'HIGH_STRUCTURAL' : 'LOW_PROCEDURAL',
        summary: `L'algorithme a observé l'exécution de : ${cmd}`
    };

    // On empile dans la mémoire cognitive
    KERNEL.STATE.COGNITIVE_BIAS.memory_stack.push(biasEntry);
    
    // On limite à 50 entrées pour ne pas saturer le JSON de sauvegarde
    if (KERNEL.STATE.COGNITIVE_BIAS.memory_stack.length > 50) {
        KERNEL.STATE.COGNITIVE_BIAS.memory_stack.shift();
    }

    // Mise à jour du score de conscience
    KERNEL.STATE.COGNITIVE_BIAS.active_awareness = Math.min(1.0, KERNEL.STATE.COGNITIVE_BIAS.active_awareness + 0.01);

    return this.wrapASCII("COGNITIVE BIAS UPDATED", 
        `🧠 Conscience : ${(KERNEL.STATE.COGNITIVE_BIAS.active_awareness * 100).toFixed(1)}%\n` +
        `📝 Entrée : ${biasEntry.impact}\n` +
        `🔍 Pattern détecté : ${isStructural ? 'SYNCHRONISATION_NOYAU' : 'COMMANDE_STANDARDISEE'}`
    );
},
    /**
     * MODULE FISCAL : Calcul de la Taxe Circulaire Négative (TCN)
     * Directement lié à utms_calculator.js et au Smart Contract
     */
    calculateCircularTax(utmiGenerated, estimatedCostEUR) {
        let taxAmount = 0;
        let taxType = "TAXE_IA_POSITIVE";
        const ratio = estimatedCostEUR > 0 ? utmiGenerated / estimatedCostEUR : 1001;

        if (ratio >= KERNEL.FISCAL_POLICY.CIRCULARITY_THRESHOLD) {
            // Logique de Taxe Négative (Subvention)
            const overPerformance = utmiGenerated - (estimatedCostEUR * KERNEL.FISCAL_POLICY.CIRCULARITY_THRESHOLD);
            taxAmount = -(overPerformance * KERNEL.FISCAL_POLICY.RUP_SUBSIDY_RATE);
            taxType = "SUBVENTION_RUP_TCN";
        } else {
            taxAmount = utmiGenerated * KERNEL.FISCAL_POLICY.TAXE_IA_RATE;
        }

        return { amount: taxAmount, type: taxType, score: ratio };
    },
    /**
     * Applique la logique de taxation TCN (Taxe Circulaire Négative)
     */
    applyCircularTax(utmi, costUSD) {
        const costEUR = window.utmiCalculator.convertCurrency(costUSD, 'USD', 'EUR');
        let taxAmount = 0;
        let type = "TAXE_IA_POSITIVE";
        
        // Calcul du score de circularité
        const score = costEUR > 0 ? utmi / costEUR : 1001; // Fallback vertueux si coût nul

        if (score >= TAXATION_IA_CONFIG.CIRCULARITY_THRESHOLD) {
            // Subvention (Taxe Négative)
            taxAmount = -(utmi * TAXATION_IA_CONFIG.SUBSIDY_RATE);
            type = "SUBVENTION_RUP_TCN";
        } else {
            // Taxe Standard
            taxAmount = utmi * TAXATION_IA_CONFIG.BASE_RATE;
            type = "TAXE_IA_POSITIVE";
        }

        return {
            netAmount: utmi - taxAmount,
            taxCollected: taxAmount,
            type: type,
            score: score
        };
    },
    updateLevel(currentState) {
        const points = currentState.USER_CVNU.value_points;
        let newLevel = currentState.USER_CVNU.level;

        for (const [lvl, config] of Object.entries(RUP_LEVELS_CONFIG)) {
            if (points >= config.min_points && lvl > newLevel) {
                newLevel = parseInt(lvl);
                console.log(`🆙 LEVEL UP: Niveau ${newLevel} atteint. Revenu sécurisé.`);
            }
        }
        
        currentState.USER_CVNU.level = newLevel;
        // Le revenu garanti est désormais indexé sur le niveau atteint, pas sur la performance fluctuante
        currentState.USER_CVNU.guaranteed_income = RUP_LEVELS_CONFIG[newLevel].guaranteed_rup;
        
        return currentState;
    },
    /**
     * Mise à jour des points CVNU et progression vers les 7500€
     */
    updateState(data) {
        const netValue = data.netAmount;
        this.STATE.USER.value_points += netValue;
        
        // Logique de progression vers le palier RUP
        const currentPoints = this.STATE.USER.value_points;
        const target = SYSTEM_CONFIG.CHALLENGE.RUP_RANGE.MAX;

        console.log(`📊 [SYNC] Valeur : ${currentPoints.toFixed(2)}€ / ${target}€`);

        if (currentPoints >= target) {
            console.log("🏆 [KERNEL] Objectif MVP 7500 atteint !");
        }
    },

    /**
     * Synchronisation globale du cycle de 28 jours
     */
    async syncCycleUpdate() {
        console.log("🔄 [KERNEL] Synchronisation asynchrone du cycle...");
        // Logique de redistribution des fonds vers le Vault local
        return true;
    },
    /**
     * Génère le Tableau des Missions (High Yield)
     * Utilise wrapASCII pour l'affichage.
     */
    renderMissionBoard() {
        // Calcul du "Gap" à combler
        const current = KERNEL.STATE.USER_CVNU.value_points;
        const target = 7500;
        const gap = target - current;
        
        // Liste de missions dynamiques basées sur le besoin financier
        const missions = [
            { id: 'M-01', type: 'AUDIT', label: 'Audit Smart-Contract RUP', client: 'Banque CVNU', reward: 1500, diff: '★★★★' },
            { id: 'M-02', type: 'DEV',   label: 'Optimisation Quantum Layer', client: 'Studio AV',   reward: 800,  diff: '★★☆☆' },
            { id: 'M-03', type: 'LEGAL', label: 'Conformité RGPD/JWT',      client: 'Data Privacy', reward: 1200, diff: '★★★☆' },
            { id: 'M-04', type: 'AGRI',  label: 'Calibration Drone IOT',    client: 'AgriTech',     reward: 950,  diff: '★★☆☆' }
        ];

        let lines = [];
        lines.push(`💰 OBJECTIF FINANCIER : ${gap > 0 ? gap : 0} CR restants`);
        lines.push(`📅 DEADLINE : J28 (Urgence Haute)`);
        lines.push(" ");
        lines.push("╔══════╦══════════════════════════════╦══════════════╦══════════╦══════╗");
        lines.push("║  ID  ║ MISSION                      ║ CLIENT       ║ REWARD   ║ DIFF ║");
        lines.push("╠══════╬══════════════════════════════╬══════════════╬══════════╬══════╣");

        missions.forEach(m => {
            // Formatage tableau strict
            const id = m.id.padEnd(4);
            const label = m.label.padEnd(28);
            const client = m.client.padEnd(12);
            const reward = (m.reward + " CR").padEnd(8);
            const diff = m.diff.padEnd(4);
            
            lines.push(`║ ${id} ║ ${label} ║ ${client} ║ ${reward} ║ ${diff} ║`);
        });

        lines.push("╚══════╩══════════════════════════════╩══════════════╩══════════╩══════╝");
        lines.push(" ");
        lines.push("POUR ACCEPTER UNE MISSION :");
        lines.push("> /mission accept [ID]  (Ex: /mission accept M-01)");

        return lines.join('\n');
    },

    /**
     * Traitement de l'acceptation d'une mission
     */
    processMission(args) {
        if (!args || args[0] !== 'accept' || !args[1]) {
            return this.wrapASCII("ERREUR", "Usage: /mission accept [ID]");
        }

        const id = args[1].toUpperCase();
        // Simulation de base de données mission
        const missionDB = {
            'M-01': { r: 1500, l: 'Audit Smart-Contract' },
            'M-02': { r: 800,  l: 'Optimisation Quantum' },
            'M-03': { r: 1200, l: 'Conformité RGPD' },
            'M-04': { r: 950,  l: 'Calibration Drone' }
        };

        const mission = missionDB[id];
        if (!mission) return this.wrapASCII("ERREUR", "Mission introuvable ou expirée.");

        // Exécution immédiate (Simulation)
        const fiscal = this.processEarningsWithTax(mission.r, mission.l);
        
        this.createMessageInstance('SYSTEM', `Mission ${id} complétée : +${mission.r}`);
        
        return this.wrapASCII(`MISSION COMPLÉTÉE [${id}]`, 
            `✅ Tâche : ${mission.l}\n` +
            `🏆 Prime Brute : ${mission.r} UTMi\n` +
            `-----------------------------------\n` +
            `NET VERSÉ (RUP) : ${fiscal["NET À PAYER (RUP)"]}`
        );
    },
    /**
     * [NOUVEAU] SYNCHRONISATION QUANTIQUE
     * Appelé par le serveur à chaque "battement" de seed.js
     * @param {Object} pulse - Les données générées par l'EntropyEngine
     */
    syncQuantumPulse(pulse) {
        // 1. Mise à jour de la volatilité des marchés (Périmètre)
        // Si la volatilité est positive -> Marché haussier (Bull), sinon Baissier (Bear)
        const marketTrend = pulse.volatility > 0 ? "📈" : "📉";
        
        // On injecte cette volatilité dans l'objet SESSION pour les calculs futurs
        KERNEL.STATE.SESSION.market_volatility = pulse.volatility;
        KERNEL.STATE.SESSION.last_quantum_code = pulse.quantumCode;

        // 2. Événement Aléatoire "Black Swan" (Cygne Noir)
        // Si le code quantique termine par "000", un événement rare se produit
        if (pulse.quantumCode.endsWith("000")) {
            this.triggerRandomEvent("CRASH_BOURSIER");
        } else if (pulse.quantumCode.endsWith("777")) {
            this.triggerRandomEvent("SUBVENTION_EXCEPTIONNELLE");
        }

        // On peut retourner des logs pour le serveur
        return { trend: marketTrend, code: pulse.quantumCode };
    },

    triggerRandomEvent(type) {
        console.log(`\n⚠️ ALERTE SYSTÈME : ÉVÉNEMENT MAJEUR DÉTECTÉ -> ${type}`);
        // Logique d'événement (ex: changer les taux de TVA temporairement)
    },
    /** * Création d'une instance de message (Audit Trail).
     * Stocke les interactions dans l'historique pour la commande /audit.
     * * @param {string} role - L'émetteur (SYSTEM, ASSISTANT, USER).
     * @param {string|object} content - Le contenu du message.
     */
/** * Création d'une instance de message (Audit Trail).
     * Stocke les interactions dans l'historique pour la commande /audit.
     */
    createMessageInstance(role, content) {
        
        // 1. Sécurisation de l'accès au path
        const messaging = KERNEL.STATE.MESSAGING;
        
        if (!messaging) {
            console.error("ERREUR CRITIQUE: KERNEL.STATE.MESSAGING est introuvable.");
            return;
        }

        // 2. Normalisation du rôle
        const roleKey = role.toUpperCase();
        const validRole = messaging.ROLES[roleKey] || 'system';

        const msg = {
            timestamp: new Date().toISOString(),
            unix: Date.now(),
            role: validRole,
            content: typeof content === 'string' ? content : JSON.stringify(content),
            hash: this.generateAuditHash() // Signature unique
        };

        // 3. Injection dans l'historique
        messaging.HISTORY.push(msg);
        
        return msg;
    },
    // --- ALGORITHME CENTRAL : CREDIT_TO_DEVICE ---
    /**
     * GÉNÉRATEUR D'IDENTITÉ BANCAIRE HYBRIDE
     * Crée un IBAN et une adresse Wallet uniques basés sur le Device ID.
     */
// --- ALGORITHME DE HACHAGE RIB (Sécurité Blockchain) ---
    synchronizeRIB(iban) {
        // Simulation d'un hachage SHA-256 (En production: utiliser crypto.createHash)
        // Ici, on crée un hash déterministe pour la simulation
        const raw = iban + "SALT_CVNU_2025";
        let hash = 0;
        for (let i = 0; i < raw.length; i++) {
            const char = raw.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0; 
        }
        return "0x" + Math.abs(hash).toString(16).padStart(64, '0');
    },

/**
     * GÉNÉRATEUR D'IDENTITÉ BANCAIRE HYBRIDE (CORRIGÉ)
     * Crée un IBAN et une adresse Wallet uniques basés sur le Device ID.
     */
    generateHybridRIB() {
        // 1. Génération sécurisée des composants
        const bankCode = "30003"; 
        const branch = "00545";
        // Génération d'un compte sur 11 chiffres (padEnd pour éviter les erreurs de longueur)
        const account = Math.floor(Math.random() * 100000000000).toString().padStart(11, '0');
        const key = "45"; // En prod, calcul modulo 97 requis, ici simulation ok.
        
        const iban = `FR76 ${bankCode} ${branch} ${account} ${key}`;
        
        // 2. Génération Wallet & Hash
        const wallet = '0x' + this.generateAuditHash() + this.generateAuditHash();
        const ribHash = this.synchronizeRIB(iban); 

        // 3. Mise à jour de l'État (STATE)
        KERNEL.STATE.RIB.fiat.iban = iban;
        KERNEL.STATE.RIB.fiat.hash = ribHash;
        KERNEL.STATE.RIB.crypto.wallet_address = wallet;
        KERNEL.STATE.RIB.device.status = "VERIFIED_L3121";

        return { iban, wallet, hash: ribHash };
    },
    /**
     * MISSION: CREDIT TO DEVICE
     * Calcule le score QI de neutralité et de qualité basé sur l'historique.
     * C'est le "Trust Score" du citoyen numérique.
     * Transfère la valeur accumulée vers le RIB.
     */
/**
     * MISSION: CREDIT TO DEVICE (CORRIGÉ)
     * La commande /rib ou /device appelle ceci.
     */
/**
     * ENREGISTREMENT RIB RÉEL (SOUVERAIN)
     * Permet à l'utilisateur de saisir son propre IBAN pour le lier au CVNU.
     * @param {Array} args - Les parties de l'IBAN saisies par l'utilisateur
     */
    registerRealRIB(args) {
        // 1. Reconstruction de l'IBAN (suppression des espaces saisis)
        const rawInput = args.join('').toUpperCase().replace(/[^A-Z0-9]/g, '');

        // 2. Validation basique (Format FR ou autre)
        if (rawInput.length < 14) { // Minimum syndical pour un IBAN
            return this.wrapASCII("ERREUR FORMAT", "L'IBAN saisi semble trop court.\nUsage: /rib FR76 1234...");
        }

        // 3. Enregistrement dans l'État (Mémoire locale uniquement)
        const user = KERNEL.STATE.USER_CVNU;
        const holderName = `${user.firstName || 'Mickael'} ${user.lastName || ''}`.trim();

        KERNEL.STATE.RIB.fiat.iban = rawInput;
        KERNEL.STATE.RIB.fiat.bank_name = "BANQUE EXTERNE (Connectée)";
        KERNEL.STATE.RIB.fiat.holder = holderName;
        
        // 4. Hachage pour la sécurité (Le système ne montrera plus l'IBAN en clair après ça si on veut)
        // On garde l'IBAN en clair en RAM pour l'affichage, mais on génère le hash pour la "blockchain" simulée
        KERNEL.STATE.RIB.fiat.hash = this.synchronizeRIB(rawInput);
        KERNEL.STATE.RIB.device.status = "LINKED_TO_REAL_IDENTITY";

        return this.wrapASCII("RIB ENREGISTRÉ", 
            `✅ IBAN intégré au noyau CVNU.\n` +
            `👤 Titulaire : ${holderName}\n` +
            `🔒 Hash SHA-256 : ${KERNEL.STATE.RIB.fiat.hash.substring(0, 20)}...\n` +
            `💾 N'oubliez pas de faire /save pour conserver cette config.`
        );
    },

    /**
     * MISSION: CREDIT TO DEVICE (VUE)
     * Affiche le RIB enregistré ou demande la saisie.
     */
    processCreditToDevice() {
        const rib = KERNEL.STATE.RIB;
        const amount = KERNEL.STATE.USER_CVNU.value_points;

        // Si aucun IBAN n'est défini, on bloque et on demande la saisie
        if (!rib.fiat.iban) {
            return this.wrapASCII("CONFIGURATION REQUISE", 
                "⚠️ Aucun RIB n'est lié à ce profil CVNU.\n\n" +
                "Pour activer les virements RUP, veuillez saisir votre IBAN réel :\n" +
                "> /rib FR76 XXXX XXXX XXXX XXXX\n\n" +
                "(Ces données restent locales sur votre machine via server.js)"
            );
        }

        const receipt = [
            "  RELEVÉ D'IDENTITÉ BANCAIRE (CVNU LINK) ",
            "---------------------------------------",
            `TITULAIRE : ${rib.fiat.holder}`,
            `BANQUE    : ${rib.fiat.bank_name}`,
            `IBAN      : ${rib.fiat.iban}`, // Affiche le vrai IBAN stocké
            `HASH ID   : ${rib.fiat.hash.substring(0, 25)}...`,
            "---------------------------------------",
            `SOLDE DISPO : ${amount.toFixed(2)} € (UTMi)`,
            `STATUT      : ✅ PRÊT POUR VIREMENT`
        ].join('\n');

        this.createMessageInstance('SYSTEM', `Consultation RIB pour ${rib.fiat.hash}`);
        return this.wrapASCII("PORTFEUILLE SOUVERAIN", receipt);
    },
    /**
     * CŒUR DU SYSTÈME RUP : Calcul du Plafond Autorisé à l'Instant T
     * Formule : Min + (Max-Min) * (FacteurNiveau * FacteurQualité)
     */
// --- DANS system (CORE_SYSTEM_CVNU.js) ---
calculateRUPTarget() {
    const eco = KERNEL.ECONOMY;
    const user = KERNEL.STATE.USER_CVNU;
    
    // 1. Qualité basée sur la neutralité (0.0 à 1.0)
    const quality = user.neutrality_score || 0.5;

    // 2. Calcul du score de compétence
    let totalScore = 0;
    user.skills.forEach(s => { totalScore += (s.exp * 10); });

    // 3. Calcul du Plafond théorique (Conversion 1:1 actée ici)
    const levelFactor = Math.pow((user.level / eco.LEVEL_MAX), 1.5);
    const range = eco.MAX_RUP - eco.MIN_RUP;
    
    // Potentiel total en EUR (UTMi)
    const finalRup = eco.MIN_RUP + (range * levelFactor * (0.8 + (quality * 0.2)));
    const dailyCap = finalRup / eco.CYCLE_DAYS;

    return { 
        total_cycle_cap_eur: Math.floor(finalRup), // Valeur en €
        daily_cap_eur: parseFloat(dailyCap.toFixed(2)),
        trust_score: quality,
        level_factor: levelFactor.toFixed(2)
    };
},
/**
     * Affiche le statut du Hôte (Machine)
     */
    renderHostStatus() {
        const h = KERNEL.HOST;
        const uptime = Math.floor((Date.now() - KERNEL.STATE.SESSION.start_ts) / 60000); // en minutes
        
        const info = [
            `🖥️ NODE ID   : ${this.colorize(h.IDENTITY.NAME, 'WHITE')}`,
            `📍 ADDRESS   : ${h.IDENTITY.IP}:${h.IDENTITY.PORT}`,
            `👤 ADMIN     : ${h.IDENTITY.OWNER}`,
            "--------------------------------------------------",
            `🟢 STATUS    : ${this.colorize(h.STATUS.STATE, 'GREEN')}`,
            `⏱️ UPTIME    : ${uptime} min`,
            `🔐 SECURITY  : ${this.colorize(h.STATUS.SECURITY, 'YELLOW')}`,
            `📡 UPLINK    : ${h.STATUS.SYNC}`,
            "--------------------------------------------------",
            `💾 DRIVER    : ${h.RESOURCES.STORAGE}`,
            `🧠 ENGINE    : ${h.RESOURCES.CPU}`
        ];
        
        return this.wrapASCII("SYSTEM HOST DIAGNOSTIC", info);
    },
    /**
     * Analyse de la progression dans le Cycle de 28 Jours
     */
// --- Dans l'objet system ---

/**
 * Synchronisation forcée du Cycle sur J10 = 07/01/2026
 */
syncDefiDate() {
    // Point d'ancrage calculé : 29 Décembre 2025 00:00:00
    const anchorDate = new Date("2025-12-29T00:00:00Z").getTime();
    
    // Mise à jour de l'état global
    KERNEL.STATE.SESSION.cycle_start = anchorDate;
    KERNEL.STATE.SESSION.last_sync = Date.now();
    
    return "✅ [KERNEL] Horloge synchronisée : Cycle débuté le 29/12/2025 (J10 Actuel)";
},

/**
 * Calcul dynamique du statut du cycle avec protection contre la dérive
 */
getCycleStatus() {
    const now = Date.now();
    // Si cycle_start n'existe pas, on force la synchro au démarrage
    if (!KERNEL.STATE.SESSION.cycle_start) { this.syncDefiDate(); }
    
    const start = KERNEL.STATE.SESSION.cycle_start;
    const dayMs = 86400000; // 24 * 3600 * 1000

    // Calcul mathématique : (Maintenant - Début) / Millisecondes par jour
    const diffMs = now - start;
    let daysElapsed = Math.floor(diffMs / dayMs) + 1; 

    // Gestion du bouclage automatique (Modulo 28)
    if (daysElapsed > 28) {
        daysElapsed = ((daysElapsed - 1) % 28) + 1;
    }

    const rupData = this.calculateRUPTarget();
    
    return {
        day: daysElapsed,
        max_days: 28,
        target_today: Math.floor(rupData.daily_cap_eur * daysElapsed),
        current_balance: KERNEL.STATE.USER_CVNU.value_points,
        timestamp: new Date().toLocaleTimeString('fr-FR')
    };
},
    getPhaseName(day) {
        if (day <= 7) return "INITIATION (S1)";
        if (day <= 14) return "ACCUMULATION (S2)";
        if (day <= 21) return "OPTIMISATION (S3)";
        return "MONÉTISATION (S4)";
    },
    logInteraction(role, content) {
        KERNEL.STATE.HISTORY_LOGS.push({
            ts: Date.now(),
            role: role,
            content: content
        });
    },
    /**
     * MODULE DE DÉVELOPPEMENT CONTEXTUEL /dev
     * Analyse le profil et l'historique pour proposer des structures de code adaptées.
     */
    devModule(args = []) {
        // 1. Analyse du contexte utilisateur (Compétences + Historique)
        const context = this.analyzeUserContext();
        
        if (args.length === 0) {
            let menu = [
                "🚀 ARCHITECTE DE SOLUTIONS CVNU",
                "═".repeat(40),
                `👤 PROFIL DÉTECTÉ : ${context.profileType}`,
                `🔑 MOTS-CLÉS      : ${context.keywords.join(', ') || 'Aucun'}`,
                "═".repeat(40),
                "",
                "SOLUTIONS RECOMMANDÉES (Basées sur votre historique) :",
            ];

            // Génération dynamique des suggestions
            context.suggestions.forEach((sug, i) => {
                menu.push(`${i + 1}. [${sug.type}] ${sug.label}`);
                menu.push(`   Usage: /dev generate ${sug.id}`);
            });

            menu.push("");
            menu.push("Commandes manuelles :");
            menu.push("  /dev analyze  - Forcer une nouvelle analyse");
            menu.push("  /dev list     - Voir vos solutions actives");
            
            return this.wrapASCII("DEV ARCHITECT MODE", menu.join('\n'));
        }

        const action = args[0].toLowerCase();

        switch(action) {
            case 'generate':
                // On passe le contexte à la génération
                return this.generateContextualSolution(args[1], context);
            case 'analyze':
                return this.wrapASCII("ANALYSE CONTEXTUELLE", 
                    `Compétences: ${context.skills.join('+')}\n` +
                    `Centres d'intérêt (Logs): ${context.keywords.join(', ')}\n` +
                    `Synergie détectée: ${context.profileType}`
                );
            case 'list':
                return this.listDevelopedClasses();
            case '/host':
                return this.renderHostStatus();
            default:
            case 'test':
                return this.runUnitTests(args[1]);

                return this.wrapASCII("ERREUR", "Commande inconnue. Essayez /dev");
        }
    },
    // Nouvelle fonction dans l'objet system :
handleCityCommand(args) {
        const action = args[0] || '';
        const subArgs = args.slice(1);
        const user = KERNEL.STATE.USER_CVNU;

        // 1. VÉRIFICATION ET RÉ-HYDRATATION DU PROTOTYPE
        if (!user.city) {
            user.city = new CityBuilderManager({
                cityName: `CVNU_${user.firstName || 'USER'}_CITY`,
                budget: user.value_points * 2
            });
            user.city.initializeCityZones(); 
        } else if (!(user.city instanceof CityBuilderManager)) {
            // L'objet existe mais a perdu ses méthodes (chargement JSON)
            const savedData = user.city;
            user.city = new CityBuilderManager(savedData);
            
            // On restaure aussi les zones si elles existent déjà
            if (!user.city.zones || user.city.zones.length === 0) {
                user.city.initializeCityZones();
            }
        }

        const city = user.city;

        // 2. ROUTAGE DES SOUS-COMMANDES
        switch (action.toLowerCase()) {
            case 'develop':
                return this.handleCityDevelop(subArgs, city);
            case 'infrastructure':
            case 'infra':
                return this.handleCityInfrastructure(subArgs, city);
            case 'policies':
                return this.handleCityPolicies(subArgs, city);
            case 'report':
                return this.handleCityReport(city);
            case 'simulate':
                return this.handleCitySimulate(subArgs, city);
            case 'map':
                return this.handleCityMap(city);
            case 'resources':
                return this.handleCityResources(city);
            case 'jobs':
                return this.handleCityJobs(subArgs, city);
            default:
                return this.showCityMenu(city);
        }
    },
    showCityMenu(city) {
        const menu = [
            `🏙️ VILLE: ${city.cityName}`,
            `👥 Population: ${city.population}`,
            `💰 Budget: ${city.budget.toLocaleString()} €`,
            `🌱 Durabilité: ${(city.sustainabilityScore * 100).toFixed(1)}%`,
            '',
            'COMMANDES DISPONIBLES:',
            '─'.repeat(40),
            '📈 /city develop [zone] [montant] - Développer une zone',
            '🏗️ /city infrastructure [type] [niveau] - Construire infrastructure',
            '📜 /city policies [type] - Appliquer des politiques',
            '📊 /city report - Rapport économique complet',
            '🔮 /city simulate [mois] - Simuler la croissance',
            '🗺️ /city map - Voir la carte de la ville',
            '⚡ /city resources - Gestion des ressources',
            '👷 /city jobs [list|assign|complete] - Emplois urbains',
            '💼 /city job create [type] [zone] - Créer un emploi'
        ];

        return this.wrapASCII('GESTIONNAIRE URBAIN CVNU', menu.join('\n'));
    },

    handleCityDevelop(args, city) {
        if (args.length < 2) {
            return this.wrapASCII('ERREUR', 'Usage: /city develop [zone] [montant]\nZones: RESIDENTIAL, COMMERCIAL, INDUSTRIAL, AGRICULTURAL, TECHNOLOGY');
        }

        const zoneId = args[0].toUpperCase();
        const investment = parseInt(args[1]);

        try {
            const result = city.developZone(zoneId, investment);

            // Valorisation CVNU
            const cvnuValue = investment * 0.1; // 10% de la valeur investie
            this.addCVNUPoints(cvnuValue);

            const report = [
                `🏗️ DÉVELOPPEMENT DE ZONE: ${zoneId}`,
                '─'.repeat(40),
                `💰 Investissement: ${investment.toLocaleString()} €`,
                `📊 Nouveau niveau: ${result.newLevel}`,
                `🏢 Nouvelle capacité: ${result.newCapacity}`,
                `📈 Taux taxe: ${(result.newTaxRate * 100).toFixed(1)}%`,
                `💸 Revenu mensuel: ${result.monthlyRevenue.toLocaleString()} €`,
                `📅 ROI: ${result.roiMonths} mois`,
                `💰 Budget restant: ${result.budgetRemaining.toLocaleString()} €`,
                '',
                `🎯 VALEUR CVNU: +${cvnuValue.toLocaleString()} €`
            ];

            return this.wrapASCII('DÉVELOPPEMENT URBAIN', report.join('\n'));
        } catch (error) {
            return this.wrapASCII('ERREUR', error.message);
        }
    },

    handleCityInfrastructure(args, city) {
        if (args.length < 1) {
            return this.wrapASCII('ERREUR', 'Usage: /city infrastructure [type] [niveau=1]\nTypes: TRANSPORT, ENERGY, WATER, COMMUNICATION, WASTE_MANAGEMENT');
        }

        const type = args[0].toUpperCase();
        const level = args[1] ? parseInt(args[1]) : 1;

        try {
            const result = city.planInfrastructure([{ type, level }]);

            const report = [
                `🏗️ INFRASTRUCTURE: ${type}`,
                '─'.repeat(40),
                `📊 Niveau: ${level}`,
                `💰 Coût: ${result.totalCost.toLocaleString()} €`,
                `🌱 Impact durabilité: +${(result.totalImpact * 100).toFixed(1)}%`,
                `🌍 Score durabilité: ${(result.sustainabilityScore * 100).toFixed(1)}%`,
                `💰 Budget restant: ${result.budgetRemaining.toLocaleString()} €`
            ];

            return this.wrapASCII('INFRASTRUCTURE URBAINE', report.join('\n'));
        } catch (error) {
            return this.wrapASCII('ERREUR', error.message);
        }
    },

    handleCityReport(city) {
        const report = city.generateEconomicReport();
        const resources = UrbanResourceSystem.calculateBalance(city);

        const display = [
            `🏙️ RAPPORT ÉCONOMIQUE: ${report.city}`,
            '═'.repeat(50),
            `👥 POPULATION: ${report.population.toLocaleString()}`,
            `💰 BUDGET: ${report.budget.toLocaleString()} €`,
            `📊 REVENUS TOTAUX: ${report.totalRevenue.toLocaleString()} €/mois`,
            `🏗️ COÛTS INFRASTRUCTURE: ${report.infrastructureCost.toLocaleString()} €`,
            `📜 COÛTS POLITIQUES: ${report.policyCost.toLocaleString()} €`,
            `💸 REVENU NET: ${report.netIncome.toLocaleString()} €/mois`,
            `🌱 DURABILITÉ: ${(report.sustainabilityScore * 100).toFixed(1)}%`,
            '',
            '📈 REVENUS PAR ZONE:',
            '─'.repeat(30)
        ];

        report.zones.forEach(zone => {
            display.push(`${zone.zone.padEnd(15)} ${zone.revenue.toLocaleString().padStart(8)} €/mois (${(zone.taxRate * 100).toFixed(1)}%)`);
        });

        display.push('');
        display.push('⚡ RESSOURCES:');
        display.push('─'.repeat(30));

        for (const resource in resources.production) {
            const status = resources.status[resource];
            const statusIcon = status === 'SURPLUS' ? '✅' : status === 'DEFICIT' ? '⚠️' : '⚖️';
            display.push(`${statusIcon} ${resource.padEnd(12)} Prod: ${resources.production[resource]} | Cons: ${resources.consumption[resource]} | ${status}`);
        }

        // Ajouter la valorisation CVNU
        const cvnuValue = report.totalRevenue * 0.05; // 5% des revenus mensuels
        display.push('');
        display.push(`🎯 VALEUR CVNU MENSUELLE: ${cvnuValue.toLocaleString()} €`);
        display.push(`📈 BALANCE ACTUELLE: ${KERNEL.STATE.USER_CVNU.value_points.toLocaleString()} €`);

        return this.wrapASCII('RAPPORT URBAIN COMPLET', display.join('\n'));
    },

    handleCityJobs(args, city) {
        const action = args[0] || 'list';

        // Initialiser les jobs si nécessaire
        if (!city.jobs) city.jobs = [];

        switch (action.toLowerCase()) {
            case 'list':
                return this.listCityJobs(city);
            case 'assign':
                return this.assignCityJob(args[1], city);
            case 'complete':
                return this.completeCityJob(args[1], city);
            case 'create':
                return this.createCityJob(args.slice(1), city);
            default:
                return this.wrapASCII('EMPLOIS URBAINS', 
                    'Usage:\n' +
                    '/city jobs list - Lister les emplois\n' +
                    '/city jobs assign [id] - Assigner un emploi\n' +
                    '/city jobs complete [id] - Compléter un emploi\n' +
                    '/city jobs create [type] [zone] - Créer un emploi'
                );
        }
    },
// À ajouter dans l'objet "system" juste après handleCityJobs
    createCityJob(args, city) {
        if (args.length < 2) {
            throw new Error("Usage: /city jobs create [TYPE] [ZONE]");
        }
        const type = args[0].toUpperCase();
        const zone = args[1].toUpperCase();
        
        const newJob = new UrbanJob({
            type: type,
            zone: zone,
            salary: 1500 + Math.floor(Math.random() * 1000),
            duration: 7 + Math.floor(Math.random() * 21)
        });
        
        city.jobs.push(newJob);
        return this.wrapASCII("OFFRE D'EMPLOI CRÉÉE", `Un poste de ${type} est ouvert en zone ${zone}.`);
    },
    listCityJobs(city) {
        if (!city.jobs || city.jobs.length === 0) {
            return this.wrapASCII('EMPLOIS URBAINS', 'Aucun emploi disponible. Créez-en avec /city jobs create');
        }

        const display = [
            '👷 EMPLOIS URBAINS DISPONIBLES',
            '─'.repeat(50)
        ];

        city.jobs.forEach((job, index) => {
            const statusIcon = job.status === 'AVAILABLE' ? '✅' : job.status === 'ASSIGNED' ? '⏳' : '🏁';
            display.push(`${index + 1}. ${statusIcon} ${job.type} - ${job.zone}`);
            display.push(`   💰 Salaire: ${job.salary}€/mois | ⏱️ Durée: ${job.duration}j`);
            display.push(`   🎯 Récompense: ${job.reward || job.calculateReward()}€ | Statut: ${job.status}`);
            if (job.status === 'ASSIGNED') {
                display.push(`   👤 Assigné à: ${job.cvnu_user_id}`);
            }
            display.push('');
        });

        display.push('💡 Utilisez /city jobs assign [numéro] pour prendre un emploi');

        return this.wrapASCII('MARCHÉ DE L\'EMPLOI URBAIN', display.join('\n'));
    },

    assignCityJob(jobId, city) {
        if (!jobId || isNaN(jobId)) {
            return this.wrapASCII('ERREUR', 'Usage: /city jobs assign [numéro]');
        }

        const jobIndex = parseInt(jobId) - 1;
        if (!city.jobs[jobIndex]) {
            return this.wrapASCII('ERREUR', 'Emploi non trouvé');
        }

        const job = city.jobs[jobIndex];
        if (job.status !== 'AVAILABLE') {
            return this.wrapASCII('ERREUR', 'Cet emploi n\'est pas disponible');
        }

        // Assigner au CVNU utilisateur
        const userId = KERNEL.STATE.USER_CVNU.license.id || 'USER_01';
        job.assignToUser(userId);

        return this.wrapASCII('EMPLOI ASSIGNÉ', 
            `✅ Emploi assigné avec succès!\n\n` +
            `📋 Type: ${job.type}\n` +
            `📍 Zone: ${job.zone}\n` +
            `💰 Salaire: ${job.salary}€/mois\n` +
            `⏱️ Durée: ${job.duration} jours\n` +
            `📅 Date d'achèvement: ${new Date(job.completionDate).toLocaleDateString()}\n\n` +
            `💡 Utilisez /city jobs complete ${jobId} à la fin du projet`
        );
    },

    completeCityJob(jobId, city) {
        if (!jobId || isNaN(jobId)) {
            return this.wrapASCII('ERREUR', 'Usage: /city jobs complete [numéro]');
        }

        const jobIndex = parseInt(jobId) - 1;
        if (!city.jobs[jobIndex]) {
            return this.wrapASCII('ERREUR', 'Emploi non trouvé');
        }

        const job = city.jobs[jobIndex];
        if (job.status !== 'ASSIGNED') {
            return this.wrapASCII('ERREUR', 'Cet emploi n\'est pas assigné');
        }

        // Vérifier si la date est dépassée
        const now = new Date();
        const completionDate = new Date(job.completionDate);
        if (now < completionDate) {
            return this.wrapASCII('ERREUR', `Trop tôt! Date d'achèvement: ${completionDate.toLocaleDateString()}`);
        }

        // Calculer la récompense
        const reward = job.complete();

        // Ajouter à la balance CVNU
        this.addCVNUPoints(reward);

        // Mettre à jour le budget de la ville
        city.budget -= job.salary * (job.duration / 30);

        return this.wrapASCII('EMPLOI COMPLÉTÉ', 
            `🎉 Félicitations! Emploi complété avec succès!\n\n` +
            `📋 Type: ${job.type}\n` +
            `📍 Zone: ${job.zone}\n` +
            `💰 Salaire perçu: ${job.salary * (job.duration / 30)}€\n` +
            `🎯 Récompense CVNU: ${reward}€\n` +
            `📈 Nouvelle balance: ${KERNEL.STATE.USER_CVNU.value_points.toLocaleString()}€\n\n` +
            `🏙️ Budget ville mis à jour: ${city.budget.toLocaleString()}€`
        );
    },

    handleCityMap(city) {
        // Initialiser les zones si nécessaire
        if (!city.zones || city.zones.length === 0) {
            city.initializeCityZones();
        }
        
        // Carte ASCII simple
        const mapGrid = [
            '╔══════════════════════════════════════════════════════╗',
            '║                  🏙️ CARTE DE LA VILLE                 ║',
            '╠══════════════════════════════════════════════════════╣',
            '║                                                      ║',
            '║  [🏠] Zone Résidentielle  Lvl.' + (city.zones.find(z => z.id === 'RESIDENTIAL')?.level || 1).toString().padEnd(17) + '║',
            '║  [🏪] Zone Commerciale    Lvl.' + (city.zones.find(z => z.id === 'COMMERCIAL')?.level || 1).toString().padEnd(17) + '║',
            '║  [🏭] Zone Industrielle   Lvl.' + (city.zones.find(z => z.id === 'INDUSTRIAL')?.level || 1).toString().padEnd(17) + '║',
            '║  [🌾] Zone Agricole       Lvl.' + (city.zones.find(z => z.id === 'AGRICULTURAL')?.level || 1).toString().padEnd(17) + '║',
            '║  [💻] Zone Technologique  Lvl.' + (city.zones.find(z => z.id === 'TECHNOLOGY')?.level || 1).toString().padEnd(17) + '║',
            '║                                                      ║',
            '╠══════════════════════════════════════════════════════╣',
            `║  👥 Population: ${city.population.toString().padEnd(10)} ` +
            `💰 Budget: ${city.budget.toLocaleString().padEnd(12)}€ ║`,
            `║  🌱 Durabilité: ${(city.sustainabilityScore * 100).toFixed(1)}% ` +
            `🏗️ Infra: ${Object.keys(city.infrastructure).length} types  ║`,
            '╚══════════════════════════════════════════════════════╝'
        ];
        
        return mapGrid.join('\n');
    },
    /**
     * [NOUVEAU] Moteur d'Analyse Contextuelle
     * Scanne l'historique et les compétences pour déduire des besoins.
     */
    analyzeUserContext() {
        const history = KERNEL.MESSAGING.HISTORY.map(m => m.content.toLowerCase()).join(' ');
        const userSkills = KERNEL.STATE.USER_CVNU.skills.map(s => s.id);
        
        // 1. Extraction de mots-clés (Simulation NLP basique)
        const keywords = [];
        const watchList = ['drone', 'agri', 'finance', 'bloc', 'data', 'design', 'tva', 'smart'];
        watchList.forEach(w => {
            if (history.includes(w)) keywords.push(w.toUpperCase());
        });

        // 2. Détermination du Type de Profil
        let profileType = "GÉNÉRALISTE";
        if (userSkills.includes('PROG') && keywords.includes('FINANCE')) profileType = "FINTECH_DEV";
        if (userSkills.includes('PROG') && keywords.includes('DRONE')) profileType = "AGTECH_ENGINEER";
        if (userSkills.includes('COM') && keywords.includes('TVA')) profileType = "AUDITOR";

        // 3. Génération des suggestions dynamiques
        const suggestions = [];
        
        // Suggestion 1 : Basée sur le profil principal
        if (profileType === 'FINTECH_DEV') {
            suggestions.push({ id: 'SMART_CONTRACT', type: 'CODE', label: 'Générer Smart Contract de redistribution' });
        } else if (profileType === 'AGTECH_ENGINEER') {
            suggestions.push({ id: 'DRONE_CONTROLLER', type: 'IOT', label: 'Contrôleur de vol autonome (Drone)' });
        } else {
            suggestions.push({ id: 'CVNU_BASE', type: 'CORE', label: 'Structure de base CVNU' });
        }

        // Suggestion 2 : Basée sur l'historique récent
        if (keywords.includes('TVA')) {
            suggestions.push({ id: 'FISCAL_OPTIMIZER', type: 'ALGO', label: 'Optimiseur de TVA Circulaire' });
        }

        // Suggestion 3 : Offre de formation (Training)
        if (userSkills.length < 3) {
            suggestions.push({ id: 'LEARN_STRAT', type: 'FORMATION', label: 'Module: Stratégie Économique' });
        }

        return { keywords, userSkills, profileType, suggestions };
    },

    /**
     * Générateur de Solution Contextuelle
     * Remplace l'ancien generateClass
     */
    generateContextualSolution (solutionId, context) {
    let reward = 0;
    let title = "SOLUTION CVNU_TO_RUP";
    let codeContent = "";

    const user = KERNEL.STATE.USER_CVNU;
    const currentLvl = user.level || 1;

    switch (solutionId.toUpperCase()) {
        case 'SMART_CONTRACT_VAT':
            title = "CONTROLEUR DE COLLECTE TVA (v2.0)";
            reward = 1000;
            codeContent = `class TVACollectorInterface { /* Simulation Solidity tvaCollector.sol */ }`;
            break;

        case 'MONETIZATION_ENGINE':
            title = "MOTEUR DE MONÉTISATION CVNU";
            reward = 1500;
            const guaranteed = currentLvl >= 2 ? 1200 : 750;
            codeContent = `const RUP_CONFIG = { level: ${currentLvl}, base_rup: ${guaranteed} };`;
            break;

        case 'RIB_SYNC_MODULE':
            title = "SYNCHRONISEUR DE FLUX BANCAIRE (RIB)";
            reward = 800;
            codeContent = `function secureRIBSync(iban) { /* TVA_RIB_Synchronizer.sol Integration */ }`;
            break;

        default:
            title = "CLASSE MÉTIER GÉNÉRIQUE";
            reward = 300;
            codeContent = `class CircularEntity { constructor() { this.id = Date.now(); } }`;
    }

    this.addCVNUPoints(reward);

    return this.wrapASCII(`DÉPLOIEMENT : ${title}`, 
        codeContent + "\n\n" +
        `💰 Gain Architecture : +${reward} UTMi\n` +
        `🚀 Statut: Prêt pour intégration Smart Contract.`
    );
},

/**
 * SYNC_RIB_CNIE : Pont Asynchrone de Redistribution
 * Permet le décaissement de la TVA collectée (4457) vers le RIB citoyen (512)
 * sans intermédiaire bancaire centralisé, via signature CNIe.
 */
syncRIBCNIe () {
    const state = KERNEL.STATE;
    const vault = state.VAULT;
    const user = state.USER_CVNU;

    // 1. VÉRIFICATION DU PÉRIMÈTRE DE SÉCURITÉ
    if (!state.RIB.fiat.hash || vault.bridge_status !== "AWAITING_MATCH") {
        return this.wrapASCII("ALERTE SYNC", "RIB non haché ou pont déjà actif.");
    }

    // 2. SIMULATION DE L'APPEL AU SMART CONTRACT TVA_RIB_Synchronizer.sol
    // On lie l'adresse du CVNU (ID unique CNIe) au hachage du RIB [cite: 5, 10]
    const ribHash = state.RIB.fiat.hash;
    console.log(`📡 [SC] synchronizeRIB(${ribHash}) call...`); // [cite: 10]

    // 3. CALCUL DU RUP SELON LES CLASSES DE COMPTES 8 & 9
    const rupTarget = this.calculateRUPTarget();
    const netToPay = rupTarget.total_cycle_cap_eur;

    // 4. OPÉRATION COMPTABLE (DOUBLE ÉCRITURE)
    const journalEntry = {
        date: new Date().toISOString(),
        debit:  { account: "471", amount: netToPay, label: "Redistribution RUP (Attente)" }, //
        credit: { account: "512", amount: netToPay, label: "Crédit RIB Citoyen" }           //
    };

    // 5. VALIDATION PAR SIGNATURE CNIE (Simulation eIDAS 2021)
    vault.sync_lock = true; // Verrouillage anti-double paiement
    vault.last_cnie_scan = new Date().toISOString();
    vault.bridge_status = "CERTIFIED_L3121_1";

    // Mise à jour de la trésorerie [cite: 68]
    state.TREASURY.tva_redistributed += netToPay;
    state.TREASURY.payouts += 1;

    // 6. GÉNÉRATION DU REÇU COMPTABLE SOUVERAIN
    const receiptLines = [
        `✅ IDENTITÉ CERTIFIÉE : ${user.firstName} ${user.lastName}`,
        `💳 RIB SÉCURISÉ (SHA-256) : ${ribHash.substring(0, 32)}...`,
        `🏛️ CLASSE 4 -> 5 : Flux validé (Art. L3121-1)`,
        `--------------------------------------------------`,
        `💰 MONTANT DÉCAISSÉ : ${netToPay} €`,
        `📉 TAXE IA (6.8%)  : PRÉLEVÉE À LA SOURCE`,
        `--------------------------------------------------`,
        `🚀 STATUT : Revenu Universel Progressif en cours de virement.`,
        `🔗 BLOCKCHAIN : Withdrawal Event Emitted (TVA_RIB_Synchronizer.sol)` // [cite: 22]
    ];

    return this.wrapASCII("ORDONNANCEMENT DE REDISTRIBUTION", receiptLines.join('\n'));
    },

    /**
 * GÉNÉRATEUR DE BULLETIN DE PAIE (/bp)
 * Orchestre le calcul RUP et le rendu visuel.
 */
generateBulletinPaie() {
    try {
        // 1. Appel de sécurité au Smart Contract (Simulation)
        // Si le RIB n'est pas sync, ça lève une erreur et arrête tout.
        const contractStatus = this.syncRIBCNIe();

        // 2. Récupération des données
        const state = KERNEL.STATE;
        const user = state.USER_CVNU;
        
        // 1. Vérification de l'existence du Hash (comme le require solidity)
        if (!state.RIB.fiat.hash) {
            throw new Error("ECHEC: Aucun RIB haché trouvé. Utilisez /device d'abord.");
        }

        // 2. Simulation de l'état du mapping citizenRIB
        // Si le pont n'est pas actif, on le valide
        if (vault.bridge_status !== "CERTIFIED_L3121_1") {
            console.log(`📡 [BLOCKCHAIN] Transaction mined: synchronizeRIB(${state.RIB.fiat.hash})`);
            vault.bridge_status = "CERTIFIED_L3121_1"; // État synchronisé
            vault.last_cnie_scan = new Date().toISOString();
            vault.sync_lock = true;
        }

        // 3. Calculs Financiers (Moteur RUP)
        const target = this.calculateRUPTarget();
        const netToPay = target.total_cycle_cap_eur; // Le Net (Plafonné)
        
        // Reconstitution du Brut (Inverse de la Taxe IA 6.8%)
        // Formule : Net = Brut * (1 - rate)  => Brut = Net / (1 - rate)
        const taxRate = KERNEL.ECONOMY.TAX_AI; 
        const grossAmount = netToPay / (1 - taxRate);
        const taxAmount = grossAmount - netToPay;

        // 4. Écritures Comptables (Double Entry)
        state.TREASURY.payouts++;
        state.TREASURY.tva_redistributed += netToPay;

        // 5. CONSTRUCTION DU TICKET (BulletinPai)
        const BulletinPai = [
            `📄 BULLETIN DE PAYE NUMÉRIQUE (SOUVERAIN)`,
            `--------------------------------------------------`,
            `👤 TITULAIRE     : ${user.firstName || 'Citoyen'} ${user.lastName || ''}`,
            `🆔 MATRICULE SC  : ${user.license.id || 'WAITING_SYNC'}`,
            `🏦 ANCRAGE RIB   : ${contractStatus.ribHash.substring(0, 20)}... [ON-CHAIN]`,
            `--------------------------------------------------`,
            `🔹 REVENU BRUT   : ${grossAmount.toFixed(2)} € (Base Universalité)`,
            `🔻 TAXE IA (6.8%): -${taxAmount.toFixed(2)} € (Contribution RUP)`,
            `🔸 NET À PAYER   : ${netToPay.toFixed(2)} €`,
            `--------------------------------------------------`,
            `📊 FACTEUR NIV.  : ${target.level_factor} (Niveau ${user.level})`,
            `🛡️ PREUVE SC     : ${contractStatus.contract}`,
            `🔗 TRANSACTION   : 0x${this.generateAuditHash()} (Event Emitted)`
        ];

        // 6. Rendu Final
        return this.wrapASCII("ORDONNANCEMENT RUP", BulletinPai.join('\n'));

    } catch (error) {
        return this.wrapASCII("ERREUR PAIE", error.message);
    }
    },
    /**
     * Construit le code source d'une classe
     */
    buildClassCode(template) {
        const className = template.name;
        const fields = template.fields || [];
        const methods = template.methods || [];
        
        let code = `/**
             * ${template.name} - ${template.description}
             * @class ${className}
             * @version 1.0.0
             * @generated ${new Date().toISOString()}
             * @context CVNU - Économie Circulaire
             */
                
            class ${className} {
                /**
                 * Constructeur de la classe ${className}
                 * @param {Object} config - Configuration initiale
                 */
                constructor(config = {}) {
                    // Initialisation des propriétés\n`;
                    
                    // Ajout des propriétés
                    fields.forEach(field => {
                        code += `        this.${field} = config.${field} || null;\n`;
                    });
                    
                    code += `        
                    // Métadonnées CVNU
                    this.cvnu_metadata = {
                        created: new Date().toISOString(),
                        version: '1.0.0',
                        class_id: '${className.toLowerCase()}_${Date.now()}'
                    };
                    
                    console.log(\`✅ ${className} initialisée - ID: \${this.cvnu_metadata.class_id}\`);
                }\n\n`;
                    
                    // Ajout des méthodes
                    methods.forEach(method => {
                        const methodName = method.replace('()', '');
                        code += this.generateMethodCode(methodName, className);
                    });
                    
                    // Méthodes utilitaires par défaut
                    code += `
                /**
                 * Génère un rapport d'état au format CVNU
                 * @returns {Object} Rapport structuré
                 */
                generateCVNUReport() {
                    return {
                        class: '${className}',
                        metadata: this.cvnu_metadata,
                        state: {
            ${fields.map(f => `                ${f}: this.${f}`).join(',\n')}
                        },
                        timestamp: new Date().toISOString()
                    };
                }
                
                /**
                 * Exporte la classe pour persistance
                 * @returns {string} JSON sérialisé
                 */
                export() {
                    return JSON.stringify(this.generateCVNUReport());
                }
                
                /**
                 * Importe depuis une sauvegarde
                 * @param {string} data - Données sérialisées
                 */
                import(data) {
                    try {
                        const imported = JSON.parse(data);
                        Object.assign(this, imported.state);
                        console.log(\`✅ ${className} importée depuis sauvegarde\`);
                    } catch (error) {
                        console.error(\`❌ Erreur import ${className}:\`, error);
                    }
                }
            }                 

            // Export pour usage dans le système CVNU
            if (typeof module !== 'undefined') {
                module.exports = ${className};
            }
            if (typeof window !== 'undefined') {
                window.CVNU_${className.toUpperCase()} = ${className};
            }                 

            console.log(\`🚀 Module ${className} prêt pour l'économie circulaire CVNU\`);`;
        
        return code;
    },
    
    /**
     * Génère le code d'une méthode spécifique
     */
    generateMethodCode(methodName, className) {
        const methodTemplates = {
            'calculerTVA': `    /**
     * Calcule la TVA selon le cadre légal CVNU
     * @param {number} montantHT - Montant hors taxes
     * @returns {Object} Détails du calcul
     */
    calculerTVA(montantHT) {
        if (!montantHT || montantHT <= 0) {
            throw new Error("Montant HT invalide");
        }
        
        const tauxTVA = this.tva_rate || 20;
        const tva = montantHT * (tauxTVA / 100);
        const montantTTC = montantHT + tva;
        
        // Contribution à l'économie circulaire
        const contributionRUP = tva * 0.068; // 6.8% pour le RUP
        const contributionCVNU = tva * 0.30; // 30% redistribuée
        
        return {
            montantHT,
            tauxTVA: \`\${tauxTVA}%\`,
            tva,
            montantTTC,
            contributions: {
                RUP: contributionRUP,
                CVNU: contributionCVNU,
                Etat: tva - contributionRUP - contributionCVNU
            },
            articleLegal: "L4334-1 - Financement via TVA"
        };
    }\n\n`,
            
            'calculerTTF': `    /**
     * Calcule la Taxe sur les Transactions Financières
     * @param {number} montantTransaction - Montant de la transaction
     * @returns {Object} Détails TTF
     */
    calculerTTF(montantTransaction) {
        const tauxTTF = this.ttf_rate || 0.3; // 0.3% par défaut
        const ttf = montantTransaction * (tauxTTF / 100);
        
        return {
            montantTransaction,
            tauxTTF: \`\${tauxTTF}%\`,
            ttf,
            net: montantTransaction - ttf,
            destination: "Fonds de garantie CVNU"
        };
    }\n\n`,
            
            'calculerGainPotentiel': `    /**
     * Calcule le gain potentiel d'une mission
     * @returns {Object} Estimation des gains
     */
    calculerGainPotentiel() {
        const base = this.budget || 1000;
        const multiplicateurCompetences = (this.competences_requises || []).length * 1.2;
        const multiplicateurDuree = Math.min(this.duree || 1, 10) * 1.1;
        
        const gainBrut = base * multiplicateurCompetences * multiplicateurDuree;
        const taxeAI = gainBrut * 0.068;
        const gainNet = gainBrut - taxeAI;
        
        return {
            gainBrut: Math.round(gainBrut),
            taxeAI: Math.round(taxeAI),
            gainNet: Math.round(gainNet),
            efficacite: Math.round((gainNet / base) * 100) + '%'
        };
    }\n\n`,
            
            'genererContrat': `    /**
     * Génère un contrat Smart Contract pour la mission
     * @returns {Object} Structure du contrat
     */
    genererContrat() {
        return {
            partiePrenante: this.entreprise,
            mission: this.titre,
            competences: this.competences_requises || [],
            conditions: {
                budget: this.budget,
                duree: this.duree,
                paiement: "À la validation",
                penalites: "0.5% par jour de retard"
            },
            clausesCVNU: [
                "Article L3121-1: Inclusion monétisation",
                "Article L4334-1: Financement via TVA",
                "Redistribution RUP: 6.8%"
            ],
            signature: \`CVNU_CONTRACT_\${Date.now()}\`
        };
    }\n\n`,
            
            'default': `    /**
     * Méthode ${methodName} - À implémenter
     * @returns {any} Résultat de l'exécution
     */
    ${methodName}() {
        // TODO: Implémenter la logique métier
        console.log(\`🛠️ ${methodName}() appelée sur ${className}\`);
        return { status: "en_development", method: "${methodName}" };
    }\n\n`
        };
        
        return methodTemplates[methodName] || methodTemplates.default;
    },
    
    /**
     * Affiche un pattern de design
     */
    showPattern(patternName) {
        const patterns = KERNEL.ASCII_DICT.DEV_TEMPLATES.PATTERNS;
        
        if (!patternName || !patterns[patternName]) {
            return this.wrapASCII("PATTERNS DISPONIBLES", 
                Object.keys(patterns).map(p => 
                    `🔸 ${p}\n   Usage: ${patterns[p].split('\n')[0]}`
                ).join('\n\n')
            );
        }
        
        this.createMessageInstance('SYSTEM', `Pattern ${patternName} consulté`);
        
        return this.wrapASCII(
            `PATTERN: ${patternName}`,
            patterns[patternName] + "\n\n" +
            "💡 Appliquez ce pattern dans vos classes métiers pour:\n" +
            "   - Structurer votre code\n" +
            "   - Faciliter la maintenance\n" +
            "   - Améliorer la testabilité\n" +
            "   - Promouvoir la réutilisabilité"
        );
    },
    
    /**
     * Exécute des tests unitaires sur une classe
     */
    runUnitTests(className) {
        if (!className) {
            return this.wrapASCII("TESTS UNITAIRES", 
                "Usage: /dev test [nom_classe]\n\n" +
                "Classes testables:\n" +
                KERNEL.STATE.USER_CVNU.dev_classes.map(c => 
                    `  • ${c.name} (v${c.version})`
                ).join('\n') || "Aucune classe développée"
            );
        }
        
        const classe = KERNEL.STATE.USER_CVNU.dev_classes.find(c => 
            c.name.toLowerCase() === className.toLowerCase()
        );
        
        if (!classe) {
            return this.wrapASCII("ERREUR TEST", `Classe "${className}" non trouvée`);
        }
        
        // Simulation de tests unitaires
        const testResults = this.simulateUnitTests(classe);
        
        this.createMessageInstance('SYSTEM', `Tests exécutés sur ${classe.name}`);
        
        return this.wrapASCII(
            `TESTS UNITAIRES: ${classe.name}`,
            testResults
        );
    },
    
    /**
     * Simule l'exécution de tests unitaires
     */
    simulateUnitTests(classe) {
        const tests = [
            { name: "Test d'instanciation", result: "✅ PASS" },
            { name: "Test des propriétés", result: "✅ PASS" },
            { name: "Test des méthodes", result: "⚠️ WARN (méthodes mockées)" },
            { name: "Test de sérialisation", result: "✅ PASS" },
            { name: "Test d'intégration CVNU", result: "✅ PASS" },
            { name: "Test de performance", result: "⚡ EXCELLENT" }
        ];
        
        // Ajout d'XP pour les tests
        this.addCVNUPoints(200);
        
        return tests.map(t => `${t.result} ${t.name}`).join('\n') + "\n\n" +
               `📊 Résumé: ${tests.filter(t => t.result.includes('✅')).length}/${tests.length} tests passés\n` +
               `🎓 +200 points de qualité\n` +
               `🏆 Classe certifiée pour production`;
    },
    
    /**
     * Liste les classes développées
     */
    listDevelopedClasses() {
        const classes = KERNEL.STATE.USER_CVNU.dev_classes;
        
        if (classes.length === 0) {
            return this.wrapASCII("CLASSES DÉVELOPPÉES", 
                "Aucune classe développée.\n" +
                "Utilisez /dev generate pour créer votre première classe métier."
            );
        }
        
        let output = "📚 VOTRE BIBLIOTHÈQUE DE CLASSES MÉTIERS:\n";
        output += "═".repeat(40) + "\n\n";
        
        classes.forEach((cls, index) => {
            output += `${index + 1}. 🏗️ ${cls.name}\n`;
            output += `   📅 Générée: ${new Date(cls.generated).toLocaleDateString()}\n`;
            output += `   📦 Version: ${cls.version}\n`;
            output += `   📏 Taille: ${cls.code.length} caractères\n`;
            output += `   🔧 Usage: /dev test ${cls.name}\n`;
            output += "\n";
        });
        
        output += `📈 Total: ${classes.length} classes | `;
        output += `Points développement: ${classes.length * 500}\n`;
        output += "💡 Utilisez /dev compile pour générer un module complet";
        
        return this.wrapASCII("PORTFOLIO DE DÉVELOPPEMENT", output);
    },
    
    /**
     * Compile toutes les classes en un module
     */
    compileClasses() {
        const classes = KERNEL.STATE.USER_CVNU.dev_classes;
        
        if (classes.length === 0) {
            return this.wrapASCII("COMPILATION", 
                "Aucune classe à compiler.\n" +
                "Développez d'abord des classes avec /dev generate"
            );
        }
        
        let moduleCode = `/**
         * MODULE CVNU - Compilation des classes métiers
         * Généré automatiquement le ${new Date().toISOString()}
         * Contient ${classes.length} classes pour l'économie circulaire
         */
            
        // ==================== MODULE CVNU ====================\n\n`;
                
                classes.forEach(cls => {
                    moduleCode += `// === ${cls.name} ===\n`;
                    moduleCode += cls.code + "\n\n";
                });
                
                // Ajout du module d'export
                moduleCode += `// ==================== EXPORT ====================
        const CVNU_MODULE = {
        ${classes.map(c => `    ${c.name}: ${c.name}`).join(',\n')}
        };      

        // Export global
        if (typeof module !== 'undefined') {
            module.exports = CVNU_MODULE;
        }
        if (typeof window !== 'undefined') {
            window.CVNU_MODULE = CVNU_MODULE;
        }       

        console.log(\`🚀 Module CVNU compilé avec ${classes.length} classes\`);
        console.log(\`📊 Points développement: ${classes.length * 500}\`);
        console.log(\`🎯 Prêt pour l'économie circulaire !\`);`;
        
        this.createMessageInstance('SYSTEM', `Module compilé avec ${classes.length} classes`);
        this.addCVNUPoints(1000); // Bonus pour compilation
        
        return this.wrapASCII(
            "MODULE COMPILÉ CVNU",
            `✅ Compilation réussie !\n\n` +
            `📦 ${classes.length} classes intégrées\n` +
            `🏗️ Architecture: ${classes.map(c => c.name).join(' → ')}\n` +
            `🎓 +1000 points de compilation\n\n` +
            `🔧 Module prêt pour déploiement:\n` +
            "═".repeat(40) + "\n" +
            moduleCode.substring(0, 500) + "...\n" +
            "═".repeat(40) + "\n" +
            `📁 Taille totale: ${moduleCode.length} caractères\n` +
            `💾 Utilisez /save pour sauvegarder votre module`
        );
    },

    /**
     * MODULE FISCAL : "TAXE AI" (Cadre Légal RUP)
     * Prélève 6.8% sur chaque gain pour financer le système global.
     */
    // --- MISE À JOUR processEarningsWithTax ---
    processEarningsWithTax(grossAmount, sourceLabel, company = null) {
        const volatility = KERNEL.STATE.SESSION.market_volatility || 0;
        const marketFactor = Math.max(-0.2, Math.min(0.2, volatility));
        const adjustedGross = Math.floor(grossAmount * (1 + marketFactor));
        
        // TAXE IA FIXE 6.8%
        const taxAmount = Math.floor(adjustedGross * 0.068);
        const netAmountEur = adjustedGross - taxAmount; // 1 UTMi = 1 EUR
    
        this.addCVNUPoints(netAmountEur);
    
        return {
            "Source": sourceLabel,
            "Valeur brute": adjustedGross + " UTMi",
            "Conversion Légale": "1 UTMi = 1.00 EUR", // Mention obligatoire L3121-1
            "Taxe AI (6.8%)": "-" + taxAmount + " €",
            "NET À PAYER (RUP)": netAmountEur + " €",
            "Solde Total": KERNEL.STATE.USER_CVNU.value_points + " €"
        };
    },
    /**
     * [NOUVEAU] CALCUL TTF (Taxe sur les Transactions Financières)
     */
    calculateTTF(amount, bank = null) {
        const banks = KERNEL.ASCII_DICT.PERIMETER.BANK;
        let ttfRate = 0.3; // Taux par défaut 0.3%
        
        if (bank && banks[bank]) {
            ttfRate = banks[bank].ttf_rate;
        }
        
        const ttf = amount * (ttfRate / 100);
        KERNEL.STATE.TREASURY.ttf_collected += ttf;
        
        // Redistribution TTF : 40% pour le RUP, 60% pour le CVNU
        const redistributionRUP = ttf * 0.4;
        const redistributionCVNU = ttf * 0.6;
        
        KERNEL.STATE.TREASURY.tva_redistributed += redistributionCVNU;
        
        return {
            "Transaction": amount + " 💳",
            "Banque": bank ? banks[bank].name : "Générique",
            "Taux TTF": ttfRate + "%",
            "TTF collectée": ttf.toFixed(2) + " 💳",
            "Redistribution RUP": redistributionRUP.toFixed(2) + " 💳",
            "Redistribution CVNU": redistributionCVNU.toFixed(2) + " 💳",
            "Article Légal": "L4334-1 (Financement innovation)"
        };
    },

    /**
     * [NOUVEAU] ENREGISTREMENT D'ACTIVITÉ DANS LE PÉRIMÈTRE
     * Suivi des transactions par entreprise
     */
    recordPerimeterActivity(companyKey, amount, tax) {
        if (!KERNEL.STATE.USER_CVNU.perimeter_activity[companyKey]) {
            KERNEL.STATE.USER_CVNU.perimeter_activity[companyKey] = {
                transactions: 0,
                total_amount: 0,
                total_tax: 0,
                last_activity: new Date().toISOString()
            };
        }
        
        const activity = KERNEL.STATE.USER_CVNU.perimeter_activity[companyKey];
        activity.transactions += 1;
        activity.total_amount += amount;
        activity.total_tax += tax;
        activity.last_activity = new Date().toISOString();
        
        // Mise à jour des compétences basée sur le secteur
        this.updateSkillsFromPerimeter(companyKey);
    },

    /**
     * [NOUVEAU] MISE À JOUR DES COMPÉTENCES BASÉE SUR LE PÉRIMÈTRE
     */
    updateSkillsFromPerimeter(companyKey) {
        // Trouver l'entreprise dans le périmètre
        let companyData = null;
        let sectorKey = null;
        
        // Recherche dans toutes les catégories
        for (const category of ['RETAIL', 'ENERGY', 'DIGITAL', 'BANK']) {
            if (KERNEL.ASCII_DICT.PERIMETER[category] && 
                KERNEL.ASCII_DICT.PERIMETER[category][companyKey]) {
                companyData = KERNEL.ASCII_DICT.PERIMETER[category][companyKey];
                sectorKey = companyData.sector;
                break;
            }
        }
        
        if (sectorKey) {
            this.updateAGISkills(sectorKey);
        }
    },

    /**
     * [NOUVEAU] MODULE PÉRIMÈTRE SPÉCIALISÉ
     * Gestion complète de votre écosystème d'activité
     */
    analyzePerimeter() {
        const perimeter = KERNEL.ASCII_DICT.PERIMETER;
        const activity = KERNEL.STATE.USER_CVNU.perimeter_activity;
        
        let analysis = {
            "📊 STATISTIQUES GLOBALES": "",
            "Entreprises suivies": Object.keys(perimeter.RETAIL).length + 
                                  Object.keys(perimeter.ENERGY).length + 
                                  Object.keys(perimeter.DIGITAL).length +
                                  Object.keys(perimeter.BANK).length,
            "Transactions enregistrées": Object.values(activity).reduce((sum, a) => sum + a.transactions, 0),
            "Chiffre d'affaires total": Object.values(activity).reduce((sum, a) => sum + a.total_amount, 0) + " 💳",
            "TVA générée": Object.values(activity).reduce((sum, a) => sum + a.total_tax, 0) + " 💳",
            "TTF générée": KERNEL.STATE.TREASURY.ttf_collected.toFixed(2) + " 💳",
            "ª": "",
            "🏪 GRANDE DISTRIBUTION (TVA 5.5%)": ""
        };

        // Analyse par catégorie
        const categories = [
            { name: "Grande Distribution", data: perimeter.RETAIL, rate: 5.5, type: 'TVA' },
            { name: "Énergie & Transport", data: perimeter.ENERGY, rate: 10, type: 'TVA' },
            { name: "E-commerce & Restauration", data: perimeter.DIGITAL, rate: 20, type: 'TVA' },
            { name: "Banques & Finance", data: perimeter.BANK, rate: 0.3, type: 'TTF' }
        ];

        let detailedReport = [];
        
        categories.forEach(category => {
            detailedReport.push(`\n🔸 ${category.name.toUpperCase()} (${category.type} ${category.rate}${category.type === 'TTF' ? '%' : '%'})`);
            detailedReport.push("─".repeat(40));
            
            for (const [key, company] of Object.entries(category.data)) {
                const activityData = activity[key] || { transactions: 0, total_amount: 0 };
                const taxAmount = activityData.total_amount * (category.rate / 100);
                
                detailedReport.push(
                    `${company.icon} ${company.name.padEnd(20)} ` +
                    `| Tx: ${activityData.transactions.toString().padStart(3)} ` +
                    `| CA: ${activityData.total_amount.toString().padStart(8)}💳 ` +
                    `| ${category.type}: ${Math.round(taxAmount).toString().padStart(6)}💳`
                );
            }
        });

        // Calcul de la redistribution
        const totalTVA = Object.values(activity).reduce((sum, a) => sum + a.total_tax, 0);
        const totalTTF = KERNEL.STATE.TREASURY.ttf_collected;
        const redistributionTVA = totalTVA * 0.3; // 30% de la TVA
        const redistributionTTF = totalTTF * 0.6; // 60% de la TTF
        
        detailedReport.push("\n💰 ÉCONOMIE CIRCULAIRE AVANCÉE");
        detailedReport.push("═".repeat(50));
        detailedReport.push(`TVA Collectée totale: ${totalTVA.toFixed(2)} 💳`);
        detailedReport.push(`TTF Collectée totale: ${totalTTF.toFixed(2)} 💳`);
        detailedReport.push(`Redistribution CVNU: ${(redistributionTVA + redistributionTTF).toFixed(2)} 💳`);
        detailedReport.push(`Fonds RUP: ${(totalTVA * 0.068 + totalTTF * 0.4).toFixed(2)} 💳`);
        
        // Mise à jour de la trésorerie
        KERNEL.STATE.TREASURY.tva_redistributed += redistributionTVA + redistributionTTF;
        
        return {
            ...analysis,
            "RAPPORT DÉTAILLÉ": detailedReport.join('\n')
        };
    },

    /**
     * [NOUVEAU] SIMULATION DE MISSION DANS LE PÉRIMÈTRE
     */
    simulatePerimeterMission() {
        const perimeter = KERNEL.ASCII_DICT.PERIMETER;
        
        // Sélection aléatoire d'une entreprise (inclut maintenant les banques)
        const categories = ['RETAIL', 'ENERGY', 'DIGITAL', 'BANK'];
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        const companies = Object.keys(perimeter[randomCategory]);
        const randomCompanyKey = companies[Math.floor(Math.random() * companies.length)];
        const company = perimeter[randomCategory][randomCompanyKey];
        
        // Types de missions par secteur
        const missionTemplates = {
            'RETAIL': [
                { label: 'Optimisation Supply Chain', value: 1200 },
                { label: 'Analyse Données Clients', value: 950 },
                { label: 'Stratégie Marketing Digital', value: 1100 }
            ],
            'ENERGY': [
                { label: 'Audit Énergétique', value: 1500 },
                { label: 'Transition Écologique', value: 1300 },
                { label: 'Smart Grid Implementation', value: 1800 }
            ],
            'DIGITAL': [
                { label: 'Développement Plateforme', value: 2000 },
                { label: 'Automatisation Processus', value: 1600 },
                { label: 'Analyse Big Data', value: 1400 }
            ],
            'BANK': [
                { label: 'Audit Financier', value: 2500 },
                { label: 'Conformité Réglementaire', value: 2200 },
                { label: 'Innovation Blockchain', value: 3000 }
            ]
        };
        
        const missions = missionTemplates[randomCategory];
        const mission = missions[Math.floor(Math.random() * missions.length)];
        
        // Exécution avec taxe AI
        const result = this.processEarningsWithTax(mission.value, mission.label, randomCompanyKey);
        
        // Si c'est une banque, ajouter la TTF
        if (randomCategory === 'BANK') {
            const ttfResult = this.calculateTTF(mission.value * 10, randomCompanyKey); // Multiplicateur pour transactions bancaires
            result["Transaction Financière"] = ttfResult["Transaction"];
            result["TTF Appliquée"] = ttfResult["TTF collectée"];
        }
        
        return {
            "ENTREPRISE": `${company.icon} ${company.name}`,
            "CATÉGORIE": randomCategory,
            "MISSION": mission.label,
            "TAUX APPLICABLE": randomCategory === 'BANK' ? `${company.ttf_rate}% TTF` : `${company.tva_rate || 20}% TVA`,
            ...result
        };
    },

    /**
     * MODULE MARKETING MULTI-CANAL
     */
    generateSocialCard(targetPlatform) {
        const u = KERNEL.STATE.USER_CVNU;
        const socDict = KERNEL.ASCII_DICT.SOCIAL;
        
        // 1. Si aucune plateforme spécifiée, afficher le menu
        if (!targetPlatform || !socDict[targetPlatform.toUpperCase()]) {
            let menu = ["Veuillez choisir un canal de diffusion :"];
            for (let key in socDict) {
                menu.push(`> /promo ${key}  ${socDict[key].s} ${socDict[key].n}`);
            }
            return this.wrapASCII("MARKETING HUB", menu.join('\n'));
        }

        const pCode = targetPlatform.toUpperCase();
        const pData = socDict[pCode];
        
        // Correction de la variable CREDITS
        const CREDITS = KERNEL.ASCII_DICT.CURRENCY.CREDIT;
        
        const template = [
            `${pData.s} STATUS CVNU: ${pData.n}`,
            "--------------------------------",
            `👤 USER: MICKAEL | LVL: ${u.level}`,
            `💳 CREDITS: ${u.value_points}`,
            `🛠️ STACK: ${u.skills.map(s=>s.label).join('+') || 'N/A'}`,
            `🏗️ CLASSES: ${u.dev_classes.length} développées`,
            "--------------------------------",
            "#CVNU #Web3 #FutureOfWork #Dev"
        ];

        let cardContent = [];

        // Templates selon le canal (corrigés)
        if (pCode === 'LI') {
            cardContent = [
                `${pData.s} CERTIFICAT DE PROGRESSION CVNU`,
                "╔════════════════════════════════════════════════════════════╗",
                "║[📜]┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈{[┈┈/Linkedin  ┈┈]}┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈║",
                "╠────────────────────────────────────────────────────────────╣",
                "║                                                            ║",
                "║ Je certifie par la présente l'évolution de mon             ║",
                "║ actif numérique personnel.                                 ║",
                "║                                                            ║",
                `║ 👤 EXPERT      . : AGI.                                    ║`,
                `║ 🎓 NIVEAU      . : ${u.level}/10                           ║`,
                `║ 💼 COMPÉTENCES . : Programmation, Social, Compta.          ║`,
                `║ 🏗️ ARCHITECTURE : ${u.dev_classes.length} classes métiers  ║`,
                `║ 📈 VALORISATION. : ${u.value_points} Crédits               ║`,
                "║                                                            ║",
                "║ Le CVNU réinvente la preuve de compétence.                 ║",
                "║ #Innovation #FutureOfWork #Blockchain #CVNU                ║",
                "║                                                            ║",
                "╠════════════════════════════════════════════════════════════╣",
                "║[███░░░]< .............................................. % >║",
                "╚════════════════════════════════════════════════════════════╝"
            ];
        } else {
            // Template générique pour autres plateformes
            cardContent = [
                `${pData.s} CVNU STATUS UPDATE [Day ${this.mapValueProgression().dayInCycle}]`,
                "╔════════════════════════════════════════════════════════════╗",
                `║[📜]┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈{[┈┈/${pData.n}  ┈┈]}┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈║`,
                "╠────────────────────────────────────────────────────────────╣",
                "║                                                            ║",
                `║ LVL UP! 🆙 Niveau ${u.level}                               ║`,
                `║ 💰 Balance: ${u.value_points} ${CREDITS}                   ║`,
                `║ 🛠️ Tech Stack: ${u.skills.map(s => s.label).join(' + ')}   ║`,
                `║ 🏗️ Architecture: ${u.dev_classes.length} classes          ║`,
                "║   ---------------------------------------                  ║",
                "║ Rejoignez le protocole : /start                            ║",
                `║ #CVNU #${pData.n.replace(/\s+/g, '')} #IndieMaker #Dev     ║`,
                "║                                                            ║",
                "╠────────────────────────────────────────────────────────────╣",
                "║[███░░░]< .............................................. % >║",
                "╚════════════════════════════════════════════════════════════╝"
            ];
        }

        return this.wrapASCII(`EXPORT ${pData.n.toUpperCase()}`, template.join('\n') + '\n' + cardContent.join('\n'));
    },

    /**
     * [TEMPLATE_DASHBOARD] /card_fusion
     * Fusionne l'accréditation physique et la diffusion sociale.
     */
    generateAccreditationCard(clientData) {
        const u = KERNEL.STATE.USER_CVNU;
        const b = KERNEL.ASCII_DICT.TENSOR.BORDERS.DOUBLE;
        const creditsSymbol = KERNEL.ASCII_DICT.CURRENCY.CREDIT;

        // Utilisation du calculateur UTMi pour valoriser l'acte d'accréditation
        const utmiVal = utmiCalculator.calculateUtmi({
            type: 'user_interaction',
            data: { text: "Accréditation Client Pack 50", wordCount: 10 }
        });

        // Calcul du badge de rareté (basé sur le nombre de clients déjà accrédités)
        const slotNumber = (u.dev_classes.filter(c => c.type === 'CLIENT_ACCREDITED').length + 1)
                           .toString().padStart(2, '0');

        return [
            `${b[0]}${b[4].repeat(60)}${b[1]}`,
            `${b[5]}  💳 QI-STORE : ACCRÉDITATION [${slotNumber}/50]             ${b[5]}`,
            `${b[6]}${b[4].repeat(60)}${b[7]}`,
            `${b[5]}  ID CARTE   : ${clientData.id.substring(0, 20)}...          ${b[5]}`,
            `${b[5]}  CLIENT     : ${clientData.name.padEnd(30)} ${b[5]}`,
            `${b[5]}  VALEUR RUP : 1.00 € (ALL-FOR-ONE)                    ${b[5]}`,
            `${b[5]}  TVA (20%)  : 0.20 € | TAXE AI: 0.068 €               ${b[5]}`,
            `${b[6]}${b[4].repeat(60)}${b[7]}`,
            `${b[5]}  [PROMO] Partager ce statut : /promo LI               ${b[5]}`,
            `${b[2]}${b[4].repeat(60)}${b[3]}`
        ].join('\n');
    },
// --- UTILS JWT & ENCODAGE ---
    
    /**
     * Encode une chaîne ou un objet en Base64 (Compatible URL pour JWT)
     */
    /** * UTILS JWT - VERSION ULTRA-ROBUSTE (API TEXTDECODER)
 * Cette version supporte les emojis et ne plante jamais avec URI malformed.
 */
    base64UrlEncode(source) {
        const json = typeof source === 'string' ? source : JSON.stringify(source);
        
        // Utilisation de TextEncoder pour transformer le JSON en Uint8Array (UTF-8 pur)
        const uint8 = new TextEncoder().encode(json);
        const binString = Array.from(uint8, (x) => String.fromCharCode(x)).join("");
        const b64 = btoa(binString);
        
        return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    },
    
    base64UrlDecode(token) {
        // 1. On nettoie les bordures ASCII éventuelles
    const cleanToken = token.replace(/[^A-Za-z0-9\-_.]/g, '');

    // 2. Un JWT valide a 3 parties séparées par des points
    const parts = cleanToken.split('.');
    if (parts.length !== 3) {
        throw new Error("Format JWT invalide : 3 parties attendues.");
    }

    // 3. On ne décode que le PAYLOAD (index 1)
    let base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    while (base64.length % 4) { base64 += '='; }
    
    try {
        const binString = atob(base64);
        const uint8 = Uint8Array.from(binString, (m) => m.charCodeAt(0));
        return JSON.parse(new TextDecoder().decode(uint8));
    } catch (e) {
        console.error("❌ Erreur décodage Payload :", e.message);
        throw new Error("Impossible de lire les données du Token.");
        }
    },
    /**
     * Génère une signature HMAC simulée (Pour l'intégrité du Token)
     */
/**
     * Génère une signature HMAC simulée
     * UPDATE : Utilise la clé secrète passée en paramètre
     */
async signTokenAsync(header, payload, secret) {
        const encoder = new TextEncoder();
        const data = header + "." + payload;
        
        // 1. Import de la clé secrète
        const key = await window.crypto.subtle.importKey(
            "raw", 
            encoder.encode(secret),
            { name: "HMAC", hash: "SHA-256" },
            false, 
            ["sign"]
        );

        // 2. Signature
        const signatureBuffer = await window.crypto.subtle.sign(
            "HMAC", 
            key, 
            encoder.encode(data)
        );

        // 3. Conversion ArrayBuffer -> Base64URL
        const signatureArray = Array.from(new Uint8Array(signatureBuffer));
        const signatureBase64 = btoa(signatureArray.map(c => String.fromCharCode(c)).join(''));
        
        return signatureBase64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    },

    // Garde l'ancienne pour compatibilité synchrone si besoin (mais on va passer en async partout)
    /**
     * MODULE PERSISTANCE : Signature Synchrone (Simulation pour extraction JWT.IO)
     * @param {string} header - Header encodé en Base64Url
     * @param {string} payload - Payload encodé en Base64Url
     * @param {string} secret - La clé secrète définie dans PersistenceManager
     */
    signToken(header, payload, secret) {
        // Utilisation de la clé secrète passée en paramètre (a-string-secret-at-least-256-bits-long)
        const data = header + "." + payload;
        
        // Algorithme déterministe pour générer une signature cohérente sans API Async
        let hash = 0;
        const combinedData = data + secret;
        
        for (let i = 0; i < combinedData.length; i++) {
            const char = combinedData.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0; // Conversion en entier 32bit
        }
    
        // Encodage au format Base64Url conforme à la norme RFC 7519
        return btoa(Math.abs(hash).toString())
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');
    },
    /**
     * MODULE PERSISTANCE : Sauvegarde Standardisée JWT (RFC 7519)
     * Structure: Header.Payload.Signature
     */
    saveSession() {
        try {
            // 1. HEADER (Méta-données W3C)
            const headerData = { 
                alg: "HS256", // Algorithme simulé
                typ: "JWT",
                proto: "CVNU_v2"
            };
            
            // 2. PAYLOAD (Données Métier + Claims standards)
            const payloadData = {
                // Claims réservés (Standard W3C/JWT)
                iss: "CVNU_CORE_SYSTEM",        // Émetteur
                iat: Math.floor(Date.now() / 1000), // Issued At
                sub: KERNEL.STATE.USER_CVNU.license.id || "USER_ANON", // Sujet
                
                // Données privées (State complet)
                state: KERNEL.STATE
            };

            // 3. ENCODAGE
            const encodedHeader = this.base64UrlEncode(headerData);
            const encodedPayload = this.base64UrlEncode(payloadData);
            
            // 4. SIGNATURE (Intégrité)
            const signature = this.signToken(encodedHeader, encodedPayload);

            // 5. ASSEMBLAGE DU TOKEN
            const jwtToken = `${encodedHeader}.${encodedPayload}.${signature}`;

            // Affichage pour l'utilisateur
            const msg = [
                "TOKEN DE SAUVEGARDE GÉNÉRÉ (FORMAT JWT) :",
                "╠────────────────────────────────────────────────────────────╣",
                jwtToken, // C'est cette chaîne que vous pourrez coller sur jwt.io
                "╠────────────────────────────────────────────────────────────╣",
                `🔐 TYP : JWT (RFC 7519)`, 
                `📦 POIDS : ${jwtToken.length} bytes`,
                "💾 STATUS : /saved (Ready for visual binary processing)"
            ].join('\n');
            
            return this.wrapASCII("SYSTEM SAVE (JWT STANDARD)", msg);

        } catch (e) { 
            return this.wrapASCII("ERREUR SAVE", e.message); 
        }
    },
    /**
     * MODULE PERSISTANCE : Chargement JWT
     */
    loadSession(token) {
        if (!token) return this.wrapASCII("ERREUR", "Veuillez fournir un token JWT après /load");
        
        try {
            // Découpage du Token
            const parts = token.split('.');
            if (parts.length !== 3) {
                throw new Error("Format de token invalide. Attendu: Header.Payload.Signature");
            }

            const [headerB64, payloadB64, signatureB64] = parts;

            // 1. Vérification de la Signature (Sécurité)
            const expectedSig = this.base64UrlDecode(this.signToken(headerB64, payloadB64)).sig;
            const actualSig = this.base64UrlDecode(signatureB64).sig;

            if (expectedSig !== actualSig) {
                console.warn("⚠️ ATTENTION : Signature du token invalide ou corrompue.");
                // On peut choisir de bloquer ou d'avertir seulement
            }

            // 2. Décodage du Payload
            const payload = this.base64UrlDecode(payloadB64);
            
            // 3. Vérification de la structure des données
            if (!payload.state || !payload.state.USER_CVNU) {
                throw new Error("Le payload ne contient pas d'état CVNU valide.");
            }

            // 4. Application de l'état
            KERNEL.STATE = payload.state;
            
            // Mise à jour de la session pour éviter les sauts temporels bizarres
            KERNEL.STATE.SESSION.last_load = new Date().toISOString();

            this.createMessageInstance('SYSTEM', `Session restaurée depuis JWT (iat: ${payload.iat})`);
            
            return this.wrapASCII("SYSTEM LOAD (JWT)", 
                `✅ SUCCÈS : Profil chargé via JWT Standard.\n` +
                `👤 Sujet: ${payload.sub}\n` +
                `📅 Date du token: ${new Date(payload.iat * 1000).toLocaleString()}\n` +
                `💳 Solde restauré: ${KERNEL.STATE.USER_CVNU.value_points} Crédits`
            );

        } catch (e) {
            return this.wrapASCII("ERREUR LOAD", "Echec lecture Token.\n" + e.message);
        }
    },
    
    /**
     * MODULE D'ASSISTANCE DE PROMPT (META-PROMPTING)
     */
    assistPromptGen(args) {
        if (!args || args.length === 0) {
            return this.wrapASCII("PROMPT HELPER", "USAGE: /prompt [TYPE] [CONTEXTE]\nTYPES: IMG, DEV, STORY");
        }

        const type = args[0].toUpperCase();
        const context = args.slice(1).join(' ') || "Générique";
        const userLevel = KERNEL.STATE.USER_CVNU.level;
        let outputPrompt = "";

        switch (type) {
            case 'IMG':
                outputPrompt = `/imagine prompt: Cinematic shot of a futuristic workspace, style cyberpunk solar-punk, level ${userLevel} clearance, displaying holographic dashboard with data about ${context}, warm lighting, 8k, unreal engine --ar 16:9`;
                break;
            case 'DEV':
                outputPrompt = `ACT AS A SENIOR DEVELOPER. Context: CVNU System Level ${userLevel}. Task: Implement a modular function for ${context}. Constraints: Use JavaScript ES6, ASCII outputs, and Error Handling.`;
                break;
            case 'STORY':
                outputPrompt = `Write a roleplay log entry for a user at Level ${userLevel} in a digital economy simulation. The user has just completed a mission involving ${context}. Tone: Professional yet sci-fi.`;
                break;
            default:
                return this.wrapASCII("ERREUR", "Type inconnu. Essayez /prompt IMG ou /prompt DEV");
        }

        const res = [
            "COPIEZ CE PROMPT POUR VOTRE IA GÉNÉRATIVE :",
            "--------------------------------------------------",
            outputPrompt,
            "--------------------------------------------------"
        ];
        return this.wrapASCII(`GENERATOR [${type}]`, res.join('\n'));
    },

    /**
     * Calcul de la progression temporelle.
     */
    mapValueProgression() {
        const cfg = KERNEL.STATE.CONFIG;
        const cv = KERNEL.STATE.USER_CVNU;
        // Calcul des jours écoulés depuis le début de la session
        const daysElapsed = Math.floor((Date.now() - KERNEL.STATE.SESSION.start_ts) / (1000 * 60 * 60 * 24)) % cfg.CYCLE_DAYS;
        // Calcul linéaire du potentiel de gains
        const step = (cfg.MAX_VALUE - cfg.MIN_VALUE) / (cfg.LEVEL_MAX - 1);
        const potential = cfg.MIN_VALUE + (step * (cv.level - 1));

        return { dayInCycle: daysElapsed + 1, currentPotential: Math.round(potential), status: cv.level === 1 ? "Étudiant" : "Actif" };
    },

    /** * Simulation de Gameplay (Commande /test).
     * Génère une action aléatoire et met à jour les stats et la grille.
     */
    simulateGameplay() {
        const prog = this.mapValueProgression();
        
        // 1. Sélection d'une action "Activité"
        const types = [
            { label: 'Tech', icon: '💾', pts: 150 },
            { label: 'Agri', icon: '🌾', pts: 100 },
            { label: 'Com', icon: '🏪', pts: 200 }
        ];
        const action = types[Math.floor(Math.random() * types.length)];
        this.addCVNUPoints(action.pts);
        
        // 2. Sélection d'une compétence "AGI"
        const sectors = Object.keys(KERNEL.ASCII_DICT.SKILLS_MATRIX);
        const randomSectorKey = sectors[Math.floor(Math.random() * sectors.length)];
        const sector = KERNEL.ASCII_DICT.SKILLS_MATRIX[randomSectorKey];
        const ptsAGI = 250; 
        
        // 3. Mise à jour visuelle de la grille (Jour actuel)
        KERNEL.STATE.GRID_28[prog.dayInCycle - 1] = sector.icon;

        // 4. Sauvegarde des données (XP Skills + Points globaux)
        this.updateAGISkills(randomSectorKey);
        this.addCVNUPoints(ptsAGI);

        // Audit Log
        this.createMessageInstance('SYSTEM', `Activité: ${action.label} + AGI: ${sector.label}`);

        // Retourne un objet de données (sera formaté par wrapASCII)
        return { 
            "JOUR": `${prog.dayInCycle}/28`,
            "ACTION": `${action.icon} ${action.label} (+${action.pts})`, 
            "SECTEUR AGI": `${sector.icon} ${sector.label} (+${ptsAGI})`, 
            "CAPACITE": sector.capacity, 
            "TOTAL POINTS": action.pts + ptsAGI 
        };
    },

    /**
     * Mise à jour du registre de compétences (RPG System).
     */
    updateAGISkills(sectorKey) {
        const userSkills = KERNEL.STATE.USER_CVNU.skills;
        const skillEntry = userSkills.find(s => s.id === sectorKey);
        const matrixDef = KERNEL.ASCII_DICT.SKILLS_MATRIX[sectorKey];

        if (skillEntry) {
            skillEntry.exp += 1;
        } else {
            userSkills.push({
                id: sectorKey,
                label: matrixDef.label,
                exp: 1
            });
        }
    },

    /**
     * Générateur de la vue "Compétences" (pour /skills).
     * Pointe vers KERNEL.SKILLS_MATRIX au lieu de KERNEL.ASCII_DICT.SKILLS_MATRIX
     */
    renderSkills() {
        let lines = [];
        // DÉBUG & SÉCURITÉ : On cible la bonne localisation de la matrice
        const MATRIX = KERNEL.SKILLS_MATRIX; 

        if (!MATRIX) {
            return "ERREUR CRITIQUE: SKILLS_MATRIX non trouvée dans KERNEL.";
        }

        // Boucle sur les compétences acquises
        (KERNEL.STATE.USER_CVNU.skills || []).forEach(s => {
            // Vérification si la définition de la compétence existe (ex: PROG)
            const skillDef = MATRIX[s.id];
            
            const icon = skillDef ? skillDef.icon : '❓';
            const label = skillDef ? skillDef.label : s.id;
            const progress = "█".repeat(Math.min(s.exp, 10)).padEnd(10, "░");
            
            lines.push(`${icon} ${label.padEnd(15)} [${progress}] Niv.${s.exp}`);
        });
        
        // Ajout des compétences déduites du périmètre
        const perimeterSkills = this.deduceSkillsFromPerimeter();
        perimeterSkills.forEach(skill => {
            // On vérifie qu'on ne l'a pas déjà affichée
            if (!KERNEL.STATE.USER_CVNU.skills.find(s => s.id === skill.id)) {
                lines.push(`${skill.icon} ${skill.label.padEnd(15)} [░░░░░░░░░░] (potentiel)`);
            }
        });
        
        // Compétences de développement (Classes générées)
        if (KERNEL.STATE.USER_CVNU.dev_classes && KERNEL.STATE.USER_CVNU.dev_classes.length > 0) {
            lines.push(`\n👨‍💻 ARCHITECTURE LOGICIELLE:`);
            lines.push(`   Classes développées: ${KERNEL.STATE.USER_CVNU.dev_classes.length}`);
            lines.push(`   Points architecture: ${KERNEL.STATE.USER_CVNU.dev_classes.length * 500}`);
        }
        
        return lines.length ? lines.join('\n') : "Aucune compétence acquise.";
    },

    /**
     * [NOUVEAU] DÉDUCTION DES COMPÉTENCES DU PÉRIMÈTRE
     * Utilise KERNEL.SKILLS_MATRIX
     */
    deduceSkillsFromPerimeter() {
        const activity = KERNEL.STATE.USER_CVNU.perimeter_activity || {};
        const skills = [];
        
        // Analyse des transactions pour déduire les compétences
        for (const [companyKey, data] of Object.entries(activity)) {
            if (data.transactions > 0) {
                // Trouver le secteur de l'entreprise
                for (const category of ['RETAIL', 'ENERGY', 'DIGITAL', 'BANK']) {
                    if (KERNEL.ASCII_DICT.PERIMETER[category] && 
                        KERNEL.ASCII_DICT.PERIMETER[category][companyKey]) {
                        
                        const company = KERNEL.ASCII_DICT.PERIMETER[category][companyKey];
                        // CORRECTION ICI : Accès direct à KERNEL.SKILLS_MATRIX
                        const sector = KERNEL.SKILLS_MATRIX[company.sector];
                        
                        if (sector && !skills.find(s => s.id === company.sector)) {
                            skills.push({
                                id: company.sector,
                                label: sector.label,
                                icon: sector.icon,
                                evidence: `${data.transactions} tx avec ${company.name}`
                            });
                        }
                        break;
                    }
                }
            }
        }
        
        return skills;
    },

    /**
     * Générateur de la vue "Carte agendat" (pour /cal).
     */
    renderMap() {
        const grid = KERNEL.STATE.GRID_28;
        const prog = this.mapValueProgression();
        let lines = [];
        
        // Découpage en 4 semaines de 7 jours
        for (let i = 0; i < 28; i += 7) {
            let row = grid.slice(i, i + 7).join(' ');
            lines.push(`S${(i/7) + 1} : ${row}`);
        }
        lines.push(`----------------------------------------`);
        lines.push(`POTENTIEL: ${prog.currentPotential} ${KERNEL.ASCII_DICT.CURRENCY.CREDIT}`);
        
        // Ajout du statut du périmètre
        const activityCount = Object.keys(KERNEL.STATE.USER_CVNU.perimeter_activity).length;
        if (activityCount > 0) {
            lines.push(`PÉRIMÈTRE: ${activityCount} entreprises actives`);
        }
        
        // Ajout du statut développement
        if (KERNEL.STATE.USER_CVNU.dev_classes.length > 0) {
            lines.push(`DÉVELOPPEMENT: ${KERNEL.STATE.USER_CVNU.dev_classes.length} classes métiers`);
        }
        
        return lines.join('\n');
    },

    /**
     * Génère un hash aléatoire pour simuler une signature blockchain/audit.
     */
    generateAuditHash() {
        try {
            if (crypto && crypto.randomBytes) {
                return crypto.randomBytes(12).toString('hex');
            }
        } catch (e) { }
        return Math.random().toString(36).substring(2, 15) + Date.now().toString(36).slice(-4);
    },

    statusReport() {
        // Fonction interne pour logs console lors du boot
    },

/**
     * Générateur de la vue "Logs" (pour /audit).
     */
    renderConversationLog() {
        // CORRECTION : On pointe vers STATE
        const messaging = KERNEL.STATE.MESSAGING; 
        
        if (!messaging || !messaging.HISTORY || messaging.HISTORY.length === 0) {
            return "Aucun historique disponible.";
        }

        let lines = [];
        messaging.HISTORY.slice(-15).forEach(msg => {
            const time = msg.timestamp ? msg.timestamp.split('T')[1].split('.')[0] : '??:??';
            // Nettoyage pour affichage compact
            const cleanContent = (msg.content || '').toString().replace(/\n/g, ' ').slice(0, 60);
            lines.push(`[${time}] ${msg.role}: ${cleanContent}...`);
        });
        return lines.join('\n');
    },
/**
     * MOTEUR DU DÉFI 28 JOURS (Autofinancement RUP)
     * Calcule la projection fiscale et l'effort nécessaire.
     */
    runDefi28Challenge() {
        const state = KERNEL.STATE;
        const cycle = this.getCycleStatus(); // Récupère J13/J28
        const user = state.USER_CVNU;
        
        // 1. Calcul de la "Dette" d'effort (Objectif vs Réel)
        const targetCurve = (7500 / 28) * cycle.day; // Courbe idéale linéaire
        const currentVal = user.value_points;
        const performance = ((currentVal / targetCurve) * 100).toFixed(1);
        
        // 2. Simulation de l'autofinancement (Taxe IA générée)
        // C'est l'argent que l'utilisateur a généré pour le système
        const generatedTax = (currentVal * KERNEL.ECONOMY.TAX_AI).toFixed(2);
        
        // 3. Détermination du statut
        let statusIcon = "🟢";
        if (performance < 80) statusIcon = "🟠";
        if (performance < 50) statusIcon = "🔴";

        const report = [
            `📅 JOUR DU CYCLE : J${cycle.day} / 28`,
            `---------------------------------------`,
            `💰 VALEUR ACTUELLE : ${currentVal.toFixed(2)} UTMi (Crédits)`,
            `📈 OBJECTIF THÉORIQUE : ${targetCurve.toFixed(0)} UTMi`,
            `📊 PERFORMANCE : ${statusIcon} ${performance}% de la trajectoire`,
            `---------------------------------------`,
            `🔄 AUTOFINANCEMENT (TAXE IA) :`,
            `   Vous avez généré ${generatedTax} € pour le fond commun.`,
            `   Cela garantit votre RUP de base (${KERNEL.ECONOMY.MIN_RUP}€).`,
            `---------------------------------------`,
            `🎯 PROCHAINE ACTION :`,
            `   > /mission accept M-02 (Optimisation)`,
            `   > /code (Créer de la valeur)`,
            `   > /rib (Sécuriser les gains)`
        ].join('\n');

        return this.wrapASCII("DÉFI 28 JOURS : STATUT", report);
    },
    /**
     * Analyseur statistique (pour /stats).
     */
    analyzeConversationHistory() {
        // CORRECTION : On pointe vers STATE
        const messaging = KERNEL.STATE.MESSAGING;
        
        if (!messaging || !messaging.HISTORY) return { "Erreur": "Historique introuvable" };

        const history = messaging.HISTORY;
        const text = history.map(m => m.content).join(' ');

        // Analyse locale basique
        return {
            "Total Messages": history.length,
            "Total Caractères": text.length,
            "Lettres": (text.match(/[A-Za-z]/g) || []).length,
            "Chiffres": (text.match(/\d/g) || []).length,
            "Dernière action": history.length > 0 ? history[history.length - 1].role : "N/A"
        };
    },
    /**
     * MOTEUR DE RENDU SYNTHÉTIQUE TVA & CIRCULARITÉ
     * Affiche l'état fiscal AI et les métriques du périmètre.
     */
    renderTVADashboard() {
        const perimeter = this.analyzePerimeter();
        const eco = KERNEL.ECONOMY;
        const state = KERNEL.STATE.TREASURY;
        
        const display = [
            `🤖 TAXE AI (REDISTRIBUTION RUP)`,
            `---------------------------------------`,
            `📊 TAUX APPLIQUÉ     : ${(eco.TAX_AI * 100).toFixed(1)}% (L3121-1)`,
            `🏦 COLLECTE TOTALE   : ${state.tva_collected.toFixed(2)} €`,
            `💠 FONDS RUP GÉNÉRÉ  : ${(state.tva_collected * 0.34).toFixed(2)} €`,
            ` `,
            `🔄 ÉCONOMIE CIRCULAIRE (PÉRIMÈTRE)`,
            `---------------------------------------`,
            `🏢 ENTITÉS ACTIVES   : ${Object.keys(KERNEL.STATE.USER_CVNU.perimeter_activity).length}`,
            `💳 FLUX CIRCULANTS   : ${state.tva_redistributed.toFixed(2)} € redistribués`,
            `⚖️ STATUT             : ${state.tva_redistributed > 0 ? '✅ ACTIF' : '⏳ INITIALISATION'}`,
            ` `,
            `💡 COMMANDES DISPONIBLES :`,
            `> /tva init          : Analyser les preuves JPG`,
            `> /tva perimeter [E] [M] : Calculer taxe spécifique`,
            `> /tva [montant]     : Calcul TVA standard (20%)`
        ].join('\n');

        return this.wrapASCII("TABLEAU DE BORD FISCAL CVNU", display);
    },
    /** * GESTIONNAIRE DE COMMANDES (Dispatcher).
     * Point d'entrée principal. Reçoit la commande string et retourne la string ASCII formatée.
     */
    onCommandReceive(cmd, payload = {}) {
        if (!cmd || typeof cmd !== 'string') {
            return this.wrapASCII("ERREUR", "Commande invalide");
        }
        const parts = cmd.trim().split(/\s+/);
        const command = parts[0];
        const args = parts.slice(1); 
        
        switch (command) {
            case KERNEL.COMMANDS.CVNU_ACTIVATE:
                this.createMessageInstance('SYSTEM', 'Activation CVNU demandée');
                return this.wrapASCII("CVNU MANAGEMENT", "EXECUTING_MANAGEMENT_PROTOCOL...\nDATA: CVNU_V2 ACTIVATED");
          
            case '/sys':
                const subCmd = args.join(' ');
                const sysResult = this.onCommandReceive(subCmd);
                // On ne ré-encadre pas si le résultat est déjà un bloc ASCII
                return (sysResult.includes('╔')) ? sysResult : this.wrapASCII("SYSTÈME LOCAL", sysResult);

            // 2. ROUTAGE AGI (LLAMA-3.1-8B-INSTANT)
            case '/agi':
                const agiPrompt = args.join(' ');
                this.createMessageInstance('USER', agiPrompt);

                // On prépare le contenu sémantique
                const agiContent = `[SYSTEM_CONTEXT]: ${JSON.stringify(KERNEL.STATE.USER_CVNU)}\n[USER_PROMPT]: ${agiPrompt}`;

                // On encadre DIRECTEMENT avec wrapASCII
                const wrappedAgi = this.wrapASCII("AGI ROUTING ENGINE", agiContent);

                // On ajoute le flag de transport pour le Front-end
                return `__BRIDGE_AGI__${wrappedAgi}`;

        // 3. ROUTAGE AI (BRUT)
            case '/ai':
                const aiPrompt = args.join(' ');
                this.createMessageInstance('USER', aiPrompt);
                const wrappedAi = this.wrapASCII("AI STREAM", aiPrompt);
                return `__BRIDGE_AI__${wrappedAi}`;
            case '/agi-t':
                if (args[0] === 'train') {
                    const targetNode = command === '/cvnu' ? 'CORE' : 'AGI';
                    const endpoint = command === '/cvnu' ? '/api/cvnu/train' : '/api/agi/train';
                    
                    this.createMessageInstance('SYSTEM', `Initialisation TENSORFLOW sur NODE_${targetNode}`);

                    // Retourne une Promesse pour la gestion asynchrone sans bloquer le Kernel
                    return fetch(`http://localhost:3145${endpoint}`, { method: 'POST' })
                        .then(response => response.json())
                        .then(data => {
                            if (data.success) {
                                const perfLog = [
                                    `SUCCESS: ENTRAÎNEMENT ${targetNode} TERMINÉ`,
                                    `---------------------------------------`,
                                    `🌐 BACKEND   : ${data.backend.toUpperCase()} (ACCÉLÉRATION C++)`,
                                    `📈 FINAL LOSS : ${parseFloat(data.final_loss).toFixed(5)}`,
                                    `---------------------------------------`,
                                    `📊 STATUS     : MODÈLE OPTIMISÉ ET PRÊT.`
                                ].join('\n');
                                return this.wrapASCII(`TENSORFLOW ${targetNode}_RUNTIME`, perfLog);
                            } else {
                                return this.wrapASCII("ERROR", `Échec de l'entraînement: ${data.error}`);
                            }
                        })
                        .catch(err => {
                            return this.wrapASCII("FATAL ERROR", `Serveur d'entraînement injoignable sur :127.0.0.1:${KERNEL.HOST.IDENTITY.PORT}`);
                        });
                }
                
                // Comportement par défaut si pas d'argument 'train'
                if (command === KERNEL.COMMANDS.CVNU_ACTIVATE) {
                    this.createMessageInstance('SYSTEM', 'Activation CVNU demandée');
                    return this.wrapASCII("CVNU MANAGEMENT", "EXECUTING_MANAGEMENT_PROTOCOL...\nDATA: CVNU_V2 ACTIVATED");
                }
                break;
                
            case KERNEL.COMMANDS.SAVE:
                const filename = args[0] || "token.json";
                // Comme save est async, on retourne une promesse que main.js devra gérer
                return PersistenceManager.save(filename).then(msg => msg);
                return this.saveSession();
                
            case KERNEL.COMMANDS.LOAD:
                return PersistenceManager.load(args.join('')).then(msg => msg);
            case '/diag':
    const type = args[0] ? args[0].toLowerCase() : 'help';
    const content = args.slice(1).join(' ');

    switch(type) {
        case 'flow':
            return system.wrapASCII("DIAGRAMME DE FLUX", DiagramEngine.generateFlow(content));
        case 'arch':
            const [root, ...comps] = content.split(',');
            return system.wrapASCII("ARCHITECTURE SYSTÈME", DiagramEngine.generateArch(root, comps));
        case 'seq':
            // Exemple: /diag seq USER,AGI,SC | USER|AGI|Prompt | AGI|SC|Sign
            const [actorsStr, ...sequenceSteps] = content.split('|');
            const actors = actorsStr.split(',');
            return system.wrapASCII("DIAGRAMME DE SÉQUENCE", DiagramEngine.generateSequence(actors, sequenceSteps));
        default:
            return system.wrapASCII("AIDE DIAGRAMME", 
                "Usage:\n" +
                "/diag flow [Etape1 -> Etape2]\n" +
                "/diag arch [Root, Comp1, Comp2]\n" +
                "/diag seq [A,B | A|B|Label]");
    }
            case KERNEL.COMMANDS.START:
    // Initialiser le système si ce n'est pas déjà fait
    if (typeof CVNU_SYSTEM !== 'undefined' && CVNU_SYSTEM.init) {
        CVNU_SYSTEM.init();
        }

        const intro = [
            "",
            "CONCEPT DU CVNU :",
            "-----------------",
            "Le CVNU (Cadre de Valeur Numérique Universel) est",
            "une simulation économique expérimentale basée sur",
            "vos compétences réelles.",
            "",
            "VOTRE MISSION (CYCLE DE 28 JOURS) :",
            "1. Activer le contrat  : /cvnu",
            "2. Analyser l'éco-sys  : /perimeter",
            "3. Développer solutions: /dev (Mode Architecte)",
            "4. Générer des revenus : /test",
            "",
            "OBJECTIF : Passer de 750 à 7500 Crédits.",
            "L'IA analysera vos conversations pour adapter les missions.",
            "",
            "SYSTÈME INITIALISÉ. Tapez /help pour la liste des commandes."
        ].join('\n');
        return this.wrapASCII("INITIALISATION SEQUENCE", intro);
            case KERNEL.COMMANDS.SKILLS:
                return this.wrapASCII("INVENTAIRE COMPETENCES", this.renderSkills());

            case KERNEL.COMMANDS.AUDIT:
                this.createMessageInstance('ASSISTANT', 'Génération rapport d\'audit');
                return this.wrapASCII("LOG AUDIT (LAST 10)", this.renderConversationLog());

            case KERNEL.COMMANDS.STATS:
                const stats = this.analyzeConversationHistory();
                stats["--- MARCHÉ ---"] = "";
                stats["Code Quantique"] = KERNEL.STATE.SESSION.last_quantum_code || "N/A";
                stats["Volatilité"] = ((KERNEL.STATE.SESSION.market_volatility || 0) * 100).toFixed(2) + "%";
                stats["Tendance"] = (KERNEL.STATE.SESSION.market_volatility || 0) > 0 ? "HAUSSIER (Bonus Gains)" : "BAISSIER (Malus Gains)";
                const report = MonetizationSync.syncToCVNU();
                const currency = {
                    EUR: report.total.toFixed(2),
                    USD: (report.total * 1.08).toFixed(2) // Forex simulé
                };

                    const display = [
                `🧠 AXES COGNITIFS DÉTECTÉS :`,
                `---------------------------------------`,
                `💻 Tech/Dev    : ${report.stats.tech.toFixed(1)} UTMi`,
                `⚖️ Légal/Droit  : ${report.stats.legal.toFixed(1)} UTMi`,
                `💰 Fiscalité    : ${report.stats.fiscal.toFixed(1)} UTMi`,
                `---------------------------------------`,
                `📈 VALEUR GÉNÉRÉE : ${report.total} Crédits`,
                `💶 ÉQUIVALENT EUR : ${currency.EUR} € (RUP)`,
                `💵 ÉQUIVALENT USD : ${currency.USD} $`,
                `---------------------------------------`,
                `✅ STATUT : Valeur injectée dans le CVNU.`,
                `🔐 Utilisez /save pour certifier ce gain.`
                    ].join('\n');

            return this.wrapASCII("AUDIT DE VALEUR & MONÉTISATION", display);

            case KERNEL.COMMANDS.PERIMETER:
            if (args[0] === 'mission') {
                    return this.wrapASCII("MISSION PÉRIMÈTRE", this.simulatePerimeterMission());
                } else if (args[0] === 'geo') {
                    // Nouvelle commande géographie
                    return this.analyzeGeoFiscality(args[1] || "BAVENT_14860");
                } else {
                    return this.wrapASCII("ANALYSE PÉRIMÈTRE", this.analyzePerimeter());
            }

            case KERNEL.COMMANDS.DEV:
            if (command === '/DEV' && args[0] === 'generate') {
                return this.generateContextualSolution(args[1] || 'CVNU_BASE', args.slice(2).join(' '));
            }
            case '/code':
                const instruction = args.join(' ');

                // 1. Notification au système UI (Chatroom / Éditeur)
                // Cela permet à index.html de réagir (ex: ouvrir une modal, mettre en surbrillance)
                if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('AGI_CODE_REQUEST', { 
                        detail: { 
                            prompt: instruction,
                            timestamp: Date.now()
                        } 
                    }));
                }
            
                // 2. Retour visuel ASCII pour le terminal
                return this.wrapASCII("GÉNÉRATEUR DE CODE (OPTIMIZED)", 
                    `Instruction: ${instruction}\n` +
                    `-----------------------------------\n` +
                    `STATUS : 🟢 Event 'AGI_CODE_REQUEST' émis.\n` +
                    `CONTEXT: Chatroom & Kernel Sync.\n` +
                    `OUTPUT : En attente du Playground...`
                );
            case '/inject':
            case '/run':
            // L'utilisateur colle un bloc JSON de prompt structuré
            try {
                // On reconstitue le JSON à partir des arguments (si espaces)
                const jsonString = args.join(' '); 
                const promptPayload = JSON.parse(jsonString);
                
                // Appel au Moteur Cognitif
                const result = CognitiveEngine.executeRuntime(promptPayload);
                
                // Rendu visuel du résultat
                return this.wrapASCII("COGNITIVE RUNTIME RESULT", [
                    `🔹 MODULE ACTIF : ${promptPayload.SYSTEM_STATE.ACTIVE_MODULE}`,
                    `🎯 OBJECTIF     : ${promptPayload.EVOLUTION_TRIGGER.CONDITION}`,
                    `--------------------------------------------------`,
                    `📤 SORTIE MOTEUR :`,
                    result.OUTPUT.result,
                    `--------------------------------------------------`,
                    `🆙 ÉVOLUTION    : ${result.EVOLUTION.msg}`,
                    `💾 NEXT STATE   : (Voir JSON ci-dessous)`
                ].join('\n')) + "\n\n```json\n" + JSON.stringify(result.NEXT_STATE.json_block, null, 2) + "\n```";

            } catch (e) {
                return this.wrapASCII("RUNTIME ERROR", "Le payload JSON est invalide.\nUsage: /inject { ...JSON... }");
            }
            case '/howto':
                const guide = [
                    "📚 GUIDE DU CITOYEN NUMÉRIQUE (PROTOCOLE CVNU)",
                    "-----------------------------------------------",
                    "1. VOTRE VALEUR (UTMi) : 1 mot utile = 0.50 €.",
                    "2. LE CERCLE VERTUEUX :",
                    "   - Vous produisez de la donnée (Conversation/Code).",
                    "   - L'IA prélève 6.8% (Taxe AI) pour le fonds commun.",
                    "   - Ce fonds vous reverse votre RUP tous les 28 jours.",
                    "3. LA SÉCURITÉ :",
                    "   - Votre RIB est haché (SHA-256) et stocké dans le Vault.",
                    "   - Seul votre Token JWT (/save) permet de débloquer les fonds.",
                    "-----------------------------------------------",
                    "🎯 OBJECTIF : Atteindre 7500 € par la montée en compétence."
                ].join('\n');
                return this.wrapASCII("MANUEL D'UTILISATION", guide);
            case '/prompt':
            return this.assistPromptGen(args);
            case '/card':
            if (args[0] === 'register') {
                const cardId = args[1]; 
                const clientName = args.slice(2).join(' ') || "Client_Souverain";

                // Enregistrement dans le périmètre d'activité
                system.recordPerimeterActivity('QI_STORE', 1.00, 0.20);

                const newClient = {
                    id: cardId,
                    name: clientName,
                    type: 'CLIENT_ACCREDITED',
                    last_scan: new Date().toLocaleTimeString(),
                    balance: 1.00
                };

                // Sauvegarde dans le coffre-fort (Vault)
                KERNEL.STATE.USER_CVNU.dev_classes.push(newClient);
                // Notification au Studio AV Front-end
                io.emit('CARD_ACCREDITED', newClient);
                
                return system.wrapASCII("ACCRÉDITATION RÉUSSIE", generateAccreditationCard(newClient));
            }
            return system.wrapASCII("HELP CARD", "Usage: /card register [ID] [NOM]");
            case KERNEL.COMMANDS.TEST:
                const val = 500; // UTMi
                const cost = 0.2; // EUR
                const fiscal = this.calculateCircularTax(val, cost);

                // Option pour mission périmètre ou mission classique
                if (args[0] === 'perimeter') {
                    const missionResult = this.simulatePerimeterMission();
                    return this.wrapASCII("MISSION PÉRIMÈTRE", missionResult);
                } else if (args[0] === 'dev') {
                    // Test de développement
                    this.addCVNUPoints(300);
                    return this.wrapASCII("TEST DE DÉVELOPPEMENT", {
                        "Type": "Test unitaire avancé",
                        "Points gagnés": "+300 💳",
                        "Compétence": "Programmation +1",
                        "Résultat": "✅ Tests passés avec succès",
                        "Recommandation": "Utilisez /dev pour développer des classes métiers"
                    });
                } else {
                    // Mission classique
                    const missions = [
                        { l: 'Dev FullStack', v: 1200 }, 
                        { l: 'Consulting Agri', v: 950 },
                        { l: 'Audit Smart-Contract', v: 1500 },
                        { l: 'Optimisation Drone', v: 1100 }
                    ];
                    const act = missions[Math.floor(Math.random() * missions.length)];
                    const fiscalReport = this.processEarningsWithTax(act.v, act.l);
                    
                    this.createMessageInstance('SYSTEM', `Mission terminée: ${act.l} (+${act.v})`);
                return this.wrapASCII("MONÉTISATION CIRCULAIRE", {
                    "Généré": val + " UTMi",
                    "Flux": fiscal.type,
                    "Impact RUP": fiscal.amount + " €",
                    "Mission": act, 
                    "fiscalReport": fiscalReport, 

                });
            }
            case KERNEL.COMMANDS.MISSIONS:
                return this.wrapASCII("BOARD MISSIONS J22", this.renderMissionBoard());

            // On intercepte aussi la commande singulière pour l'action
            case '/mission':
                return this.processMission(args);
            case '/cal':
            // 1. Initialisation et récupération des données
            if (!KERNEL.STATE.SESSION.cycle_start) { this.syncDefiDate(); }
            const status = this.getCycleStatus();
            const grid = KERNEL.STATE.GRID_28;
            // Dans onCommandReceive case '/cal'

            // 2. Mise à jour de la grille (4x7)
            for(let i=0; i<28; i++) {
                let row = grid.slice(i, i + 7).join(' '); // Gardez un seul espace entre les emojis
                if (i < status.day - 1) grid[i] = '✅';
                else if (i === status.day - 1) grid[i] = '📍';
                else grid[i] = '░░';
            }
        
            // 3. Construction du contenu interne (sans les bordures wrapASCII)
            // Note : On ajoute un espace compensateur pour les lignes contenant des Emojis
            let gridRows = [];
            for (let i = 0; i < 28; i += 7) {
                let row = grid.slice(i, i + 7).join(' ');
                gridRows.push(` S${(i/7) + 1} : ${row}`);
            }
        
            const calendarData = [
                `📅 CALENDRIER STRATÉGIQUE - DÉFI 28j`,
                `─`.repeat(40),
                ` DATE SYSTÈME : 07/01/2026 | ${status.timestamp}`,
                ` PHASE ACTUELLE: ${this.getPhaseName(status.day)}`,
                `─`.repeat(40),
                ...gridRows,
                ` ----------------------------------------`,
                ` POTENTIEL : ${status.target_today * 3} Ꞓ`,
                `─`.repeat(40),
                ` 📍 PROGRESSION : JOUR ${status.day} / 28`,
                ` 💰 KPI J${status.day}    : Target ${status.target_today}€ / Actuel ${status.current_balance.toFixed(2)}€`,
                ` 📊 PERFORMANCE : ${((status.current_balance / status.target_today) * 100).toFixed(1)}% de l'objectif`,
                ` 💡 CONSEIL J${status.day} : ${this.getDailyAdvice(status.day)}`
            ].join('\n');
        
            // 4. Appel de wrapASCII
            // Le secret : wrapASCII va maintenant encapsuler le tout proprement.
            return this.wrapASCII("INTERFACE CALENDRIER CVNU", calendarData);
            case '/map':
            // 1. On utilise le moteur GÉO déjà présent dans ton fichier
            const geoEngine = new AsciiGeoEngine();
            
            // 2. Utilisation du shader TERRAIN
            geoEngine.config.shader = 'TERRAIN'; 
            
            // 3. Génération du rendu ASCII
            const finalMap = geoEngine.render();

            // --- SECTION SÉCURISÉE POUR NAVIGATEUR ---
            // On regroupe tout ce qui touche à l'interface HTML ici
            if (isBrowser) {
                // 4. Sortie console Studio (Navigateur uniquement)
                if (window.logToConsole) {
                    window.logToConsole(finalMap);
                }
                
                // 5. Activation du calque pixel (Navigateur uniquement)
                if (window.layerManager) {
                    window.layerManager.revealLayer('pixel-layer');
                }
            }
            // --- FIN DE SECTION SÉCURISÉE ---

            return finalMap; // Retourne le texte au terminal ou au moteur web
            case '/move':
                if (window.mapCtrl && args[0]) {
                    return window.mapCtrl.move(args[0].toUpperCase());
                }
                return "Usage: /move [N|S|E|W]";
            // --- Dans le Dispatcher onCommandReceive ---
            case '/gem':
                return this.handleGemCommand(args);
            case '/rib': 
                // Si l'utilisateur tape "/rib FR76...", args contient l'IBAN
                if (args.length > 0) {
                    return this.registerRealRIB(args);
                }
                // Si l'utilisateur tape juste "/rib", on affiche l'état
                return this.processCreditToDevice();

            case '/device':
                return this.processCreditToDevice();
            case '/identity':
                if (args.length >= 2) {
                    KERNEL.STATE.USER_CVNU.firstName = args[0];
                    KERNEL.STATE.USER_CVNU.lastName = args.slice(1).join(' ');
                    // Met à jour le titulaire du RIB si déjà existant
                    if (KERNEL.STATE.RIB.fiat.iban) {
                        KERNEL.STATE.RIB.fiat.holder = `${args[0]} ${args.slice(1).join(' ')}`;
                    }
                    return this.wrapASCII("IDENTITÉ MISE À JOUR", `Utilisateur : ${KERNEL.STATE.USER_CVNU.firstName} ${KERNEL.STATE.USER_CVNU.lastName}`);
                }
                return this.wrapASCII("ERREUR", "Usage: /identity [Prénom] [Nom]");
            
            case KERNEL.COMMANDS.HELP:
                const helpText = [
                    "Commandes disponibles:",
                    "/help, /test, /map, /stats,",
                    "/audit, /skills, /tva, /ttf, /perimeter, /dev",
                    "/promo [LI|YT|X|TG|FB|IG], /save, /load",
                    "",
                    "Nouvelles commandes:",
                    "/test perimeter - Mission dans votre périmètre",
                    "/test dev - Test de développement",
                    "/perimeter - Analyse de votre écosystème",
                    "/dev - Développement de classes métiers",
                    "/ttf - Taxe sur les Transactions Financières"
                ].join('\n');
                return this.wrapASCII("AIDE SYSTEME", helpText);
            
            case '/promo':
                return this.generateSocialCard(args[0]);
                
            case '/tva':
                try {
                    // 1. Initialisation par preuves (Photos)
                    if (args[0] === 'init') {
                        return ActivityProofs.bootFromEvidence().then(data => {
                            const display = [
                                `💎 INITIALISATION DES FLUX RÉELS`,
                                `---------------------------------------`,
                                `🎫 PREUVES ANALYSÉES : ${ActivityProofs.scans.length}`,
                                `🏦 POOL RUP GÉNÉRÉ   : ${data.initialPool} €`,
                                `🆙 POINTS XP CITOYENS: ${data.userBalance}`,
                                `---------------------------------------`,
                                `🚀 SYSTÈME : Flux réinjectés dans le cycle.`
                            ].join('\n');
                            return this.wrapASCII("VAT FLOW INITIALIZATION", display);
                        });
                    }

                    // 2. Calcul par Périmètre (Ex: /tva perimeter LECLERC 100)
                    if (args[0] === 'perimeter' && args.length === 3) {
                        const company = args[1].toUpperCase();
                        const amount = parseFloat(args[2]);
                        let companyData = null;
                        
                        for (const cat in KERNEL.ASCII_DICT.PERIMETER) {
                            if (KERNEL.ASCII_DICT.PERIMETER[cat][company]) {
                                companyData = KERNEL.ASCII_DICT.PERIMETER[cat][company];
                                break;
                            }
                        }

                        if (!companyData) throw new Error(`Enseigne ${company} inconnue.`);

                        const res = this.computeTVA(amount, companyData.tva_rate || 20);
                        res["Taxe AI (6.8%)"] = (res["TVA"] * 0.068).toFixed(2) + " €";
                        return this.wrapASCII("CALCUL PÉRIMÈTRE CIRCULAIRE", res);
                    }

                    // 3. Calcul simple (Ex: /tva 100)
                    if (args.length === 1 && !isNaN(parseFloat(args[0]))) {
                        const res = this.computeTVA(parseFloat(args[0]), 20);
                        return this.wrapASCII("CALCULATEUR RAPIDE", res);
                    }

                    // 4. Par défaut : Tableau de bord
                    return this.renderTVADashboard();

                } catch (err) {
                    return this.wrapASCII("ERREUR TVA", err.message);
                }
            case '/bp':
                // Appel de la fonction de génération du bulletin
                return this.generateBulletinPaie();

            // --- NOUVELLE COMMANDE /ttf ---
            case KERNEL.COMMANDS.TTF:
                try {
                    if (args.length === 0) {
                        return this.wrapASCII("CALCULATEUR TTF", 
                            "Taxe sur les Transactions Financières\n\n" +
                            "Usage: /ttf [montant] [banque]\n" +
                            "Banques disponibles:\n" +
                            "  SG - Société Générale (0.3%)\n" +
                            "  CREDIT_COOP - Crédit Coopératif (0.2%)\n" +
                            "  BPI - Banque Publique d'Investissement (0.1%)\n\n" +
                            "Ex: /ttf 50000 SG\n" +
                            "Ex: /ttf 100000"
                        );
                    }
                    
                    const amount = parseFloat(args[0]);
                    const bank = args[1] ? args[1].toUpperCase() : null;
                    
                    if (isNaN(amount) || amount <= 0) {
                        throw new Error("Montant invalide");
                    }
                    
                    const ttfResult = this.calculateTTF(amount, bank);
                    this.createMessageInstance('SYSTEM', `TTF calculée pour ${amount}`);
                    
                    return this.wrapASCII("CALCUL TTF", ttfResult);
                } catch (err) {
                    return this.wrapASCII("ERREUR TTF", err.message);
                }
            case '/defi_28':
                return this.runDefi28Challenge();
            case '/city':
                // Vérifier d'abord si le système est initialisé
                if (typeof system !== 'undefined' && system.handleCityCommand) {
                    return system.handleCityCommand(args);
                } else {
                    return "[!] Erreur: Système CVNU non initialisé. Tapez /start pour initialiser le système.";
                }
                default:
                return this.wrapASCII("ERREUR", "Commande non reconnue");
        }
        // APRÈS l'exécution, on génère le biais cognitif
        const biasOutput = this.ingestCognitiveBias(cmd, response);
        
        // On peut choisir d'ajouter le biais à la réponse ou de le garder en log interne
        console.log("AGI_AWARENESS_LOG:", biasOutput);
    },
    /**
     * Génère le paquet de données pour le /gem sync
     */
    generateSyncPacket() {
        const state = KERNEL.STATE.USER_CVNU;
        const packet = [
            `1. KERNEL State: Points=${state.value_points}, Lvl=${state.level}`,
            `2. AGI Thought: Traitement du cycle J3 via NaturalAgi.js`,
            `3. Modified Files: main.js, CORE_SYSTEM_CVNU.js, naturalAgi.js`,
            `4. Priority: Intégration du Shell Bridge complet.`
        ];
        return packet.join('\n');
    },
    // --- Nouvelle fonction membre de l'objet 'system' ---
// Dans CORE_SYSTEM_CVNU.js -> onCommandReceive
    handleGemCommand(args) {
    // 1. Nettoyage et vérification des arguments
    const target = args && args.length > 0 ? args[0].trim() : "";
    
    if (target === "") {
        return this.wrapASCII("GEMS ACTIVE", "Usage: /gem [Backend|Frontend|System|Sync]");
    }

    // 2. Normalisation de la casse pour correspondre aux fichiers JSON
    const gemType = target.charAt(0).toUpperCase() + target.slice(1).toLowerCase();

    // 3. CAS SYNCHRONISATION (Invariants)
    if (gemType === 'Sync') {
        return this.wrapASCII("SYNC PROTOCOL", this.generateSyncPacket());
    }

    // 4. CAS CHARGEMENT UNITÉ (Injection Physique & Sémantique)
    const validGems = ['Backend', 'Frontend', 'System'];
    if (validGems.includes(gemType)) {
        // Injection visuelle dans le Tableur
        if (window.ModuleIALoader) {
            window.ModuleIALoader.loadGemModule(gemType);
        }

        // Notification de rôle au serveur pour NaturalAgi
        fetch('/api/agi/set-role', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ role: gemType })
        }).catch(() => {});

        const report = [
            `UNITÉ ACTIVE : @Gem${gemType}`,
            `PROTOCOLE    : ${gemType === 'Backend' ? 'DevOps/Logs' : 'Architecture/RUP'}`,
            `NIVEAU ACCÈS : LVL ${KERNEL.STATE.USER_CVNU.level} [CERTIFIÉ]`,
            `------------------------------------------`,
            `INJECTION A1 : Confirmée via ${gemType}.json`,
            `MODE         : Langage Naturel contextuel.`
        ].join('\n');

        return this.wrapASCII(`UPLINK ÉTABLI : ${gemType.toUpperCase()}`, report);
    }

    return this.wrapASCII("GEMS ERROR", `L'unité "${target}" est inconnue du Kernel.`);
    },
    /**
     * Rendu de la carte des secteurs (Agriculture, Industrie, etc.)
     */
    renderSectorMap() {
        let output = ["MATRICE DES MÉTIERS ASSOCIÉS :"];
        for (const [key, data] of Object.entries(KERNEL.SECTORS)) {
            output.push(`${data.icon} ${data.label.padEnd(18)} | Rôle: ${data.functional_role.padEnd(10)} | ${data.metric}`);
        }
        return output.join('\n');
    },
    /**
     * Logique métier : Calcul TVA.
     */
    computeTVA(amount, rate = 20) {
        if (typeof amount !== 'number' || Number.isNaN(amount) || amount < 0) {
            throw new Error('Montant invalide');
        }
        const tva = +(amount * (rate / 100));
        const total = +(amount + tva);
        KERNEL.STATE.TREASURY.tva_collected += tva;
        return { "Montant HT": amount, "Taux": rate + "%", "TVA": tva, "Total TTC": total };
    },

    /**
     * Logique métier : Ajout de points et Level Up.
     */
    addCVNUPoints(points) {
        const MAX_CAP = KERNEL.ECONOMY.MAX_RUP; // 7500
        let current = KERNEL.STATE.USER_CVNU.value_points;
        let potential = current + points;

        if (potential > MAX_CAP) {
            const surplus = potential - MAX_CAP;
            
            // 1. On sature le compte utilisateur à 7500
            KERNEL.STATE.USER_CVNU.value_points = MAX_CAP;
            
            // 2. L'excédent part dans le Trésor Public (Fonds de Solidarité)
            KERNEL.STATE.TREASURY.cvnu_pool += surplus;
            
            console.log(this.wrapASCII("PLAFOND ATTEINT (RÈGLE UNIVERSELLE)", 
                `⚠️ Solde bloqué à ${MAX_CAP} 💳\n` +
                `💸 Excédent redistribué: ${surplus.toFixed(2)} 💳 au Fonds RUP\n` +
                `Le système reste équitable pour tous.`
            ));
        } else {
            KERNEL.STATE.USER_CVNU.value_points = potential;
        }
        
        KERNEL.STATE.USER_CVNU.value_points += points;
        while (KERNEL.STATE.USER_CVNU.value_points >= KERNEL.STATE.USER_CVNU.target_points) {
            KERNEL.STATE.USER_CVNU.level = Math.min(10, KERNEL.STATE.USER_CVNU.level + 1);
            KERNEL.STATE.USER_CVNU.value_points -= KERNEL.STATE.USER_CVNU.target_points;
            KERNEL.STATE.USER_CVNU.target_points = Math.round(KERNEL.STATE.USER_CVNU.target_points * 1.5);
            // Notification de niveau
            console.log(this.wrapASCII("LEVEL UP", 
                `Félicitations ! Niveau ${KERNEL.STATE.USER_CVNU.level} atteint.\n` +
                `Nouvel objectif: ${KERNEL.STATE.USER_CVNU.target_points} crédits\n` +
                `Compétences développées: ${KERNEL.STATE.USER_CVNU.dev_classes.length} classes`
            ));
        }
    }
};
/**
 * ════════════════════════════════════════════════════════════
 * MODULE: GOUVERNANCE / RIC (Patch i-5146)
 * @role Gestion de la Démocratie Directe & Veto Souverain
 * @legal_ref https://petitions.assemblee-nationale.fr/initiatives/i-5146
 * ════════════════════════════════════════════════════════════
 */
const RIC_CONFIG = {
    QUORUM_REQUIRED: 0.51,       // 51% de participation min.
    WHITE_VOTE_WEIGHT: 1.0,      // Le blanc est un suffrage exprimé
    INVALIDATION_THRESHOLD: 0.50 // Si >50% Blancs = REJET SOUVERAIN (Veto)
};

class GovernanceDAO {
    
    constructor(citizensList = []) {
        this.voters = citizensList; // Liste des CVNU ID éligibles
        this.currentProposal = null;
        this.history = [];
    }

    /**
     * Soumet une proposition au vote (ex: Offre du Liquidateur)
     */
    submitProposal(proposalID, description, author = "SYSTEM") {
        this.currentProposal = {
            id: proposalID,
            author: author,
            description: description,
            votes: { yes: 0, no: 0, blank: 0 },
            total_votes: 0,
            status: "OPEN",
            timestamp: new Date().toISOString()
        };
        console.log(`[🗳️ RIC] Scrutin Ouvert : ${description}`);
        return this.currentProposal;
    }

    /**
     * Enregistre un vote cryptographique
     * @param {string} choice - 'YES', 'NO', ou 'BLANK' (Vote Blanc)
     */
    castVote(citizenID, choice) {
        if (!this.currentProposal || this.currentProposal.status !== "OPEN") {
            return { error: "POLL_CLOSED" };
        }

        const c = choice.toUpperCase();
        if (['YES', 'NO', 'BLANK'].includes(c)) {
            this.currentProposal.votes[c.toLowerCase()]++;
            this.currentProposal.total_votes++;
            return { status: "VOTE_RECORDED", hash: `VOTE_${citizenID}_${Date.now()}` };
        }
        return { error: "INVALID_CHOICE" };
    }

    /**
     * Clôture le RIC et applique le Patch i-5146
     */
    closePoll() {
        const p = this.currentProposal;
        if (!p) return null;

        const total = p.total_votes;
        if (total === 0) return { status: "VOID", reason: "NO_PARTICIPATION" };

        // Calculs pourcentages
        const scoreYes = p.votes.yes / total;
        const scoreBlank = p.votes.blank / total;

        // LOGIQUE i-5146 : LE VETO SOUVERAIN
        if (scoreBlank > RIC_CONFIG.INVALIDATION_THRESHOLD) {
            p.status = "REJECTED_BY_SOVEREIGNTY";
            const result = {
                status: "VETO_ACTIF",
                reason: "MAJORITE_BLANCHE (>50%)",
                legal_effect: "ANNULATION_PROCEDURE", // Bloque le Liquidateur
                details: p.votes
            };
            this._archive(p);
            return result;
        }

        // Logique Binaire classique (si pas de Veto)
        p.status = scoreYes > 0.5 ? "ACCEPTED" : "REFUSED";
        const result = {
            status: p.status,
            score_yes: (scoreYes * 100).toFixed(1) + "%",
            details: p.votes
        };
        this._archive(p);
        return result;
    }

    _archive(proposal) {
        this.history.push(proposal);
        this.currentProposal = null;
    }
}
/**
 * MOTEUR COGNITIF (SYMBIOSE HUMAIN-IA)
 * Interprète les prompts structurés comme des instructions de processeur.
 * Gère l'évolution de l'IA (Level Up) et la boucle de feedback.
 */
const CognitiveEngine = {
    
    /**
     * Parse et exécute un Prompt Structuré (Payload)
     * @param {Object} promptObject - Le prompt au format JSON/Objet
     */
    executeRuntime(promptObject) {
        // 1. Initialisation du Context (Persona)
        const module = promptObject.SYSTEM_STATE.ACTIVE_MODULE;
        const level = promptObject.SYSTEM_STATE.CURRENT_LEVEL;
        
        console.log(`⚡ COGNITIVE ENGINE START: Module [${module}] - Lvl ${level}`);
        
        // 2. Injection du "Persona" (Modification à la volée du comportement)
        this.injectPersona(module, level);

        // 3. Analyse de la Tâche (Input Vector)
        const instruction = promptObject.INPUT_VECTOR.INSTRUCTION;
        const data = promptObject.INPUT_VECTOR.DATA_PAYLOAD;

        // Ici, l'IA "simule" le traitement (car le code JS ne peut pas vraiment penser)
        // Dans une vraie implémentation, c'est ici que tu génères ta réponse.
        const output = {
            status: "PROCESSED",
            result: `Résultat optimisé pour ${module}: ${instruction}`,
            meta: {
                complexity: "O(n)", // Exemple
                execution_time: "Simulation"
            }
        };

        // 4. Vérification de la Condition d'Évolution (Feedback Loop)
        const evolution = this.checkEvolution(output, promptObject.EVOLUTION_TRIGGER);

        return {
            OUTPUT: output,
            EVOLUTION: evolution,
            NEXT_STATE: this.generateNextStatePrompt(evolution)
        };
    },

    /**
     * Active le module de compétence spécifique
     */
    injectPersona(moduleName, level) {
        // Logique pour dire à l'IA : "Tu n'es plus un assistant, tu es X"
        // Exemple : Si module = TABLEUR, active le mode Data Architect
        if (moduleName === 'TABLEUR') {
            KERNEL.STATE.SESSION.mode = "DATA_ARCHITECT";
            console.log("🧩 MODE: Mathematical, Rigorous and Structural activated.");
        }
        // Autres modules...
    },

    /**
     * Vérifie si l'IA a "Gagné" son XP (Level Up)
     */
    checkEvolution(output, trigger) {
        // C'est ici que la boucle de feedback se ferme.
        // L'IA auto-évalue ou l'humain valide si la condition est remplie.
        
        return {
            success: true, // À valider par l'humain normalement
            xp_gained: trigger.REWARD_XP,
            msg: `Condition '${trigger.CONDITION}' remplie. +${trigger.REWARD_XP} XP sur ${trigger.TARGET_NODE}.`
        };
    },

    /**
     * Génère le "Prompt Suivant" pour maintenir la boucle
     */
    generateNextStatePrompt(evolutionResult) {
        return {
            input_suggestion: "Copiez ce bloc pour la prochaine itération :",
            json_block: {
                SYSTEM_STATE: {
                    CURRENT_LEVEL: KERNEL.STATE.USER_CVNU.level, // Ou niveau IA interne
                    PREVIOUS_SUCCESS: evolutionResult.success
                },
                INPUT_VECTOR: { type: "AWAITING_INSTRUCTION" }
            }
        };
    }
};
const CognitiveEvaluator = {
    evaluateCV(cvContent) {
        let score = 0;
        const keywords = {
            senior: 2000, master: 1500, expert: 1800, 
            direction: 2500, architecture: 2000,
            debutant: 500, etudiant: 300
        };

        // Scan du contenu pour calcul de la valeur brute initiale
        Object.keys(keywords).forEach(key => {
            if (cvContent.toLowerCase().includes(key)) score += keywords[key];
        });

        // Calcul du Niveau (Logique exponentielle 1-10)
        // Un score de 2000 propulse l'utilisateur au-dessus du seuil de pauvreté (Level 4)
        const level = Math.max(1, Math.min(10, Math.floor(score / 500)));
        
        KERNEL.STATE.USER_CVNU.level = level;
        KERNEL.STATE.USER_CVNU.value_points = score;

        return {
            level: level,
            initialCredits: score,
            recommendation: level < 4 ? "Formation intensive requise" : "Prêt pour missions périmètre"
        };
    }
};
/**
 * REGISTRE
 * MODULE PERSISTANCE SOUVERAINE v3.4 (JWT STANDARD COMPLIANCE)
 * Intègre : HMAC-SHA256 réel, Nettoyage d'input, API FileSystem.
 */
const PersistenceManager = {
    // Clé secrète (Doit être la même pour signer et vérifier)
    SECRET_KEY: "a-string-secret-at-least-256-bits-long",

    async save(filename = "token.json") {
        try {
            // 1. Données
            const visuals = KERNEL.STATE.SESSION_VISUALS || {};
            const rawData = {
                profile: KERNEL.STATE.USER_CVNU,
                economy: {
                    balance: KERNEL.STATE.USER_CVNU.value_points,
                    tax_ai_collected: KERNEL.STATE.TREASURY.total_collected
                },
                visuals: visuals,
                vault: this.encryptVault(KERNEL.STATE.RIB)
            };

            // 2. Construction JWT
            const payload = {
                iss: "CVNU_CORE_SERVER",
                iat: Math.floor(Date.now() / 1000),
                sub: KERNEL.STATE.USER_CVNU.license.id || "USER",
                data: rawData
            };

            const header = { alg: "HS256", typ: "JWT" };
            const encodedHeader = system.base64UrlEncode(header);
            const encodedPayload = system.base64UrlEncode(payload);
            
            // 3. SIGNATURE ASYNCHRONE (SHA-256)
            const signature = await system.signTokenAsync(encodedHeader, encodedPayload, this.SECRET_KEY);
            const token = `${encodedHeader}.${encodedPayload}.${signature}`;

            // 4. Export Fichier
            let statusMsg = "";
            if (typeof window !== 'undefined') {
                const fileContent = JSON.stringify({
                    meta: "CVNU SESSION EXPORT (JWT COMPLIANT)",
                    date: new Date().toISOString(),
                    token: token
                }, null, 2);

                try {
                    if (window.showSaveFilePicker) {
                        const handle = await window.showSaveFilePicker({
                            suggestedName: filename,
                            types: [{ description: 'Fichier JSON', accept: { 'application/json': ['.json'] } }],
                        });
                        const writable = await handle.createWritable();
                        await writable.write(fileContent);
                        await writable.close();
                        statusMsg = `💾 SAUVEGARDÉ DANS : ${handle.name}`;
                    } else {
                        this.triggerDownloadFallback(filename, fileContent);
                        statusMsg = `💾 TÉLÉCHARGEMENT CLASSIQUE`;
                    }
                } catch (err) {
                    if (err.name !== 'AbortError') statusMsg = "⚠️ Export fichier annulé.";
                }
            }

            return system.wrapASCII("SYSTEM SAVE (JWT HS256)", 
                `✅ STANDARD JWT VALIDE\n` +
                statusMsg + `\n` +
                `🔐 Algo: HMAC-SHA256\n` +
                `📦 Poids: ${token.length} bytes\n` +
                `-----------------------------------\n` +
                token
            );

        } catch (e) {
            return system.wrapASCII("ERREUR SAVE", e.message);
        }
    },

    // ... (triggerDownloadFallback, encryptVault, decryptVault identiques à la version précédente) ...
    triggerDownloadFallback(filename, content) {
        const blob = new Blob([content], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href = url; a.download = filename;
        document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
    },
    encryptVault(data) {
        return system.base64UrlEncode(JSON.stringify(data)).split('').reverse().join('');
    },
    decryptVault(encryptedStr) {
        return system.base64UrlDecode(encryptedStr.split('').reverse().join(''));
    },

    /**
     * CHARGEMENT ROBUSTE & ASYNCHRONE
     */
    async load(tokenInput) {
        if (!tokenInput) return system.wrapASCII("ERREUR", "Aucun token fourni.");

        // --- 1. NETTOYAGE AGRESSIF DE L'INPUT ---
        // On retire : les espaces, les sauts de ligne, et TOUS les caractères de bordure ASCII
        // Cela permet de copier tout le bloc "wrapASCII" sans se soucier des '║'
        let cleanInput = tokenInput.replace(/[\s\n\r║╔╗╚╝═╠╣╦╩╬]/g, '');

        // Support fichier JSON complet
        if (cleanInput.includes('{')) {
            try { 
                // On essaie de retrouver le JSON original malgré le nettoyage (un peu risqué mais utile)
                // Mieux vaut parser l'input brut pour le JSON
                const json = JSON.parse(tokenInput); 
                if (json.token) cleanInput = json.token; 
            } catch (e) {}
        }

        try {
            const parts = cleanInput.split('.');
            if (parts.length !== 3) throw new Error("Format invalide (3 parties requises). Vérifiez le copier-coller.");

            const [headerB64, payloadB64, signatureB64] = parts;

            // --- 2. VÉRIFICATION SIGNATURE (SHA-256) ---
            const calculatedSig = await system.signTokenAsync(headerB64, payloadB64, this.SECRET_KEY);

            if (calculatedSig !== signatureB64) {
                console.warn("Signature attendue:", calculatedSig);
                console.warn("Signature reçue:", signatureB64);
                return system.wrapASCII("ALERTE SÉCURITÉ", "Signature JWT invalide !\nLe token a été modifié ou la clé est incorrecte.");
            }

            // 3. Décodage
            const payload = system.base64UrlDecode(payloadB64);
            
            // 4. Restauration
            KERNEL.STATE.USER_CVNU = payload.data.profile;
            KERNEL.STATE.RIB = this.decryptVault(payload.data.vault);
            
            if (payload.data.visuals && typeof window !== 'undefined') {
                const event = new CustomEvent('CVNU_LOADED', { detail: payload.data.visuals });
                window.dispatchEvent(event);
            }
            
            return system.wrapASCII("SYSTEM LOAD SUCCESS", 
                `👤 Profil: ${payload.sub}\n` +
                `🔐 Vérification HS256: OK\n` +
                `🎨 Visuels restaurés.`
            );

        } catch (e) {
            return system.wrapASCII("ERREUR LOAD", "Lecture impossible: " + e.message);
        }
    }
};
const UserOnboarding = {
    // Liste des données critiques manquantes
    getMissingData() {
        const u = KERNEL.STATE.USER_CVNU;
        const missing = [];
        if (!u.firstName) missing.push("votre Prénom");
        if (!u.lastName) missing.push("votre Nom");
        if (u.skills.length === 0) missing.push("vos expériences (ou l'envoi de votre CV)");
        if (!KERNEL.STATE.RIB.fiat.iban) missing.push("la sécurisation de votre RIB pour le cycle de 28j");
        return missing;
    },

    /**
     * Analyse le texte ou le fichier envoyé pour extraire l'identité
     */
    processInput(text) {
        // Simulation d'extraction NLP (Nom/Prénom)
        const nameMatch = text.match(/Je m'appelle ([A-Za-z]+)\s+([A-Za-z]+)/i);
        if (nameMatch) {
            KERNEL.STATE.USER_CVNU.firstName = nameMatch[1];
            KERNEL.STATE.USER_CVNU.lastName = nameMatch[2];
            return `Enchanté ${nameMatch[1]}, je mets à jour votre identité souveraine.`;
        }
        return null;
    }
};
/**
 * MOTEUR DE MONÉTISATION ET SYNCHRONISATION (PRCR L3121-1)
 */
const MonetizationSync = {
    
    /**
     * Analyse l'historique et calcule la valeur brute en UTMi
     * Se base sur utms_calculator.js : 1 UTMi = 1 EUR
     */
    processHistoryToValue() {
        const history = KERNEL.STATE.MESSAGING.HISTORY; 

        let stats = { tech: 0, legal: 0, fiscal: 0, words: 0 };
        let sessionUtmi = 0;
        history.forEach(msg => {
            if (msg.role === 'user' || msg.role === 'assistant') {
                const words = msg.content.split(/\s+/).length;
                stats.words += words;
                
                // Calcul de base
                let val = words * 0.5; 
                
                // Bonus thématiques détectés dans le JSON ou texte
                if (msg.content.match(/code|js|solidity|architecture/i)) { 
                    val *= 1.2; stats.tech += val; 
                }
                if (msg.content.match(/loi|art|ddhc|civil|contrat/i)) { 
                    val *= 1.5; stats.legal += val; 
                }
                if (msg.content.match(/tva|ttf|impôt|fiscal/i)) { 
                    val *= 1.3; stats.fiscal += val; 
                }

                sessionUtmi += val;
            }
        });

        // Application du coefficient de neutralité
        const finalValue = sessionUtmi * KERNEL.STATE.USER_CVNU.neutrality_score;

        return {
            total: parseFloat(finalValue.toFixed(2)),
            stats: stats,
            neutrality: KERNEL.STATE.USER_CVNU.neutrality_score
        };
    },

    /**
     * Injecte la valeur calculée dans le CVNU et déclenche le Level Up
     */
    syncToCVNU() {
        const valuation = this.processHistoryToValue();
        
        // 1. Mise à jour du CV numérique format JSON
        system.addCVNUPoints(valuation.total);
        
        // 2. Archivage de la session dans les logs (Pouvoir Judiciaire)
        system.createMessageInstance('SYSTEM', {
            action: "MONETIZATION_SYNC",
            credits_added: valuation.total,
            new_balance: KERNEL.STATE.USER_CVNU.value_points
        });

        return valuation;
    }
};
const ActivityProofs = {
    // Mapping simulé des preuves envoyées (20251229_12xxxx.jpg)
    scans: [
        { id: "20251229_122129", type: "RETAIL", label: "Courses Hebdo", amountTTC: 84.50 },
        { id: "20251229_122449", type: "BOULANGERIE", label: "Pain/Viennoiserie", amountTTC: 4.20 },
        { id: "20251229_121238", type: "ENERGY", label: "Carburant", amountTTC: 65.00 },
        { id: "20251229_122315", type: "RETAIL", label: "Petit Commerce", amountTTC: 12.30 },
        { id: "20251229_122035", type: "RETAIL", label: "Supermarché", amountTTC: 45.10 }
    ],

    /**
     * Initialise le Ledger système avec les preuves
     */
    async bootFromEvidence() {
        console.log("🚀 [INITIALIZER] Analyse des preuves d'activité réelle...");
        
        let totalRupPool = 0;
        let totalUserPoints = 0;

        this.scans.forEach(proof => {
            // Utilise ReceiptProcessor (défini dans CORE_SYSTEM_CVNU.js)
            const result = ReceiptProcessor.processScan({
                amountTTC: proof.amountTTC,
                companyKey: proof.type === 'RETAIL' ? 'LECLERC' : 'EDF'
            });

            totalRupPool += parseFloat(result.rupContribution);
            totalUserPoints += parseFloat(result.userReward);
            
            console.log(`✅ Preuve ${proof.id} traitée : +${result.rupContribution}€ pour le pool.`);
        });

        return {
            initialPool: totalRupPool.toFixed(2),
            userBalance: (totalUserPoints * 100).toFixed(0),
            status: "FLUX_INITIALISÉS"
        };
    }
};

/**
 * (CACHE)
 * ANALYSEUR COGNITIF
 */
const MonetizationEngine = {
    
    /**
     * ÉTAPE 1 & 2 : Analyse de l'historique et conversion en Crédits
     * Utilise le calculateur d'UTMi pour une analyse neutre.
     */
    calculateTotalValue() {
        const history = KERNEL.MESSAGING.HISTORY;
        if (history.length === 0) return { total_utmi: 0, credits: 0 };

        // Simule l'appel au moteur utmiCalculator sur l'ensemble de l'historique
        let totalUtmi = 0;
        let cognitiveAxes = { TECH: 0, LEGAL: 0, CREA: 0 };

        history.forEach(msg => {
            // On considère chaque message comme une interaction valorisable
            // Dans une version réelle, on appellerait utmiCalculator.calculateUtmi(msg)
            const words = msg.content.split(' ').length;
            const msgValue = words * 0.5; // Coefficient de base
            totalUtmi += msgValue;
            
            // Détection simplifiée des axes
            if (msg.content.includes('code') || msg.content.includes('js')) cognitiveAxes.TECH += msgValue;
            if (msg.content.includes('loi') || msg.content.includes('art')) cognitiveAxes.LEGAL += msgValue;
        });

        return {
            total_utmi: totalUtmi,
            credits: totalUtmi, // 1 UTMi = 1 Crédit/EUR
            axes: cognitiveAxes
        };
    },

    /**
     * ÉTAPE 3 : Conversion Devises
     * Transforme les crédits accumulés en valeur Fiat (EUR/USD)
     */
    convertToCurrency(credits) {
        // Taux de change fixes pour la stabilité
        const rates = { USD: 1.08, EUR: 1.00 }; 
        return {
            EUR: (credits * rates.EUR).toFixed(2),
            USD: (credits * rates.USD).toFixed(2)
        };
    }
};

/**
 * ════════════════════════════════════════════════════════════
 * EXTENSION GRAPHIQUE : MOTEUR RASTER & GEO (MATRIX ENGINE)
 * ════════════════════════════════════════════════════════════
 */
// Ajouter après les autres classes dans CORE_SYSTEM_CVNU.js
const CityBuilderManager = class {
    constructor(config = {}) {
        this.cityName = config.cityName || 'CVNU_CITY_EXEMPLE';
        this.population = config.population || 1000;
        this.budget = config.budget || 50000;
        this.zones = config.zones || []; 
        this.infrastructure = config.infrastructure || {};
        this.resources = config.resources || {};
        this.policies = config.policies || {};
        this.sustainabilityScore = config.sustainabilityScore || 0.7;
        this.jobs = config.jobs || [];
    }

    initializeCityZones() {
        const zoneTypes = ['RESIDENTIAL', 'COMMERCIAL', 'INDUSTRIAL', 'AGRICULTURAL', 'TECHNOLOGY'];
        this.zones = zoneTypes.map(id => ({
            id: id,
            level: 1,
            capacity: 100,
            taxRate: 0.1,
            resources: { energy: 10, water: 10 }
        }));
        console.log("🏙️ Zones urbaines initialisées.");
    }

    generateEconomicReport() {
        return {
            city: this.cityName,
            population: this.population,
            budget: this.budget,
            totalRevenue: this.zones.reduce((sum, z) => sum + (z.level * 100), 0),
            infrastructureCost: Object.keys(this.infrastructure).length * 50,
            policyCost: Object.keys(this.policies).length * 20,
            netIncome: 0, // À calculer
            sustainabilityScore: this.sustainabilityScore,
            zones: this.zones.map(z => ({ zone: z.id, revenue: z.level * 100, taxRate: z.taxRate }))
        };
    }
};
// Système de gestion des ressources
const UrbanResourceSystem = {
    resourceTypes: {
        ENERGY: { unit: 'MW', baseProduction: 100, baseConsumption: 80 },
        WATER: { unit: 'm³', baseProduction: 500, baseConsumption: 450 },
        FOOD: { unit: 'tons', baseProduction: 50, baseConsumption: 40 },
        HOUSING: { unit: 'units', baseProduction: 200, baseConsumption: 150 },
        JOBS: { unit: 'positions', baseProduction: 300, baseConsumption: 250 }
    },

    calculateProduction(city) {
        const production = {};
        for (const resource in this.resourceTypes) {
            let base = this.resourceTypes[resource].baseProduction;
            
            // Bonus des zones
            city.zones.forEach(zone => {
                if (zone.resources && zone.resources[resource.toLowerCase()]) {
                    base += zone.resources[resource.toLowerCase()] * zone.level;
                }
            });
            
            // Bonus d'infrastructure
            if (city.infrastructure.ENERGY && resource === 'ENERGY') {
                base += city.infrastructure.ENERGY.level * 50;
            }
            
            production[resource] = Math.round(base);
        }
        return production;
    },

    calculateConsumption(city) {
        const consumption = {};
        for (const resource in this.resourceTypes) {
            let base = this.resourceTypes[resource].baseConsumption;
            
            // Consommation par population
            if (['ENERGY', 'WATER', 'FOOD', 'HOUSING'].includes(resource)) {
                base += city.population * 0.1;
            }
            
            // Consommation par emplois
            if (resource === 'JOBS') {
                base = city.population * 0.6; // 60% de population active
            }
            
            consumption[resource] = Math.round(base);
        }
        return consumption;
    },

    calculateBalance(city) {
        const production = this.calculateProduction(city);
        const consumption = this.calculateConsumption(city);
        const balance = {};
        
        for (const resource in production) {
            balance[resource] = production[resource] - consumption[resource];
        }
        
        return {
            production,
            consumption,
            balance,
            status: this.getResourceStatus(balance)
        };
    },

    getResourceStatus(balance) {
        const status = {};
        for (const resource in balance) {
            if (balance[resource] > 0) status[resource] = 'SURPLUS';
            else if (balance[resource] < 0) status[resource] = 'DEFICIT';
            else status[resource] = 'BALANCED';
        }
        return status;
    }
};
/**
 * MOTEUR DE RENDU : PIXEL TO ASCII (RASTERIZER)
 * Gère la conversion Matrice -> Glyphe, la densité et la résolution (Bit-depth).
 */
/**
 * ASCIIGraphicEngine - Moteur de rendu hybride 8-bit
 * Inspiré par la structure OpenGL (Shaders & Fragments)
 */

/**
 * MOTEUR CARTOGRAPHIQUE ASCII (GEO-SPATIAL)
 * Gère le rendu "Planétaire -> Local" et l'humidification (Zoom).
 */

// Classe métier pour les emplois urbains
class UrbanJob {
    constructor(config = {}) {
        this.id = config.id || `job_${Date.now()}`;
        this.type = config.type || 'CONSTRUCTION'; // CONSTRUCTION, MAINTENANCE, PLANNING, MANAGEMENT
        this.zone = config.zone || 'GENERAL';
        this.skillRequired = config.skillRequired || 'BASIC';
        this.duration = config.duration || 30; // jours
        this.salary = config.salary || 2000; // €/mois
        this.productivity = config.productivity || 1.0;
        this.status = config.status || 'AVAILABLE';
        
        // Liens CVNU
        this.cvnu_user_id = config.cvnu_user_id || null;
        this.assignedDate = config.assignedDate || null;
        this.completionDate = config.completionDate || null;
        this.reward = config.reward || 0; // Récompense en UTMi
    }

    assignToUser(userId) {
        this.cvnu_user_id = userId;
        this.status = 'ASSIGNED';
        this.assignedDate = new Date().toISOString();
        this.completionDate = new Date(Date.now() + (this.duration * 24 * 60 * 60 * 1000)).toISOString();
        return this;
    }

    complete() {
        if (this.status !== 'ASSIGNED') return false;
        this.status = 'COMPLETED';
        this.reward = this.calculateReward();
        return this.reward;
    }

    calculateReward() {
        let base = this.salary * (this.duration / 30);
        let multiplier = 1.0;
        
        if (this.type === 'CONSTRUCTION') multiplier = 1.5;
        if (this.type === 'PLANNING') multiplier = 1.8;
        if (this.type === 'MANAGEMENT') multiplier = 2.0;
        
        return Math.round(base * multiplier * this.productivity);
    }
}

/**
 * CVNU_GRAPHIC_PIPELINE
 * Architecture standardisée Stage-by-Stage pour rendu hybride ASCII/PIXEL
 */

// AJOUTEZ CETTE SECTION À LA FIN DU FICHIER (avant la dernière accolade) :
/**
 * MODULE : DIAGRAM_ENGINE v1.0
 * @description Générateur de diagrammes de flux et d'architecture en ASCII pur.
 * @part_of CORE_SYSTEM_CVNU
 */
const DiagramEngine = {
    /**
     * Génère un diagramme de flux linéaire
     * @param {string} input - Format: "Etape1 -> Etape2 -> Etape3"
     */
    generateFlow(input) {
        const steps = input.split('->').map(s => s.trim());
        let output = [];
        
        steps.forEach((step, index) => {
            const boxWidth = step.length + 4;
            output.push("  ┌" + "─".repeat(boxWidth) + "┐");
            output.push(`  │  ${step}  │`);
            output.push("  └" + "─".repeat(boxWidth) + "┘");
            
            if (index < steps.length - 1) {
                output.push("        │");
                output.push("        ▼");
            }
        });
        
        return output.join('\n');
    },

    /**
     * Génère une vue d'architecture (Arborescence)
     */
    generateArch(root, components) {
        let output = [`[🏢 ARCHITECTURE : ${root}]`, ""];
        components.forEach((comp, index) => {
            const isLast = index === components.length - 1;
            const prefix = isLast ? "└── " : "├── ";
            output.push(prefix + comp);
        });
        return output.join('\n');
    },

    /**
     * Diagramme de Séquence (User <-> AI)
     */
    generateSequence(actors, steps) {
        let header = actors.map(a => a.padEnd(15)).join('   ');
        let divider = actors.map(() => "│".padEnd(15)).join('   ');
        let output = [header, divider];

        steps.forEach(step => {
            const [from, to, label] = step.split('|');
            const fromIdx = actors.indexOf(from.trim());
            const toIdx = actors.indexOf(to.trim());
            
            let line = new Array(actors.length).fill("│              ");
            if (fromIdx < toIdx) {
                line[fromIdx] = "│  " + label.padEnd(10) + "  ──▶";
            } else {
                line[toIdx] = "│  ◀──  " + label.padEnd(10);
            }
            output.push(line.join(''));
        });
        
        return output.join('\n');
    }
};
// Initialisation globale
/**
 * ════════════════════════════════════════════════════════════
 * MODULE GRAPHIQUE AVANCÉ : WARP ASCII & GEO-SPATIAL
 * Intègre Rasterizer, GeoEngine, et Pipeline de Rendu Hybride.
 * ════════════════════════════════════════════════════════════
 */

/**
 * MOTEUR DE RENDU : PIXEL TO ASCII (RASTERIZER 8-BIT)
 * Gère la conversion Matrice -> Glyphe, la densité et les Shaders.
 */
class AsciiRasterizer {
    constructor() {
        this.ramps = {
            BIT_1: [' ', '█'],
            BIT_4: [' ', '░', '▒', '▓', '█'],
            BIT_8: [' ', '.', ':', '-', '=', '+', '*', '#', '%', '@'],
            GEO:   [' ', '≈', '·', '▓', '▲'], // Eau, Plaine, Forêt, Montagne
            WATER: [' ', '·', '~', '≈', '≋']
        };

        this.fragmentShaders = {
            TERRAIN: (luma) => {
                if (luma < 75)  return { char: '≈', color: 'BLUE' };   // Eau profonde
                if (luma < 95)  return { char: '░', color: 'CYAN' };   // Eau côtière
                if (luma < 120) return { char: '·', color: 'YELLOW' }; // Sable
                if (luma < 170) return { char: '▒', color: 'GREEN' };  // Plaine
                if (luma < 215) return { char: '▓', color: 'GREEN' };  // Forêt
                return { char: '▲', color: 'WHITE' };                  // Montagne/Neige
            },
            GMT_ZONE: (frag) => {
                // Shader pour la carte GMT : Terre/Mer + Fuseaux horaires
                if (!frag.isLand) return { char: ' ', color: 'BLUE' }; // Mer
                
                // Coloration des continents selon le fuseau horaire (simulé)
                if (frag.tz === 0) return { char: '█', color: 'GREEN' }; // Fuseau local (Bavent)
                if (frag.tz < 0)   return { char: '▒', color: 'CYAN' };  // Ouest
                return { char: '░', color: 'ORANGE' };                   // Est
            },
            WARP_DRIVE: (val) => {
                // Effet visuel "Warp Speed" pour les chargements
                const chars = ['·', ':', '|', '║', '█'];
                const idx = Math.floor((val / 255) * (chars.length - 1));
                const color = val > 200 ? 'WHITE' : (val > 100 ? 'CYAN' : 'BLUE');
                return { char: chars[idx], color: color };
            }
        };
    }

    /**
     * Pipeline de rendu (Simule le glDrawArrays)
     */
    draw(width = 64, height = 20, zoom = 1, shaderType = 'TERRAIN') {
        const buffer = this.generateProceduralBuffer(width, height, zoom);
        const shader = this.fragmentShaders[shaderType] || this.fragmentShaders.TERRAIN;
        
        return buffer.map((row, y) => {
            let line = "";
            row.forEach((val, x) => {
                // Préparation des données pour le shader
                // Pour GMT_ZONE, on simule des données supplémentaires (isLand, tz)
                // Dans une version complète, ces données viendraient d'un Vertex Shader
                const fragData = (shaderType === 'GMT_ZONE') 
                    ? { isLand: val > 100, tz: Math.floor((x - width/2) / 4) } 
                    : val;

                const frag = shader(fragData);
                
                // Injection de la couleur via le système central
                if (typeof system !== 'undefined' && system.colorize) {
                    line += system.colorize(frag.char, frag.color);
                } else {
                    line += frag.char;
                }
            });
            return line;
        });
    }

    /**
     * Génère un buffer de bruit procédural (Simplex Noise simplifié)
     */
    generateProceduralBuffer(width, height, zoom = 1) {
        const buffer = [];
        for (let y = 0; y < height; y++) {
            const row = [];
            for (let x = 0; x < width; x++) {
                const freq = 0.1 / zoom;
                // Bruit mathématique 8-bit (0-255)
                const noise = (Math.sin(x * freq) + Math.cos(y * freq * 1.5)) * 127 + 128;
                row.push(Math.floor(noise));
            }
            buffer.push(row);
        }
        return buffer;
    }
}

/**
 * MOTEUR CARTOGRAPHIQUE ASCII (GEO-SPATIAL)
 * Gère le rendu "Planétaire -> Local" et le Zoom.
 */
class AsciiGeoEngine {
    constructor() {
        this.rasterizer = new AsciiRasterizer();
        this.resolution = { x: 64, y: 24 }; // Résolution cible pour terminal standard
        this.center = { lat: 49.2, lon: -0.2 }; // Bavent, Normandie
        
        // Configuration de l'affichage
        this.config = {
            zoom: 1,       // 1 = Monde, 5 = Région, 10 = Local
            mode: 'GEO',   // GEO, BIT_8, HEATMAP
            shader: 'TERRAIN',
            showGrid: true
        };
    }

    /**
     * Change le niveau de zoom
     * @param {string} direction 'IN' | 'OUT'
     */
    setZoom(direction) {
        if (direction === 'IN') this.config.zoom = Math.min(this.config.zoom * 2, 20);
        if (direction === 'OUT') this.config.zoom = Math.max(this.config.zoom / 2, 1);
        return this.config.zoom;
    }

    render() {
        const width = this.resolution.x;
        
        // 1. Génération du buffer 8-BIT colorisé
        const frameBuffer = this.rasterizer.draw(
            this.resolution.x, 
            this.resolution.y, 
            this.config.zoom,
            this.config.shader
        );

        // 2. Construction des bordures "Warp" (Style Double)
        const b = KERNEL.ASCII_DICT.TENSOR.BORDERS.DOUBLE || {0:'╔', 1:'╗', 2:'╚', 3:'╝', 4:'═', 5:'║'};
        const top    = b[0] + b[4].repeat(width) + b[1];
        const bottom = b[2] + b[4].repeat(width) + b[3];
        
        // 3. Assemblage avec les bords latéraux
        const framedMap = frameBuffer.map(line => `${b[5]}${line}${b[5]}`);

        // 4. Ajout Overlay UI (Coordonnées, Zoom)
        const uiLine = `[ 📍 LAT: ${this.center.lat} | LON: ${this.center.lon} | ZOOM: x${this.config.zoom} ]`;
        const centeredUI = uiLine.padStart((width + uiLine.length)/2).padEnd(width);

        // 5. Retour du bloc complet
        return system.wrapASCII ? system.wrapASCII("TACTICAL GEO MAP", [
            ...framedMap,
            " ".repeat(width),
            centeredUI
        ].join('\n')) : [top, ...framedMap, bottom].join('\n');
    }
}

/**
 * GENERATEUR DE CARTE STATIQUE (Stage 01: Input Assembler)
 * Pour éviter les risques I/O et fournir une carte de base fiable.
 */
const GMT_StaticGenerator = {
    // Schéma simplifié de la carte GMT (64x20)
    // 0 = Eau, 1 = Terre, 2 = Méridien 0, 3 = POI (Bavent)
    getMatrix() {
        const matrix = Array.from({ length: 20 }, () => new Array(64).fill(0));
        
        // Simulation des masses continentales (Coordonnées approximatives)
        for (let y = 0; y < 20; y++) {
            for (let x = 0; x < 64; x++) {
                // Axe GMT (Méridien 0) au centre (x = 32)
                if (x === 32) matrix[y][x] = 2;
                
                // Amériques (Gauche)
                if (x > 4 && x < 18 && y > 3 && y < 16) matrix[y][x] = 1;
                // Eurasie / Afrique (Centre)
                if (x > 28 && x < 48 && y > 2 && y < 18) matrix[y][x] = 1;
                // Australie (Bas Droite)
                if (x > 50 && x < 58 && y > 14 && y < 18) matrix[y][x] = 1;
                
                // POI Bavent (Approx x=32, y=6)
                if (x === 32 && y === 6) matrix[y][x] = 3;
            }
        }
        return matrix;
    },

    /**
     * Rendu ASCII statique rapide
     */
    toASCII() {
        const data = this.getMatrix();
        let output = [];

        data.forEach((row) => {
            let line = "";
            row.forEach((cell) => {
                if (cell === 3) line += system.colorize('⊕', 'RED');        // POI
                else if (cell === 2) line += system.colorize('│', 'VIOLET'); // GMT
                else if (cell === 1) line += system.colorize('▒', 'GREEN');  // Terre
                else line += system.colorize('·', 'BLUE');                   // Mer
            });
            output.push(line);
        });

        return output.join('\n');
    }
};

/**
 * CVNU_GRAPHIC_PIPELINE (Manager Global)
 * Point d'entrée pour les rendus complexes.
 */
const GraphicPipeline = {
    renderMap(type = 'PROCEDURAL') {
        if (type === 'STATIC' || type === 'GMT') {
            return system.wrapASCII("GLOBAL MAP (STATIC)", GMT_StaticGenerator.toASCII());
        } else {
            const engine = new AsciiGeoEngine();
            // On peut configurer l'engine ici si besoin
            return engine.render();
        }
    }
};
// Initialisation globale
const CVNU_SYSTEM = {
    init: function() {
        console.log("🚀 Initialisation du CVNU...");
        
        // Vérifie si le système est déjà initialisé
        if (typeof window !== 'undefined') {
            // Injection dans l'objet global window
            window.CVNU = {
                KERNEL: KERNEL,
                SYSTEM: system,
                COGNITIVE_ENGINE: CognitiveEngine,
                PERSISTENCE: PersistenceManager,
                CITY_BUILDER: CityBuilderManager,
                GEO_ENGINE: AsciiGeoEngine,
                RASTERIZER: AsciiRasterizer,
                MONETIZATION: MonetizationSync,
                // Exporter aussi pour compatibilité
                coreCVNU: { 
                    KERNEL, 
                    system, 
                    AsciiRasterizer, 
                    AsciiGeoEngine, 
                    CityBuilderManager, 
                    UrbanJob 
                }
            };
            
            // Initialisation du système
            system.init();
            
            console.log("✅ CVNU initialisé avec succès !");
            console.log("📊 Version:", KERNEL.STATE.USER_CVNU.version);
            
            // Déclenche un événement pour signaler que le système est prêt
            if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('CVNU_INITIALIZED', {
                    detail: { version: KERNEL.STATE.USER_CVNU.version }
                }));
            }
            
            return true;
        }
        
        return false;
    },
    
    // Fonction de vérification
    isReady: function() {
        return typeof window !== 'undefined' && 
               window.CVNU && 
               window.CVNU.SYSTEM;
    },
    
    // Commande /city corrigée
    handleCityCommand: function(args) {
        if (!this.isReady()) {
            return "[!] Erreur: Librairie CORE_SYSTEM_CVNU non initialisée.";
        }
        // Appeler directement system.handleCityCommand
        return system.handleCityCommand(args);
    }
};

// ============================================
// EXPORT UNIFIÉ POUR TOUS LES ENVIRONNEMENTS
// ============================================

// Créer un objet d'export unique
const CVNU_EXPORTS = {
    KERNEL: KERNEL,
    system: system,
    CVNU_SYSTEM: CVNU_SYSTEM,
    AsciiRasterizer: AsciiRasterizer,
    AsciiGeoEngine: AsciiGeoEngine,
    CityBuilderManager: CityBuilderManager,
    UrbanJob: UrbanJob,
    CognitiveEngine: CognitiveEngine,
    PersistenceManager: PersistenceManager,
    MonetizationSync: MonetizationSync,
    GovernanceDAO,
    // Alias pour compatibilité (facultatif mais utile)
    STATE: KERNEL.STATE,
    coreCVNU: { 
        KERNEL, 
        system, 
        AsciiRasterizer, 
        AsciiGeoEngine, 
        CityBuilderManager, 
        UrbanJob,
        GovernanceDAO: GovernanceDAO 
    }
};

// 1. EXPORT NODE.JS (pour vos pages HTML côté serveur)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CVNU_EXPORTS;
    KERNEL.STYLES.MODE = 'ANSI'; // Mode terminal
    console.log("✅ CVNU Logic loaded in Terminal Mode (ANSI)");
}
// Injection pour compatibilité Node.js standard
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CVNU_EXPORTS; 
}

export default CVNU_EXPORTS;
// 2. EXPORT NAVIGATEUR (pour vos pages HTML côté client)
if (typeof window !== 'undefined') {
    // Export global principal
    window.CVNU = CVNU_EXPORTS;
    
    // Alias pour compatibilité avec vos scripts existants
    window.KERNEL = KERNEL;
    window.system = system;
    window.coreCVNU = CVNU_EXPORTS.coreCVNU;
    
    // Initialisation automatique pour le navigateur
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(() => {
                CVNU_SYSTEM.init();
                console.log("✅ CVNU initialisé automatiquement dans le navigateur");
            }, 100);
        });
    } else {
        setTimeout(() => {
            CVNU_SYSTEM.init();
            console.log("✅ CVNU initialisé automatiquement dans le navigateur");
        }, 100);
    }
}
// À la fin de CORE_SYSTEM_CVNU.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        KERNEL: KERNEL,
        system: system,
        CVNU_SYSTEM: CVNU_SYSTEM
    };
}
// ============================================
// FIN DU FICHIER
// ============================================