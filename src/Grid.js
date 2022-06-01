import './App';

function Grid(){

const Gridspace = document.getElementById('Grid');
const NUM_ROWS = 32;
const NUM_COLS = 32;
const DEFAULT_COLOR = "white";
  let Grid = document.createElement('table')
    for (let i = 0; i < NUM_ROWS; i++) {
        const row = Grid.insertRow();
        for (let j = 0; j < NUM_COLS; j++) {
            const cell = row.insertCell();
            cell.addEventListener("click",(event) =>{
            event.target.style.backgroundColor = (sessionStorage.getItem("color") ? sessionStorage.getItem("color") : DEFAULT_COLOR);
            cell.setAttribute('id','cell')

            var css = `table td:hover{ background-color: ${(sessionStorage.getItem("color") ? sessionStorage.getItem("color") : DEFAULT_COLOR)}  }`;
            var style = document.createElement('style');
            if (style.styleSheet)
              style.styleSheet.cssText = css;
            else 
              style.appendChild(document.createTextNode(css));
            document.getElementsByTagName('head')[0].appendChild(style);
            })
        }
    }
    let children = Gridspace.childNodes? Gridspace.childNodes:[]
    if(children.length===0)
    Gridspace.appendChild(Grid)
}
export default Grid;