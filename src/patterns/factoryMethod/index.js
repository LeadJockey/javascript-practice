const Factory = function(){
	this.createEmployee = function(type){
		let employee;
		// 추상화 시킨 펙토리얼 메서드 맵퍼
		const employeeTypeMap = {
			'fulltime':new FullTime(),
			'parttime':new PartTime(),
			'temporary':new Temporary(),
			'contractor':new Contractor()
		};
		
		employee = employeeTypeMap[type] || function(){};
		
		employee.type = type;
		
		employee.say = function(){
			console.log(this.type + ": rate" + this.hourly + "/hour");
		};
		
		return employee;
	}
};

const FullTime = function(){
	this.hourly = "$12";
};

const PartTime = function(){
	this.hourly = "$11";
};

const Temporary = function(){
	this.hourly = "$10";
};

const Contractor = function(){
	this.hourly = "$15";
};