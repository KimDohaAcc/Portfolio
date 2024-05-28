// DOM 요소 가져오기
const toastModal = document.getElementById("activities-modal");
const openToastBtn = document.getElementById("activities-modal-button");
const closeToastBtn = document.getElementById("close-activities");

// 모달 열기 함수
openToastBtn.onclick = function () {
  if (toastModal.classList.contains("show")) {
    toastModal.classList.remove("show");
  } else {
    toastModal.classList.add("show");
  }
};

// 모달 닫기 함수
closeToastBtn.onclick = function () {
  toastModal.classList.remove("show");
};

// 모달 외부 클릭 시 닫기 함수
window.onclick = function (event) {
  if (event.target == toastModal) {
    toastModal.classList.remove("show");
  }
};

// DOM 요소 가져오기
const educationModal = document.getElementById("education-modal");
const educationToastBtn = document.getElementById("education-modal-button");
const closeeducationBtn = document.getElementById("close-education");

// 모달 열기 함수
educationToastBtn.onclick = function () {
  if (educationModal.classList.contains("show")) {
    educationModal.classList.remove("show");
  } else {
    educationModal.classList.add("show");
  }
};

// 모달 닫기 함수
closeeducationBtn.onclick = function () {
  educationModal.classList.remove("show");
};

// 모달 외부 클릭 시 닫기 함수
window.onclick = function (event) {
  if (event.target == educationModal) {
    educationModal.classList.remove("show");
  }
};

const skillsModal = document.getElementById("skills-modal");
const skillsToastBtn = document.getElementById("skills-modal-button");
const skillsCloseBtn = document.getElementById("close-skills");

// 모달 열기 함수
skillsToastBtn.onclick = function () {
  if (skillsModal.classList.contains("show")) {
    skillsModal.classList.remove("show");
  } else {
    skillsModal.classList.add("show");
  }
};

// 모달 닫기 함수
skillsCloseBtn.onclick = function () {
  skillsModal.classList.remove("show");
};

// 모달 외부 클릭 시 닫기 함수
window.onclick = function (event) {
  if (event.target == skillsModal) {
    skillsModal.classList.remove("show");
  }
};

const skillList = document.querySelectorAll('.skill-toast-ul li');
const projectModal = document.createElement('div');
projectModal.classList.add('project-modal');
document.body.appendChild(projectModal);

function closeModal() {
    projectModal.classList.remove('show');
    setTimeout(function() {
        projectModal.style.display = 'none';
    }, 300);
}

window.addEventListener('click', function(event) {
    if (!event.target.closest('.project-modal-content') && !event.target.closest('.skill-toast-ul li')) {
        closeModal();
    }
});

skillList.forEach(skill => {
    skill.addEventListener('click', function(event) {
        const tech = event.target.textContent.trim();
        const projects = getProjectsByTech(tech);
        console.log(projects);

        if (projects.length > 0) {
            const projectList = projects.map(project => `<a href="${project.link}" target="_blank">${project.title}</a>`).join('<br>');
            projectModal.innerHTML = `
                <div class="project-modal-content">
                    <span class="close-project-modal">&times;</span>
                    <strong>${tech}</strong>이(가) 사용된 프로젝트<br><br>${projectList}
                </div>
            `;
        } else {
            projectModal.innerHTML = `
                <div class="project-modal-content">
                    <span class="close-project-modal">&times;</span>
                    <strong>${tech}</strong>이(가) 사용된 프로젝트가 없습니다.
                </div>
            `;
        }

        projectModal.style.left = `${event.clientX}px`;
        projectModal.style.top = `${event.clientY}px`;
        projectModal.style.display = 'block';
        setTimeout(function() {
            projectModal.classList.add('show');
        }, 0);

        const closeProjectModal = projectModal.querySelector('.close-project-modal');
        closeProjectModal.addEventListener('click', closeModal);
    });
});

function getProjectsByTech(tech) {
    const projects = [window.Omegi, window.TobysCarrotFarm, window.MommyLetter, window.HealthPanda, window.butok, window.GamjaMarket, window.Portfolio];
    return projects.filter(project =>
        project.skillLang.includes(tech) ||
        project.skillFrame.includes(tech) ||
        project.skillDatabase.includes(tech) ||
        project.skillOther.includes(tech)
    );
}