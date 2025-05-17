document.addEventListener('DOMContentLoaded', () => {
  const predictSection = document.getElementById("predict-section");
  const modal = document.getElementById("predictionModal");
  const closeBtn = document.getElementById("closeModalBtn");
  const repredictForm = document.getElementById("repredictForm");

  if (!predictSection || !modal || !closeBtn || !repredictForm) return;

  const predictionExists = predictSection.dataset.predictionExists === 'true';

  if (predictionExists) {
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('show'), 10);
    // predictSection.scrollIntoView({ behavior: 'smooth' });
  }

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    setTimeout(() => modal.classList.add('hidden'), 400);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
      setTimeout(() => modal.classList.add('hidden'), 400);
    }
  });

  // Handle repredict form submit: close modal, scroll, then submit form
  repredictForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    modal.classList.remove('show'); 

    setTimeout(() => {
      modal.classList.add('hidden'); 

      predictSection.scrollIntoView({ behavior: 'smooth' });

    }, 400);
  });
});
