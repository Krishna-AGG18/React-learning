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
