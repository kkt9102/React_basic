# ES6의 클래스 문법

- ES6 이전에는 JavaScript에 Class 가 없었다. 개념 자체는 있었지만 그것을 구현하려면 class 대신에 prototype이라는 문법응 사용하여 다음과 같이 작업해야 했다.
```javascript
function Dog(name) {
    this.name = name;
}

Dog.prototype.say = function() {
    console.log(this.name + ':멍멍');
}
var dog =new Dog('검둥이');
dog.say();                              // 검둥이:멍멍
```

- ES6 문법부터는 이것과 기능이 똑같은 코드를 class를 사용하여 다음과 같이 작성할 수 있다.
```javascript
ckass Dog {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log(this.name + ':멍멍');
    }
}

constdog = new Dog('흰둥이');
dog.say();                              // 흰둥이:멍멍
```