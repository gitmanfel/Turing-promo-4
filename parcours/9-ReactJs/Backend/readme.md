# React

## Backend

Pour faire du Backend Rapidement, il est possible de lier la base de notre application sur un site qui s'appel firebase.

Pour ce faire, il va falloir trois choses :

1. Une application qui tourne déjà en frontEnd et qui forcement se reset à chaque reaload
2. Toute les informations stockée doivent être sur le state
3. Avoir une compte sur FireBase.

## Le compte sur firebase.

Firebase est un ensemble de services d'hébergement pour n'importe quel type d'application. Il propose d'héberger en NoSQL et en temps réel des bases de données, du contenu,...

Pour créer un compte, rien de plus simple vous êtes grands et talenteux ;) 

Une fois le compte créer, il va falloir accéder à la console et créer une nouveau projet (Appeler comme vous voulez et choissez une région pas trop loin). Une fois dans le menu, il faut aller dans la database et y faire ses premiers pas. Vous voici dans vote Data Base vide évidement. On va devoir modifier les règles et les changer avec ceci :

```
{
  "rules": {
    ".read": "auth == null",
    ".write": "auth == null"
  }
}
```
Une fois publier, on va jouer avec notre appli.

````BASH
npm install re-base --save
````

Créer un fichier appeler Base.js où vous voulez et placez-y :

````JS
import firebase from 'firebase';

const app = firebase.initializeApp({
    apiKey: "AIzaSyD6XMsLSKhZ3Jbf0EtvTbGbPlQJ9doBU6o",
    authDomain: "test-ffc15.firebaseapp.com",
    databaseURL: "https://test-ffc15.firebaseio.com",
    storageBucket: "test-ffc15.appspot.com",
    messagingSenderId: "400068196220"
});

export default app;
````
Dans le fichier Base.js, il va falloir modifier les informations de login avec les votres vous trouverez dans la console de Firebase->Projet Overview -> Ajouter Firebase à votre application Web. Ici vous avez les logs à remplacer dans votre fichier. (Faites attention à remplacer les choses correctement).

Dans le fichier ou ce trouve le state principal (souvent dans App.js), il faut import Base :

````JS
import Rebase from 're-base';
import app from './Base';
var base = Rebase.createClass(app.database());
````

Une fois importer, la dernière chose à faire, c'est d'ajouter une fonction tout faites qui va avoir pour but de synchroniser le state avec la base de données NoSql dans les deux sens CAD que si on modifie le state du coté du client, la fonction va update le serveur et que si on modifie le serveur, il va modifer le client : 

```JS
state={
    test: ['bonjour', 'aurevoir']
}

componentDidMount(){
  base.syncState(`/`, {
    context: this,
    state: 'test',
    asArray: true
  });
}
```

Il y a différent paramètre modifiable dans cette fonction mais pour nous c'est bon !

Et c'est tout !

Si vous souhaitez plus d'information : [re-base](https://github.com/tylermcginnis/re-base)


