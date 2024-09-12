function loadComponent(url, elementId) {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        document.getElementById(elementId).innerHTML = html;
      })
      .catch(error => {
        console.error('Ошибка при загрузке компонента:', error);
      });
  }
  
  loadComponent('header.html', 'header');
  
  loadComponent('footer.html', 'footer');