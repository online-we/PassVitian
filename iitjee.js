document.querySelectorAll('.chapter-header').forEach(header => {
    header.addEventListener('click', () => {
      const chapter = header.parentElement;
      chapter.classList.toggle('active');
  
      const button = header.querySelector('.toggle-btn');
      if (chapter.classList.contains('active')) {
        button.innerHTML = '&#11181;'; // Up arrow
      } else {
        button.innerHTML = '&#11183;'; // Down arrow
      }
    });
  });
  