const todayDate = () => {
  const today = new Date();
// console.log(today);
// Sat Aug 17 2024 17:55:12 GMT+0900 (日本標準時)

console.log(today.getFullYear() + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日");
}

todayDate()