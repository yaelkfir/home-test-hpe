function changTo(e) {
  console.info('click');
  console.info(e.target);

  const header = document.querySelector('header');

  const logoContainer = header.querySelector('div');
  const logoTextH2 = logoContainer.querySelector('h2');
  const logotextSpan = logoContainer.querySelector('span');
  const subMenu = header.querySelector('.sub-menu');


  if ( logoTextH2.textContent === 'StormRunner') {
    header.classList.toggle('regular');
    header.classList.toggle('dark');

    console.info('dark');
    console.info(subMenu);

    subMenu.style.transform = 'translateY(-60px)';
    subMenu.style.opacity = 0;


    setTimeout(function(){

      subMenu.style.transform = 'translateY(0px)';
      subMenu.style.opacity = 1;
      subMenu.style.height = 60 +'px';


    }, 400);


    logoTextH2.textContent = 'SR';
    logotextSpan.textContent = 'F';
  }
  else {
    console.info('regular');
    subMenu.style.transform = 'translateY(0px)';
    subMenu.style.opacity = 1;
    subMenu.style.height = 60 +'px';

    subMenu.style.transform = 'translateY(-60px)';
    subMenu.style.opacity = 0;
    subMenu.style.height = 0;

    setTimeout(function(){

      header.classList.toggle('regular');
      header.classList.toggle('dark');


    }, 250);

    logoTextH2.textContent = 'StormRunner';
    logotextSpan.textContent = 'Functional';
  }

}

function onArrival() {
  const btn = document.querySelector('.btn');
  const exitBTN = document.querySelector('.exit-container');

  btn.addEventListener("click", changTo);
  exitBTN.addEventListener("click", changTo);
}

onArrival();