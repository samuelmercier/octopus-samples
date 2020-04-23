"use strict";

@native function Error() {}
@native function Object() {}
@native function Map() {}

@native function alert() {}

@native var console;
@native var performance;
@native var window;
@native var undefined;

const octopus=function() {

	const initializers=new Map();
	const libraries=new Map();
	const octopus={};

	octopus.define=Object.freeze(function(libraryName, initializer) {
		if(typeof initializer!=="function")
			throw new Error("initializer is not a function");
		if(initializers.has(libraryName))
			throw new Error("redefinition of library '"+libraryName+"'");
		initializers.set(libraryName, initializer);
	});

	octopus.resolve=Object.freeze(function(libraryName) {
		const library=libraries.get(libraryName);
		if(library!==undefined)
			return library;
		const initializer=initializers.get(libraryName);
		if(initializer===undefined)
			throw new Error("cannot resolve library '"+libraryName+"'");
		const result={};
		libraries.set(libraryName, result);
		initializer(result);
		return Object.freeze(result);
	});

	octopus.initialize=function() {
		for(const libraryName of initializers.keys())
			octopus.resolve(libraryName);
	};

	return Object.freeze(octopus);

}();

