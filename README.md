# React Redux Template

My React Redux template that I used over the years. (work in progress)

- React
- Redux
- Redux Thunk
- Axios (for async calls to APIs)
- React Router DOM

## Install dependencies

In the project directory, you first need to install the dependencies:

`yarn`

## Running locally the project

You can then run the project locally using :

`yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Build a docker image of the project :

```
yarn build
docker build -f Dockerfile . -t my-react-app
```

# TODO

- [ ] Adding internationalization framework
- [ ] Adding authentication (JWT ?)
- [ ] Adding unit tests
- [ ] Adding end to end tests (Selenium could be used)
