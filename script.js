let textfield = document.getElementById("textfield");
let buttons = document.querySelectorAll(".butt");
buttons.forEach((i) => {
   i.onclick = () => {
      if (i.innerText != "C" && i.innerText != "=") {
         textfield.value += i.innerText;
      } else if (i.innerText == "=") {
         textfield.value = eval(textfield.value);
      } else {
         textfield.value = null;
      }
   };
});