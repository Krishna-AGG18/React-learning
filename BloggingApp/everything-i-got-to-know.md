### BLOG APP
we will be using AppWrite for backend services, user authentication and authorisation etc services because appwrite is open source "Backend as a Service".

### What i learned from video - 2 : setting up env and appwrite in react project...
firstly, we installed all the necessary dependency that we will be using in our app, all dependencies visible in package.json file.

Got to know about environment variables : basically to hide sensitive data out of the code, since react is frontend everything in form of JS will be shipped to browser hence visible (like our id,pass , db_id, pass_db etc things may be api key's and all). These are not pushed on github (stored in .env file) and a ".env.sample" file is made to keep record or track of variables that we are gonna use.

for each type of create project like from vite, create react app etc. storage process for variables is different and accessing is also different.

Usually .env file is loaded once for a project or refreshes when changes are made to it or something is added, and each time we need to restart our project.

 # for "create react app" :
 vars name should start with "REACT_APP_", ACCESSED using "process.env.REACT_APP_<name of the var>.

 # for vite : 
To prevent accidentally leaking env variables to the client, only variables prefixed with VITE_ are exposed to your Vite-processed code. e.g. for the following env variables:
VITE_SOME_KEY=123
DB_PASSWORD=foobar

Only VITE_SOME_KEY will be exposed as import.meta.env.VITE_SOME_KEY to your client source code, but DB_PASSWORD will not.
console.log(import.meta.env.VITE_SOME_KEY) // "123"
console.log(import.meta.env.DB_PASSWORD) // undefined

for production grade apps and to avoid error create a folder "conf" in src and a conf.js file in it, in that file 
create a object which stores all the id, key's as an object and then export them.

### What i learned from video - 3 : Build authentication service with appwrite...
Appwrite gives multiple services and sometime there arises a problem of "Vendor LockIn" (if there is a need to move our authentication out of appwrite still our App works continously) hence a "Services" comes in play (nothing but a class that exports method and do some work)

# Authentication :
Email and password login is the most commonly used authentication method. Appwrite Authentication promotes a safer internet by providing secure APIs and promoting better password choices to end users. Appwrite supports added security features like blocking personal info in passwords, password dictionary, and password history to help users choose good passwords.

You can use the Appwrite Client SDKs to create an account using email and password.

full source : "https://appwrite.io/docs/products/auth/email-password"

Creating a folder named "appwrite" 
In that folder create a "auth.js" file (dont directly use the template provided in doc as it is because then we need to expose it at the time of registration also , since we need a quality code ue the method followed in code of it)
---- in depth reason on authentication.md file...

### Writing database /collection - video 4 
created a file "config.js" to create / delete/update, getOne, getall posts and also learned to code for querying the db on appwrite following it's documentation.
You're applying the Service Layer Pattern:

All backend logic stays here

UI components only call service methods, not Appwrite directly

This makes code easier to test, maintain, and debug