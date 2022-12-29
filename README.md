# Template typescript pour service expressjs

## 1.Introduction

Ce template sert a générer une API typescript / expressjs rapidement sans configuration

## 2.Configuration

Regarder le `.env.example` pour regarder les variables d'environnement utilisé dans le template. <br/>
Regarder le dossier `.github/workflows-example ` pour avoir des worflow déjà préfait.

## 3.Utilisation

### a) Lancement

Lancement pour le développement (utilise ts-node & nodemon) :

```console
npm run dev
```

Lancement du build (utilise tsc & rimraf et génère un dossier build) :

```console
npm run build
```

Lancement type prod :

```console
npm run start
```

### b) Test

Lancement test (utilise ts-jest) :

```console
npm run test
```

Lancement test type developpement (watch):

```console
npm run dev:test
```

Génération du coverage :

```console
npm run coverage
```
