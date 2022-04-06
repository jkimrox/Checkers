/*
Create the board -
    8 rows
    8 columns
    8 squares in each row/column - ensuring different ID for each
    alternating black and red tiles

Game Start -

    Turns -
        Players who have black pieces move first -
        Moving -
        Pieces can only move diagonally across the board and single pieces are limited to forward moves
            is there an opponent piece adjacent diagonally to your piece?
                if so, you must jump over
                is there another piece available to be captured?
                    if so, you can decide whether or not to capture it
        Reaching the end of the board -> Upgrade to a King
            forward AND backward movement are available
            if a piece is available to jump, you are able to jump in several directions

        Player who has red pieces goes after -
        Moving -
        Pieces can only move diagonally across the board and single pieces are limited to forward moves
            is there an opponent piece adjacent diagonally to your piece?
                if so, you must jump over
                is there another piece available to be captured?
                    if so, you can decide whether or not to capture it
        Reaching the end of the board -> Upgrade to a King
            forward AND backward movement are available
            if a piece is available to jump, you are able to jump in several directions
    
Game Finish -
    No pieces left on the board 
    You win!
*/