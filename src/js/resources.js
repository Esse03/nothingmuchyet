import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import rokkettPlayer from '../images/rokkett.png'
import backgroundSky from '../images/sky.png'

const Resources = {
    Rokkett : new ImageSource(rokkettPlayer),
    Sky : new ImageSource(backgroundSky)
}
const ResourceLoader = new Loader([Resources.Rokkett, Resources.Sky])

export { Resources, ResourceLoader }