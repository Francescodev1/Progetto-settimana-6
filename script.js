// script.js
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('productForm');
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      var productName = document.getElementById('productName').value;
      var productDescription = document.getElementById('productDescription').value;
      var productPrice = document.getElementById('productPrice').value;
      const productBrand = document.getElementById('brand').value;
      const productImageUrl = document.getElementById('imageUrl').value;
      
      
      // Qui si costruirà l'oggetto del prodotto da inviare
      var productData = {
        name: productName,
        description: productDescription,
        price: productPrice,
        // Aggiungi altri campi del modello qui
        brand: productBrand, // Assicurati di avere un input per questo nel tuo form
        imageUrl: productImageUrl,
        
      };
  
      // Chiamata API per creare il prodotto
      fetch('https://striveschool-api.herokuapp.com/api/product/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2RmYmMwNTgzNTAwMTg1MjMxMTYiLCJpYXQiOjE3MDIzOTMwMzksImV4cCI6MTcwMzYwMjYzOX0.8pTMmrtn3pgFTcsKTuMGmLw8w2KO4fVWKWA4_2ymHSA"    
        },
        body: JSON.stringify(productData)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Aggiungi qui il codice per gestire la risposta positiva
      })
      .catch((error) => {
        console.error('Error:', error);
        // Aggiungi qui il codice per gestire l'errore
      });
    });
    
    // Altri event handlers possono essere aggiunti qui per gestire edit e delete
  });