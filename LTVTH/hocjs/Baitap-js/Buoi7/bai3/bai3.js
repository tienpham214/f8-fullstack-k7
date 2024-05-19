// Mảng đầu vào
var nums1 = [1, 2, 0];
var nums2 = [3, 4, -1, 1];
var nums3 = [7, 8, 9, 11, 12];

// Tìm số nguyên dương nhỏ nhất không có trong mảng
var nums = nums1; // Thay đổi giá trị này để kiểm tra các mảng khác nhau
var numSet = new Set(nums);

var smallestMissing = 1;
while (numSet.has(smallestMissing)) {
  smallestMissing++;
}
console.log(
  "Missing smallest positive in " +
    JSON.stringify(nums) +
    ": " +
    smallestMissing
); // Output: 3

nums = nums2;
numSet = new Set(nums);

smallestMissing = 1;
while (numSet.has(smallestMissing)) {
  smallestMissing++;
}
console.log(
  "Missing smallest positive in " +
    JSON.stringify(nums) +
    ": " +
    smallestMissing
); // Output: 2

nums = nums3;
numSet = new Set(nums);

smallestMissing = 1;
while (numSet.has(smallestMissing)) {
  smallestMissing++;
}
console.log(
  "Missing smallest positive in " +
    JSON.stringify(nums) +
    ": " +
    smallestMissing
); // Output: 1
