(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('1_1')
  const cw1_2 = document.getElementById('1_2')
  const cw1_3 = document.getElementById('1_3')
  const cw1_4 = document.getElementById('1_4')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')
  const loadingPopup = document.getElementById('loadingPopup');
  const loadingText = document.getElementById('loadingText');
  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    showLoading("Loading...")
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        hideLoading();
        console.log(posts);
        console.log(posts[0]);
        console.log(posts[0].title);
        console.log(posts[0].body);
        let html = '<h2>Lista postów JSONa</h2>';
        posts.forEach(post => {
          html += `
            <div class="post">
              <h3>${post.id}. ${post.title}</h3>
              <p style = "background-color: Tomato;>${post.body}</p>
            </div>
          `;
        });
        answer.innerHTML = html;
      })
  })

  cw1_2.addEventListener("click", function () {
    showLoading("Loading...")
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        hideLoading();
        console.log(posts);
        console.log(posts[0]);
        console.log(posts[0].title);
        console.log(posts[0].body);
        let html = '<h2>Lista postów JSONa</h2>';
        posts.forEach(post => {
          html += `
            <div class="post">
              <h3>${post.id}. ${post.title}</h3>
              <p>${post.body}</p>
            </div>
          `;
        });
        answer.innerHTML = html;
      })
  })
  cw1_3.addEventListener("click", function () {
    showLoading("Loading...")
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(post => {
        hideLoading();
        console.log(post);
        const html = `
          <h2>Post z ID = ${post.id}</h2>
          <div class="post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </div>
        `;
        answer.innerHTML = html;
    })
});

  cw1_4.addEventListener("click", function () {
    showLoading("Processing...")
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "Nowy post",
        body: "Tekst.",
        userId: 1
      })
    })
      .then(response => response.json())
      .then(response => {
        hideLoading();
        console.log("Odpowiedź serwera po POST:", response);
        console.log("Nowy post ID:", response.id);
        console.log("Tytuł:", response.title);
        console.log("Treść:", response.body);
        answer.innerHTML = `<div class="post">Dodano nowy post o ID = ${response.id}</div>`;
      }) // komentarz ponieważ nie widzi zmian w commitcie
  }); // komentarz poniewaz program nie widzi zmian w commitcie

function showLoading(message = "Loading...") {
  loadingText.textContent = message;
  loadingPopup.classList.remove('hidden');
  loadingPopup.classList.add('active');
}

function hideLoading() {
  loadingPopup.classList.add('hidden');
  loadingPopup.classList.remove('active');
}

  
  cw2.addEventListener("click", function () {
    //TODO
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
