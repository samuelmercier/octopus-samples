"use strict";

@native class Array {

	static from(arrayLike, @optional mapFn, @optional thisArg) {}
	static isArray(value) {}
	static of(...) {}

	constructor(@optional lengthOrFirstElement, ...) {}

	get length() {}

	concat(...) {}
	copyWithin(target, @optional start, @optional end) {}
	entries() {}
	every(callback) {}
	fill(value, @optional start, @optional end) {}
	filter(callback, @optional thisArg) {}
	find(callback, @optional thisArg) {}
	findIndex(callback, @optional thisArg) {}
	flat(@optional depth) {}
	flatMap(callback, @optional thisArg) {}
	forEach(callback, @optional thisArg) {}
	includes(valueToFind, @optional fromIndex) {}
	indexOf(searchElement, @optional fromIndex) {}
	join(@optional separator) {}
	keys() {}
	lastIndexOf(searchElement, @optional fromIndex) {}
	map(callback, thisArg) {}
	pop() {}
	push(...) {}
	reduce(callback, @optional initialValue) {}
	reduceRight(callback, @optional initialValue) {}
	reverse() {}
	shift() {}
	slice(begin, @optional end) {}
	some(callback, @optional thisArg) {}
	sort(compareFunction) {}
	splice(start, deleteCount, ...) {}
	toLocaleString(@optional locales, @optional options) {}
	toString() {}
	unshift(...) {}
	values() {}

}

@native class Date {

	static UTC(year, @optional month, @optional day, @optional hour, @optional minute, @optional second, @optional millisecond) {}
	static now() {}
	static parse(dateString) {}

	constructor(@optional value, @optional monthIndex, @optional day, @optional hours, @optional minutes, @optional seconds, @optional milliseconds) {}

}

@native function Error(@optional message, @optional fileName, @optional lineNumber) {}
@native function TypeError(@optional message, @optional fileName, @optional lineNumber) {}

@native class Object extends null {

	static assign(target, ...) {}
	static create(proto, @optional propertiesObject) {}
	static defineProperties(obj, props) {}
	static defineProperty(obj, prop, descriptor) {}
	static entries(obj) {}
	static freeze(obj) {}
	static fromEntries(iterable) {}
	static getOwnPropertyDescriptor(obj, prop) {}
	static getOwnPropertyDescriptors(obj) {}
	static getOwnPropertyNames(obj) {}
	static getOwnPropertySymbols(obj) {}
	static getPrototypeOf(obj) {}
	static is(value1, value2) {}
	static isExtensible(obj) {}
	static isFrozen(obj) {}
	static isSealed(obj) {}
	static keys(obj) {}
	static preventExtensions(obj) {}
	static seal(obj) {}
	static setPrototypeOf(obj, prototype) {}
	static values(obj) {}

	constructor(@optional value) {}

	hasOwnProperty(prop) {}
	isPrototypeOf(object) {}
	propertyIsEnumerable(prop) {}
	toLocaleString() {}
	toString() {}
	valueOf() {}

}

@native const JSON=Object.freeze({

	parse:function(text, @optional reviver) {},
	stringify:function(value, @optional replacer, @optional space) {}

});

@native class Map {

	constructor(@optional iterable) {}

	clear() {}
	delete(key) {}
	entries() {}
	forEach(callback) {}
	get(key) {}
	has(key) {}
	keys() {}
	set(key, value) {}
	values() {}

}

@native const Math=Object.freeze({});

@native class RegExp {

	constructor(pattern, @optional flags) {}

}

@native class String {

	static fromCharCode(...) {}
	static fromCodePoint(...) {}
	static raw(callSite, ...) {}

	constructor(thing) {}

	get length() {}

	charAt(index) {}
	charCodeAt(index) {}
	codePointAt(pos) {}
	concat(...) {}
	endsWith(searchString, @optional length) {}
	includes(searchString, @optional position) {}
	indexOf(searchValue, @optional fromIndex) {}
	lastIndexOf(searchValue, @optional fromIndex) {}
	localeCompare(compareString, @optional locales, @optional options) {}
	match(regexp) {}
	matchAll(regexp) {}
	normalize(@optional form) {}
	padEnd(targetLength, @optional padString) {}
	padStart(targetLength, @optional padString) {}
	repeat(count) {}
	replace(regexpOrSubstr, newSubstrOrFunction) {}
	search(regexp) {}
	slice(beginIndex, @optional endIndex) {}
	split(@optional separator, @optional limit) {}
	startsWith(searchString, @optional position) {}
	substring(indexStart, @optional indexEnd) {}
	toLocaleLowerCase(...) {}
	toLocaleUpperCase(...) {}
	toLowerCase() {}
	toString() {}
	toUpperCase() {}
	trim() {}
	trimEnd() {}
	trimStart() {}
	valueOf() {}

}

@native class Symbol extends null {

	static get asyncIterator() {}
	static get hasInstance() {}
	static get isConcatSpreadable() {}
	static get iterator() {}
	static get match() {}
	static get matchAll() {}
	static get replace() {}
	static get search() {}
	static get species() {}
	static get split() {}
	static get toPrimitive() {}
	static get toStringTag() {}
	static get unscopable() {}

	static for(key) {}
	static keyFor(sym) {}

}

@native function alert(@optional message) {}
@native function encodeURIComponent(str) {}
@native function isFinite(testValue) {}
@native function isNaN(value) {}
@native function parseFloat(value) {}
@native function parseInt(string, @optional radix) {}
@native const console;
@native const performance;
@native const undefined;
@native const window;

const octopus=function() {

	const initializers=new Map();
	const libraries=new Map();
	const module=Object.freeze({
		define:Object.freeze(function(libraryName, initializer) {
			if(typeof initializer!=="function")
				throw new Error("initializer is not a function");
			if(initializers.has(libraryName))
				throw new Error("redefinition of library '"+libraryName+"'");
			initializers.set(libraryName, initializer);
		}),
		resolve:Object.freeze(function(libraryName) {
			const library=libraries.get(libraryName);
			if(library!==undefined)
				return library;
			const initializer=initializers.get(libraryName);
			if(initializer===undefined)
				throw new Error("cannot resolve library '"+libraryName+"'");
			const result=initializer();
			libraries.set(libraryName, result);
			return result;
		}),
		initialize:Object.freeze(function() {
			for(const libraryName of initializers.keys())
				module.resolve(libraryName);
		})
	});
	return module;

}();
