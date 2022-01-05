class FormValidation{
    formValues = {
        username : "",
        email : "",
        phonenumber : "",
        password : ""
    }
    errorValues = {
        usernameErr : "",
        emailErr : "",
        phonenumberErr : "",
        passwordErr : ""
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
        this.formValues.username = document.getElementById('username').value.trim()
        this.formValues.email = document.getElementById('email').value.trim()
        this.formValues.phonenumber = document.getElementById('phonenumber').value.trim()
        this.formValues.password = document.getElementById('password').value.trim()
    }
    validateUsername(){
        if(this.formValues.username === ""){
            this.errorValues.usernameErr = "* Please Enter Your Name"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        } else if(this.formValues.username.length <= 4 ){
            this.errorValues.usernameErr = "* Username must be atleast 5 Characters"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        } else if(this.formValues.username.length > 14){
            this.errorValues.usernameErr = "* Username should not exceeds 14 Characters"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        } else {
            this.errorValues.usernameErr = ""
            this.showSuccessMsg(0)
        }
    }
    validateEmail(){
        //abc@gmail.co.in
        const regExp = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
        if(this.formValues.email === ""){
            this.errorValues.emailErr = "* Please Enter Valid Email"
            this.showErrorMsg(1,this.errorValues.emailErr)
        } else if(!(regExp.test(this.formValues.email))){
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
    validatePassword(){
        if(this.formValues.password === ""){
            this.errorValues.passwordErr = "* Please Provide a Password"
            this.showErrorMsg(3,this.errorValues.passwordErr)
        } else if(this.formValues.password.length <= 4){
            this.errorValues.passwordErr = "* Password must be atleast 5 Characters"
            this.showErrorMsg(3,this.errorValues.passwordErr)
        } else if(this.formValues.password.length > 10){
            this.errorValues.passwordErr = "* Password should not exceeds 10 Characters"
            this.showErrorMsg(3,this.errorValues.passwordErr)
        } else {
            this.errorValues.passwordErr = ""
            this.showSuccessMsg(3)
        }
    }
    alertMessage(){
        const {usernameErr , emailErr , phonenumberErr , passwordErr , confirmpasswordErr}= this.errorValues
        if(usernameErr === "" && emailErr === "" && phonenumberErr === "" && passwordErr === ""){
            swal("UserDetails Successful","ThankYou , "+this.formValues.username,"success").then(() => {
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
    ValidateUserInputs.validateUsername()
    ValidateUserInputs.validateEmail()
    ValidateUserInputs.validatePhonenumber()
    ValidateUserInputs.validatePassword()
    ValidateUserInputs.alertMessage()
})

