# Adonis JS

Découvrez l'univers puissant d'Adonis JS 🎥✨ 
Apprenez à créer une API REST avec authentification complète, de la connexion à l'inscription avec validation de données. 

🚀💡 Nous plongerons également dans la configuration de la base de données SQLite pour une expérience sans souci

## ORM lucid
### Installation
```bash
npm i @adonisjs/lucid@18.4.0
```

### Configuration
```bash
node ace configure @adonisjs/luci
```

### Valider les variables d'environnement
```bash
export default Env.rules({
  #Ajouter
  DB_CONNECTION: Env.schema.string(),

  PG_HOST: Env.schema.string({ format: 'host' }),
  PG_PORT: Env.schema.number(),
  PG_USER: Env.schema.string(),
  PG_PASSWORD: Env.schema.string.optional(),
  PG_DB_NAME: Env.schema.string(),
})
```

## Authentification
### Installation
```bash
npm i @adonisjs/auth@8.2.3
```

### Configuration
```bash
node ace configure @adonisjs/auth
```

## Autorisation
### Installation
```bash
npm i @adonisjs/bouncer@2.3.0
```

### Configuration
```bash
node ace configure @adonisjs/bouncer
```

### Creating a policy file
```bash
node ace make:policy Book
```
Suivre les étapes en choisissant le model en occurrence (Book) et le mode de police (User) puis les actions

## Mailer
### Installation
```bash
npm i @adonisjs/mail@8.2.1
```

### Configuration
```bash
node ace configure @adonisjs/mail
```

#### Variables for the SMTP driver
```bash
  SMTP_HOST: Env.schema.string({ format: 'host' }),
  SMTP_PORT: Env.schema.number(),
  SMTP_USERNAME: Env.schema.string(),
  SMTP_PASSWORD: Env.schema.string(),
```
Copier et coller dans env.ts

J'ai utilisé [MailHog](https://github.com/mailhog/MailHog) comme serveur de mail d'où le port 1025 (SMTP_PORT = 1025) dans .env
### MailHog
#### Installation sur mac

```bash
brew update && brew install mailhog
```

#### Démarrer
```bash
mailhog
```

### Views & Templates
Pour ajouter un moteur de template

#### Installation 
```bash
npm i @adonisjs/view
```

#### Configuration 
```bash
node ace configure @adonisjs/view
```

#### Creation de vue 
```bash
node ace make:view emails/create
```

- [Lien](https://www.youtube.com/watch?v=d6QCTRO3f_0&list=PL_fWONAepR_ACdcHV91zbcxNR9DVFoNy7&index=1) YouTube
