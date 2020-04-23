const Tests=function() {
	let errors=0;
	const tests=[];
	return Object.freeze({
		run:function(testFunction) {
			const start=performance.now();
			try {
				testFunction();
				tests.push({ name:testFunction.name, duration:performance.now()-start, status:"pass" });
			} catch(e) {
				tests.push({ name:testFunction.name, duration:performance.now()-start, status:"fail", cause:e });
				errors+=1;
				console.log("in test "+testFunction.name+": "+e);
				console.log(e);
			}
		},
		result:function() {
			console.log("ran "+tests.length+" test(s) and terminated with "+errors+" error(s)");
		}
	});
}();

