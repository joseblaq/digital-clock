let T = document.querySelector(".time");
let D = document.querySelector(".date");


// writing date fuction Date()
// first we need to call the funtion mutip;e time by the help of setInterval()
// setInterval takes in a function and a time as a paremeter ...

setInterval(() => {
    let today = new Date();
    let h = today.getHours(); // this is getting hours from the date function 0--12 or 0--24
    let m = today.getMinutes(); // getting minutes from date function 0---59
    let s = today.getSeconds(); // getting seconds 0--59
    let date = today.toDateString(); //getting current date from date function 

    if (h < 10) {
        h = " 0 " + h;
    }


    if (m < 10) {
        m = " 0 " + m;
    }

    if (s < 10) {
        s = " 0 " + s;
    }
    //  concatinating all the variable using litteral  back ticks ( `` )
    //using innerText to display text in the browser 
    // u can also use innerHTML, innerContent.....

    // T.innerText = `${h} : ${m} : ${s}`;
    T.innerText = `${pad(h)} : ${pad(m)} : ${pad(s)}`;
    D.innerText = date;
}, 1000);

//this function help toconcat the curren string with another string 
// we are using padstart()
function pad(n) {
    return n.toString().padStart(2, " 0 ");
}