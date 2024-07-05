    const workButton = document.querySelector('#work');
    
    workButton.addEventListener('click', () => {
        // Create a backdrop
        const backdrop = document.createElement('div');
        backdrop.classList.add('modal-backdrop');

        // Create a new card element
        const newCard = document.createElement('section');
        newCard.id = 'newWorkTab';
        newCard.classList.add('workTabas', 'modal'); // Ensure the new card has the same styles and modal styling

        // Create work-content div
        const workContent = document.createElement('div');
        workContent.classList.add('work-content');

        // Create work-text div
        const workText = document.createElement('div');
        workText.classList.add('work-text');

        // Create and append h2
        const heading = document.createElement('h2');
        heading.classList.add('roboto-light');
        heading.textContent = 'WORK';
        workText.appendChild(heading);

        // Create and append hr
        const hr = document.createElement('hr');
        workText.appendChild(hr);

        workContent.appendChild(workText);

        // Create work-img div
        const workImg = document.createElement('div');
        workImg.classList.add('work-img');

        // Create and append img
        const img = document.createElement('img');
        img.src = './media/xmark-solid.svg';
        img.alt = 'x-mark';
        img.width = 50;
        img.height = 50;
        img.style.cursor = 'pointer';

        // Add event listener to close the card
        img.addEventListener('click', () => {
            newCard.remove();
            backdrop.remove();
        });

        workImg.appendChild(img);
        workContent.appendChild(workImg);

        // Append work-content to newCard
        newCard.appendChild(workContent);

        // Create work-media div
        const workMedia = document.createElement('div');
        workMedia.classList.add('work-media');

        // Create and append image
        const workImage = document.createElement('img');
        workImage.src = './media/tab-2.jpg';
        workImage.alt = 'workers';
        workMedia.appendChild(workImage);

        // Create and append paragraphs
        const paragraph1 = document.createElement('p');
        paragraph1.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nobis tempore ex ducimus dolores magni debitis similique facere fugiat dolore.';
        workMedia.appendChild(paragraph1);

        const paragraph2 = document.createElement('p');
        paragraph2.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nobis tempore ex ducimus dolores magni debitis similique facere fugiat dolore.';
        workMedia.appendChild(paragraph2);

        // Append work-media to newCard
        newCard.appendChild(workMedia);

        // Append newCard and backdrop to the body
        document.body.appendChild(backdrop);
        document.body.appendChild(newCard);
    });

