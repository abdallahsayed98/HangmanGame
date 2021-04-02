const app=()=>{
    getApiWord((data,err)=>{
        if(err) console.log(err)
        else{
            word = document.querySelector('#word')
            img=document.querySelector('#img')
            score=document.querySelector('#score');
            remain=document.querySelector('#remain');
            stat=document.querySelector('#stat');
            console.log(status.element);
            user = new HangMan(data);
            remain.innerText=8;
            score.innerText=0;
            img.src='./img/hang.jpg';
            img.alt="Game"
            stat.innerText=user.gameStatus;
            word.innerHTML = `<h4> ${user.empty} </h4>`
            //console.log(h1)
            window.addEventListener('keypress', (e)=>{
                console.log(e.key)
                user.makeGuess(e.key)
                if(user.imgIndex>0){
                    img.src=`./img/${user.imgIndex}.png`
                }
                remain.innerText=user.remainingGuses;
                score.innerText=user.score;
                stat.innerText=user.gameStatus;
                //console.log(h1)
                word.innerHTML = `<h4> ${user.empty} </h4>`
            })
    }
    })
}

app();

document.querySelector("#newGame").addEventListener("click",function(){
    app();
})

