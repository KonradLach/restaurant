import {
    createDiv,
    createH,
    createSection,
    createPara,
createMap} from './home';
const createContact = () => {
    const contactSection = createSection('contact');
    content.appendChild(contactSection);
    const contactContainer = createDiv('contactContainer');
    contactContainer.appendChild(createH('2','Contact Us'));
    contactSection.appendChild(contactContainer);

    const contactFlex = createDiv('contactFlex');
    const contactInfo = createDiv('contactInfo');
    contactInfo.appendChild(createPara('(123)-456-7890'));
    contactInfo.appendChild(createPara('123 Main St'));
    contactInfo.appendChild(createPara('Lewiston, ID'));
    const mapDiv = createDiv('map');
    contactFlex.appendChild(contactInfo);
    contactFlex.appendChild(mapDiv);
    contactContainer.appendChild(contactFlex);
    createMap();
}
export {createContact}

