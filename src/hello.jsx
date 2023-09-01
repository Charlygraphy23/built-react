let React = {
  createElement: (type, props, ...children) => {
    if (typeof type === "function") {
      const fn = type;
      return fn(props);
    }

    const obj = {
      type,
      props: {
        ...props,
        children,
      },
    };
    return obj;
  },
};

let count=0
let states = [];
const useState = (initialState) => {
const index = count

 states[index] = states[index] || initialState;

 function setStates(value) {
    states[index] = value
    renderer()

 }
 count++
  return [ states[index] , setStates]

}

const App = () => {

  const [state , setState] = useState(1)
  const [num , setNum] = useState(3)

  const handleChange = (e) => {
    setNum(e.target.value)
  }

  return (
    <div className="Hello">
      <h1>Hello - {state}</h1>
      <h1>Hello-neo - {num}</h1>

      <input type="text" value={num} placeholder="hi" onchange={handleChange} />
      <p id="dd">Yoo</p>
    </div>
  );
};

const render = (rootComponent, dom) => {
  if(["string", "number", "boolean"].includes(typeof rootComponent) ){
   const textNode = document.createTextNode(rootComponent);
    dom.append(textNode)
    return
  }

   const element = document.createElement(rootComponent.type);
    const {children , ...props} = rootComponent?.props

    Object.entries(props).forEach(([key , value]) => {
        element[key] = value
    })

   if(typeof rootComponent?.props?.children === 'string') {
    element.append(rootComponent.props.children)
   }

   else if(Array.isArray(rootComponent.props.children)){
    rootComponent.props.children.forEach(item => render(item , element))
   }

   else if(typeof rootComponent.props.children === 'object'){
    render(rootComponent.props.children , element)
   }

   dom.append(element)
};

const renderer = () => {
  count = 0;
  document.getElementById("root").firstChild.remove()
  render(<App />, document.getElementById("root"));
}

render(<App />, document.getElementById("root"));