# React

## Let's start with ReactJS

### Gitting start

Pour commencer avec React, installez l'outil CLI React (Create React App) et exécutez la commande pour créer une nouvelle application (attention votre nom d'appli doit être en minuscule):

````
# Install the CLI tool
npm install -g create-react-app

# Create an app
create-react-app my-app-name

# Install Dependencies
cd my-app-name
npm install
````

Pour commencer sans base de fichier et pour bien comprendre, on va retirer toute la base de l'application, donc tout ce qu'il y a dans src.

````BASH
cd my-app-name
rm -f src/*
npm start
````

Vous pouvez également tester avec JSFiddle:

[JSFiddle](https://jsfiddle.net/reactjs/69z2wepo/)

## The Basics

Les blocs de construction de base de React sont appelés composants. Toute l'application est une sorte construction faite en légo, donc avec beaucoup de petit légo. On crée les différents blocs et l'application les utilises, les assembles les un avec les autres pour en faire une application. Cependant ces blocs peuvent recevoir des paramètres.

Voici l'exemple d'un composant à mettre dans le fichier Welcome.js que vous allez créer dans le dossier src : 

```JS
import React, { Component } from 'react';

export default class Welcome extends Component {
  render() {
    return (
      <div className="App">
        Welcome
      </div>
    );
  }
}
```

Histoire de décomposer un peu ce qu'il se passe, pour commencer:
- import React, { Component } from 'react'; -> Import de la librairie react installer dans le dossier node_modules.
- export default class Welcome extends Component -> Création de la class et export de la classe pour l'imbriquer dans d'autres composants
- render() -> fonction dans react qui fais renvoie la vue.
- <div className="App"> -> className est la même chose que class en html mais react utilise deja le mot class donc petit changement (le comportement est le même)
- (Par convention, le nom du composant, le nom du fichier, le nom de l'import,... s'appel de la même manière et commence par une majuscule pour faire plus simple)

Pour l'instant, sur la page, rien ne s'affiche parce que react n'a eu aucune instruction. Pour ce faire, il faut créer un composant qui va récupérer le composant principal pour l'afficher grace au React-dom le tout dans le fichier index.js que vous créez aussi ainsi que le fichier index.css (dans le quel vous mettez ce que vous voulez en CSS): 

````JS
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './Welcome';

ReactDOM.render(<Welcome />, document.getElementById('root'));
````

Pour décomposer encore une fois : 
- import React from 'react'; -> différent que la première fois parce que react n'a pas besoin des components ici
- import ReactDOM from 'react-dom'; -> C'est lui qui gère l'affichage dans le DOM
- import './index.css'; -> import du css (généralement c'est le seul endroit où le css doit être importer)
- import Welcome from './Welcome'; -> import du composant créé précédement (Il n'est pas écrit Welcome.js et c'est normal, par défaut nodejs le comprend, mais si l'extention est différente, il faut le préciser)
- ReactDOM.render(<Welcome />, document.getElementById('root')); -> ReactDOM.render() -> fonction pour afficher quelque chose et prend deux paramètre : Le premier est le composant à rendre, et le deuxième, l'endroit où le rendu ce fera. 
Dans le dossier public du projet se trouve un index.html dans lequel il n'y a qu'une div avec un id root, et c'est elle que react sélectionne pour afficher l'application.

## Tout l'interet de react réside dans l'imbrication des composants.

Comme au dessus, React est une construction légo mais pour le moment l'application n'a qu'une seule pièce.
Crée un deuxième composant appelé "Hello" dans le fichier Hello.js toujours dans le dossier src:

```JS
import React, { Component } from 'react';

export default class Hello extends Component {
  render() {
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}
```
Maintenant que le deuxième composant est créé, il faut l'importer et l'appeler dans le premier composant  :
(Pour appeler un composant, comme dans l'index.js (<Nom_Du_Composant/>))

```Js
import React, { Component } from 'react';
import Hello from 'Hello';

export default class Welcome extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
      </div>
    );
  }
}
```
Si tout va bien, sur le navigateur "Hello" devrait apparaître.

Ce que react permet aussi, c'est d'envoyer d'un composant à un autre des paramètres, de cette manière: 

```JS
import React, { Component } from 'react';
import Hello from './Hello';

export default class Welcome extends Component {
  render() {
    return (
      <div className="App">
        <Hello parametre={'HelloWorld'} />
      </div>
    );
  }
}
```
Le paramètre a été envoyé au composant enfant et il reste à aller chercher le paramètre de l'autre côté.
(un paramètre en react est appelé un "props")

```JS
import React, { Component } from 'react';

export default class Hello extends Component {
  render() {
    return (
      <div className="App">
        {this.props.parametre}
      </div>
    );
  }
}
```
## Let's go to the real react project !

[ReactStart](../readme.md)

![Giphy](https://media1.tenor.com/images/00ecffdc7134e3fa132ebe3505d73ae4/tenor.gif?itemid=6117320)

