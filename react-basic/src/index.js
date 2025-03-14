import React from 'react'; // core lib references
import ReactDOM from 'react-dom/client'; //for web implementaion
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root')); // root element of virtual dom ka reference create krke root me store kar diya 

//now render app (JSX -> we can render our html element from js like <APP />)
root.render(
    <App />
);
