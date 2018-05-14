# React

## Table des matières

1. [installation](./Installation.md) 
2. [Introduction](./introduction.md) 
3. [Dom](./Dom.md)
4. [Props et State](./PropsEtState.md)
5. [Interaction entre component P1](./InteractionEntreComponentPartie1.md) 
6. [Interaction entre component P2](./InteractionEntreComponentPartie2.md) 
7. [Binding](./Binding.md)
8. [LifeCycle](./LifeCycle.md)
9. [Deploiment](./Deploiment.md)
10. [Animation](./Animations.md)


## Installation
Pour travailler en React, nous allons avoir besoin d'un environnement de travail principalement basé sur Node js. S'il n'est pas déjà installé, go on the terminal

```sudo
sudo apt-get update
sudo apt-get install nodejs npm
```

## Create React App
- Crée un dossier de travail pour React dans lequel on mettra tous les projets.
- Installe et crée ton projet React avec le terminal.

Enfin utilise la commande "create-react-app" en global. Cette commande est là pour créer le squelette de notre application, on pourrait très bien le faire à la main mais c'est une perte de temps.

```create-react-app
npm install -g create-react-app
```

Une fois le package installé, crée un dossier à l'endroit ou tu souhaites stocker ton appli et tappe la commande :

```create-react-app
create-react-app serie
```
- [Plus d'info](https://reactjs.org/docs/installation.html)

Normalement notre application a été générée, on va donc la démarrer.

```strat app
cd serie
npm start
```

Après avoir lancé la commande "npm start", ton application sera disponible a l'adresse suivante: [localhost:3000](localhost:3000). Elle met en place un système de livereloading pour qu'à chaque fois qu'on sauve un fichier, l'appli se mette à jour sans devoir recharger la page.

Pour tester, modifie la ligne "Welcome To React" dans App.js par un autre titre puis verifie dans le navigateur que tout ce change automatiquement sans refresh.

![Giphy](https://media.giphy.com/media/pt0EKLDJmVvlS/giphy.gif)

Rendez-vous à la prochaine leçon : [Introduction](./introduction.md).
