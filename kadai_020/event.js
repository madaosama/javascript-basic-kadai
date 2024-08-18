const clickBtn = document.getElementById('btn');
const text = document.getElementById('text');

clickBtn.addEventListener('click', () => {
  text.textContent    = "ボタンをクリックしました";
});