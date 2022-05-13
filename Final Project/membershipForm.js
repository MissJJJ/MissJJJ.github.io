function doClear()
{
    document.membershipForm.fName.value = "";
    document.membershipForm.lName.value = "";
    document.membershipForm.custAddress.value = "";
    document.membershipForm.custCity.value = "";
    document.membershipForm.custState.value = "";
    document.membershipForm.custZip.value = "";
    document.membershipForm.custPhone.value = "";
    document.membershipForm.custEmail.value = "";
    return;
}

function doSubmit() 
{
    var firstname = document.getElementById("fName").value;
    if (validateText() == false)
    {
        alert("Please complete this form except the one that says optional!");
        return;
    }
    alert("Welcome, " + firstname + "!");
    return;
}

function validateText()
{
    var fName = document.membershipForm.fName.value;
    if(fName.length == 0) return false;
    var lName = document.membershipForm.lName.value;
    if(lName.length == 0) return false;
    var custAddress = document.membershipForm.custAddress.value;
    if(custAddress.length == 0) return false;
    var custCity = document.membershipForm.custCity.value;
    if(custCity.length == 0) return false;
    var custState = document.membershipForm.custState.value;
    if(custState.length == 0) return false;
    var custZip = document.membershipForm.custZip.value;
    if(custZip.length == 0) return false;
    var custPhone = document.membershipForm.custPhone.value;
    if(custPhone.length == 0) return false;
    var custEmail = document.membershipForm.custEmail.value;
    if(custEmail.length == 0) return false;

    return true;
}