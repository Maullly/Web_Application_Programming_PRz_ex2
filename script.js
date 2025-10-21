(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('1_1')
  const cw1_2 = document.getElementById('1_2')
  const cw1_3 = document.getElementById('1_3')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        console.log(posts);
        let html = '<h2>Lista postów JSONa</h2>';
        posts.forEach(post => {
          html += `
            <div>
              <h3>${post.id}. ${post.title}</h3>
              <p style = "background-color: Tomato;>${post.body}</p>
            </div>
          `;
        });
        answer.innerHTML = html;
      })
  })

  cw1_2.addEventListener("click", function () {
    answer.textContent = "Loading..."
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        console.log(posts);
        let html = '<h2>Lista postów JSONa</h2>';
        posts.forEach(post => {
          html += `
            <div style = "border: 1px groove; background-color: Tomato">
              <h3>${post.id}. ${post.title}</h3>
              <p>${post.body}</p>
            </div>
          `;
        });
        answer.innerHTML = html;
      })
  })
  cw1_3.addEventListener("click", function () {
    answer.innerHTML = "Loading...";
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(post => {
        console.log(post);
        const html = `
          <h2>Post z ID = ${post.id}</h2>
          <div style = "border: 1px groove; background-color: Tomato">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </div>
        `;
       answer.innerHTML = html;
    })
});

  
  cw2.addEventListener("click", function () {
    //TODO
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
