function login() {
    var a = document.getElementById("exampleInputEmail1").value;
    var b = document.getElementById("exampleInputPassword1").value;

    if (a == "" && b == "") {

        alert("Login Failed");
    }

    else {
        alert("Login in Successfully")
    }
}

