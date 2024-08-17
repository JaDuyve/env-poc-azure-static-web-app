# azure-static-web-app-poc-env

## Using environment variables static web app

These values are only available for static web app api - [Source](https://learn.microsoft.com/en-us/azure/static-web-apps/application-settings)

### How to configure environment specific settings for react app

* Create different builds of the react application for every environment and add the environment specific settings at the build stage of the application.
* Run react application inside container and add script which reads environment specific settings and makes the available like other build files of the application.
