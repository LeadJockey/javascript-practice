# concat

_.concat(array, [values])

- array와 함께 추가적으로 배열 또는 값들을 연결해서 새로운 배열을 만든다.
- 인자로 꼭 배열이 아니더라도 어떤 값이 들어오더라도 배열로 감싸서 새로운 배열을 만들어 준다.

## Arguments
    array *(Array)*: 처리할 배열
    [value] (...*): 연결할 수 있는 값들. 
    

## return 
    *(Array)* : compact된 새로운 배열.

## example

```javascript
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]

```

