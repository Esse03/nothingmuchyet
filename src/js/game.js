import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {Player} from "./player.js";
import {Sky} from "./background.js";

export class Game extends Engine {

    constructor() {
        super()
        this.start(ResourceLoader).then(() => this.startGame())

    }

    startGame() {
        console.log("start de game!")
        const sky = new Sky()
        this.add(sky)

        let rokkett = new Player()
        this.add(rokkett)
    }
}

new Game()
