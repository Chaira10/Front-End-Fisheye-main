

    function mediaFactory(data) {
        const { id, photographerId, title, image, likes, date, price } = data;
    
        const picture = `assets/photographers/${photographerId}/${image}`;
        const video = `assets/photographers/${photographerId}/${title}`;

    
        function getMediaCardDOM() {
            // creation de l'élément article
            const article = document.createElement( 'article' );
            article.classList.add('media-card', 'card-media'); // Ajout d'une classe à l'élément <article>
            if (video) {
                fetch(video)
                    .then(response => {
                        if (response.ok) {
            // creation de la div video
            const divVideo = document.createElement( 'video' );
            divVideo.setAttribute("controls", '');

            divVideo.classList.add('media-video');
   

            // creation de la balise video
            const baliseVideo = document.createElement( 'source' );
            baliseVideo.setAttribute("src", video);
            baliseVideo.setAttribute("type", 'video/mp4');
            baliseVideo.width = '323'; // Définition de la largeur de la vidéo
            baliseVideo.height = '323'; // Définition de la hauteur de la vidéo
            divVideo.appendChild( baliseVideo );
            article.appendChild(divVideo);
        }
    });
}

if (picture) {
    fetch(picture)
        .then(response => {
            if (response.ok) {
            // creation div img
            const divImg = document.createElement('div');
            divImg.classList.add('img-media', 'media-img');
            // creation de la balise img
            const img = document.createElement( 'img' );
            img.classList.add('card-media', 'card-media'); // Ajout d'une classe à l'élément <img>
            // ajout de l'attribut scr + chemin
            img.setAttribute("src", picture);
            img.setAttribute('alt', title); // Ajout de l'attribut "alt" avec la même valeur que "name"
            img.setAttribute('data-id', id); // Ajout de l'attribut data-id 
            img.setAttribute('id', 'img'); // Ajout de l'attribut id 
            //ajout de l'image dans la balise article
            divImg.appendChild(img);
            article.appendChild(divImg);
        }
    });
}

    
            // creation de la div text
            const div = document.createElement('span');
            div.classList.add('text-media', 'media-text');
            // creation de l'élément h2
            const h2 = document.createElement( 'h2' );
            h2.classList.add('card-title', 'title-card'); // Ajout d'une classe à l'élément <h2>
            // ajout du nom dans le h2
            h2.textContent = title;
            // ajout du h2 dans la div
            div.appendChild(h2);
            //ajout du nom dans la balise article
    
            // article.appendChild(h2);
    
            // creation de la balise span
            const span1 = document.createElement( 'span' );
            span1.classList.add('card-likes', 'likes-card'); // Ajout d'une classe à l'élément <span>
            // ajout de la ville et du pays dans le span
            span1.textContent = likes;
            // création de l'élément i pour l'icône de coeur
            const heartIcon = document.createElement('i');
            heartIcon.classList.add('fa', 'fa-sharp', 'fa-solid', 'fa-heart');

// ajout de l'icône de coeur à l'élément span1
span1.appendChild(heartIcon);
            // ajout du span dans la balise article
            // article.appendChild( span1 );
            div.appendChild( span1 );
    
            // creation de la balise p
            const p2 = document.createElement( 'p' );
            p2.classList.add('media-price', 'price-media'); // Ajout d'une classe à l'élément <p>
            // ajout du prix dans le p
            p2.textContent = ` ${price}$ / jour`;
            // ajout du p dans la balise article
            article.appendChild( p2 );
            // div.appendChild( p2 );

            article.appendChild( div );
    
            return (article);
        }
        return { id, photographerId, title, image, likes, date, price , picture, getMediaCardDOM }
    }
