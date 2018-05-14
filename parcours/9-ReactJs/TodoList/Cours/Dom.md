# React

## Table des matières

1. [installation](./Installation.md) 
2. [Introduction](./introduction.md) 
3. [DOM](./Dom.md)
4. [Props et State](./PropsEtState.md)
5. [Interaction entre component P1](./InteractionEntreComponentPartie1.md) 
6. [Interaction entre component P2](./InteractionEntreComponentPartie2.md) 
7. [Binding](./Binding.md)
8. [LifeCycle](./LifeCycle.md)
9. [Deploiment](./Deploiment.md)
10. [Animation](./Animations.md)


## Le DOM
Alors, on a vu comment créer un component et en créer un deuxième les uns dans les autres mais on ne sait toujours pas comment les afficher.

React utilise un principe le "virtual DOM" : il va créer une page virtuellement et l'affiche seulement quand on le lui demande.

Ici, dans `index.js`, on importe le component `App` et il y a un `ReactDOM.render(<App />, document.getElementById('root'));`

Pour faire simple, il crée notre vue et l'affiche à l'emplacement de l'ID root qui se trouve dans `index.html`.

![Giphy](https://ressources.blogdumoderateur.com/2013/02/gif-anime.gif)


Rendez-vous à la prochaine leçon : [props](./PropsEtState.md).
