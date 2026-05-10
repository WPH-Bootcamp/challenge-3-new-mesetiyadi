const menuBtn = document.getElementById('menu-btn');
  const navbarMenu = document.getElementById('navbar-menu');

  // Path Aset (Sesuaikan dengan folder Anda)
  const menuIcon = document.getElementById('menu-icon');
  const iconHamburger = "../assets/icons/Icon.svg";
  const iconClose = "../assets/icons/x-close.svg"; 

  let isOpen = false;

  menuBtn.addEventListener('click', () => {
    isOpen = !isOpen;

    if (isOpen) {
      navbarMenu.classList.remove('hidden'); // Menu Muncul
      
      setTimeout(() => {
      navbarMenu.classList.replace('-translate-y-full', 'translate-y-0');
      }, 10);

    if(menuIcon) menuIcon.src = iconClose; 
    document.body.classList.add('overflow-hidden'); // Pakai class lebih rapi
    } 
    
    else {
      navbarMenu.classList.replace('translate-y-0', '-translate-y-full');
    
    if(menuIcon) menuIcon.src = iconHamburger; 
    document.body.classList.remove('overflow-hidden');

    // Sembunyikan total setelah animasi selesai (misal durasi 500ms)
    setTimeout(() => {
      if (!isOpen) navbarMenu.classList.add('hidden');
    }, 500);
    }
  });