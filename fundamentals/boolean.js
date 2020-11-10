let isActive = false;
console.log(isActive);

isActive = true;
console.log(isActive);

isActive = 1;
console.log(!!isActive);

// always true
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'blank');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isActive = true));

// always false
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isActive = false));

