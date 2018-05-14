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


## Props et State

Le **props** (propriété) est un paramètre qui nous permet de faire passer des informations d'un élément à un autre.

La syntaxe de base pour envoyer un props :

```JS
var valeur = 'bonjour';
<List NomDuProps={valeur}/>
```

On appelle le component puis on lui passe des paramètres comme une balise en HTML. Ici le nom du props est : "NomDuProps" et sa valeur est le contenu de la variable `valeur`.

pour récupérer la valeur du props, une fois dans le component `List` appelé juste au-dessus, n'importe où dans la class, on utilisera :
```JS
var test = this.props.NomDuProps;
console.log(test);
```
Pour finir, dans la console, il affiche "bonjour".

Pour notre application, on va créer une ToDoList. Pour ce faire, dans le component `App` on va ajouter un component `List` dans le dossier `Component`. Pour le moment, il n'affiche pas grand chose.

```JS
export default class List extends React.Component {
  render() {
    return (
        <div className="liste">

        </div>
    );
  }
}
```

(N'oubliez pas de l'importer dans App et d'importer React dans la List ; ) )

Pour passer des valeurs d'un component à un autre, il faut simplement ajouter une ou plusieurs props :

```JS
// Dans le render de App.js :
<List todos={['vaiselle','cuisiner']} NomDeMaProps2={valeur2} />
```
Pour décomposer : 
- todos={['vaiselle','cuisiner']} -> une props qui s'appelle `todos` dans laquelle on envoie un array avec deux éléments
- NomDeMaProps2={valeur2} -> une props qui s'appelle `NomDeMaProps2` dans laquelle on envoie une variable `valeur2` qui contient la valeur que l'on veut. (celle-ci est un exemple)

Pour afficher les données qui sont passées d'un component à un autre, il faut faire un return dans le component `List` :

```JS
export default class List extends React.Component {
  render() {
    return (
        <div className="liste">
            {this.props.todos.length} // égale 2
        </div>
    );
  }
}
```

Ici nous avons affiché quelque chose de dynamique dans le render avec l'HTML. Lorsque on veut afficher le contenu d'une  variable dans le return, on utilise "{  }" sinon, on peut créer des fonctions dans notre component pour traiter les informations qui nous sont envoyées.

```JS
export default class List extends React.Component {
  test(){
    return 'bonjour';
  }

  render() {
    return (
        <div className="liste">
            {this.props.todos.length}
            {this.test()}
        </div>
    );
  }
}
```

Les informations passées en paramètres sont accessibles avec l'attribut props. 

Pour notre App, on a un component pour afficher le nombre de tâches à réaliser (todos), actuellement il n'affiche que la taille, mais il nous faut aussi un component pour les créer et garder une logique de séparation des components. Appelons le `<TodoForm />` dans App.

Crée un nouveau component appelé `TodoForm`, dans lequel tu vas faire un formulaire dans une div dans lequel il va y avoir deux choses (un input type text et un bouton).

```HTML
<div className="liste">
    <form>
        <input type="text" />
        <button>Ajouter</button>
    </form>
</div>
```

Tu dois voir un formulaire apparaître avec un bouton et un input. L'idéal serait qu'à chaque fois que l'on exécute notre bouton, il ajoute une todo, donc il l'ajoute à notre App. On va lui passer un props aussi nommé `onNewTodo`. Dans ce props, on peut passer des fonctions.

````JS
class App extends Component {
  onNewTodo(todo){
    console.log(todo);
  }
  render() { 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bonjour</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TodoForm onNewTodo={this.onNewTodo} />
        <List todos={["vaiselle", "cuisine"]} />
      </div>
    );
  }
}
````

Dans le component `TodoForm`, nous avons un input et un bouton pour ajouter des "todo". Ce qu'on veut c'est que lorsque l'on clique sur le bouton, on recupère la valeur dans l'input et nous la passons au component parent. Utilise le "ref" dans l'input, c'est un attribut qui va recevoir une fonction, un objet, une simple chaine de caractère,... Et va donner un nom pour permettre de s'en servir plus tard.

```JS
<input type="text" ref={(input) => this.ToDoTitle = input} />
```

On crée une propriété `ToDoTitle`, pour prendre la valeur que l'on rentre dans l'input. Mais pour le moment, elle ne s'affiche nulle part, on utilise `this.ToDoTitle` pour pouvoir avoir accès à la variable dans le component parent. 

Le `(input)=>` est une nouvelle syntaxe pour faire une fonction en JavaScript ES6, faire `function input(){this.ToDoTitle = input}` revient à faire la même chose. On va ajouter une function au bouton qui va arrêter l'evenement en cours et nous afficher le contenu de la console.

```JS
AddTodo(event){ 
    event.preventDefault();
    console.log(this.ToDoTitle.value);
}
```

```JS
<button onClick={this.AddTodo.bind(this)} >Ajouter</button>
```

Si cela fonctionne, on remplace le console.log par une "const" txt dans laquelle on lui donne la valeur de l'input, dans ce cas ci, `this.ToDoTitle.value`. Maintenant on va envoyer à la function parent (onNewTodo) les valeurs qu'on a récupérées sous forme d'objet.


```JS
AddTodo(event){
    event.preventDefault();
    const txt = this.ToDoTitle.value;
    this.props.onNewTodo({
        title: txt,
        createdAt: new Date()
    })
}
```

Alors on va sur notre page et tester formulaire. Si tout va bien, il doit afficher : `{title: "test", createdAt: Tue Nov 14 2017 15:30:56 GMT+0100 (CET)}`.

Pour récapituler :
- On envoie en props la function `onNewTodo` vers le component `TodoForm`.
- `TodoForm` reçoit la fonction
- On met à jour notre variable txt lorsqu'on clique sur le bouton grâce à la fonction `AddTodo`
- On appelle la fonction `onNewTodo` depuis le props
- On lui passe les paramètres nescessaires
- On execute la function donc le console.log

Bon c'est certain, c'est trop cool mais en réalité ça sert à rien. Maintenant le but est d'envoyer le tout dans notre component `List`.

Un truc tout simple aurait été d'envoyer une table vers l'autre component (nosTodo.push(todo)) mais React a fait quelque chose d'autre pour nous. Un composent a 2 types de données :
- Les données propres aux composants -> **State**
- Les données qui lui sont passées -> **Props**

Ce qu'on va faire à la place, c'est que nous allons mettre à jour ce fameux state.
Le state est donc un objet interne à notre component et pour l'utiliser on doit utiliser un constructor pour le déclarer et la fonction setState() pour le modifier. Le constructor est une foncion qui va mettre en place les premiers paramètres de notre component. Donc dans le `App.js` : 

```JS
constructor(props){
    super(props);
    this.state = {
        todos:[]
    };
}

onNewTodo(todo){
    let newTodoList = this.state.todos;
    newTodoList.push(todo);
    this.setState({ todos: newTodoList });
}
```
Mais alors pourquoi on a fait `newTodoList.push(todo)` tout de suite ? La seule manière pour modifier le state est la fonction `setState()`. 

Et maintenant que nous avons un state, nous pouvons le passer dans le component List en props : `<List todos={this.state.todos} />`
Si on test, on remarquera que ça ne fonctionne pas parce que ça ne fonctionne pas... Cannot read property 'todos' of undefined. On n'envoie pas le bon "this" à notre fonction et pour se faire, il faut `bind(this)` pour la fonction. (Un peu bizarre je vous l'accorde mais ça marche)

```JS
<TodoForm onNewTodo={this.onNewTodo.bind(this)} />
```

Le **state** et le **props** sont 2 éléments très très important dans React. Le props permet de passer des informations d'un component à un autre, peu importe que ce soit un objet, une variable, une fonction, le state, ... Le state est un objet qui reste juste à portée de notre component et on peut le modifier uniquement avec le `setState()`.

Avant de passer à la suite, il existe une extention google pour React qui permet de voir comment il fabrique notre vue. C'est le **[react dev tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)**. Une fois installé, dans l'inspecteur, il y a un nouvel onglet qui appara$it (c'est le dernier donc il est peut être caché). Avec ça, on peut voir les components de la vue et les props qui lui sont passé et aussi l'état du state sans devoir faire de console.log :)

![Giphy](https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif)

Rendez-vous à la prochaine leçon : [Interaction entre les components P1](./InteractionEntreComponentPartie1.md).
