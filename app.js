const startBtn = document.querySelector(".start"), 
 stopBtn = document.querySelector(".stop"),
 resetBtn = document.querySelector(".reset");

 startBtn.addEventListener("click", start);
 stopBtn.addEventListener("click", stop);
 resetBtn.addEventListener("click", reset)


 let hr = min = sec = ms = 0,
 startTimer;

 function start() {
    startBtn.classList.add("active");
    stopBtn.classList.remove("stopactive");
    resetBtn.classList.remove("stopActive");

    startTimer = setInterval(() => {
        ms++
        ms = ms < 10 ? "0" + ms : ms;

        if(ms == 100){
            sec++;
            ms  = "0" + 0;
        }
        if(sec == 60){
            min++;
            sec  = "0" + 0;
        }

        putValue();

    },10); //1000ms = 1s
 }

 function stop() {
    startBtn.classList.remove("active");
    stopBtn.classList.add("stopactive");
 }

 function reset() {
    startBtn.classList.remove("active")
    stopBtn.classList.remove("stopactive")
 }

 function putValue() {
    document.querySelector(".millisecond").innerText = ms;
    document.querySelector(".second").innerText = sec;
    document.querySelector(".minute").innerText = min;
 }