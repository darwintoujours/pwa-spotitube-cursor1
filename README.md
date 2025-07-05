# 🎵 Spotitube

Une Progressive Web App (PWA) de streaming musical privée qui combine les métadonnées de Spotify avec l'audio de YouTube.

## 🚀 Fonctionnalités

- **Authentification Spotify** : Connexion sécurisée via OAuth PKCE
- **Recherche musicale** : Recherche via API Spotify avec métadonnées complètes
- **Extraction audio YouTube** : Lecture audio haute qualité via yt-dlp
- **Interface Spotify-like** : Design inspiré de Spotify avec thème sombre
- **Mode hors ligne** : Stockage local illimité avec IndexedDB
- **PWA installable** : Installation sur tous les appareils
- **Usage privé** : Conçu pour un maximum de 3 utilisateurs

## 🏗️ Architecture

### Frontend (React + TypeScript)
- **Framework** : React 18+ avec TypeScript
- **Hébergement** : Vercel
- **URL** : https://pwa-spotitube-cursor.vercel.app/
- **PWA** : Service Worker, manifest.json, stockage hors ligne

### Backend Flask (Authentification Spotify)
- **Framework** : Flask 3.x
- **Fonction** : Gestion OAuth PKCE Spotify
- **Endpoints** :
  - `/auth/spotify/login` - Initier l'authentification
  - `/auth/spotify/callback` - Gérer le callback OAuth
  - `/auth/spotify/refresh` - Rafraîchir les tokens
  - `/auth/validate` - Valider les JWT tokens

### Backend AWS Lambda (YouTube + Audio)
- **Runtime** : Python 3.9+
- **Framework** : Serverless Framework
- **Fonctions** :
  - `youtubeSearch` - Recherche vidéos avec rotation des clés API
  - `youtubeStream` - Streaming audio en temps réel
  - `youtubeExtract` - Extraction et stockage audio S3
- **Optimisations** : Free Tier AWS Lambda, rotation de 10 clés YouTube API

## 🛠️ Installation et Configuration

### Prérequis
- Node.js 18+ et npm/yarn
- Python 3.9+
- Compte AWS (Free Tier)
- Compte Spotify Developer
- Compte Google Cloud (YouTube API)

### Configuration

1. **Cloner le repository**
```bash
git clone https://github.com/darwintoujours/pwa-spotitube-cursor.git
cd pwa-spotitube-cursor
```

2. **Configurer les clés API**
```bash
# Copier le fichier d'exemple
cp config/api-keys.example.json config/api-keys.json

# Éditer avec vos vraies clés
nano config/api-keys.json
```

3. **Backend Flask**
```bash
cd backend-flask
pip3 install -r requirements.txt
python3 app.py
```

4. **Backend Lambda**
```bash
cd backend-lambda
npm install -g serverless
serverless deploy --stage dev
```

5. **Frontend React**
```bash
cd frontend
npm install
npm start
```

## 🔧 Configuration des Services

### Spotify Developer
1. Créer une application sur [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/)
2. Configurer les Redirect URIs :
   - Développement : `http://localhost:3000/callback`
   - Production : `https://pwa-spotitube-cursor.vercel.app/callback`
3. Noter le Client ID et Client Secret

### Google Cloud (YouTube API)
1. Créer un projet sur [Google Cloud Console](https://console.cloud.google.com/)
2. Activer YouTube Data API v3
3. Créer 10 clés API pour la rotation
4. Configurer les restrictions (sites web autorisés)

### AWS Lambda
1. Configurer AWS CLI avec vos identifiants
2. Créer un bucket S3 : `spotitube-audio`
3. Configurer les permissions IAM pour Lambda
4. Déployer avec Serverless Framework

## 📁 Structure du Projet

```
spotitube-cursor/
├── backend-flask/          # Authentification Spotify
│   ├── app.py             # Application Flask
│   ├── requirements.txt   # Dépendances Python
│   └── vercel.json        # Configuration Vercel
├── backend-lambda/         # Extraction audio YouTube
│   ├── handler.py         # Fonctions Lambda
│   ├── serverless.yml     # Configuration Serverless
│   └── requirements.txt   # Dépendances Python
├── frontend/              # Application React
│   ├── src/
│   │   ├── components/    # Composants React
│   │   ├── pages/         # Pages de l'application
│   │   ├── services/      # Services API
│   │   └── hooks/         # Hooks personnalisés
│   └── public/            # Assets publics
├── config/                # Configuration
│   ├── api-keys.json      # Clés API (ignoré par Git)
│   └── api-keys.example.json
└── docs/                  # Documentation
```

## 🔒 Sécurité

- **Aucune clé sensible dans le frontend**
- **Stockage sécurisé des tokens côté backend**
- **OAuth PKCE pour l'authentification Spotify**
- **Rotation automatique des clés YouTube API**
- **Validation stricte des entrées utilisateur**

## 🚀 Déploiement

### Frontend (Vercel)
```bash
cd frontend
vercel --prod
```

### Backend Flask (Vercel)
```bash
cd backend-flask
vercel --prod
```

### Backend Lambda (AWS)
```bash
cd backend-lambda
serverless deploy --stage prod
```

## 📝 TODO

Voir le fichier [TODO.md](TODO.md) pour la liste complète des tâches et l'état d'avancement du projet.

## 🤝 Contribution

Ce projet est destiné à un usage privé (maximum 3 utilisateurs). Les contributions sont les bienvenues pour des améliorations techniques ou des corrections de bugs.

## 📄 Licence

Projet privé - Usage personnel uniquement.

## ⚠️ Avertissements

- **Usage privé uniquement** : Maximum 3 utilisateurs
- **Pas de monétisation** : Projet personnel
- **Respect des ToS** : Conformité Spotify et YouTube
- **Pas de redistribution** : Contenu audio pour usage personnel uniquement

---

**Spotitube** - Votre musique privée, combinant le meilleur de Spotify et YouTube 🎵 # pwa-spotitube-cursor1
# pwa-spotitube-cursor1
