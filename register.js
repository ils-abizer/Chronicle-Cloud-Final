


function check_step01_form(e) {
    e.preventDefault();
    let is_ok = validate_form(e);
    if (is_ok) window.location.href = "register2.html";
    return is_ok;
}

function check_step02_form(e) {
    e.preventDefault();
    let is_ok = validate_form(e);
    if (is_ok) window.location.href = "index.html";
    return is_ok;
}

