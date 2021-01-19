var bomb = [],gameStatus=true,points=0;
function startGame()
{
    document.getElementById("gameScore").innerHTML = `Game Score: ${points}`;
    for(let i=0;i<10;i++)
    {
        let randVar = Math.floor(Math.random()*81)+1;
        if(!bomb.includes(randVar))
        {
            bomb[i] = randVar;
        }
        else
            i--;
    }
}


function game(event)
{
    if(gameStatus)
        {
            let curr_id = event.target.id;
            curr_id = Number(curr_id.substr(5));
            if(!bomb.includes(curr_id))
            {
                if(event.target.style.backgroundColor!="green")
                {
                    points++;
                    event.target.style.backgroundColor = "green";
                    document.getElementById("gameScore").innerHTML = `Game Score: ${points}`;
                }
                if(points==71)
                {
                    document.getElementById("resultDisplay").innerHTML = "Congratulation!&nbspYou&nbspWon";
                    document.getElementById("resultDisplay").style.marginLeft = "40%";
                    document.getElementById("resultDisplay").style.color = "fuchsia";
                    gameStatus=false;
                }
            }
            else
            {
                document.getElementById("resultDisplay").innerHTML = "Game&nbsp;Over";
                document.getElementById("resultDisplay").style.marginLeft = "43.5%";
                document.getElementById("resultDisplay").style.color = "red";
                for(let p=0;p<10;p++)
                {
                    document.getElementById(`cell_${bomb[p]}`).style.backgroundImage = "url('https://img.icons8.com/emoji/48/000000/bomb-emoji.png')";
                    document.getElementById(`cell_${bomb[p]}`).style.backgroundSize = "50px";
                    document.getElementById(`cell_${bomb[p]}`).style.backgroundColor = "red";
                }
                gameStatus=false;
            }
        }
}

function resetGame()
{
    document.getElementById("gameScore").innerHTML = "";
    document.getElementById("resultDisplay").innerHTML = "";
    for(let i=1;i<=81;i++)
    {
        document.getElementById(`cell_${i}`).style.backgroundColor = "aqua";
        document.getElementById(`cell_${i}`).style.backgroundImage = "none";
    }
    gameStatus=true;
    points=0;
    startGame();
}