STEP 1 : GIT

Intstall github in your system
Create a github repository in https://github.com.

Connect our system to github.
>git config --global user.email "you@example.com"
>git config --global user.name "skjena-wd"

To configure the remote repository from the github.com with our local project, we have to make our project as a local repository.

>git init	//Command in local project VS Code terminal to create a repository for our project.
>git branch -M main	//create a main branch as main
>git add .	//Add all the files to be added into the branch b4 pushing all the codes to the remote
>git commit -m "episode-01"
>git remote add origin https://github.com/skjena-wd/namaste-react.git  //Adding Remote, to set up our local to the remote git repo
>git push origin main	//it will ask u to sign in if it is not done earlier. 

==============================================================================================================
//1. writing html using JavaScript
<div id="root"></div>
<script>
    const heading = document.createElement("h1");
    heading.innerHTML="Hello World from JavaScript";

    const root = document.getElementById("root");
    root.appendChild(heading);
</script>

//2.  
--index.html
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>    
    <link rel="stylesheet" href="style.css">
    <div id="root"></div>    
    <script src="app.js"></script>

--app.js
    const parent = React.createElement(
        "div", 
        {id:"parent"}, 
        React.createElement(
            "div", 
            {id:"child"}, [
                React.createElement("h1", {}, "I am H1 tag"),
                React.createElement("h2", {}, "I am H2 tag")
        ])
    );

    const heading = React.createElement(
        "h1", 
        {id:"heading"}, 
        "Hello World from React!"
    );  //Create heading object

    console.log(heading);
    const root = ReactDOM.createRoot(document.getElementById("root"));  //create Root inside React for our project
    root.render(parent);   //injecting heading object into the root, render method is taking the object and push into root

--style.css
#heading {  color: red; }    

=================================================================================================================
STEP 2:  NPM
>npm init	//Configure your project with the packages and other requirements. It will ask u following things
	--package name : (namaste-react)
	--version: (1.0.0)
	--description:  This is Namaste React by skjena-wd
	--entry point: (app.js)
	--test command: jest
	--git repository: (https://github.com/skjena-wd/namaste-react)
	--keyworkds: 
	--author: SKJena
	--license: (ISC)
//It will create a file package.json.  This package.json is configuration file for our project.  Packages are also called dependencies.  NPM takes care of the dependencies and the versions.  We can add packages or dependencies to our project.

Our whole code needs to be cleaned, minified, bundled before to be used in production.  So, we use bundler for doing these activities.  
Bundlers : webpack, parcel, vite are bundler packages.
===================================================================================================================

STEP 3: Parcel
>npm install parcel -D parcel       //Install parcel bundler as dev dependency (-D stands for Dev dependencies)

dev dependencies : we require dependencies which is only used while developing the project
normal dependencies

^ vs ~ : ^ updates the package to the latest minor versions, but ~ will update the pkg to the major versions.
===================================================================================================================

--package-lock.json : package.json is the config file of project which tracks all versions of ur package.  package-lock.json keeps the track of exact version that is being installed.
--node-modules - Collection of dependencies.  It fetches all the codes and files of all the dependencies into our system so that we can use them.  When we install parcel Bundler, it installs the parcel as well as all other dependencies required for the parcel.  Parcel uses babel.  This folder need not go into the github.  
--.gitignore : Contains all the files, which need not to be tracked and pushed into github.  nodue_modules folder should not go to the github as it is very large can be recreated.  The best practice is to ignore by writing it (/node_modules) in .gitignore.  
--package.json and package-lock.json both the files need to be in the github bcoz it has all the information and log of the versions and exact versions of the dependencies.  So, it is very crucial to have package-lock.json.  
--If we have package and package-lock.json, we can regenerate the node_modules by (>npm install).

npx - executing our package.

>npx parcel index.html   //executing parcel bundler.  parcel goes to the source index.html and build a development build for our app and host that development build to https://localhost:1234

--cdn links are not the proper way to include react to our project bcoz if we have react in our node_modules then we do not need to make a network call to get react. When upagrade react available, then we may need to change cdn url, but having it as a package is easier to manage the versions.

>npm install react          //Install React for the project.
>npm install react-dom      //Install react-dom for project.

-- <script type="module" src="./app.js"></script>  If in the app.js file, we imported many libraries, then we have to use the link as type="module".  Otherwise, server will treat it as a browser run JavaScript file and it cannot execute the package properly.  Once type='module' attribute is added, it will act like a module and will function normally.

--when we save any changes in any file, parcel will update it into the server and browser.  automatically refreshing the page once any changes done using HMR.  Parcel does HMR by using File Watching Algorithm - written in C++.

# Parcel 
- Dev build
- Local Server 
- HMR - Hot Module Replacement.
- File Watching Algorithm - written in C++.
- Caching - Faster Builds 
- Image Optimization
- Minification 
- Bundling
- Compressing 
- Consistent Hashing 
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - Remove unused code for you
- Different dev and prod bundles 

>npx parcel build index.html   //to create a production build.  it will give error bcoz it has conflict, in app.js "main" : "app.js", app.js is the entry point, but here we have written index.html.  So, we have to remove main:app.js.  parcel will build automatically.

--browserslist is a package which needs configuration.  It will make your app support for the older version browsers.
>npx install browserslist

--If you want to start a project or run a project with ur custom command, then we can add that in package.json like below.  Here, "start" is used to run our project and "build" is used for running Production Build for our project.
"scripts": {
    "start": "parcel reactcdn.html",
    "build": "parcel build reactcdn.html",
    "test": "jest"
},
>npm run start or >npm start   //it will run the start command
>npm run build      //it will run the build command

--If u go to company and you have to start your project and work, then u can simply check package.json and find for the scripts.  From there, u can easily get the script to run the project.

