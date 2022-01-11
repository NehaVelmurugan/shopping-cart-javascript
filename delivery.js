class FormValidation{
    formValues = {
        name : "",
        email : "",
        phonenumber : "",
        Address: ""
    }
    errorValues = {
        nameErr : "",
        emailErr : "",
        phonenumberErr : "",
        AddressErr : ""
    }
    showErrorMsg(index,msg){
        const form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.add('error')
        form_group.getElementsByTagName('span')[0].textContent = msg   
    }
    showSuccessMsg(index){
        const form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.remove('error')
        form_group.classList.add('success')
    }
    getInputs(){
        this.formValues.name = document.getElementById('name').value
        this.formValues.email = document.getElementById('email').value.trim()
        this.formValues.phonenumber = document.getElementById('phonenumber').value.trim()
        this.formValues.Address = document.getElementById('Address').value
    }
    validatename(){
        if(this.formValues.name === ""){
            this.errorValues.nameErr = "* Please Enter Your Name"
            this.showErrorMsg(0,this.errorValues.nameErr)
        } else if(this.formValues.name.length <= 2 ){
            this.errorValues.nameErr = "* name must be atleast 2 Characters"
            this.showErrorMsg(0,this.errorValues.nameErr)
        } else if(this.formValues.name.length > 14){
            this.errorValues.nameErr = "* name should not exceeds 14 Characters"
            this.showErrorMsg(0,this.errorValues.nameErr)
        } else {
            this.errorValues.nameErr = ""
            this.showSuccessMsg(0)
        }
    }
    
    validateEmail(){
        //abc@gmail.co.in
        const regExp = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
        //compares datatype and value
        if(this.formValues.email === ""){
            this.errorValues.emailErr = "* Please Enter Valid Email"
            this.showErrorMsg(1,this.errorValues.emailErr)
        }//test is used for matching a pattern and value
        else if (!(regExp.test(this.formValues.email))) {
            this.errorValues.emailErr = "* Invalid Email"
            this.showErrorMsg(1,this.errorValues.emailErr)
        } else {
            this.errorValues.emailErr = ""
            this.showSuccessMsg(1)
        }
    }
    validatePhonenumber(){
       const phoneno = /^\d{10}$/
       if(this.formValues.phonenumber === ""){
           this.errorValues.phonenumberErr = "* Please Enter your Phone Number"
           this.showErrorMsg(2,this.errorValues.phonenumberErr)
       } else if(phoneno.test(this.formValues.phonenumber)){
           this.errorValues.phonenumberErr = ""
           this.showSuccessMsg(2)
       } else {
           this.errorValues.phonenumberErr = "* Invalid Phone Number"
           this.showErrorMsg(2,this.errorValues.phonenumberErr)
       }
    }
    validateAddress(){
        if(this.formValues.Address === ""){
            this.errorValues.AddressErr = "* Please Provide a Addresss"
            this.showErrorMsg(3,this.errorValues.AddressErr)
        } else if(this.formValues.Address.length <= 2){
            this.errorValues.AddressErr = "* address  2 characters  mandatory"
            this.showErrorMsg(3,this.errorValues.AddressErr)
        } else if(this.formValues.Address.length > 50){
            this.errorValues.AddressErr = "* Address should not exceeds 50 Characters"
            this.showErrorMsg(3,this.errorValues.AddressErr)
        } else {
            this.errorValues.AddressErr = ""
            this.showSuccessMsg(3)
        }
    }
    alertMessage(){
        const {nameErr , emailErr , phonenumberErr , AddressErr}= this.errorValues
        if(nameErr === "" && emailErr === "" && phonenumberErr === "" && AddressErr === ""){
            swal("User Details Successful","ThankYou , "+this.formValues.name,"success").then(() => {
                console.log(this.formValues)
                this.removeInputs()
            })
        } else {
            swal("Give Valid Inputs","Click ok to Continue" ,"error")
        }
    }

    removeInputs(){
        const form_groups = document.getElementsByClassName('form-group')
        Array.from(form_groups).forEach(element => {
            element.getElementsByTagName('input')[0].value = ""
            element.getElementsByTagName('span')[0].textContent = ""
            element.classList.remove('success')
        })
    }
} 

const ValidateUserInputs = new FormValidation()

document.getElementsByClassName('form')[0].addEventListener('submit' , event => {
    event.preventDefault()
    ValidateUserInputs.getInputs()
    ValidateUserInputs.validatename()
    ValidateUserInputs.validateEmail()
    ValidateUserInputs.validatePhonenumber()
    ValidateUserInputs.validateAddress()
    ValidateUserInputs.alertMessage()
})

function Activate() {
    let Name = document.getElementById("name").value;
    let emailId = document.getElementById("email").value;
    let Phonno = document.getElementById("phonenumber").value;
    let Address = document.getElementById("Address").value;
    if (Name != "" && emailId != "" && Phonno.length !="" && Address != "") {
        document.getElementById("submit").removeAttribute("disabled");
        document.getElementById("submit").style.backgroundColor=" #6e8e4b";
    }
    else {
         document.getElementById("submit").style.backgroundColor="gray";
    }
    
}


document.getElementById("name").addEventListener('keyup', (event) => {
      event.preventDefault()
    ValidateUserInputs.getInputs()
    ValidateUserInputs.validatename()

})

document.getElementById("email").addEventListener('keyup', (event) => {
      event.preventDefault()
    ValidateUserInputs.getInputs()
    ValidateUserInputs.validateEmail()

})

document.getElementById("phonenumber").addEventListener('keyup', (event) => {
      event.preventDefault()
    ValidateUserInputs.getInputs()
    ValidateUserInputs.validatePhonenumber()

})

document.getElementById("Address").addEventListener('keyup', (event) => {
      event.preventDefault()
    ValidateUserInputs.getInputs()
    ValidateUserInputs.validateAddress()

})

document.getElementById("email").addEventListener('click', (event) => {
      event.preventDefault()
    ValidateUserInputs.getInputs()
    ValidateUserInputs.validateEmail()
     ValidateUserInputs.validatename()

})

document.getElementById("phonenumber").addEventListener('click', (event) => {
      event.preventDefault()
    ValidateUserInputs.getInputs()
    ValidateUserInputs.validatePhonenumber()
    ValidateUserInputs.validatename()
    ValidateUserInputs.validateEmail()

})

document.getElementById("Address").addEventListener('click', (event) => {
      event.preventDefault()
    ValidateUserInputs.getInputs()
    ValidateUserInputs.validateAddress()
     ValidateUserInputs.validatePhonenumber()
    ValidateUserInputs.validatename()
    ValidateUserInputs.validateEmail()

})

// function thankyou() {
//     window.location.href = "thank.html";
// }
function Previous() {
    window.location.href = "delivery.html";
}