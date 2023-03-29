//Ссылка на задание: https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript

function order_weight(strng) {
  let nums = strng.trim().split(/\s+/);

  // Рассчитывает вес каждого числа и сохраняет его вместе с исходным числом в виде кортежа.
  let weighted_nums = nums.map((num) => {
    let weight = num.split("").reduce((sum, digit) => sum + parseInt(digit), 0);
    return [num, weight];
  });

  // Сортировка списока взвешенных чисел по весу, а затем по исходному числу в виде строки.
  let sorted_nums = weighted_nums.sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    } else {
      return a[0].localeCompare(b[0]);
    }
  });

  // Веращает отсортированный список исходных чисел в виде строки
  return sorted_nums.map((num) => num[0]).join(" ");
}
