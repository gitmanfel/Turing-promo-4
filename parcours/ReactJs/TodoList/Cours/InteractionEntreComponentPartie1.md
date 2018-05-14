# React

## Table des matières

1. [Installation](./Installation.md) 
2. [Introduction](./introduction.md) 
3. [DOM](./Dom.md)
4. [Props et State](./PropsEtState.md)
5. [Interaction entre component P1](./InteractionEntreComponentPartie1.md) 
6. [Interaction entre component P2](./InteractionEntreComponentPartie2.md) 
7. [Binding](./Binding.md)
8. [LifeCycle](./LifeCycle.md)
9. [Deploiment](./Deploiment.md)
10. [Animation](./Animations.md)


## Interaction entre component

Grâce au **props** et au **state** on peut incrémenter la valeur du nombre de todos de notre app et les afficher avec un autre component. Maintenant on va faire en sorte d'afficher leurs noms et de les faire passer de "résolu" ou "à faire". 

La première chose à faire va être de changer le comportement du component `List`. On peut procéder de différentes manières : 
- Faire une boucle pour afficher à chaque fois le title et la date de nos todos.
- Faire une fonction qui va nous retourner les valeurs du props donc des propriété des todos.

On va plutôt fonctionner avec la deuxième méthode. Dans le JSX, on va appeler un fonction `showTodos` et lui passer les paramètres (les props). Dans la fonction, on va mapper l'objet qui nous est retourné et retourner une div contenant le title.

```JS
  showTodos(todos){
    return (
      todos.map((todo) => {
        return (
          <div className="todo">{todo.title}</div>
        )}
    ))
  }
```

Pour qu'on puisse gérer le fait qu'une todo est complétée ou non, on va rajouter au pattern de l'objet `todo` l'attribut `done` et lui assigner `false` de base. Ajouter dans la function "AddTodo", une nouvelle props avec le title et le createdAt, qui sera donc :

```JS
  AddTodo(event) {
    event.preventDefault();
    const txt = this.toDoTitle.value;
    this.props.onNewTodo({
        title : txt,
        done: false,
        createDate : new Date()
    })
}
```

Ensuite, lorsqu'on clique sur la todo, on veux changer l'attibut `done` et le passer de `false` à `true` et inversement.

```JS
  showTodos(todos){
    return (
      todos.map((todo) => {
        return (
          <div className="todo">{todo.title}{todo.done ? 'true': 'false '}</div>
        )}
    ))
  }
```

Ajoutons un event `onClick` sur la div qui pointe vers une fonction `toggleTodo()`. Une fonction appelée par un `onClick` possède un événement qu'il faut stopper, donc `preventDefault()`. On va passer en paramètre dans l'appel de la fonction ; `todo.done`. 

Dans la fonction on va juste faire un `console.log` et normalement on obtient `false` dans la console du navigateur.

```JS
toggleTodo(todoDone){
    console.log(todoDone)
}  

showTodos(todos){
  return(
    todos.map((todo) => {
      return (
        <div className="todo" onClick={() => this.toggleTodo(todo.done)}>
          {todo.title} {todo.done ? 'true': 'false'}
        </div>
      )}
  ))
}
```

Dans la console, il y a aussi une autre erreur : *Each child in an array or iterator should have a unique "key" prop*. Ca signifie que chaque array qu'on passe en props doit avoir une key unique. On va passer une key de la même manière que notre props en lui donnant comme valeur le title du props, en théorie, on n'aura pas deux fois la même chose (Si on fait plusieurs fois le même todo on va retomber sur la même erreur). 
```JS
 <div key={} className="todo" onClick={() => this.toggleTodo(todo.done)}>
   {todo.title} {todo.done ? 'true': 'false'}
 </div>
```
On va revenir dans `App.js`, qui envoie les données. Ce que nous allons faire, c'est d'envoyer la function `todoToggleState` depuis `App` vers `List` via la **props** (onTodoToggle) et cette fonction se chargera de faire les changements.

```JS
todoToggleState(todo, index){
  console.log(todo, index)
}

<List todos={this.state.todos} onTodoToggle={this.todoToggleState.bind(this)}/>
```

Alors, comment faire pour récupérer le todo de List et l'envoyer au component parent ? On sait qu'on doit appeler la fonction envoyée par le props au moment du click et lui donner un paramètre, mais ça n'ira pas. On va avoir besoin de son index qui est créé dans le map :
- il faut rajouter un paramètre dans le map,
- il faut récupérer l'index dans la fonction `toggleTodo`
- l'envoyer au component parent
- Assigner une valeur à `key` par l'index pour pouvoir faire plusieurs todo identiques.
L'index permettra d'identifier quel todo modifier dans le component parent.

```JS
todos.map((todo,index) => {
  return (
    <div key={index} className="todo" onClick={() => this.toggleTodo(todo,index)}>
      {todo.title} {todo.done ? 'true': 'false '}
    </div>
)}


toggleTodo(todoDone, index){
  this.props.onTodoToggle(todoDone, index);
}  
```

Donc dans le componant parent, si on console.log `todo` et `index`, on peut voir notre todo et son index qui nous permettra de pouvoir modifier le tout dans le state. On a donc tous les éléments qu'il nous faut pour faire ça.

Dans le component `App` on va juste créer une variable (avec let) pour instantier `todo`, puis on inverse sa valeur pour `todo.done` à partir de `todo.done` (donc on toggle). Logiquement, ensuite, on modifie le state avec les nouvelles valeurs.

```JS
todoToggleState(todo, index){
    let _todo = todo;
    _todo.done = ! todo.done;
    let newTodos =  this.state.todos; 
    newTodos[index] = _todo;
    this.setState({todos: newTodos})
  }
```

Pour récap, si on veut modifier le state depuis un autre component, on peut créer une fonction dans le parent qui permet la modification `(setState())`, la passer en props à l'enfant, passer en paramètre de cette fonction les informations nescessaires pour les modifications.

Au debut on avait dit qu'un component avait des props et un state. Le **state** c'est l'ensemble des données qui sont internes et propres au component lui-même. Il peut changer les informations comme bon lui semble. Le **props**, sont des informations que d'autres components lui passe, le component ne peut pas les modifier. Si on veux modifier un todo ou les todos, il faut demander au component qui nous les a donnés de faire le changement lui-même. Ce qui veut dire qu'on ne peut pas faire les changements directement.

![Giphy](https://media.giphy.com/media/3oEjI1JmchoJMbIJYQ/giphy.gif)

Rendez-vous à la prochaine leçon : [Interaction entre les components P2](./InteractionEntreComponentPartie2.md).
