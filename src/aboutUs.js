import {createDiv,
    createH,
    createPara,
    createSection} from "./home";

const createAboutUs = () =>{
    const aboutSection = createSection('about');
    content.appendChild(aboutSection);
    const aboutUsPara = createDiv('aboutUsPara');

    aboutUsPara.appendChild(createPara('Our ongoing goal is to serve the finest quality food and drinks. Always fresh, always refreshing. We strive to bring an authentic and enjoyable experience to all of our customers through our unique menu items and winery experience.'));
    aboutUsPara.appendChild(createPara('We look forward to sharing everything Beer & Wine has to offer with you. Please be sure to check our site regularly for our daily specials and other unique offers'));
    const rightSideAboutUs = createDiv('rightSideAboutUs');
    rightSideAboutUs.appendChild(createH('2','Our Story'));
    rightSideAboutUs.appendChild(aboutUsPara);
    const aboutContainer = createDiv('aboutContainer');
    aboutContainer.appendChild(createDiv('picture1'));
    aboutContainer.appendChild(createDiv('picture2'));
    aboutContainer.appendChild(createDiv('rightAbout')).appendChild(rightSideAboutUs);
    aboutSection.appendChild(aboutContainer);
    const lowerDiv = createDiv('lowerDiv');
    const breweryImg = document.createElement('img');
    breweryImg.src = "img/aboutPicture3.jpeg";
    lowerDiv.appendChild(createPara('We are a family-owned business and want to provide our customers with delicious, award-winning, quality wines that are all hand-crafted locally. We provide an wide selection of wines with something to satisfy every person, from unique, fruit-infused wines to traditional white and red varietals and more!'))
    lowerDiv.appendChild(breweryImg);
    aboutSection.appendChild(lowerDiv);

};
export {createAboutUs}