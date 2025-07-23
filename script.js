let currentPage = 1;

function nextPage() {
  const page = document.getElementById(`page${currentPage}`);
  page.classList.add('flipped');
  currentPage++;
}

function goToStart() {
  for (let i = 1; i <= 3; i++) {
    document.getElementById(`page${i}`).classList.remove('flipped');
  }
  currentPage = 1;
}
