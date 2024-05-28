window.onload = function () {
    var pastelColors = [
        "rgba(247, 163, 167, 0.7)", // #F7A3A7
        "rgba(247, 173, 151, 0.7)", // #F7AD97
        "rgba(250, 216, 158, 0.7)", // #FAD89E
        "rgba(200, 215, 196, 0.7)", // #C8D7C4
        "rgba(187, 203, 210, 0.7)", // #BBCBD2
        "rgba(183, 182, 214, 0.7)", // #B7B6D6
        "rgba(226, 187, 216, 0.7)"  // #E2BBD8
    ];

    var spans = document.querySelectorAll('.skillSpan');
    spans.forEach(function (span) {
        var randomIndex = Math.floor(Math.random() * pastelColors.length);
        span.style.backgroundColor = pastelColors[randomIndex];
    });
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const profileSection = document.querySelector(".profile-section");
const projectsSection = document.querySelector(".projects");
const interestsSection = document.querySelector(".interests");

const backendDiv = projectsSection.querySelector(".backend");
const backendMiniDiv = projectsSection.querySelector(".backend-mini");
const frontendDiv = projectsSection.querySelector(".frontend");

const headers = document.getElementsByTagName("header");

for (let i = 0; i < headers.length; i++) {
    const header = headers[i];

    const tags = header.getElementsByClassName("tag");
    const profileTag = tags[0];
    const projectTag = tags[1];
    const interestsTag = tags[2];

    profileSection.addEventListener("mouseenter", e => {
        profileTag.setAttribute("style", "display : block");
    });
    profileSection.addEventListener("mouseleave", e => {
        profileTag.setAttribute("style", "display : none");
    });

    projectsSection.addEventListener("mouseenter", e => {
        projectTag.setAttribute("style", "display : block");
    });
    projectsSection.addEventListener("mouseleave", e => {
        projectTag.setAttribute("style", "display : none");
    });

    interestsSection.addEventListener("mouseenter", e => {
        interestsTag.setAttribute("style", "display : block");
    });
    interestsSection.addEventListener("mouseleave", e => {
        interestsTag.setAttribute("style", "display : none");
    });
}

function Project(link, imageUrl, title, description, detailPeriod, skillLang, skillFrame, skillDatabase, skillOther, period, site, person, role, review) {
    this.link = link;
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.detailPeriod = detailPeriod;
    this.skillLang = skillLang;
    this.skillFrame = skillFrame;
    this.skillDatabase = skillDatabase;
    this.skillOther = skillOther;
    this.period = period;
    this.person = person;
    this.site = site;
    this.role = role;
    this.review = review;
}

function addProject(project, targetContainer, imageSize, imagePosition) {
    let container;
    if (targetContainer === "backend") {
        container = backendDiv;
    }

    else if (targetContainer === "backend-mini") {
        container = backendMiniDiv;
    }

    else {
        container = frontendDiv;
    }

    const articleContainer = document.createElement("article")

    articleContainer.style.display = "flex";
    articleContainer.style.flexDirection = "row";
    articleContainer.style.alignItems = "space-around";
    articleContainer.style.marginBottom = "50px"

    const article = document.createElement("div");
    const info = document.createElement("h6");
    const a = document.createElement("a");
    const projectImg = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("h6");
    const skills = document.createElement("div");
    const period = document.createElement("span");

    info.innerText = "Click해서 상세 내용 보기✨";
    info.style.textAlign = "right";
    info.style.fontSize = "13px";
    info.style.paddingBottom = "10px";
    article.setAttribute("class", `article ${project.title}`);
    article.style.height = "40vh";
    article.style.position = "relative";
    a.setAttribute("href", project.link);
    a.setAttribute("target", "_blank");
    projectImg.setAttribute("class", "project-img");
    projectImg.setAttribute("style", `background: no-repeat ${imagePosition} url('${project.imageUrl}'); background-size: ${imageSize}`);
    title.setAttribute("class", "title");
    title.innerText = project.title;
    description.className = "description";
    description.innerText = project.description;
    skills.setAttribute("class", "skills");
    skills.style.display = "flex";
    skills.style.flexFlow = "wrap column";
    skills.style.height = "fit-content";
    period.className = "period";
    period.innerText = `${project.period[0]} ~ ${project.period[1]}`;
    period.style.position = "absolute";
    period.style.bottom = "0";


    article.append(info);
    a.append(projectImg);
    article.append(a);
    article.append(title);
    article.append(description);

    let skillTitle = document.createElement("h6");
    skills.append(skillTitle);
    let skillDiv = document.createElement("div");
    skillDiv.style.display = "flex";
    skillDiv.style.flexFlow = "wrap row";
    skillDiv.style.height = "fit-content";
    skillTitle.innerText = "Languages";
    project.skillLang.forEach(str => {
        const skill = document.createElement("span");
        skill.setAttribute("class", "skillSpan");
        skill.innerText = str;
        skill.style.marginBottom = "2%";
        skillDiv.append(skill);
    });
    skills.append(skillDiv);

    skillTitle = document.createElement("h6");
    skills.append(skillTitle);
    skillDiv = document.createElement("div");
    skillDiv.style.display = "flex";
    skillDiv.style.flexFlow = "wrap row";
    skillDiv.style.height = "fit-content";
    skillTitle.innerText = "Frameworks & Libraries";
    project.skillFrame.forEach(str => {
        const skill = document.createElement("span");
        skill.setAttribute("class", "skillSpan");
        skill.innerText = str;
        skill.style.marginBottom = "2%";
        skillDiv.append(skill);
    });
    skills.append(skillDiv);

    skillTitle = document.createElement("h6");
    skills.append(skillTitle);
    skillDiv = document.createElement("div");
    skillDiv.style.display = "flex";
    skillDiv.style.flexFlow = "wrap row";
    skillDiv.style.height = "fit-content";
    skillTitle.innerText = "Databases";
    project.skillDatabase.forEach(str => {
        const skill = document.createElement("span");
        skill.setAttribute("class", "skillSpan");
        skill.innerText = str;
        skill.style.marginBottom = "2%";
        skillDiv.append(skill);
    });
    skills.append(skillDiv);

    skillTitle = document.createElement("h6");
    skills.append(skillTitle);
    skillDiv = document.createElement("div");
    skillDiv.style.display = "flex";
    skillDiv.style.flexFlow = "wrap row";
    skillDiv.style.height = "fit-content";
    skillTitle.innerText = "Other Technologies";
    project.skillOther.forEach(str => {
        const skill = document.createElement("span");
        skill.setAttribute("class", "skillSpan");
        skill.innerText = str;
        skill.style.marginBottom = "2%";
        skillDiv.append(skill);
    });
    skills.append(skillDiv);

    article.append(skills);
    article.append(period);

    articleContainer.append(article);

    const detailArticle = document.createElement("div");
    const detailSiteLinkArticle = document.createElement("p");
    const siteLinkTitle = document.createElement("strong");
    const siteLink = document.createElement("a");
    const detailPersonArticle = document.createElement("span");
    const detailPersonTitle = document.createElement("strong");
    const detailPerson = document.createElement("span");
    const detailPeriodTitle = document.createElement("strong");
    const detailPeriod = document.createElement("p");
    const detailRoleArticle = document.createElement("p");
    const detailRoleTitle = document.createElement("strong");
    const detailRole = document.createElement("p");
    const detailReviewArticle = document.createElement("p");
    const detailReviewTitle = document.createElement("strong");
    const detailReview = document.createElement("p");

    detailArticle.className = "detail-article";
    siteLinkTitle.setAttribute("class", "detail-title");
    siteLinkTitle.innerText = "Github\t\t";
    siteLink.setAttribute("class", "detail-content");
    siteLink.href = project.site;
    siteLink.innerText = project.site;
    detailPersonTitle.setAttribute("class", "detail-title");
    detailPersonTitle.innerText = "\n개발 인원\t";
    detailPerson.setAttribute("class", "detail-content");
    detailPerson.innerText = project.person;
    detailPeriodTitle.setAttribute("class", "detail-title");
    detailPeriodTitle.innerText = "\n\n개발 기간";
    detailPeriod.setAttribute("class", "detail-content");
    detailPeriod.innerText = project.detailPeriod;
    detailRoleTitle.setAttribute("class", "detail-title");
    detailRoleTitle.innerText = "\n담당 역할";
    detailRole.setAttribute("class", "detail-content");
    detailRole.innerText = project.role;
    detailReviewTitle.setAttribute("class", "detail-title");
    detailReviewTitle.innerText = "\n기술 프리뷰";
    detailReview.setAttribute("class", "detail-content");
    detailReview.innerText = project.review;

    detailArticle.append(detailSiteLinkArticle);
    detailSiteLinkArticle.append(siteLinkTitle);
    detailSiteLinkArticle.append(siteLink);
    detailArticle.append(detailPersonArticle);
    detailPersonArticle.append(detailPersonTitle);
    detailPersonArticle.append(detailPerson);
    detailArticle.append(detailPeriodTitle);
    detailArticle.append(detailPeriod);
    detailArticle.append(detailRoleArticle);
    detailRoleArticle.append(detailRoleTitle);
    detailRoleArticle.append(detailRole);
    detailArticle.append(detailReviewArticle);
    detailReviewArticle.append(detailReviewTitle);
    detailReviewArticle.append(detailReview);
    articleContainer.append(detailArticle);

    container.append(articleContainer);
}

// 언어, 프레임워크, db, other
const Omegi = new Project(
    "./omegi.html",
    "/resources/images/omegi-logo.PNG",
    "_Omegi_",
    "오류를 자동으로 추적 및 분석하며, 해결 과정을 노트로 남길 수 있는 서비스",
    "기획 : 2024.04.03 - 2024.04.15\n"
    + "설계 : 2024.04.16 - 2024.04.23\n"
    + "프로젝트 개발 : 2024.04.24 - 2024.05.12\n"
    + "테스트 : 2024.05.13 - 2024.05.20\n",
    ['Java', 'Python', 'Typescript'],
    ['SpringBoot', 'SpringSecurity','JPA', 'React'],
    ['MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
    ['Apache Kafka', 'RabbitMQ', 'Nginx', 'Docker', 'Jenkins', 'Jira', 'Gitlab'],
    ["2024.04.03", "2024.05.20"],
    "https://github.com/TeamOmegi",
    "🙋‍♀️🧞‍♀️🙋🧟‍♀️🙋‍♂️🙋",
    "Java Instrumentation 제작\n정상 요청 가공 및 전송 로직 구현\n서버 인프라 구축",
    "[Custom JavaAgent 제작]"
    + "\n[Kafka Consumer 확장]"
    + "\n[배치 및 스케줄러 도입]"
);
addProject(Omegi, "backend", "contain", "center");


// 언어, 프레임워크, db, other
const TobysCarrotFarm = new Project(
    "./toby.html",
    "/resources/images/toby.png",
    "Toby's Carrot Farm",
    "AI 퀴즈를 기반으로 한 미취학 아동 교육 서비스",
    "기획 : 2024.02.19 - 2024.02.28\n"
    + "설계 : 2024.02.28 - 2024.03.08\n"
    + "프로젝트 개발 : 2024.03.08 - 2024.03.29\n"
    + "테스트 : 2024.03.29 - 2024.04.08\n",
    ['Java', 'Python', 'Typescript'],
    ['SpringBoot', 'SpringSecurity','JPA', 'React'],
    ['MySQL', 'Redis'],
    ['Apache Kafka', 'Nginx', 'Docker', 'Jenkins', 'Jira', 'Gitlab'],
    ["2024.02.19", "2024.04.08"],
    "https://github.com/KimDohaAcc/Toby-carrot-garden.git",
    "🙋‍♀️🙋‍♂️🙋🧞‍♀️🙋‍♂️🙋",
    "스토리 관련 API 구현\n서버 인프라 구축\nJenkins 파이프라인 구축\nAI 모델 테스트",   
    "[Docker 컨테이너와 Nginx의 활용]"
    + "\n[Jenkins 파이프라인을 이용한 CI/CD 구축]"
    + "\n[PWA 서비스 워커의 캐시 문제 해결]"
    + "\n[AI 물체 분석 결과 개선]"

);

addProject(TobysCarrotFarm, "backend", "contain", "center");


const MommyLetter = new Project(
    "./mommyletter.html",
    "/resources/images/mommyletter.png",
    "MommyLetter",
    "임산부를 위한 SNS 모바일 웹",
    "기획 : 2024.01.03 - 2024.01.14\n"
    + "설계 : 2024.01.15 - 2024.01.20\n"
    + "프로젝트 개발 : 2024.01.21 - 2024.02.12\n"
    + "테스트 : 2024.02.13 - 2024.02.16\n",
    ['Java', 'Typescript'],
    ['SpringBoot', 'SpringSecurity', 'JPA', 'React'],
    ['MariaDB', 'MongoDB'],
    ['Apache Kafka', 'STOMP', 'Docker', 'Jira', 'Gitlab'],
    ["2024.01.03", "2024.02.16"],
    "https://github.com/KimDohaAcc/MommyLetter.git",
    "🙋‍♀️🙋‍♂️🙋🙋‍♀️🙋‍♂️🙋",
    "DirectMessage, GroupChat, 피드, 댓글, 좋아요, 해시태그 API 구현",
    "[그룹채팅 기능 추가]\n"
    + "[Gerrit을 활용한 코드 리뷰]"

);

addProject(MommyLetter, "backend", "contain", "center");

const HealthPanda = new Project(
    "./healthpanda.html",
    "/resources/images/healthPanda.png",
    "Health-Panda",
    "카카오 챗봇을 활용한 헬스장 서비스",
    "2023.10.17 - 2023.11.23\n",
    ['Java', 'Vanilla JS'],
    ['SpringBoot', 'JPA', 'Vue.js'],
    ['MySQL', 'AWS S3', 'AWS RDS'],
    ['AWS EC2', 'AWS ACM', 'kakao-i-openbuilder'],
    ["2023.10.17", "2023.11.23"],
    "https://github.com/KimDohaAcc/HealthPanda.git",
    "🙋‍♀️🙋‍♂️",
    "챗봇 - 챗봇 개발 환경 구축, 식단 조회 및 기록, 식단 추천\n웹 - https 배포, RDS 구축, JWT 토큰 적용,운동 영상 추천, 좋아요 및 팔로우",
    "[Kakao-openbuilder 스킬 환경 고민]\n"
   + "[AWS를 활용한 HTTPS 설정]"
);

addProject(HealthPanda, "backend", "contain", "center");

const butok = new Project(
    "./butok.html",
    "/resources/images/toktok.png",
    "Butok",
    "부동산 전월세 실거래가 조회 사이트",
    "2023.04.27 - 2023.05.15\n",
    ['Java', 'Vanilla JS'],
    ['SpringBoot', 'SpringSecurity', 'JPA'],
    ['MySQL', 'AWS RDS'],
    ['JSP', 'AWS EC2', 'AWS S3'],
    ["2023.04.27", "2023.05.15"],
    "https://github.com/KimDohaAcc/Butok.git",
    "🙋‍♀️🙋‍♂️🙋🙋‍♀️",
    "회원의 선호 기반 매물 추천, 보안, 회원 관련 기능 구현",
    "[Spring security 적용]\n"
    +"[pageable을 활용한 pagination 처리]"
);

addProject(butok, "backend", "contain", "center");

const GamjaMarket = new Project(
    "./gamja-market.html",
    "/resources/images/potato.png",
    "Gamja-Market",
    "동네 중고 거래 플랫폼",
    "2023.04.11 - 2023.04.24\n",
    ['Java', 'Vanilla JS'],
    ['SpringBoot'],
    ['MySQL', 'Firebase', 'AWS RDS'],
    ['JSP', 'AWS EC2'],
    ["2023.04.11", "2023.04.24"],
    "https://github.com/KimDohaAcc/GamjaMarket.git",
    "🙋‍♀️🙋‍♂️🙋🙋‍♀️",
    "판매자와 구매자 1:1 채팅, 자유게시판 기능 구현",
    "[firebase의 realtime-database를 활용한 채팅 구현]\n"
);

addProject(GamjaMarket, "backend", "contain", "center");


const Portfolio = new Project(
    "/",
    "/resources/images/portfolio.png",
    "Portfolio",
    "김도하의 포트폴리오",
    "상시 업데이트 중",
    ['Vanila JS'],
    ['None'],
    ['None'],
    ['HTML5', 'CSS3'],
    ["1997.04.10", "2099.04.10"],
    "https://doha-portfolio.site/",
    "🙋‍♀️",
    "기획, 설계, 개발, 테스트",
    "[백엔드 개발자의 포트폴리오 페이지 도전기]"
);

addProject(Portfolio, "backend", "contain", "center");

window.Project = Project;
window.addProject = addProject;
window.Omegi = Omegi;
window.TobysCarrotFarm = TobysCarrotFarm;
window.MommyLetter = MommyLetter;
window.HealthPanda = HealthPanda;
window.butok = butok;
window.GamjaMarket = GamjaMarket;
window.Portfolio = Portfolio;