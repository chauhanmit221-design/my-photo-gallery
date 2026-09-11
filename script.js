fetch("http://localhost:8000/api/photos")
    .then(response => response.json())
    .then(photos => {

        const gallery = document.querySelector(".gallery");

        photos.forEach(photo => {

            const img = document.createElement("img");

            img.src = "http://localhost:8000" + photo;

            img.alt = "My Photo";

            img.addEventListener("click", function () {
                window.open(img.src, "_blank");
            });

            gallery.appendChild(img);
        });

    })
    .catch(error => {
        console.error("Error loading photos:", error);
    });