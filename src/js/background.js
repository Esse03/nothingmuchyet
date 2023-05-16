import {Actor, Vector} from "excalibur";
import {Resources} from "./resources.js";

export class Sky extends Actor {

    constructor() {
        super({height:window.outerHeight});
    }

    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.graphics.use(Resources.Sky.toSprite())
    }
}