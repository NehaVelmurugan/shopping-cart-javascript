let cartItems=[]

const populateCart = () => {
cartItems=JSON.parse(window.localStorage.getItem("cartItems"))

    let cartListContainer = document.getElementById('cartList')

    let totalItems = document.getElementById('totalItems')
//    return [...new Map(arr.map(item => [item[key], item])).values()]
    console.log(cartItems)
    totalItems.innerText=`${cartItems.length} items`
    cartListContainer.innerHTML=''

    cartItems.forEach((item,i) => {

        let html = `<div class='container-fluid d-flex justify-content-between border'> 
      <div class='d-flex'>
      <img class="img" src="./images1/${item.image}.jpg" height="80px" width="130px">
      <div><div style='width:100px'><p class="cart_title">${item.title}</p>
          <div id="post_addToCardDiv" >
                               <div  class="plus_minus_btn" id='${item.title}'  onclick='remove(event)'>-</div>
                               <div >${item['count']}</div>
                               <div  class="plus_minus_btn" id='${item.title}' onclick='add(event)'>+</div>
                           </div>  </div></div>
      </div>
 
     <div class='d-flex flex-column' >
            <i class='fa fa-remove' style='font-size:16px;position:relative;left:35px;'text-align:end' id='${item.title}' onclick='removeFromCart(event)'></i>
            <h4 class="price_cart" style="font-size:22px;;position:relative;right:85px;top:10px;"><i class="fa">&#xf156;</i>${item['newPrice']*item['count']}</h4></div>
        </div>`
    

        cartListContainer.insertAdjacentHTML('afterbegin', html);
     })

}
 
const add = (e) => { 
    let item = e.target.id
    let itemIndex = cartItems.findIndex((ele,i) => { return ele.title == item })
    
    cartItems[itemIndex].count = cartItems[itemIndex].count + 1
    window.localStorage.removeItem("cartItems")
    window.localStorage.setItem("cartItems",JSON.stringify(cartItems))
    populateCart();

}

const remove = (e) => { 
   let item = e.target.id
    let itemIndex = cartItems.findIndex((ele,i) => { return ele.title == item })
    
    if (cartItems[itemIndex].count!=1) { 
        cartItems[itemIndex].count = cartItems[itemIndex].count - 1
        
          window.localStorage.removeItem("cartItems")
    window.localStorage.setItem("cartItems",JSON.stringify(cartItems))
    populateCart();
    }
}


const removeFromCart = (e) => { 
    let item = e.target.id
    console.log(item);
    cartItems = cartItems.filter((ele) => { return ele.title != item })
    console.log(cartItems);
      window.localStorage.removeItem("cartItems")
    window.localStorage.setItem("cartItems",JSON.stringify(cartItems))
    populateCart()
}