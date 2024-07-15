let numObj = document.querySelector(".screen");
let numVal = parseInt(numObj.textContent);
let operand = document.querySelector('.nums-pad');
let buffer;
let operation = "";
operand.addEventListener("click", (el) => {
    if (el.target.tagName === "BUTTON") {
        if (el.target.textContent === "C") {
            numVal = 0;
            buffer = 0;
            operation = "";
            numObj.textContent = 0;
        } else if (el.target.textContent === "←") {
            if (operation === "" || operation === "=") {
                numVal = parseInt(numVal / 10);
                numObj.textContent = numVal;
            } else {
                numVal = parseInt(buffer / 10);
                numObj.textContent = buffer;
            }
        } else if (el.target.textContent === "÷" || el.target.textContent === "+" || el.target.textContent === "-" || el.target.textContent === "×") {
            generateResult();
            numObj.textContent = numVal;
            operation = el.target.textContent;
        } else if (el.target.textContent === "=") {
            generateResult();
            operation = "=";
            numObj.textContent = numVal;
        } else {
            if (operation === "") {
                numVal *= 10;
                numVal += parseInt(el.target.textContent);
                numObj.textContent = numVal;
            } else if(operation === "="){
                numVal = 0;
                numVal += parseInt(el.target.textContent);
                numObj.textContent = numVal;
                operation = "";
            }else {
                buffer *= 10;
                buffer += parseInt(el.target.textContent);
                numObj.textContent = buffer;
            }
        }
    }
});
function generateResult(){
    if (operation === "÷") numVal /= buffer;
    else if (operation === "+") numVal += buffer;
    else if (operation === "-") numVal -= buffer;
    else if(operation === "×") numVal *= buffer;
    buffer = 0;
}