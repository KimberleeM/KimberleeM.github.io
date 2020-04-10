var name;
var errormessage = document.getElementById("Thisaintitchief");

function majinBuu(){
    name = document.getElementById("name").value;
    if (name == "") {
        errormessage.style.display = "block";
        // alert("Yeah this ain't it, chief");
        return false;
    }
    return false;
}

