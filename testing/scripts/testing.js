"use strict";

octopus.define("octopus/testing", function() {

	const module=Object.freeze({

		diagnostics:[],

		run:function(testFunction) {
			const start=performance.now();
			try {
				testFunction();
				module.diagnostics.push({ name:testFunction.name, duration:performance.now()-start, status:"pass" });
			} catch(e) {
				module.diagnostics.push({ name:testFunction.name, duration:performance.now()-start, status:"fail", cause:e });
				console.log("test '"+testFunction.name+"' failed");
				console.log(e);
			}
		},

		assertError:function(expression, expected) {
			try {
				expression();
			} catch(e) {
				module.assertEqual(e.message, expected);
				return;
			}
			throw new Error("expected '"+expected+"'; got no exception");
		},

		assertEqual:function(actual, expected) {
			if(expected===undefined)
				throw new Error("expected is undefined; use assertUndefined instead");
			if(actual!==expected)
				throw new Error("expected '"+expected+"'; got '"+actual+"'");
		},

		assertFalse:function(actual) {
			if(actual!==false)
				throw new Error("expected 'false'; got '"+actual+"'");
		},

		assertTrue:function(actual) {
			if(actual!==true)
				throw new Error("expected 'true'; got '"+actual+"'");
		},

		assertUndefined:function(actual) {
			if(actual!==undefined)
				throw new Error("expected 'undefined'; got '"+actual+"'");
		},

		fail:function(message) { throw new Error(message); }

	});

	return module;
});
