let dataProject = [];
console.log(dataProject);

function addProject(event) {
  event.preventDefault();

  let title = document.getElementById('input-title').value;
  let startDate = document.getElementById('input-startDate').value;
  let endDate = document.getElementById('input-endDate').value;
  let description = document.getElementById('input-description').value;
  let technologis1 = document.getElementById('input-technologis1').checked;
  let technologis2 = document.getElementById('input-technologis2').checked;
  let technologis3 = document.getElementById('input-technologis3').checked;
  let technologis4 = document.getElementById('input-technologis4').checked;
  let image = document.getElementById('input-image').files;

  image = URL.createObjectURL(image.files[0]);

  let project = {
    title,
    startDate,
    endDate,
    description,
    technologis1,
    technologis2,
    technologis3,
    technologis4,
    image,
  };

  dataProject.push(project);
  console.log(dataProject);

  renderProject();
}

function renderProject() {
  document.getElementById('listProject').innerHTML = `
        <div class="project-list-item">
            <div class="project-image">
                <img src="../asset/img/uplabs.png" alt="">
            </div>
            <div class="project-content">
                <h2>
                    <a href="myproject-detail.html" target="_blank">
                        Road Trip Mobile Apps
                    </a>
                </h2>
                <div class="duration-project">
                    <p>Durasi: <span>1 Bulan</span></p>
                </div>
                <div class="description-project">
                    <p>
                        UI/UX Design Road Trip Apps
                        Ini merupakan UI/UX Design pertama saya menggunakan Figma. Saya membuat UI/UX Design terinspirasi dari berbagai macam aplikasi terutama aplikasi perjalanan.
                    </p>
                </div>
                <div class="technologis-project">
                    <i class="fa-brands fa-node-js"></i>
                    <i class="fa-brands fa-react"></i>
                    <i class="fa-brands fa-laravel"></i>
                </div>
                <div class="btn-group">
                    <div class="btn-left">
                        <button>Edit</button>
                    </div>
                    <div class="btn-right">
                        <button class="del-btn">Delete</button>
                    </div>
                </div>
            </div>
        </div>   
    `;

  for (let i = 0; i < dataProject.length; i++) {
    document.getElementById('listProject').innerHTML += `
            <div class="project-list-item">
                <div class="project-image">
                    <img src="${dataProject[i].image}" alt="">
                </div>
                <div class="project-content" >
                    <h2>
                        <a href="myproject-detail.html" target="_blank">
                            ${dataProject[i].title}
                        </a>
                    </h2>
                    <div class="duration-project">
                        <p>Durasi: <span>${getTime(dataProject[i].startDate, dataProject[i].endDate)}</span></p>
                    </div>
                    <div class="description-project">
                        <p>
                            ${dataProject[i].description}
                        </p>
                    </div>
                    <div class="technologis-project">
                        ${dataProject[i].technologis1 ? `<i class="fa-brands fa-node-js"></i>` : ''}
                        ${dataProject[i].technologis2 ? `<i class="fa-brands fa-react"></i>` : ''}
                        ${dataProject[i].technologis3 ? `<i class="fa-brands fa-angular"></i>` : ''}
                        ${dataProject[i].technologis4 ? `<i class="fa-brands fa-laravel"></i>` : ''}
                    </div>
                    <div class="btn-group">
                        <div class="btn-left">
                            <button>Edit</button>
                        </div>
                        <div class="btn-right">
                            <button class="del-btn">Delete</button>
                        </div>
                    </div>
                </div>
            </div> 
        `;
  }
}

function getTime(startDate, endDate) {
  if (startDate[5] == 0) {
    startDate = startDate[6];
  } else {
    startDate = startDate[5] + startDate[6];
  }
  if (endDate[5] == 0) {
    endDate = endDate[6];
  } else {
    endDate = endDate[5] + endDate[6];
  }

  const startMonth = Number(startDate);
  const endMonth = Number(endDate);

  const duration = endMonth - startMonth;

  if (duration === 0) return '<1 bulan';

  return endMonth - startMonth + ' ' + 'bulan';
}
