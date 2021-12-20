let Gourment = {}
const getJsonFile = () => {
    fetch("./items.json").then(async response => {
      try {
       const data = await response.json()
          console.log('response data?', data)
          Gourment= data
         
     } catch(error) {
       console.log('Error happened here!')
       console.error(error)
     }
    })
    
}

 function onLoad(){
 fetch("./items.json").then(async response => {
      try {
       const data = await response.json()
          console.log('response data?', data)
          Gourment = data
          
         loded('vegetables') 
         
     } catch(error) {
       console.log('Error happened here!')
       console.error(error)
     }
    })

  
}
  


let selecedItems=[]
let itemCount = 0; 
let cartCount=0;/Keep Track of Cart_Count/
let Fn_Call=0;
 function loded(opt)

{ 
   
   

    console.log(opt, Gourment[opt])
     document.querySelector('.container').innerHTML="";/* Clear the Screen Before proceeding to next Screen*/
     Gourment[opt].forEach((obj,index)=>{
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
                <td style="text-align:"right;""><p style="text-align:end;"><span class="strike" style="text-align:"right;"">₹${obj["old-price"]}</span></p></td>
                <td> <p  ><strong>₹${obj["new-price"]}</strong></p></td>
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
                Gourment[opt][targetedButton.charAt(1)].count = Gourment[opt][targetedButton.charAt(1)].count + 1;
                if (selecedItems.some(elem => elem.title === Gourment[opt][targetedButton.charAt(1)].title)) {
                 selecedItems = selecedItems.filter(function( obj ) {
                return obj.title !== Gourment[opt][targetedButton.charAt(1)].title;
                 });
                    selecedItems.push(Gourment[opt][targetedButton.charAt(1)])
                    console.log(selecedItems);

                } else {
                    selecedItems.push(Gourment[opt][targetedButton.charAt(1)])
                    console.log(selecedItems);
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
                 Gourment[opt][targetedButton.charAt(1)].count = Gourment[opt][targetedButton.charAt(1)].count - 1;
             
                
                 if (selecedItems.some(elem => elem.title === Gourment[opt][targetedButton.charAt(1)].title)) {
                 selecedItems = selecedItems.filter(function( obj ) {
                return obj.title !== Gourment[opt][targetedButton.charAt(1)].title;
                 });
                    selecedItems.push(Gourment[opt][targetedButton.charAt(1)])
                    }

                  selecedItems = selecedItems.filter(function( obj ) {
                 return obj.count !==0 
                 });
                     
                 console.log(selecedItems);
                
                  }
        })
    })
    document.querySelectorAll(".Btn_Cart").forEach((item) => {

        item.addEventListener('click', event => {
            var targetedButton = event.target.id;
            var sibling = document.getElementById(targetedButton).nextElementSibling;
            sibling.style.display = 'flex';
            document.getElementById(targetedButton).style.display = 'none';
            var itemC = document.getElementById(targetedButton).nextElementSibling.children[1];
            itemCount = itemC.innerHTML;
            itemCount++;
            itemC.innerHTML = Gourment[opt][targetedButton.charAt(4)].count+1;
            document.getElementById("checkoutCart").innerHTML = ++cartCount; 
            Gourment[opt][targetedButton.charAt(4)].count=Gourment[opt][targetedButton.charAt(4)].count+1;
            if (selecedItems.some(elem => elem.title === Gourment[opt][targetedButton.charAt(4)].title)) {
                
             selecedItems = selecedItems.filter(function( obj ) {
            return obj.title !== Gourment[opt][targetedButton.charAt(4)].title;
             });
                selecedItems.push(Gourment[opt][targetedButton.charAt(4)])
                console.log(selecedItems);

            } else {
                selecedItems.push(Gourment[opt][targetedButton.charAt(4)])
                console.log(selecedItems);
          }
            
        })
    })

};
