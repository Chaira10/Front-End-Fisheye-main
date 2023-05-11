function getParamFromUrl(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
  }


// 1. Récupérez l'ID du photographe à partir de l'URL
const photographeId = getParamFromUrl('id');

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
    const photographer = await getPhotographerById(photographeId);
    const photographerName = photographer.name;
    const photographerModel = photographerFactory(photographer);
    const photographerContainer = document.getElementById('photographer-container');
    const photographerCard = photographerModel.getUserCardDOM();
    photographerContainer.appendChild(photographerCard);
    const title = document.querySelector('#title-modal');
    title.textContent = `Contactez moi ${photographerName}`;
  }
  
  displayPhotographerData();












const id = getParamFromUrl('id');


  async function getMedias() {
    try {
        const response = await fetch("../../data/photographers.json");
        const data = await response.json();
        return { media: data.media };
      } catch (error) {
        console.error(error);
      }

}
async function getMediaById(id) {
const { media } = await getMedias(); // Ajout de .photographers ici
return media.find((media) => media.photographerId == id);
}

async function displayMedia(media) {
    const mediaSection = document.querySelector("#media-container");

    // 
    try {
          const response = await fetch("../../data/photographers.json");
          const data = await response.json();
          const medias = data.media.filter((media) => media.photographerId === id);
          const mediaContainer = document.getElementById('media-container');
          medias.forEach((media) => {
            const mediaModel = mediaFactory(media);
            const mediaCard = mediaModel.getMediaDOM();
            mediaContainer.appendChild(mediaCard);
          });
        } catch (error) {
          console.error(error);
        }
};

async function init() {
  const currentPhotographerId = window.location.search.split('=')[1];

      // Récupère les datas des photographes
      const { media } = await getMedias();
      displayMedia(media);
  
  const filteredMedia = media.filter((media) => media.photographerId == currentPhotographerId);
  filteredMedia.forEach((media) => {
    const mediaCard = mediaFactory(media);
    const mediaList = document.getElementById('media-container');
    mediaList.appendChild(mediaCard.getMediaCardDOM());
  });
  

    
};

init();











  // async function displayMedia() {
  //   try {
  //     const response = await fetch("../../data/photographers.json");
  //     const data = await response.json();
  //     const medias = data.media.filter((media) => media.photographerId === photographerId);
  //     const mediaContainer = document.getElementById('media-container');
  //     medias.forEach((media) => {
  //       const mediaModel = mediaFactory(media);
  //       const mediaCard = mediaModel.getMediaDOM();
  //       mediaContainer.appendChild(mediaCard);
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  
  // displayMedia();