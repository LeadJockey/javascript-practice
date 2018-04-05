# compact

_.compact(array);

- 배열의 element 중 falsy valuee 들을 제거해서 새로운 배열을 만든다. falsy value는 false, null, 0, "", undefined 그리고 NaN 이 있다.

## Arguments
    array *(Array)* : 처리할 배열
    

## return 
    *(Array)* : compact된 새로운 배열.

## example

```javascript
_.compact([0, 1, false, 2, '', 3]);
// => [1,2,3]

_.compact(['a','b',[false, 2], 1, false])
// => ["a", "b", [false, 2] , 1]
// 깊은거 까진 안되네용~

```

