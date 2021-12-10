let vegetables=[
  /* Defining Arrays named vegetables*/
    {
      "category":"Organic",
      "image":"Beans",
      "title":"Beans" ,
      "old-price":"80",
      "new-price":"60",
      "quantity":"500grms"
    },
    {
        "category":"Organic",
      "image":"Brinjal",
      "title":"Brinjal" ,
      "old-price":"40",
      "new-price":"50",
      "quantity":"100grms"
    },
    {
        "category":"Organic",
      "image":"Broclii",
      "title":"Broclii" ,
      "old-price":"70",
      "new-price":"60",
      "quantity":"300grms"
    },
    {
        "category":"Organic",
      "image":"Carrot",
      "title":"Carrot" ,
      "old-price":"90",
      "new-price":"70",
      "quantity":"400grms"
    },
    {
      "category":"Organic",
    "image":"Ladyf",
    "title":"Ladyf" ,
    "old-price":"90",
    "new-price":"30",
    "quantity":"400grms"
  },
  {
    "category":"Organic",
  "image":"Raddish",
  "title":"Raddish" ,
  "old-price":"50",
  "new-price":"70",
  "quantity":"400grms"
},
{
  "category":"Organic",
"image":"Spinach",
"title":"Spinach" ,
"old-price":"90",
"new-price":"70",
"quantity":"400grms"
},
{
  "category":"Organic",
"image":"Tomato",
"title":"Tomato" ,
"old-price":"90",
"new-price":"70",
"quantity":"200grms"
},

  ]
  
 function loded()/*defining the function loaded*/
    {
    
      vegetables.forEach((obj,index)=>{
        console.log(obj);
       
         
        let html= `
        <div id="${index}" class="p-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div class="card">
                  <div class="box-content p-2">
                  <div class="top-left">Organic</div>
            <center>  <img class="img" src="./images1/${obj.image}.jpg" height="80px" width="110px"></center> /*displays image*/
                 <p style="display:"inline",float:"left"">${obj.title}</p>
                 <table class="table table-borderless ">
                 <tr>
                 <td style="text-align:"right;"">  <p style="text-align:end;"><span class="strike" style="text-align:"right;"">₹${obj["old-price"]}</span></p></td>
                 <td> <p  ><strong>₹${obj["new-price"]}</strong></p></td>
                 </tr>
                 </table>
               
                 
                 <p  style="display:"inline",text-align:"left";">${obj.quantity}</p>
                 <button class="Btn_Cart" onclick=Cliq()>Add To Cart</button>
                 </div>
                 </div>
              </div>`
           document.querySelector('.container').insertAdjacentHTML('afterbegin', html);/* retrieve the selector class code called as .container*/

   
      })
    }
   
    // <div class="row">
    //     <div class="column">
    //       <div class="card">
    //           <div class="top-left">Organic</div>
    //           <!--images container-->
    //         <center><img src="/images1/Beans.jpg"height="80px" width="150px;"><center>
    //         <p class="title_item">Broclii-Florets</p><!--title of the image-->
    //         <p><span class="strike">₹40</span>₹23</p>
    //         <p class="title_item">Approx 500grams</p>
    //         <button class="Btn_Cart" onclick="Cliq()">Add To Cart</button><!--cart button-->
            
    //       </div>
    //       </div>