# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[CI/CD pipelines using React, GitHub Actions, and Heroku](https://blog.logrocket.com/ci-cd-pipelines-react-github-actions-heroku/)

[Code Owners File](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
## Create App

```
npx create-react-app react-app --use-npm
CI=true npm test
CI=true npm test -- --coverage
```

## Setup main Repository

```
rm -rf .git
git config --global init.defaultBranch main
git init
git branch --show-current
git checkout -b develop
git checkout -b main
git add .
git commit -m "init commit"
git remote add origin https://github.com/dliulabs-hq/lab19-react-app.git
git push -u origin main
```

## Setup Heroku main Branch

```
heroku git:remote -a greactapp
git push --set-upstream heroku main
```

## Setup develop Branch

```
git checkout -b develop                                                 
git add .
git commit -m "setup develop branch"
git remote add origin https://github.com/dliulabs-hq/lab19-react-app.git
git push origin develop
```

## Test a feature Branch

```
git checkout -b feature/f-001
git commit -am "setup feature f-001"
git push origin feature/f-001
```

## Push to main Branch for Production

```
git checkout -b develop
git pull origin develop
git checkout -b main
git merge develop
git push origin main
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) 


## Setup

* initial setup

```
rimraf .git
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/dliulabs-hq/lab20-react-app.git
git push -u origin main
```

* Test branch protection rules

```
git add .
git commit -m "add CODEOWNERS"
git push -u origin main
```

* Updade local branches

```
git fetch
git checkout -b feature/workflows
```

* checking feature changes

```
git commit -am "add feature codes"
git push --set-upstream origin feature/workflows
```
