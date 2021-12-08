# ioasys Books

An app built with React Native. It shows a list of Books that you can check it's
details with searching and filtring features.

## Installing

To install code dependencies run the commands bellow:

> This app was made using [Yarn - Package Manager](https://yarnpkg.com/)

```shell
$ yarn install
```

This commands will lock after `/.package.json` dependencies and will install then.

## Developing

To run the app you will need to open two terminals, in one you
should run:

```shell
$ yarn start 
```

and in another terminal run:

```shell
$ yarn android
```

The first command runs the metro bundler, it creates a server 
with the bundle to React Native application.

And the other runs the application on the emulator or on device.

### Building

Here are two commands to build the app, it can be executed in development or production mode:

```shell
$ yarn build:android:debug
$ yarn build:android:prod
```

The first command build the app in development mode and the second build for production, it will be placed inside `./android/app/build/outputs/apk/<debug or release>`.

## Testing

To execute unit tests, run the command:

```shell
$ yarn test
```

And for coverage run:

```shell
$ yarn test:c
```

`yarn test` will watch for changes on the code and execute  `jest` unit tests, it will look for files named with `**.spec.tsx`

`yarn test:c` will test all application and create a `/coverage` directory with all of the unit tests status.

## Libraries

Here are the list of libraries used to build this application:
* @react-native-async-storage/async-storage: For store user access-token.
* @react-navigation: Used for routing the app and for auth flow.
* axios: Used to execute `ajax` API calls.
* formik: Used to build login form, it helps on validation and to keep code more clean.
* lodash: A lib with some awesome functions.
* react-native-elements: Used to create some layouts of the app.
* react-native-modal: An abstraction of `react-native` Modal with some animations 
* react-native-toast-message: A lib to show Toast Message for error handling. 
* react-native-vector-icons: Used to show icons.
* styled-components: Used to create components using "css like".
* yup: Used on login validation.


