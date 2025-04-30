$(document).ready(function() {
    // Fetch project data from the server
    $.get('/api/projects', function(projects) {
      const cardSection = $('#card-section');
  
      // Loop through each project and create a card for it
      projects.forEach(function(project) {
        const card = `
          <div class="col s12 m6 l4">
            <div class="card">
              <div class="card-image">
                <img src="${project.image}" alt="${project.title}">
                <span class="card-title">${project.title}</span>
              </div>
              <div class="card-content">
                <p>${project.description}</p>
              </div>
              <div class="card-action">
                <a href="${project.link}" target="_blank">Learn More</a>
              </div>
            </div>
          </div>
        `;
        cardSection.append(card); // Append the card to the card section
      });
    });
  });
  