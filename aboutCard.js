document.addEventListener('DOMContentLoaded', () => {
    const aboutButton = document.querySelector('#about');

    aboutButton.addEventListener('click', () => {
        createAboutModal();
    });
});

function createAboutModal() {
    // Create modal backdrop
    const backdrop = document.createElement('div');
    backdrop.classList.add('modal-backdrop');

    // Create modal container
    const modal = document.createElement('div');
    modal.classList.add('modal');

    // Create the card content similar to #aboutTabas
    const aboutContent = document.createElement('div');
    aboutContent.classList.add('about-content');

    const aboutText = document.createElement('div');
    aboutText.classList.add('about-text');

    const h2 = document.createElement('h2');
    h2.classList.add('roboto-light');
    h2.textContent = 'INTRO';

    const hr = document.createElement('hr');

    aboutText.appendChild(h2);
    aboutText.appendChild(hr);

    const aboutImg = document.createElement('div');
    aboutImg.classList.add('about-img');

    const img = document.createElement('img');
    img.src = './media/xmark-solid.svg';
    img.alt = 'x-mark';
    img.width = 50;
    img.height = 50;

    aboutImg.appendChild(img);

    aboutContent.appendChild(aboutText);
    aboutContent.appendChild(aboutImg);

    const aboutMedia = document.createElement('div');
    aboutMedia.classList.add('about-media');

    const mediaImg = document.createElement('img');
    mediaImg.src = './media/tab-3.jpg';
    mediaImg.alt = '';

    const p1 = document.createElement('p');
    p1.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nobis tempore ex ducimus dolores magni debitis similique facere fugiat dolore.';

    const p2 = document.createElement('p');
    p2.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nobis tempore ex ducimus dolores magni debitis similique facere fugiat dolore.';

    aboutMedia.appendChild(mediaImg);
    aboutMedia.appendChild(p1);
    aboutMedia.appendChild(p2);

    modal.appendChild(aboutContent);
    modal.appendChild(aboutMedia);

    document.body.appendChild(backdrop);
    document.body.appendChild(modal);

    // Add close event listener
    aboutImg.addEventListener('click', () => {
        closeModal(modal, backdrop);
    });
}

function closeModal(modal, backdrop) {
    modal.remove();
    backdrop.remove();
}
