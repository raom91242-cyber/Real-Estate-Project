document.addEventListener('DOMContentLoaded', () => {
  const propertyDetails = document.getElementById('property-details');
  const payBtn = document.getElementById('payBtn');

  const params = new URLSearchParams(window.location.search);
  const name = params.get('name') || "Unknown Property";
  const price = params.get('price') || "0";
  const address = params.get('address') || "No address";

  propertyDetails.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Price:</strong> $${price}</p>
    <p><strong>Address:</strong> ${address}</p>
  `;

  payBtn.addEventListener('click', () => {
    alert('Payment processed successfully! You will hear from us soon.');
    window.location.href = '../index.html';

  });



});



