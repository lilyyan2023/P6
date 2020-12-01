function validateForm(){
    var fname = document.getElementById("fname").value;
    if (fname == ""){
        text_f = "First Name is required."
    }
    document.getElementById("fname_alert").innerHTML = text_f;
    var lname = document.getElementById("lname").value;
    if (lname == ""){
        text_l = "Last Name is required."
    }
    document.getElementById("lname_alert").innerHTML = text_l;
    var email = document.getElementById("email_add").value;
    if (email == ""){
        text_e = "Email Address is required, so I can reach you :)."
    }
    document.getElementById("email_alert").innerHTML = text_e;
    var comments = document.getElementById("comments").value;
    if (comments == ""){
        text_c = "Message is required, so I can know why you want to reach me :)."
    }
    document.getElementById("comments_alert").innerHTML = text_c;
    if (fname == "" || lname == "" || email == "" || comments == ""){
        document.getElementById("submit_alert").innerHTML = "Please resubmit"
    }
}