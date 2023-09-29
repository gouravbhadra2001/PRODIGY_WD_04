// script.js
const certificateCards = document.querySelectorAll('.zoomin');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');
const imageLinks = ["./HackathonCertificate.png",
    "./python_basic certificate_page-0001.jpg"
];

certificateCards.forEach((certificateCard, index) => {
    certificateCard.addEventListener('click', () => {
        openImageInModal(index);
    });
});

function openImageInModal(index) {
    // Assuming imageLinks is an array of image URLs
    const imageUrl = imageLinks[index];

    // Set the image source in the modal
    modalImage.src = imageUrl;

    // Display the modal
    imageModal.style.display = 'block';
}

closeModal.addEventListener('click', () => {
    // Close the modal when the close button is clicked
    imageModal.style.display = 'none';
});

// Close the modal if the user clicks outside the modal
window.addEventListener('click', (event) => {
    if (event.target === imageModal) {
        imageModal.style.display = 'none';
    }
});
