const burgerMenuOpen = document.getElementsByClassName("burger-nav__icon--open")[0];
const burgerMenuClose = document.getElementsByClassName("burger-nav__icon--close")[0];
const burgerMenuNav = document.getElementsByClassName("nav")[0];
const burgerToggle = document.querySelectorAll(".nav__link");
const scrollPosition = window.pageYOffset;


const toggleImgBurgerMenu = () => {
    const currentDisplay = window.getComputedStyle(burgerMenuOpen).display;

    if (currentDisplay === "flex") {
        burgerMenuOpen.style.display = "none";

        Object.assign(burgerMenuClose.style, {
            display: "flex",
            zIndex: "1500",
        });

        burgerMenuNav.style.display = "flex";

        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = "100%";
    } else {
        burgerMenuOpen.style.display = "flex";
        burgerMenuClose.style.display = "none";
        burgerMenuNav.style.display = "none";

        document.body.style.position = "";
        document.body.style.overflow = "";
        document.body.style.top = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    burgerToggle.forEach(link => {
        link.addEventListener("click", () => {
            burgerMenuOpen.style.display = "flex";
            burgerMenuClose.style.display = "none";
            burgerMenuNav.style.display = "none";
            
            document.body.style.position = "";
            document.body.style.overflow = "";
            document.body.style.top = "";
            window.scrollTo(0, parseInt(scrollY || "0") * -1);
        });
    });

}