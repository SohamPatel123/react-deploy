import "./App.css";
import React from "react";
import { CirclePicker } from "react-color";
import Grid from "./Grid";

function App() {

window.onbeforeunload = function(){
  sessionStorage.setItem("origin", window.location.href);
  sessionStorage.setItem("color","white");
  localStorage.setItem("Grid",JSON.stringify(Grid));
}
window.onload = function(){
  if(window.location.href === sessionStorage.getItem("origin")){
    sessionStorage.clear();
  }
}
const handleChangeComplete = (color) => {
  console.log(color.hex);
  sessionStorage.setItem("color",color.hex);
};

return (
  <div className="App">
  <CirclePicker className="circles" onChangeComplete={handleChangeComplete} />
  </div>
  );
}
export default App;
