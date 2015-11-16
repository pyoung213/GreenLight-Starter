Green Light Starter (WIP)
========

Create an Angular Material app starter.

## Running greenLight-starter

### Get the repo
$ git clone https://github.com/pyoung213/greenLight-starter
$ cd greenLight-starter

###Install dependencies

$ npm install -g gulp karma-cli protractor
$ npm install
$ brew install mongodb
$ ./node_modules/.bin/webdriver-manager update

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
                /constants
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
            /languages

### app
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

## License

MIT
