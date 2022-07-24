const progressBars = document.querySelectorAll('.progress-bar');

for (let progressBar of progressBars) {
    progressBar.style.width = progressBar.getAttribute('data-percent') + '%';
}
