"use strict";

octopus.define("octopus/testing", function(definition) {

	definition.diagnostics=[];

	definition.run=function(testFunction) {
		const start=performance.now();
		try {
			testFunction();
			definition.diagnostics.push({ name:testFunction.name, duration:performance.now()-start, status:"pass" });
		} catch(e) {
			definition.diagnostics.push({ name:testFunction.name, duration:performance.now()-start, status:"fail", cause:e });
			console.log("test '"+testFunction.name+"' failed!");
			console.log(e);
		}
	};

});

