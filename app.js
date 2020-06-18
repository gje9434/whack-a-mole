window.onload = function () {

    document.querySelector("button").addEventListener("click", e => {

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        function updateScore() {
            document.querySelector(".score").textContent = score;
        }

        var score = 0;
        const holes = document.querySelectorAll(".hole");
        const moles = document.querySelectorAll(".mole");
        
        // if mole is moused over, lower it and add 1 to score
        moles.forEach(mole => {
            mole.addEventListener("mouseover", () => {
                score += 1;
                updateScore();
                mole.parentElement.classList.remove("up");
            })
        })

        let moleToRaise = false;
        
        // play function handles the raising and lowering of 1 mole at a time.
        function play() {
            /* seconds variable determines how long the mole stays raised for.
                (any ms value from 0 to 500) */
            let seconds = Math.floor(Math.random()*1000) + 500;
            
            // first IF statement only fires when no moles have been raised yet
            if(moleToRaise == false) {
                moleToRaise = holes[getRandomInt(holes.length-1)];
            
            /* else if current mole hasn't been hovered over, lower it and raise another mole.
                then call play function again */
            } else {
                clearInterval(timer);
                moleToRaise.classList.remove("up");
                moleToRaise = holes[getRandomInt(holes.length-1)];
            }
            moleToRaise.classList.add("up");
            timer = setInterval(play, seconds);
        }
        play();
    })
}