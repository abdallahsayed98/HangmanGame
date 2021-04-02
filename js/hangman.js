class HangMan {
    constructor(word) {
        this.word = word.toLowerCase().split('');
        this.constWord=word.toLowerCase().split('');
        this.empty = new Array(word.length);
        this.imgIndex=0;
        this.word.forEach((char, index) => {
            this.empty[index] = '-'
        });
        console.log(this.word);
        this.remainingGuses = word.length + 3
        this.score = 0
        this.gameStatus = 'playing'
    }
    makeGuess(c) {
        if (this.gameStatus == 'playing') {
            let l1 = this.word.length
            this.word = this.word.filter(w => {
                return w != c
            })
            let l2 = this.word.length
            if (l1 == l2) {
                this.remainingGuses -= 1;
                this.imgIndex+=1;
                if (this.remainingGuses == 0) this.gameStatus = "loser"
            }
            else {
                this.constWord.forEach((char,index)=>{
                    if(this.constWord[index]===c){
                        this.empty[index]=c
                    }
                })
                this.score += (l1 - l2)
                if (this.word.length == 0) this.gameStatus = "win"
            }

            /*let isExist= this.word.find(char => char === c)
            if(isExist){
                this.word.forEach((char,index)=>{
                    if(this.word[index]===c){
                        this.empty[index]=c
                        this.score+=1
                        //this.word.splice(index,1);
                    }
                })
                if(!this.empty.find(char => char ==='-'))
                {
                    this.gameStatus="win"
                }
            }
            else{
                this.remainingGuses-=1
                if(this.remainingGuses==0)
                {
                    this.gameStatus="loser"
                }
            }*/
        }
    }
}