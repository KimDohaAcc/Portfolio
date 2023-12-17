
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
    siteLinkTitle.innerText = "사이트\t\t";
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

const bookSearch = new Project(
    "/book",
    "/resources/images/bookSearch.jpg",
    "Book Search",
    "Book Search and Inquiry Service",
    ['VanilaJS', 'jQeury', 'Kakao Search API'],
    ['2023.03.13', '2023.03.13']
);

addProject(bookSearch, "frontend", "contain", "center");

const omok = new Project(
    "/omok",
    "/resources/images/baduk.jpg",
    "Omok",
    "Omok Game",
    ['VanilaJS'],
    ['2023.03.12', '2023.03.12']
);

addProject(omok, "frontend", "contain", "center");


const HealthPanda = new Project(
    "https://github.com/KimDohaAcc/HealthPanda.git",
    "/resources/images/healthPanda.png",
    "Health-Panda",
    "헬스장 웹/챗봇 서비스 (Web Project)",
    ['JAVA','Spring','Vue','mySQL','JS', 'node.js', 'AWS', 'kakao-openbuilder'],
    ["2023.10.17", "2023.11.23"],
    "https://healthpanda.site",
    "👤👤",
    "챗봇 - 챗봇 개발 환경 구축, 식단 조회 및 기록, 식단 추천\n웹 - https 배포, RDS 구축, JWT 토큰 적용,운동 영상 추천, 좋아요 및 팔로우",
    "kakao-openbuilder 스킬 환경 구축\n\nREST API로 스킬 요청을 보낼 서버 선정에 고민이 있었습니다. 상시 가동되는 aws의 EC2가 아니라 요청이 들어올 때만 작동하는 aws lambda를 사용할 수 있다면 비용 절감 측면에서 더욱 적합할 것이라고 생각해 서버리스 컴퓨팅 서비스인 lambda로 스킬 환경 구축을 시도해 보았습니다. "
    +"그러나 lambda는 별도의 서버 세팅 없이 함수로써 코드를 실행하기 때문에 함수에서 Springboot와 데이터베이스를 이용하려면 추가적으로 spring cloud와 RDS 연결 설정이 필요한 것을 알게 되었습니다. 덧붙여 lambda는 초기 응답 시간이 느리면 cold start 문제가 발생하고, 함수의 크기가 제한되어 있기 때문에 springboot 이용 시 많은 최적화가 필요했습니다. "
    +"lambda의 활용은 비용적 측면에서 분명 유의미한 시도이지만, 짧은 프로젝트 기간과 springboot 기반 환경 요인을 고려하여 스킬 서버로 EC2를 채택하게 되었습니다."
    + 
    "\n\nAWS를 활용한 https 설정\n\n보안에 유리한 HTTPS 보안 서버를 구축하고자 하였습니다. 도메인을 발급하고 aws Route53으로 도메인 소유를 인증해준 뒤 ACM으로 SSL 인증서를 발급 받아 https 서버를 구축했습니다. 추가로 https(443), http 요청(8080)을 모두 https로 보내기 위하여 Load Balancer에 해당 규칙을 추가해 주었습니다."
);

addProject(HealthPanda, "backend", "contain", "center");

const butok = new Project(
    "https://github.com/KimDohaAcc/Butok.git",
    "/resources/images/toktok.png",
    "Butok",
    "부동산 전월세 실거래가 조회 사이트 (Web Project)",
    ['JAVA','Spring','mySQL','JSP','JS', 'AWS'],
    ["2023.04.27", "2023.05.15"],
    "http://butok.site",
    "👤👤👤👤",
    "회원의 선호 기반 매물 추천, 회원 보안",
    "Spring security 적용\n\n"
    + "Spring security 2.7 버전을 사용하여 비밀번호를 암호화 하였으며, 회원과 관리자의 역할을 나눠 관리자 페이지의 접근을 막았습니다. "
    + "그 과정에서 필요한 config 파일 작성 방법과 userDetail 상속 등을 익힐 수 있었으며, jsp에서 spring security tag library를 활용하여 간편하게 권한 확인을 할 수 있었습니다."
    + "\n\njpa와 pageable을 활용한 pagination 처리\n\n"
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
    "http://gamja-market.site(현재 사용 불가)",
    "👤👤👤👤",
    "판매자와 구매자 1:1 채팅, 자유게시판",
    "firebase의 realtime-database를 활용한 채팅 구현\n\n"
    + "실시간 데이터베이스를 이용하여 실시간 채팅 및 채팅 알람 기능을 구현하였습니다. ..."
);

addProject(GamjaMarket, "backend", "contain", "center");

const RentCar = new Project(
    "https://github.com/KimDohaAcc/Rentcar.git",
    "/resources/images/RentCar.png",
    "RentCar",
    "Console RentCar (Java mini project)",
    ['JAVA', 'SQL','JSP','JS'],
    ["2023.04.07", "2023.04.07"]
);

addProject(RentCar, "backend-mini", "contain", "center");

const Poly_RPG_Console_Game = new Project(
    "https://github.com/KimDohaAcc/Poly-RPG-Console-Game.git",
    "/resources/images/Poly_RPG_Console_Game.png",
    "Poly RPG Console Game",
    "Poly_RPG_Console_Game (Java mini project)",
    ['JAVA'],
    ["2023.03.28", "2023.03.28"]
);

addProject(Poly_RPG_Console_Game, "backend-mini", "contain", "center");

const Pokemon = new Project(
    "https://github.com/KimDohaAcc/Pokemon.git",
    "/resources/images/Pokemon.png",
    "Pokemon",
    "Console Pokemon (Java mini project)",
    ['JAVA'],
    ["2023.03.26", "2023.03.26"]
);

addProject(Pokemon, "backend-mini", "contain", "center");

const RPG = new Project(
    "https://github.com/KimDohaAcc/RPG-GAME.git",
    "/resources/images/RPG-GAME.png",
    "RPG",
    "Console RPG (Java mini project)",
    ['JAVA'],
    ["2023.03.23", "2023.03.23"]
);

addProject(RPG, "backend-mini", "contain", "center");

const atm = new Project(
    "https://github.com/KimDohaAcc/ATM.git",
    "/resources/images/ATM.jpg",
    "DOHA BANK",
    "Console ATM (Java mini project)",
    ['JAVA'], 
    ["2023.03.13", "2023.03.13"] 
);

addProject(atm, "backend-mini", "contain", "center");

