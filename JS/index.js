
const addButton = document.querySelector('.botonAgre');
const mainContainer = document.getElementById('app');

const createContentNode = () => {
    const contenido = document.createElement('div');
    contenido.className = 'contenido ';

    const imagen = document.createElement('div');
    imagen.className = 'imagen';
    const imagenTag = document.createElement('img');
    imagenTag.src = './assets/images/avatar-jessica.jpeg';
    imagen.appendChild(imagenTag);

    const item1 = document.createElement('div');
    item1.className = 'item1';
    const h2 = document.createElement('h2');
    h2.textContent = 'Jessica Randall';
    const h4 = document.createElement('h4');
    h4.textContent = 'London, United Kingdom';
    const p = document.createElement('p');
    p.textContent = '"Front-end developer and avid reader."';
    item1.appendChild(h2);
    item1.appendChild(h4);
    item1.appendChild(p);

    const buttonGitHub = document.createElement('button');
    buttonGitHub.textContent = 'GitHub';
    buttonGitHub.className = 'boton';

    const buttonFrontendMentor = document.createElement('button');
    buttonFrontendMentor.textContent = 'Frontend Mentor';
    buttonFrontendMentor.className = 'boton'; 

    const buttonLinkedIn = document.createElement('button');
    buttonLinkedIn.textContent = 'LinkedIn';
    buttonLinkedIn.className = 'boton'; 

    const buttonTwitter = document.createElement('button');
    buttonTwitter.textContent = 'Twitter';
    buttonTwitter.className = 'boton';

    const buttonInstagram = document.createElement('button');
    buttonInstagram.textContent = 'Instagram';
    buttonInstagram.className = 'boton';

    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'botones';

    buttonsContainer.appendChild(buttonGitHub);
    buttonsContainer.appendChild(buttonFrontendMentor);
    buttonsContainer.appendChild(buttonLinkedIn);
    buttonsContainer.appendChild(buttonTwitter);
    buttonsContainer.appendChild(buttonInstagram);

    contenido.appendChild(imagen);
    contenido.appendChild(item1);

    contenido.appendChild(buttonsContainer);

    return contenido;
};

const addContent = () => {
    mainContainer.appendChild(createContentNode());
};

addButton.addEventListener('click', addContent);
