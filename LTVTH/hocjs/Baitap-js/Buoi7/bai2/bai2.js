// Mảng đã sắp xếp đầu vào
var nums1 = [1, 3];
var nums2 = [2];

// Mảng hợp nhất
var merged = [];
var i = 0,
  j = 0;
var m = nums1.length,
  n = nums2.length;

// Hợp nhất hai mảng thủ công
while (i < m && j < n) {
  if (nums1[i] < nums2[j]) {
    merged.push(nums1[i]);
    i++;
  } else {
    merged.push(nums2[j]);
    j++;
  }
}

// Nếu còn phần tử trong nums1
while (i < m) {
  merged.push(nums1[i]);
  i++;
}

// Nếu còn phần tử trong nums2
while (j < n) {
  merged.push(nums2[j]);
  j++;
}

// Tìm trung vị
var totalLength = merged.length;
var median;
if (totalLength % 2 === 1) {
  median = merged[Math.floor(totalLength / 2)];
} else {
  var mid1 = Math.floor((totalLength - 1) / 2);
  var mid2 = mid1 + 1;
  median = (merged[mid1] + merged[mid2]) / 2;
}

console.log(
  "Median of " +
    JSON.stringify(nums1) +
    " and " +
    JSON.stringify(nums2) +
    ": " +
    median
); // Output: 2

// Thực hiện với các trường hợp kiểm tra khác
nums1 = [1, 2];
nums2 = [3, 4];

merged = [];
i = 0;
j = 0;
m = nums1.length;
n = nums2.length;

while (i < m && j < n) {
  if (nums1[i] < nums2[j]) {
    merged.push(nums1[i]);
    i++;
  } else {
    merged.push(nums2[j]);
    j++;
  }
}

while (i < m) {
  merged.push(nums1[i]);
  i++;
}

while (j < n) {
  merged.push(nums2[j]);
  j++;
}

totalLength = merged.length;
if (totalLength % 2 === 1) {
  median = merged[Math.floor(totalLength / 2)];
} else {
  var mid1 = Math.floor((totalLength - 1) / 2);
  var mid2 = mid1 + 1;
  median = (merged[mid1] + merged[mid2]) / 2;
}

console.log(
  "Median of " +
    JSON.stringify(nums1) +
    " and " +
    JSON.stringify(nums2) +
    ": " +
    median
); // Output: 2.5

nums1 = [1, 2];
nums2 = [3, 7];

merged = [];
i = 0;
j = 0;
m = nums1.length;
n = nums2.length;

while (i < m && j < n) {
  if (nums1[i] < nums2[j]) {
    merged.push(nums1[i]);
    i++;
  } else {
    merged.push(nums2[j]);
    j++;
  }
}

while (i < m) {
  merged.push(nums1[i]);
  i++;
}

while (j < n) {
  merged.push(nums2[j]);
  j++;
}

totalLength = merged.length;
if (totalLength % 2 === 1) {
  median = merged[Math.floor(totalLength / 2)];
} else {
  var mid1 = Math.floor((totalLength - 1) / 2);
  var mid2 = mid1 + 1;
  median = (merged[mid1] + merged[mid2]) / 2;
}

console.log(
  "Median of " +
    JSON.stringify(nums1) +
    " and " +
    JSON.stringify(nums2) +
    ": " +
    median
); // Output: 2.5
