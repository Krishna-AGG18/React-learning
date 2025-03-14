# creating our own react
---
1> jo bhi custom-react folder me ha

whatever we return to render in dom , react makes a tree out it behind the seens at the end and then evaluated by the brwoser
for eg: const reactElement = {
    type : 'a',
    props: {
        href : "https://google.com",
        target : "_blank"
    },
    children : 'click me to visit google'
} 
like this a element is brokendown by react BTS and evaluated....

now as we know that in react function we have to create that returns html component , so those components are being brokendown/parsed into the above form with the help of bundlers

now ..

1> rather than jsx form(like <App / >) i can also mwntion it like App() is allowed...

2> if the elements are parsed into object like structure can  i pass the object or element directly like <a href= "https://google.com> ----- yes allowed 

3> and we can also directly pass the object form but to pass that use -->

React.createElement("tagname",{an  object with key as attributr name : value as its value},"innerHtml", variables/evaluated js exp), ye by default automaticaay inject ho jata ha through bable transpiler

then pass its name in root.render 

hampehle jo upar object h we cannnot pass that because of predefined syntax in react

custom wala isliye chl rha tha kyuki waha hmne khud ka custom render bhi likha tha...

if we want to return variables from function mention that in return statement under {} braces.... only evaluated exp not the condition coz render ka syntax ha na apna isliye since objects me evaluation nnhi hota
