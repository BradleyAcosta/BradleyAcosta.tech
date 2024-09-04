// projects.js

fetch(apiUrl, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then(response => response.json())
  .then(data => {
    const projects = data.map(repo => {
      return {
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        avatar_url: repo.owner.avatar_url,
      };
    });
    displayProjects(projects);
  })
  .catch(error => console.error(error));

function displayProjects(projects) {
  const projectList = document.getElementById('project-list');
  projects.forEach(project => {
    const projectItem = document.createElement('li');
    projectItem.innerHTML = `
      <div class="project-card" style="background-image: url(${project.avatar_url})">
        <h2>${project.name}</h2>
        <p>${project.description}</p>
      </div>
    `;
    projectItem.onclick = () => {
      window.location.href = project.url;
    };
    projectList.appendChild(projectItem);
  });
}



