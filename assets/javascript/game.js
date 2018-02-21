$(document).ready(function(){

    var crystals = {                                                                    // Object with Crytals
    crys1: 0,
    crys2: 0,
    crys3: 0,
    crys4: 0
    };

    var wins = 0;                                                                       // Wins variable

    var losses = 0;                                                                     // Losses variable

    var numbersTarget = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,// Possible numbers to guess
        35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 
        54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
        73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91,
        92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 
        109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];

    var numbersCrys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];                          // Possible crytal values

    var runTotal = 0;                                                                   // Running total (your score)

    var cNumber = numbersTarget[Math.floor(Math.random() * numbersTarget.length)];      // Generates random number to guess
    $("#currNum").html(cNumber);                                                        // Push to HTML (inital value)

    $("#score").html(runTotal);                                                         // Push the running total to the HTML
    
    $("#wins").html("Wins: " + wins);                                                   // Push 0 to HTML wins (initial value)
    
    $("#losses").html("Losses: " + losses);                                             // Push 0 to HTML losses (initial value)
    
    function cry() {                                                                    // Function to generate random numbers for crystals
        crys1 = numbersCrys[Math.floor(Math.random() * numbersCrys.length)];            // Random number for crytal 1

        crys2 = numbersCrys[Math.floor(Math.random() * numbersCrys.length)];            // Random number for crystal 2, must not match crystal 1
        for (i = 0; crys2 === crys1; i++) {     
        crys2 = numbersCrys[Math.floor(Math.random() * numbersCrys.length)];
        }
        crys3 = numbersCrys[Math.floor(Math.random() * numbersCrys.length)];            // Random number for crystal 3, must not match crystals 1 or 2
        for (j = 0; crys3 === crys1 || crys3 === crys2; j++) {                             
        crys3 = numbersCrys[Math.floor(Math.random() * numbersCrys.length)];
        }
        crys4 = numbersCrys[Math.floor(Math.random() * numbersCrys.length)];            // Random number for crystal 4, must not match crystals 1, 2, or 3
        for (k = 0; crys4 === crys1 || crys4 === crys2 || crys4 === crys3; k++) {         
        crys4 = numbersCrys[Math.floor(Math.random() * numbersCrys.length)];
        }
    };

    cry();                                                                              // Invoking the function to generate cyrstal values

    function resetg() {                                                                 // Function to reset the game after win or loss
        runTotal = 0;                                                                   // Resets the running total to 0
        $("#score").html(runTotal);                                                     // Pushes the running total to the HTML
        cry();                                                                          // Calls the function to generate new random numbers for the crystals
        cNumber = numbersTarget[Math.floor(Math.random() * numbersTarget.length)];      // Generates new random number to guess
        $("#currNum").html(cNumber);                                                    // Pushes the new random number to the HTML
    };

    function status() {                                                                 // Function to check for win/loss
        if (runTotal === cNumber) {                                                     // If Win condition (running total equals current number)
            wins++;                                                                     // Increment the wins variable by one
        $("#wins").html("Wins: " + wins);                                               // Push wins to the HTML
        resetg();                                                                       // Call the reset game function
        } else if (runTotal > cNumber) {                                                // Else If Lose condition (running total is greater than current number)
        losses++;                                                                       // Increment losses variable by one
        $("#losses").html("Losses: " + losses);                                         // Push losses to the HTML
        resetg();                                                                       // Call the reset game function
        } else {                                                                        // Else - if neither conditions are true
        $("#score").html(runTotal);                                                     // Push the new running total to the HTML
        }
    }

    $(".crys1").on("click", function() {                                                // If you click on crystal 1
        runTotal = runTotal + crys1;                                                    // Add the current value of crystal 1 to the running total
        status();                                                                       // Call the status function to check the status of the game
    })

    $(".crys2").on("click", function() {                                                // If you click on crystal 2  
        runTotal = runTotal + crys2;                                                    // Add the current value of crystal 2 to the running total
        status();                                                                       // Call the status function to check the status of the game
    })

    $(".crys3").on("click", function() {                                                // If you click on crystal 3
        runTotal = runTotal + crys3;                                                    // Add the current value of crystal 3 to the running total
        status();                                                                       // Call the status function to check the status of the game
    })

    $(".crys4").on("click", function() {                                                // If you click on crystal 4
        runTotal = runTotal + crys4;                                                    // Add the current value of crystal 4 to the running total
        status();                                                                       // Call the status function to check the status of the game

    })
})



