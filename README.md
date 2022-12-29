# Template typescript pour service expressjs

## 1.Introduction

Ce template sert a générer une API typescript / expressjs rapidement sans configuration

## 2.Env

Regarder le `.env.example` pour regarder les variables d'environnement utilisé dans le template.

### a) SERVER_PORT

Un nombre || string qui permet de définir le port d'écoute d'expressjs, le nombre part défault est 8080.

## 3.Workflows

Regarder le dossier `.github/workflows-example` pour avoir des worflow déjà préfait.

### a) docker-image

Génère une image docker

### b) update-repo-flux

Peux mettre a jour un repo surveillé par flux dans le cadre d'une automatisation.

## 4.Utilisation

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
