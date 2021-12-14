let vegetables = [
    /* Defining Arrays named vegetables*/
    {
        "category": "Organic",
        "image": "Beans",
        "title": "Beans",
        "old-price": "80",
        "new-price": "60",
        "quantity": "500grms"
    },
    {
        "category": "Organic",
        "image": "Brinjal",
        "title": "Brinjal",
        "old-price": "40",
        "new-price": "50",
        "quantity": "100grms"
    },
    {
        "category": "Organic",
        "image": "Broclii",
        "title": "Broclii",
        "old-price": "70",
        "new-price": "60",
        "quantity": "300grms"
    },
    {
        "category": "Organic",
        "image": "Carrot",
        "title": "Carrot",
        "old-price": "90",
        "new-price": "70",
        "quantity": "400grms"
    },
    {
        "category": "Organic",
        "image": "Ladyf",
        "title": "Ladyf",
        "old-price": "90",
        "new-price": "30",
        "quantity": "400grms"
    },
    {
        "category": "Organic",
        "image": "Raddish",
        "title": "Raddish",
        "old-price": "50",
        "new-price": "70",
        "quantity": "400grms"
    },
    {
        "category": "Organic",
        "image": "Spinach",
        "title": "Spinach",
        "old-price": "90",
        "new-price": "70",
        "quantity": "400grms"
    },
    {
        "category": "Organic",
        "image": "Tomato",
        "title": "Tomato",
        "old-price": "90",
        "new-price": "70",
        "quantity": "200grms"
    },

]
let Leafy_green=[
    /* Defining Arrays named Leafy_green*/

    {
      "category":"Organic",
      "image":"Baby Butterhead lettuce",
      "title":"Baby Butterhead lettuce" ,
      "old-price":"80",
      "new-price":"60",
      "quantity":"500grms"
    },
    {
        "category":"Organic",
      "image":"Rocket(Arugula)",
      "title":"Rocket(Arugula)" ,
      "old-price":"30",
      "new-price":"50",
      "quantity":"100grms"
    },
    {
        "category":"Organic",
      "image":"curry Leavs",
      "title":"Broclii" ,
      "old-price":"20",
      "new-price":"40",
      "quantity":"100grms"
    },
    {
        "category":"Organic",
      "image":"mint",
      "title":"mint" ,
      "old-price":"40",
      "new-price":"50",
      "quantity":"100grms"
    },
    {
      "category":"Organic",
    "image":"Rocket(Arugula)",
    "title":"Rocket(Arugula)" ,
    "old-price":"60",
    "new-price":"30",
    "quantity":"200grms"
    },

] 
let Freshlycut=[
     /* Defining Arrays named Freshlycut*/
    {
      "category":"Organic",
      "image":"broccolifloret",
      "title":"broccolifloret" ,
      "old-price":"100",
      "new-price":"30",
      "quantity":"100grms"
    },
    {
        "category":"Organic",
      "image":"cabbagegreenshred",
      "title":"cabbagegreensshred" ,
      "old-price":"100",
      "new-price":"30",
      "quantity":"100grms"
    },
    {
        "category":"Organic",
      "image":"cauliflowerfloret",
      "title":"cauliflowerfloret" ,
      "old-price":"20",
      "new-price":"40",
      "quantity":"100grms"
    },
    {
        "category":"Organic",
      "image":"garlicpeel",
      "title":"Garlicpeel" ,
      "old-price":"40",
      "new-price":"50",
      "quantity":"200grms"
    },
    {
      "category":"Organic",
    "image":"greenpeaspeeled",
    "title":"greenpeaspeeled" ,
    "old-price":"60",
    "new-price":"30",
    "quantity":"50grms"
  },
  {
      "category":"Organic",
    "image":"pineapple-peeled & sliced",
    "title":"pineapple-peeled & sliced" ,
    "old-price":"70",
    "new-price":"100",
    "quantity":"70grms"
  },
              ]           
  let Dry_Fruits=[
       /* Defining Arrays named Dry_Fruits*/
    {
      "category":"Organic",
      "image":"cashewsclassic",
      "title":"cashewclassic" ,
      "old-price":"300",
      "new-price":"400",
      "quantity":"100grms"
    },
    {
        "category":"Organic",
      "image":"Classic Almond-California",
      "title":"Classic Almond-California" ,
      "old-price":"200",
      "new-price":"350",
      "quantity":"100grms"
    },
    {
        "category":"Organic",
      "image":"pumpkinseeds",
      "title":"Pumpkinseed" ,
      "old-price":"100",
      "new-price":"120",
      "quantity":"50grms"
    },
    {
        "category":"Organic",
      "image":"raisinsblack",
      "title":"raisinsblack" ,
      "old-price":"40",
      "new-price":"50",
      "quantity":"200grms"
    },
    {
      "category":"Organic",
    "image":"walnut",
    "title":"greenpeaspeeled" ,
    "old-price":"60",
    "new-price":"30",
    "quantity":"50grms"
  },
  
  ]


let itemCount = 0; 
function loded()
{  
     vegetables.forEach((obj,index)=>{
       console.log(obj);
 
        
       let html= `
       <div id="${index}" class="p-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12" >
       <div class="card">
                 <div class="box-content" >
                 <div class="top-left">Organic</div>
           <center>  <img class="img" src="./images1/${obj.image}.jpg" height="80px" width="130px"></center>
                <p style="display:"inline",float:"left"">${obj.title}</p>
                <table class="table table-borderless ">
                <tr>
                <td style="text-align:"right;""><p style="text-align:end;"><span class="strike" style="text-align:"right;"">₹${obj["old-price"]}</span></p></td>
                <td> <p  ><strong>₹${obj["new-price"]}</strong></p></td>
                </tr>
                </table>    
                <p  style="display:"inline",text-align:"left";">${obj.quantity}</p>
                                      
                           <button class="Btn_Cart" id="Btn-${index}">Add To Cart</button>
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
                itemCount++;
                itemC.innerHTML = itemCount;
                console.log(itemCount);
                document.getElementById("retr").innerHTML=itemCount;

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
                console.log(itemCount);
                document.getElementById("retr").innerHTML=itemCount;
                

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
            itemC.innerHTML = itemCount;
            console.log(1);
            document.getElementById("retr").innerHTML=1;


            
        })
    })
             };
function loded_leafy()
   {  
    Leafy_green.forEach((obj,index)=>{
       console.log(obj);     
       let html= `
       <div id="${index}" class="p-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12" >
       <div class="card">
                 <div class="box-content" >
                 <div class="top-left">Organic</div>
           <center>  <img class="img" src="./LEAFY_GREENS/${obj.image}.jpg" height="80px" width="130px"></center>
                <p style="display:"inline",float:"left"">${obj.title}</p>
                <table class="table table-borderless ">
                <tr>
                <td style="text-align:"right;""><p style="text-align:end;"><span class="strike" style="text-align:"right;"">₹${obj["old-price"]}</span></p></td>
                <td> <p  ><strong>₹${obj["new-price"]}</strong></p></td>
                </tr>
                </table>    
                <p  style="display:"inline",text-align:"left";">${obj.quantity}</p>
                                      
                           <button class="Btn_Cart" id="Btn-${index}">Add To Cart</button>
                           <div id="post_addToCardDiv" style="display:none;">
                               <div id="-${index}" class="plus_minus_btn">-</div>
                               <div id="{itemCount-${index}}">0</div>
                               <div id="+${index}" class="plus_minus_btn">+</div>
                           </div>
                                      
                </div>
                </div>
             </div>`
         
          document.querySelector('.container').insertAdjacentHTML('afterbegin', html);
     })


   
    document.querySelectorAll(".plus_minus_btn").forEach((item) => {
        item.addEventListener('click', event => {
            var targetedButton = event.target.id;
            
            
            if (targetedButton.charAt(0) == "+") {
                var itemC = document.getElementById(targetedButton).previousElementSibling;
                itemCount = itemC.innerHTML;
                itemCount++;
                itemC.innerHTML = itemCount;
                console.log(itemCount);
                document.getElementById("retr").innerHTML=itemCount;

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
                console.log(itemCount);
                document.getElementById("retr").innerHTML=itemCount;
                

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
            itemC.innerHTML = itemCount;
            console.log(1);
            document.getElementById("retr").innerHTML=1;


            
        })
    })
    
             };
function loded_DryFruits()
             {  
                Dry_Fruits.forEach((obj,index)=>{
                 console.log(obj);
           
                  
                 let html= `
                 <div id="${index}" class="p-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12" >
                 <div class="card">
                           <div class="box-content" >
                           <div class="top-left">Organic</div>
                     <center>  <img class="img" src="./Dry_Fruits/${obj.image}.jpg" height="80px" width="130px"></center>
                          <p style="display:"inline",float:"left"">${obj.title}</p>
                          <table class="table table-borderless ">
                          <tr>
                          <td style="text-align:"right;""><p style="text-align:end;"><span class="strike" style="text-align:"right;"">₹${obj["old-price"]}</span></p></td>
                          <td> <p  ><strong>₹${obj["new-price"]}</strong></p></td>
                          </tr>
                          </table>    
                          <p  style="display:"inline",text-align:"left";">${obj.quantity}</p>
                                                
                                     <button class="Btn_Cart" id="Btn-${index}">Add To Cart</button>
                                     <div id="post_addToCardDiv" style="display:none;">
                                         <div id="-${index}" class="plus_minus_btn">-</div>
                                         <div id="{itemCount-${index}}">0</div>
                                         <div id="+${index}" class="plus_minus_btn">+</div>
                                     </div>
                                                
                          </div>
                          </div>
                       </div>`
                   
                    document.querySelector('.container').insertAdjacentHTML('afterbegin', html);
               })
          
          
             
              document.querySelectorAll(".plus_minus_btn").forEach((item) => {
                  item.addEventListener('click', event => {
                      var targetedButton = event.target.id;
                      
                      
                      if (targetedButton.charAt(0) == "+") {
                          var itemC = document.getElementById(targetedButton).previousElementSibling;
                          itemCount = itemC.innerHTML;
                          itemCount++;
                          itemC.innerHTML = itemCount;
                          console.log(itemCount);
                          document.getElementById("retr").innerHTML=itemCount;
          
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
                          console.log(itemCount);
                          document.getElementById("retr").innerHTML=itemCount;
                          
          
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
                      itemC.innerHTML = itemCount;
                      console.log(1);
                      document.getElementById("retr").innerHTML=1;
          
          
                      
                  })
              })
              
                       };
function loded_Freshly_cut()
                       {  
                        Freshlycut.forEach((obj,index)=>{
                           console.log(obj);
                     
                            
                           let html= `
                           <div id="${index}" class="p-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12" >
                           <div class="card">
                                     <div class="box-content" >
                                     <div class="top-left">Organic</div>
                               <center>  <img class="img" src="./FRESHLYCUT/${obj.image}.jpg" height="80px" width="130px"></center>
                                    <p style="display:"inline",float:"left"">${obj.title}</p>
                                    <table class="table table-borderless ">
                                    <tr>
                                    <td style="text-align:"right;""><p style="text-align:end;"><span class="strike" style="text-align:"right;"">₹${obj["old-price"]}</span></p></td>
                                    <td> <p  ><strong>₹${obj["new-price"]}</strong></p></td>
                                    </tr>
                                    </table>    
                                    <p  style="display:"inline",text-align:"left";">${obj.quantity}</p>
                                                          
                                               <button class="Btn_Cart" id="Btn-${index}">Add To Cart</button>
                                               <div id="post_addToCardDiv" style="display:none;">
                                                   <div id="-${index}" class="plus_minus_btn">-</div>
                                                   <div id="{itemCount-${index}}">0</div>
                                                   <div id="+${index}" class="plus_minus_btn">+</div>
                                               </div>
                                                          
                                    </div>
                                    </div>
                                 </div>`
                             
                              document.querySelector('.container').insertAdjacentHTML('afterbegin', html);
                         })
                    
                    
                       
                        document.querySelectorAll(".plus_minus_btn").forEach((item) => {
                            item.addEventListener('click', event => {
                                var targetedButton = event.target.id;
                                
                                
                                if (targetedButton.charAt(0) == "+") {
                                    var itemC = document.getElementById(targetedButton).previousElementSibling;
                                    itemCount = itemC.innerHTML;
                                    itemCount++;
                                    itemC.innerHTML = itemCount;
                                    console.log(itemCount);
                                    document.getElementById("retr").innerHTML=itemCount;
                    
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
                                    console.log(itemCount);
                                    document.getElementById("retr").innerHTML=itemCount;
                                    
                    
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
                                itemC.innerHTML = itemCount;
                                console.log(1);
                                document.getElementById("retr").innerHTML=1;
                    
                    
                                
                            })
                        })
                        
                                 };