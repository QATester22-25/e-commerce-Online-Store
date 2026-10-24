fetch("products.json")
  .then((response) => response.json())
  .then((data) => {

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const swiper_items_sale = document.getElementById("swiper_items_sale");
    const swiper_electronics = document.getElementById("swiper_electronics");
    const swiper_appliances = document.getElementById("swiper_appliances");
    const swiper_mobiles = document.getElementById("swiper_mobiles");


    data.forEach((product) => {
      
      if (product.old_price) {

        const isInCart = cart.some(cartItem => cartItem.id === product.id);

        const percent_discount = Math.floor(
          ((product.old_price - product.price) / product.old_price) * 100,
        );
        swiper_items_sale.innerHTML += `
    
          <div class="swiper-slide product">
            <span class="sale_present">%${percent_discount}</span>
            <div class="img_product">
              <a href="#"><img src=${product.img} alt="product_img"></a>
            </div>
            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p class="name_product"><a href="#">${product.name}</a></p>
            <div class="price">
              <p><span>$${product.price}</span></p>
              <p class="old_price">$${product.old_price}</p>
            </div>
            <div class="icons">
              <span class="btn_add_cart ${isInCart ? 'active' : ''}" data-id="${product.id}">
                <i class="fa-solid fa-cart-shopping"></i>${isInCart ? 'Item in cart' : 'Add to cart'} 
              </span>
              <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
            </div>
          </div> `;
      } else {
        const isInCart = cart.some((cartItem) => cartItem.id === product.id);

        swiper_items_sale.innerHTML += `
    
          <div class="swiper-slide product">
            
            <div class="img_product">
              <a href="#"><img src=${product.img} alt="product_img"></a>
            </div>
            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p class="name_product"><a href="#">${product.name}</a></p>
            <div class="price">
              <p><span>$${product.price}</span></p>
             
            </div>
            <div class="icons">
              <span class="btn_add_cart  ${isInCart ? "active" : ""}" data-id="${product.id}">
                <i class="fa-solid fa-cart-shopping"></i>${isInCart ? "Item in cart" : "Add to cart"}
              </span>
              <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
            </div>
          </div> `;
      }
    });

    data.forEach((product) => {
      

      const percent_discount = Math.floor(
        ((product.old_price - product.price) / product.old_price) * 100,
      );

      const old_price_p =
        product.category == "electronics" && product.old_price
          ? `<p class="old_price">$${product.old_price}</p>`
          : "";

      const percent_discount_div =
        product.category == "electronics" && product.old_price
          ? `<span class="sale_present">%${percent_discount}</span>`
          : "";

      if (product.category == "electronics") {

        const isInCart = cart.some((cartItem) => cartItem.id === product.id);
      
        swiper_electronics.innerHTML += `
        <div class="swiper-slide product">
            ${percent_discount_div}
            <div class="img_product">
              <a href="#"><img src=${product.img} alt="product_img"></a>
            </div>
            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p class="name_product"><a href="#">${product.name}</a></p>
            <div class="price">
              <p><span>$${product.price}</span></p>
              ${old_price_p}
            </div>
            <div class="icons">
             
              <span class="btn_add_cart ${isInCart ? "active" : ""}" data-id="${product.id}">
                <i class="fa-solid fa-cart-shopping"></i>${isInCart ? "Item in cart" : "Add to cart"} 
              </span>
              <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
            </div>
          </div> `;
      }
    });

    data.forEach((product) => {


      const percent_discount = Math.floor(
        ((product.old_price - product.price) / product.old_price) * 100,
      );

      const old_price_p =
        product.category == "appliances" && product.old_price
          ? `<p class="old_price">$${product.old_price}</p>`
          : "";

      const percent_discount_div =
        product.category == "appliances" && product.old_price
          ? `<span class="sale_present">%${percent_discount}</span>`
          : "";

      if (product.category == "appliances") {
        
        const isInCart = cart.some((cartItem) => cartItem.id === product.id);
        
        swiper_appliances.innerHTML += `
        <div class="swiper-slide product">
            ${percent_discount_div}
            <div class="img_product">
              <a href="#"><img src=${product.img} alt="product_img"></a>
            </div>
            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p class="name_product"><a href="#">${product.name}</a></p>
            <div class="price">
              <p><span>$${product.price}</span></p>
              ${old_price_p}
            </div>
            <div class="icons">
              
              <span class="btn_add_cart ${isInCart ? "active" : ""}" data-id="${product.id}">
                <i class="fa-solid fa-cart-shopping"></i>${isInCart ? "Item in cart" : "Add to cart"} 
              </span>
              <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
            </div>
          </div> `;
      }
    });

    data.forEach((product) => {

      const percent_discount = Math.floor(
        ((product.old_price - product.price) / product.old_price) * 100,
      );

      const old_price_p =
        product.category == "mobiles" && product.old_price
          ? `<p class="old_price">$${product.old_price}</p>`
          : "";

      const percent_discount_div =
        product.category == "mobiles" && product.old_price
          ? `<span class="sale_present">%${percent_discount}</span>`
          : "";

      if (product.category == "mobiles") {
        const isInCart = cart.some((cartItem) => cartItem.id === product.id);
        
        swiper_mobiles.innerHTML += `
        <div class="swiper-slide product">
            ${percent_discount_div}
            <div class="img_product">
              <a href="#"><img src=${product.img} alt="product_img"></a>
            </div>
            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p class="name_product"><a href="#">${product.name}</a></p>
            <div class="price">
              <p><span>$${product.price}</span></p>
              ${old_price_p}
            </div>
            <div class="icons">
               <span class="btn_add_cart ${isInCart ? 'active' : ''}" data-id="${product.id}">
                <i class="fa-solid fa-cart-shopping"></i>${isInCart ? 'Item in cart' : 'Add to cart'} 
              </span>
              <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
            </div>
          </div> `;
      }
    });
  });
