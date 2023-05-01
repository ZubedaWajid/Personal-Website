let a;
let b;
let c;

/*
hypotenues calculator
*/
document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);
    
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

    document.getElementById("cLabel").innerHTML= "Side C: " + c;
    
}

/*
Counter program
*/
let count = 0;
document.getElementById("increaseBtn").onclick = function(){
    count+= 1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("decreaseBtn").onclick = function(){
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("resetBtn").onclick = function(){
    document.getElementById("countLabel").innerHTML = 0;
}

/*
Random number generator
*/

let x;

document.getElementById("rollBtn").onclick = function(){
    
let x = Math.floor(Math.random() * 6) + 1;
document.getElementById("rollLabel").innerHTML = x;

};

/*
checked boxes
*/

    const myCheckBox = document.getElementById("myCheckBox")
    const visaBtn = document.getElementById("visaBtn");
    const paypalBtn = document.getElementById("paypalBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
document.getElementById("myBtn").onclick = function(){
    if(myCheckBox.checked){
        console.log("You are Subscribed")
    } 
    else {
        console.log("You are NOT subscribed");
    }

    if(visaBtn.checked){

        console.log("You are paying with VISA.");
    }
    else if(mastercardBtn.checked){

        console.log("You are paying with MasterCard.");
    }
    else if(paypalBtn.checked){
        console.log("You are paying with PayPal.");
    }
    else console.log("No payment method is selected")
}

let username = "Me";
let items = 3;
let total = 75;
let text = `Hello ${username}!<br> 
            You currently have ${items} items in your cart which comes to a total of $${total}<br>`
//console.log(text);
document.getElementById("myText").innerHTML = text;