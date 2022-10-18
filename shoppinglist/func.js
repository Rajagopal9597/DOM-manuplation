/*let price = 0;

window.onload = function () {
    document.getElementById("item-name").focus();
}

function addItemPrice() {
    if (document.getElementById("item-name").value == "" || document.getElementById("item-price").value == "") {
        return alert("Please enter value");
    }
    var table = document.getElementsById("details");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = document.getElementById("item-name").value;
    cell2.innerHTML = document.getElementById("item-price").value;
    price += parseInt(document.getElementById("item-price").value);
    document.getElementById("grandtotal").innerHTML = price;
    document.getElementById("item-name").value = "";
    document.getElementById("item-price").value = "";
    document.getElementById("item-name").focus();
} */
/*let item_name = [];
let item_price = [];
let total_price = 0;
function addtotal(){
    let name = document.getElementById("item-name").value;
    let price = document.getElementById("item-price").value;
     if (name.length == 0 ||  !price)
    {
      return alert("VALID INPUTS REQUIRED!!!!!!");
    }
    let parent = document.getElementById("f1-table");
    parent.innerHTML = "";
    var cel1 = NewRow.insertCell(0);
     var cel2 = NewRow.insertCell(1);
     // assign value to the cells
     cel1.innerHTML = item_name;
     cel2.innerHTML = item_price;
    item_name.push(name);
    item_price.push(price);
    total_price += price;
    //render();
    document.getElementById("item-name").value = null;
    document.getElementById("item-price").value = null;
}*/


let itemname = document.querySelector("#item-name");
let itemprice = document.querySelector("#item-price");
document.querySelector("#add-item").addEventListener("click",addItem);

const tbody = document.querySelector("table tbody");

function addItem() {
    if(itemname.value != "" && itemprice.value != ""){
        const row = document.createElement("tr");
        const itemnameTD = document.createElement("td");
        const itempriceTD = document.createElement("td");
        itempriceTD.classList.add("item-price");
        itemnameTD.innerText = itemname.value;
        itempriceTD.innerText = itemprice.value;
        
        row.appendChild(itemnameTD);
        row.appendChild(itempriceTD);
        tbody.appendChild(row);
        itemname.value = "";
        itemprice.value = "";
        let total = 0;
        const allPrice = document.querySelectorAll(".item-price");
    // if(allPrice.length==10){
    //     document.querySelector("#add-item").removeEventListener('click');
    // }
    console.log(allPrice);
    for (let item of allPrice) {
        total += parseInt(item.innerText);
      }console.log(total);
      document.querySelector("#grandtotal").innerText = total;
      total = 0;


    }
}
 