//  the business logic
const form = document.querySelector('#form');
let qty = document.getElementById('qty')
var delivery = document.getElementById('delivery');



let cart = [];
form.addEventListener("submit", function(event){
  event.preventDefault();
  const fd = new FormData(form);
  let order = {};
  for (const key of fd.keys()) {
    if(fd.get(key).toString().length > 0){
      order[key]  = fd.get(key).toString();
    }
  }
  
  cart.push(order);
  if(confirm("This pizza will be added to your cart")){
    localStorage.setItem("cart", JSON.stringify(cart));
  }
});


const btnViewOrder = document.querySelector("#view-order");
btnViewOrder.addEventListener('click',function  () {
    let cart =JSON.parse(localStorage.getItem("cart"));
    cart.forEach(element => {
        document.querySelector("#table").innerHTML += `<tr>
      <td>${element['selectpizza']}</td>
      <td>${element['pizzasize']}</td>
      <td>${element['crust']}</td>
      <td>${element['toppings']}</td>
      <td>${["qty".value]}</td>

      


      </tr>`;
    });
    class pizza{
        constructor(sizeprize,crustprize,toppingsprize,total){
            this.sizeprize=sizeprize;
            this.crustprize=crustprize;
            this.toppingsprize=toppingsprize;
            this.total=total
        }
        ptotal(){
           return true;
        }

    }
    PepperoniPizzasmall=  new pizza(500,100,150,750);
    PepperoniPizzamedium=  new pizza(600,100,100);
    PepperoniPizzalarge=  new pizza(700,100,200);
    HawaiianPizzasmall=  new pizza(500,100,120);
    HawaiianPizzamedium=  new pizza(600,100,130);
    HawaiianPizzalarge=  new pizza(700,100,180);
    BBQChickenPizzasmall=  new pizza(500,100,170);
    BBQChickenPizzamedium=  new pizza(600,100,200);
    BBQChickenPizzalarge=  new pizza(700,100,140);
    var total1=PepperoniPizzasmall.total
    
    
    
    
    
    
    if(PepperoniPizzasmall.ptotal ){
      return document.getElementById("demo").innerHTML = total1;
    }
  

    


   
});
function getdelivery(event) {
    event.preventDefault
    let delivery;
    if ((form.delivery[0].checked === true) || (form.gender[1].checked === true)) {
        if (form.delivery[0].checked === true) {
            delivery = 0;
        } else if (form.gender[1].checked === true) {
            delivery = 1;
        }
        return delivery;
    } 
}
function calcdelivery() {
   let delivery =getdelivery();
   let result;
   if (delivery === 0) {
        result=0
   }else if(delivery === 1) {
    result=200
    document.getElementById('result').innerHTML = "Your delivery fee is " + result + "."
   }

}

