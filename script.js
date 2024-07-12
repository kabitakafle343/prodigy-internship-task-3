let btn=document.getElementById('restart');
let player1=document.getElementById('player1');
let player2=document.getElementById('player2');
let cell=document.querySelectorAll('.cell');






let currentplayer='X';
let nextplayer=0;
let playerturn=currentplayer;


let startGame=()=>{
    cell.forEach(cell=>{
        cell.addEventListener('click',(e)=>{

if(cell.textContent===''){
    cell.textContent=playerturn;

    if(playerWin()){
        alert(`player ${playerturn} has won`)
    }
  
}

playerTurnCheck();
reStart();
            

        })
    })
}

let playerTurnCheck=()=>{
    if(playerturn==currentplayer){
        playerturn=nextplayer;
    }else{
        playerturn=currentplayer;
    }
}


let playerWin=()=>{
    let winCases=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [1,4,7],
        [6,4,2]
    ]

for(let i=0;i<winCases.length;i++){
  let [pos1,pos2,pos3]=winCases[i];

  if(cell[pos1].textContent!=='' && cell[pos1].textContent===cell[pos2].textContent && cell[pos2].textContent===cell[pos3].textContent)
    {
        return true;
    }

}
return false;



}



let reStart=()=>{
   btn.addEventListener('click',()=>{

    cell.forEach(cell=>{
  cell.textContent=''
    })
  
   })
}

reStart();
startGame()