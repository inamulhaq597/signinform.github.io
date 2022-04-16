function newheare() {


    document.getElementById("rigbutton").style = "display: none;"
    document.getElementById("btntext").style = "display: none;"
    document.getElementById("rigesterform").style = "display: block;"
    document.getElementById("signform").style = "display: none;"
}

// register
var data = []
function register(e) {
    e.preventDefault()

    alert("hello")

    var regname = document.getElementById("reginput1").value;
    var regpassword = document.getElementById("reginput2").value;



    var a = {

        registername: regname,
        registerpassword: regpassword,
    }

    data.push(a);

    localStorage.setItem("registerdata", JSON.stringify(data))
    console.log(a)

}


// sign in form

function signin() {

    var signname = document.getElementById("signinput1").value;
    var signpassword = document.getElementById("signinput2").value;
    var signdata = localStorage.getItem("registerdata");
    console.log(JSON.parse(signdata));
    var localstoragedata = (JSON.parse(signdata));
    for (i = 0; i <= localstoragedata.length - 1; i++) {

        if (signname == localstoragedata[i].registername && signpassword == localstoragedata[i].registerpassword) {
            alert("login ")
        }
        else {
            alert("not found")
        }
    }




}














