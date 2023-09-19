let email="";

function setGlobalEmail(newEmail){
    email=newEmail;
}

function getGlobalEmail(){
    return email;
}

export { setGlobalEmail, getGlobalEmail };