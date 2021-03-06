[![Build Status](https://travis-ci.com/tribeless/savannah-test.svg?branch=master)](https://travis-ci.com/tribeless/savannah-test)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# GitHub Issue Tracker

A react application that consumes github's v4 graphql api and is able to track issues in a repository, add issues to a repository, close OPEN issues and add comments to issues. The app is also able to filter issues according to their status, that is either CLOSED or OPEN. You are also able to search for issues by their status or title.

### `Public Link`

Link to live app [click here](https://github-issues-tracker.netlify.app/)
### `Resources(Adobe XD Design Files and Link)`

[Adobe Xd](https://drive.google.com/drive/folders/1W4kBuzqXQ8mxuUv2JxLUzuokl2zfJI--?usp=sharing)
### `CI/CD`

Uses travis-ci to run tests
## `FrontEnd Documentation and File Structure`

Uses [React Framework](https://reactjs.org/)\
Uses [Redux State Management Library](https://redux.js.org/)\
Uses [Material-Ui](https://material-ui.com/) Design System\
Uses [graphql-request](https://www.npmjs.com/package/graphql-request) to make http requests to githubs graphql endpoint\
### `File Structure`
Application code is found in src folder\
The src/redux contains redux code and its unit tests\
The src/components contains all reusable components\
The src/containers contains all components using redux\
The src/graphql contains all graphql mutations and queries\
The src/utils contains reusable functionalities\
The src/apollo contains configurations for working with apollo\
The src/__tests__ contains the integration tests\
### `Testing`
Uses React Testing Library To write tests.\
Uses travis-ci to run build and deploy app on master branch to netlify.

### `Api's Used`
Consumes GitHub's v4 Graphql Api
