fetch("/api/photos")
    .then(response => response.json())
    .then(photos => {

        const gallery = document.querySelector(".gallery");

        photos.forEach(photo => {

            const img = document.createElement("img");

            img.src = photo;

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
