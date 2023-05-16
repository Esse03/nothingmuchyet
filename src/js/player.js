import {Actor, Vector} from "excalibur";
import {Resources} from "./resources.js";

export class Player extends Actor {

    constructor() {
        super({width:Resources.Rokkett.width, height:Resources.Rokkett.height});
    }

    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.graphics.use(Resources.Rokkett.toSprite())
        this.pos = new Vector(100,300)
    }

    onPostUpdate(_engine, _delta) {
        super.onPostUpdate(_engine, _delta);

    }
}