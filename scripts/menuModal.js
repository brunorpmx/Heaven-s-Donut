const modal = document.getElementById('myModal');
const button = document.getElementById('modalButton');
const closeButton = document.getElementsByClassName('close')[0];

button.onclick = () => {
  modal.style.display = 'block';
};

closeButton.onclick = () => {
  modal.style.display = 'none';
};
