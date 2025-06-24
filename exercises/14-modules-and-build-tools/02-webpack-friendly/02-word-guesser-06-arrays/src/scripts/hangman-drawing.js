/**
 * Draws different stages of a Hangman figure on the canvas.
 * @param {number} stage - The current stage (1-7) of the Hangman drawing.
 * @throws {Error} If `stage` is not between 1 and 7.
 */
export function drawHangman(stage, ctx) {
    if (stage < 1 || stage > 7) {
        throw new Error("Invalid stage. Stage must be between 1 and 7.");
    }

    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";

    switch (stage) {
        case 1:
            // Draw the foundation (base platform)
            ctx.strokeRect(20, 200, 100, 10);
            break;

        case 2:
            // Draw the pole (vertical support)
            ctx.strokeRect(50, 50, 10, 150);
            break;

        case 3:
            // Draw the upper beam (horizontal top bar)
            ctx.strokeRect(50, 50, 60, 10);
            break;

        case 4:
            // Draw the head (circle)
            ctx.beginPath();
            ctx.arc(100, 80, 15, 0, Math.PI * 2);
            ctx.stroke();
            break;

        case 5:
            // Draw the body (vertical line)
            ctx.moveTo(100, 95);
            ctx.lineTo(100, 150);
            ctx.stroke();
            break;

        case 6:
            // Draw the arms
            ctx.moveTo(100, 110);
            ctx.lineTo(80, 130);
            ctx.stroke();
            ctx.moveTo(100, 110);
            ctx.lineTo(120, 130);
            ctx.stroke();
            break;

        case 7:
            // Draw the legs
            ctx.moveTo(100, 150);
            ctx.lineTo(80, 180);
            ctx.stroke();
            ctx.moveTo(100, 150);
            ctx.lineTo(120, 180);
            ctx.stroke();
            break;
    }
}