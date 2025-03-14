function customRendor(reactElement, container){
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // container.appendChild(domElement)

    const domElem = document.createElement(reactElement.type)
    domElem.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        domElem.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElem)
}
const reactElement = {
    type : 'a',
    props: {
        href : "https://google.com",
        target : "_blank"
    },
    children : 'click me to visit google'
}    // this is how behind the seen a tag will be returned or seen by react/ compiled by react, basically it forms a tree out of the returned element at the end

const cont = document.querySelector("#root")

customRendor(reactElement, cont)