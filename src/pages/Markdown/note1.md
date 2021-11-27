# ES6의 const와 let
    - const는 ES6 문법에서 새로 도입되었으며 한번 지정하고 나면 벼경이 불거능한 상수를 선어할 때 사용하는 키워드이다. let은 동적인 값을 담을 수 있는 변수를 선언할 때 사용하는 키워드이다.
    ES6 이전에는 값을 담는데 var 키워드를 사용했지만 var키워드는 scope(해당 값을 사용할 수 있는 코드영역)가 함수 단위이다.
```javascript
 function myFunction(){
     var a = "hello";
     if (true) {
         var a = "bye";
         console.log(a);    // bye
     }
     console.log(a);        // bye
 }
 myFunction();
```
    -if 문 바깥에서 var 값을 hello로 선언하고, if문 내부에서 var 값을 bye로 설정했을 경우 if 문 내부에서 새로 선언했음에도 if 문 밖에서 a를 console로 조회하면 변경된 값이 출력된다. 이같은 결점을 해결하기 위해 const와 let을 사용한다.
```javascript
    function myFunction(){
        let a = "hello";
        if (true) {
            let a = "bye";
            console.log(a);     // hello  
        }
        console.log(a);         // hello
    }
    myFunction();
```
    -let과 const는 scope가 함수 단위가 아닌 블록 단위이므로, if 문 내부에서 선언한 a의 값은 if 문 밖의 a값을 변경하지 않는다. 다만 let과 const는 같은 블록 내부에서 중복선인이 불가능하다.
```javascript
    let a = 1;
    let a = 2;      // Uncaught SyntaxError: Identifier 'a' has already been deClared.
```
    - 또한 const는 한번 선언하면 재설정이 불가능하다.
```javascript
    const b = 1;
    b = 2;         // Uncaught TypeError: Assignment to constant cariable. 
```
    - React에서는 var 변수를 사용할 일이 없다. let은 한번 선언한 후 값을 유동적으로 변환할 수 있으며 (예:for문) const는 한번 선언하고나면 고정적인 값을 표현할 때 사용하면 된다. 