import React from "react";
function Reset() {
  const onClickHandler = () => {
    document.querySelectorAll('[id=cell]').forEach((element)=> {element.style.backgroundColor = "white"})
  };

  return (
    <div>
      <button type="button" onClick={onClickHandler} id="reset_btn">Reset</button>
    </div>
    )
}

export default Reset;