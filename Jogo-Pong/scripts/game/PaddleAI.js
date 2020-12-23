
import { Paddle } from './Paddle.js';

export class PaddleAI extends Paddle{
    constructor(ball){
        super('right');
        this.speed = 4;
        this.ball = ball;
    }

    update(){
        if(this.center.y > this.ball.center.y){
            this.goUp();
        }else{
            this.goDown();
        }
    }
}