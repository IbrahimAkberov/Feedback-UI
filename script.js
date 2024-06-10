document.querySelectorAll('.feedback').forEach(item => {
    item.addEventListener('click', () => {
        clearActive();
        item.classList.add('active');
    });
});

document.getElementById('send').addEventListener('click', () => {
    const activeFeedback = document.querySelector('.feedback.active');
    if (activeFeedback) {
        alert(`Feedback sent: ${activeFeedback.querySelector('p').innerText}`);
    } else {
        alert('Please select a feedback option.');
    }
});

function clearActive() {
    document.querySelectorAll('.feedback').forEach(item => {
        item.classList.remove('active');
    });
}
