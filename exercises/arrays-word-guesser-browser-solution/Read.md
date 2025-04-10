Explanation of drawHangman(stage)
This function is responsible for drawing a Hangman figure on an HTML5 <canvas> element in stages. It takes an argument stage, which determines which part of the Hangman figure should be drawn.

Line width and color settings

ctx.lineWidth = 2; → Sets the stroke thickness to 2 pixels.
ctx.strokeStyle = "black"; → Sets the stroke color to black.
Drawing stages (1-7)
The function checks the stage value and draws different parts of the Hangman accordingly:

stage === 1 → Draws the foundation (base platform).
stage === 2 → Draws the pole.
stage === 3 → Draws the upper horizontal beam.
stage === 4 → Draws the head using ctx.arc().
stage === 5 → Draws the body using a straight line.
stage === 6 → Draws both arms.
stage === 7 → Draws both legs.