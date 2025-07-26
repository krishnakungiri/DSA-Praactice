/** 4 x 4 star
****
****
****
****

let n = 4;
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j < n; j++) {
    row = row + "*";
  }
  console.log(row);
}
 */

/**
 *
 **
 ***
 ****
 
 let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (j = 0; j <= i + 1; j++) {
    row = row + "*";
  }
  console.log(row);
}
*/

/** 
1
12
123
1234
12345

let n = 5;
for (let i = 0; i <= n; i++) {
  let row = "";
  for (j = 0; j <= i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}
  */

/** 
1
22
333
4444
55555

let n = 5;
for (i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (i + 1);
  }
  console.log(row);
}
*/

/** 
12345
1234
123
12
1

let n = 5;
for (i = n; i > 0; i--) {
  let row = "";
  for (j = 0; j < i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}
*/

/**  hiphens are treated as spaces 
----*
---**
--***
-****
*****

let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - (i + 1); j++) {
    row = row + " ";
  }
  for (let k = 0; k < i + 1; k++) {
    row = row + "*";
  }
  console.log(row);
}
  */

/** 
1
10
101
1010
10101
101010

let n = 6;

for (let i = 0; i < n; i++) {
  let row = " ";
  let _switch = 1;

  for (let j = 0; j <= i; j++) {
    row = row + _switch;
    if (_switch == 1) {
      _switch = 0;
    } else {
      _switch = 1;
    }
  }
  console.log(row);
}
*/

/** 
1
01
010
1010
10101
*/

let n = 6;

let _switch = 1;
for (let i = 0; i < n; i++) {
  let row = " ";

  for (let j = 0; j <= i; j++) {
    row = row + _switch;
    if (_switch == 1) {
      _switch = 0;
    } else {
      _switch = 1;
    }
  }
  console.log(row);
}
