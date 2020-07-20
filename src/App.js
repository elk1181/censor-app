import React from 'react';
import logo from './logo.svg';
import './App.css';
var Filter = require('bad-words'),
    filter = new Filter();




class App extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

  }

  handleClick() {
    const element = document.createElement("a");
     const file = new Blob([document.getElementById('doc').innerText], {type: 'text/plain'});
     element.href = URL.createObjectURL(file);
     element.download = "file-censored.txt";
     document.body.appendChild(element); // Required for this to work in FireFox
     element.click();
   }





censor(){
document.getElementById('doc').innerHTML=  filter.clean(document.getElementById('doc').innerHTML);
}

showFile = async (e) => {
   e.preventDefault()
   const reader = new FileReader()
   reader.onload = async (e) => {
     const text = (e.target.result)
     console.log(text)
     alert(text)
     document.getElementById('doc').innerHTML= text;
      document.getElementById('doc').innerText= text;
   };
   reader.readAsText(e.target.files[0])
 }

  render() {

  return (

    <div className="App">
    <div>
      <input type="file" onChange={(e) => this.showFile(e)} />
    </div>
    <button contentEditable='false' onClick={this.handleClick}>Generate Document</button>

    <button contentEditable='false' onClick={this.censor}>Censor</button>
      <div id="doc" className="pdf" contentEditable='true' onInput={e => filter.isProfane(e.currentTarget.textContent)} style={{backgroundColor:"white"}}>
hello
    </div>


</div>


  );
}
}





export default App;
