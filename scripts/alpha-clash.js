// function play (){
//     // console.log('play start now');
//     // hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     // show the play ground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
//     // console.log(playGround.classList);
// }


function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    // const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, currentAlphabet);

    // check matched or not
    if(playerPressed === currentAlphabet){
        console.log('you get a point');
        // console.log('you have pressed correctly', currentAlphabet);
        // console.log(currentAlphabet);

        const currentScore = getTextElementValueById('current-score');
        const UpdatedScore = currentScore + 1;
        setTextElementValueById('current-score', UpdatedScore)



        // ---------------------------------------------------------
        // update score:
        // step-1: get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScoreText);


        // // step-2: increase the score by 1
        // const newScore = currentScore + 1;


        // // step-3: show the update score
        // currentScoreElement.innerText = newScore;



        // start a new round
        removeBackgroundColorById(currentAlphabet)
        continueGame();
    }
    else{
        console.log('you missed. you lost a life');
        // step-1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // step-2: reduce the life count
        // const newLife = currentLife - 1;

        // // step-3: display the updated life count
        // currentLifeElement.innerText = newLife;
    }
}


document.addEventListener('keyup', handleKeyboardKeyUpEvent);


function handleKeyboardButtonPress(){
    console.log('button pressed');
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log("your random alphabet",alphabet);

    // set randomly generated alphabet to the screen(show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);

}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}