# React

## Initiation

## React.JS, c'est quoi ?
React.JS est une bibliothéque type MVC créée en 2013 par facebook, **permetant de créer des interfaces utilisateur performantes** 
.
## C’est quoi React ? A quoi ça sert ? Pourquoi c’est bien ?

Avec l’avènement des [SPA](https://fr.wikipedia.org/wiki/Application_web_monopage), les applications web quasi « temps réel » telles que Gmail, Airbnb, Soundcloud ou encore Netflix, les frameworks et bibliothèques JS n’ont jamais eu autant la cote.

![test](http://blog.altima-agency.com/wp-content/uploads/2015/08/nerd-seo.png)

D’un côté, les utilisateurs sont de plus en plus matures et demandeurs de ce type d’applications extrêmement satisfaisantes en termes d’expérience. De l’autre côté la plupart des développeurs sont en quête de meilleures performances (fluidité de l’interface, scalabilité et réduction des coûts) et se plaisent à écrire du beau code (plaisir de coder, lisibilité, puissance et maintenabilité).

Difficile d’être passé à côté des technologies telles qu’AngularJS (le framework de Google), Backbone.js,  Ember.js ou KnockoutJS.

**L’utilisation massive de JavaScript change la donne d’un point de vue SEO.**

## So… WTF with JavaScript?

Le principal problème de ces frameworks réside dans le fait que les contenus sont injectés côté client, après le chargement de la page côté serveur (à l’inverse de PHP par exemple) : si on regarde le code source, c’est le néant !

Dans ces circonstances, Googlebot ne pouvait pas crawler et indexer ces contenus injectés a posteriori : **catastrophique donc d’un point de vue SEO ! (apparemment…)**

Depuis peu, Google a annoncé que Googlebot allait dorénavant essayer d’interpréter les pages crawlées en exécutant JavaScript… « Allait essayer de… »

## « We decided to try to understand pages by executing JavaScript »

Dans un billet datant du 23 mai 2014 Google déclare que  [GoogleBot peut interpréter JavaScript](https://webmasters.googleblog.com/2014/05/understanding-web-pages-better.html) et par conséquent indexer le contenu jusqu’alors invisible (car généré côté client et non côté serveur, vous suivez hein..). Cependant vous l’imaginez, à l’échelle du web, il s’agit d’un travail de titan…

## « It’s hard to do that at the scale of the current web, but we decided that it’s worth it. »

Du côté des développeurs, de nombreuses initiatives pour permettre le crawl et l’indexation des contenus ainsi générés se sont développées mais restent néanmoins coûteuses ou a minima contraignantes dans le cycle de vie d’un projet.

**C’est là qu’intervient React, LA solution ! Vous suivez toujours ?**

## C’est quoi React ?

[React](https://fr.wikipedia.org/wiki/React_%28JavaScript%29) est une bibliothèque (un ensemble de méthodes et fonctions) permettant de développer des interfaces ayant la particularité de **changer perpétuellement** : on peut penser à un module de commentaires en « temps réel » ou encore au Ticker Facebook (qui résume l’activité de vos amis, là aussi en quasi « temps réel »).

![react](http://blog.altima-agency.com/wp-content/uploads/2015/08/ticker.png)

La force de React est de toujours trouver la meilleure façon de mettre à jour et d’afficher [rapidement] ces changements, **sans que l’utilisateur ait besoin de recharger la page**.

Le développement ainsi que la publication de cette bibliothèque résultent de la collaboration d’une bonne [centaine de développeurs](https://reactjs.org/acknowledgements.html) travaillant pour diverses sociétés dont à l’initiative Facebook et Instagram : plutôt sérieux donc !

## Les points forts de React

**« React is so fast because it never talks to the DOM directly. »**

**L’intelligibilité** : le code produit est « propre » (simple à lire, à comprendre et à maintenir), sa lecture permet de voir immédiatement à quoi votre application va servir et ressembler.
**Les performances** : c’est l’une des fonctionnalités clés de React, le concept du [Virtual DOM](https://reactjs.org/docs/refs-and-the-dom.html). React va s’attacher à ne traiter et à n’afficher que les changements dans une vue (en mettant de côté le reste de la vue qui lui, ne change pas).
**La communauté** : ReactJS a séduit rapidement la communauté des développeurs JS. Et c’est sans parler de React Native qui de son côté permet de publier des applications natives iPhone (et Android prochainement) en écrivant du JavaScript. Ce qui par conséquent permet d’économiser des temps de développement considérables.
**[HOT SEO] Isomorphisme et server-side rendering** : grâce à l’utilisation d’un serveur Node, le code va pouvoir être généré côté client **ET** côté serveur (un peu comme du PHP donc… mais sans rechargement !) à la différence des autres bibliothèques et frameworks JS traditionnels (Backbone.js, AngularJS, Ember.js, etc.) qui de manière native exécute le code seulement côté client (dans le navigateur). Ce point fort est celui qui nous intéresse le plus d’un point de vue SEO car il résout la problématique de l’indexation des contenus (capacité à être crawlé et indexé) peuplés uniquement côté client.

## Isomor… quoi ?

Retenez juste que le code entre le client (votre navigateur) et le serveur est le même ! Et dit autrement « The backend and frontend share the same code. » (représenté à droite sur le schéma)

![shema](http://blog.altima-agency.com/wp-content/uploads/2015/08/isomorphisme.png)

D’ailleurs React n’est pas la seule bibliothèque « embarquant » cette technologie. A ce jour on dénombre déjà une bonne vingtaine telles que Brisket, Cassis, Catberry, Chaplin, Derby, Ezel, Este, Flatiron, Fluxible, Invisible, jsblocks, Loopback, Lazojs, Loopback, Mojito, Sara.js, San Stack et Taunus.

Concernant la terminologie d’ailleurs, certains préfèrent parler d’[Universal JavaScript](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) plutôt que d’isomorphisme. Il faut avouer que cette expression est plus simple à appréhender.

« … this is purely anecdotal evidence, but when we use the word **universal** instead of **isomorphic** everyone gets it. »

## ReactJS ≠ AngularJS

**« Lots of people use React as the V in MVC. »**

***Inutile de les comparer, React à la différence d’AngularJS n’est pas un framework.***

Si la [différence entre framework et bibliothèque](https://stackoverflow.com/questions/148747/what-is-the-difference-between-a-framework-and-a-library) vous obsède, n’hésitez pas à jeter un œil à ces discussions. Pour les autres, retenez juste que React n’impose pas d’architecture particulière à votre application et peut donc se greffer à n’importe quel projet utilisant d’autres technologies web (dont AngularJS), de manière complètement autonome.

**« React c’est juste la VUE…» **

## Comment fait-on ?

**On paye, ou on bricole !**

Si on n’a pas trop les moyens, on propose aux robots d’exploration une version HTML alternative (un snapshot) de ses pages grâce à Phantom.js. Oui, du cloaking ! C’est « sale » diront les puristes, difficile à maintenir, mais ça fonctionne, plutôt bien.

Sinon et si vous avez un peu de budget (ou un modèle économique qui tient la route) là c’est plutôt puissant et facile à mettre en place : ça s’appelle [Prerender](https://prerender.io/) ou [BromBone](http://www.brombone.com/) pour ne citer qu’eux. Si le sujet [« How to make your JavaScript apps SEO-friendly  »](http://odino.org/how-to-make-your-javascript-apps-seo-friendly/) vous intéresse, cet article est sympa.

![shema](http://blog.altima-agency.com/wp-content/uploads/2015/08/brombone-seo.png)

## Avantages de ReactJS pour le SEO

La possibilité pour les robots de crawler et d’indexer de manière native le contenu : on a **tous les avantages du JS, sans les inconvénients !**
Les temps de chargement favorables participent à une bonne expérience utilisateur. **Happy users = Happy Google**.
Et c’est tout !?  Oui, pour ce qui est du SEO. Tout dépendra de ce que vous en ferez ensuite côté implémentations back-office.  Et pour compléter l’analyse sur ce sujet je vous conseille de jeter un oeil à cet article Zack Argyle, développeur @Pinterest [« Stop Using React for EVERYTHING »](https://medium.com/@zackargyle/stop-using-react-for-everything-c8297ac1a644)

**« If you have a highly dynamic application that needs to rerender frequently, and you want to avoid the heavy weight of template diffing, you’re looking at a grass-type opponent and ReactJS’s virtual DOM will be super effective. However, if you’re site doesn’t have those needs, CHOOSE SOMETHING ELSE! »**

## Inconvénients de React ?

Pour faire simple, il n’y en a pas. Si on creuse un peu, on peut relever ceci :

La **documentation** progresse mais il y a encore quelque temps il n’était pas si simple de s’en sortir avec le seul Get started de Facebook.
**Facebook se réserve la possibilité de vous retirer la licence, le droit d’utiliser React**. Ce sujet fait débat bien que naïvement on peut se demander quel intérêt aurait Facebook d’adopter ce type de comportement.

## Qui utilise React ?

De plus en plus de sociétés ! Pour parler des plus connues on peut bien sûr citer Facebook, Instagram mais également Yahoo, Adobe, Airbnb, AdRoll, Asana, BBC, Century 21, Club Med, Dropbox, Feedly, Github, Khan Academy, KissMetrics, Netflix, Reddit, Salesforce, Twitter, WhatsApp et [pleins d’autres](https://github.com/facebook/react/wiki/Sites-Using-React).

![Giphy](https://media1.tenor.com/images/00ecffdc7134e3fa132ebe3505d73ae4/tenor.gif?itemid=6117320)



