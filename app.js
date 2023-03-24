import {
    Ball
} from "./ball.js";

import {
    Block
} from "./block.js";

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
        window.requestAnimationFrame(this.animate.bind(this));

        this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15);
        this.block = new Block(450, 30, 300, 450);
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        // 레티나 디스플레이에서 선명하게 보이게 하려고 두 배로 설정
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);
    }

    animate(t) {
        window.requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight); // 이전에 그렸던 것을 지워주고
        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block); // 다시 그려줌
        this.block.draw(this.ctx);
    }
}

window.onload = () => {
    new App();
}