// ajax
// fetch()로도 구현 가능(일부 브라우저 또는 하위 버전의 스크립트에서 호환X)
// 비동기 방식으로 페이지의 일부 정보를 갱신할 수 있는 기술
// -> jQuery.ajax() 메소드를 활용
<<<<<<< HEAD
let pageNum = 1;
=======

let pageNum = 1;

>>>>>>> cf66b5729dcc00fd2ee2e300327fa22b2a835412
const query = document.querySelector(".query");
const container = document.querySelector(".container");
const searchBox = document.querySelector(".search-box");
const footer = document.querySelector("footer");
const searchImg = document.querySelector(".search-img")
<<<<<<< HEAD
=======

>>>>>>> cf66b5729dcc00fd2ee2e300327fa22b2a835412
let firstCheck = true;
searchBox.addEventListener("submit", e => {
    e.preventDefault(); // submit의 기본 동작 무시
    searchImg.setAttribute("style", "display : none");
<<<<<<< HEAD
=======

>>>>>>> cf66b5729dcc00fd2ee2e300327fa22b2a835412
    if (firstCheck) {
        const nextButton = document.createElement("button");
        nextButton.setAttribute("class", "nextButton");
        nextButton.addEventListener("click", e => {
            searchRequest(searchText, ++pageNum);
        });

        footer.append(nextButton);
        firstCheck = false;
    }
<<<<<<< HEAD
=======

>>>>>>> cf66b5729dcc00fd2ee2e300327fa22b2a835412
    const searchText = `${query.value}`;
    if (searchText !== "") {
        pageNum = 1;
        searchRequest(searchText);
    }
});
<<<<<<< HEAD
=======

>>>>>>> cf66b5729dcc00fd2ee2e300327fa22b2a835412
function searchRequest(searchText, pageNum) {
    $.ajax({
        "url": `http://dapi.kakao.com/v3/search/book?query=${searchText}&page=${pageNum}&size=25&target=title`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "KakaoAK 205762e8ca1e0563194b28ba858ae453"
        },
    }).done(function (response) {
        console.log(response);
        printPage(response);
    });
}
<<<<<<< HEAD
=======


>>>>>>> cf66b5729dcc00fd2ee2e300327fa22b2a835412
function printPage(response) {
    for (let i = 0; i < response.documents.length; i++) {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const h4 = document.createElement("h4");
        const p1 = document.createElement("p");
        const span1 = document.createElement("span");
        const p2 = document.createElement("p");
        const span2 = document.createElement("span");
        const span3 = document.createElement("span");
<<<<<<< HEAD
=======


>>>>>>> cf66b5729dcc00fd2ee2e300327fa22b2a835412
        div.setAttribute("class", "result-card");
        img.setAttribute("class", "book-img");
        img.setAttribute("src", `${response.documents[i].thumbnail}`);
        h4.setAttribute("class", "book-title");
        p1.setAttribute("class", "book-description");
        span1.setAttribute("class", "price");
        p2.setAttribute("class", "book-info");
        span2.setAttribute("class", "author");
        span3.setAttribute("class", "publisher");
<<<<<<< HEAD
=======

>>>>>>> cf66b5729dcc00fd2ee2e300327fa22b2a835412
        h4.innerText = `${response.documents[i].title}`;
        const description = `${response.documents[i].contents}`;
        if (description.length >= 15) {
            p1.innerText = description.substring(0, 15) + "...";
        }
<<<<<<< HEAD
=======

>>>>>>> cf66b5729dcc00fd2ee2e300327fa22b2a835412
        else {
            p1.innerText = description;
        }
        span1.innerText = `${response.documents[i].price}` + "원";;
        span2.innerText = `${response.documents[i].authors[0]}` + " | ";
        span3.innerText = `${response.documents[i].publisher}`;
<<<<<<< HEAD
=======


>>>>>>> cf66b5729dcc00fd2ee2e300327fa22b2a835412
        div.append(img);
        div.append(h4);
        p2.append(span2);
        p2.append(span3);
        div.append(p2);
        div.append(span1);
        div.append(p1);
<<<<<<< HEAD
=======

>>>>>>> cf66b5729dcc00fd2ee2e300327fa22b2a835412
        container.append(div);
    }
    // 페이지 정보 변수로 빼기
    // 가져온 정보들을 엘리먼트 안에 붙이기만 하면 됨
    // 카드들은 마음에 드는 디자인 참고를 해서 꾸며보세요~
<<<<<<< HEAD
=======

>>>>>>> cf66b5729dcc00fd2ee2e300327fa22b2a835412
    // container 안에
    //     <div class = "result-card">
    //     <img class = "book-img" src = "book.png">
    //     <h4 class = "book-title">도서 제목</h4>
    //     <p class = "book-description">도서상세정보</p>
    //     <span class = "price">1000원</span>
    //     <p class = "book-info">
    //         <span class = "author">저자</span><span class = "publisher">출판사</span>
    //     </p>
    // </div>
<<<<<<< HEAD
}
=======
}

>>>>>>> cf66b5729dcc00fd2ee2e300327fa22b2a835412
