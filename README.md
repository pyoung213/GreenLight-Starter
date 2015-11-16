Green Light Starter (WIP)
========

Create an Angular Material app starter.

## Running greenLight-starter

### Get the repo
  - $ git clone https://github.com/pyoung213/greenLight-starter
  - $ cd greenLight-starter

###Install dependencies

  - $ npm install -g gulp karma-cli protractor
  - $ npm install
  - $ brew install mongodb
  - $ ./node_modules/.bin/webdriver-manager update

### Linting
 - Run code analysis using `gulp vet`. This runs jshint, jscs.

### Tests
 - Run all tests using `gulp test` (via karma, mocha, sinon).

### e2e
  - Run e2e tests using `gulp e2e`
  - Build first before running e2e `gulp e2e-build`

### web unit tests
  - Run web unit tests using `gulp web:test`
  - Run web unit tests auto restart using `gulp web:test-auto`

### Running in dev mode
 - Run the project with `gulp serve-dev`

 - opens it in a browser and updates the browser with any files changes.

### Building the project
 - Build the optimized project using `gulp build`
 - This create the optimized code for production and puts it in the build folder

### Running the optimized code
 - Run the optimize project from the build folder with `gulp serve-build`

## Structure
High level structure of the app.

	/src
        /mobile
        /server
		/web
			/app
                /api
                /components
                /core
                /decorators
                /modals
                /pages
                /services
                /startup
            /assets
                /images
                /styles
                /svg_icons
            /config
            /languages

### app Module
The app has 3 feature modules.

```
app --> [
        app.startup --> [
            'app.core'
        ],
        app.core --> [
            'ui.router',
            'pascalprecht.translate',
            'ngMaterial',
            'ngMessages',
            '*Any 3rd party modules go here*'
        ]
        app.web --> [
            'app.core'
        ]
    ]
```

#### startup Module
Startup modules are used in the config and run of the app.  These are separated out for tests so that you don't have to mock out translate and other services every time.

#### core Modules
Core modules are reusable blocks of code that can be used across projects simply by including them as dependencies.

#### web Modules
Web modules are components and services that are used for the web client.

### Web Folder Structure

#### api
All api services go here.  All services should be basic Restangular calls with no logic.  Abstracting this layer makes it easier to mock out these calls in the services.

#### components
Components are directives that have an html template associated with it.  Every component will have 4 files inside.

    /components
        /myComponent
            myComponent.directive.js
            myComponent.directive.spec.js
            myComponent.html
            myComponent.scss

#### core
Core folder contains services that are shared throughout the entire application.  Currently this is shared between startup and web but could be expanded to an admin app.

#### decorators
Decorators are directives that do not have an html template associated with it.  They are primarily used for enhancing the html.

#### modals
Modals are any popup modal in the app.

#### pages
Pages contains the views of the app. Pages are nested depending on their ui-router state.  For example if you wanted a page that contained the main header you would structure like so:

    /pages
        /main
            /myExampleView

#### services
Services contain all business logic between the controllers and the api.  This is usually where error logging is implemented.

#### startup
Startup contains the config and run blocks for the Angular app.

## License

MIT
