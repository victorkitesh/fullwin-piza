//  the business logic
const form = document.querySelector('#form');
const btnViewOrder = document.querySelector("#view-order");
const tot = document.querySelector("#total");
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
  order["total"] = parseInt(order["qty"] * order["price"]);
  cart.push(order);
  if(confirm("This pizza will be added to your cart")){
    localStorage.setItem("cart", JSON.stringify(cart));
  }
});