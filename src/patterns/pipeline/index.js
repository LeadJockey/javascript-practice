function Pipeline(presetStages){
	this.stages = presetStages || [];
}

Pipeline.prototype.pipe = function(stage){
	this.stages.push(stage);
	return this;
};
Pipeline.prototype.process = function(args){
	if(this.stages.length === 0){
		return args;
	}
	
	let stageOutput = args;
	
	this.stages.forEach(function(stage, counter){
		// 마지막 스테이지가 프로미스인지 확인
		if(stageOutput && typeof stageOutput.then === 'function'){
			// 프로미스인 경우 호출
			stageOutput = stageOutput.then(stage);
		}else{
			//다음 스테이지 호출
			if (typeof stage === 'function') {
				stageOutput = stage(stageOutput);
			} else {
				stageOutput = stage;
			}
		}
	});
	return stageOutput;
};