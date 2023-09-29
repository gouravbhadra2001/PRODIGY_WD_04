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
    const imageUrl = imageLinks[index];
    modalImage.src = imageUrl;
    imageModal.style.display = 'block';
}

closeModal.addEventListener('click', () => {
    imageModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === imageModal) {
        imageModal.style.display = 'none';
    }
});
