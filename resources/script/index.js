
const projectsSection = document.querySelector(".projects");
const interestsSection = document.querySelector(".interests");

const backendDiv = projectsSection.querySelector(".backend");
const backendMiniDiv = projectsSection.querySelector(".backend-mini");
const frontendDiv = projectsSection.querySelector(".frontend");

const headers = document.getElementsByTagName("header");

for (let i = 0; i < headers.length; i++) {
    const header = headers[i];

    const tags = header.getElementsByClassName("tag");
    const projectTag = tags[0];
    const interestsTag = tags[1];

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

function Project(link, imageUrl, title, description, skills, period, site, person, role, review) {
    this.link = link;
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.skills = skills;
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

    else if(targetContainer === "backend-mini") {
        container = backendMiniDiv;
    }

    else {
        container = frontendDiv;
    }

    const articleContainer = document.createElement("article")

    articleContainer.style.display = "flex";
    articleContainer.style.flexFlow = "wrap row";

    const article = document.createElement("div");
    const info = document.createElement("p");
    const a = document.createElement("a");
    const projectImg = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("h6");
    const skills = document.createElement("div");
    const period = document.createElement("span");
    
    info.innerText = "Click to go Github✨";
    info.style.fontWeight = 500;
    info.style.fontSize = "8pt";
    info.style.textAlign = "right";
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
    skills.style.flexFlow = "wrap row";
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
    project.skills.forEach(str => {
        const skill = document.createElement("span");
        skill.innerText = str;
        skill.style.marginBottom = "2%";
        skills.append(skill);
    });
    article.append(skills);
    article.append(period);

    articleContainer.append(article);

    const detailArticle = document.createElement("div");
    const siteLinkTitle = document.createElement("strong");
    const siteLink = document.createElement("a");
    const detailPersonTitle = document.createElement("strong");
    const detailPerson = document.createElement("span");
    const detailRoleTitle = document.createElement("strong");
    const detailRole = document.createElement("p");
    const detailReviewTitle = document.createElement("strong");
    const detailReview = document.createElement("p");

    siteLinkTitle.setAttribute("class", "detail-title");
    siteLinkTitle.innerText = "Github\t\t";
    siteLink.setAttribute("class", "detail-content");
    siteLink.href = project.site;
    siteLink.innerText = project.site;
    detailArticle.className = "detail-article";
    detailPersonTitle.setAttribute("class", "detail-title");
    detailPersonTitle.innerText = "\n\n인원 ";
    detailPerson.setAttribute("class", "detail-content");
    detailPerson.innerText = project.person;
    detailRoleTitle.setAttribute("class", "detail-title");
    detailRoleTitle.innerText = "\n\n담당 역할";
    detailRole.setAttribute("class", "detail-content");
    detailRole.innerText = project.role;
    detailReviewTitle.setAttribute("class", "detail-title");
    detailReviewTitle.innerText = "기술 리뷰";
    detailReview.setAttribute("class", "detail-content");
    detailReview.innerText = project.review;
    
    detailArticle.append(siteLinkTitle);
    detailArticle.append(siteLink);
    detailArticle.append(detailPersonTitle);
    detailArticle.append(detailPerson);
    detailArticle.append(detailRoleTitle);
    detailArticle.append(detailRole);
    detailArticle.append(detailReviewTitle);
    detailArticle.append(detailReview);

    articleContainer.append(detailArticle);
    container.append(articleContainer);
}

// const bookSearch = new Project(
//     "/book",
//     "/resources/images/bookSearch.jpg",
//     "Book Search",
//     "Book Search and Inquiry Service",
//     ['VanilaJS', 'jQeury', 'Kakao Search API'],
//     ['2023.03.13', '2023.03.13']
// );

// addProject(bookSearch, "frontend", "contain", "center");

// const omok = new Project(
//     "/omok",
//     "/resources/images/baduk.jpg",
//     "Omok",
//     "Omok Game",
//     ['VanilaJS'],
//     ['2023.03.12', '2023.03.12']
// );

// addProject(omok, "frontend", "contain", "center");


const HealthPanda = new Project(
    "https://github.com/KimDohaAcc/HealthPanda.git",
    "/resources/images/healthPanda.png",
    "Health-Panda",
    "헬스장 웹/챗봇 서비스 (Web Project)",
    ['JAVA','Spring','Vue','mySQL','JS', 'node.js', 'AWS', 'kakao-openbuilder'],
    ["2023.10.17", "2023.11.23"],
    "https://github.com/KimDohaAcc/HealthPanda.git",
    "👤👤",
    "챗봇 - 챗봇 개발 환경 구축, 식단 조회 및 기록, 식단 추천\n웹 - https 배포, RDS 구축, JWT 토큰 적용,운동 영상 추천, 좋아요 및 팔로우",
    "[kakao-openbuilder 스킬 환경 구축]\n\n서버 환경을 결정할 때는 비용과 효율을 고려해야 했습니다. 초기에는 Lambda를 선택하여 서버리스 컴퓨팅을 시도했지만, Lambda는 Spring Boot 및 데이터베이스와 같은 추가적인 설정이 필요했습니다. 또한, Lambda의 cold start 문제와 함수 크기 제한으로 인해 Spring Boot를 사용할 때는 많은 최적화가 필요했습니다. 이에 따라 짧은 프로젝트 기간과 Spring Boot 환경을 고려하여 EC2를 선택했습니다."
    + 
    "\n\n[AWS를 활용한 https 설정]\n\nHTTPS 보안 서버를 구축하기 위해 도메인 발급과 AWS의 Route53을 사용하여 도메인 소유를 인증하고, ACM으로 SSL 인증서를 발급 받았습니다. 또한, 모든 요청을 HTTPS로 리다이렉션하기 위해 Load Balancer에 규칙을 추가했습니다."
);

addProject(HealthPanda, "backend", "contain", "center");

const butok = new Project(
    "https://github.com/KimDohaAcc/Butok.git",
    "/resources/images/toktok.png",
    "Butok",
    "부동산 전월세 실거래가 조회 사이트 (Web Project)",
    ['JAVA','Spring','mySQL','JSP','JS', 'AWS'],
    ["2023.04.27", "2023.05.15"],
    "https://github.com/KimDohaAcc/Butok.git",
    "👤👤👤👤",
    "회원의 선호 기반 매물 추천, 회원 보안",
    "[Spring security 적용]\n\n"
    + "Spring security 2.7 버전을 사용하여 비밀번호를 암호화 하였으며, 회원과 관리자의 역할을 나눠 관리자 페이지의 접근을 막았습니다. "
    + "그 과정에서 필요한 config 파일 작성 방법과 userDetail 상속 등을 익힐 수 있었으며, jsp에서 spring security tag library를 활용하여 간편하게 권한 확인을 할 수 있었습니다."
    + "\n\n[pageable을 활용한 pagination 처리]\n\nPageable을 이용하여 페이지네이션 처리를 구현하였습니다. 전월세 데이터가 많이 존재하는 경우 데이터를 효율적으로 관리하고 사용자에게 더 나은 경험을 제공할 수 있었습니다. 이를 통해 데이터 관리와 성능 최적화에 대한 이해를 높였습니다."
    + "..."
);

addProject(butok, "backend", "contain", "center");

const GamjaMarket = new Project(
    "https://github.com/KimDohaAcc/GamjaMarket.git",
    "/resources/images/potato.png",
    "Gamja-Market",
    "동네 중고 거래 사이트 (Web Project)",
    ['JAVA','mySQL','JSP','JS', 'AWS'],
    ["2023.04.11", "2023.04.24"],
    "https://github.com/KimDohaAcc/GamjaMarket.git",
    "👤👤👤👤",
    "판매자와 구매자 1:1 채팅, 자유게시판",
    "[firebase의 realtime-database를 활용한 채팅 구현]\n\n"
    + "Firebase의 Realtime Database를 활용하여 실시간 채팅 및 채팅 알람 기능을 구현했습니다. 이를 통해 사용자들이 실시간으로 채팅할 수 있으며, 새로운 메시지가 도착하면 메인 화면에 알림을 표시했습니다. 이를 통해 실시간 데이터 처리 및 알림 시스템을 구축하면서 Message Listener에 대한 개념을 익혔습니다."
);

addProject(GamjaMarket, "backend", "contain", "center");

// const RentCar = new Project(
//     "https://github.com/KimDohaAcc/Rentcar.git",
//     "/resources/images/RentCar.png",
//     "RentCar",
//     "Console RentCar (Java mini project)",
//     ['JAVA', 'SQL','JSP','JS'],
//     ["2023.04.07", "2023.04.07"]
// );

// addProject(RentCar, "backend-mini", "contain", "center");

// const Poly_RPG_Console_Game = new Project(
//     "https://github.com/KimDohaAcc/Poly-RPG-Console-Game.git",
//     "/resources/images/Poly_RPG_Console_Game.png",
//     "Poly RPG Console Game",
//     "Poly_RPG_Console_Game (Java mini project)",
//     ['JAVA'],
//     ["2023.03.28", "2023.03.28"]
// );

// addProject(Poly_RPG_Console_Game, "backend-mini", "contain", "center");

// const Pokemon = new Project(
//     "https://github.com/KimDohaAcc/Pokemon.git",
//     "/resources/images/Pokemon.png",
//     "Pokemon",
//     "Console Pokemon (Java mini project)",
//     ['JAVA'],
//     ["2023.03.26", "2023.03.26"]
// );

// addProject(Pokemon, "backend-mini", "contain", "center");

// const RPG = new Project(
//     "https://github.com/KimDohaAcc/RPG-GAME.git",
//     "/resources/images/RPG-GAME.png",
//     "RPG",
//     "Console RPG (Java mini project)",
//     ['JAVA'],
//     ["2023.03.23", "2023.03.23"]
// );

// addProject(RPG, "backend-mini", "contain", "center");

// const atm = new Project(
//     "https://github.com/KimDohaAcc/ATM.git",
//     "/resources/images/ATM.jpg",
//     "DOHA BANK",
//     "Console ATM (Java mini project)",
//     ['JAVA'], 
//     ["2023.03.13", "2023.03.13"] 
// );

// addProject(atm, "backend-mini", "contain", "center");

