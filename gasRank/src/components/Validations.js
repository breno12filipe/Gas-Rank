/*
 * Function used to validate an email according the regex below and convert it to 
 * lower case. by HeadMaster
 */
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/*
 * at least one number, one lowercase and one uppercase letter
 * at least six characters. by HeadMaster
 *
 * In case user password input does not match with the mentioned validation
 * react native must render something as a popup with the following message:
 * 'Your password must have at least one number, one lowercase and one 
 * uppercase letter and at least six characters'. by HeadMaster
 */
function validatePassword(psw){
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    return re.test(psw);
}

/*
 * Check if json is in the correct template
 * {
 *  "eml": "userEmail",
 *  "psw": "userPassword"
 * }
 */
function validateJson(json){
    function checkValidJson(validJson){
        const myJSON = JSON.stringify(validJson);
        try {
            JSON.parse(myJSON);
            return true;
        } catch (e) {
            return false;
        }
    }
    
    if ("eml" in json && "psw" in json && checkValidJson(json)){
        return true
    }else{
        return false
    }
}

module.exports  = { validateEmail, validatePassword }