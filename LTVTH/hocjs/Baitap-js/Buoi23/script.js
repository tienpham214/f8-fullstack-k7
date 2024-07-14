const postContainer = document.getElementById("post-container");
const loading = document.getElementById("loading");
let page = 1;
let limit = 5;

async function fetchPosts(page, limit) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );
  const data = await res.json();
  return data;
}

function getRandomPosts(posts) {
  return posts.sort(() => 0.5 - Math.random());
}

function showPosts(posts) {
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
            <div class="avatar">${post.title.charAt(0).toUpperCase()}</div>
            <div class="content">
                <h2>${post.title}</h2>
                <p class="meta">@${
                  post.userId
                } - ${new Date().toLocaleTimeString()}</p>
                <p>${post.body}</p>
            </div>
        `;
    postContainer.appendChild(postElement);
  });
}

async function loadPosts() {
  const posts = await fetchPosts(page, limit);
  const randomPosts = getRandomPosts(posts);
  showPosts(randomPosts);
}

function showLoading() {
  loading.classList.add("show");
}

function hideLoading() {
  loading.classList.remove("show");
}

function loadMorePosts() {
  showLoading();
  setTimeout(async () => {
    page++;
    await loadPosts();
    hideLoading();
  }, 1000);
}

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    loadMorePosts();
  }
});

// Initial load
loadPosts();
