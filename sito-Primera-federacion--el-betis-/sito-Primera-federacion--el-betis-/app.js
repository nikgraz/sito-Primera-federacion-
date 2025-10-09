// Funzione per ottenere i dati dei giocatori dall'API
async function fetchGiocatori() {
    try {
      const response = await fetch('https://api.betisdeportivo.com/players');
      const data = await response.json();
      const giocatoriList = document.getElementById('giocatori-list');
      
      data.players.forEach(giocatore => {
        const playerElement = document.createElement('div');
        playerElement.classList.add('player');
        
        playerElement.innerHTML = `
          <h3>${giocatore.name}</h3>
          <p>Posizione: ${giocatore.position}</p>
          <p>Numero: ${giocatore.number}</p>
          <p>Gol: ${giocatore.goals}</p>
          <p>Assists: ${giocatore.assists}</p>
        `;
        
        giocatoriList.appendChild(playerElement);
      });
    } catch (error) {
      console.error('Errore nel recuperare i dati dei giocatori:', error);
    }
  }
  
  // Chiamata della funzione per caricare i giocatori
  document.addEventListener('DOMContentLoaded', fetchGiocatori);
  