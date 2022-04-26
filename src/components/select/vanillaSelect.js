const cars = ["Volvo", "Saab", "Mercedes", "Audi"];

let select = document.createElement("select");
setSelectOptions();

let currentCar = document.createElement("span");
// both ways of setting class attributes works
//currentCar.setAttribute("class", "currentCar")
currentCar.className = "currentCar"
currentCar.innerText = cars[0];
select.addEventListener("change", () => {
    currentCar.innerText = select.value
}, false);


let root = document.querySelector("#root");
root.appendChild(currentCar);
root.appendChild(select);


function setSelectOptions() {
    for (let car of cars) {
        let option = document.createElement("option");
        option.value = car;
        option.text = car;
        select.appendChild(option);
    }
}