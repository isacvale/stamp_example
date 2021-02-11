import Stamp from './node_modules/@dvo/stamp/src/stamp.js'
import { characters } from './data.js'

characters.forEach(character => {
    Stamp('#tpl-nav-link')
        .change(entry => {
            entry
                .querySelector('.characterName')
                .textContent = character.name
            entry
                .querySelector('.characterClass')
                .textContent = character.class
            entry
                .querySelector('.characterLevel')
                .textContent = character.level
            entry
                .setAttribute('href', `https://en.wikipedia.org/wiki/${character.link}`)
            entry.style.backgroundImage =
                `url(https://picsum.photos/seed/${character.class}/400?grayscale&blur=2)`
        })
        .stamp()
})