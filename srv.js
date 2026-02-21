require('dotenv').config();
const express = require('express');
const Groq = require('groq-sdk');
const path = require('path');
const dataManager = require('./dataManager');
const app = express();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.use(express.json());
app.use(express.static('docs')); // Sert le dossier pour GitHub Pages
// Nouvelle route pour que Sébastien valide sa journée
app.post('/api/mission', (req, res) => {
    try {
        const { amount, source } = req.body;
        
        // Le DataManager fait tout le travail fiscal et mathématique
        const result = dataManager.processMission(amount, source);
        
        res.json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route pour charger les stats à l'ouverture du tableau de bord
app.get('/api/state', (req, res) => {
    res.json(dataManager.getDashboardState());
});

app.post('/api/conseil', async (req, res) => {
    try {
        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: "Tu es l'AGI de bord de Sébastien. Ton style est encourageant, direct et pragmatique. Tu l'aides à trouver des missions d'intérim, à économiser pour son camion et à rester motivé." },
                { role: "user", content: "Donne-moi un conseil court et percutant pour ma journée de travail ou mon projet de camion." }
            ],
            model: "llama-3.1-8b-instant",
        });
        res.json({ advice: completion.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(2027, () => {
    console.log('🚀 Dashboard Sébastien lancé sur http://localhost:2027');
});