import { setupGround, updateGround } from "./ground.js";

const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 30;
const SPEED_SCALE_INCREASE = 0.0001;

const worldElement = document.querySelector("[data-world]");
setPixeltoWorldScale()
window.addEventListener("resize", setPixeltoWorldScale);
document.addEventListener("keydown", handleStart, { once: true });


let lastTime = 0;
let speedScale;
function update(time) {
    if (lastTime == null) {
        lastTime = time;
        window.requestAnimationFrame(update);
        return;
    }
    const delta = time - lastTime;
    console.log(delta);

    updateGround(delta, speedScale);
    updateSpeedScale(delta);

    lastTime = time;
    window.requestAnimationFrame(update);
}

function updateSpeedScale(delta) {
    speedScale += delta * SPEED_SCALE_INCREASE;
}

function handleStart() {
    lastTime = null;
    setupGround();
    window.requestAnimationFrame(update);

}

function setPixeltoWorldScale() {
    let worldToPixelScale
    if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
        worldToPixelScale = window.innerWidth / WORLD_WIDTH;
    } else {
        worldToPixelScale = window.innerHeight / WORLD_HEIGHT;
    }
    worldElement.style.width = `${WORLD_WIDTH * worldToPixelScale}px`
    worldElement.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`
    // console.log(worldElement);
}

//24:50
