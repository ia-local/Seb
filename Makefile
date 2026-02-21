# Makefile
# Version: B-QPV v4.0 - Catalogue Complet & Orchestration Modulaire
# Rôle: Automatiser l'ensemble des 47 commandes B-QPV pour les cycles de développement et de production.

# --- Définition des Variables de Chemins ---
BUILD_DIR := build
BUILD_DIR := build
BACKEND_DIR := backend/server.js
DOCS_DIR := docs
DATA_DIR := data
PUBLIC_DIC := PUBLIC
BIN_DIR := bin
# ... (Autres variables de chemins)

# --- Constantes ASCII TENSOR pour le Rendu TUI ---
TL := ╔
TR := ╗
BL := ╚
BR := ╝
H_LINE := ═
V_LINE := ║
SOLID_BLOCK := █
EMPTY_BLOCK := ░
DOT := ·
PIPE := │

# --- Messages de Commande B-QPV ---
MSG_INIT_SYSTEM="🚀 Initialisation du BotNet AGI et du Serveur Express."
MSG_UPDATE_GIT="✨ Exécution de /github_config : Mise à jour et Audit du répertoire."

# --- Cibles Phony (Garantit l'exécution de la cible) ---
.PHONY: all run start update clean menu terminal factory deploy component template social meta

# =======================================================
# 1. CIBLES D'EXÉCUTION DU SYSTÈME (AGI & RUP)
# =======================================================

all: menu

run:
	@echo "📡 Lancement du Serveur RUP Principal (Express) et des Agents critiques..."
	@node ${SRV_DIR}/server.js & 
	@node ${SRV_DIR}/Telegram/server.js &
	@echo "✅ Serveur RUP principal & Agents IA démarrés."

# 🛑 CIBLE /github_config (Mappé à 'update')
update:
	@echo "${MSG_UPDATE_GIT}"
	@git add .
	@git commit -m "feat: (B-QPV) Execution de /github_config: Mise à jour du code."
	@git push
	@echo "✅ PUSH GitHub terminé. L'IA peut auditer."

# 🛑 CIBLE /terminal (Diagnostic TUI du système)
terminal:
	@echo "$(TL)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(TR)"
	@echo "$(V_LINE) [⚙️ RUP Console TUI] Diagnostic du Serveur B-QPV (v4.0) $(V_LINE)"
	@echo "$(JOINT_L)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(JOINT_R)"
	@echo "$(V_LINE)  ■ Statut Principal (EXPRESS) : EN LIGNE                                              $(V_LINE)"
	@echo "$(V_LINE)  📈 Progression RUP : $(SOLID_BLOCK)$(SOLID_BLOCK)$(SOLID_BLOCK)$(SOLID_BLOCK)$(SOLID_BLOCK)$(SOLID_BLOCK)$(SOLID_BLOCK)$(SOLID_BLOCK)$(SOLID_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK)$(EMPTY_BLOCK) 31% $(V_LINE)"
	@echo "$(V_LINE)  💡 Tâche Active : Modélisation du /workflow Circulaire                                $(V_LINE)"
	@echo "$(BL)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(BR)"


# =======================================================
# 2. CIBLES DE PRODUCTION ET DE COMPOSANTS (FACTORY)
# =======================================================

# 🛑 Cibles Génériques pour la Factory (Basées sur le Catalogue B-QPV)
# Mappage de toutes les commandes de template/composant vers un script de build simulé (composer.js)

# A. Composants (make component-...)
component-test: ; @echo "🏗 Factory Build: /component_test"; @node ${BUILD_DIR}/Composants.js --cmd=/component_test
component-pagination: ; @echo "🏗 Factory Build: /component_pagination"; @node ${BUILD_DIR}/Composants.js --cmd=/component_pagination
component-modal: ; @echo "🏗 Factory Build: /component_modal"; @node ${BUILD_DIR}/Composants.js --cmd=/component_modal
component-grid: ; @echo "🏗 Factory Build: /composant_grid"; @node ${BUILD_DIR}/Composants.js --cmd=/composant_grid
component-navbar: ; @echo "🏗 Factory Build: /component_navbar"; @node ${BUILD_DIR}/Composants.js --cmd=/component_navbar
component-graph: ; @echo "🏗 Factory Build: /component_graph"; @node ${BUILD_DIR}/Composants.js --cmd=/component_graph
component-ia: ; @echo "🏗 Factory Build: /componant_ia (Chat UI)"; @node ${BUILD_DIR}/Composants.js --cmd=/componant_ia
component-slider-img: ; @echo "🏗 Factory Build: /slider_image"; @node ${BUILD_DIR}/Composants.js --cmd=/slider_image
component-slider-vid: ; @echo "🏗 Factory Build: /slider_video"; @node ${BUILD_DIR}/Composants.js --cmd=/slider_video
component-slider-phone: ; @echo "🏗 Factory Build: /slider_phone (Mobile 9:16)"; @node ${BUILD_DIR}/Composants.js --cmd=/slider_phone
component-bouton: ; @echo "🏗 Factory Build: /component_bouton (CTA)"; @node ${BUILD_DIR}/Composants.js --cmd=/component_bouton
component-card: ; @echo "🏗 Factory Build: /component_card (KPI/Produit)"; @node ${BUILD_DIR}/Composants.js --cmd=/component_card
component-table: ; @echo "🏗 Factory Build: /component_table (Data Table)"; @node ${BUILD_DIR}/Composants.js --cmd=/component_table


# B. Gabarits (make template-...)
template-index: ; @echo "🏗 Factory Build: /template_index (Dashboard)"; @node ${SRC_DIR}/app/composer.js --template=/template_index
template-landing: ; @echo "🏗 Factory Build: /template_landing (Landing Page)"; @node ${SRC_DIR}/app/composer.js --template=/template_landing
template-e-boutique: ; @echo "🏗 Factory Build: /template_e-boutique"; @node ${SRC_DIR}/app/composer.js --template=/template_e-boutique
template-portfolio: ; @echo "🏗 Factory Build: /template_portfolio"; @node ${SRC_DIR}/app/composer.js --template=/template_portfolio
template-spa: ; @echo "🏗 Factory Build: /template_spa (SPA)"; @node ${SRC_DIR}/app/composer.js --template=/template_spa
template-blog: ; @echo "🏗 Factory Build: /template_blog"; @node ${SRC_DIR}/app/composer.js --template=/template_blog

# =======================================================
# 3. CIBLES DE GESTION & UTILITAIRES
# =======================================================

# 🛑 Cible /workflow (Modélisation de la Boucle RUP)
workflow:
	@echo "🧠 Lancement du Modélisateur /workflow : Boucle de Valeur Circulaire..."
	@node ${BIN_DIR}/workflow-modeler.js

# Cible /audit (Mappé à audit-source)
audit:
	@echo "🛡️ Exécution de /audit : Analyse des dépendances (Sécurité & CVNU)..."
	@node ${BIN_DIR}/audit-agent.js --mode=security

# =======================================================
# 4. MENU PRINCIPAL (TUI)
# =======================================================

route:
	@echo "$(TL)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(TR)"
	@echo "$(V_LINE)[📗 📕 📒]:/┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈{[┈┈┈┈ ${PAGE_TITLE} ┈┈┈┈]}┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈>$(V_LINE)"
	@echo "$(JOINT_L)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(JOINT_R)╣"

	@echo "$(V_LINE) 🛰️ ROUTEUR ACTIVÉ - PAGE CIBLE : $(PAGE)                                                            $(V_LINE)"
	@echo "$(V_LINE) $(V_LINE)"
	@case "${PAGE}" in \
		"workflow") \
			echo "$(V_LINE) 🧠 Modélisation de la Boucle RUP... $(V_LINE)"; \
			./page.sh workflow; \
			make loader ROADMAP="Boucle RUP Modélisée" STATUS=100; \
			;; \
		"terminal") \
			echo "$(V_LINE) 💻 Exécution du Diagnostic Système... $(V_LINE)"; \
			./page.sh terminal; \
			make loader ROADMAP="Diagnostic TUI Complet" STATUS=80; \
			;; \
		"menu" | "") \
			make menu; \
			;; \
		*) \
			echo "$(V_LINE) ❌ Commande ${PAGE} non reconnue. $(V_LINE)"; \
			make loader ROADMAP="Erreur de Routage" STATUS=0; \
			;; \
	esac
loader:
	@echo "$(TL)$(JOINT_L)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(JOINT_R)$(TR)"
	@echo "$(V_LINE) ⏳ TÂCHE : ${ROADMAP} - PROGRÈS : ${STATUS}%  █████████░░░░░░░░░░░░░░░░░░░░░░░░░░░ 31% $(V_LINE)"
	@echo "$(BL)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(H_LINE)$(BR)"


menu:

	@echo '╔════════════════════════════════════════════════════════════════════════════════════════╗'
	@echo '║[📗 📕 📒]:/┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈{[┈┈┈┈ Titre:name.sh ┈┈┈┈]}┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈>║'
	@echo '═════════════════════════════════════════════════════════════════════════════════════════╣'
	@echo '║ Welcom To cycliq Economical system.                                                    ║'
	@echo '║# ... (Rendu du menu TUI) ...                                                           ║'
	@echo '║                                                                                        ║'
	@echo '║ 🚀 ENVIRONNEMENT & DÉPLOIEMENT :                                                       ║'
	@echo '║    - make run            : Lance tous les serveurs (Express RUP + Agents).             ║'
	@echo '║    - make terminal       : Affiche le statut TUI (ASCII) du système.                   ║'
	@echo '║    - make update         : Exécute /github_config (Audit + Git Push).                  ║'
	@echo '║                                                                                        ║'
	@echo '║ 💡 ROUTAGE DIRECT (Exemples) :                                                         ║'
	@echo '║                                                                                        ║'
	@echo '╠════════════════════════════════════════════════════════════════════════════════════════╣'
	@echo '║[💻.📡]<: ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 🛰️  ║'
	@echo '╚════════════════════════════════════════════════════════════════════════════════════════╝'

# Nouvelle cible : Calcul de la barre de progression ASCII
calc_progress:
	@calc=$$(printf "%s * %s / 100" ${STATUS} ${BAR_LENGTH} | bc); \
	filled=$$(printf "%.0f" $$calc); \
	empty=$$(( ${BAR_LENGTH} - $$filled )); \
	progress_bar=""; \
	for i in $$(seq 1 $$filled); do progress_bar+="$(SOLID_BLOCK)"; done; \
	for i in $$(seq 1 $$empty); do progress_bar+="$(EMPTY_BLOCK)"; done; \
	make progress-bar-set PROGRESS_BAR="$$progress_bar"

progress-bar-set:
	@echo "" > /dev/null # This target is purely to set the variable, output suppressed