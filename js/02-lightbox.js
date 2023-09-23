import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach(galleryItem => {
    const item = document.createElement("li");
    item.classList.add("gallery__item");
    
    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.setAttribute("href", galleryItem.original);

    const photo = document.createElement("img");
    photo.classList.add("gallery__image");
    photo.setAttribute("src", galleryItem.preview);
    photo.setAttribute("alt", galleryItem.description);

    link.appendChild(photo);
    item.appendChild(link);
    gallery.appendChild(item);
});

const lightbox = new SimpleLightbox(".gallery__item a", {
    sourceAttr: "href",
    captions: true,
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
    disableScroll: false,
    scrollZoom: false,
    doubleTapZoom: false,
});

gallery.addEventListener("click", (event) => {
    event.preventDefault();

    if (event.target.classList.contains("gallery__image")) {
        lightbox.open(event.target);
    }
});
