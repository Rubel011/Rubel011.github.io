document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.navbar-menu').classList.toggle('active');
    document.querySelector('.hamburger').classList.toggle('active');
  });

document.querySelector('.navbar-menu').scrollIntoView(true);