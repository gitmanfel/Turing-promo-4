# React

## Router

Pour faire un router en react, rien de plus simple.
Il faut pour commencer le package react-router-dom installé dans le projet:

```BASH
npm install react-router-dom --save
```

Ensuite, on modifie le fichier principal (pas le component principal mais bien le fichier donc index.js) avec tout ça : 

```JS
import React from 'react';
import ReactDOM from 'react-dom';
//CSS
import './Assets/style.css';
// Component
import App from './App';
import Pseudo from './Pseudo';
import NotFound from './NotFound'
// Rooter
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

const Root = () => {
	return (
		<Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Pseudo">Pseudo</Link></li>
                    <li><Link to="/NotFound">NotFound</Link></li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path='/' component={ App } />
                    <Route exact path='/Pseudo' component={ Pseudo } />
                    <Route component={ NotFound } />
                </Switch>
            </div>
        </Router>
	)
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

```

En gros on fais les imports dont on à besoin et par après, dans le router, le patern à suivre est très simple :

- ```<Router> </Router>``` -> Tout ce qu'on met à propos des routes
- ```<Link to="/">Home</Link>``` -> Lien vers en fonction de l'url
- ```<Switch> </Switch>``` -> Les différentes directions
- ```<Route exact path='/' component={ App } />``` -> les différentes routes
- ```<Route component={ NotFound } />``` Une route sans path pour le 404

Voilà tout :)