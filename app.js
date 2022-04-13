// Initialize checkerboard and represent it as a 2-d array
let checkerBoard = [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0]
];
 
let blackPiecesRemaining = 12;
let redPiecesRemaining = 12;

// Keep track of whos turn it is; 1 is black, and 0 is red
let playerTurn = 1;

// For multicapturing 
let canCaptureMultiple;

// Keep track if player is trying to move a piece
let clickedPiece = false;

// Keep track of piece location that player clicked on
let clickedLocation = [null,null];

// Function when clicking on black square when player attempts to move a piece
function selectSquare(element) {

    let clickLocation = element.id;
    let locationRow = clickLocation[0];
    let locationColumn = clickLocation[1];

    // Move piece if player is trying to move
    if(clickedPiece == true) {
        // Figure out if piece is red or black
        oldLocation = document.getElementById("1" + clickedLocation[0] + clickedLocation[1]);
        let colorPiece = oldLocation.style.backgroundColor;

        // Check if player clicked on a valid location
        if((colorPiece == "red" && checkerBoard[locationRow][locationColumn] == 0) && ((parseInt(locationRow)+1 == parseInt(clickedLocation[0]) && (parseInt(locationColumn)+1 == parseInt(clickedLocation[1]) || parseInt(locationColumn)-1 == parseInt(clickedLocation[1]))) || parseInt(locationRow) + 2 == parseInt(clickedLocation[0]) && parseInt(locationColumn)+2 == parseInt(clickedLocation[1]) || parseInt(locationRow) + 2 == parseInt(clickedLocation[0]) && parseInt(locationColumn)-2 == parseInt(clickedLocation[1])) && (playerTurn == 0)) {

            if(locationRow >= 0 && locationRow <= 7 && locationColumn >= 0 && locationColumn <= 7) {
            // check if piece is captured

            if(parseInt(locationRow) + 2 == parseInt(clickedLocation[0]) && parseInt(locationColumn)+2 == parseInt(clickedLocation[1]) && document.getElementById(("1".concat(parseInt(locationRow)+1)).concat(parseInt(locationColumn)+1)).style.backgroundColor=="rgb(26, 30, 36)")
            {
                document.getElementById(("1".concat(parseInt(locationRow)+1)).concat(parseInt(locationColumn)+1)).style.backgroundColor = "black";
                checkerBoard[parseInt(locationRow)+1][parseInt(locationColumn)+1] = 0;

            // move piece
       
            checkerBoard[locationRow][locationColumn] = 1;
            newLocation = document.getElementById("1"+locationRow+locationColumn);
            newLocation.style.backgroundColor = "red";

            // remove piece from where it was
            oldLocation = document.getElementById("1" + clickedLocation[0] + clickedLocation[1]);
            oldLocation.style.backgroundColor = "black"
            checkerBoard[clickedLocation[0]][clickedLocation[1]] = 0;

            // done moving everything
            
            console.log("Done, piece is moved");
            
            console.log("1");

            

            blackPiecesRemaining--;
            document.getElementById("redPoints").innerHTML = parseInt(12-blackPiecesRemaining);

            if(blackPiecesRemaining == 8)
            {
                document.getElementById("whoWins").innerHTML = "Red Wins!!!";
                return;
            }
                        playerTurn = 1;
            document.getElementById("whosTurn").innerHTML = "Black's Turn";
            clickedPiece = false;
            
            }
            else if(parseInt(locationRow) + 2 == parseInt(clickedLocation[0]) && parseInt(locationColumn)-2 == parseInt(clickedLocation[1]) && document.getElementById(("1".concat(parseInt(locationRow)+1)).concat(parseInt(locationColumn)-1)).style.backgroundColor=="rgb(26, 30, 36)"){

                document.getElementById(("1".concat(parseInt(locationRow)+1)).concat(parseInt(locationColumn)-1)).style.backgroundColor = "black";
                checkerBoard[parseInt(locationRow)+1][parseInt(locationColumn)-1] = 0;

            // move piece
            checkerBoard[locationRow][locationColumn] = 1;
            newLocation = document.getElementById("1"+locationRow+locationColumn);
            newLocation.style.backgroundColor = "red";

            // remove piece from where it was
            oldLocation = document.getElementById("1" + clickedLocation[0] + clickedLocation[1]);
            oldLocation.style.backgroundColor = "black"
            checkerBoard[clickedLocation[0]][clickedLocation[1]] = 0;

            // done moving everything
            clickedPiece = false;
            console.log("Done, piece is moved");

            blackPiecesRemaining--;
            document.getElementById("redPoints").innerHTML = parseInt(12-blackPiecesRemaining);

            if(blackPiecesRemaining == 8)
            {
                document.getElementById("whoWins").innerHTML = "Red Wins!!!";
                return;
            }

                        console.log("2");
                        playerTurn = 1;
                        document.getElementById("whosTurn").innerHTML = "Black's Turn";
                        
            }
            else if(parseInt(locationRow)+1 == parseInt(clickedLocation[0]) && (parseInt(locationColumn)+1 == parseInt(clickedLocation[1]) || parseInt(locationColumn)-1 == parseInt(clickedLocation[1]))){
            // move piece
            checkerBoard[locationRow][locationColumn] = 1;
            newLocation = document.getElementById("1"+locationRow+locationColumn);
            newLocation.style.backgroundColor = "red";

            // remove piece from where it was
            oldLocation = document.getElementById("1" + clickedLocation[0] + clickedLocation[1]);
            oldLocation.style.backgroundColor = "black"
            checkerBoard[clickedLocation[0]][clickedLocation[1]] = 0;


            // done moving everything
            clickedPiece = false;
            console.log("Done, piece is moved");


            playerTurn = 1;
            document.getElementById("whosTurn").innerHTML = "Black's Turn";
            }
            else {
                playerTurn = 1;
                document.getElementById("whosTurn").innerHTML = "Black's Turn"; 
            }
        } 
        }
        if((colorPiece == "rgb(26, 30, 36)" && checkerBoard[locationRow][locationColumn] == 0) && ((parseInt(locationRow)-1 == parseInt(clickedLocation[0]) && (parseInt(locationColumn)-1 == parseInt(clickedLocation[1]) || parseInt(locationColumn)+1 == parseInt(clickedLocation[1]))) || parseInt(locationRow) - 2 == parseInt(clickedLocation[0]) && parseInt(locationColumn)-2 == parseInt(clickedLocation[1]) || parseInt(locationRow) - 2 == parseInt(clickedLocation[0]) && parseInt(locationColumn)+2 == parseInt(clickedLocation[1])) && (playerTurn == 1)) {
            // check if piece is captured
            if(parseInt(locationRow) - 2 == parseInt(clickedLocation[0]) && parseInt(locationColumn)-2 == parseInt(clickedLocation[1]) && document.getElementById(("1".concat(parseInt(locationRow)-1)).concat(parseInt(locationColumn)-1)).style.backgroundColor=="red")
            {
                
                document.getElementById(("1".concat(parseInt(locationRow)-1)).concat(parseInt(locationColumn)-1)).style.backgroundColor =     "black"
                checkerBoard[parseInt(locationRow)-1][parseInt(locationColumn)-1] = 0;
                 // move piece
                checkerBoard[locationRow][locationColumn] = 1;
                newLocation = document.getElementById("1"+locationRow+locationColumn);
                newLocation.style.backgroundColor = "rgb(26, 30, 36)";

                 // remove piece from where it was
                oldLocation = document.getElementById("1" + clickedLocation[0] + clickedLocation[1]);
                oldLocation.style.backgroundColor = "black"
                checkerBoard[clickedLocation[0]][clickedLocation[1]] = 0;


                // done moving everything
                clickedPiece = false;
                console.log("Done, piece is moved");
                

            redPiecesRemaining--;

            document.getElementById("blackPoints").innerHTML = parseInt(12-redPiecesRemaining);
            if(redPiecesRemaining == 8)
            {
                document.getElementById("whoWins").innerHTML = "Black Wins!!!";
                return;
            }

                playerTurn = 0;
                document.getElementById("whosTurn").innerHTML = "Red's Turn";
            }
            else if(parseInt(locationRow) - 2 == parseInt(clickedLocation[0]) && parseInt(locationColumn)+2 == parseInt(clickedLocation[1]) && document.getElementById(("1".concat(parseInt(locationRow)-1)).concat(parseInt(locationColumn)+1)).style.backgroundColor=="red"){
                document.getElementById(("1".concat(parseInt(locationRow)-1)).concat(parseInt(locationColumn)+1)).style.backgroundColor = "black"
                checkerBoard[parseInt(locationRow)-1][parseInt(locationColumn)+1] = 0;
                            // move piece
            checkerBoard[locationRow][locationColumn] = 1;
            newLocation = document.getElementById("1"+locationRow+locationColumn);
            newLocation.style.backgroundColor = "rgb(26, 30, 36)";

            // remove piece from where it was
            oldLocation = document.getElementById("1" + clickedLocation[0] + clickedLocation[1]);
            oldLocation.style.backgroundColor = "black"
            checkerBoard[clickedLocation[0]][clickedLocation[1]] = 0;

            console.log("breaking here");


            // done moving everything
            clickedPiece = false;
            console.log("Done, piece is moved");

            redPiecesRemaining--;

            document.getElementById("blackPoints").innerHTML = parseInt(12-redPiecesRemaining);
            if(redPiecesRemaining == 8)
            {
                document.getElementById("whoWins").innerHTML = "Black Wins!!!";
                return;
            }

            playerTurn = 0;
            document.getElementById("whosTurn").innerHTML = "Red's Turn";
            

            }
            else if(parseInt(locationRow)-1 == parseInt(clickedLocation[0]) && (parseInt(locationColumn)-1 == parseInt(clickedLocation[1]) || parseInt(locationColumn)+1 == parseInt(clickedLocation[1]))){
            // move piece
            checkerBoard[locationRow][locationColumn] = 1;
            newLocation = document.getElementById("1"+locationRow+locationColumn);
            newLocation.style.backgroundColor = "rgb(26, 30, 36)";

            // remove piece from where it was
            oldLocation = document.getElementById("1" + clickedLocation[0] + clickedLocation[1]);
            oldLocation.style.backgroundColor = "black"
            checkerBoard[clickedLocation[0]][clickedLocation[1]] = 0;


            // done moving everything
            clickedPiece = false;
            console.log("Done, piece is moved");


            playerTurn = 0;
            document.getElementById("whosTurn").innerHTML = "Red's Turn";
            }



        }        
        console.log("Invalid move, try again");
        clickedPiece = false;

    
}
    // Check if there is a piece on the click location
    else if(checkerBoard[locationRow][locationColumn] == 1) {
        console.log("There's a piece here, where to move?");
        clickedLocation = [locationRow, locationColumn];
        clickedPiece = true;
    }
}

function reset()
{
    location.reload();

}

