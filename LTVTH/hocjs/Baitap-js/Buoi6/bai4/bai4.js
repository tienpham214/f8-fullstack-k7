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

/*
const posts: Đây là khai báo một biến posts, được gán với một mảng chứa thông tin về các bài viết. Mỗi phần tử trong mảng là một mảng con chứa thông tin về một bài viết.

const postsContainer: Tạo một hằng số postsContainer để lưu trữ tham chiếu đến phần tử HTML có id là "posts-container". Điều này giả định rằng có một phần tử trong HTML có id là "posts-container" để chứa các bài viết.

posts.forEach((post, index) => {...}): Dòng này sử dụng vòng lặp forEach để lặp qua từng phần tử trong mảng posts. Với mỗi bài viết, một hàm được gọi và truyền vào hai đối số là post và index.

const newPost = document.createElement("div"): Tạo một phần tử <div> mới và gán nó vào biến newPost. Mỗi bài viết sẽ được bọc trong một phần tử div.

newPost.className = post${index % 2 === 0 ? '' : ' reverse'}: Đặt thuộc tính className của phần tử newPost để tạo lớp CSS cho bài viết. Nếu index chia hết cho 2, thì lớp "post" được thêm vào, ngược lại thì lớp "reverse" được thêm vào để thay đổi thứ tự hiển thị.

newPost.innerHTML = ...: Thiết lập nội dung HTML của phần tử newPost. Trong trường hợp này, một mảng của mỗi bài viết được sử dụng để tạo nội dung HTML cho bài viết.

postsContainer.appendChild(newPost): Thêm phần tử newPost vào cuối phần tử có id là "posts-container", để hiển thị bài viết trong trang web.

*/
