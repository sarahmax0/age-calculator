let dd = document.getElementById("DD");
let mm = document.getElementById("MM");
let yyyy = document.getElementById("YYYY");
let btn = document.getElementById("inputBtn");
let dayinvalid = document.getElementById("invalidday")
let monthinvalid = document.getElementById("invalidmonth")
let yearinvalid = document.getElementById("invalidyear")

btn.addEventListener("click", function() {

    let day = dd.value 
    let month = mm.value 
    let year = yyyy.value 


    if (day > 31) {
        dayinvalid.innerHTML = "Must be a valid day"
    } else {
        console.log("")
    }
    if (month > 12) {
        monthinvalid.innerHTML = "Must be a valid month"
    } else {
        console.log("")
    }
    if (year > 2024) {
        yearinvalid.innerHTML = "Must be a valid year"
    } else {
        console.log("")
    }
});

    //let day = dd.value 
    //let month = mm.value
    //let year = yyyy.value
    

