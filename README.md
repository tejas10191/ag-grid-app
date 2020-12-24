# Notes for Support
In our application, when we navigate away from grid, we want to persist the grid's Column state so that, it can be used later for creating the grid as it was earlier.

For achieving that, we were using getColumnState to get state and save it for future use.
After upgrading to 24.1, state returned is always empty. 
I also tested this same app using 23.2, it works without any issue. 

Steps to produce issue

1. npm install (depending on the branch there may be a different ag-Grid version)
2. npm run start
3. Click on Dashboard button to load the Grid
4. Click on Snapshot button
5. It will trigger ngOnDestroy method in Dashboard component
5. Check columnState in ngOnDestroy method in Dashboard component

#ag-grid 24.1 version returns empty column state whereas 23.2 version was returning the existing grid column state.

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
