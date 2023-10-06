const dice = document.getElementById('dice-btn');

function dicegame()
{
    const player1 = Math.floor(Math.random()*6) + 1;
    const image1 = 'images/dice' + player1 + '.png';
    document.querySelectorAll('img')[0].setAttribute('src',image1);
    
    const player2 = Math.floor(Math.random()*6) + 1;
    const image2 = 'images/dice' + player2 + '.png';
    document.querySelectorAll('img')[1].setAttribute('src',image2);    

    if(player1 > player2)
    {
        document.querySelector('h1').innerHTML = 'The Winner is Player 1!';
    }

    else if(player2 > player1)
    {
        document.querySelector('h1').innerHTML = 'The Winner is Player 2!';
    }

    else
    {
        document.querySelector('h1').innerHTML = "Its a draw!";
    }
}