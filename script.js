// change top payer color
const topPlayerColor= document.getElementById('top-player-color');
topPlayerColor.style.color= 'tomato';

//top blog and latest courses color change
const textColor = document.querySelectorAll('.text-color');
for(const colors of textColor){
    colors.style.color='red'; 
}

// player div color
const divColor = document.querySelectorAll('.player');
for(const divs of divColor){
    divs.style.background = 'rgba(100, 148, 114, 0.5)';
}
// creating li in ul
function createList(number){
        let li = document.createElement("li");
        let liText = document.createTextNode('list4');
        li.appendChild(liText);
        let addLi = document.getElementById('ul-list');
        addLi.appendChild(li);  
}

//taking input from button
document.getElementById('input-plus').addEventListener('click',
function(){
    // const btnInput = getElementById('input-number');
    // const inputNum = btnInput.value;
    // const inputAdd = parseInt(inputNum)+1;
    // btnInput.value = inputAdd;
    let btnInput = getElementById('input-number');
    let inputNum = btnInput.value;
    let inputAdd = parseInt(inputNum)+1;
    btnInput.value = inputAdd;
});

// function numAdd(){
//    /* const btnInput = getElementById('input-number');
//     let inputNum = btnInput.value;
//      inputNum = parseInt(inputNum)+1;
//     btnInput.value = inputNum;*/
//     let count =0;
//     for(let i =0;i<5;i++){
//         count = count+1;
//     }
// }


