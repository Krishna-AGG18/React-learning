# Virtual DOM, Fibre and reconciliation
---
### article link :- github.com/acdlite/react-fibre-architecture
Behind the seen how ReactDOM.createRoot method works in react we are gonna see that.
- what it does bts is it creates a virtual dom(a tree of objects).

### virtual Dom
The Virtual DOM (VDOM) is a lightweight copy of the actual DOM (Document Object Model) used in JavaScript frameworks like React to improve performance.

How it Works
* Render → React creates a virtual representation of the UI.
* Diffing → When changes occur, React compares the new VDOM with the previous one (using a process called reconciliation).
* Updating → React updates only the changed parts of the real DOM, reducing re-renders and improving performance.

---
# Props , with Tailwind
---       
Props --> (External data passed to a component)
          cannot be changed by the component receiving it.
          Passed from a parent to a child component.
          when a new prop is received, triggers re-render.

          make the components reusable, JO CARD tumne banaya ha uska component banallo taaki baar baar use kia ja sake.
          So, that Whenever i pass values to the components , on the basis of that the card changes.
          eg-> 03_tailwind-props

<Card title="happy Holi" newObj={myObj}/>  
is example me hamne myObj object ko newObj to assign krke bheja ha using {} 
-> Because JSX treats newObj=myObj as a plain string instead of evaluating the variable.
-> when you pass JavaScript variables, objects, arrays, or functions, you need {}.
since, expression ha ye ek and expressions to be provided in {}.
 
### Tailwind

- If u want to add class in a tag in JSX className is used , className = " py-8"
- onClick excepts a function as para meter so use onclick = {()=> {setState()}} to change state from a button
- to add styles in JSX use style = {{color: red}} form  ---> basically kind of inline css

### useCallback hook
- when with each diff action same function has to be called we use useCallback hook.
- useCallback is a React Hook that lets you cache a function definition between re-renders.
- const cachedFn = useCallback(fn, dependencies)
- Usage
    -- Skipping re-rendering of components
    -- Updating state from a memoized callback
    -- Preventing an Effect from firing too often
    -- Optimizing a custom Hook

Parameters 
fn: The function value that you want to cache. It can take any arguments and return any values. React will return (not call!) your function back to you during the initial render. On next renders, React will give you the same function again if the dependencies have not changed since the last render. Otherwise, it will give you the function that you have passed during the current render, and store it in case it can be reused later. React will not call your function. The function is returned to you so you can decide when and whether to call it.

dependencies: The list of all reactive values referenced inside of the fn code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3]. React will compare each dependency with its previous value using the Object.is comparison algorithm.

Returns 
On the initial render, useCallback returns the fn function you have passed.
During subsequent renders, it will either return an already stored fn  function from the last render (if the dependencies haven’t changed), or return the fn function you have passed during this render.

### useEffect hook
The useEffect hook runs side effects in functional components. It executes code automatically when the component renders or when dependencies change.

Syntax--->>>>
useEffect(() => {
  // Code to run
}, [dependencies]); 

    Runs every time the component renders.
    Runs only on the initial render.
    Runs when dependencies is updated.

### useref hook
when we want a reference of something we use this hook.
The useRef hook is used to persist values without causing re-renders. It can also be used to access DOM elements directly.

const myRef = useRef(initialValue);
myRef.current holds the value.
Changing myRef.current does not trigger a re-render.

### useId 
hook for generating unique id's that can be passed to accessiblity attributes
const ID = useID()

### React Router (crash course) - a 3rd party lib. 
- npm install react-router-dom
- with react router dom we get Link, NavLink tags.
- Link is used in place of <a> tag, coz when we use <a> tag our whole page is refreshed and in react we don't have refresh concept.
- NavLink gives some additional features like we pass classes in callback function className = {()=> ``} this helps in cases like when u move from home page --> contact page or vice versa the color of link changes on basis of what page are u in so, to identify the page we are at and change color highlights , we need to manipulate classes...
- In NavLink we have direct access to {isActive} in callback and we can use it to manipulate classes. It allows us to inject variable in className.
- eg: <NavLink
         className={({isActive}) =>
        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${isActive ? "text-orange" : "text-gray-700"}`}
      >
          Home
      </NavLink>

- what will happen is it will match from URL is Home is active or not and if active thecoloe or home changesto orange in Navbar.
- if we want to render our components, we need to create a router using createBrowserRouter method and render it using "RouterProvider" a self closing components accepts the "router" as prop. Directly we cannot use <App />.

- now we want header and footer remains same, and middle components changes for that we create a layout in which we use        <outlet />  and return <> <header /> <footer /> <outlet /> </> and then set it as element in our main object in router.

- ab jaha bhi outlet denge component change ho jyga par uske liye bhi hame pehle index file me batana hoga kki we are using a layout.

- another useful method is loader passed routers components, which calls api when user simply hovers the link and odnt visit page, we can access loader data using useLoaderData hook.

### Context Api's 
- It provides a way to create global state that can be accessed by any component without explicitly passing props down the hierarchy.
- helps in prop drilling (passing props manaually at multiple levels).
- associated purely to react
- redux :- library, helps in state management (organised way me data flow krana). We have react-redux and redux-tool-kit (rtk) a more modern and recommended way to use redux with built-in utilities.
- zustand - another lib for state management.
- useContext hook is used for the purpose.
- context 2 part me banta hai 
- 1> createcontext using "React.createContext()" then return it (it returns us a provider in which we wrap all the components hence, they have access to the all state)
- 2> create a provider using the element returned by .Provider method and also pass the data in value property of it so that the comps getting wrapped have access to that data.
- to pass or access data use "useContext" hook, and in app.jsx pass the components to be wrapped.

### REduX tool kit
---
abhi tak saara kaam functional component pe basis pr kr rhe the ham.
kuch kaam classes ke basis par hote ha (depricated now..)
don't put this on priority , learn these like classes concept and classic redux etc.

Today's redux (Rtk) is eventual upgrade of classic redux.
redux is a independent state management library.
we have react-redux to work with redux.

Flux - architecture for state management and data flow by FaceBook.
data flow ka kaam context api se bhi ache se nhi hota ha, that's why we use redux, data-flow means consistent access and pushing of data.

REDUX IS A UPGRADE OF FLUX...
# AGENDA...
CHANGES SHOULD BE MADE FUNCTIONALLY i.e, through reducers.
REDUX IS INDEPENDENT LIBRARY NOT PARTICULARLY REACT.

### PROBELM
react redux : problem is complex set-up, middleware debugs weren't easy.
react redux toolkit : batteries inlcuded (no need for 1000's setup provides direct flow) ,have more abstraction, easy store making process, built in middleware, manages reducers...

## concept 
store : single source of truth like a global container for data
reducers : changes to store are made through reducers, these are objects
useSelector : usong a value from store
use Dispatch : to dispatch value in store

### Project for redux

1) using two libraries coz to work with react we need react-redux and for proper set up we need readux-toolkit :
- npm install @reduxjs/toolkit
- npm install react-redux

2) create store using "ConfigureStore" in store.js file which has a object as a reducerss
3) create reducers : diff in toolkit called slicers in a file called "todoSlice"
                    using the function "createSlice" 
                    then create a initialstate (array or object)
                    const initialState = {
                    todo : [{id: 1,text: "hello world"}]
                    }

4) create todoSlice or a slice : usinf createSlice , add name and initialstate, reducers (accepts" property : functions reference" in form of object) into that as an object. 
we get access to state(abhi tak jo bhi data stored ha i.e, prev state of data) and action in reducers.

5) slice is exposed two times first is initial like : export const .... and individual functionality : export const {addTodo,removeTodo} = todoSlice.actions

store should have awareness about the reducers we need to register them , export default todoSlice.reducer and add reducers to the store.

6) create a form to get todos from user and useDispatch hook to add data to our store 
dispatch uses a reducers to make changes to store

7) use useSelector to get the data to be displayed on screen, it gives access to the state as a callback

8) add to app.jsx components 

9) wrap every thing under Provider