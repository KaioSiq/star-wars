import backgroundTwo from '../../src/assets/images/background/bg2.png';
import darthVader from '../../src/assets/images/elements/PikPng.png';
import footer from '../footers';

let textContent = `
Lucas ipsum dolor sit amet darth dooku palpatine jawa darth binks obi-wan solo wampa bothan. Dooku leia darth skywalker secura leia mustafar skywalker darth. Wicket antilles moff darth greedo wedge leia. Ben c-3po greedo vader aayla twi'lek lando qui-gonn sidious. Jabba antilles greedo wampa darth lando moff sebulba. Moff r2-d2 solo gamorrean obi-wan organa. Moff antilles wookiee skywalker solo darth. Mothma ben cade ewok darth mustafar qui-gon obi-wan dooku. Mandalorians mustafar maul skywalker.
`


let HomeSectionTwo = `
<section class="section background--two" style="background-image: url(${backgroundTwo})"> 
    <div>
        <img src="${darthVader}" alt="Vader" width="300px" height="auto">
        <div>
            <p>${textContent}</p>
        </div>
    </div>
    ${footer}
</section>
`

export default HomeSectionTwo