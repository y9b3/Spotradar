# Spot Radar Backend

Backend de l'application Spot Radar, développé avec Node.js, Express et MongoDB.

## Prérequis

- Node.js (v14 ou supérieur)
- MongoDB (v4.4 ou supérieur)
- npm ou yarn

## Installation

1. Clonez le repository :
```bash
git clone https://github.com/votre-username/spotradar.git
cd spotradar/backend
```

2. Installez les dépendances :
```bash
npm install
```

3. Créez votre fichier .env :
```bash
cp .env.example .env
```

4. Modifiez le fichier .env avec vos propres valeurs :
- `MONGODB_URI` : URL de votre base de données MongoDB
- `EMAIL_USER` et `EMAIL_PASS` : Vos identifiants Gmail (ou autre service SMTP)
- `FRONTEND_URL` : URL de votre application frontend
- `JWT_SECRET` : Une chaîne aléatoire pour sécuriser les tokens JWT
- `PORT` : Le port sur lequel le serveur écoutera

## Configuration de l'envoi d'emails

Pour utiliser Gmail comme service d'envoi d'emails :

1. Activez l'authentification à deux facteurs sur votre compte Gmail
2. Générez un mot de passe d'application spécifique
3. Utilisez ce mot de passe dans `EMAIL_PASS`

## Démarrage

Pour lancer le serveur en mode développement :
```bash
npm run dev
```

Pour lancer le serveur en production :
```bash
npm start
```

## Routes API

### Authentification

- POST `/api/auth/signup`
  - Corps de la requête :
    ```json
    {
      "username": "string",
      "email": "string",
      "password": "string",
      "isNewsletterSubscribed": boolean
    }
    ```
  - Réponse :
    ```json
    {
      "success": true,
      "message": "Inscription réussie !",
      "user": {
        "id": "string",
        "username": "string",
        "email": "string",
        "isNewsletterSubscribed": boolean,
        "isEmailVerified": boolean
      }
    }
    ```

- GET `/api/auth/verify-email/:token`
  - Réponse :
    ```json
    {
      "success": true,
      "message": "Email vérifié avec succès"
    }
    ```

## Structure du projet

```
backend/
  ├── src/
  │   ├── config/        # Configuration de l'application
  │   ├── controllers/   # Logique métier
  │   ├── models/        # Modèles Mongoose
  │   └── routes/        # Routes API
  ├── .env.example       # Example de variables d'environnement
  ├── .gitignore        # Fichiers ignorés par git
  ├── package.json      # Dépendances et scripts
  └── README.md         # Documentation
```

## Sécurité

- Les mots de passe sont hashés avec bcrypt
- Les tokens JWT sont utilisés pour l'authentification
- La validation des données est effectuée côté serveur
- Protection contre les attaques courantes (XSS, CSRF, etc.)

## Contribution

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request 