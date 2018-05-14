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


## Le cycle de vie d'un component

Un component à un cycle de vie CAD qu'on peut intéragir avec du moment où il est monté jusqu'au moment où il est détruit sur le DOM, ça veux dire du moment où il commence à faire son boulot juqu'au moment où il a fini de faire ce qu'il avait à faire. Pour cela react défini un ensemble d'étapes.

- La première étape CAD que le composant est sur le point d'être monté ou ajouté au DOM, si il y a un traitement spécifique que l'on veux faire. Pour faire cela react utilise la fonction : componentWillMount(). Juste avant que le component soit monté, on pourrait faire une requête vers le serveur par exemple.

- Une fois que le component est monté ou ajouté, la fonction componentDidMount est appelée. On pourrait par exemple faire une requête vers un serveur que le component utilisera lui même ou se connecter à un store Redux ou faire une notification quelconque. 

- Une fois que le component est monté et qu'il doit recevoir des props, la fonction componentWillReceiveProps() est appelé. On peut décider de ce qu'il y a à faire des nouvelles données qui sont envoyées vers le component. Par exemple, on n'a reçu de nouvelles données du serveur disant que telles ou telless choses se sont passées. Donc on pourrait le forcer à ce re render. 

- Après cette fonction, vient l'étape componentShouldUpdate(). On sait qu'un component ne change que pour deux raisons: la première est que les props envoyées par le component parents ont changé donc il sera recalculé. La deuxième façon de changer un component est d'appeler sa methode setState(), cela implique deux choses : la première c'est de changer l'état des données internes du composant (le state), la deuxieme c'est de changer le processus de réconciliation (la réconciliation, c'est l'ensemble des étapes ou des calculs, des modifications, que react va faire pour déterminer les changements qui doivent être fait pour réafficher le component). Donc si on veux que notre component ignore les modifications, on défini la méthode componentShouldUpdate() avec un return false. Ce qui veux dire que dès qu'il y a un update, on l'annule. Prenons l'exemple d'une notification comme facebook. On pourrait dire qu'à partir d'un certain nombre de notification, on arrête d'incrémenter. On a le contrôle total du component pour savoir si il se met à jour ou non.

- Une fois que le componentShouldUpdate return true, cela veux dire que le component se met à jour et pour controler encore tout ça on a la fonction componentWillUpdate().  On pourrait dire qu'à chaque fois que le component fait une modification, on envoie une requete ou une notification par exemple.

- Une fois que le component est mis à jour, la fonction componentDidUpdate est appelée. Vous commencez à comprendre la mécanique ;)

- La dernière étape du cycle de vie du component est la fonction componentWillUnMout(). C'est quand on décide de retirer un component du DOM. par exemple, l'utilisateur a fini son travail et à décidé de se deconnecter, au moment où il se déconnecte, on pourrait dire que les components qui permettait d'afficher les notifications se détruit de manière plus propre. Donc avec cette fonction, on donne les instructions à faire avant sa destruction. (c'est l'endroit idéal pour arrêter tous les listners que l'on avait mit.)

## Pour résumer :

- componentWillMount          ->   Avant d'être monté/ajouté au DOM
- componentDidMount           ->   Après être monté/ajouté au DOM
- componentWillReceiveProps   ->   Avant reception de nouvelles données
- componentShouldUpdate       ->   Faire la mise à jour ?
- componentWillUpdate         ->   Avant chaque mise à jour
- componentDidUpdate          ->   Après chaque mise à jour
- componentWillUnMount        ->   Avant d'être supprimer du DOM

Aucune de ces méthodes n'est obligatoire, elles sont là uniquement si on a besoin de les utiliser 


![Giphy](https://ressources.blogdumoderateur.com/2013/02/gif-anime.gif)


Rendez-vous à la prochaine leçon: [props](./PropsEtState.md).


