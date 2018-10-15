# React Native Boilerplate

This is react native boilerplate for project use

## Features

* [React Navigation](https://reactnavigation.org/)
* [Moment](https://momentjs.com/)
* [Native Base](https://nativebase.io/)
* [Redux & React Redux](https://github.com/reduxjs/react-redux)
* [React Native Maps](https://github.com/react-community/react-native-maps)
* [React Native Firebase](https://rnfirebase.io)
* [React Native Push Notifications](https://github.com/zo0r/react-native-push-notification)
* [React Native Splash Screen](https://github.com/crazycodeboy/react-native-splash-screen)
* [React Native Facebook Login](https://github.com/magus/react-native-facebook-login)
* [React Native Google Signin](https://github.com/joonhocho/react-native-google-sign-in)
* [React Native Image Picker](https://github.com/react-community/react-native-image-picker)
* [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
* [React Native Modalbox](https://github.com/maxs15/react-native-modalbox)
* [React Native Snap Carousel](https://github.com/archriss/react-native-snap-carousel)
* [React Native Datepicker](https://github.com/xgfe/react-native-datepicker)
* [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
* Structured folders and functions

For usage of each features, please visit their documentation by clicking the link above

## Getting Started

1. Clone this repository to your folder using git clone https://github.com/christflvy/boilerplate.git
2. Edit the folder name into your new project name
3. Delete .git folder [rm -rf .git] and init your new repository
4. Use [react-native-rename](https://github.com/junedomingo/react-native-rename) to rename your new app
5. Npm install and Pod install inside your ios folder
6. Run your project as usual


## Notes

### React Native Maps

Get your API key for react native maps and place it at :

#### Android
```
* AndroidManifest.xml (com.google.android.geo.API_KEY) for android (placed at android/app/src)
```

#### iOS
```
* AppDelegate.m line 25 (GMSServices) for iOS (placed at ios/PROJECT_NAME)
```

### React Native Firebase

Configure your firebase and get :

#### Android
```
* google-services.json for android and replace the old one (placed at android/app)
```

#### iOS
```
* GoogleService-Info.plist for iOS and replace the old one (placed at ios/PROJECT_NAME)
* Uncomment line 23 at ios/PROJECT_NAME/AppDelegate.m ([FIRApp configure];) to start using firebase
```

### React Native Facebook Login

#### Android
```
* Get your Key hash & App ID from [here](https://developers.facebook.com/quickstarts/?platform=android)
* Place your App ID and your App name at android/app/src/main/res/values/strings.xml
```

#### iOS
```
* Get your App ID from [here](https://developers.facebook.com/quickstarts/?platform=ios)
* Replace <string>fb1234567890</string> with your <string>fbApp_ID</string> at ios/PROJECT_NAME/Info.plist
* Replace the FacebookAppID key's string with your App ID at ios/PROJECT_NAME/Info.plist
* Replace the FacebookDisplayName key's string with your App name at ios/PROJECT_NAME/Info.plist
```

### React Native Google Sign in

Configure your firebase and get :

#### Android
```
* google-services.json for android and replace the old one (placed at android/app)
```

#### iOS
```
* GoogleService-Info.plist for iOS and replace the old one (placed at ios/PROJECT_NAME)
* Replace the <string>REVERSED_CLIENT_ID</string> with <string>your REVERSED_CLIENT_ID found at GoogleService-Info.plist</string> at ios/PROJECT_NAME/Info.plist
* Replace the <string>BUNDLE_ID</string> with <string>your BUNDLE_ID found at GoogleService-Info.plist</string> at ios/PROJECT_NAME/Info.plist
```
