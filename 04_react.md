# hooks and project....
---
## HOOKS :- 
### special methods or functions that let you use state and lifecycle features in functional components (without needing class components). The problem with the approach commented in app.jsx of counter project is that ki counter var's value is getting changed, but not getting reflected in UI, so we use hooks.
1> usestate - hook responsible for propagation of changes in the UI/DOM 
   When you update state using useState, React detects the change and re-renders the component, reflecting the new state in the UI.
   useState() : accepts a default value for the var/state like a object, array, string, number etc.
                It returns an array of len 2, arr[0] -> name of the var/state and arr[1] -> function that handles change usually setCounter (responsible for changing the value of the var).
                If u want to change the var's value use the function returned.
                eg : const [var, setVar] = useState(5)  --> var ki default value = 5, to change use setVar so that he change is propagated.

                setVar(var + 1) or var = var+1 , setVar(var) ---> ### to change the value .