'use strict';

let score=20;
let highScore=0;
let secretNumber=Math.trunc(Math.random()*20 + 1);



document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);



    if(!guess)
    {

        document.querySelector('.message').textContent=`\u{1F6D1} No Number`;

    }else if(guess > 20)
    {
        
        document.querySelector('.message').textContent=`\u{1F610} Put the number in the Range (1-20)`;

        document.querySelector('body').style.backgroundColor='#ff0000';

     
        const clearGuess=document.querySelector('.guess');

        clearGuess.value="";

        document.querySelector('.score').textContent=20;

    }else if(guess === secretNumber)
    {

        document.querySelector('.message').textContent=`\u{1F38A} Correct Number`;

        document.querySelector('.number').textContent=secretNumber;

        document.querySelector('body').style.backgroundColor='#60b347';

        document.querySelector(".number").style.width='30rem';

        if(score > highScore)
        {
            highScore=score

            document.querySelector('.highscore').textContent=highScore;

        }
     

    }else if(guess !== secretNumber)
    {
    
        if(score > 1){

            document.querySelector('.message').textContent=guess > secretNumber ? `\u{1F4C8} Too High` : `\u{1F4C8} Too Low`;
            score--;
            document.querySelector('.score').textContent=score;

        }else
        {

            document.querySelector('.message').textContent=`\u{1F614} You Lost The Game`;
            document.querySelector('.score').textContent=0;
            document.querySelector('body').style.backgroundColor='#ff0000';

        }
    
    }
    
});

document.querySelector('.again').addEventListener('click',function(){

    score=20;
    secretNumber=Math.trunc(Math.random()*20 + 1);

    document.querySelector('.message').textContent="Start Guessing ...";

    document.querySelector('.score').textContent=score;

    document.querySelector('.guess').value="";

    document.querySelector('body').style.backgroundColor='#222';

    document.querySelector(".number").style.width='15rem';

    document.querySelector(".number").textContent='?';

});

