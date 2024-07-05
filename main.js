
// TOP IMAGE WITH GEM

const canvas = document.querySelector("#Canvas1");
const ctx = canvas.getContext("2d");

// Circle parameters
const circleRadius = 60; // Twice as large as before
const circleX = canvas.width / 2;
const circleY = canvas.height / 2;

// Image source
const imageSrc = './media/gem-regular.svg';

// Load the image
const image = new Image();
image.src = imageSrc;
image.onload = () => {
    // Draw the circle
    ctx.beginPath();
    ctx.arc(circleX, circleY, circleRadius, 0, 2 * Math.PI);
    ctx.strokeStyle = "#fff"; 
    ctx.stroke();

    // Clip the image within the circle
    ctx.save();
    ctx.beginPath();
    ctx.arc(circleX, circleY, circleRadius, 0, 2 * Math.PI);
    ctx.clip();

    // Draw the image inside the circle at half the circle size
    const imageSize = circleRadius;
    ctx.drawImage(image, circleX - imageSize / 2, circleY - imageSize / 2, imageSize, imageSize);
    ctx.restore();

    // Draw the vertical line from the bottom of the circle
    const verticalLineLength = 60;
    ctx.beginPath();
    ctx.moveTo(circleX, circleY + circleRadius);
    ctx.lineTo(circleX, circleY + circleRadius + verticalLineLength);
    ctx.strokeStyle = "#fff";
    ctx.stroke();

    // Draw the horizontal line extending to the full width of the canvas
    ctx.beginPath();
    ctx.moveTo(0, circleY + circleRadius + verticalLineLength);
    ctx.lineTo(canvas.width, circleY + circleRadius + verticalLineLength);
    ctx.strokeStyle = "#fff"; // White color for the horizontal line
    ctx.stroke();
};

// LINES SECTION

const canvasLines = document.querySelector("#linesCanvas");
const ctxLines = canvasLines.getContext("2d");

function drawLines() {
    const verticalLineLength = 60;

    // Clear the canvas
    ctxLines.clearRect(0, 0, canvasLines.width, canvasLines.height);

    // Draw the horizontal line extending to the full width of the canvas
    ctxLines.beginPath();
    ctxLines.moveTo(0, verticalLineLength);
    ctxLines.lineTo(canvasLines.width, verticalLineLength);
    ctxLines.strokeStyle = "#fff";
    ctxLines.stroke();

    // Draw the vertical line connecting to the buttons section
    ctxLines.beginPath();
    ctxLines.moveTo(canvasLines.width / 2, verticalLineLength);
    ctxLines.lineTo(canvasLines.width / 2, canvasLines.height);
    ctxLines.strokeStyle = "#fff";
    ctxLines.stroke();
}

// Initial draw
drawLines();

// Redraw on window resize to adjust the lines
window.addEventListener('resize', () => {
    // Update canvas size
    canvasLines.width = window.innerWidth - 60; // Accounting for 30px padding on each side
    drawLines();
});