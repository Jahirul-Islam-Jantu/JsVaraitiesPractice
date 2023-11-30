const clbtn = document.querySelector("#clickButton");
const inp = document.querySelector("#inputName");
const mail = document.querySelector("#inputEmail");

const formValues = {
    name:"",
    email:"",
}


function onChangeNameHandler (event){
    formValues.name = event.target.value;
}

function onChangeMailHandler (event){
    formValues.email = event.target.value;
}

function buttonClickHandler (){
    confirm(`Are You Sure To Confirm?

Name: ${formValues.name} 
E-mail: ${formValues.email}

Press "Ok" To Confirm.`);
}


inp.addEventListener("keyup", onChangeNameHandler);
mail.addEventListener("keyup", onChangeMailHandler);
clbtn.addEventListener('click', buttonClickHandler );