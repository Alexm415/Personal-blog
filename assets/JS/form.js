const blogtEl = document.querySelector("#blogtitle");
const userEl = document.querySelector("#username");
const contentEL = document.querySelector("#content");
const buttonEl = document.querySelector("#summitbtn");
const msgDiv = document.querySelector("#msg");
let blogPosts = JSON.parse(localStorage.getItem("blogPosts"));
if (!blogPosts) {
  blogPosts = [];
}
function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

buttonEl.addEventListener("click", function (event) {
  event.preventDefault();

  const blog = document.querySelector("#blogtitle").value;
  const user = document.querySelector("#username").value;
  const content = document.querySelector("#content").value;

  if (blog === "") {
    displayMessage("error", "Blog cannot be blank");
  } else if (user === "") {
    displayMessage("error", "Username cannot be blank");
  } else if (content === "") {
    displayMessage("error", "Content cannot be blank");
  } else {
    const userInfo = {
      username: user,
      content: content,
      blogTitle: blog,
    };
    blogPosts.push(userInfo);
    localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
    window.location = "blog.html";
  }
});

/* const blogtEl = document.querySelector("#blogtitle");
const userEl = document.querySelector("#username");
const contentEL = document.querySelector("#content");
const buttonEl = document.querySelector("#summitbtn");
const msgDiv = document.querySelector("#msg");

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

buttonEl.addEventListener("click", function (event) {
  event.preventDefault();

  const blog = document.querySelector("#blogtitle").value;
  const user = document.querySelector("#username").value;
  const content = document.querySelector("#content").value;

  if (blog === "") {
    prompt("error", "Blog cannot be blank");
  } else if (user === "") {
    displayMessage("error", "Username , content cannot be blank");
  } else content === "";
  {
    displayMessage("error", "content , content cannot be blank");
  }
  {
    
    const userInfo = {
      userEl: userEl.value,
      contentEL: contentEL.value,
      blogtEl: blogtEl.value,
    };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    localStorage.setItem("blogtitle", blog);
    localStorage.setItem("username", user);
    localStorage.setItem("content", content);
    window.location = "blog.html";
  }
}); */
//buttonEl.addEventListener("click", function () {
//window.location = "blog.html";
//});
