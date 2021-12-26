# ES6의 화살표 함수
- 화살표 함수 (arrow function)는 ES6 문법에서 함수를 표현하는 새로운 문법이다. 그렇다고 기존 function을 이용한 함수 선언 방식을 아예 대체하지는 않는다. 두 함수표현방식은 사용용도가 다를 뿐이다.
- 화살표 함수는 주로 함수를 파라미터로 전달할 때 유용하다.

```javascript
setTimeout(function() {
    console.log('Hello World');
},1000);

setTimeout(() => {
    console.log('Hello World');
},1000);
```
- 위의 코드처럼 화살표 함수가 function을 대체할 수 없는 이유는 두 함수표현방식의 사용용도가 다르기 때문이다. 무엇보다 두 함수가 가리키고 있는 this의 대상이 다르기 때문이다.

```javascript
function BlackDog() {
    this.name = '흰둥이';
    return {
        name: '검둥이';
        bark: function() {
            console.log(this.name + ':멍멍');
        }
    }
}

const baclkDog = new BlackDog();
blackDog.bark();                // 검둥이:멍멍


function WhiteDog() {
    this.name = '흰둥이';
    return {
        name: '검둥이';
        bark: () => {
            console.log(this.name + ':멍멍');
        }
    }
}

const whiteDog = new WhiteDog();
whiteDog.bark();                // 흰둥이:멍멍
```

- **function()** 을 사용했을 때는 검둥이가 나타나고, **() =>** 를 사용했을 때는 흰둥이가 나타난다. 일반함수는 자신이 종속된 객체를 this로 가리키여, 화살표 함수는 자신이 종속된 인스턴스를 가리킨다.
- 화살표 함수는 값을  연산하여 바로 반홚야 할 때 사용하면 가독성을 높일 수 있다.

```javascript
function twice(value) {
    return value * 2;
}

const triple = (value) => value * 3;
```
- 위의 코드와 같이 따로 { } 를 열어주지 않으면 연산한 값을 그대로 반환한다는 의미이다.