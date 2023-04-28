// const password_ele = document.getElementById("passcode");
function changeEye(e) {
    let state = e.target.getAttribute("data-state");
    if (state == "shown") {
        e.target.src = "../images/closed-eye.png"
        e.target.setAttribute("data-state", "hidden")
        document.getElementById("password").type = "string"
    } else {
        e.target.src = "../images/eye (1).svg"
        e.target.setAttribute("data-state", "shown")
        document.getElementById("password").type = "password"
    }
}

function changeEye2(e) {
    let state = e.target.getAttribute("data-state");
    if (state == "shown") {
        e.target.src = "../images/closed-eye.png"
        e.target.setAttribute("data-state", "hidden")
        document.getElementById("passcode").type = "string"
    } else {
        e.target.src = "../images/eye (1).svg"
        e.target.setAttribute("data-state", "shown")
        document.getElementById("passcode").type = "password"
    }
}



const validation = 
{
    "email" : (email) =>
    {
        let validreg= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
            return {
                is_valid: (email.length>0) && validreg.test(email),
                msg: "*Please enter valid email address"
        } ;
    },
    "password": (password) => {
        // let validatorReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]{6,}$/g;
        let validatorReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/g;
        return {
            "is_valid": password.length && (validatorReg.test(password)),
            "msg": "*Please enter valid password"
        };
    },

    "number": (value) => {
        var contact_number_value = value;
        var regMobile = /^\d{10}$/;
        let is_valid = true;
        if (contact_number_value.length == 0) {
            contact_number_error.style.visibility = "visible";
            is_valid = false;
        }
        if (!contact_number_value.match(regMobile)) {
            contact_number_error.style.visibility = "visible";
            is_valid = false;
        }
        else {
            contact_number_error.style.visibility = "hidden";
        }
        return {
            is_valid: is_valid,
            msg: "*Please Enter Valid Phone Number"
        };
    },
    "confirm-password": (confirm_password) => {
        let validatorReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/g;
        if (!validatorReg.test(confirm_password)){

            return {
                    is_valid: validatorReg.test(confirm_password),
                    msg: "Please Enter Valid password"    
                };
        }
        else {
            return{

                is_valid: (confirm_password == document.getElementById("passcode").value),
                msg: "*Password Does not Match"
            }
        }
        },


    "*": (value) => ({
        is_valid: value.length > 0,
        msg: "*Required",
    }),
};


const check =(key,value) =>
{
    let valid;
    if (validation[key]) {
        valid=validation[key](value);
    }
    else {
        valid=validation["*"](value);

    }
    return valid;

}


const show_error =(form,key,valid,msg) =>
{
    let error_element=document.getElementById(`error-${key}`);
    ele=form.querySelector(`input[name=${key}]`);
    if (valid) {
        ele.style.borderBottom = "";
        error_element.innerHTML = ""
    } else {
        ele.style.borderBottom = "2px solid #FF0000";
        error_element.innerHTML = msg;
    }

}


const showErrorInField = (ele, valid, msg, key) => {
    let error_element = document.getElementById(`error-${key}`);
    let div_element=document.getElementById(`${key}box_id`);
    if (valid) {
        ele.style.borderBottom = "";
        error_element.innerHTML = "";
    } else {
        ele.style.borderBottom = "2px solid #FF0000";
        error_element.style.marginBottom="9px";
        div_element.style.marginBottom="4px";
        error_element.innerHTML = msg;
    }
}


function validate_field(e, form) {
    if (e.key === "Tab") return;
    let ele = e.target;
    let key = ele.name;
    let value = ele.value;
    let { is_valid, msg } = check(key, value);
    showErrorInField(ele, is_valid, msg, key);
    toggleButton(form);
    console.log();
}

function validate_form(e) {
    e.preventDefault();
    let data=new FormData(e.target);
    let is_ok=true;
    data.forEach((value,key) => {
        let { is_valid, msg } = check(key, value);
        is_ok &&= is_valid;
        show_error(e.target, key, is_valid, msg);
        
    });
    return is_ok;
}


function validate_form_by_itself(form) {
    let data = new FormData(form);
    let is_ok = true;
    data.forEach((value, key) => {
        let { is_valid, msg } = check(key, value);
        is_ok &&= is_valid;
    })
    return is_ok;
}



function toggleButton(form) {
    let ele = form.querySelector("button[type='submit']");
    let is_ok = validate_form_by_itself(form);
    ele.disabled = !is_ok;
}