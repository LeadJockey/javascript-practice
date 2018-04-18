
// 다른 전역 변수와 충돌을 피하기 위해 명칭공간 생성

const d3test = {};

//svg 라는 하위 명칭공간을 만든다.

d3test.svg = {};

// d3.svg 라는 명칭공간에 line 함수를 넣는다.

d3test.svg.line = function(){
	let getX = function(point){
		return point[0];
	};
	let getY = function(point){
		return point[1];
	};
	// 찔러넣기용 함수
	const interpolate = function(points){
		return points.join('L');
	};
	
	function line(data){
		const segments = [];
		const points = [];
		const n = data.length;
    let i = -1;
    let d;
		
		function segment(){
			segments.push("M",interpolate(points));
		}
		
		while(++i < n){
			d = data[i];
			points.push([+getX.call(this,d,i),+getY.call(this,d,i)]);
		}
		if(points.length){
			segment();
		}
		
		return segments.length ? segments.join(""):null;
	}
	
	line.x = function(funcToGetX){
		if(!arguments.length) return getX;
		getX = funcToGetX;
		return line;
	};
	
	line.y = function(funcToGetY){
		if(!arguments.length) return getY;
		getY = funcToGetY;
		return line;
	};
	
	return line;
};