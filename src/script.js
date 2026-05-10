const menuBtn = document.getElementById('menu-btn');
  const navbarMenu = document.getElementById('navbar-menu');

  // Path Aset (Sesuaikan dengan folder Anda)
  const iconHamburger = "../assets/icons/Icon.svg";
  const iconClose = "../assets/icons/x-close.svg"; 

  let isOpen = false;

  menuBtn.addEventListener('click', () => {
    isOpen = !isOpen;

    if (isOpen) {
      navbarMenu.classList.remove('-translate-y-full'); // Menu Muncul
      navbarMenu.classList.add('translate-y-0');

      menuIcon.src = iconClose; // Ganti ke ikon silang
      document.body.style.overflow = 'hidden'; // menu disembunyikan
    } else {
      navbarMenu.classList.remove('translate-y-0');
      navbarMenu.classList.add('-translate-y-full'); // PAKAI MINUS
      
      menuIcon.src = iconHamburger; 
      document.body.style.overflow = 'auto'; // Ganti balik ke hamburger
    }
  });