let gourment = {}
const getJsonFile = () => {
    fetch("./items.json").then(async response => {
      try {
       const data = await response.json() 
          gourment= data
         
     } catch(error) {
       console.log('Error happened here!')
       console.error(error)
     }
    })
    
}

function onLoad() {
console.log(selecedItems);
 fetch("./items.json").then(async response => {
      try {
        const data = await response.json();
        gourment = data;
        
        loded('vegetables');
         
     } catch(error) {
       console.log('Error happened here!')
       console.error(error)
     }
    })

  
}
  
let selecedItems = [];
let itemCount = 0; 
let cartCount=selecedItems.length;/*Keep Track of Cart_Count*/
let functionCall = 0;
//  let cartReflect
 function loded(opt)
 {  
    if(!!window.localStorage.getItem("cartItems"))
   { console.log(JSON.parse(window.localStorage.getItem("cartItems")))
    selecedItems = [...JSON.parse(window.localStorage.getItem("cartItems"))];
      console.log(selecedItems);
     }
  //   cartReflect = JSON.parse(window.localStorage.getItem("cartItems"))
  //  let category=gourment[opt]
  //  console.log(cartReflect);
  //  if (cartReflect.length > 0) {
     
  // cartReflect.forEach(element => {
  //           const itemIndex = category.findIndex(o => o.title === element.title);
  //           if(itemIndex > -1) {
  //               category[itemIndex] = element;
  //           }    
  //       });
     
  //  }
    document.getElementById("checkoutCart").innerHTML=selecedItems.length
     console.log(opt, gourment[opt])
     document.querySelector('.container').innerHTML="";/* Clear the Screen Before proceeding to next Screen*/
     gourment[opt].forEach((obj,index)=>{
       console.log(obj);
       let html=`
       <div id="${index}" class="p-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12" >
       <div class="card">
                 <div class="box-content" >
                 <div class="top-left">Organic</div>
           <center>  <img class="img" src="./images1/${obj.image}.jpg" height="80px" width="130px"></center>
                <p style="display:"inline",float:"left"">${obj.displayName}</p>
                <table class="table table-borderless ">
                <tr>
                <td style="text-align:"right;""><p style="text-align:end;"><span class="strike" style="text-align:"right;"">₹${obj["oldPrice"]}</span></p></td>
                <td> <p  ><strong>₹${obj["newPrice"]}</strong></p></td>
                </tr>
                </table>    
                <p  style="display:"inline",text-align:"left";">${obj.quantity}</p>
                                      
                           <button class="Btn_Cart" id="Btn-${index}" >Add To Cart</button>
                           <div id="post_addToCardDiv" style="display:none;">
                               <div id="-${index}" class="plus_minus_btn">-</div>
                               <div id="{itemCount-${index}}">0</div>
                               <div id="+${index}" class="plus_minus_btn">+</div>
                           </div>                
                </div>
                </div>
            </div>`
 
           document.querySelector('.container')
           .insertAdjacentHTML('afterbegin', html);
     })
        document.querySelectorAll(".plus_minus_btn").forEach((item) => {
            item.addEventListener('click', event => {

            var targetedButton = event.target.id;
            if (targetedButton.charAt(0) == "+") {
                var itemC = document.getElementById(targetedButton).previousElementSibling;
                itemCount = itemC.innerHTML;
                cop_item=++itemCount;
                // console.log(cop_item);
                itemC.innerHTML = itemCount;
          //increse count when we add element to cart and push if it is not persent in the selected list,,,,,, if item is already present in selected array then increase count           
              gourment[opt][targetedButton.charAt(1)].count = gourment[opt][targetedButton.charAt(1)].count + 1;
                if (selecedItems.some(elem => elem.title === gourment[opt][targetedButton.charAt(1)].title)) {
                 selecedItems = selecedItems.filter(function( obj ) {
                return obj.title !== gourment[opt][targetedButton.charAt(1)].title;
                 });
                    selecedItems.push(gourment[opt][targetedButton.charAt(1)])
                    console.log(selecedItems);
                      window.localStorage.removeItem("cartItems")
                  
                  window.localStorage.setItem("cartItems", JSON.stringify(selecedItems))
          


                } else {
                    selecedItems.push(gourment[opt][targetedButton.charAt(1)])
                    console.log(selecedItems);
                      window.localStorage.removeItem("cartItems")
                     window.localStorage.setItem("cartItems",JSON.stringify(selecedItems))
              }


            }
            else { 
                var itemC = document.getElementById(targetedButton).nextElementSibling;
                itemCount = itemC.innerHTML;
                itemCount = itemCount == 0 ? 0 : itemCount - 1;
                if (itemCount == 0) {
                    document.getElementById(targetedButton).parentElement.style.display = "none";
                    document.getElementById(targetedButton).parentElement.previousElementSibling.style.display = "block";
              }
              
                itemC.innerHTML = itemCount;
                cop_item=itemCount;
                if(itemCount==0){
                document.getElementById("checkoutCart").innerHTML = --cartCount;
                }
                //decrase the count in the gourment array and put the new obj with update count into selected items and if count is equal to zero remove the object from selected Items
                 gourment[opt][targetedButton.charAt(1)].count = gourment[opt][targetedButton.charAt(1)].count - 1;
             
                
                 if (selecedItems.some(elem => elem.title === gourment[opt][targetedButton.charAt(1)].title)) {
                 selecedItems = selecedItems.filter(function( obj ) {
                return obj.title !== gourment[opt][targetedButton.charAt(1)].title;
                 });
                    selecedItems.push(gourment[opt][targetedButton.charAt(1)])
                    }

                  selecedItems = selecedItems.filter(function( obj ) {
                 return obj.count !==0 
                  });
                     window.localStorage.removeItem("cartItems")
                     window.localStorage.setItem("cartItems",JSON.stringify(selecedItems))
                 console.log(selecedItems);
                
                  }
        })
    })
   document.querySelectorAll(".Btn_Cart").forEach((item) => {
        /*Keeps Track of Button Status when Already Selected*/
        if (gourment[opt][item.id.charAt(4)].count > 0) {
            document.getElementById(item.id).style.display = 'none';
             var sibling = document.getElementById(item.id).nextElementSibling;
            sibling.style.display = 'flex';
            var itemC = document.getElementById(item.id).nextElementSibling.children[1];
            itemC.innerHTML = gourment[opt][item.id.charAt(4)].count;
           
        }
        item.addEventListener('click', event => {
            var targetedButton = event.target.id;
            var sibling = document.getElementById(targetedButton).nextElementSibling;
            sibling.style.display = 'flex';
            document.getElementById(targetedButton).style.display = 'none';
            var itemC = document.getElementById(targetedButton).nextElementSibling.children[1];
            itemCount = itemC.innerHTML;
            itemCount++;
            itemC.innerHTML = gourment[opt][targetedButton.charAt(4)].count+1;
            document.getElementById("checkoutCart").innerHTML = ++cartCount; 
            gourment[opt][targetedButton.charAt(4)].count=gourment[opt][targetedButton.charAt(4)].count+1;
            if (selecedItems.some(elem => elem.title === gourment[opt][targetedButton.charAt(4)].title)) {
                
             selecedItems = selecedItems.filter(function( obj ) {
            return obj.title !== gourment[opt][targetedButton.charAt(4)].title;
             });
                selecedItems.push(gourment[opt][targetedButton.charAt(4)])
                window.localStorage.setItem("cartItems",JSON.stringify(selecedItems))
                console.log(selecedItems);

            } else {
                selecedItems.push(gourment[opt][targetedButton.charAt(4)])
                console.log(selecedItems);
                  window.localStorage.setItem("cartItems",JSON.stringify(selecedItems))
          }
            
        })
    })

};


