const p1={
    score:0,
    Btn:document.querySelector('#p1Button'),
    display:document.querySelector('#p1Display'),
}

const p2={
    score:0,
    Btn:document.querySelector('#p2Button'),
    display:document.querySelector('#p2Display'),
}

const reset= document.querySelector('#reset');
const playTo=document.querySelector('#playto');
let winningScore= 3;
let gameOver=false;
 
function updateScore(player, opponent){
    if(!gameOver){
        player.score++;
        if(player.score===winningScore){
            gameOver=true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.Btn.disabled=true
            opponent.Btn.disabled=true
        }
        player.display.innerText = player.score;
        }
}

p1.Btn.addEventListener('click', function () {
     updateScore(p1,p2)   
})

p2.Btn.addEventListener('click', function () {
    updateScore(p2,p1)
})

playTo.addEventListener('click',function(){
    winningScore=parseInt(this.value);
    Reset();
})

reset.addEventListener('click',Reset)
function Reset(){
    gameOver=false;
    for(p of [p1,p2]){
        p.score=0;
        p.display.innerText=0;
    p.display.classList.remove('has-text-success','has-text-danger');
    p.Btn.disabled=false
    }
}