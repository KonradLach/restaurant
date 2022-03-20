import {createDiv,
    createH,
    createPara,
    createSection} from "./home";

const createAboutUs = () =>{
    const aboutSection = createSection('about');
    content.appendChild(aboutSection);
    const aboutUsPara = createDiv('aboutUsPara');
    for (let index = 0; index < 3; index++) {
        aboutUsPara.appendChild(createPara('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam at labore placeat modi soluta porro dolorem distinctio, sunt expedita eos voluptatem ea mollitia, libero inventore doloremque autem minima dolorum dolore'));
    }
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