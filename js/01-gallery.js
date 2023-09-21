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
    photo.setAttribute("data-source", galleryItem.original);
    photo.setAttribute("alt", galleryItem.description);

    link.appendChild(photo);
    item.appendChild(link);
    gallery.appendChild(item);
});

const openLightBox = event => {
    event.preventDefault();
    
    if (event.target.classList.contains("gallery__image")) {
        const instance = basicLightbox.create(
            `<img src="${event.target.dataset.source}" alt="${event.target.alt}" />`
        );
        instance.show();

        const closeEscape = e => {
            if (e.key === "Escape") {
                instance.close();
                gallery.removeEventListener("keydown", closeEscape);
            };
        };

        gallery.addEventListener("keydown", closeEscape);
    };
};

gallery.addEventListener("click", openLightBox);
