document.addEventListener("DOMContentLoaded", function () {
    const irishFlag = document.getElementById("irishFlag");
    const dutchFlag = document.getElementById("dutchFlag");
    const irishTimer = document.getElementById("irishTimer");
    const dutchTimer = document.getElementById("dutchTimer");

    let irishInterval;
    let dutchInterval;

    irishFlag.addEventListener("click", function () {
        toggleFlag(irishFlag, irishTimer, irishInterval);
    });

    dutchFlag.addEventListener("click", function () {
        toggleFlag(dutchFlag, dutchTimer, dutchInterval);
    });

    function toggleFlag(flag, timer, interval) {
        if (flag.classList.contains("red-border")) {
            flag.classList.remove("red-border");
            timer.style.display = "none";
            clearInterval(interval);
        } else {
            flag.classList.add("red-border");
            timer.style.display = "block";
            let startTime = Date.now();
            interval = setInterval(() =&gt; {
                let elapsedTime = Date.now() - startTime;
                timer.textContent = formatTime(elapsedTime);
            }, 1000);
        }
    }

    function formatTime(ms) {
        let seconds = Math.floor(ms / 1000);
        let minutes = Math.floor(seconds / 60);
        seconds = seconds % 60;
        return `${minutes}m ${seconds}s`;
    }
});
