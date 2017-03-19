# Home Sweet Home 
Sample project for Ionic2 study

## Prerequisites
It's Ionic2 project. so you need to know how to serve and release Ionic2 project. 
Install Ionic CLI and Cordova 

```
npm install ionic -g ionic cordova
```

## Getting Started

Download this project's source file or clone the repository. 
```
git clone git@github.com:cowboy0626/HomeSweetHome.git
```

Then create your project, change directory and run your project 
--v means build with Angular2
```
ionic start yourProjectName --v
cd yourProjectName
ionic serve
``` 

## Deployment (Example for Android)

### Install Java SDK and Android SDK 
- Visit this site and install Java SDK : http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
- Visit this site and install Android Stuido : https://developer.android.com/studio)
- Launch Android Studio > Configure > SDK Manager > Android SDK > Edit > Check Android SDK and Click 'Next' Button (It will take long long time)
- You need to set PATH (http://blog.saltfactory.net/start-ionic-edge-book/)
### Install Template Tools
It should have been released normally After installing Android SDK, but you will meet the message "Could not find gradle ..." 
It's kind of bug 
* Android Path must be set before all things below.
* Download the latest command line tools (https://developer.android.com/studio/index.html -> very bottom part)
* Unzip -> copy and paste "tools > templates" folder to your android sdk folder (/Libraries/Android/sdk/tools/)
(press option key to see Libraries folder in your Finder)
### Release 
```
ionic build android
```

## Author
* **Muhyun Kim**

## License 
This project is licensed under the MIT License
