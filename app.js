/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var currentScore,dice,totalScore,activePlayer,isPlaying;
init();
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(isPlaying){
        dice =Math.floor(Math.random()*6)+1;
        var diceImage=document.querySelector('.dice');
        diceImage.style.display='block';
        diceImage.src='dice-'+dice+'.png';
    
        if(dice !== 1){
            currentScore+=dice;
            document.getElementById('current-'+activePlayer).textContent=currentScore;
        }else{
            currentScore=0;
            newPlayer();
        }    
    }
    

});

function newPlayer(){
    if(isPlaying){
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    
        totalScore[activePlayer]+=currentScore;
        document.getElementById('score-'+activePlayer).textContent=totalScore[activePlayer];
        document.getElementById('current-'+activePlayer).textContent='0';
        if(totalScore[activePlayer]>=100){
            document.querySelector('.final-score').textContent='67';
            document.querySelector('.dice').style.display='none';
            document.getElementById('name-'+activePlayer).textContent='winner';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            isPlaying=false;
        }else{
        currentScore=0;
        if(activePlayer===0){
            activePlayer=1;
        }else{
            activePlayer=0;
        }
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
    }
}
    
}
if(isPlaying){
    console.log(isPlaying);
    document.querySelector('.btn-hold').addEventListener('click',newPlayer);
}
document.querySelector('.btn-new').addEventListener('click',function(){
    
    init();
});


function init(){
    
    totalScore=[0,0];
    currentScore=0;
    activePlayer=0;
    isPlaying=true;
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='player 2';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.querySelector('.dice').style.display='none';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
