# Ionic + VideoSDK

This is an Ionic Capacitor + Angular project generated with the [Ionic CLI](https://ionicframework.com/docs/cli) version 6.

# Project Structure

## Run & Install

### Installation

This project requires NodeJS in version above 14.15.0 or 16.10.0.

```shell
npm install -g @ionic/cli
npm install
```

### Environment variables setup

In the `src/environments` set up your variables:

```ts
  production: false,
  VIDEOSDK_API_KEY: '' /* Your videoSDK api key */,
```

### Running the project

#### Development server

Run `ionic serve` for a dev server. Navigate to `http://localhost:8100/`. The application will automatically reload if you change any of the source files.

```shell
ionic serve
    or
npm start
```

#### Android or IOS

To sync the web folder with android and ios:

```shell
npm build
npm run sync:android
npm run sync:ios
```

To build android and ios:

```shell
npm run build:android
npm run build:ios
```

To run android and ios:

```shell
npm run run:android
npm run run:ios
```

To open android or ios folder:

```shell
npm run open:android
npm run open:ios
```

## Code scaffolding

Run `ionic generate component component-name` to generate a new component. You can also use `ionic generate page|directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ionic build` to build the web project. The build artifacts will be stored in the `www/` directory.

To use the prod environment variables add the `--prod` flag to your command.

```shell
ionic build --prod
```

### Build android and ios

The build artifacts will be stored in either `android/` or `ios/` directory depending on the plateform chosen (ios or android).

```shell
ionic capacitor sync <plateform>
ionic capacitor build <plateform>
    or
ionic capacitor build <plateform> --prod
```

### Run android and ios

```shell
ionic capacitor run <plateform>
```

## Further help

To get more help on the Ionic CLI use `ionic help` or go check out the [Ionic CLI Overview and Command Reference](https://ionicframework.com/docs/cli) page.
