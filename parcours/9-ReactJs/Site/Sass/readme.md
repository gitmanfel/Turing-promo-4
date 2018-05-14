# React

## Sass

Il est bien sûr possible de faire du Sass avec React mais pour faire ça, il va falloir faire quelques manipulations : 

(Dans une application React fonctionnelle)

```BASH
cd your-app
mkdir src/Assets
```

```BASH
npm install node-sass --save
npm install npm-run-all --save
```

- Créer un fichier style.scss dans le dossier Assets qui est dans le dossier src
- Modifier le package.json manuellement : 

```JSON
"scripts": {
    "build-css": "node-sass src/Assets/style.scss -o src/Assets/",
    "watch-css": "npm run build-css && node-sass src/Assets/style.scss -o src/Assets/ --watch --recursive",
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js",
    "build": "npm run build-css && react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
}
```

une fois les modifications apportées, il va falloir aussi modifier le fichier css que react va chercher (normalement dans index.js) et modifier l'import "import './App.css';" par "import './Assets/style.css';"
Supprimer le "import './App.css';" dans le App.js.

Si tout est fait correctement, maintenant vous pouvez faire du Sass dans votre projet react !