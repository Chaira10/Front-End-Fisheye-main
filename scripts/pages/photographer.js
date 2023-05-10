function getParamFromUrl(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
  }


// 1. Récupérez l'ID du photographe à partir de l'URL
const photographerId = getParamFromUrl('id');

async function getPhotographers() {
    try {
        const response = await fetch("../../data/photographers.json");
        const data = await response.json();
        return { photographers: data.photographers };
      } catch (error) {
        console.error(error);
      }

}

// 3. Filtrer les données pour récupérer le photographe dont l'ID correspond à celui de l'URL
async function getPhotographerById(id) {
    const { photographers } = await getPhotographers(); // Ajout de .photographers ici
    return photographers.find((photographer) => photographer.id == id);
  }
  

// 4. Utilisez la fonction photographerFactory pour créer une carte de photographe à partir des données récupérées et insérez-la dans le DOM
async function displayPhotographerData() {
    const photographer = await getPhotographerById(photographerId);
    const photographerModel = photographerFactory(photographer);
    const photographerContainer = document.getElementById('photographer-container');
    const photographerCard = photographerModel.getUserCardDOM();
    photographerContainer.appendChild(photographerCard);
  }
  
  displayPhotographerData();

