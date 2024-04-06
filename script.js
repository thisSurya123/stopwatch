let second = 0;
let msecond = 0;
let board = document.getElementById('timer');





var control ={
    start : function(){
        if(this.interval>=1){
             
            console.log(this.interval);
            clearTimeout();
        }
        else{
            this.interval = setInterval(run,10);
        }
    },
    stop : function(){
        const pause = clearInterval(this.interval);
        this.interval = 0;
    },
    reset: function(){
        second = 0;
        msecond = 0;
        clearInterval(this.interval);
        board.innerHTML = "";
        board.innerHTML = "000:00";
    }

}

function run(){
    msecond += 1;
    
    board.innerHTML = second +':' +msecond;
    if(msecond > 100){
        second += 1;
        msecond = 0;
    }
    if(board.innerText == "999:99"){
       control.stop();
    }
}