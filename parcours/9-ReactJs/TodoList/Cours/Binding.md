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

## Binding et Proptypes

Donc on avait demandé d'ajouter une checkbox devant chaque `todoItem`, pouvoir les cocher et faire des actions qui vont d'appliquer sur les éléments multiples.

Donc pour commencer simplement, on va mettre un input type checkbox dans le component `TodoItem` et donner à l'input une value qui sera l'index actuel.

```JS
export default class TodoItem extends React.Component {
  render() {
    const todo = this.props.item;
    const index = this.props.index;
    let str = todo.done ? 'Marqué à faire': 'Marqué comme fait ';
    return (
      <div key={index} className="todo">
        <input type="checkbox" value={index} />
        {todo.title}
        <button onClick={() => this.props.toggleTodo(todo, index)}>{str}</button>
      </div>
    );
  }
}
```

À chaque fois qu'on appuie sur une checkbox, on va l'ajouter ou supprimer à une liste que nous pourrons traiter par la suite. On va créer une fonction qui sera appelée à chaque click sur la checkbox. On aura besoin de connaître son état (donc true ou false) et de son index.

```JS
addToList(index, event){
    console.log(index);
    console.log(event);
}

<input type="checkbox" value={index} onClick={(e) => this.addToList(index, e.target.checked)} />
```

Alors, nous devons avoir une liste dans laquelle avec l'ensemble des todos qui select mais dès que l'on commence à modifier ou faire ces changement-là, on se rend compte qu'on les fait au mauvais endroit. On ne doit pas faire ce traitement `addToList` dans l'item lui-même. Ce n'est pas à lui de gérer ça. Est-ce que c'est la liste de todo qui va le gérer ou le composant qui appelle la liste des todos ? La première des choses sera de dire que `AddToList` vient des props. Vu que nous le passons en props, il faut aussi le récupérer dans le composant parent à `TodoItem`. Pour ce faire, on ajoute à l'appel du component `TodoItem`, notre fonction `addToList` et bien sûr, créer cette fameuse fonction.

Remplacer le map dans List par celui ci qui boucle donc sur le component <TodoItem />

```JS
todos.map((todo,index) => {
    return (
    <TodoItem 
        item={todo} 
        index={index} 
        key={index} 
        toggleTodo={this.toggleTodo.bind(this)} 
        addToList={this.addToList.bind(this)} 
    />
    )
}

addToList(index, event){
    console.log(index, event);
}
```

Vu que nous voulons ajouter les éléments à une list, on va avoir besoin de la créer. Le component `List` lui-même n'a toujours pas de d'état interne, toutes les données qu'il traite, sont des propriétés. Ce qui veut dire que :
- soit on définit un state interne au component 
- soit on décide de remonter le tout au component App. 

On va d'abord le faire ici avant de le move up à son parent. On aura besoin de définir le state dans le constructor.

```JS
constructor(props){
    super();
    this.state={
        selectedTodos: []
    };
}
```

Les selectedTodos de mon state sont pour le moment un tableau vide. Histoire de tester ça, on va afficher le nombre de `selectedTodos` sur notre page de la même façon que pour les Todos créés. Et bien sûr, il ne faut pas oublier de modifier la valeur de `selectedTodos` en fonction du nombre de todo selected. Comme d'habitude, dans notre fonction `addToList`, `this.setState()` pour modifier le state et on va concatener l'ancienne valeur du state avec la valeur du todo qui vient du props en fonction de son index.

```JS
addToList(index, event){
    if(event){
        this.setState({
        selectedTodos: this.state.selectedTodos.concat(this.props.todos[index])
        })
    }
}
```

Lorsque qu'une valeur est vraie, on l'ajoute au state mais lorsqu'on la déselectionne, elle y reste aussi... 

Pour la supprimer, on va devoir savoir quel est l'index de la todo à supprimer et quel est l'index de la todo à supprimer dans la liste que nous avons créer. 
Exemple : si on ajoute "index 1" et que nous voulons la supprimer, l'"index 1" dans la liste n'existe pas parce qu'il n'existe pour le moment que la 0. Pour nous aider il existe une fonction en JS pour savoir quel est l'index d'un élément de notre tableau `(indexOf())` il faut comparer quelque chose à notre tableau et s'il match avec quelque chose il nous retourne son index.

```JS
addToList(index, event){
    let _list = this.state.selectedTodos;
    let _todo = this.props.todos[index];
    if(event){
      _list.push(_todo)
    }
    this.setState({
      selectedTodos: _list
    })
  }
```

Il faut encore retirer les éléments déselectionnés plus ou moins de la même manière qu'avant.

```JS
addToList(index, event){
    let _list = this.state.selectedTodos;
    let _todo = this.props.todos[index];
    if(event){
      _list.push(_todo)
    }else{
      _list.splice(_list.indexOf(_todo), 1);
    }
    this.setState({
      selectedTodos: _list
    })
  }
```
Si on a au moins un seul élément selectioné, on affiche un bouton qui nous permettra de faire une action en fonction de cette liste. Si on a `todo.length` plus grand que 0 alors on affiche un bouton :

```JS
const afficher = this.state.selectedTodos.length > 0;

{ afficher ? <button> Traiter </button> : null }
```

En théorie, on a un bouton qui s'affiche si on a au moins une todo cochée. On va maintenant faire une fonction qui s'exécute lorsque l'on clique sur notre bouton. Dans la fonction, on va avoir besoin du state et on va le comparer à notre liste d'éléments selectionnés pour les toggles et les renvoyer dans le state.

```JS
processTodo(){
  let list = this.state.selectedTodos;
  list.forEach(item => item.done = !item.done)
  this.setState({
    selectedTodos: list
  })
}
```

La traduction de cette fonction : à chaque todo, on check item.done et on lui inverse sa valeur.

Faites en sorte de pouvoir supprimer une todo.

![Giphy](https://media.giphy.com/media/xT9IgCeofc0uGTBNYI/giphy.gif)
