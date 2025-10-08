const element=React.createElement("h1",{id:"first",className:"rahul",style:{backgroundColor:"blue",fontSize:"30px",color:"pink"}},"hello coder army");
const element2=React.createElement("h2",{id:"first",className:"rahul",style:{backgroundColor:"black",fontSize:"30px",color:"pink"}},"maja aaya mujhe");

const div1=React.createElement('div',{},[element,element2]);
const root=ReactDOM.createRoot(document.getElementById('root'));

//root.render(element);
//root.render(element2);

root.render(div1);