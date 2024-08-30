// Example 1: Simple Matching with `test`
const regex1 = /hello/;
console.log(regex1.test("hello")); // Output: true

// Example 2: Case-Insensitive Matching
const regex2 = /hello/i; // 'i' flag makes it case-insensitive
console.log(regex2.test("Hello world")); // Output: true

// Example 3: Finding Matches with `match`
const str1 = "JavaScript is awesome. I love JavaScript.";
const regex3 = /JavaScript/g; // 'g' flag for global search
console.log(str1.match(regex3)); // Output: [ 'JavaScript', 'JavaScript' ]

// Example 4: Extracting Groups with `exec`
const regex4 = /(\d{4})-(\d{2})-(\d{2})/;
const str2 = "Today's date is 2024-08-30.";
const result1 = regex4.exec(str2);
console.log(result1);
// Output: [ '2024-08-30', '2024', '08', '30', index: 17, input: "Today's date is 2024-08-30.", groups: undefined ]

// Example 5: Replacing Text with `replace`
const str3 = "I have an old car.";
const regex5 = /old/;
const newStr1 = str3.replace(regex5, "new");
console.log(newStr1); // Output: "I have a new car."

// Example 6: Using `search` to Find Index
const regex6 = /world/;
const str4 = "Hello world!";
console.log(str4.search(regex6)); // Output: 6

// Example 7: Splitting a String with `split`
const str5 = "one, two, three, four";
const regex7 = /, /;
const result2 = str5.split(regex7);
console.log(result2); // Output: [ 'one', 'two', 'three', 'four' ]

// Example 8: Validating an Email Address
const regex8 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(regex8.test("ilovefarts@example.com")); // Output: true
console.log(regex8.test("invalid-email")); // Output: false

// Example 9: Replacing Multiple Whitespace with a Single Space
const str6 = "Fart   Butt   poop    ass.";
const regex9 = /\s+/g; // Matches one or more whitespace characters
const newStr2 = str6.replace(regex9, " ");
console.log(newStr2); // Output: "Fart Butt poop ass."

// Example 10: Positive Lookahead
const regex10 = /\d+(?= dollars)/;
const str7 = "I have 100 dollars and 50 cents.";
const result3 = str7.match(regex10);
console.log(result3[0]); // Output: "100"
