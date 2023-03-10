// ajax
// fetch()로도 구현 가능(일부 브라우저 또는 하위 버전의 스크립트에서 호환X)
// 비동기 방식으로 페이지의 일부 정보를 갱신할 수 있는 기술
// -> jQuery.ajax() 메소드를 활용

let page = 1;

const query = document.querySelector(".query");

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("submit", e=>{
    e.preventDefault(); // submit의 기본 동작 무시
    if(query !== ""){
        page = 1;
        searchRequest(query.value);
    }
});

function searchRequest(query, page) {
    $.ajax({
        "url": `dapi.kakao.com/v3/search/book?query=${query}&page=1&size=10&target=title`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "KakaoAK 205762e8ca1e0563194b28ba858ae453"
        },
    })
        .done((response) => {
            // 페이지 정보 변수로 빼기
            // 가져온 정보들을 엘리먼트 안에 붙이기만 하면 됨
            // 카드들은 마음에 드는 디자인 참고를 해서 꾸며보세요~

            // container 안에
        //     <div class = "result-card">ㅎㅅ
        //     <img class = "book-img" src = "book.png">
        //     <h4 class = "book-title">도서 제목</h4>
        //     <p class = "book-description">도서상세정보</p>
        //     <span class = "price">1000원</span>
        //     <p class = "book-info">
        //         <span class = "author">저자</span><span class = "publisher">출판사</span>
        //     </p>
        // </div>
        });

        // $.ajax(settings).done(function (response) {
        //     console.log(response);
        //   });
}

