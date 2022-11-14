let count = "5"; // 드롭박스 출력 개수
let total = 0; // 콘텐츠의 총 개수
let page = 1; // 현재 페이지
let totalData = []; // 총 콘텐츠
let totalPage = 1; // 총 페이지

// 숫자 페이징
const pageBtn = (e) => {
  let currentPage = document.getElementById(page)
  if (currentPage) currentPage.classList.remove('current')

  page = e.target.id
  currentPage = document.getElementById(page)
  currentPage.classList.add('current')
  makeContent(totalData.slice(0 + Number(count) * (page - 1), Number(count) * page))
}

// 화살표 페이지네이션
const goFirst = document.getElementById('goFirst');
goFirst.addEventListener('click', function () {
  pageBtn({ target: { id: 1 } })
  if (count === "5") {
    makeContent(totalData.slice(0, 5));
  } else if (count === "15") {
    makeContent(totalData.slice(0, 15));
  }
})
const goLast = document.getElementById('goLast');
goLast.addEventListener('click', function () {
  pageBtn({ target: { id: totalPage } })
  if (count === "5") {
    makeContent(totalData.slice(total - 5, total));
  } else if (count === "15") {
    makeContent(totalData.slice(total - (total % Number(count)), total));
  }
})

// 드롭박스 출력 개수에 따른 페이지네이션 버튼 생성
const paging = (totalPage) => {
  const pagination = document.getElementById('pagination')
  const buttons = document.querySelectorAll('.button')
  if (buttons.length > 0) {
    buttons.forEach(item => pagination.removeChild(item))
  }

  const goLast = document.getElementById('goLast')
  for (let i = 0; i < totalPage; i++) {
    const button = document.createElement('button');
    button.id = `${i + 1}`;
    if (i === 0) button.className = `button current`;
    else button.className = `button`;
    button.innerText = i + 1;
    button.value = i + 1;
    button.onclick = (e) => pageBtn(e)
    goLast.before(button)
  }
}


// 테이블에 내용 넣어주는 함수
const makeContent = (arr) => {
  // 페이지 바꿀 때 내용 초기화
  const topTable = document.getElementById('topTable');
  const tableDiv = document.getElementById('tableDiv');
  topTable.removeChild(tableDiv);

  // 콘텐츠 생성
  const tbody = document.createElement("tbody")
  tbody.className = 'tableDiv';
  tbody.id = 'tableDiv';
  arr.forEach((item, index) => {
    const tr = document.createElement("tr")
    tr.id = `content ${index + 1}`
    if (index % 2) {
      tr.className = 'contents even'
    } else {
      tr.className = 'contents odd'
    }
    tr.innerHTML = `
            <td class="content" id="name">${item.name}</td>
            <td class="content" id="email">${item.email}</td>
            <td class="content" id="title">${item.title}</td>
            <td class="content" id="role">${item.role}</td>
        `
    tbody.append(tr)
  })
  topTable.append(tbody)
}

// 드롭박스 변경 시
const changeCount = (e) => {
  count = e.value
  if (count === "5") {
    makeContent(totalData.slice(0, 5))
    totalPage = Math.ceil(total / 5)
    paging(totalPage)
  } else if (count === "15") {
    makeContent(totalData.slice(0, 15))
    totalPage = Math.ceil(total / 15)
    paging(totalPage)
  }
}

// 첫 렌더링 때
if (count === "5" && page === 1) {
  fetch('/web/src/data.json').then(res => res.json())
    .then(data => {
      totalData = data;
      total = data.length;
      totalPage = Math.ceil(data.length / 5)
      makeContent(totalData.slice(0, 5));
      paging(totalPage)
    })
}
