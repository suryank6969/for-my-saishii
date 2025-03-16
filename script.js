document.addEventListener('DOMContentLoaded', () => {
  const yesButton1 = document.getElementById('yesButton1');
  const yesButton2 = document.getElementById('yesButton2');
  const message = document.getElementById('message');

  const handleYesClick = () => {
    message.style.display = 'block';
    document.body.style.backgroundColor = '#ffcccb';
    document.querySelector('h1').style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
  };

  yesButton1.addEventListener('click', handleYesClick);
  yesButton2.addEventListener('click', handleYesClick);
});
