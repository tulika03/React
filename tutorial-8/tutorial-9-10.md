## Tutorial-9

### Single responsibility function
Each of the component should have a single responsibility.

### Custom hooks
Hooks are utility functions. They are like helper functions. Building you own hooks lets you extract component logic into reusable functions.

## App chunking
- It is known as code splitting, dynamic bundling, lazy loading, on demand loading

- Bundling is great, but as your app grows, your bundle will grow too. Especially if you are including large third-party libraries. You need to keep an eye on the code you are including in your bundle so that you don’t accidentally make it so large that your app takes a long time to load.

- To avoid winding up with a large bundle, it’s good to get ahead of the problem and start “splitting” your bundle. Code-Splitting is a feature supported by bundlers like Webpack, Rollup and Browserify (via factor-bundle) which can create multiple bundles that can be dynamically loaded at runtime.

- Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app. While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.


## React.lazy
The React.lazy function lets you render a dynamic import as a regular component.

Before:
```
import OtherComponent from './OtherComponent';
```
After:
```
const OtherComponent = React.lazy(() => import('./OtherComponent'));
```
This will automatically load the bundle containing the OtherComponent when this component is first rendered.

- React.lazy takes a function that must call a dynamic import(). This must return a Promise which resolves to a module with a default export containing a React component.



## Suspense
Bundling is the process of following imported files and merging them into a single file: a “bundle”. This bundle can then be included on a webpage to load an entire app at once.


## Tutorial 10



