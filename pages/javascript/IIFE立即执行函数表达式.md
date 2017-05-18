# IIFE 立即执行函数表达式（Immediately-invoked Function Expression，立即执行函数表达式。）
#js/学习总结

> **IIFE**的全称是Immediately-invoked Function Expression，立即执行函数表达式。  

## 概念理解
##### 这叫函数表达式，函数表达式中的函数可以为匿名函数，也可以有函数名，但是该函数实际上不能直接使用，只能通过表达式左边的变量test来调用。

```javascript
var test = function(){
	console.log(12);
}
```

##### 这叫函数声明

```javascript
function test(){
	console.log(12)
}
```

##### 调用执行

```javascript
test(); // 12 

function(){}()//SyntaxError:Unexpected token(
//就会报错，这是因为浏览器引擎在解释JavaScript时，遇到function关键字时，会默认把它当做一个函数声明，而不是函数表达式。而函数声明如我们上面所说，需要一个函数名，所以浏览器会认为上面的代码为匿名函数声明，所以报错。

function test(){}();//SyntaxError:Unexpected token )
//在一个函数表达式后面加上括号，表示该表达式立即执行。但是如果是在一条语句后面加上括号，那么该括号只是用来控制优先级的。所以上面的代码相当于声明了一个函数，然后执行()语句，但是()中内容为空，所以报错。

(function (){}());
//这样就不会报错了，因为当解释器遇到(后，会认为其中的function不是函数声明而是函数表达式，所以就成功啦。
```

## 作用
1. 立即执行；
2. 带来块状作用域，不污染全局

## 其它多种方法立即执行匿名函数
```javascript
	(function(){})(); 
	void function(){}(); //使用void 
	!function(){}();//使用一元运算符
	~function(){}();
	-function(){}();
	+function(){}();
```


## 最后，注意一下函数表达式和函数声明的使用。请看代码：

```javascript
if (true) {
    var foo = function(){
        document.write( "1" );
    }
}
else {
   var foo = function(){
        document.write( "2" );
    }
}
foo();//1
```

输出结果为1，这个很好理解，那么我们调整一下执行foo的位置呢：

```javascript
foo();//undefined
if (true) {
    var foo = function(){
        document.write( "1" );
    }
}
else {
   var foo = function(){
        document.write( "2" );
    }
}
```

这里就是未定义。这是由于**变量提升**。javascript解释器在解释代码时会将变量声明先提升到块级作用域最前端，也就是这个样子：

```javascript
var foo;
foo();//undefined
if (true) {
    foo = function(){
        document.write( "1" );
    }
}
else {
   foo = function(){
        document.write( "2" );
    }
}
```

那么我们看看使用函数声明时的结果：

```javascript
if (true) {
    function foo() {
        document.write( "1" );
    }
}
else {
    function foo() {
        document.write( "2" );
    }
}

foo();      // 2
```

咦，这里怎么又输出2了呢？原来函数声明和变量一样，都有一个提升的过程，而和**函数表达式只会提升声明不一样，函数声明即会提升声明，也会提升定义**，所以第二个foo的定义把第一个foo给替换掉了。

这里需要格外注意。