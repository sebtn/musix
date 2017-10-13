## Music App - SPOT
This app uses the Spotify API to browse the local library  and it's capable to search your favorite artists and music.

### How to install and run the app:

You can use it locally, just make sure ```git```, ```node``` and ```npm``` are installed in your local machine. Inside terminal:
+ Clone the repo typing: ```git clone https://github.com/sebtn/musix.git```
+ Type ```npm install```
+ Type ```npm start```
+ Type ```./node_modules/.bin/webpack -w```
+ Open ```localhost:3000``` and begin browsing your favorite music.

For some help visit: 
+ https://nodejs.org/en/download/package-manager/
+ https://www.npmjs.com/get-npm
+ https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

### Some notes
The build process is automated and bundle files for development and production. ```bundle.js```, ```bundle,js.map```, ```bundle.js.gz``` will be generated inside the public folder once webpack has run and bundled all files inside the main application folder.
Deployment is on heroku using the compress version ```(.gz)``` of the bundle file "compiled" by the postinstall script specified in ```package.json``` file. 

### Or
Use the app live version at -> https://aqueous-brook-79722.herokuapp.com/

### Tools
>+ Uses webpack and express to serve devEnv
>+ Node js and react for UI designing
>+ Bootstrapped for components styling 
>+ Redux style
>+ Karma installed and optimized for fast unit testing  

`` Author = () => { Sebtn } ``