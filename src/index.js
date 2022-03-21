import { createHome,createDiv, createPara } from "./home";
import { createAboutUs } from "./aboutUs";
import { createMenu } from "./menu";
import{createContact} from "./contact";
const reset = () => {
    content.innerHTML = '';
    createHeader();
}
const createFooter = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.appendChild(createPara('Konrad Lach'));
    const gitHub = document.createElement('a');
    gitHub.href = 'https://github.com/KonradLach';
    gitHub.target = '_blank';
    const gitHubLogo = document.createElement('i');
    gitHubLogo.classList.add('fab','fa-github');
    gitHub.appendChild(gitHubLogo);
    footer.appendChild(gitHub);


    const linkedIn = document.createElement('a');
    linkedIn.href = 'https://www.linkedin.com/in/konrad-lach-338571169/';
    linkedIn.target = '_blank';
    const linkedInLogo = document.createElement('i');
    linkedInLogo.classList.add('fab','fa-linkedin');
    linkedIn.appendChild(linkedInLogo);
    footer.appendChild(linkedIn);

    document.getElementById('content').appendChild(footer);
}


const createHeader = () => {

    let header = createDiv('header');
    const content = document.getElementById('content');
    content.appendChild(header);
    const left = createDiv('left');
    left.addEventListener('click',() => {
        reset();
        window.scrollTo(0,0);
        createHome();
        createFooter();
    })
    header.appendChild(left);
    let right = createDiv('right');
    let headerlist = document.createElement('ul');
    headerlist.setAttribute('id', 'headerButtons');
    const homeButton = document.createElement('li');
    homeButton.innerHTML= 'Home';
    homeButton.addEventListener('click', () =>{
        reset();
        window.scrollTo(0,0);
        createHome();
        createFooter();
    })
    const aboutUsButton = document.createElement('li');
    aboutUsButton.innerHTML = 'About Us';
    aboutUsButton.addEventListener('click',()=>{
        reset();
        createAboutUs();
        createFooter();
        window.scrollTo(0,0);
    })
    const menuButton = document.createElement('li');
    menuButton.innerHTML = 'Menu';
    menuButton.addEventListener('click', ()=>{
        reset();
        createMenu();
        createFooter();
        window.scrollTo(0,0);
    })
    const contactButton = document.createElement('li');
    contactButton.innerHTML = 'Contact Us';
    contactButton.addEventListener('click',()=>{
        reset();
        createContact();
        createFooter();
        window.scrollTo(0,0);
    })
    headerlist.appendChild(homeButton);
    headerlist.appendChild(aboutUsButton);
    headerlist.appendChild(menuButton);
    headerlist.appendChild(contactButton);
    let nav = document.createElement('nav');
    right.appendChild(nav).appendChild(headerlist);
    header.appendChild(right);

}
createHeader();
createHome();
createFooter();

