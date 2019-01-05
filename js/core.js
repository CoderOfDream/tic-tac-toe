particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

for(let i = 0; i < 9; i++) {
        document.getElementById('game').innerHTML += '<div class="block"></div>';
    }
function soloGame() {
    
    
    let step = 0;
    document.getElementById('hod').innerHTML = 'step player X';
    document.getElementById('game').onclick = function(event) {
    console.log(event);
    
    while(true){
        if(event.target.className == 'block') {
            if(step % 2 == 0){
                document.getElementById('hod').innerHTML = 'step player X';
                if(event.target.innerHTML == '0'){
                    break;
                } else {
                    event.target.innerHTML = 'X';
                }
            } else {
                document.getElementById('hod').innerHTML = 'step player 0';
                if(event.target.innerHTML == 'X'){
                    break;
                } else {
                    event.target.innerHTML = '0';
                }
            }
            step++;
            check(); 
        }
    }
}

let check = () => {
    let allBlock = document.getElementsByClassName('block');
    // console.log(allBlock);
    //Крестики
    if(allBlock[0].innerHTML == 'X' && allBlock[1].innerHTML == 'X' && allBlock[2].innerHTML == 'X') alert('X win');
    if(allBlock[3].innerHTML == 'X' && allBlock[4].innerHTML == 'X' && allBlock[5].innerHTML == 'X') alert('X win');
    if(allBlock[6].innerHTML == 'X' && allBlock[7].innerHTML == 'X' && allBlock[8].innerHTML == 'X') alert('X win');
    
    if(allBlock[0].innerHTML == 'X' && allBlock[3].innerHTML == 'X' && allBlock[6].innerHTML == 'X') alert('X win');
    if(allBlock[1].innerHTML == 'X' && allBlock[4].innerHTML == 'X' && allBlock[7].innerHTML == 'X') alert('X win');
    if(allBlock[2].innerHTML == 'X' && allBlock[5].innerHTML == 'X' && allBlock[8].innerHTML == 'X') alert('X win');
    
    if(allBlock[0].innerHTML == 'X' && allBlock[4].innerHTML == 'X' && allBlock[8].innerHTML == 'X') alert('X win');
    if(allBlock[2].innerHTML == 'X' && allBlock[4].innerHTML == 'X' && allBlock[6].innerHTML == 'X') alert('X win');


    if(allBlock[0].innerHTML == '0' && allBlock[1].innerHTML == '0' && allBlock[2].innerHTML == '0') alert('0 win');
    if(allBlock[3].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[5].innerHTML == '0') alert('0 win');
    if(allBlock[6].innerHTML == '0' && allBlock[7].innerHTML == '0' && allBlock[8].innerHTML == '0') alert('0 win');
    
    if(allBlock[0].innerHTML == '0' && allBlock[3].innerHTML == '0' && allBlock[6].innerHTML == '0') alert('0 win');
    if(allBlock[1].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[7].innerHTML == '0') alert('0 win');
    if(allBlock[2].innerHTML == '0' && allBlock[5].innerHTML == '0' && allBlock[8].innerHTML == '0') alert('0 win');
    
    if(allBlock[0].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[8].innerHTML == '0') alert('0 win');
    if(allBlock[2].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[6].innerHTML == '0') alert('0 win');
}
}


let bot = () => {

    let step = 0;
    document.getElementById('hod').innerHTML = 'step player X';
    document.getElementById('game').onclick = function(event) {
    
    while(true){
        if(event.target.className == 'block') {
            if(step % 2 == 0){
                document.getElementById('hod').innerHTML = 'step player X';
                if(event.target.innerHTML == '0'){
                    break;
                } else {
                    event.target.innerHTML = 'X';
                }
            } else {
                let allBlock = document.getElementsByClassName('block');
                let rand = Math.floor(Math.random() * 10);
                for(let i = 0; i < allBlock.length; i++) {
                    console.log(allBlock[i]);
                    if(allBlock[rand].innerHTML == '0' ||  allBlock[rand].innerHTML == 'X'){
                        step++;
                    } else {
                        allBlock[rand].innerHTML = '0';
                    }
                }
                if(event.target.innerHTML == '0'){
                    break;
                } else {
                    event.target.innerHTML = 'X';
                    break;
                }
            }
            step++;
            check(); 
        }
    }
}

let check = () => {
    let allBlock = document.getElementsByClassName('block');
    // console.log(allBlock);
    //Крестики
    if(allBlock[0].innerHTML == 'X' && allBlock[1].innerHTML == 'X' && allBlock[2].innerHTML == 'X') alert('X win');
    if(allBlock[3].innerHTML == 'X' && allBlock[4].innerHTML == 'X' && allBlock[5].innerHTML == 'X') alert('X win');
    if(allBlock[6].innerHTML == 'X' && allBlock[7].innerHTML == 'X' && allBlock[8].innerHTML == 'X') alert('X win');
    
    if(allBlock[0].innerHTML == 'X' && allBlock[3].innerHTML == 'X' && allBlock[6].innerHTML == 'X') alert('X win');
    if(allBlock[1].innerHTML == 'X' && allBlock[4].innerHTML == 'X' && allBlock[7].innerHTML == 'X') alert('X win');
    if(allBlock[2].innerHTML == 'X' && allBlock[5].innerHTML == 'X' && allBlock[8].innerHTML == 'X') alert('X win');
    
    if(allBlock[0].innerHTML == 'X' && allBlock[4].innerHTML == 'X' && allBlock[8].innerHTML == 'X') alert('X win');
    if(allBlock[2].innerHTML == 'X' && allBlock[4].innerHTML == 'X' && allBlock[6].innerHTML == 'X') alert('X win');


    if(allBlock[0].innerHTML == '0' && allBlock[1].innerHTML == '0' && allBlock[2].innerHTML == '0') alert('0 win');
    if(allBlock[3].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[5].innerHTML == '0') alert('0 win');
    if(allBlock[6].innerHTML == '0' && allBlock[7].innerHTML == '0' && allBlock[8].innerHTML == '0') alert('0 win');
    
    if(allBlock[0].innerHTML == '0' && allBlock[3].innerHTML == '0' && allBlock[6].innerHTML == '0') alert('0 win');
    if(allBlock[1].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[7].innerHTML == '0') alert('0 win');
    if(allBlock[2].innerHTML == '0' && allBlock[5].innerHTML == '0' && allBlock[8].innerHTML == '0') alert('0 win');
    
    if(allBlock[0].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[8].innerHTML == '0') alert('0 win');
    if(allBlock[2].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[6].innerHTML == '0') alert('0 win');
}
}















function restart() {
    let allBlock = document.getElementsByClassName('block');
    for(let i = 0; i < allBlock.length; i++) {
        allBlock[i].innerHTML = '';
    }
    step = 0;
    document.getElementById('hod').innerHTML = 'step player X';
} 