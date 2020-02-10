const spreadKey = {
  sp: 1,
  re: 2,
  ad: 3
};

const a = {
  a: "a",
  b: "b",
  ...spreadKey,
  yo: 'lo'
};

console.log(a);
