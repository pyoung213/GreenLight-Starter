Green Light Starter
========

Technologies Used

* Angular.js
* Angular Material
* ui-router
* gulp for building css/js using [the concat method](https://medium.com/@dickeyxxx/best-practices-for-building-angular-js-apps-266c1a4a6917)
* minified assets with aggressive cache-compatible cdn filenames (rev)
* uses angular templatecache to preload templates
* bower for external css/js assets
* eslint for linting JS style
* Sass for writing CSS
* static asset node server w/ gzip
* mocha/chai for testing
* karma unit testing w/ PhantomJS
* Protractor end-to-end testing with Firefox and Chrome

Running Locally
===============

Get the repo

    $ git clone https://github.com/pyoung213/greenLight-starter
    $ cd greenLight-starter

Install dependencies

    $ npm install -g gulp karma-cli protractor
    $ npm install
    $ brew install mongodb
    $ ./node_modules/.bin/webdriver-manager update

Get AWS Credentials

    Get a credentials file.
    Once you have the file, place it in ~/.aws/
    Make sure the file is named "credentials".  No extension.
    Full path should be ~/.aws/credentials

Run the test suite

    $ npm test

Alternatively run just one of the test components

    $ gulp testWeb
    $ gulp testServer
    $ gulp testEndToEnd
