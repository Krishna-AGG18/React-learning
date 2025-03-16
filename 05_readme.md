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
 



