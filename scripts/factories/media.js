
function mediaFactory(data) {
  const mediaTypes = {
    image: 'img',
    video: 'video'
  };

  const { id, photographerId, title, image, likes, date, price, video } = data;

  const mediaType = video ? 'video' : 'image';
  const mediaPath = `assets/photographers/${photographerId}/${mediaType === 'image' ? image : video}`;

  // Création de la div hover-info
  const hoverDiv = document.createElement('div');
  hoverDiv.classList.add('hover');

  const spanHover = document.createElement('span');
  spanHover.classList.add('hover-info');
  const likesSpan = document.createElement('span');
  likesSpan.textContent = likes;
  likesSpan.classList.add('hover-likes');

  const likesIcon = document.createElement('i');
  likesIcon.classList.add('fa', 'fa-heart');
  likesSpan.appendChild(likesIcon);

  // const dateSpan = document.createElement('span');
  // dateSpan.textContent = date;
  // dateSpan.classList.add('hover-date');

  const priceSpan = document.createElement('span');
  priceSpan.textContent = `${price}$ / jour`;
  priceSpan.classList.add('hover-price');

  spanHover.appendChild(likesSpan);
  // hoverDiv.appendChild(dateSpan);
  spanHover.appendChild(priceSpan);
  hoverDiv.appendChild(spanHover);

  function getMediaCardDOM() {
    const article = document.createElement('article');
    article.classList.add('media-card', 'card-media');

    const media = document.createElement(mediaTypes[mediaType]);
    media.classList.add('media');
    media.setAttribute('alt', title);
    media.setAttribute('src', mediaPath);

    if (mediaType === 'video') {
      media.setAttribute('controls', '');
      media.setAttribute('type', 'video/mp4');
    } else {
      media.setAttribute('type', 'image/jpg');
    }

    media.setAttribute('width', '500');
    media.setAttribute('height', '500');

    // Ajout de la div hover-info à l'article
    article.appendChild(hoverDiv);

    // Masquage de la div hover-info par défaut
    hoverDiv.style.display = 'none';

    // Affichage de la div hover-info au survol
    media.addEventListener('mouseover', () => {
      hoverDiv.style.display = 'block';
    });

    // Masquage de la div hover-info à la fin du survol
    media.addEventListener('mouseout', () => {
      hoverDiv.style.display = 'none';
    });

    article.appendChild(media);

    const div = document.createElement('div');
    div.classList.add('text-media', 'media-text');

    const h2 = document.createElement('h2');
    h2.classList.add('card-title', 'title-card');
    h2.textContent = title;

    const span1 = document.createElement('span');
    span1.classList.add('card-likes', 'likes-card');
    span1.textContent = likes;

    const heartIcon = document.createElement('i');
    heartIcon.classList.add('fa', 'fa-sharp', 'fa-solid', 'fa-heart');
    span1.appendChild(heartIcon);

    const p2 = document.createElement('p');
    p2.classList.add('media-price', 'price-media');
    p2.textContent = ` ${price}$ / jour`;

    div.appendChild(h2);
    div.appendChild(span1);
    div.appendChild(p2);
    article.appendChild(div);

    return article;
  }

  return { id, photographerId, title, image, likes, date, price, mediaType, mediaPath, getMediaCardDOM }
}
