// Lấy các phần tử cần thiết từ DOM
var list = document.querySelector(".list");
var listItems = document.querySelectorAll(".list-item");

var lessionIndex = 0;
var moduleIndex = 0;

// Hàm trợ giúp để lấy vị trí con trỏ chuột so với phần tử đích
function getMouseOffset(event) {
  var targetRect = event.target.getBoundingClientRect();
  return {
    x: event.pageX - targetRect.left,
    y: event.pageY - targetRect.top,
  };
}

// Hàm trợ giúp để lấy vị trí trung tâm theo chiều dọc của phần tử
function getElementVerticalCenter(el) {
  var rect = el.getBoundingClientRect();
  return (rect.bottom - rect.top) / 2;
}

// Hàm chính để làm cho danh sách có thể sắp xếp
function sortable(rootEl, onUpdate) {
  var dragEl;

  // Kích hoạt kéo thả cho tất cả các phần tử trong danh sách
  enableDragging(rootEl);

  // Hàm xử lý sự kiện khi kéo qua một phần tử khác
  function onDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";

    var target = event.target;
    if (target && target !== dragEl && target.classList.contains("list-item")) {
      var offset = getMouseOffset(event);
      var middleY = getElementVerticalCenter(target);

      if (offset.y > middleY) {
        if (target.nextSibling && target.nextSibling.parentElement === rootEl) {
          rootEl.insertBefore(dragEl, target.nextSibling);
        }
      } else {
        if (target.parentElement === rootEl) {
          rootEl.insertBefore(dragEl, target);
        }
      }
    }
  }

  // Hàm xử lý sự kiện khi kết thúc kéo
  function onDragEnd(event) {
    event.preventDefault();

    dragEl.classList.remove("ghost");
    rootEl.removeEventListener("dragover", onDragOver, false);
    rootEl.removeEventListener("dragend", onDragEnd, false);

    // Thông báo kết thúc sắp xếp
    onUpdate(dragEl);
  }

  // Hàm xử lý sự kiện khi bắt đầu kéo
  rootEl.addEventListener(
    "dragstart",
    function (event) {
      dragEl = event.target; // Ghi nhớ phần tử sẽ được di chuyển

      // Giới hạn loại di chuyển
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("Text", dragEl.textContent);

      // Đăng ký các sự kiện kéo thả
      rootEl.addEventListener("dragover", onDragOver, false);
      rootEl.addEventListener("dragend", onDragEnd, false);

      setTimeout(function () {
        dragEl.classList.add("ghost");
      }, 0);
    },
    false
  );
}

// Hàm kích hoạt kéo thả cho các phần tử danh sách và cập nhật nội dung của chúng
function enableDragging(rootEl) {
  var children = Array.prototype.slice.call(rootEl.children);
  children.forEach(function (itemEl, index) {
    itemEl.draggable = true; // Cho phép kéo thả

    var type = "Bài";
    if (itemEl.classList.contains("active")) {
      type = "Module";
      moduleIndex++;
    } else {
      lessionIndex++;
    }

    var indexNumber = type === "Module" ? moduleIndex : lessionIndex;
    var itemText = itemEl.children.length
      ? itemEl.children[0].innerText
      : itemEl.innerText;

    itemEl.innerHTML =
      type + ": " + indexNumber + ": <span>" + itemText + "</span>";
  });
}

// Sử dụng hàm sortable
sortable(list, function (item) {
  lessionIndex = 0;
  moduleIndex = 0;

  enableDragging(list); // Cập nhật lại danh sách sau khi sắp xếp
});
