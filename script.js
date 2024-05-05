var itemsCount = document.querySelectorAll('.item-container')
var addButtons = document.querySelectorAll('.add-to-cart')
var inventory = document.querySelector('.cart')
var totalPrice = document.querySelector('.total')

var total = 0;

var priceNumReg = /[\D.\D|\D]/g;

// Prints details
//for(let i = 1; i <= itemsCount.length; i++){
//	let itemName = document.querySelector(`#item-${i}`).textContent;
//	let itemPrce = document.querySelector(`#price-${i}`).textContent;
//	let itemPriceNum = parseFloat(itemPrce.replace(priceNumReg,""));
//	console.log(itemName,", Price:", itemPriceNum, "USD");
//}

for(let i = 0; i < addButtons.length; i++){
	addButtons[i].addEventListener('click', ()=>{
		let itemName = document.querySelector(`#item-${i+1}`).textContent;
		let itemPrice = document.querySelector(`#price-${i+1}`).textContent;
		let itemPriceNum = parseFloat(itemPrice.replace(priceNumReg,""));
		let newCartItem = document.createElement('p')
		total += itemPriceNum;
		newCartItem.textContent = "$" + itemPriceNum + " | " + itemName
		totalPrice.textContent = "Total Price: $"+total
		inventory.append(newCartItem)
	})
}

//TODO: add clear button, add purchase button
// Make the + a - and make it based on cart content.
// You can delete and add again, only add 1 item of each.