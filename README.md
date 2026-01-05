🌐 Application Web Full-Stack – Angular & Spring Boot
📌 Description du projet

Ce projet consiste en la conception et la réalisation d’une application web full-stack basée sur une architecture moderne et robuste, utilisant Angular pour le frontend et Spring Boot pour le backend.

L’objectif est de mettre en pratique les bonnes pratiques du développement web professionnel, depuis la conception jusqu’au déploiement, en passant par la sécurité, les performances et la maintenabilité du code.

🎯 Objectifs du projet

Concevoir une architecture Frontend / Backend bien séparée

Développer une API REST sécurisée

Créer une interface utilisateur moderne, réactive et ergonomique

Gérer la persistance des données avec une base relationnelle

Mettre en place l’authentification et l’autorisation

Préparer le projet pour un déploiement en production

🧠 Compétences développées

Développement Web Full-Stack

Architecture REST

Sécurité des applications web

Communication Frontend ↔ Backend

Gestion de bases de données

Déploiement et industrialisation

🛠️ Technologies utilisées
🔹 Frontend

Angular

TypeScript

HTML5 / CSS3

Bootstrap / Angular Material

RxJS

Services & Observables

🔹 Backend

Java

Spring Boot

Spring Web (REST)

Spring Data JPA

Spring Security (JWT)

Validation (Hibernate Validator)

🔹 Base de données

MySQL / PostgreSQL
(H2 pour le développement et les tests)

🔹 Outils & DevOps

Maven

Git & GitHub

Postman

Docker (optionnel)

CI/CD (optionnel)

🧩 Architecture du projet
fullstack-angular-springboot/
│
├── backend/
│   ├── src/main/java/com/example/app/
│   │   ├── controller/      # API REST
│   │   ├── service/         # Logique métier
│   │   ├── repository/      # Accès aux données
│   │   ├── model/           # Entités JPA
│   │   ├── security/        # Sécurité & JWT
│   │   └── AppApplication.java
│   │
│   └── src/main/resources/
│       ├── application.yml
│       └── data.sql
│
├── frontend/
│   ├── src/app/
│   │   ├── components/      # Composants Angular
│   │   ├── services/        # Services HTTP
│   │   ├── models/          # Interfaces / DTO
│   │   ├── guards/          # Sécurité des routes
│   │   └── app.module.ts
│   │
│   └── angular.json
│
├── docker/
│   ├── Dockerfile.backend
│   ├── Dockerfile.frontend
│   └── docker-compose.yml
│
├── README.md
└── .gitignore

🔐 Fonctionnalités principales

Authentification & autorisation (JWT)

Gestion des utilisateurs

CRUD complet (Create, Read, Update, Delete)

Validation des données côté backend

Gestion des erreurs

Communication sécurisée via API REST

Interface utilisateur responsive

⚙️ Installation & Lancement
🔹 Backend (Spring Boot)
cd backend
mvn clean install
mvn spring-boot:run


📍 API disponible sur :

http://localhost:8080

🔹 Frontend (Angular)
cd frontend
npm install
ng serve


📍 Application disponible sur :

http://localhost:4200

🔄 Communication Frontend / Backend

Appels HTTP via HttpClient

Gestion des tokens JWT

Intercepteurs HTTP Angular

Sécurisation des endpoints Spring Security

🧪 Tests

Tests unitaires Backend (JUnit, Mockito)

Tests Frontend (Jasmine, Karma)

Tests API avec Postman

🚀 Déploiement (optionnel)

Dockerisation complète (Frontend + Backend)

Déploiement sur serveur Linux / Cloud

Configuration des variables d’environnement

Reverse proxy (Nginx)

📈 Bonnes pratiques appliquées

✔ Architecture en couches
✔ Séparation des responsabilités
✔ Code propre et maintenable
✔ Sécurité des API
✔ Validation des entrées
✔ Gestion centralisée des erreurs

🎓 Objectif pédagogique

Réaliser une application web full-stack professionnelle, proche des standards utilisés en entreprise.

📬 Contact

👤 Nom : YIMFACK MORINO
🔗 LinkedIn : https://www.linkedin.com/in/morino-yimfack-627a3737a/
📧 Email : https://mail.google.com/mail/u/0/#inbox

⭐ Contribution

Les contributions, suggestions et retours sont les bienvenus.
N’hésitez pas à forker le projet ou à ouvrir une issue.

⭐ Support

Si ce projet vous est utile, pensez à laisser une ⭐ sur le repository.
