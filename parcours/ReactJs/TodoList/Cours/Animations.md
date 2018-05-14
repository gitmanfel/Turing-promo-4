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


## Les animations

Mettez en place un système d'animation sur chaque todos qui s'affiche.
Pour faire ça on va avoir besoin d'un package et donc de l'installer sur notre projet.
On va couper le serveur nodeJs en cours pour faire une petit ligne de commande:

```
npm install ReactCssTransition --save
```

Pour résumé, npm install pour dire que l'on install un package
ReactCssTransition pour dire quel package
--save, c'est pour l'ajouter automatiquement au fichier package.json qui répertorie tout les packages utilisé.

Pour utiliser ReactCssTransitionGroup, rien de plus simple, 
On doit importer la librairie et aussi un petit bout de css pour bien faire: 

```JS
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../animation.css';
```

```JS
<div className="messages">
    <ReactCSSTransitionGroup 
        component="div"
        className="message"
        transitionName="message"
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}
    >
        {messages} //boucle pour afficher des éléments comme la Todo.
    </ReactCSSTransitionGroup>
</div>
```

```CSS
/* ----------------------------
	ANIMATIONS
---------------------------- */

.message-enter {
	opacity: 0;
  transform: translateY(100%);
  transition: all 0.2s;
}

.message-enter-active {
	opacity: 1;
	transform: translateY(0);
}

.message-leave {
	opacity: 1;
  transform: translateY(0);
  transition: all 0.2s;
}

.message-leave-active {
	opacity: 0;
	transform: translateY(-100%);
}
```

Pour le reste, ce n'est qu'un peu de configuration :)


![Giphy](https://ressources.blogdumoderateur.com/2013/02/gif-anime.gif)


