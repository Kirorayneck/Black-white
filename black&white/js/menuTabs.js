const menuTabs = () => {
  const tabHeader = document.querySelector('#menuTabs'),
    tab = tabHeader.querySelectorAll('.menu-gallery__item'),
    tabContent = tabHeader.querySelectorAll('.pages-box');
  const toggleTabContent = (index) => {
    for (let i = 0; i < tabContent.length; i++) {
      if (index === i) {
        tabContent[i].classList.add('pages-box__active');
      } else {
        tabContent[i].classList.remove('pages-box__active');
      }
    }
  };
  tab.forEach((item, i) => {
    item.addEventListener(`click`, (event) => {
      event.preventDefault();
      let target = event.target;
      if (target.parentNode === item.children[0] || target.parentNode === item || target === item) {
        toggleTabContent(i);
      }
    });
  });
};
menuTabs();