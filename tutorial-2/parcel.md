# Parcel
 - ###### https://parceljs.org/features
A module bundler  is a tool that takes pieces of javascript and bundles them into a single file, usually for use on browser.
- Parcel is a web application bundler

## Development
Parcel includes a dev server for supporting hot reloading, HTTPS, an API proxy, and more.

### Dev server
- Parcel builtin server automatically starts when we run parcel command, which is shortcut of `parcel serve`
- Use `--port` or `-p` to override default port
- Use `--host` for specifying connection from a specific host
- `--open` to open as the app starts on the browser
    - ex: `npx parcel index.html --open chrome`

### Hot reloading
- As we make changes in our code parcel automatically rebuilds changed files and updates our app in browser.
- By default, it fully reloads the page, but on some cases it performs HMR.
**HMR** i.e Hot Module Replacement improves development experience by updating modules in the browser at runtime without needing whole page refresh.
- CSS changes are automatically applied via HMR with no page reload necessary. This is also true when using a framework with HMR support built in, like React (via Fast Refresh), and Vue.

- HMR works by replacing the code for a module, and then re-evaluating it and along with all of its parents. If you need to customize this process, you can hook into it using the module.hot.accept and module.hot.dispose methods. These let you save and restore state inside the new version of the module.

- `module.hot.dispose` accepts a callback which is called when that module is about to be replaced. Use it to save any state to restore in the new version of the module in the provided data object, or cleanup things like timers that will be re-created in the new version.

- `module.hot.accept` accepts a callback function which is executed when that module or any of its dependencies are updated. You can use this to restore state from the old version of the module using the data stored in module.hot.data.


### Lazy load
- In development of large applications, it can be frustrating to wait for the entire app to build, so use --lazy to tell parcel to defer building files until they are requested in browser, which can significantly reduce development build times

- The server starts quickly, when we navigate to the page for the first time, Parcel builds only the files necessary for that page.

### Caching
- Parcel caches everything it builds in the disk.
- If we restart a server, Parcel will only rebuild the files that have been changed since last it ran.
- By default, the cache is stored in the .parcel-cache folder inside your project. 


### HTTPS
Sometimes, you may need to use HTTPS during development. For example, you may need to use a certain hostname for authentication cookies, or debug mixed content issues. Parcel’s dev server supports HTTPS out of the box. You can either use an automatically generated certificate, or provide your own.

To use an automatically generated self-signed certificate, use the --https CLI flag. The first time you load the page, you may need to manually trust this certificate in your browser.

parcel src/index.html --https

### Auto install
When you use a language or plugin that isn’t included by default, Parcel will automatically install the necessary dependencies into your project for you. 
For example, if you include a .sass file, Parcel will install the @parcel/transformer-sass plugin. When this happens, you'll see a message in the terminal, and the new dependency will be added to the devDependencies in your package.json.


## Code splitting
- Parcel supports zero config code splitting.
- This allows us to split your application code into separate bundles which can be loaded on demand, resulting in smaller initial bundle sizes and faster load times.

### Tree shaking

When Parcel can determine which exports of a dynamically imported module you use, it will tree shake the unused exports from that module. This works with static property accesses or destructuring, with either await or Promise .then syntax.

### Shared bundles
When multiple parts of your application depend on the same common modules, they are automatically deduplicated into a separate bundle. This allows commonly used dependencies to be loaded in parallel with your application code and cached separately by the browser.

For example, if your application has multiple pages with `<script>` tags that depend on the same common modules, those modules will be split out into a "shared bundle”. This way, if a user navigates from one page to another, they only need to download the new code for that page, and not the common dependencies between the pages.

home.html:

```
    <!doctype html>
    <div id="app"></div>
    <script type="module" src="home.js"></script>
```
home.js:

```
import { createRoot } from 'react-dom';

createRoot(app).render(<h1>Home</h1>, app);
```

profile.html:

```
<!doctype html>
<div id="app"></div>
<script type="module" src="profile.js"></script>
```

profile.js:

```
import { createRoot } from 'react-dom';
createRoot(app).render(<h1>Profile</h1>, app);

```
Compiled HTML:

home.html:
```
<!doctype html>
<div id="app"></div>
<script type="module" src="react-dom.23f6d9.js"></script>
<script type="module" src="home.fac9ed.js"></script>
profile.html:
<!doctype html>
<div id="app"></div>
<script type="module" src="react-dom.23f6d9.js"></script>
<script type="module" src="profile.9fc67e.js"></script>
```
In the above example, both home.js and profile.js depend on react-dom, so it is split out into a separate bundle and loaded in parallel by adding an extra `<script>` tag to both HTML pages.

This also works between different sections of an app that have been code split with dynamic import(). Common dependencies shared between two dynamic imports will be split out and loaded in parallel with the dynamically imported modules.



## Image

Parcel has built in support for resizing, converting, and optimizing images. Images can be referenced from HTML, CSS, JavaScript, or any other file type.

### Resizing and converting images
Parcel includes an image transformer out of the box, which allows you to resize images, convert them to a different format, or adjust the quality to reduce file size. This can be done using query parameters when referencing the image, or using a configuration file.

The image transformer relies on the Sharp image transformation library, which will be automatically installed as a dev dependency into your project when needed.

The query parameters you can use are:

- `width` – The width to resize the image to
- `height` – The height to resize the image to
- `quality` – The image quality percentage you want, for example ?quality=75
- `as` – File format to convert the image to, for example: ?as=webp