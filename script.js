fetch("/api/photos")
    .then(response => response.json())
    .then(photos => {

        const gallery = document.querySelector(".gallery");

        photos.forEach(photo => {

            const img = document.createElement("img");

            img.src = photo;
            img.alt = "Photography";

            img.addEventListener("click", function () {

                const viewer = document.createElement("div");

                viewer.style.position = "fixed";
                viewer.style.top = "0";
                viewer.style.left = "0";
                viewer.style.width = "100%";
                viewer.style.height = "100%";
                viewer.style.background = "rgba(0,0,0,0.95)";
                viewer.style.display = "flex";
                viewer.style.alignItems = "center";
                viewer.style.justifyContent = "center";
                viewer.style.zIndex = "9999";
                viewer.style.cursor = "pointer";

                const fullImage = document.createElement("img");

                fullImage.src = photo;

                fullImage.style.maxWidth = "95%";
                fullImage.style.maxHeight = "90%";
                fullImage.style.objectFit = "contain";
                fullImage.style.borderRadius = "8px";

                viewer.appendChild(fullImage);
                document.body.appendChild(viewer);

                viewer.addEventListener("click", function () {
                    viewer.remove();
                });

            });

            gallery.appendChild(img);

        });

    })
    .catch(error => {
        console.error("Error loading photos:", error);
    });
