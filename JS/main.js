let categoryNavList = document.querySelector('.category_nav_list');

function open_Categ_List() {
  categoryNavList.classList.toggle('active')
}


let cartSection = document.querySelector('.cart');

function openCloseCart() {
  cartSection.classList.toggle('active');
}

const open_Menu = document.querySelector(".nav_links");

function openMenu() {
  open_Menu.classList.toggle('active');
}

fetch('products.json')
  .then(response => response.json())
  .then(data => {

  const addToCartBtn = document.querySelectorAll(".btn_add_cart");

  addToCartBtn.forEach((button) => {
      button.addEventListener("click", (event) => {
      const productId = event.target.getAttribute("data-id");
        
        const selectedProduct = data.find(product => product.id == productId);

        addToCart(selectedProduct);

        const allMatchingButtons = document.querySelectorAll(`.btn_add_cart[data-id ="${productId}"]`);
        allMatchingButtons.forEach(btn => {
          btn.classList.add('active');
          btn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>Item in cart
              </span>`;
        })
    });
  });
})


function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ ...product, quantity: 1 })
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let total_price = 0;
  let total_count = 0;

  const cartItemsContainer = document.getElementById("cart_items");

  cartItemsContainer.innerHTML = "";

  cart.forEach((item, index) => {

    let total_item_price = item.price * item.quantity;

    total_price += total_item_price;
    total_count += item.quantity;

     cartItemsContainer.innerHTML += `
      <div class="item_cart"><img src="${item.img}" alt="cart_img">
        <div class="content">
          <h4>${item.name}</h4>
          <p class="price_cart">$${total_item_price}</p>
          <div class="quantity_control">
            <button class="decrease_quantity" data-index="${index}">-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="increase_quantity" data-index="${index}">+</button>
          </div>
        </div>
           <button class="delete_item" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button>
      </div> 
  
  `;
  })

  const cart_total_price = document.querySelector('.price_cart_total');
  const cart_item_count = document.querySelector('.count_item_cart');
  const cart_header_count = document.querySelector(".count_item_header");



  cart_total_price.innerHTML = `$ ${total_price}`;
  cart_item_count.innerHTML = total_count;
  cart_header_count.innerHTML = total_count;








  const increaseButtons = document.querySelectorAll(".increase_quantity");
  const decreaseButtons = document.querySelectorAll(".decrease_quantity");

  increaseButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const itemIndex = event.target.getAttribute('data-index');
      increaseQuantity(itemIndex);
    })
  })

  decreaseButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const itemIndex = event.target.getAttribute('data-index');
      decreaseQuantity(itemIndex);
    })
  })


  const deleteButtons = document.querySelectorAll(".delete_item");

  deleteButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const itemIndex = event.target.closest('button').getAttribute('data-index');

      removeFromCart(itemIndex);

    
    })
  })
}


function increaseQuantity(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart[index].quantity += 1
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}
function decreaseQuantity(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart[index].quantity > 1) {
      cart[index].quantity = cart[index].quantity -1;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}



function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const removeItem = cart.splice(index, 1)[0];
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();

    updateButtonsState(removeItem.id);
 }

 function updateButtonsState(productId) {
    const allMatchingButtons = document.querySelectorAll(
      `.btn_add_cart[data-id ="${productId}"]`);
   allMatchingButtons.forEach(button => {
     button.classList.remove('active');
      button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>Add to cart
              </span>`;
   })
} 


updateCart();

