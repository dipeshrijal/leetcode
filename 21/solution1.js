var mergeTwoLists = function (list1, list2) {
  let mergedList = [];
  let i = 0;
  let j = 0;

  while (i < list1.length && j < list2.length) {
    let currentList1 = list1[i]; // 1.3.5
    let currentList2 = list2[j]; // 2.4.6

    if (currentList1 < currentList2) {
      mergedList.push(currentList1);
      i++;
    } else {
      mergedList.push(currentList2);
      j++;
    }
  }
  console.log(i);
  console.log(j);

  while (i < list1.length) {
    mergedList.push(list1[i]);
    i++;
  }

  while (j < list2.length) {
    mergedList.push(list2[j]);
    j++;
  }

  return mergedList;
};

let list1 = [];
let list2 = [];

console.log(mergeTwoLists(list1, list2));
