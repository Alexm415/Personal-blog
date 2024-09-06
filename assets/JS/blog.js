const buttonEl = document.querySelector("#back");
const blogPosts = document.getElementById("blogPosts");

renderBlog();

function renderBlog() {
  const items = JSON.parse(localStorage.getItem("blogPosts"));

  console.log(items);
  items.forEach(function (item) {
    const postElement = document.createElement("div");
    const titleElement = document.createElement("h2");
    const usernameElement = document.createElement("h3");
    const contentEl = document.createElement("p");
    titleElement.textContent = item.blogTitle;
    usernameElement.textContent = item.username;
    contentEl.textContent = item.content;

    postElement.appendChild(titleElement);
    postElement.appendChild(usernameElement);
    postElement.appendChild(contentEl);
    postElement.classList.add("blogPost");
    blogPosts.appendChild(postElement);
  });
}

buttonEl.addEventListener("click", function () {
  window.location = "index.html";
});

// this code below was my orgianl code before i used the Xpert learning assistant
/*const buttonEl = document.querySelector("#back");
const blogCEl = document.querySelector("#content");
const blogtEl = document.querySelector("#blogtitle");
const bloguEl = document.querySelector("#username");
const items = document.createElement("section");
const blogPosts = document.getElementById("blogPosts");

renderBlog();

function renderBlog() {
  // const user = JSON.parse(localStorage.getItem("userInfo"));
  //JSON.parse(localStorage.getItem('userInfo'));
  const items = JSON.parse(localStorage.getItem("blogPosts"));
  console.log(items);
  for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
    
    const postElement = document.createElement("div");
    const titleElement = document.createElement("h2");
    const usernameElement = document.createElement("h3");
    const contentEl = document.createElement("p");
    titleElement.textContent = items[i].blogTitle;
    usernameElement.textContent = items[i].username;
    contentEl.textContent = items[i].content;

    postElement.appendChild(titleElement);
    postElement.appendChild(usernameElement);
    postElement.appendChild(contentEl);

    blogPosts.appendChild(postElement);
  }
}

buttonEl.addEventListener("click", function () {
  window.location = "index.html";
});*/
/* const storedBlogtitle = localStorage.getItem("blogtitle");
  blogtEl.textContent = storedBlogtitle;
  const storedUser = localStorage.getItem("username");
  bloguEl.textContent = storedUser;
  const storeContent = localStorage.getItem("content");
  blogCEl.textContent = storeContent; */
