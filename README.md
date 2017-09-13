# repro-nodemon-webpack-plugin-issue-2
repro for nodemon-webpack-plugin issue #2

`npm install`

`npm run test`

modify the `en.json` file, located in `.src/locales`

nodemon process not reload

For info `copy-webpack-plugin` is used to update `locales` folder in `dist`
