body = document.querySelector('body');

const burgerMenuBtn = document.querySelector('#BurgerBtn'),
        burgerMenu = document.querySelector('#BurgerMenu'),
        burgerMenuOverlay = document.querySelector('#BurgerOverlay'),
        burgerMenuClose = document.querySelector('#BurgerClose');

    if (!burgerMenu && !burgerMenuBtn && !burgerMenuOverlay && !burgerMenuClose) {
        console.error('отсутствует важный элемент бургер меню')
    } else {
        const burgerOpen = () => {
            burgerMenuOverlay.classList.add('open');
            burgerMenu.classList.add('open');
            body.classList.add('scroll-lock');
        }
        const burgerClose = () => {
            burgerMenuOverlay.classList.remove('open');
            burgerMenu.classList.remove('open');
            body.classList.remove('scroll-lock');
        }

        burgerMenuBtn.addEventListener('click', burgerOpen);
        burgerMenuClose.addEventListener('click', burgerClose);
        burgerMenuOverlay.addEventListener('click', burgerClose);
    }