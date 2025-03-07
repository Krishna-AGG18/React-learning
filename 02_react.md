//  flow and structure 

// at the end react is js , we need to learn how react injects in html, majority kaam react me ho rha ha but kuch toh js se horha ha or js ko kuch krne ke liye html me inject hona toh hoga hi

//  hame bas wahi injection padhna ha ki kese ho rha ha
// js akele jab bhi chalti ha use html mr lana hi padega usse pehle js manipuation nhi kr skti kisi bhi html me

// REACT MAKES SINGLE PAGE APP.(SPA)

// MAIN JO HAMARA ENTRY POINT HOTA HA WO HOTA HA INDEX .JS FILE USKA NAAM KUCH BHI HO SKTA HA

// IMport React from 'react' :- core lib to get references , ReactDom is implementation of that on web  

// react makes its own DOM (Virtual Dom) ,compare that to main Dom for differences and changes that elements only in the main DOM

//package-lock.json :- a stable versiomn of dependencies is locked here that runs on the same system only

public folder --> index.html(main page, SPA), manifest file(when we open in mobile meta tags are shown from here)

we can render html elements through js , jsx se ham aone khud ke tags bana skte hai 

bina   <React.StrictMode>  iske bina bhi render hota ha

<APP /> is nothin but a function that returns a html element (see in APP.js)

React :- function lo uske ander html return krdo and we can render that html in my dom, HENCE WE HAVE PROGRAMMING CAPABILITY IN HTML

IN CASE OF CREATE-REACT-APP :- scripts are injectde into index.html by read-scripts in package . json

in case of vite there are no reacr-scripts hence we need to add js manaually through script tag

//COMPONENTS....
components wali file should be .jsx (not necessary in create-react .js will work but not in vite)

if we meant to render a component start its name with a upper case letter, file ka bhi kr hi do

we can return a single element only and yes that single can have multiple tags in it like a <div> or a fragment i.e. <>...</>