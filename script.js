 /*
  * Title: Guessing game using vanila js dom
  * Description: This js file has all the js dom necessary to control the guessing game 
  * Author: Mohammad Nurullah
  * Date: 14-08-21
  *
  */

'use strict';

//document.querySelector('.number').textContent = '12';
//document.querySelector('.message').textContent;
// document.querySelector('.score').textContent;


let secretNumber = Math.trunc(Math.random() * 20 ) + 1;
//document.querySelector('.number').textContent = secretNumber;
let scroe = 20;
let highScore = 0;

//---Function---//
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

//---Handling click events---//
document.querySelector('.check').addEventListener('click', function(){

    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //---when there is no number---//
    if(!guess){
        //document.querySelector('.message').textContent = '⛔ No number!';

        //---when calling a function---//
        displayMessage('⛔ No number!');
    }

    //---when player wins---//
    else if(guess === secretNumber){
        
       // document.querySelector('.message').textContent = '🎉 Correct number!';
        displayMessage('🎉 Correct number!');
        document.querySelector('.number').textContent = secretNumber;

        //---when change bg color---//
         document.querySelector('body').style.backgroundColor = '#60b347';
         document.querySelector('.number').style.width = '14rem';
         document.querySelector('.guess').style.backgroundColor = '#60b347';

         //---when work high score---//
         if(scroe > highScore){
             highScore = scroe;
             
         }
         document.querySelector('.highscore').textContent = highScore;
         
        
    }

    //when guess is wrong
    else if(guess !== secretNumber){

        if(scroe > 1){

            //document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High' : '📈 Too High!';

            //---when calling a function---//
            displayMessage( guess > secretNumber ? '📈 Too High' : '📉 Too Low!');
            scroe--;
            document.querySelector('.score').textContent = scroe;
    
            }
            else{

                //document.querySelector('.message').textContent = '💥 You lost the game!';

                //---when calling a function---//
                displayMessage('💥 You lost the game!')
                document.querySelector('.score').textContent = 0;
            }

    }

    //when guess is too heigh
    // else if(guess > secretNumber){

    //      if(scroe > 1){

    //     document.querySelector('.message').textContent = '📈 Too High!';
    //     scroe--;
    //     document.querySelector('.score').textContent = scroe;

    //     }
    //     else{
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
        
    // }

    // //when guess is too low
    // else if(guess < secretNumber){

    //      if(scroe > 1){

    //     document.querySelector('.message').textContent = '📉 Too Low!';
    //     scroe--;
    //     document.querySelector('.score').textContent = scroe;

    //     }
    //     else{
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     } 
    // }

});

//---when use again button---//
document.querySelector('.again').addEventListener('click', function(){

    secretNumber = Math.trunc(Math.random() * 20 ) + 1;
    scroe = 20;
    document.querySelector('.score').textContent = scroe;
    //document.querySelector('.message').textContent = 'Start Guessing...';

    //---when calling a function---//
    displayMessage('Start Guessing...');

    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    //---when change bg color---//
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '10rem';
    document.querySelector('.guess').style.backgroundColor = '#222';
    
});
