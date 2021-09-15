const accordion = () => {

  const
    wrapper = document.querySelector('.accordion'),
    tabs = Array.from(wrapper.querySelectorAll('h2')),
    messages = Array.from(wrapper.querySelectorAll('.msg'));

  let currentTab = 0;

  const prevSlide = (elem, index, strclass) => {
    elem[index].classList.remove(strclass);
    messages[index].maxHeight = 0;
  };
  const nextSlide = (elem, index, strclass) => {
    elem[index].classList.add(strclass);
  };

  wrapper.addEventListener('click', event => {
    const target = event.target;
    console.log('target: ', target);
    if (!target.matches('h2')) return;
    prevSlide(tabs, currentTab, 'msg-active');
    currentTab = tabs.indexOf(target);
    nextSlide(tabs, currentTab, 'msg-active');
  });

};

export default accordion;
