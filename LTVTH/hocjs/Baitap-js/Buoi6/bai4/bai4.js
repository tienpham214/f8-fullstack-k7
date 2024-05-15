const posts = [
  [
    "Tiêu đề bài viết 1",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
    "https://picsum.photos/380/230",
  ],
  [
    "Tiêu đề bài viết 2",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
    "https://picsum.photos/380/230",
  ],
  [
    "Tiêu đề bài viết 3",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
    "https://picsum.photos/380/230",
  ],
];

const postsContainer = document.getElementById("posts-container");

posts.forEach((post, index) => {
  const newPost = document.createElement("div");
  newPost.className = `post${index % 2 === 0 ? "" : " reverse"}`;
  newPost.innerHTML = `
    <img src="${post[2]}" alt="${post[0]}">
    <div class="post-content">
        <div class="post-title">${post[0]}</div>
        <div class="post-description">${post[1]}</div>
    </div>
  `;
  postsContainer.appendChild(newPost);
});
