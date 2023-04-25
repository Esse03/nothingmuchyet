import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import anglerImage from '../images/angler.png'
import blowImage from '../images/blow.png'

const Resources = {
    Fish: new ImageSource(fishImage),
    Angler: new ImageSource(anglerImage),
    Blow: new ImageSource(blowImage)
}
const ResourceLoader = new Loader([Resources.Fish, Resources.Angler, Resources.Blow])

export { Resources, ResourceLoader }