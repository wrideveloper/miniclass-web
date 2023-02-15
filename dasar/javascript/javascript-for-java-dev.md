# Javascript for Java dev

## Comments

<table>
  <tr>
    <th>Java</th>
    <th>Javascript</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
// single line comments
/* multi
   line comments */
/**
 * Docstring
 * @params {String} a - blablabla
 */</pre>
    </td>
    <td>
     <pre lang="javascript">
// single line comments
/* multi
   line comments */
/**
 * Docstring
 * @params {string} a - blablabla
 */</pre>
    </td>
  </tr>
</table>

## Semicolon

<table>
  <tr>
    <th>Java</th>
    <th>Javascript</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
someStatement(); // with semicolon
someStatement() // without semicolon, error</pre>
    </td>
    <td>
      <pre lang="javascript">
someStatement(); // with semicolon
someStatement() // without semicolon, ok</pre>
    </td>
  </tr>
</table>

## Arithmetic Operator

<table>
  <tr>
    <th>Java</th>
    <th>Javascript</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
1 + 1; // = 2
0.1 + 0.2; // = 0.30000000000000004
8 - 1 // = 7
10 * 2; // = 20
35 / 5; // = 7
5 / 2; // = 2
5f / 2f; // = 2.5f
5.0 / 2.0; // = 2.5
10 % 2; // = 0
30 % 4; // = 2</pre>
    </td>
    <td>
      <pre lang="javascript">
1 + 1; // = 2
0.1 + 0.2; // = 0.30000000000000004
8 - 1 // = 7
10 * 2; // = 20
35 / 5; // = 7
5 / 2; // = 2.5
5.0 / 2.0; // = 2.5
10 % 2; // = 0
30 % 4; // = 2</pre>
    </td>
  </tr>
</table>

Semua angka di Javascript disimpan sebagai _64-bit IEEE 754 double_, sedangkan Java memiliki `int`, `float`, dan `double`.

## Precedence

<table>
  <tr>
    <th>Java</th>
    <th>Javascript</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
(1 + 3) * 2; // = 8
2 + (2 - 1) * 8 // = 10</pre>
    </td>
    <td>
      <pre lang="javascript">
(1 + 3) * 2; // = 8
2 + (2 - 1) * 8 // = 10</pre>
    </td>
  </tr>
</table>

## Infinity

<table>
  <tr>
    <th>Java</th>
    <th>Javascript</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
Double.POSITIVE_INFINITY
Double.NEGATIVE_INFINITY</pre>
    </td>
    <td>
      <pre lang="javascript">
Infinity
-Infinity</pre>
    </td>
  </tr>
</table>

## Boolean

<table>
  <tr>
    <th>Java</th>
    <th>Javascript</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
true
false</pre>
    </td>
    <td>
      <pre lang="javascript">
true
false</pre>
    </td>
  </tr>
</table>

## String & Char

<table>
  <tr>
    <th>Java</th>
    <th>Javascript</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
"Something" // String
'c' // char</pre>
    </td>
    <td>
      <pre lang="javascript">
"Something" // string
'Something' // string
"s" // string
's' // string</pre>
    </td>
  </tr>
</table>

## Negation

<table>
  <tr>
    <th>Java</th>
    <th>Javascript</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
!true // = false
!false // = true</pre>
    </td>
    <td>
      <pre lang="javascript">
!true // = false
!false // = true</pre>
    </td>
  </tr>
</table>

## Equality

<table>
  <tr>
    <th>Java</th>
    <th>Javascript</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
1 == 1 // = true
1 != 1 // = true
'1' == 1 // = error
"false" == "bar" // = true
"false" == false // = error
"false".equals("bar") // = false</pre>
    </td>
    <td>
      <pre lang="javascript">
// equality check
1 == 1 // = true
1 != 1 // = true
'1' == 1 // = true
"false" == "bar" // = false
"false" == false // = true
// strict equality check
1 === 1 // = true
1 !== 1 // = true
'1' === 1 // = false
"false" === "bar" // = false
"false" === false // = false</pre>
    </td>
  </tr>
</table>

## Comparison

<table>
  <tr>
    <th>Java</th>
    <th>Javascript</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
1 < 10; // = true
1 > 10; // = false
2 <= 2; // = true
2 >= 2; // = true</pre>
    </td>
    <td>
      <pre lang="javascript">
1 < 10; // = true
1 > 10; // = false
2 <= 2; // = true
2 >= 2; // = true</pre>
    </td>
  </tr>
</table>

## String Concatenation (and more)

<table>
  <tr>
    <th>Java</th>
    <th>Javascript</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
"Hello " + "world!"; // = "Hello world!"
"1, 2, " + 3; // = "1, 2, 3"</pre>
    </td>
    <td>
      <pre lang="javascript">
"Hello " + "world!"; // = "Hello world!"
"1, 2, " + 3; // = "1, 2, 3"
"Hello " + ["world", "!"]; // = "Hello world,!"
"a" < "b"; // = true</pre>
    </td>
  </tr>
  <tr></tr>
  <tr>
    <td>
      <pre lang="java">
"This is a string".charAt(0); // = 'T'
"Hello".length(); // = 5</pre>
    </td>
    <td>
      <pre lang="javascript">
"This is a string".charAt(0); // = 'T'
"Hello".length; // = 5</pre>
    </td>
  </tr>
</table>

## Truthy / Falsy

<table>
  <tr>
    <th>Java</th>
    <th>Javascript</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
null</pre>
    </td>
    <td>
      <pre lang="javascript">
null;
undefined;
// false, null, undefined, NaN, 0 and "" are falsy; everything else is truthy.
// Note that 0 is falsy and "0" is truthy, even though 0 == "0".</pre>
    </td>
  </tr>
</table>

## Variables

<table>
  <tr>
    <th>Java</th>
    <th>Javascript</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
String name = "Manusia bernapas";
int age = 12;
boolean hasHighscore = true;
int a = 0, b = 0, c = 0;</pre>
    </td>
    <td>
      <pre lang="javascript">
// 3 keywords
name = "Manusia Bernapas";
var name = "Manusia Bernapas";
let name = "Manusia Bernapas";
const name = "Manusia Bernapas";
const a = 0, b = 0, c = 0;</pre>
    </td>
  </tr>
</table>

## Shorthand

<table>
  <tr>
    <th>Java</th>
    <th>Javascript</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
i++;
i--;
++i;
--i;
i += 1;
i -= 2;
i *= 3;</pre>
    </td>
    <td>
      <pre lang="javascript">
i++;
i--;
++i;
--i;
i += 1;
i -= 2;
i *= 3;</pre>
    </td>
  </tr>
</table>

## Array / List

<table>
  <tr>
    <th>Java</th>
    <th>Javascript</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
String[] foo = { "1", "2", "3" };
foo[2] // = "3"
foo.size() // = 3
foo[2] = "4" // = { "1", "2", "4" }</pre>
    </td>
    <td>
      <pre lang="javascript">
const foo = ["1", 30, false];
foo[2] // = 30
foo.push("World");
foo.length; // = 4
foo[2] = 123 // = ["1", 30, 123]</pre>
    </td>
  </tr>
</table>

## Object

<table>
  <tr>
    <th>Java</th>
    <th>Javascript</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
// sebenernya bisa pake class
// tapi nanti di Javascript juga ada class yang lebih mirip
// class di Javascript under the hood itu pakenya object juga
// tapi dikasih syntactical sugar biar mirip kaya class biasanya</pre>
    </td>
    <td>
      <pre lang="javascript">
const person = {
  name: "Manusia Bernapas",
  age: 12,
  "has highscore": true
}

person.name // = "Manusia Bernapas"
person.age = 20 // person.age === 20
person["has highscore"] // = true</pre>
</td>

  </tr>
</table>

## Control Structure

<table>
  <tr>
    <th>Java</th>
    <th>Javascript</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
int number = 2;
if (number > 2) {
  System.out.println("Number is bigger than 2");
} else if (number == 2) {
  System.out.println("Number is equal to 2");
} else {
  System.out.println("Number is smaller or equal to 2");
}</pre>
    </td>
    <td>
      <pre lang="javascript">
const number = 2;
if (number > 2) {
  console.log("Number is bigger than 2");
} else if (number === 2) {
  console.log("Number is equal to 2");
} else {
  console.log("Number is smaller or equal to 2");
}</pre>
    </td>
  </tr>
  <tr></tr>
  <tr>
    <td>
      <pre lang="java">
while (condition) {
  // do something
}</pre>
    </td>
    <td>
      <pre lang="javascript">
while (condition) {
  // do something
}</pre>
    </td>
  </tr>
  <tr></tr>
  <tr>
    <td>
      <pre lang="java">
do {
  // do something
} while (condition)</pre>
    </td>
    <td>
      <pre lang="javascript">
do {
  // do something
} while (condition)</pre>
    </td>
  </tr>
  <tr></tr>
  <tr>
    <td>
      <pre lang="java">
for (int i = 0; i < 10; i++) {
  System.out.println(i);
}</pre>
    </td>
    <td>
      <pre lang="javascript">
for (let i = 0; i < 10; i++) {
  console.log(i);
}</pre>
    </td>
  </tr>
  <tr></tr>
  <tr>
    <td>
      <pre lang="java">
char grade = 'B';
switch (grade) {
  case 'A':
    System.out.println("Great job");
    break;
  case 'B':
    System.out.println("OK job");
    break;
  case 'C':
    System.out.println("You can do better");
    break;
  default:
    System.out.println("Oy vey");
    break;
}</pre>
    </td>
    <td>
      <pre lang="javascript">
const grade = 'B';
switch (grade) {
  case 'A':
    console.log("Great job");
    break;
  case 'B':
    console.log("OK job");
    break;
  case 'C':
    console.log("You can do better");
    break;
  default:
    console.log("Oy vey");
    break;
}</pre>
    </td>
  </tr>
</table>

## Function / Method

<table>
  <tr>
    <th>Java</th>
    <th>Javascript</th>
  </tr>
  <tr>
    <td>
      <pre lang="java">
String upper(String text) {
  return text.toUpperCase();
}

upper("foo"); // = "FOO"</pre>
    </td>
    <td>
      <pre lang="javascript">
function upper(text) {
  return text.toUpperCase();
}
upper("foo"); // = "FOO"</pre>
    </td>
  </tr>
  <tr></tr>
  <tr>
    <td>
      <pre lang="java">
(String text) -> text.toUpperCase();</pre>
    </td>
    <td>
      <pre lang="javascript">
const upper = (text) => {
  return text.toUpperCase()
};
const upper = (text) => text.toUpperCase();
upper("foo"); // = "FOO"</pre>
    </td>
  </tr>
  <tr></tr>
  <tr>
    <td>
      <pre lang="java"></pre>
    </td>
    <td>
      <pre lang="javascript">
[1, 2, 3].map((f) => f * 2) // = [2, 4, 6]
[1, 2, 3].map((f) => f * 2) // = [2, 4, 6]</pre>
    </td>
  </tr>
</table>
