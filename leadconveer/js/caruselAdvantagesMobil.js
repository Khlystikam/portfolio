const caruselAdvantages = () => {
    if (window.innerWidth <= 450) {
        const advantagesItems = document.querySelectorAll(".advantages__matrix-item");
        const track = document.querySelector(".advantages__matrix");

        let currentIndex = 0;
        let startX = 0;
        let endX = 0;

        const itemCarousel = () => {
            advantagesItems.forEach(element => {
                element.style.display = "none";
            });

            advantagesItems[currentIndex].style.display = "flex";
        }

        itemCarousel();

        // Фиксируем свайп
        track.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
        });
        
        track.addEventListener("touchmove", (e) => {
            endX = e.touches[0].clientX;
        });
        
        track.addEventListener("touchend", () => {
            if (startX > endX + 50) {
                // Свайп влево
                currentIndex = (currentIndex + 1) % advantagesItems.length;
            } else if (startX < endX - 50) {
                // Свайп вправо
                currentIndex = (currentIndex - 1 + advantagesItems.length) % advantagesItems.length;
            }

            itemCarousel();  
        });

        itemCarousel();
    }
}

caruselAdvantages();