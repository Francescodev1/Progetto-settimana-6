document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementById('products');
  
    fetch('https://striveschool-api.herokuapp.com/api/product/', {
      method: 'GET',
      headers: {
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2RmYmMwNTgzNTAwMTg1MjMxMTYiLCJpYXQiOjE3MDIzOTMwMzksImV4cCI6MTcwMzYwMjYzOX0.8pTMmrtn3pgFTcsKTuMGmLw8w2KO4fVWKWA4_2ymHSA"  // Sostituisci con il tuo token reale
      }
    })
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-md-4';
        col.innerHTML = `
          <div class="card mb-4 shadow-sm">
            <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}"> <!-- Aggiunto l'elemento img per l'immagine del prodotto -->
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-text"><small class="text-muted">${product.brand}</small></p> <!-- Aggiunto il brand del prodotto -->
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onclick="location.href='product.html?id=${product._id}'">Scopri di più</button>
                  <!-- Aggiungi qui altri bottoni se necessario -->
                </div>
              </div>
            </div>
          </div>
        `;
        productsContainer.appendChild(col);
      });
    })
    .catch(error => {
      console.error('Error:', error);
      // Gestisci l'errore mostrando un messaggio all'utente
    });
  });
  
  