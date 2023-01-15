var disk = document.querySelector('#disk');
var bug = document.querySelector('#bug');
var y;
var x;
var size;
var radius;
var ratio;
var speed = 2;

window.onload = function () {
    y = bug.offsetTop;
    x = bug.offsetLeft;
    size = bug.clientWidth;
    radius = disk.clientWidth;
    ratio = (1 - (size / radius)**2);
    window.onkeydown = function (e) {
        switch (e.key) {
            case "ArrowDown":
                y += speed * ratio;
                break;
            case "ArrowUp":
                y -= speed * ratio;
                break;
            case "ArrowLeft":
                x -= speed * ratio;
                break;
            case "ArrowRight":
                x += speed * ratio;
                break;
            default:
                break;
        }
        update();
    }
}

function update() {
    bug.style.top = y + 'px';
    bug.style.left = x + 'px';
    bug.style.width = size + 'px';
    bug.style.height = size + 'px';
}