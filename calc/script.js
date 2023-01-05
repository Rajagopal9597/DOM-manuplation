const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const total = document.getElementById("total");
const person = document.getElementById("person");
const tipGiven = document.getElementById("tipGiven");
let bilAmount = 0;
let tipPer = 0;
let totalPerson = 1;
let tipAmount = 0;
let totalAmount = 0;

function setAmount() {
    bilAmount = parseFloat(bill.value);
}

function Five() {
    tipPer = 5;
    tipAmount = (bilAmount * (tipPer / 100)) / totalPerson;
    totalAmount = tipAmount + bilAmount;
    tip.innerText = tipAmount;
    total.innerText = totalAmount;
}
function Ten() {
    tipPer = 10;
    tipAmount = (bilAmount * (tipPer / 100)) / totalPerson;
    totalAmount = tipAmount + bilAmount;
    tip.innerText = tipAmount;
    total.innerText = totalAmount;
}
function Fifteen() {
    tipPer = 15;
    tipAmount = (bilAmount * (tipPer / 100)) / totalPerson;
    totalAmount = tipAmount + bilAmount;
    tip.innerText = tipAmount;
    total.innerText = totalAmount;
}
function TwentyFive() {
    tipPer = 25;
    tipAmount = (bilAmount * (tipPer / 100)) / totalPerson;
    totalAmount = tipAmount + bilAmount;
    tip.innerText = tipAmount;
    total.innerText = totalAmount;
}
function Fifty() {
    tipPer = 50;
    tipAmount = (bilAmount * (tipPer / 100)) / totalPerson;
    totalAmount = tipAmount + bilAmount;
    tip.innerText = tipAmount;
    total.innerText = totalAmount;
}
function handleCustom() {

    if (parseFloat(tipGiven.value) > 0) {
        tipPer = parseFloat(tipGiven.value);
        tipAmount = (bilAmount * (tipPer / 100)) / totalPerson;
        totalAmount = tipAmount + bilAmount;
        tip.innerText = tipAmount;
        total.innerText = totalAmount;
    }
}
function noOfPerson() {
    if (parseInt(person.value) > 0) {
        totalPerson = parseInt(person.value);
        tipAmount = (bilAmount * (tipPer / 100)) / totalPerson;
        totalAmount = tipAmount + bilAmount;
        tip.innerText = tipAmount;
        total.innerText = totalAmount;
    };
}
function resetAll() {
    bill.value = 0;
    tip.innerHTML = 0;
    total.innerHTML = 0;
    person.value = 0;
    tipGiven.value = 0;
}