This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In order to set up the api with rails visit the [backend rails repository](https://github.com/Ejguzman3988/hobby-api).

# Hobby Tracker

Hobby Tracker is a single page application that helps you keep track of your hobbies. It allows you to view how much time you are spending on each hobby allowing you to organize the time you spend on activities.

## Installation

To get started first, fork and clone this repo. Also fork and clone [the backend rails api repo](https://github.com/Ejguzman3988/hobby-api).

And then execute:

    $ cd hobby-api
    $ bundle install

To test run **rails s** in the console

    $ rails s
    => Booting Puma
    => Rails 6.0.3.2 application starting in development
    => Run `rails server --help` for more startup options
    Puma starting in single mode...
    Version 4.3.5 (ruby 2.6.1-p33), codename: Mysterious Traveller
    Min threads: 5, max threads: 5
    Environment: development
    Listening on tcp://127.0.0.1:3001
    Listening on tcp://[::1]:3001
    Use Ctrl-C to stop

This will run your rails api backend server.

## Usage

After starting your server use the homepage at [localhost:3001](http://localhost:3001) to navigate through the webpage and view the backend API in json.

Next open a separate terminal the execute:

    $ cd hobby-client
    $ npm install
    $ npm start

This will open up the index html file and get your development environment started.

Sample video below:

[YouTube Demo](https://www.youtube.com/watch?v=yBfIPyZwJFs)

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/Ejguzman3988/hobby-client. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/Ejguzman3988/hobby-client/blob/master/CODE_OF_CONDUCT.md).

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the Bankroll Management project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/Ejguzman3988/hobby-client/blob/master/CODE_OF_CONDUCT.md).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
