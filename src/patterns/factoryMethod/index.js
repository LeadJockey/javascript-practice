var Factory = function(){
	this.createEmployee = function(type){
		var employee;
		// 추상화 시킨 펙토리얼 메서드 맵퍼
		var employeeTypeMap = {
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

var FullTime = function(){
	this.hourly = "$12";
};

var PartTime = function(){
	this.hourly = "$11";
};

var Temporary = function(){
	this.hourly = "$10";
};

var Contractor = function(){
	this.hourly = "$15";
};