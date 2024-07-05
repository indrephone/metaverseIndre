
    const introButton = document.querySelector('#intro');
    
    introButton.addEventListener('click', () => {
        // Create a backdrop
        const backdrop = document.createElement('div');
        backdrop.classList.add('modal-backdrop');

        // Create a new card element
        const newCard = document.createElement('section');
        newCard.id = 'newIntroTab';
        newCard.classList.add('introTabas', 'modal'); // Ensure the new card has the same styles and modal styling

        // Create intro-content div
        const introContent = document.createElement('div');
        introContent.classList.add('intro-content');

        // Create intro-text div
        const introText = document.createElement('div');
        introText.classList.add('intro-text');

        // Create and append h2
        const heading = document.createElement('h2');
        heading.classList.add('roboto-light');
        heading.textContent = 'INTRO';
        introText.appendChild(heading);

        // Create and append hr
        const hr = document.createElement('hr');
        introText.appendChild(hr);

        introContent.appendChild(introText);

        // Create intro-img div
        const introImg = document.createElement('div');
        introImg.classList.add('intro-img');

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

        introImg.appendChild(img);
        introContent.appendChild(introImg);

        // Append intro-content to newCard
        newCard.appendChild(introContent);

        // Create intro-media div
        const introMedia = document.createElement('div');
        introMedia.classList.add('intro-media');

        // Create and append video
        const video = document.createElement('video');
        video.controls = true;
        const source = document.createElement('source');
        source.src = './media/tab-1.mp4';
        source.type = 'video/mp4';
        video.appendChild(source);
        introMedia.appendChild(video);

        // Create and append paragraphs
        const paragraph1 = document.createElement('p');
        paragraph1.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nobis tempore ex ducimus dolores magni debitis similique facere fugiat dolore.';
        introMedia.appendChild(paragraph1);

        const paragraph2 = document.createElement('p');
        paragraph2.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nobis tempore ex ducimus dolores magni debitis similique facere fugiat dolore.';
        introMedia.appendChild(paragraph2);

        // Append intro-media to newCard
        newCard.appendChild(introMedia);

        // Append newCard and backdrop to the body
        document.body.appendChild(backdrop);
        document.body.appendChild(newCard);
    });


    
