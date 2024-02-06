function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    var button = content.querySelector('.toggle-button');
  
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      button.textContent = 'Ler mais';
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      button.textContent = 'Ler menos';
    }
  }
  