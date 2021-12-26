const canvas = document.getElementById("draw")
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight



ctx.strokeStyle = '#BADA55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = '0'

let isDrawing = false;
let lastX = 0
let lastY = 0
let hue = 0
let direction = true

function draw(e) {
    if (!isDrawing) return

    ctx.strokeStyle = `hsl(${hue}, 100% ,50%)`

    ctx.beginPath();
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY]
    hue++
    if (hue >= 360) {
        hue = 0
    }

    if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
        direction = !direction
    }
    if (direction) {
        ctx.lineWidth++
    } else {
        ctx.lineWidth--
    }
}

function drawT(e) {
    if (!isDrawing) return

    ctx.strokeStyle = `hsl(${hue}, 100% ,50%)`

    ctx.beginPath();
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(e.touches[0].pageX, e.touches[0].pageY)
    ctx.stroke();
    // [lastX, lastY] = [0, 0]
    [lastX, lastY] = [e.touches[0].pageX, e.touches[0].pageY]
    hue++
    if (hue >= 360) {
        hue = 0
    }

    if (ctx.lineWidth >= 80 || ctx.lineWidth <= 1) {
        direction = !direction
    }
    if (direction) {
        ctx.lineWidth++
    } else {
        ctx.lineWidth--
    }
}
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', _ => isDrawing = false)
canvas.addEventListener('mousedown', e => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]

})
canvas.addEventListener('mouseout', _ => isDrawing = false)
canvas.addEventListener('touchmove', drawT)
canvas.addEventListener('touchend', _ => isDrawing = false)
canvas.addEventListener('touchstart', e => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]

})
canvas.addEventListener('touchcancle', _ => isDrawing = false)