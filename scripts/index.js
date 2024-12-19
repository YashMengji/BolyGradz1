function popular(){
    const div = document.querySelector(".div-popular-list");

  let isDown = false;
  let startX;
  let scrollLeft;

  div.addEventListener('mousedown', (e) => {
    isDown = true;
    div.classList.add('active');
    startX = e.pageX - div.offsetLeft;
    scrollLeft = div.scrollLeft;
  });

  div.addEventListener('mouseleave', () => {
    isDown = false;
    div.classList.remove('active');
  });

  div.addEventListener('mouseup', () => {
    isDown = false;
    div.classList.remove('active');
  });

  div.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - div.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    div.scrollLeft = scrollLeft - walk;
  });
}

function trending(){
const div = document.querySelector(".div-trending-list");

  let isDown = false;
  let startX;
  let scrollLeft;

  div.addEventListener('mousedown', (e) => {
    isDown = true;
    div.classList.add('active');
    startX = e.pageX - div.offsetLeft;
    scrollLeft = div.scrollLeft;
  });

  div.addEventListener('mouseleave', () => {
    isDown = false;
    div.classList.remove('active');
  });

  div.addEventListener('mouseup', () => {
    isDown = false;
    div.classList.remove('active');
  });

  div.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - div.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    div.scrollLeft = scrollLeft - walk;
});
}

function shows(){
const div = document.querySelector(".div-shows-list");

  let isDown = false;
  let startX;
  let scrollLeft;

  div.addEventListener('mousedown', (e) => {
    isDown = true;
    div.classList.add('active');
    startX = e.pageX - div.offsetLeft;
    scrollLeft = div.scrollLeft;
  });

  div.addEventListener('mouseleave', () => {
    isDown = false;
    div.classList.remove('active');
  });

  div.addEventListener('mouseup', () => {
    isDown = false;
    div.classList.remove('active');
  });

  div.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - div.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    div.scrollLeft = scrollLeft - walk;
});
}

function action(){
const div = document.querySelector(".div-action-list");

  let isDown = false;
  let startX;
  let scrollLeft;

  div.addEventListener('mousedown', (e) => {
    isDown = true;
    div.classList.add('active');
    startX = e.pageX - div.offsetLeft;
    scrollLeft = div.scrollLeft;
  });

  div.addEventListener('mouseleave', () => {
    isDown = false;
    div.classList.remove('active');
  });

  div.addEventListener('mouseup', () => {
    isDown = false;
    div.classList.remove('active');
  });

  div.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - div.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    div.scrollLeft = scrollLeft - walk;
});
}

popular();
trending();
shows();
action();