// /**
//  * Created by yanglu on 11/10/16.
//  */
// var grades = [100, 50];
//
// grades.forEach(function (grade) {
//     console.log(grade);
// })

// function fn(arg1, arg2, callback) {
//     var num = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
//     callback(num);
// }
//
// fn(10,20,function (num) {
//     console.log(num);
// })

// var http = require('http')
// var url ='http://www.iteye.com/'
// http.get(url, function (res) {
//     var html = ''
//     //触发data事件
//     res.on('data', function (data) {
//         html += data
//     })
//
//     res.on('end',function () {
//         console.log(html)
//     })
// }).on('error',function () {
//     console.log("error")
// })

// var grades = [100, 50, 75];
// var totalGrade = 0;
//
// grades.push(97);
// grades.unshift(89);
// var length = grades.length;
// console.log(length);
//
// grades.forEach(function (grade) {
//     totalGrade += grade;
//     console.log(totalGrade)
//
// })
// console.log(totalGrade/length);

// var Http = require('http');
// Http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type':'text/plain'});
//     res.end('hello node\n');
// }).listen(1337, '127.0.0.1');
// console.log('Server running at localhost:1337/');

// b();
// console.log(a);
//
// var a = 'hello world';
//
// function b() {
//     console.log('Called b!');
// }

// var a;
// console.log(a);
// if (a === undefined){
//     console.log("not defined")
// }

// function b() {
//      var ab;
//     console.log(ab);
//
// }
// function a() {
//     var ab = 2;
//     console.log(ab);
//     b();
// }
// var ab = 1;
// console.log(ab);
// a();
// console.log(ab);


// function a() {
//     function b() {
//         console.log(myVar);
//     }
//     var myVar = 2;
//     b();
// }
// var myVar = 1;
// a();

// function waitThreeSeconds() {
//     var ms = 3000 + new Date().getTime();
//     while (new Date() < ms){
//         console.log('finished function');
//     }
// }
// function  clickHandler() {
//     console.log('click event!');
// }
//
// document.addEventListener('click',clickHandler);
//
// waitThreeSeconds();
// console.log('finish execution')

// console.log(false < 1);

// function greet(name) {
//     name = name || '<Your name here>'
//     console.log(name);
//     console.log('hello' + name)
// }
// // greet();
// console.log(greet);
//
// function log(a) {
//     a();
//     console.log(a);
// }
//
// log(function () {
//     console.log('hi');
// });

// var c = {
//     name: 'The c object',
//     log: function () {
//         this.name = 'Updated c object';
//         console.log(this);//--> c
//     var setname = function (newname) {
//         this.name = newname; //--> point to the global object
//     }
//     setname('updated agian the c object');
//     console.log(this);
//      }
// }
// c.log();

//
// var c = {
//     name: 'The c object',
//     log: function () {
//         var self = this;
//
//         self.name = 'updated c object';
//         console.log(self);
//
//         var setname = function (newname) {
//             self.name = newname;
//         }
//         setname('updated again! The c object');
//         console.log(self);
//     }
// }
//
// c.log();

// var arr = [
//     1,
//     false,
//     {
//         name: 'Yang',
//         address: '1844 10th st n'
//     },
//     function (name) {
//         var greeting = 'hello ';
//         console.log(greeting + name)
//     },
//     'hello'
// ];
//
// console.log(arr);
//
// arr[3](arr[2].name);


//
// var greeting = function (name) {
//     console.log("hello  " + name);
// }();

// var greeting = function (name) {
//     return 'Hello' + name;
// };
// console.log(greeting);
// console.log(greeting());

// var greeting = function (name) {
//     return "hello " + name;
// }('Yang');
//
// console.log(greeting);


// (function (name) {
//     console.log("hello " + name);
// }('abc'));

// var greeting = 'hola';
//
// (function (name) {
//     var greeting = 'Hello';
//     console.log(greeting + name);
// }('Yang'));
//
// console.log(greeting);

// function greet(whattosay) {
//
//     return function (name) {
//         console.log(whattosay +' ' + name);
//     }
//
// }
// greet('hi')('Yang');


//
// function buildfunction() {
//     var arr = [];
//     for(var i = 0; i < 3 ; i ++) {
//         let j = i;
//         arr.push(
//             function () {
//                 console.log(j);
//             }
//         );
//     }
//     return arr;
// }
//
// var fs = buildfunction();
//
// fs[0]();
// fs[1]();
// fs[2]();

// function mapForEach(arr, fn) {
//     var newArr = [];
//     for(var i = 0; i < arr.length; i++) {
//         newArr.push(
//             fn(arr[i])
//         )
//     };
//     return newArr;
// }
//
// var arr1 = [1,2,3];
//
// var arr2 = mapForEach(arr1, function (newarr) {
//     // return newarr * 2;
//     return newarr > 2;
//
// });
//
// console.log(arr2);
// var fs = require("fs");
//
// fs.readFile('input.text', function (err, data) {
//     if (err) {
//         console.log(err.stack);
//         return;
//     }
//     console.log(data.toString());
// });
// console.log("end");

// var buffer1 = new Buffer('bcd');
// var buffer2 = new Buffer("abcd");
// var result = buffer1.compare(buffer2);
//
// if (result < 0) {
//     console.log(buffer1 + " 与 " + buffer2 + "qian")
// }else if(result == 0) {
//     console.log(buffer1 + " 与 " + buffer2 + "相同");
// }else {
//     console.log(buffer1 + " 与 " + buffer2 + "hou");
// }

// function say(word) {
//     console.log(word);
// }
// function execute(fn, value) {
//     fn(value);
// }
// execute(say,'hi');

// console.log(String.prototype)
//
// String.prototype.isLengthGreaterThan = function (limit) {
//     return this.length > limit;
// }
// console.log('abc'.isLengthGreaterThan(2));

// Number.prototype.isPositive = function () {
//     return  this > 0;
// }
//
// // 3.isPositive();
//
// var a = new Number(3);
// a.isPositive()


// Array.prototype.myCustomerFeature = 'd';
// var arr = ["a", "b", "c"];
//
// for (var prop in arr) {
//     console.log(prop + ":" + arr[prop])
// }
//
// for (var i = 0; i < arr.length; i++) {
//     console.log(prop + "::::" + arr[i]);
// }

// var person = {
//     firstname : " default",
//     lastname : " deafult",
//     greet: function () {
//         return 'Hi' + this.firstname;
//     }
//
// }
// var john = Object.create(person);
//
// console.log(john);

//
// function fib(n){
//     var result = 0;
//     if (n > 2) {
//         result = fib(n - 1) + fib(n - 2);
//     }
//     else if (n > 0) {
//         result = 1;
//     }
//     return result;
// }
// var begin = new Date().getTime();
// console.log(fib(30));
// console.log((new Date().getTime()) - begin);

// var arr = [
//     1,
//     false,
//     {
//         name: 'Yang',
//         address: '1844 10th st n'
//     },
//     function (name) {
//         var greeting = 'hello ';
//         console.log(greeting + name)
//     },
//     'hello'
// ];
//
//  console.log(arr);
//
//
// arr[3](arr[2].name);

// function f1(){
//     n=999;
//     return function () {
//         console.log(n);
//     }
// }
// var v = f1()
// v();

// (function() {
//     // Outputs: undefined
//     console.log(declaredLater);
//
//  //   var declaredLater = "Now it's defined!";
//
//     // Outputs: "Now it's defined!"
//     console.log(declaredLater);
// })();
// b();
// console.log(a);
// var a = 'hello world';
//
// var abc = function b() {
//     console.log('Called b!');

// (function() {
//     // Outputs: undefined
//     console.log(declaredLater);
//
//     var declaredLater = "Now it's defined!";
//
//     // Outputs: "Now it's defined!"
//     console.log(declaredLater);
// })();
//
// for (var i = 1; i <= 3; i++) {
//     setTimeout(function () {
//        console.log(i);
//     },0);
// }

// console.log('5 & 1:', (5 & 1));
// console.log('5 | 1:', (5 | 1));
// console.log('~ 5:', (~5));
// console.log('5 ^ 1:', (5 ^ 1));
// console.log('5 << 1:', (5 << 1));
// console.log('5 >> 1:', (5 >> 1));

// console.log('10.567890'|0);

// var stevesApp = {};
// stevesApp.person = 'steve';
// stevesApp.logPerson = function () {
//     console.log(stevesApp.person);
// }
//
// var person = 'tony';
// stevesApp.logPerson();

//// app.js
// var myApp = Angular.module('myApp', []);
//
// myApp.controller('mainController', function () {
//
// });
//
// //index.html
// <html lang = "en-us" ng-app = "myApp">
//         <div ng-controller="mainController">
//
//             <h1> Hello World <h1>
//         </div>
// </html>

// var Person = function (firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname
// }
//
// function logPerson(Person) {
//
//     console.log(John);
// }
// var John = new Person('John', 'Doe');
// logPerson(John);

// var searchPeople = function (firstName, lastName, height, age, occupation) {
//     return 'Jane Doe';
// }
//
// console.log(angular.injector().annotate(searchPeople));
//
// // var searchPeopleString = searchPeople.toString();
// // console.log(searchPeopleString);
//
// console.log(angular.injector().annotate(searchPeople));

// function fib(n) {
//     var result = 0;
//     if (n > 2) {
//         result = fib(n-1) + fib(n-2);
//     }else if (n > 0){
//         result = 1;
//     }
//     return result;
// }


// function fib(n){
//     var result = 0;
//     if (n > 2) {
//         return fib(n - 1) + fib(n - 2);
//     }
//     else if (n > 0) {
//         return  1;
//     }
//
// }
// console.log(fib(10));
//
// var recursive = function(n) {
//     if(n <= 2) {
//         return 1;
//     } else {
//         return recursive(n - 1) + recursive(n - 2);
//     }
// };
//
// console.log(recursive(10));
//
// fs.readFile('/etc/passwd', function (err, data) {
//     if (err) throw err;
//     console.log(data);
// });


// fs.readFile(fileA, function (err, data) {
//     fs.readFile(fileB, function (err, data) {
//         //.....
//     });
// });
//
// var readFile = require('fs-readfile-promise');
//
// readFile(fileA)
//     .then(function (data) {
//         console.log(data.toString());
//     })
//     .then(function(){
//     return readFile(fileB);
//     })
//     .then(function (data) {
//         console.log(data.toString())
//     })
// console.log('hi');
// setTimeout(function () {
//     console.log('there');
// }, 0);
// console.log('abc');

// <div class="form-group" ng-class="
// {'has-error': !theForm.email.$valid && !theForm.$pristine,
//     'has-success':theForm.email.$valid && !theForm.$pristine}
// ">
//
// <p class="help-block"> </p>
//     <p class="help-block" ng-show="theForm.email.$error.required"> </p>
//
//     {'has-error': !theForm.email.$valid && (!theForm.$pristine|| theForm.$submitted),

//pass by value vs pass by reference
// "use strict"
// var a = 1;
// function foo(a) {
//     a = 2;
// }
// foo(a);
// console.log(a);

// "use strict"
// var a = {};
// function foo(a) {
//     a.moo= false;
// }
// foo(a);
// console.log(a);

// "use strict"
// // var a = {'moo': 'too'};
// // function foo(a) {
// //     a.too = 'bcd'
// // }
// // foo(a);
// // console.log(a);
// var a = 3;
// a = 1;
// console.log(a);

// console.log('' == '0');
// console.log(0 == '');


// function goo() {
//     var myvar = 1;
//     foo();
//     function foo() {
//         console.log(myvar);
//     }
// }
// goo();


// var thing = {"hello": "main"}
// console.log("main", thing);
//
// function otherScope() {
//     var thing = {"hello": "other"};
//     console.log("other:", thing);
// }
// otherScope();
// console.log(thing);
// var thing = {"hello": "main"}
// console.log("main", thing);
// //function otherScope() {
// var thing = {"hello": "other"};
// console.log("other:", thing);
// // }
// // otherScope();
//
//
// console.log(thing);

//console.log(typeof ("123"|0));