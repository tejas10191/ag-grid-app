# Notes for Support

Steps to produce issue
1. npm install (once only)
2. npm run e2e
3. Only one e2e test will run in app.e2e-spec.ts
4. Test will do the following:
    a. Check that a cell is present on the page (elementFinder.isPresent())
    b. Open the Enterprise Column Menu
    c. Check that the same cell is present on the page (elementFinder.isPresent())
5. Result: First check works, but after opening Column Menu and checking again, method call to check if a the element is present hangs.

I print out some logs to try and debug:

1.1 - Checking if we can find a cell
1.2 - Is cell present: true
1.3 - Check complete
2.1 - Opening filter menu
[15:16:11] W/element - more than one element found for locator By(css selector, .ag-cell-label-container) - the first result will be used
[15:16:11] W/element - more than one element found for locator By(css selector, .ag-icon-menu) - the first result will be used
2.2 - Opening filter menu complete
3.1 - Checking if we can find same cell from 1.1

I expected logs 3.2 and 3.3 to print out

Notes:
1. This issue also occurs when right clicking a cell to open ag-Grid's Context Menu (not set up in this sample project)
2. This issue does NOT occur with the Community Column Filter

# Everthing below is default README

# AgGridApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
