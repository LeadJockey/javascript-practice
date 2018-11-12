const Factory = function(){
	this.createEmployee = function(type){
		let employee;
		// 추상화 시킨 펙토리얼 메서드 맵퍼
		const employeeTypeMap = {
			'fulltime':FullTime,
			'parttime':PartTime,
			'temporary':Temporary,
			'contractor':Contractor
		};

		employee = new employeeTypeMap[type]() || function(){};

		employee.type = type;

		employee.say = function(){
			console.log(this.type + ": rate" + this.hourly + "/hour");
		};

		return employee;
	};
	this.add = function(){};
	this.remove = function(){};
};

const FullTime = function(){
	console.log('f');
	this.hourly = "$12";
};
const PartTime = function(){
	console.log('p');
	this.hourly = "$11";
};
const Temporary = function(){
	console.log('t');
	this.hourly = "$10";
};
const Contractor = function(){
	console.log('c');
	this.hourly = "$15";
};
