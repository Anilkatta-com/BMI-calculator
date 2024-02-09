let a = 10,
  b = 10,
  c = 1,
  z = "";
while (a >= c) {
  // b=1;
  while (b >= c) {
    // console.log(b);
    z = z + " " + b;
    b--;
  }
  a--;
  console.log(z);
}
