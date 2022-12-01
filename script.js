let textfield = document.getElementById("textfield");
let buttons = document.querySelectorAll(".butt");
document.addEventListener("keydown", (e) => {
   if (e.key == "Enter") {
      buttons[buttons.length - 1].click();
   } else if (e.key == "Backspace") {
      let arr = textfield.value.split("");
      arr.pop();
      textfield.value = arr.join("");
   } else if (e.key == "Delete") {
      buttons[3].click();
   } else {
      buttons.forEach((i) => {
         if (i.innerText == e.key) {
            i.click();
         }
      });
   }
});

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

let hello = "mynameisdev";
let helloa = hello.split("");
helloa.pop();
console.log(helloa.join(""));
