const menuButtons = document.querySelectorAll('.menu button');
menuButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the text content of the button
    const buttonText = button.textContent.trim();

    // Handle the button click based on the text content
    switch (buttonText) {
      case 'Home':
        // Handle Home button click
        console.log('Home button clicked');
        break;
      case 'Isi Saldo':

        console.log('Isi Saldo button clicked');
        break;
      case 'Rute':

        console.log('Rute button clicked');
        break;
      case 'Pembayaran':
        console.log('Pembayaran button clicked');
        break;
      case 'Riwayat':
        console.log('Riwayat button clicked');
        break;
      default:
        console.log('Unknown button clicked');
    }
  });
});