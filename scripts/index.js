const hobbiesCard = document.querySelectorAll('.hobbies .card');

hobbiesCard.forEach(e => e.addEventListener('mouseover', async () => {
    e.classList.add('rotateClass');
    await new Promise(resolve => setTimeout(resolve, 300));
    e.classList.add('innerClass');
    await new Promise(resolve => setTimeout(resolve, 2400));
    e.classList.remove('innerClass');
    await new Promise(resolve => setTimeout(resolve, 300));
    e.classList.remove('rotateClass');
}));