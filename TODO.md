# TODO - Spotitube Development

## Phase 1: Configuration et Infrastructure de Base

### Préparation de l'Environnement
- [x] Installer les outils de développement (Node.js, npm/yarn, Git)
- [x] Configurer l'environnement de développement
- [x] Initialiser les repositories Git
- [x] Configurer les identifiants AWS et les clés API

### Backend Flask (Gestion des tokens Spotify)
- [x] Créer le projet Flask pour la gestion des tokens Spotify
- [x] Configurer l'environnement Flask avec les dépendances nécessaires
- [x] Implémenter l'endpoint OAuth PKCE pour Spotify
- [x] Créer l'endpoint de refresh token
- [x] Configurer le stockage sécurisé des tokens
- [ ] Configurer le déploiement Flask sur Vercel ou autre plateforme
- [ ] Tester l'authentification Spotify complète

### Backend AWS Lambda (YouTube + yt-dlp)
- [x] Créer le projet AWS Lambda avec Serverless Framework
- [x] Configurer les fonctions Lambda pour l'extraction audio YouTube
- [x] Implémenter la rotation des clés API YouTube (10 clés disponibles)
- [x] Intégrer yt-dlp pour l'extraction audio haute qualité
- [x] Créer l'endpoint de recherche YouTube avec matching Spotify ↔ YouTube
- [x] Implémenter l'endpoint de streaming audio avec yt-dlp
- [x] Configurer l'extraction audio en format opus/webm (meilleure qualité)
- [ ] Intégrer le proxy VPN OpenVPN CloudConnexa
- [x] Configurer CORS et les permissions IAM
- [x] Optimiser les fonctions Lambda pour le Free Tier
- [ ] Déployer les fonctions Lambda
- [ ] Tester l'extraction audio et le streaming

### Frontend React (Vercel)
- [x] Initialiser le projet React avec TypeScript
- [x] Configurer le routing avec react-router-dom
- [x] Créer la structure de base des composants
- [x] Configurer PWA (manifest.json, Service Worker)
- [x] Implémenter l'authentification Spotify côté frontend
- [x] Configurer les appels API vers Flask et AWS Lambda
- [ ] Configurer le déploiement sur Vercel
- [ ] Déployer sur Vercel

## Phase 2: Interface Utilisateur de Base

### Composants UI et Design System
- [ ] Créer le design system (couleurs, typographie, composants de base)
- [ ] Implémenter la palette de couleurs Spotify (#121212, #1DB954, etc.)
- [ ] Créer les composants atoms (Button, Icon, Input, etc.)
- [ ] Créer les composants molecules (SearchBar, TrackCard, etc.)
- [ ] Implémenter la barre de navigation latérale
- [ ] Créer le lecteur audio en bas de page
- [ ] Développer la barre de recherche
- [ ] Créer les cartes de contenu (morceaux, albums, artistes)
- [ ] Implémenter la page d'accueil
- [ ] Configurer la responsivité (mobile, tablette, desktop)

### Fonctionnalités de Base
- [ ] Intégrer la recherche Spotify
- [ ] Implémenter la recherche YouTube via AWS Lambda
- [ ] Créer l'algorithme de matching Spotify ↔ YouTube (titre, artiste, durée)
- [ ] Implémenter la lecture audio via le backend yt-dlp
- [ ] Créer la gestion de la file d'attente
- [ ] Ajouter les contrôles de lecture (play, pause, skip, volume)
- [ ] Implémenter la navigation entre les pages
- [ ] Créer la gestion des playlists personnalisées
- [ ] Implémenter la bibliothèque utilisateur (morceaux likés, artistes suivis)
- [ ] Tester l'intégration complète Spotify + YouTube

## Phase 3: Fonctionnalités Avancées

### Gestion de la File d'Attente
- [ ] Implémenter le drag-and-drop pour réorganiser la queue
- [ ] Créer l'interface de gestion de la file d'attente
- [ ] Ajouter l'autoplay avec recommandations
- [ ] Implémenter la persistance de la queue
- [ ] Créer le système de lecture aléatoire (shuffle)
- [ ] Implémenter la répétition (repeat) et les modes de lecture
- [ ] Ajouter la gestion des morceaux suggérés automatiquement

### Recherche Prédictive et Matching Avancé
- [ ] Développer la prédiction de recherche en temps réel
- [ ] Implémenter l'historique de recherche
- [ ] Créer l'interface de résultats enrichie
- [ ] Optimiser les performances de recherche
- [ ] Améliorer l'algorithme de matching Spotify ↔ YouTube
- [ ] Implémenter la détection des chaînes YouTube officielles
- [ ] Ajouter le fingerprinting audio si possible
- [ ] Optimiser la rotation des clés API YouTube

### Mode Hors Ligne et Stockage
- [ ] Configurer le Service Worker
- [ ] Implémenter le cache des ressources (Cache-First, Stale-While-Revalidate, Network-First)
- [ ] Créer la gestion du stockage local avec IndexedDB
- [ ] Développer la synchronisation hors ligne
- [ ] Implémenter le téléchargement de morceaux pour écoute hors ligne
- [ ] Créer la gestion de l'espace de stockage (pas de limite autre que l'espace disque)
- [ ] Optimiser le stockage des métadonnées Spotify
- [ ] Gérer la synchronisation des playlists hors ligne
- [ ] Implémenter le lazy loading des composants et ressources
- [ ] Configurer le code splitting pour optimiser les performances

## Phase 4: Optimisation et Finalisation

### Performance et Tests
- [ ] Optimiser les performances de chargement
- [ ] Implémenter le lazy loading
- [ ] Créer les tests unitaires (Jest, React Testing Library)
- [ ] Ajouter les tests d'intégration
- [ ] Implémenter les tests end-to-end (Cypress/Playwright)
- [ ] Optimiser le bundle size
- [ ] Configurer Lighthouse pour les tests de performance PWA
- [ ] Implémenter les tests de sécurité

### Sécurité et Monitoring
- [ ] Vérifier la sécurité des endpoints
- [ ] Configurer le monitoring des erreurs
- [ ] Implémenter la gestion des erreurs
- [ ] Ajouter les logs et métriques
- [ ] Surveiller l'utilisation des clés API YouTube (quotas)
- [ ] Implémenter la gestion des erreurs de quota YouTube
- [ ] Configurer les alertes pour les dépassements de quota
- [ ] Sécuriser l'accès aux fonctions Lambda
- [ ] Vérifier la conformité avec les ToS Spotify et YouTube
- [ ] Configurer CloudWatch Logs pour les fonctions Lambda
- [ ] Implémenter la gestion des erreurs côté frontend (Sentry/Bugsnag)
- [ ] Configurer les headers de sécurité (CSP, HSTS, etc.)
- [ ] Implémenter la validation des entrées utilisateur

### Documentation et Déploiement
- [ ] Créer la documentation utilisateur
- [ ] Documenter l'API
- [ ] Finaliser le déploiement production
- [ ] Tester l'application complète
- [ ] Documenter l'algorithme de matching Spotify ↔ YouTube
- [ ] Créer la documentation technique pour yt-dlp et l'extraction audio
- [ ] Documenter la gestion des clés API YouTube et la rotation
- [ ] Créer un guide de dépannage pour les problèmes d'extraction audio
- [ ] Configurer le pipeline CI/CD (GitHub Actions)
- [ ] Documenter l'architecture et les choix techniques
- [ ] Créer un guide de déploiement et de maintenance

## Notes Importantes

### Sécurité
- ✅ Ne jamais exposer les clés API dans le frontend
- ✅ Utiliser Flask uniquement pour la gestion des tokens
- ✅ Toutes les clés sensibles restent côté backend

### Architecture
- ✅ Frontend: React + TypeScript sur Vercel
- ✅ Backend Flask: Gestion des tokens Spotify
- ✅ Backend AWS Lambda: Extraction audio YouTube + yt-dlp
- ✅ Pas de développement local, tout en production

### URLs
- ✅ Frontend: https://pwa-spotitube-cursor.vercel.app/
- ✅ Callback Spotify: https://pwa-spotitube-cursor.vercel.app/callback 