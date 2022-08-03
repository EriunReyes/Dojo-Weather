console.log("page loaded")
function weather() {
    alert('loading weather report...')
}

let policy = document.querySelector("#cookieblock");
function cookies() {
    policy.remove();
}



function celcTofarhen() {
    let temp1 = document.querySelectorAll(".temp1" )
let temp2 = document.querySelectorAll(".temp2" )
    temp1.forEach(function (t1) {
        if(document.getElementById ("box").value=="f") {
            t1.innerHTML = (t1.innerHTML) * 9/5 + 32
        }  else if (document.getElementById ("box").value=="c") {
            location.reload()
        }
    }) 
    temp2.forEach (function (t2) {
        if(document.getElementById ("box").value=="f") {
            t2.innerHTML =  (t2.innerHTML) * 9/5 + 32
        }  else if (document.getElementById ("box").value=="c") {
            location.reload()
        }
    })
}
