### NPM
NPM does not have a full form. NPM manages packages. It just manages node packages. It is a standard repository for packages.

Package.json is a configuration for NPM. Sometimes these packages are also called dependencies


### Bundler
Our whole code needs to be packages, cached, compressed together. Webpack, parcel are types of bundlers used to push it to production. React app uses webpack behind the scenes to package our application.


### Dependency
There are 2 types of dev dependencies
1. dev dependency: It is generally required during development phase.


### ^ and ~ in package.json

The tilde (~) is used to specify a “compatible with” version range. This means that you’re willing to accept any version of the package that is compatible with the version you specify.

Here’s an example:

    ```
    {
    "dependencies": {
        "lodash": "~4.17.20"
    }
    }
    ```

In this case, we’re saying that we want to use version 4.17.20 of the lodash package, and we're willing to accept any version greater than or equal to 4.17.20 and less than 4.18.0. This allows us to receive patches and bug fixes, but not minor or major version changes.

The caret (^) is used to specify a “compatible with most recent” version range. This means that you’re willing to accept any version of the package that is compatible with the version you specify, as long as it doesn’t break compatibility with the major version.

Here’s an example:
```
{
  "dependencies": {
    "lodash": "^4.17.20"
  }
}
```

In this case, we’re saying that we want to use version 4.17.20 of the lodash package, and we're willing to accept any version greater than or equal to 4.17.20 and less than 5.0.0. This allows us to receive patches, bug fixes, and minor version changes, but not major version changes.

### Package-lock.json
package-lock.json keeps track of exact version of the package

### Transitive dependencies
Our project has parcel as a dependency but it also needs help of other packages known as transitive dependency



### npx parcel index.html
- Server running at http://localhost:1234
✨ Built in 771ms

Parcel is hosting our app on a server

#### NPX
npx means executing a package. index.html is the source. So, parcel goes to our source and build our app and host the development build on localhost:1234

## Parcel

1. Creates a build
2. Created local server and hosts the development build
3. It automatically refreshes the content. It is called HMR ==> HOT MODULE REPLACEMENT
    - Parcel uses file watching algorithm which is written in C++. It keeps track of any changes in the application 
4. Every time a change is done parcel builds it and caches the things for us. IT gives us faster builds, due to caching. IT keeps the cache in `.parcel-cache`. .parcel-cache is created when we run command npx parcel index.html
5. It also does image optimization.
6. In production mode it will do minification and compression of files and bundle them 
7. Parcel uses consistent hashing
8. It also do code splitting
9. It also does differential bundling => when our app will be hosted, it can be opened inside any browser of any version.
    Parcel takes care of all this to support all the browser or older browsers
10. Good error handling and suggestions
11. Diagnostics
12. Parcel also gives a way to host our app on https
13. Tree shaking => in our code we have only 4-5 functions, then it will tree shake our files i.e it will remove unused code for us

Building a large scale application which can be fast is not only because of react but also because of bundlers such as parcel or webpack

## Dist
dist is the compressed code from the dist

### Browserslist
It ia an NPM package. IT needs some configuration to add list of browsers list be supported on the browsers for our application