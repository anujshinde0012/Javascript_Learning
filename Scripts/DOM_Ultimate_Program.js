    // *-------YouTube Button Project-------*
        function subscribe() {
            const b1 = document.querySelector('.subscribe-button');
            if (b1.innerText === 'Subscribe') {
                b1.innerHTML = 'Subscribed';
                b1.classList.add('isSubscribed');
            }
            else {
                b1.innerHTML = 'Subscribe';
                b1.classList.remove('isSubscribed');
            }
        }

        // *-------Amazon Bill Calculation Project-------*
        function calculate() {
            const element = document.querySelector(".userInput");
            let cost = Number(element.value);

            if (cost < 40) {
                cost += 10;
            }

            document.querySelector(".totalCost")
                .innerHTML = `${cost}`;
        }

        // *-------Rock Paper Scissors Project-------*
        const score = {
            wins: 0,
            losses: 0,
            tie: 0
        };

        let move23 = '';
        let move2 = '';
        let move1 = '';

        function newScore() {
            document.querySelector(".newScore")
                .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.tie}`;
        }


        function scissors() {
            const num23 = Math.random();


            if (num23 >= 0 && num23 < 1 / 3) {
                move23 = 'rock';
            }
            else if (num23 >= 1 / 3 && num23 < 2 / 3) {
                move23 = 'paper';
            }
            else if (num23 >= 2 / 3 && num23 < 1) {
                move23 = 'scissors';
            }
            console.log(move23);

            let result23 = '';
            if (move23 == 'rock') {
                result23 = 'You lost.';
            }
            else if (move23 == 'paper') {
                result23 = 'You win.';
            }
            else if (move23 == 'scissors') {
                result23 = 'Tie.';
            }

            if (result23 === 'You win.') {
                score.wins += 1;
            }
            else if (result23 === 'You lost.') {
                score.losses += 1;
            }
            else if (result23 === 'Tie.') {
                score.tie += 1;
            }

            newScore();

            document.querySelector(".result")
                .innerHTML = result23;

            document.querySelector(".moves")
                .innerHTML = `You scissors - ${move23} Computer`
        }

        function paper() {
            const num2 = Math.random();


            if (num2 >= 0 && num2 < 1 / 3) {
                move2 = 'rock';
            }
            else if (num2 >= 1 / 3 && num2 < 2 / 3) {
                move2 = 'paper';
            }
            else if (num2 >= 2 / 3 && num2 < 1) {
                move2 = 'scissors';
            }
            console.log(move2);

            let result2 = '';
            if (move2 == 'rock') {
                result2 = 'You win.';
            }
            else if (move2 == 'paper') {
                result2 = 'Tie.';
            }
            else if (move2 == 'scissors') {
                result2 = 'You lost.';
            }

            if (result2 === 'You win.') {
                score.wins += 1;
            }
            else if (result2 === 'You lost.') {
                score.losses += 1;
            }
            else if (result2 === 'Tie.') {
                score.tie += 1;
            }

            newScore();

            document.querySelector(".result")
                .innerHTML = result2;

            document.querySelector(".moves")
                .innerHTML = `You paper - ${move2} Computer`
        }

        function Rock() {
            const num1 = Math.random();

            if (num1 >= 0 && num1 < 1 / 3) {
                move1 = 'rock';
            }
            else if (num1 >= 1 / 3 && num1 < 2 / 3) {
                move1 = 'paper';
            }
            else if (num1 >= 2 / 3 && num1 < 1) {
                move1 = 'scissors';
            }
            console.log(move1);

            let result1 = '';
            if (move1 == 'rock') {
                result1 = 'Tie.';
            }
            else if (move1 == 'paper') {
                result1 = 'You lost.';
            }
            else if (move1 == 'scissors') {
                result1 = 'You win.';
            }

            if (result1 === 'You win.') {
                score.wins += 1;
            }
            else if (result1 === 'You lost.') {
                score.losses += 1;
            }
            else if (result1 === 'Tie.') {
                score.tie += 1;
            }

            newScore();

            document.querySelector(".result")
                .innerHTML = result1;

            document.querySelector(".moves")
                .innerHTML = `You rock - ${move1} Computer`
        }
        newScore();
