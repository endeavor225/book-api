# Adonis JS

Découvrez l'univers puissant d'Adonis JS 🎥✨ 
Apprenez à créer une API REST avec authentification complète, de la connexion à l'inscription avec validation de données. 

🚀💡 Nous plongerons également dans la configuration de la base de données SQLite pour une expérience sans souci

## Installation de l'ORM lucid
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
```bash
npm i @adonisjs/auth@8.2.3
```

### Configuration
```bash
node ace configure @adonisjs/auth
```


- [Lien](https://www.youtube.com/watch?v=d6QCTRO3f_0&list=PL_fWONAepR_ACdcHV91zbcxNR9DVFoNy7&index=1) YouTube
