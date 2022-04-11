document.getElementById("main-div").style.display = "none"

let pswrd = prompt("Password?")

let pass = "bandrufthagreat"

if (pswrd == pass) {
    document.getElementById("main-div").style.display = "flex"
    alert("welcome")
} else {
    alert("wrong pass")
}

document.getElementById("Calculate").onclick = function(){
    let bs = Math.floor(Math.random(-1,5) * 10)
    let name = document.getElementById("name-s").value.toLowerCase()
    let removed = name.split(" ").join("");
    console.log(removed)
    document.getElementById("bitches").innerHTML = "Calculating Bitches..."
    setTimeout(() => { 
        if (removed == "tanner" || removed == "tannergist") {
            document.getElementById("bitches").innerHTML = "You Get 1000+ Guys!"
        } else {
            if (bs == 1) {
                document.getElementById("bitches").innerHTML = "You Get "+bs+" Bitch!"  
            } else {
                document.getElementById("bitches").innerHTML = "You Get "+bs+" Bitches!"
            }
        }
    }, 1000);
}
