const display = document.querySelector("#display");
//solo utilizamos una pantalla por eso utilizamos queryselectro
const buttons = document.querySelectorAll("#button");
//utilizamos queryselectorall por q seleccionamos todos los botones ,ya que son varios. cogemos toas las etiquetas button.

buttons.forEach((item) => {
  //sirve para reconocer el id. no se pasa parametros.
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText !== "" && item.id == "equal") {
      //eval hace que se tome como operacion matematica.
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
        display.innerText = "Null";
      setTimeout(()=>{display.innerText=''}, 2000)
    } else {
        display.innerText+=item.id;
        //agregando cosas a la  pamnatalla sin hacer nada.
    }
  };
});
