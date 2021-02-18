function validate(formObj) {
    // put your validation code here
    // it will be a series of if statements
 
    var validation = "";
    
    if (formObj.menu_name.value == "") {
       validation += "You must enter a menu name \n";
       formObj.menu_name.focus();      
    }
    
    if (formObj.menu_desc.value == "") {
       validation += "You must enter the description \n";
       formObj.menu_desc.focus();
    }
 
    if (formObj.menu_url.value == "") {
       validation += "You must enter folder path \n";
       formObj.menu_url.focus();
    }
    
    
    if (validation != "") {
       alert(validation);
       formObj.menu_name.focus();
       return false;
    } 
    else{
       alert("Form is successfully submitted");
       return true;
    }
    
 }