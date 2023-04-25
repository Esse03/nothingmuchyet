import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())

    }

    startGame() {
        console.log("start de game!")
        const fish = new Actor()
        fish.graphics.use(Resources.Fish.toSprite())
        fish.pos = new Vector(400, 300)
        fish.vel = new Vector(-10,0)
        fish.scale = new Vector(0.1, 0.1)
        this.add(fish)

        const angler = new Actor()
        angler.graphics.use(Resources.Fish.toSprite())
        angler.pos = new Vector(400, 300)
        angler.vel = new Vector(-10,0)
        angler.scale = new Vector(0.1, 0.1)
        this.add(angler)

        const blow = new Actor()
        blow.graphics.use(Resources.Fish.toSprite())
        blow.pos = new Vector(400, 300)
        blow.vel = new Vector(-10,0)
        blow.scale = new Vector(0.1, 0.1)
        this.add(blow)
    }
}

new Game()
