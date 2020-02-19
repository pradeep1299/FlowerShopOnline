function validatemakepayment(){
    var cardNumber = (document.getElementById("txtCardnumber").value).length;
    var securityCode = (document.getElementById("txtcode").value).length;
    var name = (document.getElementById("txtname").value).length;
    var address = (document.getElementById("txtaddress1").value).length;
    var city = (document.getElementById("txtcity").value).length;
    var postcode = (document.getElementById("txtpincode").value).length;
    var emailId = (document.getElementById("txtemail").value).length;

    if(cardNumber>0&&securityCode>0&&name>0&&address>0&&city>0&&postcode>0&&emailId>0&&txtmonth.selectedIndex>0&&txtyear.selectedIndex>0&&txtcountry.selectedIndex>0){
        window.alert("Payment Successfully!!!!");
        window.location = "https://i.stack.imgur.com/YbIni.png"
    }
    else{
        validateCardNumber();
        validateSecurityCode();
        validateName();
        validateAddress1();
        validateCity();
        validatePostCode();
        validateEmail();
        validateExpiryDate();
        validateCountry();
    }
}
function validateCardNumber(){
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    if (document.getElementById("txtCardnumber").value.trim()=="") {
        document.getElementById("requiredCardNumber").style.display="inline";
        document.getElementById("lblCardNumber").style.display="none";
        return false;
    }
    else if(!document.getElementById("txtCardnumber").value.match(regex)){
        document.getElementById("requiredCardNumber").style.display="none";
        document.getElementById("lblCardNumber").style.display="inline";
        return false;
    }
    else{
        document.getElementById("lblCardNumber").style.display="none";
        document.getElementById("requiredCardNumber").style.display="none";
    }
}
function validateSecurityCode(){
    var regex1 = /^[0-9]{3}$/;
    if (document.getElementById("txtcode").value.trim()=="") {
        document.getElementById("requiredCode").style.display="inline";
        document.getElementById("lblCode").style.display="none";
        return false;
    }
    else if (!document.getElementById("txtcode").value.match(regex1)) {
        document.getElementById("requiredCode").style.display="none";
        document.getElementById("lblCode").style.display="inline";
        return false;
    }
    else{
        document.getElementById("lblCode").style.display="none";
        document.getElementById("requiredCode").style.display="none";
    }
}

function validateExpiryDate(){
    var x = document.getElementById("txtmonth").selectedIndex;
    var y = document.getElementById("txtyear").selectedIndex;
    if ((x == "") || (y == "")) {
        document.getElementById("lblExpiryDate").style.display="inline";
        return false;
    }
    else{
        document.getElementById("lblExpiryDate").style.display="none";
    }
}
function validateName(){
    var x = document.getElementById("txtname").value;
    var regex2 = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (x.trim()=="") {
        document.getElementById("requiredName").style.display="inline";
        document.getElementById("lblName").style.display="none";
        return false;
    }
    else if (!x.match(regex2)) {
        document.getElementById("lblName").style.display="inline";
        document.getElementById("requiredName").style.display="none";
        return false;
    }
    else{
        document.getElementById("lblName").style.display="none";
        document.getElementById("requiredName").style.display="none";
    }
}
function validateAddress1(){
    var regex4 = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    if (document.getElementById("txtaddress1").value.trim()=="") {
        document.getElementById("lblAddress1").style.display="none";
        document.getElementById("requiredAddress1").style.display="inline";
        return false;
    }
    else if (!document.getElementById("txtaddress1").value.match(regex4)) {
        document.getElementById("lblAddress1").style.display="inline";
        document.getElementById("requiredAddress1").style.display="none";
        return false;
    }

    else{
        document.getElementById("lblAddress1").style.display="none";
        document.getElementById("requiredAddress1").style.display="none";
    }
}
function validateAddress2(){
    var regex4 = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    if (document.getElementById("txtaddress2").value.trim()=="") {
        document.getElementById("lblAddress2").style.display="none";
    }
    else if (!document.getElementById("txtaddress2").value.match(regex4)) {
        document.getElementById("lblAddress2").style.display="inline";
        return false;
    }
    else{
        document.getElementById("lblAddress2").style.display="none";
    }
}
function validateAddress3(){
    var regex4 = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    if (document.getElementById("txtaddress3").value.trim()=="") {
        document.getElementById("lblAddress3").style.display="none";
    }
    else if (!document.getElementById("txtaddress3").value.match(regex4)) {
        document.getElementById("lblAddress3").style.display="inline";
        return false;
    }
    else{
        document.getElementById("lblAddress3").style.display="none";
    }
}
function validateCity(){
    var regex8 = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (document.getElementById("txtcity").value.trim()=="") {
        document.getElementById("lblCity").style.display="none";
       document.getElementById("requiredCity").style.display="inline";
       return false;
    }
    else if (!document.getElementById("txtcity").value.match(regex8)) {
       document.getElementById("lblCity").style.display="inline";
       document.getElementById("requiredCity").style.display="none";
       return false;
    }
    else{
        document.getElementById("lblCity").style.display="none";
        document.getElementById("requiredCity").style.display="none";
    }
}
function validateRegion(){
    var regex8 = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
     if (document.getElementById("txtregion").value.trim()=="") {
       document.getElementById("lblRegion").style.display="none";
    }
    else if (!document.getElementById("txtregion").value.match(regex8)) {
       document.getElementById("lblRegion").style.display="inline";
       return false;
    }
    else{
        document.getElementById("lblRegion").style.display="none";
    }
}
function validatePostCode(){
    var regex3 = /^(\d{4}|\d{6})$/;
    if (document.getElementById("txtpincode").value.trim()=="") {
        document.getElementById("lblPostcode").style.display="none";
        document.getElementById("requiredPostcode").style.display="inline";
        return false;
    }
    else if (!document.getElementById("txtpincode").value.match(regex3)) {
        document.getElementById("lblPostcode").style.display="inline";
        return false;
        document.getElementById("requiredPostcode").style.display="none";
    }
    else{
        document.getElementById("lblPostcode").style.display="none";
        document.getElementById("requiredPostcode").style.display="none";
    }
}
function validateCountry(){
    var x = document.getElementById("txtcountry").selectedIndex;
    if (x == "") {
        document.getElementById("lblCountry").style.display="inline";
        return false;
    }
    else{
        document.getElementById("lblCountry").style.display="none";
    }
}
function validateTelephone(){
    var regex5 = /^[7-9][0-9]{9}$/;
    if (document.getElementById("txtphone").value.trim()=="") {
        document.getElementById("lblTelephone").style.display="none";
    }
    else if (!document.getElementById("txtphone").value.match(regex5)) {
        document.getElementById("lblTelephone").style.display="inline";
        return false;
    }
    else{
        document.getElementById("lblTelephone").style.display="none";
    }
}
function validateFax(){
    var regex7 = /[\+? *[1-9]+]?[0-9 ]+/;
    if (document.getElementById("txtfax").value.trim()=="") {
       document.getElementById("lblFax").style.display="none";
    }
    else if (!document.getElementById("txtfax").value.match(regex7)) {
       document.getElementById("lblFax").style.display="inline";
       return false;
    }
    else{
        document.getElementById("lblFax").style.display="none";
    }
}
function validateEmail(){
    var regex6 = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (document.getElementById("txtemail").value.trim()=="") {
        document.getElementById("lblEmailId").style.display="none";
        document.getElementById("requiredEmailId").style.display="inline";
        return false;
    }
    else if (!document.getElementById("txtemail").value.match(regex6)) {
        document.getElementById("lblEmailId").style.display="inline";
        document.getElementById("requiredEmailId").style.display="none";
        return false;
    }
    else{
        document.getElementById("lblEmailId").style.display="none";
        document.getElementById("requiredEmailId").style.display="none";
    }
}
function Cancelbtn() {
    window.alert('Page is Cancel and Redirect to Google Thank you for Visit');
}
function Refreshbtn() {
    window.alert('Page can be Reloaded');
}