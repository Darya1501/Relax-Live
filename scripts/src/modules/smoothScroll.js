const smoothScroll = () => {
  const anchors = document.querySelectorAll('a[href*="#"]');
  anchors.forEach(anchor => {
    anchor.addEventListener('click', event => {
      event.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);
      const block = document.getElementById(blockID);

      if (block) block.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
};

export default smoothScroll;
