# chunk

_.chunk(array, [size=1=]);

- 사이즈의 길이만큼 그룹핑으로 나눠진 요소들을 element로 가지고 있는 배열을 만든다. 만약 배열을 만들수 없을때 chunk 는 기존 element를 유지한다.

## Arguments
    array *(Array)* : 처리할 배열
    [size=1=] *(Number)* : 각 chunk 의 길이

## return 
    *(Array)* : chunk된 새로운 배열.

## example

```javascript
_.chunk(['a','b','c','d'], 2);
// => [['a','b'],['c','d']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```

