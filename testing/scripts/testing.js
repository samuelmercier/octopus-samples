"use strict";

octopus.define("octopus/testing", function(definition) {

	let errors=0;
	const tests=[];

	definition.run=function(testFunction) {
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
	};

	definition.terminate=function() { window.result={ errors:errors, tests:tests }; };

});

