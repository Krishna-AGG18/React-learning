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

# Configure redux for project
Sure! Here's your dictated setup, neatly organized into bullet points for easy storage and quick reference:

---

### 🧭 Redux Toolkit Setup Steps (React + Vite)

* ✅ Create a folder named `store` inside the `src` directory.

* 📄 Inside `store`, create a file named `store.js`.

* 🛠️ In `store.js`:

  * Import `configureStore` from `@reduxjs/toolkit`.
  * Create a store using `configureStore()`.
  * Provide the reducer(s) inside the store configuration.
  * Export the store as the default export.

* 📁 Create a service (feature) file where you will define a slice — this is your Redux "module".

* 🧩 Import `createSlice` from `@reduxjs/toolkit`.

* 🧱 Use `createSlice()` to define:

  * A **name** for the slice.
  * An **initial state**.
  * A set of **reducers** — these are functions that functionally change the state.

    * Reducers receive `state` and `action`, and return the updated state.
    * They describe how the state changes in response to actions.

* 📤 Export:

  * The **actions** generated from the slice (`slice.actions`).
  * The **reducer** (`slice.reducer`) as the default export from the file.

Also done some conditional rendering part for checking if user is in login or logout state.
Created components folder and 2 more sub folder in it , set up some code in app.jsx...

# Production grade react components...
Suppose of a login form.
There are two ways to work with it either on submit send the details stored in states directly to a function Or
a component based approach where input field is a seperate component .... --> will be using this approach in this phase..

got to know many things and two things are :
1) useNavigate : same as <Link> to redirect on click
2) forwardref : useful jaha same input field is being reused for name, pass, email  and we need state's ref at the form then we use this hook...