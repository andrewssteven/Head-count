// DOM, link my html to jsscript

let countEl = document.querySelector('h2');
let button = document.querySelector('button');
let btn2 = document.querySelector('.d-btn');
let saveBtn = document.getElementById('save-btn');
let savedEl = document.getElementById('saved-count') 

let count = 0
// functional logic of the inccrement button
button.onclick = function(){
    count += 1
    countEl.innerText = count
}

// functional logic of the decrement button
btn2.onclick = function(){
    if(count > 0){
        count -= 1
        countEl.innerText = count
    }
}

// functionality of the save button
saveBtn.onclick = function (){
    console.log("saved", count);
    savedEl.innerText += " " + count + " -"
    count = 0
    countEl.innerText = count
}
