const posts = [
  {
    title: "Tiêu đề bài viết 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
    imageUrl: "https://picsum.photos/200/300",
  },
  {
    title: "Tiêu đề bài viết 2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
    imageUrl: "https://picsum.photos/200/300",
  },
  {
    title: "Tiêu đề bài viết 3",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
    imageUrl: "https://picsum.photos/200/300",
  },
];

const postsContainer = document.getElementById("posts-container");

// Bài viết 1
const post1 = document.createElement("div");
post1.className = "post";
post1.innerHTML = `
  <img src="${posts[0].imageUrl}" alt="${posts[0].title}">
  <div class="post-content">
      <div class="post-title">${posts[0].title}</div>
      <div class="post-description">${posts[0].description}</div>
  </div>
`;
postsContainer.appendChild(post1);

// Bài viết 2
const post2 = document.createElement("div");
post2.className = "post reverse";
post2.innerHTML = `
  <img src="${posts[1].imageUrl}" alt="${posts[1].title}">
  <div class="post-content">
      <div class="post-title">${posts[1].title}</div>
      <div class="post-description">${posts[1].description}</div>
  </div>
`;
postsContainer.appendChild(post2);

// Bài viết 3
const post3 = document.createElement("div");
post3.className = "post";
post3.innerHTML = `
  <img src="${posts[2].imageUrl}" alt="${posts[2].title}">
  <div class="post-content">
      <div class="post-title">${posts[2].title}</div>
      <div class="post-description">${posts[2].description}</div>
  </div>
`;
postsContainer.appendChild(post3);
