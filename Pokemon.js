
      async function mainEvent() { // the async keyword means we can make API requests
        const mainForm = document.querySelector('.main_form'); // This class name needs to be set on your form before you can listen for an event on it
        const loadDataButton = document.querySelector('#data_load');
        
        let storedList = [];
        let currentList = []; // this is "scoped" to the main event function
      
        loadDataButton.addEventListener('click', async (submitEvent) => { // async has to be declared on every function that needs to "await" something    
          console.log('loading data'); 
          // Basic GET request - this replaces the form Action
          const results = await fetch('https://pokeapi.co/api/v2/');
          
      
          // This changes the response from the GET into data we can use - an "object"
          storedList = await results.json();
          if (storedList.length > 0){ 
            generatelistButton.classList.remove('hidden');
          }
          
          console.table(storedList); 
        });

      }
      
      /*
        This adds an event listener that fires our main event only once our page elements have loaded
        The use of the async keyword means we can "await" events before continuing in our scripts
        In this case, we load some data when the form has submitted
      */
      document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests

/*async function loadPokemonData(){
    const loadDataButton = document.querySelector('#data_load');
    console.log('Load Data?');
    
    loadDataButton.addEventListener('click', async (submitEvent) => { 
        console.log('loading data');
        const results = await fetch('https://pokeapi.co/api/v2/');

        storedList = await results.json();
        if (storedList.length > 0){ 
            console.log('Nothing is here');
          }
    });
}*/