
    const contactButton = document.querySelector("#contact");

    contactButton.addEventListener("click", () => {
        // Create the backdrop
        const backdrop = document.createElement("div");
        backdrop.classList.add("modal-backdrop");

        // Create the modal
        const modal = document.createElement("div");
        modal.classList.add("modal");

        // Create the content for the modal
        const contactContent = document.querySelector("#contactTabas").cloneNode(true);
        contactContent.style.display = "block"; // Make sure the cloned content is visible

        // Append the content to the modal
        modal.appendChild(contactContent);

        // Append the modal and backdrop to the body
        document.body.appendChild(backdrop);
        document.body.appendChild(modal);

        // Close the modal when clicking the close icon
        const closeButton = modal.querySelector(".contact-img img");
        closeButton.addEventListener("click", () => {
            document.body.removeChild(modal);
            document.body.removeChild(backdrop);
        });

    });


   