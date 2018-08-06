(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.citron = function() {
	this.initialize(img.citron);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,750);


(lib.Imagebitmap10 = function() {
	this.initialize(img.Imagebitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,595,395);


(lib.Imagebitmap1611 = function() {
	this.initialize(img.Imagebitmap1611);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,595,395);


(lib.Imagebitmap18 = function() {
	this.initialize(img.Imagebitmap18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,595,395);


(lib.Imagebitmap19 = function() {
	this.initialize(img.Imagebitmap19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,595,395);


(lib.Imagebitmap20 = function() {
	this.initialize(img.Imagebitmap20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,595,395);


(lib.Imagebitmap3 = function() {
	this.initialize(img.Imagebitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,720);


(lib.Imagebitmap9 = function() {
	this.initialize(img.Imagebitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,667,437);


(lib.indonesia = function() {
	this.initialize(img.indonesia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,750);


(lib.manille = function() {
	this.initialize(img.manille);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,750);


(lib.me = function() {
	this.initialize(img.me);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,750);


(lib.peche = function() {
	this.initialize(img.peche);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,750);


(lib.pomme = function() {
	this.initialize(img.pomme);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,750);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,743,644);


(lib.world = function() {
	this.initialize(img.world);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,720);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ville6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmHCuIAAgmIgIAAIAAgCIABAAIAAh4QAAAAgBgBQAAAAgBAAQAAgBAAgBQAAAAAAgBQAAgCAEgCIAAgIIACAAIAAAIQAEABAAADQAAABAAAAQgBABAAABQAAAAAAAAQgBABAAAAIAABjIAGAAIAAgPIAQAAIAAAPIAIAAIAAgJIAJAAIAAgFQgDgEAAgFQAAgFADgEQADgEAFgBIACgCIAAgCIAAAAIAAgFIABAAIAAAFIABAAIAAACIABACQALACAAAMQAAAEgDAEIAAAGIAPAAIAAgFIAFAAIAAgKQgDgFAAgGQAAgJAFgGQAFgGAIgBIAAAAIAAgDIABAAIAAgIIABAAIAAAIIABAAIAAADQAIABAFAGQAFAGAAAJQAAAGgDAGIAAAJIAGAAIAAAFIAPAAIAAgFQgDgFAAgEQAAgFAEgEQADgEAFgBIABgCIAAgCIABAAIAAgFIABAAIAAAFIAAAAIAAACIACACQALADAAALQAAADgDAFIAAAGIAIAAIAAAJIAHAAIAAgPIAQAAIAAAPIAGAAIAAhjQgBAAAAgBQgBAAAAAAQAAgBgBgBQAAAAAAgBQAAgCAEgCIAAgIIACAAIAAAIQAEABAAADQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAIAAB4IA6AAQgQgNgKgTQgJgUAAgWQAAgoAcgbQAcgcAoAAQAoAAAcAcQAbAbAAAoQAAAWgJAUQgKATgPANIBCAAIAAj4IAlAAIAAAMIAKAAIAADsIAZAAQgBhgAUiIIALADIACgMIAcAWIgCDbIALAAIAAjUIAGgLIAEggIAHACIACgKIAPAMIAIAAIABgFIAEACIABgGIAFAGIABgDIACAFIAAD8IANAAIgBkeIAcgVIACAMIAOgFQARA5AEBHIgFCsIAJAAIAAi+QAMgKAAgQIAJAAQAAAQAMAKIAAC+IAHAAIAAjyQALgLAAgTIAIAAQAAATALALIAADyIABAAIAAAog");
	this.shape.setTransform(40.1,17.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.3,34.8);


(lib.ville2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmtDrIAAgmIBYAAIAAiYIAjAAIAAASIARAAIAACEIAYAAIAAhhIAKAAIAAgFIAJgEIADAAIAAgDIAIAAIAAADIADAAIAKAEIAABmIAZAAIAAhqIBEAAIAABqIAZAAIAAhAIAGAAIAAhSIAJAAIAAgIIAOAAIAAAIIAJAAIAABaIAFAAIAAAmIAIAAIAGj0IgGAAIgEgHIgDAAIAAgEIgCAAIAAgLIAIAAIAAgEIAFAAIAEhEIgGAAIAAgFIAFAAIADhEIADBEIAFAAIAAAFIgGAAIAEBDIAFAAIAAAFIAIAAIAAAKIgCAAIAAAFIgDgBIgEAIIgGgBIAFD1IALAAIAAhnIAKgEIADAAIAAgEIAIAAIAAADIACAAIAJAFIAAAGIAKAAIAABhIAGAAIAAAXIAKAAIAAhQIBMAAIAABQIAEAAIAAgtIAHAAIAAgSIAPAAIAAAFIAIAAIAAA6IACAAIAAhHIAKAAIAAgPIAJAAIAAgMIAWAAIAAAKIAHAAIAABYIADAAIAAjKIAPAAIAAgTIACAAIAAATIAFAAIAAgNIADAAIAAANIAFAAIAAgHIADAAIAAAHIAGAAIAADKIAHAAIAAgtIABAAIAAgNIAOgOIAPAAIACgCIAWAAIAABKIAEAAIAAh/IACAAIAAgDIACAAIAAACIACAAIAAABIADAAIAAgEIAFAAIAAAEIAPAAIAAASIAPAAIAAAKIAFAAIAABjIADAAIAAg0IAGAAIAAgiIAEAAIAAgPIAFAAIAAgGIALgLIAAgLIAKAAIAAgWIgCAAIAAgIIAHAAIAAAIIgDAAIAAAWIAKAAIAAALIAKALIAAAGIAGAAIAAAPIAFAAIAAAiIAHAAIAABXg");
	this.shape.setTransform(43,23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86,47);


(lib.ville1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AobCHIAAglIAuAAIAAgIIADgBIABgBIAAgqQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgGIABgDIAFAAIAAgEIAAgDIABgBIAHAAIABgCIAAgLIABAAIABAAIAAAoIAAADIADAAIABgBIAAgMIAAgEIADAAIABABIAAAPIABABIAEAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgCIACgBIAEAAIABADIAAAAIABABIAEAAIABABIAAATIABAAIACAAIABgBIAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAIADgBIAEAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAgBIAAgKQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIAHAAIABABIAAALQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAIAHAAIAAgDIAAhhIABgCIAXgqIACgCQAAAAABABQAAAAAAAAQAAAAABABQAAAAAAABIAXAoIABAFIAAA8IABACIADAAIAAADIAAAHIABABIABAAIABABIAAAEIABACIAKAAIABgCIAAgKQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIANAAIABABIAAAEIABABIAEAAIABgBIAAgPIABgDIAAgBIAAgCIABgCIABgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAIABgCIABgBIAAAAIABgCIABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIAAgBIAAgBIABAAQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAIABgCQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBAAAAIABAAIAAgBIABgBIABAAIABAAIAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAABAAIABABIAAABIAAABIABACQAAAAAAAAQAAABABAAQAAAAAAAAQAAABABAAIAAAAIAAABIABABQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABABAAQAAAAAAAAQAAAAABAAIAAABIAAABIABABIACACQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAIAAABIABACIABADIAAg8IABgBIAIAAIAAgBIABgBIABAAIABgCIAAgJIABgBIAEAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIAAgIQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIABABIAAAIIABABIAFAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAABIAAAHIABACIADAAIADAAIAAACIAJAAIABABIAAArQAAABAIgBIAFgRIAAgDIAAgDIADgBIABAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAIAAADIAAABIADAAIAAgBIAAgXQAAAAAAgBQABAAAAgBQAAAAAAAAQABAAAAAAIAIAAIABAAIACgCIACAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAgCIADgBIACAAIACABIAAACIABAAQABAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAIAAABIACAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAIAAAIIADAAIAGAAIABABIAAAWQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIABAAIABgBIAAgEIABgBIADAAIABgBIAAgBQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIAEAAIABAAIAAADIABABIADAAIAAACIAAAEIABABQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIAAgJQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIAAAAIABgBIAAgDQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIAGAAIgBABIABBdIAAABIAAgwIAFAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAIAHgMIAEgBQAZgFAWgLQARgHAPgMQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIATALQAcAPAfAFQAMACAMAAQANACAKgCIAXgDQAdgFAZgMIAVgMQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIAAAAQAgAXAoALIAIACIADACIAIALQAAAAAAAAQAAAAAAAAQAAAAABAAQAAABAAAAIAGAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIAHAAIABABIAAAEQAAABAAAAQAAABAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABIABABIAFAAIABgBIAAgDIABgBIAGAAIAAADQAAAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAIADAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAgBAAAAIAAgCIABgBIANAAIABABIAAANQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIAEAAIAAgCIAAhMQAAAAAAgBQAAAAABAAQAAAAAAAAQAAgBABAAIAJAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIAAgCIABgBIAEAAIACgBIAAgBIABgCQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAABIAAAAIABACIAFAAIABABIACAAIAMAAIABABIAAA3IABACIABADIAAABQAAAAAAABQAAAAAAAAQAAAAABAAQAAABAAAAIAUAAIACAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAIAAAHIABABQAlgFAGABQAAAAAAgBQABAAAAAAQAAAAAAAAQABgBAAAAIADgLQAHgVACgRQABgSgBgIQgBgNgDgMQgEgTgJgUQgHgPgHgMIgBgCIACAAQAAAAABABQAAAAAAAAQABAAAAAAQAAAAABAAIACAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAEAAIAYAAIABACIADAQQAHAjAKAgQANAtAQAfIAKATIACACIAJAEIAABSgAC5AjIAAADIACAjIAAADIADAAIBSAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIAAgoIgBgBIhYAAgAgpAmIACAjIAAADIDVAAIAAAAIABgBIABgiQAAgGABgBIjbAAgAiJAjIAAAmIABADIBUAAIABgDIABgfIABgIIAAAAIhXAAgAHMAkIAAAAIAAABIAlACIAAgBQABABAAgBIAAgBIgDgCIghAAgAB4AJIAAAQIABADIADAAIAAAAIAAgUgAEDATIAAAIQAAAAAAAAQAAAAABABQAAAAAAAAQABAAAAAAIACAAIABgCIAAgDIgBgDIgBgBIgBgBIgBAAgAD6AbQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAABAAIABAAIABgBIAAgKIgDgBIgBAAgADvAOIAAAMIABACIACAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIAAgLQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIgCAAgADkAbQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAAAIABAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAAgQIgDgBIgCAAgADaAZIAAADIADAAIABgBIAAgUIgDgCIgBAAgADPAAIAAAaIAAACIADAAIABAAIAAgaIAAgBIgEgBgADEgEIAAAfQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIACAAIABgBIAAgeIAAgBIgEgCgAC5AaQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAAAIACAAIAAAAIAAgmIgDgDIgBAAgACxgOQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABIAAAlQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAIABAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAAgoIgBgBIgBAAgACngIIgDABIgBABIAAAgIABACIADAAIABAAIAAgkIgBgBIAAABgACZgCIAAABIAAAaIAAADIADAAIABgBIAAgfgACOABIAAABIAAAZIABABIACAAIABgBIAAgZIAAgBgACEAFQAAAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAIAAAUQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAABAAIABAAIABAAIAAgYgABuAKIgBABIAAAOIABADIADAAIABAAIAAgRIgBgBgABkAMQgBAAAAABQAAAAAAAAQgBAAAAAAQAAABAAAAIAAAMIABACIADAAIABAAIAAgPIgBgBgABYAPIAAAMIABABIACAAIABgBIAAgOIgDAAIgBACgABNAQIAAAKIAAACIADAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAAgJIAAgEIgDAAIgBACgABCAQIAAALQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIACAAIABgBIAAgJIAAgEIgDAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAABgAA3AQIAAAKQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAIAAgJIAAgEIgDAAIgBACgAAsAPIAAAKIAAADIADAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAIAAgKIgBgDIgDAAgAAiAaIAAACIACAAIABAAIABAAIAAgPQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIgBgBIgBABIAAAIIgBAAgAAXAZIAAADIADAAIAAAAIABAAIAAgOIAAgEIgEAAgAAMAJIAAATIAAAAIADAAIABAAIAAgTIgDgBIgBAAgAABAcIADAAIAAAAIABAAIAAgWIgDgBIgBgBgAgJAcIADAAIABAAIAAAAIAAgZIAAgBIgEgBgAgUAAIAAAZIABADIADAAIABAAIAAgbIgBgBIgCgBIgBgBgAgeAcIACAAIABAAIABAAIAAghIgBgBIgDgBgAgpAZIAAADIADAAIAAAAIABAAIAAgnIgDgCIgBgBgAg0gLIAAABIAAAjIAAADIADAAIABgBIAAgpgAg+gFIgBACIAAAeQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAABAAIABAAIABgBIAAggIAAgBgAhKABIAAAZQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAAAIABAAIABgBIAAgbIgDAAIAAAAgAhUAEIgBACIAAAVQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAIACAAIABAAIAAgZgAhcAIIgDABIAAABIAAAPIAAADIADAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAIAAgSIgBgBIAAAAgAhpAMIgBACIAAALIAAADIADAAIABgBIAAgPIgBAAIgCAAgAh1ARIAAALIABAAIACAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAAgKIAAgCgAh/ATIgBABIAAAIIADAAIABgBIAAgIIgBgBIgCABgAHQAZIgBACIACABIAcAAIABgBIgBgDIgdAAgAHSAQIAAAAIAYAAIAAgCQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAgBgBAAIgUAAIgBAEgAHVADIAAABIARAAIAAAAIAAgCIgCgBIgNAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAAAgAHXgGIAGAAIAGAAIAAgBQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAgBAAIgJAAgAHYgTQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAAAIAFAAIABgBIgBgBIgBgCIgEAAQgBAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAABgAHZggIAAABQAAABAAAAQAAABAAAAQAAAAABAAQAAABABAAIABAAQABAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBIgBgBIgBgBIgBAAgAHYgrIAAACIABABIABgBIAAgCIgBAAgAmJg3IAAACIABABIAQAAIAAgBQAAgBABAAQAAAAAAAAQAAAAAAgBQgBAAAAAAIgBgBIgOAAIgCABgAmGg7IABABIAJAAIACgBIgBgCIAAAAIgJAAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAABgAmEhCIAAABQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAIAEAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAIAAgCIgBgBIgFAAIgBABgAG/h2IABABIAGAAIABgBIgBAAIgHAAgAG+h6IAFAAIADAAIABgBIgBgBIgKAAQAAABAAAAQABABAAAAQAAAAAAAAQABAAAAAAgAG6iAQAAAAAAABQAAAAAAAAQAAAAABAAQAAABAAAAIALAAIABgBIgBgCIgLAAg");
	this.shape.setTransform(54,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108.1,27);


(lib.txtville7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUArQgIgIgCgNIAPgEQABAJACAEQAFAGAHAAQAHAAAFgEQAFgFAAgHIgBgGIgDgEIgEgEIgGgDIgJgEQgUgIAAgQQAAgLAIgIQAJgHALAAQARAAAKAQIgMAHQgDgFgDgCQgEgCgFAAQgFAAgEAEQgEADAAAFQAAAHALAFIAIADQAMAGAGAGQAFAHAAAJQAAAOgJAJQgJAJgNAAQgMAAgIgIg");
	this.shape.setTransform(37.3,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGAxIAAhhIANAAIAABhg");
	this.shape_1.setTransform(30.6,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AANAxIgbgoIgCAAIAAAoIgPAAIAAhhIARAAQATAAAIAIQAKAHAAAOQAAAKgGAHQgGAHgKACIAfAqgAgQgDIAFAAQATAAABgQQgBgPgSAAIgGAAg");
	this.shape_2.setTransform(24.3,10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAfA0IgKgYIgpAAIgLAYIgQAAIAwhnIAvBngAAPAPIgOghIgPAhIAdAAg");
	this.shape_3.setTransform(14.1,10.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbAxIAAhhIASAAQALAAAGABQAHADAEAEQAJAJgBAMQABAOgKAGQgIAIgPAAIgGAAIAAAogAgLgDIAFAAQATAAABgQQAAgQgVAAIgEAAg");
	this.shape_4.setTransform(5.9,10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.3,20.9);


(lib.txtville6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAxIAAhhIAPAAIAABhg");
	this.shape.setTransform(77.7,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAxIAAhhIAPAAQAKAAAEABQAGACAEAEQAEAEADAFQACAGAAAGQAAAKgIAIQAIACAFAGQAEAGAAAJQAAALgIAJQgFAEgGACQgHACgJAAgAgNAjIAJAAQAJAAAFgEQAFgEAAgGQAAgHgFgFQgFgDgLAAIgHAAgAgNgGIAEAAQAJAAADgEQADgDAAgHQAAgIgEgDQgDgEgHAAIgFAAg");
	this.shape_1.setTransform(71.2,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAfA0IgKgYIgpAAIgLAYIgQAAIAwhnIAvBngAAPAPIgOghIgPAhIAdAAg");
	this.shape_2.setTransform(61.4,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVAxIAAguIgpAAIAAAuIgPAAIAAhhIAPAAIAAAmIApAAIAAgmIAPAAIAABhg");
	this.shape_3.setTransform(50.8,10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglAxIAAhhIAVAAQAOAAAIADQAJADAIAGQAPAOAAAWQAAAWgQAOQgHAIgKACQgGADgPAAgAgWAjIAHAAQAKAAAGgCQAGgCAFgFQALgKAAgQQAAgPgLgKQgKgJgRAAIgHAAg");
	this.shape_4.setTransform(40.6,10.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape_5.setTransform(33.3,12.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaAnQgKgLABgPIAAg+IAPAAIAAA6QAAANADAFQAHAJAKAAQALAAAHgJQADgFAAgNIAAg6IAPAAIAAA+QABAPgKALQgLALgQAAQgPAAgLgLg");
	this.shape_6.setTransform(26.1,10.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAxIAAhhIAPAAQAKAAAEABQAGACAEAEQAEAEADAFQACAGAAAGQAAAKgIAIQAIACAFAGQAEAGAAAJQAAALgIAJQgFAEgGACQgHACgJAAgAgNAjIAJAAQAJAAAFgEQAFgEAAgGQAAgHgFgFQgFgDgLAAIgHAAgAgNgGIAEAAQAJAAADgEQADgDAAgHQAAgIgEgDQgDgEgHAAIgFAAg");
	this.shape_7.setTransform(16.7,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAfA0IgKgYIgpAAIgLAYIgQAAIAwhnIAvBngAAPAPIgOghIgPAhIAdAAg");
	this.shape_8.setTransform(6.8,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82.8,20.9);


(lib.txtville5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfA0IgKgYIgpAAIgLAYIgQAAIAwhnIAvBngAAPAPIgOghIgPAhIAdAAg");
	this.shape.setTransform(59,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGAxIAAhTIgXAAIAAgOIA7AAIAAAOIgWAAIAABTg");
	this.shape_1.setTransform(50.6,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOAxIgbgoIgDAAIAAAoIgPAAIAAhhIASAAQASAAAJAIQAJAHAAAOQAAAKgGAHQgGAHgJACIAeAqgAgQgDIAEAAQAVAAgBgQQABgPgUAAIgFAAg");
	this.shape_2.setTransform(43.1,10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAfA0IgKgYIgpAAIgLAYIgQAAIAwhnIAvBngAAPAPIgOghIgPAhIAdAAg");
	this.shape_3.setTransform(33,10.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARAxIgigrIgDACIAAApIgPAAIAAhhIAPAAIAAAnIAlgnIATAAIgrAtIArA0g");
	this.shape_4.setTransform(23.4,10.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfA0IgKgYIgpAAIgLAYIgQAAIAwhnIAvBngAAPAPIgOghIgPAhIAdAAg");
	this.shape_5.setTransform(12.8,10.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVAtIAIgNQAFAEAFAAQAFAAADgFQACgFAAgMIAAg/IAPAAIAAA/QAAALgBAGQgCAFgEAFQgHAJgLAAQgKAAgIgFg");
	this.shape_6.setTransform(4,10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,20.9);


(lib.txtville4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfA0IgKgYIgpAAIgLAYIgQAAIAwhnIAvBngAAPAPIgOghIgPAhIAdAAg");
	this.shape.setTransform(54.9,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAxIAAhhIAPAAIAABTIAcAAIAAAOg");
	this.shape_1.setTransform(46.2,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAxIAAhhIAPAAIAABhg");
	this.shape_2.setTransform(39.9,10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbgSIAABDIgPAAIAAhnIBGBJIAAhDIAPAAIAABng");
	this.shape_3.setTransform(31.5,10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfA0IgKgYIgpAAIgLAYIgQAAIAwhnIAvBngAAPAPIgOghIgPAhIAdAAg");
	this.shape_4.setTransform(20.3,10.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbgHIgLA5IgPAAIAVhoIAgBLIAjhLIATBoIgPAAIgKg5IgdA+g");
	this.shape_5.setTransform(8.2,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.9,20.9);


(lib.txtville3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAxIAAhhIAPAAIAABhg");
	this.shape.setTransform(78.6,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfA0IgKgYIgpAAIgLAYIgQAAIAwhnIAvBngAAPAPIgOghIgPAhIAdAAg");
	this.shape_1.setTransform(70.9,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVAxIAAguIgpAAIAAAuIgPAAIAAhhIAPAAIAAAmIApAAIAAgmIAPAAIAABhg");
	this.shape_2.setTransform(60.4,10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggAkQgPgPAAgVQAAgUAPgPQAPgPAUAAQAMAAAKAFQAJAFAKAKIgLAKQgMgQgRAAQgPAAgLALQgKALAAAOQAAAQAMALQALAKAMAAQAKAAAJgHQAJgIABgKIgZAAIAAgNIApAAIAAACQAAALgDAJQgCAIgGAGQgOAQgVAAQgUAAgOgPg");
	this.shape_3.setTransform(49.2,10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbgSIAABDIgPAAIAAhnIBGBJIAAhDIAPAAIAABng");
	this.shape_4.setTransform(37.1,10.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfA0IgKgYIgpAAIgLAYIgQAAIAwhnIAvBngAAPAPIgOghIgPAhIAdAAg");
	this.shape_5.setTransform(25.9,10.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWAxIAAguIgqAAIAAAuIgPAAIAAhhIAPAAIAAAmIAqAAIAAgmIAOAAIAABhg");
	this.shape_6.setTransform(15.3,10.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUArQgIgIgCgNIAPgEQABAJACAEQAFAGAHAAQAHAAAFgEQAFgFAAgHIgBgGIgDgEIgEgEIgGgDIgJgEQgUgIAAgQQAAgLAIgIQAJgHALAAQARAAAKAQIgMAHQgDgFgDgCQgEgCgFAAQgFAAgEAEQgEADAAAFQAAAHALAFIAIADQAMAGAGAGQAFAHAAAJQAAAOgJAJQgJAJgNAAQgMAAgIgIg");
	this.shape_7.setTransform(5.8,10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83.7,20.9);


(lib.txtville2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiAlQgQgOAAgXQAAgUAPgPQAPgPAUAAQAVAAAPAPQAPAPAAAUQAAAVgPAPQgPAPgVAAQgTAAgPgOgAgZgaQgKALAAAPQAAAQAKAKQALALAOAAQAPAAALgLQAKgLAAgPQAAgOgKgMQgLgKgPAAQgOAAgLAKg");
	this.shape.setTransform(67.5,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAxIAAhTIgWAAIAAgOIA7AAIAAAOIgXAAIAABTg");
	this.shape_1.setTransform(57.9,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbgSIAABDIgPAAIAAhnIBGBJIAAhDIAPAAIAABng");
	this.shape_2.setTransform(48.2,10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiAlQgQgOAAgXQAAgUAPgPQAPgPAUAAQAVAAAPAPQAPAPAAAUQAAAVgPAPQgPAPgVAAQgTAAgPgOgAgZgaQgKALAAAPQAAAQAKAKQALALAOAAQAPAAALgLQAKgLAAgPQAAgOgKgMQgLgKgPAAQgOAAgLAKg");
	this.shape_3.setTransform(36,10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOAxIgbgoIgDAAIAAAoIgPAAIAAhhIASAAQASAAAJAIQAJAHAAAOQAAAKgGAHQgGAHgKACIAfAqgAgQgDIAFAAQATAAAAgQQAAgPgSAAIgGAAg");
	this.shape_4.setTransform(25.9,10.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAlQgQgOAAgXQAAgUAPgPQAPgPAUAAQAVAAAPAPQAPAPAAAUQAAAVgPAPQgPAPgVAAQgTAAgPgOgAgZgaQgKALAAAPQAAAQAKAKQALALAOAAQAPAAALgLQAKgLAAgPQAAgOgKgMQgLgKgPAAQgOAAgLAKg");
	this.shape_5.setTransform(14.8,10.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGAxIAAhTIgXAAIAAgOIA7AAIAAAOIgWAAIAABTg");
	this.shape_6.setTransform(5.2,10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76.5,20.9);


(lib.txtville1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAxIAAhhIAPAAIAABTIAcAAIAAAOg");
	this.shape.setTransform(78.4,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfA0IgKgYIgpAAIgLAYIgQAAIAwhnIAvBngAAPAPIgOghIgPAhIAdAAg");
	this.shape_1.setTransform(69.2,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAxIAAhhIA1AAIAAAOIgmAAIAAAXIAlAAIAAAOIglAAIAAAgIAmAAIAAAOg");
	this.shape_2.setTransform(59.9,10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANAxIgbgoIgCAAIAAAoIgPAAIAAhhIARAAQATAAAIAIQAKAHAAAOQAAAKgGAHQgGAHgJACIAeAqgAgQgDIAEAAQAVAAAAgQQgBgPgSAAIgGAAg");
	this.shape_3.setTransform(51.6,10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAxIAAhTIgWAAIAAgOIA7AAIAAAOIgWAAIAABTg");
	this.shape_4.setTransform(43.2,10.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbgSIAABDIgPAAIAAhnIBGBJIAAhDIAPAAIAABng");
	this.shape_5.setTransform(33.5,10.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiAlQgQgOAAgXQAAgUAPgPQAPgPAUAAQAVAAAPAPQAPAPAAAUQAAAVgPAPQgPAPgVAAQgTAAgPgOgAgZgaQgKALAAAPQAAAQAKAKQALALAOAAQAPAAALgLQAKgLAAgPQAAgOgKgMQgLgKgPAAQgOAAgLAKg");
	this.shape_6.setTransform(21.3,10.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbgHIgLA5IgPAAIAVhoIAgBLIAjhLIATBoIgPAAIgKg5IgdA+g");
	this.shape_7.setTransform(8.2,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,20.9);


(lib.Symbole35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwAETIAAolMAgBAAAIAAIlg");
	this.shape.setTransform(-285.5,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-388,0,205,55);


(lib.Symbole34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAnApIAAgtIgBgIIgBgHQgCgEgDgDQgDgCgFAAQgFABgEACQgEADgBAEIgDAIIAAAJIAAAqIgNAAIAAgsQAAgNgDgFQgEgHgHAAQgGABgDACQgEACgCAFIgCAJIgBAJIAAApIgNAAIAAhPIANAAIAAAJIABAAQADgFAFgDQAFgDAGAAQAHAAAGADQAFAEADAGQADgHAHgDQAGgDAIAAQAZAAAAAhIAAAwg");
	this.shape.setTransform(160.4,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAeQgMgMAAgSQAAgRAMgMQANgMAQAAQAJAAAHADQAIADAGAGQAMAMAAARQAAASgMAMQgGAGgIADQgHADgJAAQgQAAgNgMgAgKgbQgFADgEAEQgEAFgCAEQgCAGAAAFQAAAGACAGQACAFAEAEQAIAJALAAQAMAAAIgJQAIgJAAgMQAAgLgIgJQgEgEgFgDQgFgCgGAAQgFAAgFACg");
	this.shape_1.setTransform(149.1,15.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIAnQgHgDgGgGQgMgMAAgSQAAgRANgMQAFgGAIgDQAHgDAIAAQAHAAAHACQAFACAGAEIAAASQgGgHgFgDQgHgDgHgBQgLABgIAIQgIAJAAALQAAAMAIAJQAHAJALAAQAQAAALgOIAAAAIAAASQgHAEgFACQgHACgHAAQgIAAgIgDg");
	this.shape_2.setTransform(140.2,15.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAHQgCgDAAgEQAAgDACgCQADgEADAAQAEAAADAEQADACgBADQABAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_3.setTransform(133.7,18.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQBGIgfgkIgEADIAAAhIgOAAIAAiLIAOAAIAABZIAcgdIASAAIghAhIAoAug");
	this.shape_4.setTransform(127.7,12.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVApIAAhPIAOAAIAAAJQAFgGACgCQAEgDAGAAQAFAAAHADIgGANQgGgDgCgBQgIABgEAHQgDAIAAANIAAAog");
	this.shape_5.setTransform(120.9,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAeQgMgMAAgSQAAgRAMgMQANgMAQAAQAJAAAHADQAIADAGAGQAMAMAAARQAAASgMAMQgGAGgIADQgHADgJAAQgQAAgNgMgAgKgbQgFADgEAEQgEAFgCAEQgCAGAAAFQAAAGACAGQACAFAEAEQAIAJALAAQAMAAAIgJQAIgJAAgMQAAgLgIgJQgEgEgFgDQgFgCgGAAQgFAAgFACg");
	this.shape_6.setTransform(112.7,15.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAgNIgXA7IgohVIAQAAIAXA1IAYg7IAZA7IAYg1IAPAAIgoBVg");
	this.shape_7.setTransform(101.5,15.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJA2IAAhCIgIAAIAAgNIAIAAIAAgcIANAAIAAAcIAOAAIAAANIgOAAIAABCg");
	this.shape_8.setTransform(93.3,13.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAoQgHgEgGgFQgFgHgDgHQgCgHAAgJQAAgRAKgNQAKgMARAAQAKAAAHADQAHAEAFAGQAKANgBASIg9AAQAAALAHAIQAEADAEACQAFACAFABQAPgBAJgQIAMAGQgNAXgYAAQgIAAgHgCgAAYgIQgBgEgCgEIgFgGQgDgEgEgBQgEgBgFgBQgHAAgIAHQgDACgCAEQgCAEgBAEIAvAAIAAAAg");
	this.shape_9.setTransform(86.6,15.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AASApIAAgsIAAgJIgCgIQgBgEgEgCQgEgCgFAAQgFAAgEACQgDADgCADQgDADgBAEIgBAIIgBAIIAAAmIgNAAIAAhPIANAAIAAAKIABAAQAEgGAGgDQAFgDAHAAQAHAAAFACQAGADADAEQAGAKAAAPIAAAvg");
	this.shape_10.setTransform(77.8,15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQAGIAAgLIAhAAIAAALg");
	this.shape_11.setTransform(71.5,15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGBGIAAiLIANAAIAACLg");
	this.shape_12.setTransform(67.8,12.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgcAeQgLgNAAgRQAAgHADgIQACgIAGgGQAKgMASAAQAHAAAHADQAGAEAGAGIAAgLIAOAAIAABPIgOAAIAAgLQgKANgQAAQgRAAgLgMgAgRgUQgEAEgCAFQgCAFAAAGQAAAMAHAJQAEAEAFACQAEACAFABQAHgBAEgCQAFgCAEgEQADgFACgFQACgFAAgGQAAgGgCgFQgCgFgEgEQgGgJgNAAQgKABgHAIg");
	this.shape_13.setTransform(60.7,15.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGA8IAAhPIANAAIAABPgAgGgqQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_14.setTransform(53.9,13.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQAlIgGgGIgFgJIAMgFQADAGAEADQAEADAEABQAHAAADgEQAEgDAAgGQAAgEgEgEIgJgFIgKgEQgFgCgEgFQgDgEAAgIQAAgFACgEQABgDADgEQAIgGAIAAQAHAAAGAEQAGAEADAGIgMAHIgEgGQgDgCgEgBQgCABgEACQgDADAAAEIABACIABADIADACIADABIACACIAEABIAEADQAIADAGAEIADAGIABAIQABALgJAIQgHAHgMAAQgJAAgHgFg");
	this.shape_15.setTransform(48.3,15.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFAHQgDgDgBgEQABgDADgCQACgEADAAQAEAAADAEQADACAAADQAAAEgDADQgDACgEAAQgDAAgCgCg");
	this.shape_16.setTransform(42.3,18.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAAgNIgYA7IgnhVIAQAAIAXA1IAYg7IAZA7IAXg1IAQAAIgnBVg");
	this.shape_17.setTransform(34.3,15.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAgNIgYA7IgnhVIAPAAIAYA1IAYg7IAZA7IAXg1IAQAAIgoBVg");
	this.shape_18.setTransform(21.4,15.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAgNIgXA7IgohVIAPAAIAYA1IAYg7IAZA7IAYg1IAPAAIgoBVg");
	this.shape_19.setTransform(8.5,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169.2,26.1);


(lib.Symbole33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAgQgQAAgHgKQgHgLACgLQABgNAKgKQAJgKAQABQAOABAFALQAEAMgCALQgCANgIAKQgGAHgIAAIgFgBg");
	this.shape.setTransform(611,82.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAgQgQAAgHgKQgHgLACgLQABgNAKgKQAJgKAQABQAOABAFALQAEAMgCALQgCANgIAKQgGAHgIAAIgFgBg");
	this.shape_1.setTransform(600.3,82.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAgQgQAAgHgKQgHgLACgLQABgNAKgKQAJgKAQABQAOABAFALQAEAMgCALQgCANgIAKQgGAHgIAAIgFgBg");
	this.shape_2.setTransform(589.5,82.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah5DcQgRgOAAgPQgBgOAUgIQAOALAUABQAVAAAWgGQAWgGAWgMIArgbQATgOAPgRQAOgQAFgPQAFgPgGgNQgGgMgUgIIhKAOQglAFgegFQgegFgSgTQgSgSABgoQADgmASghQATghAdgYQAdgXAjgNQAjgMAkACIAOABIALADIAIAGIACAOQgBALgHAGQgIAHgMgCQgrgIgiAMQgiAMgXAXQgWAWgKAcQgKAcAHAWQAOAbAWAHQAXAGAZgCIAzgHQAagGAVACQAVACAOANQAOAPACAmQgBAYgPAWQgQAXgYATQgXATgeAQQgdAQgcAKQgdAKgZAEIgVACQgLAAgJgDg");
	this.shape_3.setTransform(569.3,63.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABgFIQgIgFgCgMIAEigIgYArQgQAYgWAVQgVAVgYAPQgZAPgbAAIgTgDIgNgIIgJgOIgLgSQgHglAAgsQgBgtAIgtQAIguAPgoQAQgpAZgeQANgOAPgLQAPgKARgHQASgGAVgBQAUAAAYAFQAEgugEguIgGhhQAAgIAHgDIAPgEIAQgBQAFABAFACIgBB5IAABoIAABeIAABcIABBkIAAB0QAEAMgGAIQgFAIgIACIgGABQgFAAgGgDgAAChFQgXATgTAhQgTAhgNApQgMApgDAnQgEAmAHAfQAHAfATAMQASAAARgNQASgNAPgUQAQgUANgYIAYgwIAQgrIAFgeIAAgcIgCgpQgDgVgGgQQgGgQgMAAIgLgBQgWAAgUAQg");
	this.shape_4.setTransform(539,56.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah5DdQgIgFgDgIIgDirIgCh0IgChIIAAgmIgBgPIAAgDQABgHAGgEIANgGIANACQAHADADAGIACCpQAGgZAIgVQAJgVANgRQAYgiAfgTQAegTAhgHQAhgFAdAFQAJACAFAGQAFAGAAAGQABAIgEAGIgLAJQghgCgdAHQgdAIgYAPQgWAQgSAUQgSAVgLAWQgPAhgFAjIgHBIIAABFIAAA4QAAAIgHAEIgOAEg");
	this.shape_5.setTransform(517.2,63.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABzDbQgGgDgBgGQgKgPgDgZIgDg0IAAg2QAAgbgEgTQgiBLgfAqQgdAqgZASQgaASgUgBQgVgCgOgNQgOgNgIgTQgIgSgBgRQgFgcAEgnQAFgnAMgpQAMgqATgoQATgoAYgdQAXgdAbgPQANgHAOgBQAOgBAPAFIAYABQAKACAHAIQAGAIADAPIAFAkQgCBHAGAyIANBXIAOBFQAHAeABAhQAAAMgFAGQgGAGgIACIgFABQgFAAgDgCgAAbiyQgUADgTAWQgVAWgSAiQgSAjgNAoQgOAmgGAoQgGAnAEAeQAKAhAPAGQAOAHARgLQARgMASgZIAgg2IAdg5IAVgwIgEh6QgPgVgSAAIgFABg");
	this.shape_6.setTransform(485.5,64.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiIDhIgJgHIgHgtIgLhLIgNhaIgNhZIgNhLIgHguQADgNAFgGQAHgGAGAAIANAEIAKAMIAtFLIAJgfIAPg3IAShBIAThCIAPg3IAJgfIAMgMIAQgFQAHgCAGAFQAIAEAFAKIBoFRIAqlrIAJgMQAGgFAFAAQAHAAAGAIQAGAIAFASIgDAXIgGAuIgIA9IgJBDIgJBFIgIA9IgFAuIgDAXQgFAMgKAFQgKAFgKAAQgJgBgJgFQgHgFgCgJIhmlRIgbBwIgaBdIgWBNIgSA+QgFAJgHADIgMADg");
	this.shape_7.setTransform(447.5,63.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AB0DdIgBgwIgBhOIgFhcQgDgvgIgpQgHgpgOgbQgNgcgWgDQgSgDgRAXQgQAWgQAmQgQAlgNAvIgZBbIgSBUIgJA6QgCAGgHAEIgOAEIgQgDQgHgDgEgIIgBmrQABgIAFgEIAMgFIANABIALAIIgCEkIAZhoQAMgzAQgqQARgrAagbQANgOAQgIQARgHAVgCQAXgCARAPQAQAQAMAbQANAbAIAlIAMBLIAHBOIADBJIABA7IgBAmQgGAMgMAEIgGABQgJAAgIgLg");
	this.shape_8.setTransform(409.2,63.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AglDfQgdgEgTgUQgSgTgLgdQgLgdgDgiQgEgiACghQACgxAQguQARguAYgiQAZgjAegSQAcgTAdAFQAeAEATAYQASAYAKAjQALAkACApQACApgDAlQgDAsgQAlQgPAlgXAbQgXAcgdAPQgbAOgbAAIgEAAgAgLilQgUASgRAeQgQAegLAlQgLAmgEAkIgCA2QABAcAGAWQAGAXAOAOQANAPAXAAQASAAATgNQAUgNASgWQASgXANgcQAOgdAEgeQAFgegCgiQgDghgIgdQgJgcgNgVQgOgVgSgGIgHAAQgUAAgRAPg");
	this.shape_9.setTransform(377.8,63.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABgFIQgIgFgCgMIAEigIgYArQgQAYgWAVQgVAVgYAPQgZAPgbAAIgTgDIgNgIIgJgOIgLgSQgHglAAgsQgBgtAIgtQAIguAPgoQAQgpAZgeQANgOAPgLQAPgKARgHQASgGAVgBQAUAAAYAFQAEgugEguIgGhhQAAgIAHgDIAPgEIAQgBQAFABAFACIgBB5IAABoIAABeIAABcIABBkIAAB0QAEAMgGAIQgFAIgIACIgGABQgFAAgGgDgAAChFQgXATgTAhQgTAhgNApQgMApgDAnQgEAmAHAfQAHAfATAMQASAAARgNQASgNAPgUQAQgUANgYIAYgwIAQgrIAFgeIAAgcIgCgpQgDgVgGgQQgGgQgMAAIgLgBQgWAAgUAQg");
	this.shape_10.setTransform(310.9,56.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AB0DdIgBgwIgBhOIgFhcQgDgvgIgpQgHgpgOgbQgNgcgWgDQgSgDgRAXQgQAWgQAmQgQAlgNAvIgZBbIgSBUIgJA6QgCAGgHAEIgOAEIgQgDQgHgDgEgIIgBmrQABgIAFgEIAMgFIANABIALAIIgCEkIAZhoQAMgzAQgqQARgrAagbQANgOAQgIQARgHAVgCQAXgCARAPQAQAQAMAbQANAbAIAlIAMBLIAHBOIADBJIABA7IgBAmQgGAMgMAEIgGABQgJAAgIgLg");
	this.shape_11.setTransform(280,63.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABzDbQgGgDgBgGQgKgPgDgZIgDg0IAAg2QAAgbgEgTQgiBLgfAqQgdAqgZASQgaASgUgBQgVgCgOgNQgOgNgIgTQgIgSgBgRQgFgcAEgnQAFgnAMgpQAMgqATgoQATgoAYgdQAXgdAbgPQANgHAOgBQAOgBAPAFIAYABQAKACAHAIQAGAIADAPIAFAkQgCBHAGAyIANBXIAOBFQAHAeABAhQAAAMgFAGQgGAGgIACIgFABQgFAAgDgCgAAbiyQgUADgTAWQgVAWgSAiQgSAjgNAoQgOAmgGAoQgGAnAEAeQAKAhAPAGQAOAHARgLQARgMASgZIAgg2IAdg5IAVgwIgEh6QgPgVgSAAIgFABg");
	this.shape_12.setTransform(246.6,64.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABvE3QgLgCgDgKQgGgQgBgqIABhiIAFh2IAIh4IAJhnIAHhEQghgDgjAGIhFAOIhDAVIg9AUQgQgDgHgKQgIgJAFgMQAAgFAVgIIA1gPIBIgPIBKgNIBAgJIAngEQANAAAFAKQAGAKgEAMQgGAIgFAcIgJBFIgHBZIgGBhIgDBhIAABUIACA+QACAXADAEQAHAIgFAHQgFAIgJAEQgGADgHAAIgHgBg");
	this.shape_13.setTransform(173.1,55.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDEyQgIgBgFgJIgHpPQAAgHAFgBIAMgCIAMAEIAIAEIAEEfIADEfQAEAIgDAHQgEAHgHAEQgFADgGAAIgDAAg");
	this.shape_14.setTransform(150.3,55.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgrEoQgXgWgSgqQgSgpgMg5QgNg4gFg8QgEg7AFg7QADgnAUhCQARguAggdQAfgdAvAAQAPgCAMAFQANAFALAMQAWAYAPAqQAOArAHA3QAHA3gBA7QgBA6gIA5QgJA5gQAtQgRAtgYAcQgZAcggACQgFACgHAAQgRAAgQgPgAATkOQgiABgYAYQgXAYgOAmQgNAmgFAxQgFAxADAxQACAzAKAwQAJAwAOAmQAOAlASAXQASAWATgBQAVgJARgcQARgcAMgnQALgoAHgwQAHgwACgvQABgxgEgtQgEgtgKgkQgKgjgRgVQgPgUgWAAIgCAAg");
	this.shape_15.setTransform(130.5,54.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiQEuQgHgCAAgRIAlhBIAshTIAshcIAnhcQARgtALgpQALgpABgfQgFgdgIgOQgIgOgRAFQgQAEgeAbQgeAbgwA1IgPgLQgHgGAAgIIABgDIAAgCIAkgoIArgpQAYgUAagNQAZgMAcAAQAVAKAJAZQAIAZgCAiQgBAjgLArIgZBXIgjBZIglBVIgkBIIgfA2IDYgpQAIAAAIAKQAHAKABAOIkWA5g");
	this.shape_16.setTransform(99.1,54.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AB0DdIgBgwIgBhOIgFhcQgDgvgIgpQgHgpgOgbQgNgcgWgDQgSgDgRAXQgQAWgQAmQgQAlgNAvIgZBbIgSBUIgJA6QgCAGgHAEIgOAEIgQgDQgHgDgEgIIgBmrQABgIAFgEIAMgFIANABIALAIIgCEkIAZhoQAMgzAQgqQARgrAagbQANgOAQgIQARgHAVgCQAXgCARAPQAQAQAMAbQANAbAIAlIAMBLIAHBOIADBJIABA7IgBAmQgGAMgMAEIgGABQgJAAgIgLg");
	this.shape_17.setTransform(28.5,63.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEExQgGgFAAgMIgKmwIAKgEIALgCIAKADIAIAIIACBnIACBvIAEBvIADBmQAAALgGAGQgHAGgHAAQgIAAgGgGgAgKkFQgIgCgFgIQgGgIAAgPQAAgJAHgEIAPgDQAPAAAEALQAEAKAAAOQgFAJgHAEQgEACgEAAIgGgBg");
	this.shape_18.setTransform(6.6,55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,718,112.9);


(lib.Symbole32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.citron();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1400,750);


(lib.Symbole31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.me();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1400,750);


(lib.Symbole30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.manille();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbole30, new cjs.Rectangle(0,0,1400,750), null);


(lib.Symbole29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("AAuCXIhaiFIgJAAIAACFIghAAIAAktIArAAQAYAAASAEQARADARAJQAQAJAJARQAEAIACALQADAKAAAMQAAAjgVAXQgKAKgOAHQgOAGgQACIBfCHgAg1gKIALAAIAcgCQAMgCALgGQAMgFAGgLQAGgLAAgRQAAgPgEgKQgFgKgGgGQgGgGgLgDIgUgEIgYgBIgKAAg");
	this.shape.setTransform(245.6,27.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1C").s().p("AhNCXIAAktICbAAIAAAfIh6AAIAABaIB2AAIAAAeIh2AAIAAB3IB6AAIAAAfg");
	this.shape_1.setTransform(223.4,27.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1C").s().p("AhOCXIAAktIAxAAQAZAAARADQARADAPAKQARAMAIASQAJASAAAVQAAApgdAYQgMAJgSAFQgSAFgWAAIgZAAIAACEgAgtgMIAXAAQAhAAARgNQASgOAAgbQAAgOgFgKQgFgKgHgGQgHgFgLgDIgUgEIgXgBIgNAAg");
	this.shape_2.setTransform(203.4,27.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1C").s().p("AhNCXIAAktICbAAIAAAfIh5AAIAABaIB2AAIAAAeIh2AAIAAB3IB5AAIAAAfg");
	this.shape_3.setTransform(181.9,27.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1C").s().p("AhNCXIAAktICbAAIAAAfIh6AAIAABaIB3AAIAAAeIh3AAIAAB3IB6AAIAAAfg");
	this.shape_4.setTransform(160.6,27.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1C").s().p("AhvCXIAAktIA4AAQAaAAAnAIQANAEAOAHQANAHAMALQAyArAABGQAABFgxAsQgNALgNAHQgNAIgOAEQgaAIgnAAgAhOB4IAZAAQAeAAAXgHQAKgDALgHQAKgGAKgJQATgRAJgWQAKgWAAgbQAAg3gogiQgJgJgLgGQgKgGgKgDQgWgGgeAAIgZAAg");
	this.shape_5.setTransform(136.9,27.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1C").s().p("AA7CXIh6iLIgIAJIAACCIgiAAIAAktIAiAAIAACBIB/iBIAtAAIiNCNICSCgg");
	this.shape_6.setTransform(99.6,27.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1C").s().p("AhuBvQgXgXgLgcQgMgbAAghQAAgfAMgcQALgbAXgXQAuguBAAAQBBAAAuAuQAXAXAMAbQALAcAAAfQAAAhgLAbQgMAcgXAXQguAthBAAQhAAAgugtgAhWhXQgkAkAAAzQAAAaAJAWQAJAWASASQASASAWAKQAWAJAYAAQAaAAAWgJQAVgKATgSQAkglAAgzQAAgzgkgkQgkglg0AAQgzAAgjAlg");
	this.shape_7.setTransform(68.7,27.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1C").s().p("AhuBvQgXgXgLgcQgMgbAAghQAAgfAMgcQALgbAXgXQAuguBAAAQBBAAAuAuQAXAXAMAbQALAcAAAfQAAAhgLAbQgMAcgXAXQguAthBAAQhAAAgugtgAhWhXQgkAkAAAzQAAAaAJAWQAJAWASASQASASAWAKQAWAJAYAAQAaAAAWgJQAVgKATgSQAkglAAgzQAAgzgkgkQgkglg0AAQgzAAgjAlg");
	this.shape_8.setTransform(34.2,27.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1C").s().p("Ag6CXIAAktIAiAAIAAEOIBSAAIAAAfg");
	this.shape_9.setTransform(10.9,27.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,257.7,56);


(lib.Symbole27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAgqIBVBUIipAAg");
	this.shape.setTransform(8.5,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17,8.5);


(lib.Symbole26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Imagebitmap1611();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,595,395);


(lib.Symbole25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.peche();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1400,750);


(lib.Symbole24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiTCpQgHgJgHgHQAagEAWgFQAWgGAPgIQARgKAKgLQALgNAFgRIg1ABIgUABIgSACIAAgkIARABIAUABIA8ABQACgKAAgOQABgMgBgNIAXAEIAUABQABAAABABQABAAAAAAQABAAAAAAQAAABAAAAIgEAFQgCABgEAKQgFANgCANIB6gDIgEBFQgBATgFANQgFAMgJAHQgKAJgOACQgQAFgVABQgEgNgEgIQgGgMgJgJQAPADAQAAQAMAAAJgDQAIgDADgGQAEgGACgLIACglIhaAAQgGAWgJAOQgIAPgRANQgRANgWALQgbAMgeAJQgFgKgGgJgAi1AFQAzgFApgMQApgNAggRQgRgOgMgOQgMgQgMgSIgwA/QgFgIgKgEQgIgFgLgBQAPgJALgOQAJgLAPgTQALgTAIgRQAIgUAFgTIAXAKQANAEAJABQAFACABADQAAADgGAAQgEABgFAFQgFAEgJAOICtgFQgEAKgMAUQgKAPgLAMQgLAMgOAMQgLAKgQAMQAdAOAiAGQAgAIAyADQgHAKgDAJQgFANgBAHQgwgIgpgOQgmgLgegTIgsAXQgSAIgZAIQgYAIgTAGIgtAJQgCgPgNgSgAgRhTQAMANAOAMIAegaQARgPAOgPIhyAAQAPATAMAMg");
	this.shape.setTransform(403.6,163.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABJCnQgDgMgHgLIAXACQAJAAADgBQAEAAACgEQACgDAAgGIAAikIhBAAIAAAaQAAAFADABQADACAJAAIApgDQgEAIAAAGQgBAGABAIIgkACQgRAAgGgBQgJgBgEgDQgFgDgBgFIgBgwIgjAAQgBANgEAKQgDAJgHAJQgHAHgLAJQgMAIgPAIQgDgHgGgGQgHgGgHgDQAbgKAMgLQANgNADgRIg3AAIAADYIgoAAIAEgrIAAjMIBNADIgXgrIAagMIg6ABIgvADIAAgjICTADIgFgRIgHgQIAkgIIAMApICUgDIAAAjIh4gFIAgAKQAFABgEADQgEADgKALIgUAcIBhgDIgCDOQAAANgCAHQgCAHgHAFQgGAEgNACQgKACgYACgAg1hzIAFAKIAUAiIgXALIBEAAIAUgtIAEgLgAhHCEIAAhfICJAAIAABggAgqBqIBOAAIAAgrIhOAAg");
	this.shape_1.setTransform(348.8,163.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AifCoIADgVIAAiGQgBgKgCgHQANACASABIApABIArgBIAcgDQgCAKAAAJIAACDQAAAIACAMIgjAAIAAgdIhKAAIAAAfgAh9BuIBKAAIAAhUIhKAAgAANCnIACiaIgCgTIAfADIAsABIBIgEIgCARIACCYIgjAAIAAgcIhOAAIAAAggAAvBsIBOAAIAAhUIhOAAgAhpiaIgCgNIAlAEICugEQgCAHAAAIIgBBXQAAARADANIhpgEQgmAAgaABIgqAEgAhGhEICHAAIAAhCIiHAAg");
	this.shape_2.setTransform(294,163.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiNCnQgEgKgCgEIAhgFIAAjCIgtAaQgGgIgHgGIgNgKQAbgMAYgPQAZgQAXgUQATgQAUgXQARgUAIgRIAmAAQAJAUAUAVQARATAYAQQAYAPAaAKQAbAKAXACQgJAIgFAJQgEAJgDANIg3gZIACCAIhugBQALANAPAMQAPAMAPAIIAkgZQAQgMAMgLQAJAMANAIQADACgBADQgCADgFAAIgFABIgwAgQASAHAQADQAQAEAWADQgIAHgFAJQgGAJgDAJQghgKgVgJQgbgLgRgMQgXgQgNgNQgSgTgNgTIg3AAIAABHIAggIIAkgLQgHASAEALIhCAOQgUAFgMAEQgNAFgFAEIgGgRgAhUAuICgAAIAAghIigAAgAhUgKICgAAIAAgeIigAAgAhXhDICwgBQgdgSgZgWQgVgUgPgZQgkAugyAogAgahZIgGgPIAqgJIAJAfIgqAJQgBgJgCgHg");
	this.shape_3.setTransform(239.2,163.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhKCpQgIgEgMgCQAbgWANgnQANglACg4IgHi0IAUADIAPgBQAGAAACACQABACgFAFQgCADgDALQgCALABARIACB9QAAARgCAcQgBAVgGAWQgGAVgJAVQgJAUgQAXQgFgGgJgFgAB8CqIAClFQgCgSgCgGIATADIATABQAHgBABADQABADgGADQgDACgCAHIACFIgAiQCcIgTgJIAXg5IAJggIAHgiQAEAIAIAIQAHAGAKAEIgJAZQgEAPgDAOIgOBAIgTgMgAAjCWIACgoIABjQQAAgVgBgSQgBgMgCgLIASADIAJAAIAKABQAIAAABABQAAACgGAFQgDABgCAIQgBAEAAARIADEMgABTgWQgFgggGgWIAYgGIAVBwIgdAEQAAgXgFghgAAAgYQgCgbgFgYIAVgFQAFATAFAiQAFAbADAfIgbADQgBgigEgYgAhhAdQAJgcAEgWQAEgZAAgYIAZACIgLBjgAiOglQgLgIgOgIIARgZIAbAQIAZARIgVAdQgKgLgNgKgAh2iAQgTgNgLgGIAVgYQAfASAYAUIgVAZQgIgHgRgNg");
	this.shape_4.setTransform(184.4,163.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABxCcQgcgBhVAAIitADIAAgnIAVACIBfACIAAj2IhRACIgRABIAAglQAQADAlAAIBlAAQBMAAAZgBQAhAAAVgCIAAAlIhmgDIAAD2IB6gEIAAAnQgXgCgmAAgAgYB7IArAAIAAj2IgrAAgAh7AgIgcheIAegLQAOAlAIAaQAKAgAIAeIglAMgABAAyQAPgdANghQANgkAJgiIAmAMQAFABABACQABABgFAEIgGAIIgyB0QgQgIgSgEg");
	this.shape_5.setTransform(129.6,163.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AigCrQgFgJgIgGQAdgDAZgIQAWgJAQgMQgJgJgNgJIgYgRIgOAOQgJgNgQgHQAMgLAIgIQAIgIAIgLIAOgVQAIgNAEgLIAeAKQAGABAAADQAAADgDABQgEACgDADIgJAMIBSAAQgDAQgIAWQgIAUgIAOQgIAPgLAMQgJALgLAIQgSALgWAKQgSAIgXAGQgCgHgGgKgAhwBHIAnAbIAKAIIALgTQAFgLAGgTIg9AAgABLC0IADgzIhRADIAHglQACgPAAgKIAPABIANgBQAGAAAAACQABADgDACQgBAAAAABQgBAAAAAAQgBABAAAAQAAABgBABQgBACgBAFIgCARIAwAAIAAgtIgoAAIgeADIAAgfIBGADIgDgdQAVACALAAQAGAAAAACQACACgFACQgDABgBAEIgBAQIAxgDIAAAfIgYgCIgZgBIAAAtQAvAAAXgDIAAAcIgagBIgsAAIADAzgACOAAIgPAAIj1AAIgVACIAAgdIASACIARABIAAgmIgrADIAAgbIgFADIgWgQQAQgLAMgLQANgKALgNIASgXQAIgMACgIIAlANQAGABgBAEQgBAEgEAAQgFAAgGAEIgQAPIDvgEIAAAdIgsgCIAAAmIAhAAIAYgDIAAAdIg5gEIAAAnIAxgDIAAAdgAAwgYIAmAAIAAgnIgmAAgAgPgYIAmAAIAAgnIgmAAgAhPgYIAoAAIAAgnIgoAAgAAwhVIAmAAIAAgmIgmAAgAgPhVIAmAAIAAgmIgmAAgAhPhVIAoAAIAAgmIgoAAgAh8hoIgVAQIApADIAAgoQgIAMgMAJg");
	this.shape_6.setTransform(74.8,163.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag3C5IAEgaQACgLAAgOIgBhhIgBgOIAPABIATABICTAAIAUgBIAPgBIgCAMIAABzQABAOAEALIgoAAIAAgYIiPAAIAAAigAgPB8ICPAAIAAhHIiPAAgAiWClQgJgIgIgFQAXgVAOgfQAOgeADgoQACgdgBgqQAAgxgDgtIAsACIBVABQgHgVgMgUIAjgLIAMAZQAFAMAEAPIBpgDIAAB2IgZgCIjRAAQAAA+gNAzQgMAwgiAmQgEgGgJgJgAhOgwIDHAAIAAg3IjHAAg");
	this.shape_7.setTransform(20,163.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EgggAJZIgOgFIAGgOQAXg/AYgfQAhgrApAAQAPAAAKAEQB/ArCJAAQC+AABRhQQA0g0AAhLQAAhZhJgrQgvgaiNggIgTgEQiGgeg8gRQhfgdg7glQiOhcAAiyQAAi0CJhgQCIhhD/AAQCeAACrAsIARAEIgGAQQgcBLgbAfQgoAug9gOQhigVhtAAQhtAAhBAWQh4AoAABuQAABiBhAvQA/AeDMApIAGABQC/AmBcA8QBdA/AYBrIDlAAIAAsZIAHgEQA9gsBMAAQAoAAApAMIAKAEIAEM5IGaAAIFRqjQAphUA3grQA4grBDAAQApAAAnAPIAFADIGmM7IFyAAIAAsXIAGgFQA8gsBNAAQAnAAAqANIAKADIAFOoQgBBlBOA1QBOA0CVAAQCOAAB4gqQANgEAOAAQApAAAiAsQAXAfAYA9IAFAOIgOAGQi2BHjwAAQi9AAh8g5QihhLglilIkWAAICBD/IkKAAIh8j+Ip2ABIBkjMIGvAAIknpXIoDQgIjgAAIB/j/Ik1AAIABEEIjxAAIAAkEIjnAAQgmCmigBKQh8A6i+AAQjxAAi1hIg");
	this.shape_8.setTransform(212.6,67.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AE/OJQhaAAg5gOQg9gPg4gmQhBgthJg/IAABlIBRgJIAIAAQAWAFAHAvIACAFIgGABIg+AGQg+AGhvAHIgJAAIgFAAIAAgFQABgsAVgHIAJgDIAngDIAAhyIgkAAQgaCFhYArIgJAEIgEACIgCgFQgRgpAPgOIAIgHQAtgfAPhNIAGhHIAAj3QAAgMAJgIQAIgIAMAAIGqAAQALAAAJAIQAJAIgBAMIAABgQABAMgJAIQgJAJgLAAIg3AAIAAAmIBHAAIgBAGIgZAwIgtAAIAAAnIBzAAIgCAHIgYAwIj4AAQAyApAfAVQACgRANgEQAYgHBIgZIAKgCQAXgDAUArIADAEQhGAZg1AOQAoAVAvAHIBSAGIAKADQAMAEAFAQQADALgBATIAAAFgAgYKcIB4AAIAAgnIh4AAgAiwKcIBYAAIAAgnIhJAAIACgGIAYgwIAvAAIAAgmIhXAAgAgYI/IB4AAIAAgmIh4AAgAivHiIFgAAIAAgqIlgAAgAEVELQhdAAg0gNQg1gNhCgpQgjgWgwgjQgvgigWgSIAABlIBTgJIAJAAQAVAFAJAtIABAFIgFABIgtAEQg2AGhPAFIhdAGIAAgFQABgtATgGIAJgCIA6gEIAAk7QAAgMAJgIQAHgIANAAICQAAIAAgyIABgCQASgMAUAAQALgBANAEIACABIABAHIAAA1ICQAAQALAAAJAIQAJAIgBAMIAACuQABALgJAJQgJAIgLAAIjmAAQAxAkAkAXQADgHAGgGQAGgFAFgBQA+gLBkgiIAAAAIAJgDQAXgDAXArIACAEIgEADQhgAjhZAPQAkAUAqAIQAoAIA9AAIAAAAIAJABQATAFADAtIAAAFIgEABgAiLAcIEZAAIAAgeIkZAAgAiLg4IEZAAIAAghIkZAAgAEchrIgJgDQhCgkhQgiQhigqgfgBQgeABhiAqQhQAihCAkIgBABIgIACQgVADgWgpIgCgFQBdgxBWgkQBsguApAAQAqAABsAuQBWAkBdAxIgCAFQgVAmgTAAIgDAAgAgolkIAAiBIjVAAQgMABgIgJQgJgIAAgMIAAjvQAAgKAJgJQAIgIAMAAIDXAAIAAhtIACgCQAVgOAZAAQAOAAANAEIADABIABAHIAABxIDVAAQAMAAAIAIQAJAIAAALIAADvQAAAMgJAIQgIAJgMgBIjVAAIAACBgAApodICsAAIAAi1IisAAgAjUodICtAAIAAi1IitAAg");
	this.shape_9.setTransform(467.1,90.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1C").s().p("AhoAVQgJgJAAgMQAAgLAJgIQAIgJAMAAQAMAAAIAJQAJAIAAALQAAAMgJAJQgIAHgMAAQgMAAgIgHgAgdAZIAAgyICPAAIAAAyg");
	this.shape_10.setTransform(531.6,21.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1C").s().p("Ag1BAQgXgVAAgfQAAgcATgQIgOAAIAAgzICPAAIAAAzIgQAAIAAABQAVANAAAdQAAAggXAUQgWAVggAAQgfAAgWgUgAgWgZQgJAJAAAPQAAAOAJAJQAKAJAMAAQAOAAAJgJQAJgJAAgOQAAgPgJgJQgJgJgOAAQgMAAgKAJg");
	this.shape_11.setTransform(535.8,37.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1C").s().p("AhzBMIAAgzIBrAAIAAgBQgXgRAAgcQAAgaARgOQAOgOAcAAIBYAAIAAAzIhJAAQgQAAgIAEQgKAFAAAOQAAAaAiAAIBJAAIAAAzg");
	this.shape_12.setTransform(531.3,57.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1C").s().p("AhWBAQgXgVAAghQAAgbAUgOIAAgBIgPAAIAAgzICAAAQBWAAAABTQAAAcgNAXQgQAbgaADIAAg5QAHgCAEgHQADgHAAgIQAAgSgLgIQgKgGgUAAIgGAAQATAUAAAZQAAAfgVAUQgUAUgfAAQghAAgWgUgAg4gZQgKAJAAAPQAAAPAKAJQAJAIAOAAQAOAAAJgIQAJgJAAgPQAAgPgJgJQgJgIgOAAQgOAAgJAIg");
	this.shape_13.setTransform(539.1,77.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1C").s().p("AhEBLIAAgyIASAAIAAgBQgXgPAAgeQAAg2A8AAIBXAAIAAAzIhGAAQgQAAgHACQgNAFAAAQQAAAaAgAAIBKAAIAAAyg");
	this.shape_14.setTransform(535.5,97.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1C").s().p("Ag1BAQgXgVAAgfQAAgcATgQIgOAAIAAgzICPAAIAAAzIgQAAIAAABQAVANAAAdQAAAggXAUQgWAVggAAQgfAAgWgUgAgWgZQgJAJAAAPQAAAOAJAKQAKAIAMAAQAOAAAJgIQAJgJAAgPQAAgPgJgJQgJgIgOAAQgMAAgKAIg");
	this.shape_15.setTransform(535.8,118.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1D1C").s().p("AhzBMIAAgzIBrAAIAAgBQgXgSAAgbQAAgaARgOQAOgOAcAAIBYAAIAAAzIhJAAQgQAAgIAEQgKAFAAAOQAAAaAiAAIBJAAIAAAzg");
	this.shape_16.setTransform(531.3,137.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1D1C").s().p("AArA3QAVgYAAgZQAAgKgEgHQgGgJgKAAQgQABgJAfQgJAfgJALQgMAQgcAAQggAAgTgVQgUgUAAgfQAAgkARgeIArAVQgOASAAATQAAAJAEAFQAFAJAJgBQAHAAAGgIQADgEADgLIAFgNQAHgZAMgNQAOgPAYAAQAmAAASAWQAUAXAAAkQAAAngYAjg");
	this.shape_17.setTransform(532.4,157.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AibOHQgXAAgRgLQgRgNAAgQIAA69QAAgRARgLQARgMAXAAIE3AAQAXAAARAMQAQALAAARIAAa9QAAAQgQANQgRALgXAAg");
	this.shape_18.setTransform(532.1,90.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,553.4,182.5);


(lib.Symbole21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgggAJZIgOgFIAFgOQAYg/AYgfQAggrArAAQAOAAAKAEQB/ArCKAAQC9AABRhQQA0g0AAhLQAAhZhKgrQgtgaiNggIgUgEQiGgeg7gRQhggdg7glQiOhcAAiyQAAi0CIhgQCJhhEAAAQCcAACsAsIAQAEIgGAQQgbBLgbAfQgpAug8gOQhjgVhsAAQhuAAhAAWQh4AoAABuQAABiBhAvQA+AeDNApIAHABQC+AmBcA8QBeA/AXBrIDlAAIAAsZIAHgEQA9gsBLAAQAoAAApAMIAMAEIADM5IGbAAIFQqjQAphUA4grQA3grBDAAQApAAAmAPIAGADIGnM7IFxAAIAAsXIAGgFQA9gsBMAAQAnAAAqANIALADIADOoQABBlBNA1QBOA0CVAAQCNAAB4gqQAOgEAOAAQAqAAAhAsQAYAfAXA9IAFAOIgOAGQi1BHjxAAQi+AAh8g5QighLgmilIkWAAICDD/IkLAAIh9j+Ip2ABIBljMIGvAAIknpXIoEQgIjfAAIB/j/Ik1AAIAAEEIjwAAIAAkEIjnAAQgmCmifBKQh9A6i+AAQjwAAi2hIg");
	this.shape.setTransform(212.6,67.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1C").s().p("Ag1BAQgXgVAAgfQAAgcATgQIgOAAIAAgzICPAAIAAAzIgQAAIAAABQAVANAAAdQAAAggXAUQgWAVggAAQgfAAgWgUgAgWgZQgJAJAAAPQAAAOAJAJQAKAJAMAAQAOAAAJgJQAJgJAAgOQAAgPgJgJQgJgJgOAAQgMAAgKAJg");
	this.shape_1.setTransform(465.8,41.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1C").s().p("AgLBAQgXgVAAgfQAAgcATgQIhnAAIAAgzIDoAAIAAAzIgQAAIAAABQAVANAAAdQAAAggXAUQgWAVggAAQggAAgVgUgAATgZQgJAJAAAPQAAAOAJAJQAKAJANAAQAOAAAJgJQAJgJAAgOQAAgPgJgJQgJgJgOAAQgNAAgKAJg");
	this.shape_2.setTransform(461.6,61.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1C").s().p("Ag1BAQgXgVAAgfQAAgcATgQIgOAAIAAgzICPAAIAAAzIgQAAIAAABQAVANAAAdQAAAfgXAVQgWAVggAAQgfAAgWgUgAgWgZQgJAJAAAPQAAAOAJAJQAKAJAMAAQAOAAAJgJQAJgJAAgOQAAgPgJgJQgJgJgOAAQgMAAgKAJg");
	this.shape_3.setTransform(465.8,82.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1C").s().p("AhEBMIAAgzIASAAIAAgBQgXgQAAgdQAAg2A8AAIBXAAIAAAzIhGAAQgRAAgGACQgNAFAAAQQAAAaAgAAIBKAAIAAAzg");
	this.shape_4.setTransform(465.5,102.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1C").s().p("Ag1BAQgXgVAAgfQAAgcATgQIgOAAIAAgzICPAAIAAAzIgQAAIAAABQAVANAAAdQAAAggXAUQgWAVggAAQgfAAgWgUgAgWgZQgJAJAAAPQAAAOAJAJQAKAJAMAAQAOAAAJgJQAJgJAAgOQAAgPgJgJQgJgJgOAAQgMAAgKAJg");
	this.shape_5.setTransform(465.8,123);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1C").s().p("AhMAxQgQgPgJgVQgJgVAAgVQAAgZALgaIBCAAQgYASAAAeQAAAZARAPQAQAPAZABQAZgBAQgPQAQgPAAgaQAAgcgWgTIBBAAQAKAgAAAQQAAAtgfAiQgfAigwAAQgtAAggggg");
	this.shape_6.setTransform(462.4,143.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AibOHQgYAAgQgMQgQgMAAgQIAA69QAAgQAQgMQAQgMAYAAIE3AAQAXAAARAMQAQAMAAAQIAAa9QAAAQgQAMQgRAMgXAAg");
	this.shape_7.setTransform(462.1,90.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhSBdIAZgvQAaAXAaAAQALAAAIgFQAIgGABgLQAAgLgOgHQgGgEgPgEQgggKgMgKQgSgNABgeQAAgiAVgVQAXgVAgAAQAnAAAgATIgXAtQgTgPgUAAQgKAAgFAFQgJAFAAAJQAAAJAJAGQAEADAMAEIAPAEQAbAIANANQAPAOAAAaQAAAqgWATQgaAVgmAAQgrAAgkgag");
	this.shape_8.setTransform(414.1,169.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhSBdIAZgvQAZAXAaAAQALAAAIgFQAJgGAAgLQAAgLgNgHQgHgEgOgEQghgJgMgLQgQgNAAgeQAAgiAVgVQAWgVAhAAQAmAAAhATIgXAtQgSgPgWAAQgIAAgHAFQgJAFABAJQgBAJAKAGQAEADALAEIAPAEQAbAIAOANQAPAOAAAaQAAApgXAUQgZAVgmAAQgrAAgkgag");
	this.shape_9.setTransform(393.9,169.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag/BxIAAjhIB/AAIAAAyIhEAAIAAAmIBBAAIAAAwIhBAAIAAAnIBEAAIAAAyg");
	this.shape_10.setTransform(374.6,169.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA3BxIhriJIgBAAIAACJIg7AAIAAjhIA7AAIBrCJIABAAIAAiJIA6AAIAADhg");
	this.shape_11.setTransform(351.3,169.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcBxIAAjhIA5AAIAADhg");
	this.shape_12.setTransform(331.4,169.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhTBdIAagvQAaAXAaAAQAKAAAIgFQAKgGgBgLQAAgLgMgHQgIgEgOgEQghgKgMgKQgQgNgBgeQAAgiAXgVQAVgVAiAAQAlAAAiATIgYAtQgTgPgUAAQgJAAgHAFQgIAFAAAJQgBAJAKAGQAEADAMAEIAPAEQAaAIANANQAQAOABAaQgBApgXAUQgZAVgmAAQgrAAglgag");
	this.shape_13.setTransform(315.5,169.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhKBbQgPgPgFgWQgEgPAAgcIAAh+IA7AAIAAB2QAAAdAGANQAJAUAYAAQAZAAAJgUQAGgNAAgdIAAh2IA7AAIAAB+QAAAcgEAPQgFAWgPAPQgZAZgyAAQgxAAgZgZg");
	this.shape_14.setTransform(292.8,169.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhVBxIAAjhIBUAAQBCAAAAA7QAAAigZAMIAAABQAuAFAAAzQAAAhgZARQgVANgjAAgAgaBEIAHAAQAVAAAIgCQARgFAAgRQAAgSgRgEQgHgCgXAAIgGAAgAgagXIAGAAQAfAAAAgWQAAgOgLgFQgGgDgQAAIgEAAg");
	this.shape_15.setTransform(269.5,169.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhiBxIAAjhIBTAAQAvAAAhAhQAiAhAAAuQAAAwgiAhQghAggvAAgAgnA/IANAAQAbAAASgPQATgQAAggQAAgcgSgSQgRgQgcAAIgOAAg");
	this.shape_16.setTransform(234.4,169.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhZBWQgjgjAAg2QAAgyAmgiQAlghAxAAQAzAAAkAhQAmAiAAAyQAAA2gjAjQgjAjg3AAQg2AAgjgjgAgsgtQgTASAAAYQAAAcATAUQASATAaAAQAbAAASgTQATgUAAgcQAAgYgTgSQgTgSgaAAQgZAAgTASg");
	this.shape_17.setTransform(207.4,169.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhZBWQgjgjAAg2QAAgyAmgiQAlghAxAAQAyAAAlAhQAmAiAAAyQAAA2gjAjQgjAjg3AAQg2AAgjgjgAgsgtQgTASAAAYQAAAcATAUQASATAaAAQAbAAASgTQATgUAAgcQAAgYgTgSQgTgSgaAAQgZAAgTASg");
	this.shape_18.setTransform(179,169.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhABxIAAjhICBAAIAAAyIhGAAIAAAmIA/AAIAAAwIg/AAIAABZg");
	this.shape_19.setTransform(156.1,169.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag/BxIAAjhIB/AAIAAAyIhEAAIAAAmIBBAAIAAAwIhBAAIAAAnIBEAAIAAAyg");
	this.shape_20.setTransform(125.6,169.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAVBxIg3hXIAAAAIAABXIg7AAIAAjhIBYAAQAjAAAUARQAXASgBAjQAAAYgMARQgOARgXAEIBHBdgAgigLIAGAAQAnAAAAgcQAAgcgnAAIgGAAg");
	this.shape_21.setTransform(106.4,169.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgcBxIAAjhIA5AAIAADhg");
	this.shape_22.setTransform(88.4,169.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhVBxIAAjhIBZAAQAmAAAVASQAXATAAAlQAABMhQAAIggAAIAABLgAgagIIAJAAQAVAAAIgEQANgFAAgTQAAgTgNgGQgHgEgWAAIgJAAg");
	this.shape_23.setTransform(72.5,169.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhTBdIAagvQAaAXAaAAQAKAAAIgFQAKgGgBgLQABgLgNgHQgIgEgOgEQghgKgMgKQgQgNgBgeQAAgiAXgVQAVgVAiAAQAlAAAiATIgYAtQgTgPgUAAQgJAAgHAFQgIAFAAAJQgBAJAKAGQAEADAMAEIAPAEQAaAIANANQAQAOABAaQgBApgXAUQgZAVgmAAQgrAAglgag");
	this.shape_24.setTransform(50.9,169.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AA2BxIhriJIAAAAIAACJIg7AAIAAjhIA7AAIBrCJIAAAAIAAiJIA7AAIAADhg");
	this.shape_25.setTransform(26.7,169.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgcBxIAAjhIA5AAIAADhg");
	this.shape_26.setTransform(6.8,169.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,483.4,181.4);


(lib.Symbole19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACCGuIAAl8IkDAAIAAF8IkOAAIAAovIGPksIGQEsIAAIvg");
	this.shape.setTransform(40,43);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,86);


(lib.Symbole7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.pomme();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1400,750);


(lib.Symbole6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbole5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egx6ApZMAAAhSxMBj1AAAMAAABSxg");
	this.shape.setTransform(319.5,264.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,639,529.7);


(lib.Symbole1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhyATIAAglIDlAAIAAAlg");
	this.shape.setTransform(11.5,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,3.8);


(lib.shadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.shadow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,743,644);


(lib.reddot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E30713").s().p("AgaAaQgLgLAAgPQAAgOALgMQAMgLAOAAQAPAAALALQALAMAAAOQAAAPgLALQgLALgPAAQgOAAgMgLg");
	this.shape.setTransform(3.8,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.5,7.5);


(lib.rectanglegriis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AqEDrIAAnVIUJAAIAAHVg");
	this.shape.setTransform(64.5,70.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,47,129,47);


(lib.rectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#191816").s().p("AmpBuIAAjbINTAAIAADbg");
	this.shape.setTransform(42.6,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.rectangle, new cjs.Rectangle(0,0,85.3,22), null);


(lib.PARISlogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("EgggAJZIgOgFIAGgOQAXg/AYgfQAhgrApAAQAPAAAKAEQB/ArCJAAQC+AABRhQQA0g0AAhLQAAhZhJgrQgvgaiNggIgTgEQiGgeg8gRQhfgdg7glQiOhcAAiyQAAi0CJhgQCIhhD/AAQCeAACrAsIARAEIgGAQQgcBLgbAfQgoAug9gOQhigVhtAAQhtAAhBAWQh4AoAABuQAABiBhAvQA/AeDMApIAGABQC/AmBcA8QBdA/AYBrIDlAAIAAsZIAHgEQA9gsBMAAQAoAAApAMIAKAEIAEM5IGaAAIFRqjQAphUA3grQA4grBDAAQApAAAnAPIAFADIGmM7IFyAAIAAsXIAGgFQA8gsBNAAQAnAAAqANIAKADIAFOoQgBBlBOA1QBOA0CVAAQCOAAB4gqQANgEAOAAQApAAAiAsQAXAfAYA9IAFAOIgOAGQi2BHjwAAQi9AAh8g5QihhLglilIkWAAICBD/IkKAAIh8j+Ip2ABIBkjMIGvAAIknpXIoDQgIjgAAIB/j/Ik1AAIABEEIjxAAIAAkEIjnAAQgmCmigBKQh8A6i+AAQjxAAi1hIg");
	this.shape.setTransform(212.6,67.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZAsQAOgVAAgTQAAgFgCgEQgDgGgGAAQgHAAgEAKIgFAVQgIAggdAAQgYAAgOgUQgNgSAAgYQAAgbAKgVIAgARQgHANAAAPQAAAFACAFQADAFAFAAQAGAAADgIIAEgOQAIgqAhAAQAbAAAOAVQANATAAAbQAAAegRAcg");
	this.shape_1.setTransform(465.8,59.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhoAUQgJgJAAgLQAAgLAJgIQAIgJAMAAQAMAAAIAJQAJAIAAALQAAALgJAJQgIAJgMAAQgMAAgIgJgAgdAZIAAgxICPAAIAAAxg");
	this.shape_2.setTransform(461.6,72.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhGA2IAAgzIAYAAIAAAAQgagOAAggIAAgKIAxAAQgEAIAAAOQAAATAMAJQAKAGAUAAIA6AAIAAAzg");
	this.shape_3.setTransform(465.7,83.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1BAQgXgVAAgfQAAgbATgRIgOAAIAAgzICPAAIAAAzIgQAAIAAABQAVAMAAAeQAAAggXAUQgWAVggAAQgfgBgWgTgAgWgZQgJAKAAAOQAAAOAJAKQAKAIAMAAQAOAAAJgIQAJgKAAgOQAAgPgJgJQgJgJgOABQgMgBgKAJg");
	this.shape_4.setTransform(465.8,102.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhoBRIAAhUQAAgjAQgUQASgWAjABQBGAAAABKIAAAfIBGAAIAAA3gAg5gLQgEAIAAATIAAAKIA1AAIAAgKQAAgSgCgIQgGgNgSAAQgRABgGALg");
	this.shape_5.setTransform(462.4,121.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#020203").s().p("AibOHQgYAAgQgLQgRgNAAgQIAA69QAAgRARgLQAQgMAYAAIE3AAQAYAAAQAMQAQALABARIAAa9QgBAQgQANQgQALgYAAg");
	this.shape_6.setTransform(462.1,90.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1C").s().p("AhTBdIAagvQAaAXAaAAQAKAAAIgFQAKgGgBgLQABgLgNgHQgIgEgOgEQghgKgMgKQgRgNAAgeQAAgiAXgVQAVgVAhAAQAmAAAiATIgYAtQgTgPgUAAQgJAAgHAFQgIAFAAAJQAAAJAJAGQAEADAMAEIAPAEQAaAIANANQAQAOABAaQAAAqgYATQgZAVgmAAQgrAAglgag");
	this.shape_7.setTransform(414.1,169.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1C").s().p("AhTBdIAZgvQAbAXAaAAQAKAAAIgFQAJgGAAgLQAAgLgNgHQgHgEgPgEQgggJgMgLQgRgNAAgeQAAgiAXgVQAVgVAhAAQAmAAAhATIgYAtQgRgPgVAAQgKAAgGAFQgJAFAAAJQAAAJAKAGQADADANAEIAPAEQAaAIANANQAQAOABAaQgBApgXAUQgZAVgmAAQgrAAglgag");
	this.shape_8.setTransform(393.9,169.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1C").s().p("Ag/BxIAAjhIB/AAIAAAyIhEAAIAAAmIBBAAIAAAwIhBAAIAAAnIBEAAIAAAyg");
	this.shape_9.setTransform(374.6,169.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1C").s().p("AA2BxIhriJIAAAAIAACJIg7AAIAAjhIA7AAIBqCJIABAAIAAiJIA7AAIAADhg");
	this.shape_10.setTransform(351.3,169.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1C").s().p("AgdBxIAAjhIA7AAIAADhg");
	this.shape_11.setTransform(331.4,169.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1C").s().p("AhSBdIAZgvQAbAXAZAAQALAAAIgFQAIgGABgLQAAgLgOgHQgHgEgOgEQghgKgLgKQgSgNABgeQAAgiAVgVQAWgVAhAAQAmAAAhATIgXAtQgTgPgUAAQgJAAgHAFQgJAFABAJQgBAJAKAGQAEADAMAEIAPAEQAbAIANANQAPAOAAAaQAAApgXAUQgZAVgmAAQgrAAgkgag");
	this.shape_12.setTransform(315.5,169.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1C").s().p("AhKBbQgPgPgFgWQgEgPAAgcIAAh+IA7AAIAAB2QAAAdAGANQAJAUAYAAQAZAAAJgUQAGgNAAgdIAAh2IA7AAIAAB+QAAAcgEAPQgFAWgPAPQgZAZgyAAQgxAAgZgZg");
	this.shape_13.setTransform(292.8,169.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1C").s().p("AhVBxIAAjhIBUAAQBCAAAAA7QAAAigZAMIAAABQAuAFAAAzQAAAhgZARQgVANgjAAgAgaBEIAHAAQAVAAAIgCQARgFAAgRQAAgSgRgEQgHgCgXAAIgGAAgAgagXIAGAAQAfAAAAgWQAAgOgLgFQgGgDgQAAIgEAAg");
	this.shape_14.setTransform(269.5,169.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1C").s().p("AhiBxIAAjhIBTAAQAvAAAhAhQAiAhAAAuQAAAwgiAhQghAggvAAgAgnA/IANAAQAbAAASgPQATgQAAggQAAgcgSgSQgRgQgcAAIgOAAg");
	this.shape_15.setTransform(234.4,169.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1D1C").s().p("AhZBWQgjgjAAg2QAAgyAmgiQAlghAxAAQAzAAAkAhQAmAiAAAyQAAA2gjAjQgjAjg3AAQg2AAgjgjgAgsgtQgTASAAAYQAAAcATAUQASATAaAAQAbAAASgTQATgUAAgcQAAgYgTgSQgTgSgaAAQgZAAgTASg");
	this.shape_16.setTransform(207.4,169.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1D1C").s().p("AhZBWQgjgjAAg2QAAgyAmgiQAlghAxAAQAyAAAlAhQAmAiAAAyQAAA2gjAjQgjAjg3AAQg2AAgjgjgAgsgtQgTASAAAYQAAAcATAUQASATAaAAQAbAAASgTQATgUAAgcQAAgYgTgSQgTgSgaAAQgZAAgTASg");
	this.shape_17.setTransform(179,169.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D1D1C").s().p("AhABxIAAjhICBAAIAAAyIhHAAIAAAmIBAAAIAAAwIhAAAIAABZg");
	this.shape_18.setTransform(156.1,169.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1D1C").s().p("Ag/BxIAAjhIB/AAIAAAyIhEAAIAAAmIBBAAIAAAwIhBAAIAAAnIBEAAIAAAyg");
	this.shape_19.setTransform(125.6,169.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D1D1C").s().p("AAVBxIg2hXIgBAAIAABXIg7AAIAAjhIBYAAQAiAAAVARQAWASABAjQAAAYgNARQgNARgYAEIBHBdgAgigLIAFAAQAoAAAAgcQAAgcgoAAIgFAAg");
	this.shape_20.setTransform(106.4,169.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1D1D1C").s().p("AgcBxIAAjhIA5AAIAADhg");
	this.shape_21.setTransform(88.4,169.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1D1D1C").s().p("AhVBxIAAjhIBZAAQAmAAAVASQAXATAAAlQAABMhQAAIggAAIAABLgAgagIIAKAAQAUAAAIgEQANgFAAgTQAAgTgMgGQgJgEgUAAIgKAAg");
	this.shape_22.setTransform(72.5,169.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D1D1C").s().p("AhSBdIAZgvQAbAXAZAAQALAAAIgFQAIgGABgLQAAgLgOgHQgHgEgOgEQghgKgLgKQgSgNABgeQAAgiAVgVQAWgVAhAAQAmAAAhATIgXAtQgTgPgUAAQgJAAgHAFQgJAFABAJQgBAJAKAGQAEADAMAEIAPAEQAbAIANANQAPAOAAAaQAAApgXAUQgZAVgmAAQgrAAgkgag");
	this.shape_23.setTransform(50.9,169.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1D1C").s().p("AA2BxIhqiJIgBAAIAACJIg7AAIAAjhIA7AAIBrCJIAAAAIAAiJIA7AAIAADhg");
	this.shape_24.setTransform(26.7,169.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1D1D1C").s().p("AgdBxIAAjhIA7AAIAADhg");
	this.shape_25.setTransform(6.8,169.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,483.4,181.4);


(lib.PARISbestwishes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgICNQgDgDAAgHQAAgHAEgCQAEgDADAAQAFABADAEQAEADAAAFQAAAGgEADQgEADgEAAQgEAAgEgDgAgIBJQgDgCAAgDIABjNQADgFADgBIAEAAIAFACIACADIAAAwIgBA4IAAA3IACAwQgBAEgDACIgGABg");
	this.shape.setTransform(342.4,26.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("Ag4BnQgHgHgBgGQAAgHAJgEQAHAFAJABQAKAAAKgDQALgDAJgFIAUgNQAJgHAHgIQAHgHACgHQACgHgCgGQgDgGgKgDIgiAGQgRADgOgDQgOgCgIgJQgJgIABgSQABgSAJgQQAIgPAOgLQANgLARgGQAQgGARABIAGABIAFABIAEADIABAGQgBAFgDADQgDADgGAAQgUgEgQAGQgQAFgKALQgLAKgEANQgFANADALQAHAMAKADQALADAMgBIAXgDQAMgDAKABQAKABAGAGQAHAGAAASQAAALgHALQgHAKgLAJQgLAJgOAIQgOAHgMAFQgOAFgMABIgKABIgJgBg");
	this.shape_1.setTransform(331.7,30.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AgBCPQgDgDAAgFIgFjKIAFgCIAEgBIAFACIAEAEIABAvIABA0IACA0IABAwQAAAFgDADQgDACgDAAQgEAAgCgCgAgEh5QgEgBgCgEQgDgEAAgGQAAgFADgCIAHgBQAHAAACAFQABAFAAAHQgCAEgDABIgEABIgCAAg");
	this.shape_2.setTransform(321.4,27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("Ag4BnQgDgCgCgEIgBhQIgBg1IgBgiIAAgSIAAgHIAAgBQAAgDADgCIAGgDIAFABQAEABABADIABBPQADgMAEgKQAEgJAGgIQALgQAPgJQANgJAQgDQAPgDANADQAFABACADQACACAAAEQAAADgCADIgEAEQgPgBgOAEQgOADgKAHQgLAHgIAKQgJAJgEALQgIAPgCAQIgDAiIAAAgIAAAaQgBAEgDACIgGACg");
	this.shape_3.setTransform(311.4,30.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AA2BmQgDgBgBgDQgEgHgCgLIgBgZIAAgZQAAgNgCgJQgQAkgOATQgNAUgMAIQgMAJgJgBQgKgBgHgGQgGgGgEgJQgEgIAAgIQgDgNADgTQACgSAFgSQAGgUAJgSQAJgTALgOQALgNAMgHQAGgDAGgBQAHAAAHACIALAAQAFABADAEQADAEABAHIACARQAAAhACAXIAGAoIAHAgQADAOABAQQAAAFgDADQgDADgDABIgDAAIgDgBgAANhTQgKACgIAKQgKAKgIARQgJAQgGASQgGASgDASQgDASACAOQAFAQAHADQAGADAIgFQAIgGAIgLIAPgZIANgbIAKgWIgBg5QgIgKgIAAIgCAAg");
	this.shape_4.setTransform(295.6,31);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AhACPIgEgDIABhDIACg9IACg2QAAgbgCgaIgEAEIgFAFIgEAEIgEACQgDAAgCgCQgCgDAAgDIAAgBIAAgBIAHgMIAJgQIAKgPQAFgGADAAQAEAAABABIADAFIADAFIADAEQAMgHAOgFQANgFANgCQAOgBANABQANABALAFQALAFAHAKQAIAJACAPQAAATgLAQQgLAQgPAOQgPANgSALIggARIgYAMQgHADgCACIgFBzQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAABIgGABgAgKh4QgTAHgQANIAABmIAkgPQASgIAQgLQAQgLANgOQAGgHAEgJQAFgIACgJQgDgUgMgIQgHgFgHgCQgIgCgIAAQgRAAgTAHg");
	this.shape_5.setTransform(283.7,26.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AhcBvQgDgBgBgDIgCgWIgBgjIgBgqIgBgqIgCgmIgEgdQAAgIAGgCQAFgBAHACIAEAuIACAlIABAbIACATIAJg1QAEgWAFgOQAFgOAGgHQAFgHAHgBQAGAAAGAKQAFAKAFAQIAIAjIAGAiIASg2QAIgUAGgLQAFgKAFgDQAFgDAHABQAIAAAFAHQAFAGACALIAEAaIACAfIADAfIAEAgQADAPAGANQAFANAKAIIgIAKQgEAFgEgDQgKgHgGgPQgGgQgEgUQgDgTgCgWIgDgmIgDgdQgCgMgCAAQgKgCgLAhQgKAggRA/IgDAGIgFACIgFgBIgEgEIgIgyIgGgpIgFgeQgDgLgEgBQgDgBgDAIIgFAUIgGAeIgGAlIgGApIgIArIgEAEIgGABg");
	this.shape_6.setTransform(243.7,30.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AgRBoQgNgCgJgJQgJgJgFgOQgFgNgCgQQgBgQABgPQABgXAHgVQAIgWALgQQAMgQAOgIQANgJANACQAOACAJALQAIAMAFAQQAFAQABAUQABATgBARQgCAUgHARQgHASgLANQgLAMgOAHQgLAHgNAAIgCAAgAgFhMQgJAIgIAOQgIAOgFARQgFASgCAQIgBAZQABANADALQACAKAHAHQAGAHALAAQAIAAAJgGQAJgGAIgLQAIgKAHgNQAGgOACgOQADgNgCgQQgBgQgEgNQgEgNgGgKQgGgKgJgCIgDAAQgJAAgIAHg");
	this.shape_7.setTransform(225.1,30.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#464646").s().p("Ag4BnQgDgCgCgEIgBhQIgBg1IgBgiIAAgSIAAgHIAAgBQAAgDADgCIAGgDIAFABQAEABABADIABBPQADgMAEgKQAEgJAGgIQALgQAPgJQANgJAQgDQAPgDANADQAFABACADQACACAAAEQAAADgBADIgFAEQgPgBgOAEQgNADgMAHQgKAHgIAKQgJAJgEALQgIAPgCAQIgDAiIAAAgIAAAaQgBAEgDACIgGACg");
	this.shape_8.setTransform(212.7,30.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#464646").s().p("AgLCUQgDgCgBgEIgIiOIgiAOQgHAAgDgBQgDgCAAgDIABgFIADgEIApgTIgCgvQAAgXAEgTQAEgTAKgLQAJgKAQACQAIAAAHAFQAIAFAFAIQAFAIADAJQAEAKAAAHQgBADgCACIgEADIgFAAIgEgCQgBgMgDgIQgDgIgEgFQgDgEgEgCIgHgCQgLABgEAHQgFAIgCANQgCAOAAATIACAqIBJgbQADADACADQABAEgFAHIhJAeIAJCUQAAADgDACIgFACIgCAAIgEgBg");
	this.shape_9.setTransform(198.1,26.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#464646").s().p("Ag4BnQgHgHgBgGQAAgHAJgEQAHAFAJABQAKAAAKgDQALgDAJgFIAUgNQAJgHAHgIQAHgHACgHQACgHgCgGQgDgGgKgDIgiAGQgRADgOgDQgOgCgIgJQgJgIABgSQABgSAJgQQAIgPAOgLQANgLARgGQAQgGARABIAGABIAFABIAEADIABAGQgBAFgDADQgDADgGAAQgUgEgQAGQgQAFgKALQgLAKgEANQgFANADALQAHAMAKADQALADAMgBIAXgDQAMgDAKABQAKABAGAGQAHAGAAASQAAALgHALQgHAKgLAJQgLAJgOAIQgOAHgMAFQgOAFgMABIgKABIgJgBg");
	this.shape_10.setTransform(165.2,30.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#464646").s().p("AACBmQgIAAgHgDQgHgCgFgFQgKgKgGgOQgGgOgDgPIgFgcQgCADgGgBIgLgDQgFgCgCgDQgBgEAFgEIAGgCIAFgCIAFgDQACgBAAgEIADggQACgQAGgMQAHgNALgIQALgHATACQAGAAAJADQAIADAIAFQAIAGAGAHQAGAHABAJQACADgFAGIgOALIgVANIgVAMIgTAKIgLAGIAEAcQADAOAEANQAFAMAGAIQAHAIAJAAQAPABALgGQALgFAHgJQAHgJAFgKIAGgVIADgQIACgHQADgBAFABQAFACABAIQAAANgGARQgGARgLAPQgLAOgPAJQgHAEgIACIgIABIgIgBgAgLhTQgHABgFAGQgGAGgDAIQgEAJgBALQgBALABALIBHgpQgLgPgLgEQgIgDgIAAIgHAAg");
	this.shape_11.setTransform(149.1,30.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#464646").s().p("AA/CSQgDgCgCgFIACgeIABgmIgCgoIgDgkQgCgQgEgLQgDgLgFgBQgLgDgKAFQgLAFgIAMQgIALgIAPIgOAiIgLAjIgIAgIgFAZIgBAOIgGABIgHABIgGAAQgCgBAAgEIgGkYQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBABAAIAGAAIAGABIAEADIACDXIAFgTIAJgdIAMggQAIgRALgNQAKgOAOgIQAPgHAUABQAGAEAFAFQAFAFAEAKQAEAJACAOIAFAjIAEA0IABBGIgEAFIgHADIgCAAIgFgBg");
	this.shape_12.setTransform(131.9,26.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#464646").s().p("Ag4BnQgHgHgBgGQAAgHAJgEQAHAFAJABQAKAAAKgDQALgDAJgFIAUgNQAJgHAHgIQAHgHACgHQACgHgCgGQgDgGgKgDIgiAGQgRADgOgDQgOgCgIgJQgJgIABgSQABgSAJgQQAIgPAOgLQANgLARgGQAQgGARABIAGABIAFABIAEADIABAGQgBAFgDADQgDADgGAAQgUgEgQAGQgQAFgKALQgLAKgEANQgFANADALQAHAMAKADQALADAMgBIAXgDQAMgDAKABQAKABAGAGQAHAGAAASQAAALgHALQgHAKgLAJQgLAJgOAIQgOAHgMAFQgOAFgMABIgKABIgJgBg");
	this.shape_13.setTransform(115.2,30.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#464646").s().p("AgBCPQgDgDAAgFIgFjKIAFgCIAEgBIAFACIAEAEIABAvIABA0IACA0IABAwQAAAFgDADQgDACgDAAQgEAAgCgCgAgEh5QgEgBgCgEQgDgEAAgGQAAgFADgCIAHgBQAHAAACAFQABAFAAAHQgCAEgDABIgEABIgCAAg");
	this.shape_14.setTransform(104.9,27);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#464646").s().p("Ag/BpIgEgDIgDgVIgFgjIgGgrIgHgpIgFgjIgEgVQABgFADgEQADgCADAAIAGABIAFAGIAVCbIAEgQIAHgZIAIgeIAJgeIAHgaIAEgPIAGgFIAHgDQADAAADABQAEACACAFIAwCdIAUipIAEgGQADgCADAAQADABADADQACADADAJIgCALIgDAVIgDAcIgEAgIgFAgIgDAcIgDAVIgBALQgDAFgEADQgFACgEAAQgFAAgEgCQgDgDgBgEIgvicIgNA0IgMAqIgKAkIgJAeQgCAEgDABIgGABg");
	this.shape_15.setTransform(91.6,30.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#464646").s().p("AgQCQIgFikIgfAKQgEgBgCgCIgEgGIgBgGQABgDACgBIAngPIAAhgQABgFADgCQAEgCADAAQAEAAADADQADACAAADIAAAXIgBAXIABAXIAAAUIA1gVQAFgBACACQADACABAEQABADgCAEQgBADgDABIg7AbIAAAQIABAeIABAlIAAAlIAAAeIABARQgBALgFAAQgGAAgHgGg");
	this.shape_16.setTransform(58.7,27);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#464646").s().p("Ag4BnQgHgHgBgGQAAgHAJgEQAHAFAJABQAKAAAKgDQALgDAJgFIAUgNQAJgHAHgIQAHgHACgHQACgHgCgGQgDgGgKgDIgiAGQgRADgOgDQgOgCgIgJQgJgIABgSQABgSAJgQQAIgPAOgLQANgLARgGQAQgGARABIAGABIAFABIAEADIABAGQgBAFgDADQgDADgGAAQgUgEgQAGQgQAFgKALQgLAKgEANQgFANADALQAHAMAKADQALADAMgBIAXgDQAMgDAKABQAKABAGAGQAHAGAAASQAAALgHALQgHAKgLAJQgLAJgOAIQgOAHgMAFQgOAFgMABIgKABIgJgBg");
	this.shape_17.setTransform(46,30.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#464646").s().p("AACBmQgIAAgHgDQgHgCgFgFQgKgKgGgOQgGgOgDgPIgFgcQgCADgGgBIgLgDQgFgCgCgDQgBgEAFgEIAGgCIAFgCIAFgDQACgBAAgEIADggQACgQAGgMQAHgNALgIQALgHATACQAGAAAJADQAIADAIAFQAIAGAGAHQAGAHABAJQACADgFAGIgOALIgVANIgVAMIgTAKIgLAGIAEAcQADAOAEANQAFAMAGAIQAHAIAJAAQAPABALgGQALgFAHgJQAHgJAFgKIAGgVIADgQIACgHQADgBAFABQAFACABAIQAAANgGARQgGARgLAPQgLAOgPAJQgHAEgIACIgIABIgIgBgAgLhTQgHABgFAGQgGAGgDAIQgEAJgBALQgBALABALIBHgpQgLgPgLgEQgIgDgIAAIgHAAg");
	this.shape_18.setTransform(30,30.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#464646").s().p("AhSCSIgCgBIgCAAIABkAIgDgKIAAgKIABgEIACgDIADgCIAFABIAFAEIADAGIADAGIABAFIAVgLIAXgJIAXgGQANgCALABIAJACIAJAEIAHAGQADAEgBAFQAAAJgEAKIgKAUIgOATIgPASIgMAPIgKAMQALgFAPgDQAQgDAPABQAPABAMAGQAGAEAEAFQAFAFACAHQABAIgFALQgEAMgJAMQgIALgLANIgXAXIgZAVIgVAQIgTALQgHAEgEgBIgIgOQACABAJgGIAWgQIAagWIAcgZQANgNAJgMQAJgMABgJQACgKgIgGQgIgFgOAAQgOAAgQAFQgQAEgPAGQgPAIgMAJQgLAKgDAKIgBAWIgBAXIAAAXIgCAVIgDAMQgBAEgFAAIgEAAgAgIh7IgTAFQgKADgIAFQgIAFgFAHQgFAGgBAIIgCASIAAAVIABAWIACASIARgOIAXgVIAXgYQALgNAIgMQAIgLACgKQACgKgHgGIgPAAg");
	this.shape_19.setTransform(11.9,26.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,347.6,54.8);


(lib.MEwishes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgICNQgDgDAAgHQAAgHAEgCQAEgDADAAQAFABADAEQAEADAAAFQAAAGgEADQgEADgEAAQgEAAgEgDgAgIBJQgDgCAAgDIABjNQADgFADgBIAEAAIAFACIACADIAAAwIgBA4IAAA3IACAwQgBAEgDACIgGABg");
	this.shape.setTransform(428.1,26.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AgBCPQgDgDAAgFIgFjKIAFgCIAEgBIAFACIAEAEIABAvIABA0IACA0IABAwQAAAFgDADQgDACgDAAQgEAAgCgCgAgEh5QgEgBgCgEQgDgEAAgGQAAgFADgCIAHgBQAHAAACAFQABAFAAAHQgCAEgDABIgEABIgCAAg");
	this.shape_1.setTransform(422.2,27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AhACPIAAAAIgDg7IgBg8IgBhIIgChfIAJAAIAHAAIAEACQACACAAAFIAAAbIAAAdIABAkIAAAvQANgRALgKQALgKAKgGQAJgFAJgBQAKgBAJABQALAAAIAEQAHAFAEAHQAEAIACAKIACAUIgBAQQgBAJgDAKQgEAKgGALQgHALgNAMQgMAMgTANQgSANgbAOIgOADIgIAAIgDgBgAACgSQgLAHgJALQgJAKgHAMIgMAXIgBBMIAJgFIATgKIAWgPQANgJAKgMQALgMAIgPQAHgPACgSIgCgLIgFgLQgDgFgFgEQgFgEgHAAQgOAAgLAHg");
	this.shape_2.setTransform(411,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AA2BmQgDgBgBgDQgEgHgCgLIgBgZIAAgZQAAgNgCgJQgQAkgOATQgNAUgMAIQgMAJgJgBQgKgBgHgGQgGgGgEgJQgEgIAAgIQgDgNADgTQACgSAFgSQAGgUAJgSQAJgTALgOQALgNAMgHQAGgDAGgBQAHAAAHACIALAAQAFABADAEQADAEABAHIACARQAAAhACAXIAGAoIAHAgQADAOABAQQAAAFgDADQgDADgDABIgDAAIgDgBgAANhTQgKACgIAKQgKAKgIARQgJAQgGASQgGASgDASQgDASACAOQAFAQAHADQAGADAIgFQAIgGAIgLIAPgZIANgbIAKgWIgBg5QgIgKgIAAIgCAAg");
	this.shape_3.setTransform(394.4,31);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AA/CSQgDgCgCgFIACgeIABgmIgCgoIgDgkQgCgQgEgLQgDgLgFgBQgLgDgKAFQgLAFgIAMQgIALgIAPIgOAiIgLAjIgIAgIgFAZIgBAOIgGABIgHABIgGAAQgCgBAAgEIgGkYQAAgDADgBIAGAAIAGABIAEADIACDXIAFgTIAJgdIAMggQAIgRALgNQAKgOAOgIQAPgHAUABQAGAEAFAFQAFAFAEAKQAEAJACAOIAFAjIAEA0IABBGIgEAFIgHADIgCAAIgFgBg");
	this.shape_4.setTransform(377.3,26.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgqCSIgDgIQAAgDAJgKIAXgWIAcgfQARgRAOgUQAOgUAKgVQALgWABgXQAAgLgGgIQgGgIgJgHQgJgHgLgEIgYgIIgVgFIgRgCIgFAAIgIABIgIACIgIAEIAQDPQACADgCAFQgCAEgEADQgDADgEABQgEAAgDgFIgRjUIgDACIgGADIgGADIgEACIgBAAIgBAAIgFgBQgDgBAAgDQAAgGADgEIAGgGIAJgGIAJgIIAGgMQADgHAAgLQAHAAACACIACAHIABAHQABADAFACIAagBQAPABAQADQARADAQAGQAQAFANAKQANAJAIAOQAEAHABAIQACAHgBAJQgCAdgMAZQgMAagSAYQgZAhgQAPQgXAYgaAXIgCAAIgBAAQgDAAgCgFg");
	this.shape_5.setTransform(356.8,26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AAtBrIgMg5QgBAEgGAJIgPARIgQAQQgJAGgHABQgIAAgGgDQgGgCgFgHQgJgMgEgUQgFgUAAgZIAAguIABgqQABgTgBgJQABgDADgBIAGgCIAGACIAEAEIAAAdIgBAlIABAmIACAlQACAQAFALQAEAKAIACQAFAAAGgEIALgKIALgNIAJgOIAGgNIADgJIABgNIABgUIABgYIABgZIABgUIAAgNIACgFIAFgEQADgBADACQAEACAEAHIgEA0IgBAzQAAAZADAZQADAZAJAYQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABIgFADIgHAAQgEAAgCgDg");
	this.shape_6.setTransform(320,31.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AhACPIAAAAIgDg7IgBg8IgBhIIgChfIAJAAIAHAAIAEACQACACAAAFIAAAbIAAAdIABAkIAAAvQANgRALgKQALgKAKgGQAJgFAJgBQAKgBAJABQALAAAIAEQAHAFAEAHQAEAIACAKIACAUIgBAQQgBAJgDAKQgEAKgGALQgHALgNAMQgMAMgTANQgSANgbAOIgOADIgIAAIgDgBgAACgSQgLAHgJALQgJAKgHAMIgMAXIgBBMIAJgFIATgKIAWgPQANgJAKgMQALgMAIgPQAHgPACgSIgCgLIgFgLQgDgFgFgEQgFgEgHAAQgOAAgLAHg");
	this.shape_7.setTransform(303.6,26.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#464646").s().p("AhaCYQgFgBgIgIIAIgaIAOgzIAVhVIAdh/QACgEAEgCIAIAAIAGADQABAAAAABQABAAAAABQAAAAAAABQAAAAAAAAIBCCjIAjgKQAFAAADACQADACAAAEQABADgDAFQgDADgHACIgHADIgJACIgHACIgDACIAmBmIgCADIgDAFQgCABgEAAQgEgBgHgEIgohlIgRAEIgXAEIgWAEIgWAHQgKADgHAGQgGAFgCAHIgCAQIgEAXIgFAcQgEAEgEAAIgDgBgAg1AqIAQgFIAWgEIAXgGIAWgGIgviCg");
	this.shape_8.setTransform(284.4,26.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#464646").s().p("AhcBvQgDgBgBgDIgCgWIgBgjIgBgqIgBgqIgCgmIgEgdQAAgIAGgCQAFgBAHACIAEAuIACAlIABAbIACATIAJg1QAEgWAFgOQAFgOAGgHQAFgHAHgBQAGAAAGAKQAFAKAFAQIAIAjIAGAiIASg2QAIgUAGgLQAFgKAFgDQAFgDAHABQAIAAAFAHQAFAGACALIAEAaIACAfIADAfIAEAgQADAPAGANQAFANAKAIIgIAKQgEAFgEgDQgKgHgGgPQgGgQgEgUQgDgTgCgWIgDgmIgDgdQgCgMgCAAQgKgCgLAhQgKAggRA/IgDAGIgFACIgFgBIgEgEIgIgyIgGgpIgFgeQgDgLgEgBQgDgBgDAIIgFAUIgGAeIgGAlIgGApIgIArIgEAEIgGABg");
	this.shape_9.setTransform(243.7,30.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#464646").s().p("AgRBoQgNgCgJgJQgJgJgFgOQgFgNgCgQQgBgQABgPQABgXAHgVQAIgWALgQQAMgQAOgIQANgJANACQAOACAJALQAIAMAFAQQAFAQABAUQABATgBARQgCAUgHARQgHASgLANQgLAMgOAHQgLAHgNAAIgCAAgAgFhMQgJAIgIAOQgIAOgFARQgFASgCAQIgBAZQABANADALQACAKAHAHQAGAHALAAQAIAAAJgGQAJgGAIgLQAIgKAHgNQAGgOACgOQADgNgCgQQgBgQgEgNQgEgNgGgKQgGgKgJgCIgDAAQgJAAgIAHg");
	this.shape_10.setTransform(225.1,30.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#464646").s().p("Ag4BnQgDgCgCgEIgBhQIgBg1IgBgiIAAgSIAAgHIAAgBQAAgDADgCIAGgDIAFABQAEABABADIABBPQADgMAEgKQAEgJAGgIQALgQAPgJQANgJAQgDQAPgDANADQAFABACADQACACAAAEQAAADgBADIgFAEQgPgBgOAEQgNADgMAHQgKAHgIAKQgJAJgEALQgIAPgCAQIgDAiIAAAgIAAAaQgBAEgDACIgGACg");
	this.shape_11.setTransform(212.7,30.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#464646").s().p("AgLCUQgDgCgBgEIgIiOIgiAOQgHAAgDgBQgDgCAAgDIABgFIADgEIApgTIgCgvQAAgXAEgTQAEgTAKgLQAJgKAQACQAIAAAHAFQAIAFAFAIQAFAIADAJQAEAKAAAHQgBADgCACIgEADIgFAAIgEgCQgBgMgDgIQgDgIgEgFQgDgEgEgCIgHgCQgLABgEAHQgFAIgCANQgCAOAAATIACAqIBJgbQADADACADQABAEgFAHIhJAeIAJCUQAAADgDACIgFACIgCAAIgEgBg");
	this.shape_12.setTransform(198.1,26.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#464646").s().p("Ag4BnQgHgHgBgGQAAgHAJgEQAHAFAJABQAKAAAKgDQALgDAJgFIAUgNQAJgHAHgIQAHgHACgHQACgHgCgGQgDgGgKgDIgiAGQgRADgOgDQgOgCgIgJQgJgIABgSQABgSAJgQQAIgPAOgLQANgLARgGQAQgGARABIAGABIAFABIAEADIABAGQgBAFgDADQgDADgGAAQgUgEgQAGQgQAFgKALQgLAKgEANQgFANADALQAHAMAKADQALADAMgBIAXgDQAMgDAKABQAKABAGAGQAHAGAAASQAAALgHALQgHAKgLAJQgLAJgOAIQgOAHgMAFQgOAFgMABIgKABIgJgBg");
	this.shape_13.setTransform(165.2,30.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#464646").s().p("AACBmQgIAAgHgDQgHgCgFgFQgKgKgGgOQgGgOgDgPIgFgcQgCADgGgBIgLgDQgFgCgCgDQgBgEAFgEIAGgCIAFgCIAFgDQACgBAAgEIADggQACgQAGgMQAHgNALgIQALgHATACQAGAAAJADQAIADAIAFQAIAGAGAHQAGAHABAJQACADgFAGIgOALIgVANIgVAMIgTAKIgLAGIAEAcQADAOAEANQAFAMAGAIQAHAIAJAAQAPABALgGQALgFAHgJQAHgJAFgKIAGgVIADgQIACgHQADgBAFABQAFACABAIQAAANgGARQgGARgLAPQgLAOgPAJQgHAEgIACIgIABIgIgBgAgLhTQgHABgFAGQgGAGgDAIQgEAJgBALQgBALABALIBHgpQgLgPgLgEQgIgDgIAAIgHAAg");
	this.shape_14.setTransform(149.1,30.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#464646").s().p("AA/CSQgDgCgCgFIACgeIABgmIgCgoIgDgkQgCgQgEgLQgDgLgFgBQgLgDgKAFQgLAFgIAMQgIALgIAPIgOAiIgLAjIgIAgIgFAZIgBAOIgGABIgHABIgGAAQgCgBAAgEIgGkYQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBABAAIAGAAIAGABIAEADIACDXIAFgTIAJgdIAMggQAIgRALgNQAKgOAOgIQAPgHAUABQAGAEAFAFQAFAFAEAKQAEAJACAOIAFAjIAEA0IABBGIgEAFIgHADIgCAAIgFgBg");
	this.shape_15.setTransform(131.9,26.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#464646").s().p("Ag4BnQgHgHgBgGQAAgHAJgEQAHAFAJABQAKAAAKgDQALgDAJgFIAUgNQAJgHAHgIQAHgHACgHQACgHgCgGQgDgGgKgDIgiAGQgRADgOgDQgOgCgIgJQgJgIABgSQABgSAJgQQAIgPAOgLQANgLARgGQAQgGARABIAGABIAFABIAEADIABAGQgBAFgDADQgDADgGAAQgUgEgQAGQgQAFgKALQgLAKgEANQgFANADALQAHAMAKADQALADAMgBIAXgDQAMgDAKABQAKABAGAGQAHAGAAASQAAALgHALQgHAKgLAJQgLAJgOAIQgOAHgMAFQgOAFgMABIgKABIgJgBg");
	this.shape_16.setTransform(115.2,30.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#464646").s().p("AgBCPQgDgDAAgFIgFjKIAFgCIAEgBIAFACIAEAEIABAvIABA0IACA0IABAwQAAAFgDADQgDACgDAAQgEAAgCgCgAgEh5QgEgBgCgEQgDgEAAgGQAAgFADgCIAHgBQAHAAACAFQABAFAAAHQgCAEgDABIgEABIgCAAg");
	this.shape_17.setTransform(104.9,27);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#464646").s().p("Ag/BpIgEgDIgDgVIgFgjIgGgrIgHgpIgFgjIgEgVQABgFADgEQADgCADAAIAGABIAFAGIAVCbIAEgQIAHgZIAIgeIAJgeIAHgaIAEgPIAGgFIAHgDQADAAADABQAEACACAFIAwCdIAUipIAEgGQADgCADAAQADABADADQACADADAJIgCALIgDAVIgDAcIgEAgIgFAgIgDAcIgDAVIgBALQgDAFgEADQgFACgEAAQgFAAgEgCQgDgDgBgEIgvicIgNA0IgMAqIgKAkIgJAeQgCAEgDABIgGABg");
	this.shape_18.setTransform(91.6,30.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#464646").s().p("AgQCQIgFikIgfAKQgEgBgCgCIgEgGIgBgGQABgDACgBIAngPIAAhgQABgFADgCQAEgCADAAQAEAAADADQADACAAADIAAAXIgBAXIABAXIAAAUIA1gVQAFgBACACQADACABAEQABADgCAEQgBADgDABIg7AbIAAAQIABAeIABAlIAAAlIAAAeIABARQgBALgFAAQgGAAgHgGg");
	this.shape_19.setTransform(58.7,27);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#464646").s().p("Ag4BnQgHgHgBgGQAAgHAJgEQAHAFAJABQAKAAAKgDQALgDAJgFIAUgNQAJgHAHgIQAHgHACgHQACgHgCgGQgDgGgKgDIgiAGQgRADgOgDQgOgCgIgJQgJgIABgSQABgSAJgQQAIgPAOgLQANgLARgGQAQgGARABIAGABIAFABIAEADIABAGQgBAFgDADQgDADgGAAQgUgEgQAGQgQAFgKALQgLAKgEANQgFANADALQAHAMAKADQALADAMgBIAXgDQAMgDAKABQAKABAGAGQAHAGAAASQAAALgHALQgHAKgLAJQgLAJgOAIQgOAHgMAFQgOAFgMABIgKABIgJgBg");
	this.shape_20.setTransform(46,30.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#464646").s().p("AACBmQgIAAgHgDQgHgCgFgFQgKgKgGgOQgGgOgDgPIgFgcQgCADgGgBIgLgDQgFgCgCgDQgBgEAFgEIAGgCIAFgCIAFgDQACgBAAgEIADggQACgQAGgMQAHgNALgIQALgHATACQAGAAAJADQAIADAIAFQAIAGAGAHQAGAHABAJQACADgFAGIgOALIgVANIgVAMIgTAKIgLAGIAEAcQADAOAEANQAFAMAGAIQAHAIAJAAQAPABALgGQALgFAHgJQAHgJAFgKIAGgVIADgQIACgHQADgBAFABQAFACABAIQAAANgGARQgGARgLAPQgLAOgPAJQgHAEgIACIgIABIgIgBgAgLhTQgHABgFAGQgGAGgDAIQgEAJgBALQgBALABALIBHgpQgLgPgLgEQgIgDgIAAIgHAAg");
	this.shape_21.setTransform(30,30.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#464646").s().p("AhSCSIgCgBIgCAAIABkAIgDgKIAAgKIABgEIACgDIADgCIAFABIAFAEIADAGIADAGIABAFIAVgLIAXgJIAXgGQANgCALABIAJACIAJAEIAHAGQADAEgBAFQAAAJgEAKIgKAUIgOATIgPASIgMAPIgKAMQALgFAPgDQAQgDAPABQAPABAMAGQAGAEAEAFQAFAFACAHQABAIgFALQgEAMgJAMQgIALgLANIgXAXIgZAVIgVAQIgTALQgHAEgEgBIgIgOQACABAJgGIAWgQIAagWIAcgZQANgNAJgMQAJgMABgJQACgKgIgGQgIgFgOAAQgOAAgQAFQgQAEgPAGQgPAIgMAJQgLAKgDAKIgBAWIgBAXIAAAXIgCAVIgDAMQgBAEgFAAIgEAAgAgIh7IgTAFQgKADgIAFQgIAFgFAHQgFAGgBAIIgCASIAAAVIABAWIACASIARgOIAXgVIAXgYQALgNAIgMQAIgLACgKQACgKgHgGIgPAAg");
	this.shape_22.setTransform(11.9,26.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,433.3,54.8);


(lib.MElogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgggAJZIgOgFIAGgOQAXg/AYgfQAhgrApAAQAPAAAKAEQB/ArCJAAQC+AABRhQQA0g0AAhLQAAhZhJgrQgvgaiNggIgTgEQiGgeg8gRQhfgdg7glQiOhcAAiyQAAi0CJhgQCIhhD/AAQCeAACrAsIARAEIgGAQQgcBLgbAfQgoAug9gOQhigVhtAAQhtAAhBAWQh4AoAABuQAABiBhAvQA/AeDMApIAGABQC/AmBcA8QBdA/AYBrIDlAAIAAsZIAHgEQA9gsBMAAQAoAAApAMIAKAEIAEM5IGaAAIFRqjQAphUA3grQA4grBDAAQApAAAnAPIAFADIGmM7IFyAAIAAsXIAGgFQA8gsBNAAQAnAAAqANIAKADIAFOoQgBBlBOA1QBOA0CVAAQCOAAB4gqQANgEAOAAQApAAAiAsQAXAfAYA9IAFAOIgOAGQi2BHjwAAQi9AAh8g5QihhLglilIkWAAICBD/IkKAAIh8j+Ip2ABIBkjMIGvAAIknpXIoDQgIjgAAIB/j/Ik1AAIABEEIjxAAIAAkEIjnAAQgmCmigBKQh8A6i+AAQjxAAi1hIg");
	this.shape.setTransform(212.6,67.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhTBdIAagvQAaAXAaAAQAKAAAIgFQAKgGgBgLQABgLgNgHQgIgEgOgEQghgKgMgKQgRgNAAgeQAAgiAXgVQAVgVAhAAQAmAAAiATIgYAtQgTgPgUAAQgJAAgHAFQgIAFAAAJQAAAJAJAGQAEADAMAEIAPAEQAaAIANANQAQAOABAaQAAAqgYATQgZAVgmAAQgrAAglgag");
	this.shape_1.setTransform(414.1,169.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhTBdIAZgvQAbAXAaAAQAKAAAIgFQAJgGAAgLQAAgLgNgHQgHgEgPgEQgggJgMgLQgRgNAAgeQAAgiAXgVQAVgVAhAAQAmAAAhATIgYAtQgRgPgVAAQgKAAgGAFQgJAFAAAJQAAAJAKAGQADADANAEIAPAEQAaAIANANQAQAOABAaQgBApgXAUQgZAVgmAAQgrAAglgag");
	this.shape_2.setTransform(393.9,169.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag/BxIAAjhIB/AAIAAAyIhEAAIAAAmIBBAAIAAAwIhBAAIAAAnIBEAAIAAAyg");
	this.shape_3.setTransform(374.6,169.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA2BxIhriJIAAAAIAACJIg7AAIAAjhIA7AAIBqCJIABAAIAAiJIA7AAIAADhg");
	this.shape_4.setTransform(351.3,169.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdBxIAAjhIA7AAIAADhg");
	this.shape_5.setTransform(331.4,169.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhSBdIAZgvQAbAXAZAAQALAAAIgFQAIgGABgLQAAgLgOgHQgHgEgOgEQghgKgLgKQgSgNABgeQAAgiAVgVQAWgVAhAAQAmAAAhATIgXAtQgTgPgUAAQgJAAgHAFQgJAFABAJQgBAJAKAGQAEADAMAEIAPAEQAbAIANANQAPAOAAAaQAAApgXAUQgZAVgmAAQgrAAgkgag");
	this.shape_6.setTransform(315.5,169.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhKBbQgPgPgFgWQgEgPAAgcIAAh+IA7AAIAAB2QAAAdAGANQAJAUAYAAQAZAAAJgUQAGgNAAgdIAAh2IA7AAIAAB+QAAAcgEAPQgFAWgPAPQgZAZgyAAQgxAAgZgZg");
	this.shape_7.setTransform(292.8,169.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhVBxIAAjhIBUAAQBCAAAAA7QAAAigZAMIAAABQAuAFAAAzQAAAhgZARQgVANgjAAgAgaBEIAHAAQAVAAAIgCQARgFAAgRQAAgSgRgEQgHgCgXAAIgGAAgAgagXIAGAAQAfAAAAgWQAAgOgLgFQgGgDgQAAIgEAAg");
	this.shape_8.setTransform(269.5,169.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhiBxIAAjhIBTAAQAvAAAhAhQAiAhAAAuQAAAwgiAhQghAggvAAgAgnA/IANAAQAbAAASgPQATgQAAggQAAgcgSgSQgRgQgcAAIgOAAg");
	this.shape_9.setTransform(234.4,169.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhZBWQgjgjAAg2QAAgyAmgiQAlghAxAAQAzAAAkAhQAmAiAAAyQAAA2gjAjQgjAjg3AAQg2AAgjgjgAgsgtQgTASAAAYQAAAcATAUQASATAaAAQAbAAASgTQATgUAAgcQAAgYgTgSQgTgSgaAAQgZAAgTASg");
	this.shape_10.setTransform(207.4,169.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhZBWQgjgjAAg2QAAgyAmgiQAlghAxAAQAyAAAlAhQAmAiAAAyQAAA2gjAjQgjAjg3AAQg2AAgjgjgAgsgtQgTASAAAYQAAAcATAUQASATAaAAQAbAAASgTQATgUAAgcQAAgYgTgSQgTgSgaAAQgZAAgTASg");
	this.shape_11.setTransform(179,169.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhABxIAAjhICBAAIAAAyIhHAAIAAAmIBAAAIAAAwIhAAAIAABZg");
	this.shape_12.setTransform(156.1,169.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag/BxIAAjhIB/AAIAAAyIhEAAIAAAmIBBAAIAAAwIhBAAIAAAnIBEAAIAAAyg");
	this.shape_13.setTransform(125.6,169.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAVBxIg2hXIgBAAIAABXIg7AAIAAjhIBYAAQAiAAAVARQAWASABAjQAAAYgNARQgNARgYAEIBHBdgAgigLIAFAAQAoAAAAgcQAAgcgoAAIgFAAg");
	this.shape_14.setTransform(106.4,169.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcBxIAAjhIA5AAIAADhg");
	this.shape_15.setTransform(88.4,169.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhVBxIAAjhIBZAAQAmAAAVASQAXATAAAlQAABMhQAAIggAAIAABLgAgagIIAKAAQAUAAAIgEQANgFAAgTQAAgTgMgGQgJgEgUAAIgKAAg");
	this.shape_16.setTransform(72.5,169.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhSBdIAZgvQAbAXAZAAQALAAAIgFQAIgGABgLQAAgLgOgHQgHgEgOgEQghgKgLgKQgSgNABgeQAAgiAVgVQAWgVAhAAQAmAAAhATIgXAtQgTgPgUAAQgJAAgHAFQgJAFABAJQgBAJAKAGQAEADAMAEIAPAEQAbAIANANQAPAOAAAaQAAApgXAUQgZAVgmAAQgrAAgkgag");
	this.shape_17.setTransform(50.9,169.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AA2BxIhqiJIgBAAIAACJIg7AAIAAjhIA7AAIBrCJIAAAAIAAiJIA7AAIAADhg");
	this.shape_18.setTransform(26.7,169.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgdBxIAAjhIA7AAIAADhg");
	this.shape_19.setTransform(6.8,169.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#020203").s().p("AhoAUQgJgIAAgMQAAgLAJgIQAIgIAMgBQAMABAIAIQAJAIAAALQAAAMgJAIQgIAJgMgBQgMABgIgJgAgdAaIAAgzICPAAIAAAzg");
	this.shape_20.setTransform(461.6,12.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#020203").s().p("Ah2BUIAAgzIBnAAQgTgRAAgbQAAgfAXgVQAVgUAgAAQAgAAAWAUQAXAVAAAgQAAAdgVANIAAABIAQAAIAAAzgAATgWQgJAKAAAOQAAAPAJAJQAKAIANAAQAOAAAJgIQAJgJAAgPQAAgPgJgJQgJgIgOAAQgNAAgKAIg");
	this.shape_21.setTransform(461.6,27.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#020203").s().p("Ag1BAQgXgVAAgfQAAgcATgQIgOAAIAAgzICPAAIAAAzIgQAAIAAABQAVANAAAdQAAAggXAUQgWAVggAAQgfAAgWgUgAgWgZQgJAJAAAPQAAAOAJAKQAKAIAMAAQAOAAAJgIQAJgJAAgPQAAgPgJgJQgJgIgOAAQgMAAgKAIg");
	this.shape_22.setTransform(465.8,48.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#020203").s().p("AhzBMIAAgzIBrAAIAAgBQgXgSAAgbQAAgaARgOQAOgOAcAAIBYAAIAAAzIhJAAQgQAAgIAEQgKAFAAAOQAAAaAiAAIBJAAIAAAzg");
	this.shape_23.setTransform(461.3,68.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#020203").s().p("AhoBcIAAhNQAAgsAegfQAegfAsAAQAtAAAeAfQAeAgAAArIAABNgAgrgSQgPARAAAaIAAANIB1AAIAAgNQAAgZgOgQQgQgSgdAAQgbAAgQAQg");
	this.shape_24.setTransform(462.4,89.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#020203").s().p("AhJBMIAAgyIBLAAQAQAAAHgFQAJgGAAgPQAAgNgJgGQgHgFgQAAIhLAAIAAgzIBVAAQA+AAAABLQAABMg+AAg");
	this.shape_25.setTransform(466,121.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#020203").s().p("Ah2BUIAAgzIBnAAQgTgRAAgbQAAgfAXgVQAVgUAgAAQAgAAAWAVQAXAUAAAgQAAAdgVANIAAABIAQAAIAAAzgAATgVQgJAJAAAOQAAAPAJAJQAKAJANAAQAOAAAJgJQAJgJAAgPQAAgOgJgJQgJgJgOAAQgNAAgKAJg");
	this.shape_26.setTransform(461.6,141.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#020203").s().p("AhoAdIAAg7IDRhPIAAA6IgkAOIAABKIAkAPIAAA6gAgnAAIAAAAIBCAWIAAgsg");
	this.shape_27.setTransform(462.4,164);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AibOHQgYAAgQgLQgRgNAAgQIAA69QAAgRARgLQAQgMAYAAIE3AAQAYAAAQAMQAQALABARIAAa9QgBAQgQANQgQALgYAAg");
	this.shape_28.setTransform(462.1,90.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,483.4,181.4);


(lib.mappemonde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Imagebitmap3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1400,720);


(lib.manillelogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgggAJZIgOgFIAGgOQAXg/AYgfQAhgrApAAQAPAAAKAEQB/ArCJAAQC+AABRhQQA0g0AAhLQAAhZhJgrQgvgaiNggIgTgEQiGgeg8gRQhfgdg7glQiOhcAAiyQAAi0CJhgQCIhhD/AAQCeAACrAsIARAEIgGAQQgcBLgbAfQgoAug9gOQhigVhtAAQhtAAhBAWQh4AoAABuQAABiBhAvQA/AeDMApIAGABQC/AmBcA8QBdA/AYBrIDlAAIAAsZIAHgEQA9gsBMAAQAoAAApAMIAKAEIAEM5IGaAAIFRqjQAphUA3grQA4grBDAAQApAAAnAPIAFADIGmM7IFyAAIAAsXIAGgFQA8gsBNAAQAnAAAqANIAKADIAFOoQgBBlBOA1QBOA0CVAAQCOAAB4gqQANgEAOAAQApAAAiAsQAXAfAYA9IAFAOIgOAGQi2BHjwAAQi9AAh8g5QihhLglilIkWAAICBD/IkKAAIh8j+Ip2ABIBkjMIGvAAIknpXIoDQgIjgAAIB/j/Ik1AAIABEEIjxAAIAAkEIjnAAQgmCmigBKQh8A6i+AAQjxAAi1hIg");
	this.shape.setTransform(212.6,67.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020203").s().p("Ag1BAQgXgVAAgfQAAgcATgQIgOAAIAAgzICPAAIAAAzIgQAAIAAABQAVANAAAdQAAAggXAUQgWAVggAAQgfAAgWgUgAgWgZQgJAJAAAPQAAAOAJAKQAKAIAMAAQAOAAAJgIQAJgJAAgPQAAgPgJgJQgJgIgOAAQgMAAgKAIg");
	this.shape_1.setTransform(465.8,47.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#020203").s().p("AhzAZIAAgxIDnAAIAAAxg");
	this.shape_2.setTransform(461.3,62.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#020203").s().p("AhoAUQgJgIAAgMQAAgLAJgIQAIgJAMAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgMAAgIgJgAgdAaIAAgyICPAAIAAAyg");
	this.shape_3.setTransform(461.6,72.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#020203").s().p("AhEBMIAAgzIASAAIAAgBQgXgQAAgdQAAg2A8AAIBXAAIAAAzIhGAAQgRAAgGACQgNAFAAAQQAAAaAgAAIBKAAIAAAzg");
	this.shape_4.setTransform(465.5,87.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#020203").s().p("Ag1BAQgXgVAAgfQAAgbATgRIgOAAIAAgzICPAAIAAAzIgQAAIAAABQAVANAAAdQAAAggXAUQgWAVggAAQgfAAgWgUgAgWgZQgJAKAAAPQAAAOAJAJQAKAIAMAAQAOAAAJgIQAJgJAAgOQAAgQgJgJQgJgIgOAAQgMAAgKAIg");
	this.shape_5.setTransform(465.8,107.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#020203").s().p("AhoBgIAAg2IBvgqIhvgtIAAg2IDRggIAAA3Ih4APIAAABIB4AyIAAAVIh4AwIAAABIB4ASIAAA2g");
	this.shape_6.setTransform(462.4,132);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AibOHQgYAAgQgLQgRgNAAgQIAA69QAAgRARgLQAQgMAYAAIE3AAQAYAAAQAMQAQALABARIAAa9QgBAQgQANQgQALgYAAg");
	this.shape_7.setTransform(462.1,90.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhTBdIAagvQAaAXAaAAQAKAAAIgFQAKgGgBgLQABgLgNgHQgIgEgOgEQghgKgMgKQgRgNAAgeQAAgiAXgVQAVgVAhAAQAmAAAiATIgYAtQgTgPgUAAQgJAAgHAFQgIAFAAAJQAAAJAJAGQAEADAMAEIAPAEQAaAIANANQAQAOABAaQAAAqgYATQgZAVgmAAQgrAAglgag");
	this.shape_8.setTransform(414.1,169.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhTBdIAZgvQAbAXAaAAQAKAAAIgFQAJgGAAgLQAAgLgNgHQgHgEgPgEQgggJgMgLQgRgNAAgeQAAgiAXgVQAVgVAhAAQAmAAAhATIgYAtQgRgPgVAAQgKAAgGAFQgJAFAAAJQAAAJAKAGQADADANAEIAPAEQAaAIANANQAQAOABAaQgBApgXAUQgZAVgmAAQgrAAglgag");
	this.shape_9.setTransform(393.9,169.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag/BxIAAjhIB/AAIAAAyIhEAAIAAAmIBBAAIAAAwIhBAAIAAAnIBEAAIAAAyg");
	this.shape_10.setTransform(374.6,169.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA2BxIhriJIAAAAIAACJIg7AAIAAjhIA7AAIBqCJIABAAIAAiJIA7AAIAADhg");
	this.shape_11.setTransform(351.3,169.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdBxIAAjhIA7AAIAADhg");
	this.shape_12.setTransform(331.4,169.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhSBdIAZgvQAbAXAZAAQALAAAIgFQAIgGABgLQAAgLgOgHQgHgEgOgEQghgKgLgKQgSgNABgeQAAgiAVgVQAWgVAhAAQAmAAAhATIgXAtQgTgPgUAAQgJAAgHAFQgJAFABAJQgBAJAKAGQAEADAMAEIAPAEQAbAIANANQAPAOAAAaQAAApgXAUQgZAVgmAAQgrAAgkgag");
	this.shape_13.setTransform(315.5,169.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhKBbQgPgPgFgWQgEgPAAgcIAAh+IA7AAIAAB2QAAAdAGANQAJAUAYAAQAZAAAJgUQAGgNAAgdIAAh2IA7AAIAAB+QAAAcgEAPQgFAWgPAPQgZAZgyAAQgxAAgZgZg");
	this.shape_14.setTransform(292.8,169.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhVBxIAAjhIBUAAQBCAAAAA7QAAAigZAMIAAABQAuAFAAAzQAAAhgZARQgVANgjAAgAgaBEIAHAAQAVAAAIgCQARgFAAgRQAAgSgRgEQgHgCgXAAIgGAAgAgagXIAGAAQAfAAAAgWQAAgOgLgFQgGgDgQAAIgEAAg");
	this.shape_15.setTransform(269.5,169.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhiBxIAAjhIBTAAQAvAAAhAhQAiAhAAAuQAAAwgiAhQghAggvAAgAgnA/IANAAQAbAAASgPQATgQAAggQAAgcgSgSQgRgQgcAAIgOAAg");
	this.shape_16.setTransform(234.4,169.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhZBWQgjgjAAg2QAAgyAmgiQAlghAxAAQAzAAAkAhQAmAiAAAyQAAA2gjAjQgjAjg3AAQg2AAgjgjgAgsgtQgTASAAAYQAAAcATAUQASATAaAAQAbAAASgTQATgUAAgcQAAgYgTgSQgTgSgaAAQgZAAgTASg");
	this.shape_17.setTransform(207.4,169.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhZBWQgjgjAAg2QAAgyAmgiQAlghAxAAQAyAAAlAhQAmAiAAAyQAAA2gjAjQgjAjg3AAQg2AAgjgjgAgsgtQgTASAAAYQAAAcATAUQASATAaAAQAbAAASgTQATgUAAgcQAAgYgTgSQgTgSgaAAQgZAAgTASg");
	this.shape_18.setTransform(179,169.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhABxIAAjhICBAAIAAAyIhHAAIAAAmIBAAAIAAAwIhAAAIAABZg");
	this.shape_19.setTransform(156.1,169.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag/BxIAAjhIB/AAIAAAyIhEAAIAAAmIBBAAIAAAwIhBAAIAAAnIBEAAIAAAyg");
	this.shape_20.setTransform(125.6,169.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAVBxIg2hXIgBAAIAABXIg7AAIAAjhIBYAAQAiAAAVARQAWASABAjQAAAYgNARQgNARgYAEIBHBdgAgigLIAFAAQAoAAAAgcQAAgcgoAAIgFAAg");
	this.shape_21.setTransform(106.4,169.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgcBxIAAjhIA5AAIAADhg");
	this.shape_22.setTransform(88.4,169.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhVBxIAAjhIBZAAQAmAAAVASQAXATAAAlQAABMhQAAIggAAIAABLgAgagIIAKAAQAUAAAIgEQANgFAAgTQAAgTgMgGQgJgEgUAAIgKAAg");
	this.shape_23.setTransform(72.5,169.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhSBdIAZgvQAbAXAZAAQALAAAIgFQAIgGABgLQAAgLgOgHQgHgEgOgEQghgKgLgKQgSgNABgeQAAgiAVgVQAWgVAhAAQAmAAAhATIgXAtQgTgPgUAAQgJAAgHAFQgJAFABAJQgBAJAKAGQAEADAMAEIAPAEQAbAIANANQAPAOAAAaQAAApgXAUQgZAVgmAAQgrAAgkgag");
	this.shape_24.setTransform(50.9,169.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AA2BxIhqiJIgBAAIAACJIg7AAIAAjhIA7AAIBrCJIAAAAIAAiJIA7AAIAADhg");
	this.shape_25.setTransform(26.7,169.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgdBxIAAjhIA7AAIAADhg");
	this.shape_26.setTransform(6.8,169.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,483.4,181.4);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("As/DxIgGgDIADgFQAUg3AcAAIAKABQAxASA5AAQBMAAAgggQAVgVgBgeQABgkgegRQgTgLg3gMIgIgCQg3gMgXgHQgmgLgYgOQg4glAAhHQAAhIA2gnQA3gmBmAAQBBAABDARIAGACIgCAGQgLAegLANQgQASgYgGQgngIgsAAQh2AAAABFQAAAnAnATQAZAMBSAQIADABQBMAPAlAXQAlAZAJArIBcAAIAAk8IADgCQAYgSAeAAQASAAAPAFIADABIADFKICkAAICGkOQAhhDA2AAQAQgBAQAHIACAAIABADICoFIICUAAIgBk8IADgCQAZgSAeAAQAOAAASAFIAFACIABF1QABApAeAVQAfAVA8AAQA4AAAwgRIALgCQARAAANASQAKAMAJAZIACAFIgGADQhIAchgAAQhMAAgxgXQhAgegPhCIhwAAIA0BmIhqAAIgyhlIj6gBIADgIIAjhIICtAAIh2jvIjOGmIhZAAIAyhmIh7AAIAABoIhgAAIAAhoIhcAAQgPBChAAeQgyAXhMAAQhhAAhIgcg");
	this.shape.setTransform(85,26.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghAkIAJgYIACABQAKAIAJAAQAHAAAAgFQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBIgDgBIgGgBQgWgEAAgRQAAgOALgJQAKgIAOAAQAOAAANAIIgJAVQgJgHgIABQgGgBAAAFQAAADAFABIAHACQAWAFAAARQAAAPgLAIQgKAHgOAAQgSAAgOgHg");
	this.shape_1.setTransform(166.6,67.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghAkIAJgYIACABQAKAIAJAAQAGAAAAgFQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAgBIgDgBIgGgBQgWgEAAgRQAAgOALgJQAKgIAOAAQAOAAAMAIIgIAVQgKgHgHABQgGgBAAAFQAAADAFABIAHACQAWAFAAARQAAAPgLAIQgKAHgOAAQgSAAgOgHg");
	this.shape_2.setTransform(158.5,67.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcAqIAAhTIA3AAIAAAXIgZAAIAAAIIAXAAIAAAVIgXAAIAAAIIAbAAIAAAXg");
	this.shape_3.setTransform(150.6,67.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANAqIgZgrIgBAAIACAQIAAAbIgdAAIAAhTIAdAAIAaAtIABAAIgDgUIAAgZIAdAAIAABTg");
	this.shape_4.setTransform(141.5,67.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOAqIAAhTIAdAAIAABTg");
	this.shape_5.setTransform(133.6,67.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghAkIAJgYIACABQAJAIAKAAQAGAAAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBgBIgDgBIgHgBQgVgEAAgRQAAgOAMgJQAKgIANAAQAOAAANAIIgJAVQgKgHgHABQgGgBAAAFQAAADAFABIAHACQAWAFAAARQAAAPgLAIQgLAHgNAAQgRAAgPgHg");
	this.shape_6.setTransform(126.9,67.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglAHIAAgxIAdAAIAAAuQABAGABACQABAEAFAAQAFAAACgEQABgCAAgGIAAguIAeAAIAAAxQAAAkgmAAQglAAAAgkg");
	this.shape_7.setTransform(117.9,67.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjAqIAAhTIAjAAQAgAAAAAXQAAAOgLADIAAABQAPAEAAAPQAAAMgKAGQgIAFgNAAgAgHAWIAEAAQALAAAAgHQAAgHgMAAIgDAAgAgHgJIADAAQAIAAAAgGQAAgEgDgBIgGgBIgCAAg");
	this.shape_8.setTransform(108.6,67.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnAqIAAhTIAfAAQAwAAAAAqQAAASgMAMQgLALgSAAgAgJARIACAAQARAAAAgQQAAgQgRAAIgCAAg");
	this.shape_9.setTransform(93.7,67.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggAfQgNgLAAgTQAAgTANgMQANgMATAAQATAAAOAMQANAMAAATQAAATgNALQgNAMgUAAQgTAAgNgMgAgLgJQgEAEAAAGQAAAHAFAEQAEAFAGAAQAHAAAEgFQAFgEAAgHQAAgGgEgEQgFgGgHAAQgGAAgFAGg");
	this.shape_10.setTransform(83.1,67.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AggAfQgNgLAAgTQAAgTANgMQANgMATAAQAUAAANAMQANAMAAATQAAATgNALQgNAMgUAAQgTAAgNgMgAgKgJQgFAEAAAGQAAAHAFAEQAEAFAGAAQAHAAAEgFQAFgEAAgHQAAgGgFgEQgEgGgHAAQgGAAgEAGg");
	this.shape_11.setTransform(72.3,67.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbAqIAAhTIA3AAIAAAYIgZAAIAAAJIAWAAIAAAUIgWAAIAAAeg");
	this.shape_12.setTransform(63.3,67.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgcAqIAAhTIA4AAIAAAXIgZAAIAAAIIAWAAIAAAVIgWAAIAAAIIAZAAIAAAXg");
	this.shape_13.setTransform(50.1,67.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAEAqIgMgbIAAAAIAAAbIgeAAIAAhTIAkAAQAiAAAAAdQAAAQgQAFIAAABQAEACABADIASAbgAgIgEIACAAQAJAAAAgHQAAgHgJAAIgCAAg");
	this.shape_14.setTransform(42,67.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAqIAAhTIAdAAIAABTg");
	this.shape_15.setTransform(34.4,67.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgjAqIAAhTIAlAAQAPAAAKAIQAJAIAAAPQAAAMgHAHQgIAIgMAAIgPAAIAAAZgAgGgDIADAAQAKAAAAgIQAAgHgKAAIgDAAg");
	this.shape_16.setTransform(27.6,67.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AghAkIAJgYIABABQALAIAIAAQAHAAAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBgBIgDgBIgGgBQgWgEAAgRQAAgOAMgJQAKgIANAAQAOAAAMAIIgIAVQgKgHgHABQgGgBAAAFQAAADAFABIAHACQAWAFAAARQAAAPgLAIQgLAHgNAAQgRAAgPgHg");
	this.shape_17.setTransform(18.8,67.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AANAqIgagrIgBAAIACAQIAAAbIgdAAIAAhTIAdAAIAbAtIAAAAIgCgUIAAgZIAdAAIAABTg");
	this.shape_18.setTransform(9.4,67.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOAqIAAhTIAdAAIAABTg");
	this.shape_19.setTransform(1.5,67.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170.1,71.5);


(lib.Indonesiawishes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgICNQgDgDAAgHQAAgHAEgCQAEgDADAAQAFABADAEQAEADAAAFQAAAGgEADQgEADgEAAQgEAAgEgDgAgIBJQgDgCAAgDIABjNQADgFADgBIAEAAIAFACIACADIAAAwIgBA4IAAA3IACAwQgBAEgDACIgGABg");
	this.shape.setTransform(398.4,26.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AA2BmQgDgBgBgDQgEgHgCgLIgBgZIAAgZQAAgNgCgJQgQAkgOATQgNAUgMAIQgMAJgJgBQgKgBgHgGQgGgGgEgJQgEgIAAgIQgDgNADgTQACgSAFgSQAGgUAJgSQAJgTALgOQALgNAMgHQAGgDAGgBQAHAAAHACIALAAQAFABADAEQADAEABAHIACARQAAAhACAXIAGAoIAHAgQADAOABAQQAAAFgDADQgDADgDABIgDAAIgDgBgAANhTQgKACgIAKQgKAKgIARQgJAQgGASQgGASgDASQgDASACAOQAFAQAHADQAGADAIgFQAIgGAIgLIAPgZIANgbIAKgWIgBg5QgIgKgIAAIgCAAg");
	this.shape_1.setTransform(387.1,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AgBCPQgDgDAAgFIgFjKIAFgCIAEgBIAFACIAEAEIABAvIABA0IACA0IABAwQAAAFgDADQgDACgDAAQgEAAgCgCgAgEh5QgEgBgCgEQgDgEAAgGQAAgFADgCIAHgBQAHAAACAFQABAFAAAHQgCAEgDABIgEABIgCAAg");
	this.shape_2.setTransform(376.5,27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("Ag4BnQgHgHgBgGQAAgHAJgEQAHAFAJABQAKAAAKgDQALgDAJgFIAUgNQAJgHAHgIQAHgHACgHQACgHgCgGQgDgGgKgDIgiAGQgRADgOgDQgOgCgIgJQgJgIABgSQABgSAJgQQAIgPAOgLQANgLARgGQAQgGARABIAGABIAFABIAEADIABAGQgBAFgDADQgDADgGAAQgUgEgQAGQgQAFgKALQgLAKgEANQgFANADALQAHAMAKADQALADAMgBIAXgDQAMgDAKABQAKABAGAGQAHAGAAASQAAALgHALQgHAKgLAJQgLAJgOAIQgOAHgMAFQgOAFgMABIgKABIgJgBg");
	this.shape_3.setTransform(366.3,30.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AACBmQgIAAgHgDQgHgCgFgFQgKgKgGgOQgGgOgDgPIgFgcQgCADgGgBIgLgDQgFgCgCgDQgBgEAFgEIAGgCIAFgCIAFgDQACgBAAgEIADggQACgQAGgMQAHgNALgIQALgHATACQAGAAAJADQAIADAIAFQAIAGAGAHQAGAHABAJQACADgFAGIgOALIgVANIgVAMIgTAKIgLAGIAEAcQADAOAEANQAFAMAGAIQAHAIAJAAQAPABALgGQALgFAHgJQAHgJAFgKIAGgVIADgQIACgHQADgBAFABQAFACABAIQAAANgGARQgGARgLAPQgLAOgPAJQgHAEgIACIgIABIgIgBgAgLhTQgHABgFAGQgGAGgDAIQgEAJgBALQgBALABALIBHgpQgLgPgLgEQgIgDgIAAIgHAAg");
	this.shape_4.setTransform(350.3,30.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AA2BnIgBgWIAAglIgCgrQgCgVgDgTQgEgTgGgNQgHgNgJgBQgJgCgIALQgHAKgIASQgHARgGAWIgMAqIgIAnIgEAbQgBADgDACIgHACIgHgBQgEgCgCgEIAAjGQABgEACgCIAFgCIAHAAIAFAEIgBCHIAMgvQAFgYAIgUQAIgUALgMQAHgHAHgEQAHgDALgBQAKgBAIAHQAIAIAFAMQAGANADARIAGAjIAEAkIACAiIAAAcIgBARQgCAGgGACIgDAAQgFAAgDgFg");
	this.shape_5.setTransform(333.8,30.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgRBoQgNgCgJgJQgJgJgFgOQgFgNgCgQQgBgQABgPQABgXAHgVQAIgWALgQQAMgQAOgIQANgJANACQAOACAJALQAIAMAFAQQAFAQABAUQABATgBARQgCAUgHARQgHASgLANQgLAMgOAHQgLAHgNAAIgCAAgAgFhMQgJAIgIAOQgIAOgFARQgFASgCAQIgBAZQABANADALQACAKAHAHQAGAHALAAQAIAAAJgGQAJgGAIgLQAIgKAHgNQAGgOACgOQADgNgCgQQgBgQgEgNQgEgNgGgKQgGgKgJgCIgDAAQgJAAgIAHg");
	this.shape_6.setTransform(318.1,30.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AAtCZQgEgCgBgGIAChKIgLATQgIAMgKAKQgKAKgKAHQgMAHgNAAIgJgCIgFgEIgFgGIgFgJQgDgRAAgVQgBgUAEgWQAEgVAHgSQAHgTAMgOQAGgHAHgFQAHgFAHgDQAJgDAJAAQAKAAALACQACgVgCgWIgDgtQAAgEAEgBIAHgCIAHAAIAFABIgBA4IAAAxIAAAsIAAAqIABAvIAAA2QABAFgCAEQgDAEgDABIgDAAQgCAAgDgBgAABggQgKAJgJAQQgJAOgGAUQgGATgBASQgCASADAOQADAPAJAFQAJAAAIgGQAIgGAGgJQAIgJAGgMIALgWIAIgUIACgOIAAgNIgBgTQgBgKgDgHQgDgIgFAAIgFAAQgKAAgKAHg");
	this.shape_7.setTransform(303.4,27.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#464646").s().p("AA2BnIgBgWIAAglIgCgrQgCgVgDgTQgEgTgGgNQgHgNgJgBQgJgCgIALQgHAKgIASQgGARgHAWIgMAqIgIAnIgEAbQgBADgDACIgHACIgHgBQgEgCgCgEIAAjGQAAgEADgCIAFgCIAHAAIAFAEIgBCHIAMgvQAFgYAHgUQAIgUAMgMQAHgHAHgEQAHgDALgBQAKgBAIAHQAIAIAFAMQAGANADARIAGAjIAEAkIACAiIAAAcIgBARQgDAGgFACIgDAAQgFAAgDgFg");
	this.shape_8.setTransform(288,30.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#464646").s().p("AAACRIgEgDIgIkcIAFgDIAGgBIAFACIAEAEIAFEXQAAAEgCABIgFADg");
	this.shape_9.setTransform(276.4,26.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#464646").s().p("AhcBvQgDgBgBgDIgCgWIgBgjIgBgqIgBgqIgCgmIgEgdQAAgIAGgCQAFgBAHACIAEAuIACAlIABAbIACATIAJg1QAEgWAFgOQAFgOAGgHQAFgHAHgBQAGAAAGAKQAFAKAFAQIAIAjIAGAiIASg2QAIgUAGgLQAFgKAFgDQAFgDAHABQAIAAAFAHQAFAGACALIAEAaIACAfIADAfIAEAgQADAPAGANQAFANAKAIIgIAKQgEAFgEgDQgKgHgGgPQgGgQgEgUQgDgTgCgWIgDgmIgDgdQgCgMgCAAQgKgCgLAhQgKAggRA/IgDAGIgFACIgFgBIgEgEIgIgyIgGgpIgFgeQgDgLgEgBQgDgBgDAIIgFAUIgGAeIgGAlIgGApIgIArIgEAEIgGABg");
	this.shape_10.setTransform(243.7,30.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#464646").s().p("AgRBoQgNgCgJgJQgJgJgFgOQgFgNgCgQQgBgQABgPQABgXAHgVQAIgWALgQQAMgQAOgIQANgJANACQAOACAJALQAIAMAFAQQAFAQABAUQABATgBARQgCAUgHARQgHASgLANQgLAMgOAHQgLAHgNAAIgCAAgAgFhMQgJAIgIAOQgIAOgFARQgFASgCAQIgBAZQABANADALQACAKAHAHQAGAHALAAQAIAAAJgGQAJgGAIgLQAIgKAHgNQAGgOACgOQADgNgCgQQgBgQgEgNQgEgNgGgKQgGgKgJgCIgDAAQgJAAgIAHg");
	this.shape_11.setTransform(225.1,30.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#464646").s().p("Ag4BnQgDgCgCgEIgBhQIgBg1IgBgiIAAgSIAAgHIAAgBQAAgDADgCIAGgDIAFABQAEABABADIABBPQADgMAEgKQAEgJAGgIQALgQAPgJQANgJAQgDQAPgDANADQAFABACADQACACAAAEQAAADgBADIgFAEQgPgBgOAEQgNADgMAHQgKAHgIAKQgJAJgEALQgIAPgCAQIgDAiIAAAgIAAAaQgBAEgDACIgGACg");
	this.shape_12.setTransform(212.7,30.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#464646").s().p("AgLCUQgDgCgBgEIgIiOIgiAOQgHAAgDgBQgDgCAAgDIABgFIADgEIApgTIgCgvQAAgXAEgTQAEgTAKgLQAJgKAQACQAIAAAHAFQAIAFAFAIQAFAIADAJQAEAKAAAHQgBADgCACIgEADIgFAAIgEgCQgBgMgDgIQgDgIgEgFQgDgEgEgCIgHgCQgLABgEAHQgFAIgCANQgCAOAAATIACAqIBJgbQADADACADQABAEgFAHIhJAeIAJCUQAAADgDACIgFACIgCAAIgEgBg");
	this.shape_13.setTransform(198.1,26.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#464646").s().p("Ag4BnQgHgHgBgGQAAgHAJgEQAHAFAJABQAKAAAKgDQALgDAJgFIAUgNQAJgHAHgIQAHgHACgHQACgHgCgGQgDgGgKgDIgiAGQgRADgOgDQgOgCgIgJQgJgIABgSQABgSAJgQQAIgPAOgLQANgLARgGQAQgGARABIAGABIAFABIAEADIABAGQgBAFgDADQgDADgGAAQgUgEgQAGQgQAFgKALQgLAKgEANQgFANADALQAHAMAKADQALADAMgBIAXgDQAMgDAKABQAKABAGAGQAHAGAAASQAAALgHALQgHAKgLAJQgLAJgOAIQgOAHgMAFQgOAFgMABIgKABIgJgBg");
	this.shape_14.setTransform(165.2,30.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#464646").s().p("AACBmQgIAAgHgDQgHgCgFgFQgKgKgGgOQgGgOgDgPIgFgcQgCADgGgBIgLgDQgFgCgCgDQgBgEAFgEIAGgCIAFgCIAFgDQACgBAAgEIADggQACgQAGgMQAHgNALgIQALgHATACQAGAAAJADQAIADAIAFQAIAGAGAHQAGAHABAJQACADgFAGIgOALIgVANIgVAMIgTAKIgLAGIAEAcQADAOAEANQAFAMAGAIQAHAIAJAAQAPABALgGQALgFAHgJQAHgJAFgKIAGgVIADgQIACgHQADgBAFABQAFACABAIQAAANgGARQgGARgLAPQgLAOgPAJQgHAEgIACIgIABIgIgBgAgLhTQgHABgFAGQgGAGgDAIQgEAJgBALQgBALABALIBHgpQgLgPgLgEQgIgDgIAAIgHAAg");
	this.shape_15.setTransform(149.1,30.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#464646").s().p("AA/CSQgDgCgCgFIACgeIABgmIgCgoIgDgkQgCgQgEgLQgDgLgFgBQgLgDgKAFQgLAFgIAMQgIALgIAPIgOAiIgLAjIgIAgIgFAZIgBAOIgGABIgHABIgGAAQgCgBAAgEIgGkYQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBABAAIAGAAIAGABIAEADIACDXIAFgTIAJgdIAMggQAIgRALgNQAKgOAOgIQAPgHAUABQAGAEAFAFQAFAFAEAKQAEAJACAOIAFAjIAEA0IABBGIgEAFIgHADIgCAAIgFgBg");
	this.shape_16.setTransform(131.9,26.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#464646").s().p("Ag4BnQgHgHgBgGQAAgHAJgEQAHAFAJABQAKAAAKgDQALgDAJgFIAUgNQAJgHAHgIQAHgHACgHQACgHgCgGQgDgGgKgDIgiAGQgRADgOgDQgOgCgIgJQgJgIABgSQABgSAJgQQAIgPAOgLQANgLARgGQAQgGARABIAGABIAFABIAEADIABAGQgBAFgDADQgDADgGAAQgUgEgQAGQgQAFgKALQgLAKgEANQgFANADALQAHAMAKADQALADAMgBIAXgDQAMgDAKABQAKABAGAGQAHAGAAASQAAALgHALQgHAKgLAJQgLAJgOAIQgOAHgMAFQgOAFgMABIgKABIgJgBg");
	this.shape_17.setTransform(115.2,30.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#464646").s().p("AgBCPQgDgDAAgFIgFjKIAFgCIAEgBIAFACIAEAEIABAvIABA0IACA0IABAwQAAAFgDADQgDACgDAAQgEAAgCgCgAgEh5QgEgBgCgEQgDgEAAgGQAAgFADgCIAHgBQAHAAACAFQABAFAAAHQgCAEgDABIgEABIgCAAg");
	this.shape_18.setTransform(104.9,27);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#464646").s().p("Ag/BpIgEgDIgDgVIgFgjIgGgrIgHgpIgFgjIgEgVQABgFADgEQADgCADAAIAGABIAFAGIAVCbIAEgQIAHgZIAIgeIAJgeIAHgaIAEgPIAGgFIAHgDQADAAADABQAEACACAFIAwCdIAUipIAEgGQADgCADAAQADABADADQACADADAJIgCALIgDAVIgDAcIgEAgIgFAgIgDAcIgDAVIgBALQgDAFgEADQgFACgEAAQgFAAgEgCQgDgDgBgEIgvicIgNA0IgMAqIgKAkIgJAeQgCAEgDABIgGABg");
	this.shape_19.setTransform(91.6,30.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#464646").s().p("AgQCQIgFikIgfAKQgEgBgCgCIgEgGIgBgGQABgDACgBIAngPIAAhgQABgFADgCQAEgCADAAQAEAAADADQADACAAADIAAAXIgBAXIABAXIAAAUIA1gVQAFgBACACQADACABAEQABADgCAEQgBADgDABIg7AbIAAAQIABAeIABAlIAAAlIAAAeIABARQgBALgFAAQgGAAgHgGg");
	this.shape_20.setTransform(58.7,27);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#464646").s().p("Ag4BnQgHgHgBgGQAAgHAJgEQAHAFAJABQAKAAAKgDQALgDAJgFIAUgNQAJgHAHgIQAHgHACgHQACgHgCgGQgDgGgKgDIgiAGQgRADgOgDQgOgCgIgJQgJgIABgSQABgSAJgQQAIgPAOgLQANgLARgGQAQgGARABIAGABIAFABIAEADIABAGQgBAFgDADQgDADgGAAQgUgEgQAGQgQAFgKALQgLAKgEANQgFANADALQAHAMAKADQALADAMgBIAXgDQAMgDAKABQAKABAGAGQAHAGAAASQAAALgHALQgHAKgLAJQgLAJgOAIQgOAHgMAFQgOAFgMABIgKABIgJgBg");
	this.shape_21.setTransform(46,30.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#464646").s().p("AACBmQgIAAgHgDQgHgCgFgFQgKgKgGgOQgGgOgDgPIgFgcQgCADgGgBIgLgDQgFgCgCgDQgBgEAFgEIAGgCIAFgCIAFgDQACgBAAgEIADggQACgQAGgMQAHgNALgIQALgHATACQAGAAAJADQAIADAIAFQAIAGAGAHQAGAHABAJQACADgFAGIgOALIgVANIgVAMIgTAKIgLAGIAEAcQADAOAEANQAFAMAGAIQAHAIAJAAQAPABALgGQALgFAHgJQAHgJAFgKIAGgVIADgQIACgHQADgBAFABQAFACABAIQAAANgGARQgGARgLAPQgLAOgPAJQgHAEgIACIgIABIgIgBgAgLhTQgHABgFAGQgGAGgDAIQgEAJgBALQgBALABALIBHgpQgLgPgLgEQgIgDgIAAIgHAAg");
	this.shape_22.setTransform(30,30.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#464646").s().p("AhSCSIgCgBIgCAAIABkAIgDgKIAAgKIABgEIACgDIADgCIAFABIAFAEIADAGIADAGIABAFIAVgLIAXgJIAXgGQANgCALABIAJACIAJAEIAHAGQADAEgBAFQAAAJgEAKIgKAUIgOATIgPASIgMAPIgKAMQALgFAPgDQAQgDAPABQAPABAMAGQAGAEAEAFQAFAFACAHQABAIgFALQgEAMgJAMQgIALgLANIgXAXIgZAVIgVAQIgTALQgHAEgEgBIgIgOQACABAJgGIAWgQIAagWIAcgZQANgNAJgMQAJgMABgJQACgKgIgGQgIgFgOAAQgOAAgQAFQgQAEgPAGQgPAIgMAJQgLAKgDAKIgBAWIgBAXIAAAXIgCAVIgDAMQgBAEgFAAIgEAAgAgIh7IgTAFQgKADgIAFQgIAFgFAHQgFAGgBAIIgCASIAAAVIABAWIACASIARgOIAXgVIAXgYQALgNAIgMQAIgLACgKQACgKgHgGIgPAAg");
	this.shape_23.setTransform(11.9,26.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,403.6,54.8);


(lib.Indonesialogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020203").s().p("AgdBOQgOgFgKgJQgKgKgGgNQgGgNAAgQQAAgMAEgMQAFgLAJgJIgOAAIAAgzICPAAIAAAzIgQAAQAUAQAAAcQAAAPgFANQgGANgLAKQgKAKgOAFQgOAGgQAAQgPAAgOgGgAgMgfQgGADgEAEQgFAFgCAFQgDAGAAAHQAAAGADAHQACAFAFAEQAEAFAGADQAGACAGAAQAHAAAGgCQAGgDAEgFQAEgEADgFQADgHAAgGQAAgHgDgGQgDgFgEgFQgEgEgGgDQgGgDgHABQgGgBgGADg");
	this.shape.setTransform(478.2,42.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020203").s().p("AgxAwIAAgQIgsAAIAAgyIAsAAIAAgdIAqAAIAAAdIBlAAIAAAyIhlAAIAAAQg");
	this.shape_1.setTransform(476,59);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#020203").s().p("AhFA2IAAgzIAXAAQgNgHgHgMQgDgGgCgGQgBgHAAgIIAAgFIAAgFIAwAAQgFAKAAAMQAAASALAIQAKAIAUAAIA9AAIAAAzg");
	this.shape_2.setTransform(478,72.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#020203").s().p("AgdBPQgOgGgKgJQgKgKgGgNQgGgNAAgQQAAgMAEgMQAFgLAJgJIgOAAIAAgyICPAAIAAAyIgQAAQAUAQAAAbQAAAQgFANQgGAOgLAJQgKAKgOAGQgOAEgQAAQgPAAgOgEgAgMgfQgGADgEAEQgFAFgCAFQgDAHAAAHQAAAGADAFQACAHAFADQAEAFAGACQAGADAGAAQAHAAAGgDQAGgCAEgFQAEgDADgHQADgFAAgGQAAgHgDgHQgDgFgEgFQgEgEgGgDQgGgCgHgBQgGABgGACg");
	this.shape_3.setTransform(478.2,90.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#020203").s().p("AhzBZIAAgzICLAAIgyg0IAAhFIBBBIIBNhNIAABIIg6A2IA6AAIAAAzg");
	this.shape_4.setTransform(473.7,109.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#020203").s().p("AgdBPQgOgGgKgJQgKgKgGgNQgGgNAAgQQAAgMAEgMQAFgLAJgJIgOAAIAAgyICPAAIAAAyIgQAAQAUAQAAAbQAAAQgFANQgGAOgLAJQgKAKgOAGQgOAEgQAAQgPAAgOgEgAgMgfQgGADgEAEQgFAFgCAFQgDAHAAAHQAAAGADAFQACAHAFADQAEAFAGADQAGACAGAAQAHAAAGgCQAGgDAEgFQAEgDADgHQADgFAAgGQAAgHgDgHQgDgFgEgFQgEgEgGgDQgGgCgHAAQgGAAgGACg");
	this.shape_5.setTransform(478.2,131.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#020203").s().p("AApAaQAJgBAGgFQAFgFAAgHQAAgIgGgCQgGgEgMAAIiRAAIAAg3ICSAAIARABIANADQAJAEAIAGQAHAGAFAJQAGAJACAKQADAJAAALQAAAigeAVg");
	this.shape_6.setTransform(475.1,151);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AibTgQgYAAgQgRQgQgQAAgWMAAAglQQAAgXAQgRQAQgQAYAAIE3AAQAYAAAQAQQAQARAAAXMAAAAlQQAAAWgQAQQgQARgYAAg");
	this.shape_7.setTransform(474.5,95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah0FKQgngRgcgfQgdgegQgpQgQgpAAgwQAAgtAPgoQAPgoAcgfQAcgeAngRIAogNIAtgFQAnAAAgAOQAhANAaAcIAAkuICVAAIAAKoIiVAAIAAgvQgwA8hQAAQguAAgmgRgAggAjQgRAIgNANQgNANgIARQgHAQAAAUQAAAVAHARQAIASAMANQANANARAIQASAHAUAAQAUAAARgHQASgIANgNQAMgNAIgRQAIgRAAgUQAAgUgIgRQgIgSgMgNQgNgNgSgIQgRgHgUAAQgTAAgSAHg");
	this.shape_8.setTransform(418.2,147.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhlDSIgsgVIgkgaQghgegTgrQgJgVgFgXQgEgYgBgYQABgYAEgVQAFgXAJgUQANgbAngsQAjgeAugRQAugRA2AAQAkAABAARQAvARAhAdQAjAfASApQAUAqgBAwQABAZgFAYQgFAWgKAVQgTApgiAfQghAdgvARQgwAQg1AAQg3AAgtgQgAgkhZQgSAIgMANQgOANgHARQgIASAAATQAAAVAIARQAHARAOAOQAMANASAHQARAIATgBQATABASgIQASgHANgNQAMgOAIgRQAIgSAAgTQAAgUgIgSQgIgRgMgNQgNgNgSgIQgSgHgTAAQgTAAgRAHg");
	this.shape_9.setTransform(357.5,159.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhmDSIgrgVIgkgaQghgegTgrQgJgVgFgXQgFgYAAgYQAAgYAFgVQAFgXAJgUQANgbAngsQAigeAvgRQAugRA2AAQAkAABBARQAuARAhAdQAjAfASApQAUAqgBAwQABAZgFAYQgFAWgKAVQgTApgiAfQgiAdguARQgwAQg2AAQg2AAgugQgAgkhZQgSAIgMANQgNANgIARQgIASAAATQAAAVAIARQAIARANAOQAMANASAHQARAIATgBQATABATgIQARgHANgNQAMgOAIgRQAIgSAAgTQAAgUgIgSQgIgRgMgNQgNgNgRgIQgTgHgTAAQgTAAgRAHg");
	this.shape_10.setTransform(296,159.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhiFZIAAkpIg2AAIAAh7IA2AAIAAg/QAAg0AJggQAJgaASgWQASgXAYgQQAXgRAcgJQAcgJAbAAIAjAEIAgAMIAACBIgbgLIgbgEIgTADQgJADgIAJQgIAJgDARIgDAtIAAA1IBoAAIAAB7IhoAAIAAEpg");
	this.shape_11.setTransform(246.7,146.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AidDXIAAmkICVAAIAABFQAWgmAjgUQARgKAUgFQAUgFAXAAIANAAIAQACIAACNQgegOgiAAQg0AAgaAeQgYAfAAA6IAAC1g");
	this.shape_12.setTransform(207,159.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhZDSQg2gagVgTQgggegRgpQgRgpAAgyQAAgjAQg8QARgqAegeQAegdArgQQArgQA2AAQA1AAAqAQIAoATQASAMAPAPQAdAfAQArQAPA/AAAjIAAAQIk3AAQAAAwAWAYQAXAYAsAAQAwAAAZgoICQAAQgWBJg3AkQg2AkhXAAQhDgFgegLgABdg8QgIgfgXgTQgXgTggAAQgiAAgWASQgWASgFAhICpAAIAAAAg");
	this.shape_13.setTransform(155.6,159.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhbESIAAkoIgxAAIAAh9IAxAAIAAh9ICUAAIAAB9IBUAAIAAB9IhUAAIAAEog");
	this.shape_14.setTransform(109.6,153.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABJDXIAAjUQAAgfgEgTQgFgTgLgMQgKgKgMgEIgbgEQgkAAgUAXQgKALgGAQQgEAQAAAVIAADgIiVAAIAAmkICVAAIAAA1QAeglAfgMQAegNAqAAQAsAAAgAPQAfAOAXAaQASAVAGAbQAHAaAAAhIAAELg");
	this.shape_15.setTransform(62.4,159.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhPE1IAAppICfAAIAAJpg");
	this.shape_16.setTransform(16.6,149.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhTBeIAZgwQAOAMAMAGQANAFANABQANgBAIgGQAHgGAAgJQAAgFgCgEQgCgEgEgDIgLgFIgQgHIgVgIQgLgEgJgHQgJgHgFgLQgFgLAAgQQAAgRAFgNQAGgOAKgKQAKgKAOgFQAPgGARABQARgBASAFQATAFAQAJIgXAuQgKgIgJgEQgKgDgJgBQgLAAgGAGQgIAFAAAJQAAAGAEAEQADADAGADIAMAGIAPAEQAdAJANAPQAHAJADAKQADAKABAOQgBARgFAOQgGAOgMAKQgKAKgRAGQgXAFgNAAQgrAAglgZg");
	this.shape_17.setTransform(432.6,208.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhSBeIAZgwQANAMANAGQANAFAMABQAOgBAHgGQAHgGAAgJQAAgFgCgEQgCgEgEgDIgLgFIgPgHIgXgIQgLgEgIgHQgJgHgFgLQgFgLAAgQQAAgRAGgNQAFgOAKgKQAKgKAPgFQAOgGARABQARgBASAFQASAFARAJIgXAuQgJgIgKgEQgKgDgJgBQgMAAgFAGQgIAFAAAJQAAAGAEAEQAEADAEADIAOAGIAOAEQAdAJANAPQAHAJADAKQADAKAAAOQABARgGAOQgGAOgLAKQgLAKgRAGQgXAFgNAAQgrAAgkgZg");
	this.shape_18.setTransform(411.5,208.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag/BxIAAjhICAAAIAAAyIhGAAIAAAlIBBAAIAAAxIhBAAIAAAnIBGAAIAAAyg");
	this.shape_19.setTransform(391.7,208.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA3BxIhsiKIAACKIg7AAIAAjhIA7AAIBsCJIAAiJIA6AAIAADhg");
	this.shape_20.setTransform(367.5,208.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgcBxIAAjhIA5AAIAADhg");
	this.shape_21.setTransform(346.8,208.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhTBeIAagwQANAMANAGQANAFAMABQAOgBAHgGQAHgGAAgJQAAgFgCgEQgCgEgEgDIgLgFIgPgHIgXgIQgKgEgJgHQgIgHgGgLQgFgLAAgQQAAgRAGgNQAFgOAKgKQAKgKAOgFQAPgGARABQARgBASAFQASAFARAJIgXAuQgJgIgKgEQgKgDgJgBQgMAAgFAGQgIAFAAAJQAAAGAEAEQAEADAEADIAOAGIAOAEQAdAJANAPQAHAJADAKQAEAKAAAOQAAARgGAOQgGAOgMAKQgKAKgRAGQgXAFgNAAQgrAAglgZg");
	this.shape_22.setTransform(330.1,208.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgqBuQgTgGgMgMQgMgMgHgUQgGgTAAgaIAAiCIA7AAIAAB5IABAVQABAKADAJQAEAIAIAFQAIAFAOAAQAPAAAIgFQAIgFAEgIQAEgJAAgKIABgVIAAh5IA7AAIAACCQAAAagHATQgGAUgMAMQgYAYgyAAQgYAAgSgGg");
	this.shape_23.setTransform(306.4,208.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhVBxIAAjhIBXAAQAfAAAQAPQAQAPAAAcQAAARgGALQgGAMgNAHQANADAJAEQAJAEAFAIQAGAHACAJQACAJAAAKQAAAQgFAMQgGANgKAIQgKAIgOAFQgPAEgSAAgAgaBEIANAAQAVgBAJgFQAFgDADgFQACgFAAgFQAAgNgKgGQgEgDgIgBIgSgCIgNAAgAgagYIALAAQAaAAAAgVQAAgLgHgGQgGgFgNAAIgLAAg");
	this.shape_24.setTransform(282.7,208.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhiBxIAAjhIBXAAQALAAAKACQALACAKAFQAVAKAPAPQAPAPAJAVQAIAUAAAWQAAAWgIAVQgFAKgFAJQgGAJgIAIQgPAPgUAKQgVAJgWAAgAgnA/IANAAQAQAAALgEQAMgGAIgIQAIgIAEgLQAFgMAAgOQAAgMgFgNQgEgLgIgJQgJgIgMgEQgLgGgPABIgNAAg");
	this.shape_25.setTransform(246.7,208.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgaB1QgMgCgMgFQgLgFgKgGQgKgGgIgJQgIgHgHgKQgGgJgFgLQgJgWAAgZQAAgLACgNQACgLAFgLQAJgWARgQQAIgIAKgHQAKgFALgFQAMgFAMgDQANgBANAAQAbgBAXAKQAMAFAKAFQAKAHAIAIQARAQAJAWQAFALACALQACANAAALQAAAMgCAMQgCAMgFALQgFALgGAJQgHAKgIAHQgRARgXAJQgXAJgbAAQgNAAgNgCgAgYg5QgLAEgJAJQgIAIgGAMQgFAMAAAMQAAANAFAMQAGALAIAIQAJAJALAEQAMAGAMgBQANABALgGQAMgEAJgJQAJgIAFgLQAFgMAAgNQAAgMgFgMQgFgMgJgIQgJgJgMgEQgLgEgNgBQgMABgMAEg");
	this.shape_26.setTransform(218.8,208.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgaB1QgMgCgMgFQgLgFgKgGQgKgGgIgJQgIgHgHgKQgGgJgFgLQgJgWAAgZQAAgLACgNQACgLAFgLQAJgWARgQQAIgIAKgHQAKgFALgFQAMgFAMgDQANgBANAAQAbgBAXAKQAMAFAKAFQAKAHAIAIQARAQAJAWQAFALACALQACANAAALQAAAMgCAMQgCAMgFALQgFALgGAJQgHAKgIAHQgRARgXAJQgXAJgbAAQgNAAgNgCgAgYg5QgLAEgJAJQgIAIgGAMQgFAMAAAMQAAANAFAMQAGALAIAIQAJAJALAEQAMAGAMgBQANABALgGQAMgEAJgJQAJgIAFgLQAFgMAAgNQAAgMgFgMQgFgMgJgIQgJgJgMgEQgLgEgNgBQgMABgMAEg");
	this.shape_27.setTransform(189.3,208.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhABxIAAjhICBAAIAAAyIhGAAIAAAlIA/AAIAAAxIg/AAIAABZg");
	this.shape_28.setTransform(166.2,208.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag/BxIAAjhIB/AAIAAAyIhFAAIAAAlIBCAAIAAAxIhCAAIAAAnIBFAAIAAAyg");
	this.shape_29.setTransform(135.3,208.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAVBxIg3hXIAABXIg7AAIAAjhIBbAAQASAAAOAFQAPAGAJAKQAJAJAFAMQAEANAAAOQAAAOgDAKQgDAKgGAJQgNAPgYAFIBHBdgAgigLIALAAQARAAAJgHQAEgEADgFQACgFAAgHQAAgHgCgFQgDgFgEgEQgJgHgRAAIgLAAg");
	this.shape_30.setTransform(115.3,208.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgcBxIAAjhIA5AAIAADhg");
	this.shape_31.setTransform(96.5,208.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhVBxIAAjhIBdAAQATAAAOAFQAPAEAKALQAUATAAAlQAAAkgUASQgKAKgPAFQgOAFgTAAIgiAAIAABLgAgagJIATAAQAgAAAAgbQAAgPgIgGQgJgIgPAAIgTAAg");
	this.shape_32.setTransform(80.1,208.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhTBeIAZgwQAOAMANAGQAMAFANABQANgBAIgGQAHgGAAgJQAAgFgCgEQgCgEgEgDIgLgFIgQgHIgVgIQgLgEgJgHQgJgHgFgLQgFgLAAgQQAAgRAFgNQAGgOAKgKQAKgKAOgFQAPgGARABQARgBASAFQATAFAQAJIgXAuQgKgIgJgEQgKgDgJgBQgLAAgHAGQgHAFAAAJQAAAGAEAEQADADAGADIAMAGIAPAEQAdAJANAPQAHAJADAKQADAKABAOQgBARgFAOQgGAOgMAKQgKAKgRAGQgXAFgNAAQgrAAglgZg");
	this.shape_33.setTransform(57.7,208.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AA3BxIhsiKIAACKIg7AAIAAjhIA7AAIBsCJIAAiJIA6AAIAADhg");
	this.shape_34.setTransform(32.6,208.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgdBxIAAjhIA6AAIAADhg");
	this.shape_35.setTransform(11.9,208.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("EgggAJZIgOgFIAFgOQAYg/AYgfQAggrArAAQAOAAAKAEQB/ArCKAAQC9AABRhQQA0g0AAhLQAAhZhKgrQgugaiMggIgTgEQiHgeg8gRQhfgdg7glQiOhcAAiyQAAi0CIhgQCJhhEAAAQCcAACsAsIAQAEIgGAQQgbBLgbAfQgpAug8gOQhjgVhsAAQhtAAhBAWQh4AoAABuQAABiBhAvQA+AeDNApIAHABQC+AmBcA8QBdA/AYBrIDmAAIAAsZIAGgEQA9gsBLAAQAoAAApAMIAMAEIADM5IGbAAIFQqjQAphUA4grQA4grBDAAQApAAAlAPIAGADIGnM7IFxAAIAAsXIAGgFQA9gsBMAAQAnAAAqANIAKADIAEOoQAABlBOA1QBNA0CWAAQCNAAB4gqQAOgEAOAAQAqAAAhAsQAYAfAXA9IAFAOIgOAGQi2BHjwAAQi+AAh8g5QighLgmilIkWAAICDD/IkLAAIh9j+IpvgCIAHgWIBYizIGuAAIknpXIoEQgIjfAAIB/j/Ik1AAIAAEEIjvAAIAAkEIjoAAQglCmigBKQh8A6i/AAQjwAAi2hIg");
	this.shape_36.setTransform(225,37.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-29.8,495.8,259.4);


(lib.Indonesiaimg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.indonesia();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1400,750);


(lib.fondfin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.world();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1400,720);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhXCUIAAknICvAAIAAEng");
	mask.setTransform(8.8,14.8);

	// Calque 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhJCNIAAgGQAEAAABgHQABgGAEgBQgCgOALgXQgBgCACgEIADgHIADAAIAAgEQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAgBQACgLgCgJQADAAADgEQgCgHAAgFQAEgBACgEIAEgIQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAAAQgBgFAFAAQAEAAgBAFQAFABABADQADgCAAgHIAAgLIACguIADhVIALgGIALAGIADBVIABAtIABARIABABQABABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIAAAAIADgCQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAIACgHIADAAIABADQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIAEAJQACAEAEABQABAFgCAHIAFADIAAAVIADACQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAFACACAIQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABIAKAVQgCADACAGQABAFgBACIADAAIADAMIAEACIAAAGg");
	this.shape.setTransform(8.5,14.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Calque 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhXCUIAAknICvAAIAAEng");
	this.shape_1.setTransform(8.8,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,17.7,29.5), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmRDCIAAgmIACAAIAAgQIATAAIgBgHQAAgIABABIARAAIAAAPIATAAIAAAPIATAAIAAgJIAJAAIAAghIAMAAIAAgKIAKAAIAAAIIANAAIAAAZIA8AAIAAgNIAnAAIAAAHIAKAAIAAAHIARAAQgBgCAIgKIALgPIAOgUQAFgNgBgPQABgBAHAAQAPghAHg9QAEgnADhGIACgKQABgHgBgEQgFgHABgFQAAgCAGgHQAEgGgBgEQABAFAGAKQAFAIgGAHQAEBUAEAlQAHA/AQAoQAAAAAAABQAAAAABAAQAAAAABAAQABAAABAAQABAAAAAAQABAAABAAQAAAAAAAAQAAABAAAAQAAAXAPAUIAWAgIASAAIAAhhIAGAAIAAgLIADAAIAAgMIAGAAIAAgNIAKAAIAAANIAKAAIAAALIAGAAIAAAbQANABAAgBIAABCIAHAAIAAhKIAIAAIAAgLIADgDIAAgMIAPAAIAAANIAHAAIAAALIADAAIAAAIIAIAAIAABAIAJAAIAAAUIALAAIAAgtIAFAAIAAhRIALAAIAAgRIAzAAIAAAyIASAAIAABEIASAAIAAgiIAFAAIAAh3IAJAAIAAgHIATAAIAAAGIArAAIAACiIAJAAIAAAMIAJAAIAAgTIASAAIAAhnIAlAAIAAC3gAgeCKQgHgRgJgKQgMgMgRAAQgQAAgMANQgHAIgKASIBaAAIAAAAgAg8A+QgGgYgBgOIgPAAQgEAagDAMIAdAAIAAAAg");
	this.shape.setTransform(40.2,19.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0.1,80.3,38.8), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmHC/IAAgmIgJAAIAAgQIATAAIgBgHQAAgHABAAIARAAIAAAPIATAAIAAAPIATAAIAAgJIAJAAIAAghIAMAAIAAgKIAKAAIAAAIIANAAIAAAZIA8AAIAAgNIAnAAIAAAHIAKAAIAAAJIAkAAIAAjRIAIAAIAAgZIAIAAIAAAZIAIAAIAADRIAHAAIAAjRIAHAAIAAgZIAJAAIAAAZIAHAAIAADRIAXAAIAAi6IA/AAIAAC6IARAAIAAhNIAJAAIAAgTIAcAAIAAAMIAJAAIAAAHIAKAAIAABNIAIAAIAAi+IALAAQgDgSADgRQAGglAdgDIAPgQQAPgVAAgWIADgDIAAFHIASAAIAAiQIAiAAIAAAwIASAAIAABFIASAAIAAghIAFAAIAAh4IAJAAIAAgHIATAAIAAAGIARAAIAAgoIAaAAIAADLIAJAAIAAALIAJAAIAAgSIASAAIAAhnIAlAAIAAC2g");
	this.shape.setTransform(40.1,19.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,80.1,38.2), null);


(lib.CompoundPath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmRDWIAAgmIACAAIAAgQIATAAIgBgHQAAgIABAAIARAAIAAAQIATAAIAAAPIATAAIAAgJIAJAAIAAghIAMAAIAAgKIAKAAIAAAIIANAAIAAAZIA8AAIAAgNIAnAAIAAAHIAKAAIAAAIIACAAIAAAAIAHAAIAAgGIADAAIAVgqQgIgGAAgKQABgNAKgGIAAhrQgKgGAAgMQAAgHAFgGQAFgGAHgCIAAgJIgCAAIAAgBIACAAIAAgUQgDgCAAgEQAAgFAEgBIAAgZIABAAIAAgSIgCAAIAAgBIADAAIAAgcIABAAIAAgdIABAAIAAAdIAAAAIAAAcIACAAIAAABIgBAAIAAASIABAAIAAAZQAFACgBAEQAAAEgDACIAAAUIACAAIAAABIgCAAIAAAJQAHACAFAGQAFAGAAAHQAAAMgKAGIAABrQAKAHAAAMQAAAJgHAHIAXAqIABAAIAAAGIAZAAIAAkYIAxAAIAAEYIAZAAIAAgLIAZAAIAAh5IAYgWIAGAAIABAVIAZAZIAABsIAdAAIAAhrIATAAIAAgGIAOAAIAAgLIAuAAIAAALIASAAIAAAGIAQAAIAABrIARAAIAAg8IAFAAIAAh3IAJAAIAAgHIATAAIAAAGIALAAIAAByIAgAAIAAAwIAJAAIAAAMIAJAAIAAgTIASAAIAAgRIAlAAIAABhgAhfCZIgJgPIgJAKIAAADIAKAAIAAACIAIAAgAibCZIAIAAIAAgCIALAAIAAgDIgKgMgAhxCQIAJgJIgJgRgAiRCGIAJAKIAAgcgAgwhZIAWAAIAEgTIgfAAg");
	this.shape_1.setTransform(40.2,21.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, new cjs.Rectangle(0,0,80.3,42.8), null);


(lib.copieSymbole29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAuCXIhaiFIgJAAIAACFIghAAIAAktIArAAQAYAAASAEQARADARAJQAQAJAJARQAEAIACALQADAKAAAMQAAAjgVAXQgKAKgOAHQgOAGgQACIBfCHgAg1gKIALAAIAcgCQAMgCALgGQAMgFAGgLQAGgLAAgRQAAgPgEgKQgFgKgGgGQgGgGgLgDIgUgEIgYgBIgKAAg");
	this.shape.setTransform(245.6,27.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhNCXIAAktICbAAIAAAfIh6AAIAABaIB2AAIAAAeIh2AAIAAB3IB6AAIAAAfg");
	this.shape_1.setTransform(223.4,27.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhOCXIAAktIAxAAQAZAAARADQARADAPAKQARAMAIASQAJASAAAVQAAApgdAYQgMAJgSAFQgSAFgWAAIgZAAIAACEgAgtgMIAXAAQAhAAARgNQASgOAAgbQAAgOgFgKQgFgKgHgGQgHgFgLgDIgUgEIgXgBIgNAAg");
	this.shape_2.setTransform(203.4,27.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhNCXIAAktICbAAIAAAfIh5AAIAABaIB2AAIAAAeIh2AAIAAB3IB5AAIAAAfg");
	this.shape_3.setTransform(181.9,27.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhNCXIAAktICbAAIAAAfIh6AAIAABaIB3AAIAAAeIh3AAIAAB3IB6AAIAAAfg");
	this.shape_4.setTransform(160.6,27.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhvCXIAAktIA4AAQAaAAAnAIQANAEAOAHQANAHAMALQAyArAABGQAABFgxAsQgNALgNAHQgNAIgOAEQgaAIgnAAgAhOB4IAZAAQAeAAAXgHQAKgDALgHQAKgGAKgJQATgRAJgWQAKgWAAgbQAAg3gogiQgJgJgLgGQgKgGgKgDQgWgGgeAAIgZAAg");
	this.shape_5.setTransform(136.9,27.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA7CXIh6iLIgIAJIAACCIgiAAIAAktIAiAAIAACBIB/iBIAtAAIiNCNICSCgg");
	this.shape_6.setTransform(99.6,27.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhuBvQgXgXgLgcQgMgbAAghQAAgfAMgcQALgbAXgXQAuguBAAAQBBAAAuAuQAXAXAMAbQALAcAAAfQAAAhgLAbQgMAcgXAXQguAthBAAQhAAAgugtgAhWhXQgkAkAAAzQAAAaAJAWQAJAWASASQASASAWAKQAWAJAYAAQAaAAAWgJQAVgKATgSQAkglAAgzQAAgzgkgkQgkglg0AAQgzAAgjAlg");
	this.shape_7.setTransform(68.7,27.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhuBvQgXgXgLgcQgMgbAAghQAAgfAMgcQALgbAXgXQAuguBAAAQBBAAAuAuQAXAXAMAbQALAcAAAfQAAAhgLAbQgMAcgXAXQguAthBAAQhAAAgugtgAhWhXQgkAkAAAzQAAAaAJAWQAJAWASASQASASAWAKQAWAJAYAAQAaAAAWgJQAVgKATgSQAkglAAgzQAAgzgkgkQgkglg0AAQgzAAgjAlg");
	this.shape_8.setTransform(34.2,27.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag6CXIAAktIAiAAIAAEOIBSAAIAAAfg");
	this.shape_9.setTransform(10.9,27.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,257.7,56);


(lib.copiePARISbestwishes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgICNQgDgDAAgHQAAgHAEgCQAEgDADAAQAFABADAEQAEADAAAFQAAAGgEADQgEADgEAAQgEAAgEgDgAgIBJQgDgCAAgDIABjNQADgFADgBIAEAAIAFACIACADIAAAwIgBA4IAAA3IACAwQgBAEgDACIgGABg");
	this.shape.setTransform(424,26.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("Ag4BnQgHgHgBgGQAAgHAJgEQAHAFAJABQAKAAAKgDQALgDAJgFIAUgNQAJgHAHgIQAHgHACgHQACgHgCgGQgDgGgKgDIgiAGQgRADgOgDQgOgCgIgJQgJgIABgSQABgSAJgQQAIgPAOgLQANgLARgGQAQgGARABIAGABIAFABIAEADIABAGQgBAFgDADQgDADgGAAQgUgEgQAGQgQAFgKALQgLAKgEANQgFANADALQAHAMAKADQALADAMgBIAXgDQAMgDAKABQAKABAGAGQAHAGAAASQAAALgHALQgHAKgLAJQgLAJgOAIQgOAHgMAFQgOAFgMABIgKABIgJgBg");
	this.shape_1.setTransform(394.7,30.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AgBCPQgDgDAAgFIgFjKIAFgCIAEgBIAFACIAEAEIABAvIABA0IACA0IABAwQAAAFgDADQgDACgDAAQgEAAgCgCgAgEh5QgEgBgCgEQgDgEAAgGQAAgFADgCIAHgBQAHAAACAFQABAFAAAHQgCAEgDABIgEABIgCAAg");
	this.shape_2.setTransform(384.4,27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("Ag4BnQgEgCgBgEIgChQIgBg1IAAgiIgBgSIAAgHIAAgBQAAgDAEgCIAFgDIAHABQADABABADIABBPQACgMAFgKQAEgJAGgIQALgQAOgJQAOgJAQgDQAPgDAOADQAEABACADQACACABAEQAAADgCADIgFAEQgQgBgNAEQgOADgLAHQgKAHgIAKQgIAJgGALQgGAPgDAQIgDAiIAAAgIAAAaQAAAEgDACIgHACg");
	this.shape_3.setTransform(374.4,30.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AA2BmQgDgBgBgDQgEgHgCgLIgBgZIAAgZQAAgNgCgJQgQAkgOATQgNAUgMAIQgMAJgJgBQgKgBgHgGQgGgGgEgJQgEgIAAgIQgDgNADgTQACgSAFgSQAGgUAJgSQAJgTALgOQALgNAMgHQAGgDAGgBQAHAAAHACIALAAQAFABADAEQADAEABAHIACARQAAAhACAXIAGAoIAHAgQADAOABAQQAAAFgDADQgDADgDABIgDAAIgDgBgAANhTQgKACgIAKQgKAKgIARQgJAQgGASQgGASgDASQgDASACAOQAFAQAHADQAGADAIgFQAIgGAIgLIAPgZIANgbIAKgWIgBg5QgIgKgIAAIgCAAg");
	this.shape_4.setTransform(358.6,31);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AhACPIgEgDIABhDIACg9IACg2QAAgbgCgaIgEAEIgFAFIgEAEIgEACQgDAAgCgCQgCgDAAgDIAAgBIAAgBIAHgMIAJgQIAKgPQAFgGADAAQAEAAABABIADAFIADAFIADAEQAMgHAOgFQANgFANgCQAOgBANABQANABALAFQALAFAHAKQAIAJACAPQAAATgLAQQgLAQgPAOQgPANgSALIggARIgYAMQgHADgCACIgFBzQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAABIgGABgAgKh4QgTAHgQANIAABmIAkgPQASgIAQgLQAQgLANgOQAGgHAEgJQAFgIACgJQgDgUgMgIQgHgFgHgCQgIgCgIAAQgRAAgTAHg");
	this.shape_5.setTransform(346.7,26.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("Ag4BnQgHgHgBgGQAAgHAJgEQAHAFAJABQAKAAAKgDQALgDAJgFIAUgNQAJgHAHgIQAHgHACgHQACgHgCgGQgDgGgKgDIgiAGQgRADgOgDQgOgCgIgJQgJgIABgSQABgSAJgQQAIgPAOgLQANgLARgGQAQgGARABIAGABIAFABIAEADIABAGQgBAFgDADQgDADgGAAQgUgEgQAGQgQAFgKALQgLAKgEANQgFANADALQAHAMAKADQALADAMgBIAXgDQAMgDAKABQAKABAGAGQAHAGAAASQAAALgHALQgHAKgLAJQgLAJgOAIQgOAHgMAFQgOAFgMABIgKABIgJgBg");
	this.shape_6.setTransform(310.6,30.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AgBCPQgDgDAAgFIgFjKIAFgCIAEgBIAFACIAEAEIABAvIABA0IACA0IABAwQAAAFgDADQgDACgDAAQgEAAgCgCgAgEh5QgEgBgCgEQgDgEAAgGQAAgFADgCIAHgBQAHAAACAFQABAFAAAHQgCAEgDABIgEABIgCAAg");
	this.shape_7.setTransform(300.3,27);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#464646").s().p("AAtBrIgMg5QgBAEgGAJIgPARIgQAQQgJAGgHABQgIAAgGgDQgGgCgFgHQgJgMgEgUQgFgUAAgZIAAguIABgqQABgTgBgJQABgDADgBIAGgCIAGACIAEAEIAAAdIgBAlIABAmIACAlQACAQAFALQAEAKAIACQAFAAAGgEIALgKIALgNIAJgOIAGgNIADgJIABgNIABgUIABgYIABgZIABgUIAAgNIACgFIAFgEQADgBADACQAEACAEAHIgEA0IgBAzQAAAZADAZQADAZAJAYQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABIgFADIgHAAQgEAAgCgDg");
	this.shape_8.setTransform(290.5,31.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#464646").s().p("AhFCaQgDgCgCgEIAFhGIABgxIABgiIgBghIgCgnIgCg5IADgGIAFgFQACgBADACQAEABADAFIgBAsQALgPAPgMQAOgMAOgIQAPgIAOgEQAOgDAKADQALADAGAJQAFAJgCARQgBAPgIASQgIARgLARQgMARgNAQQgOAPgMALQgNAMgLAIQgLAHgHAAIgBANIgBAUIgCAXIgBAXIgBAUIgBANIgEADIgFACgAAdiFQgKACgMAGQgKAHgLAJQgLAJgJALQgJALgFALIAABVQALgEAQgOQAPgMAPgTQAQgTAMgXQAJgPAJgdQgCgLgHgEQgFgCgFAAIgHABg");
	this.shape_9.setTransform(274.2,36.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#464646").s().p("AACBmQgIAAgHgDQgHgCgFgFQgKgKgGgOQgGgOgDgPIgFgcQgCADgGgBIgLgDQgFgCgCgDQgBgEAFgEIAGgCIAFgCIAFgDQACgBAAgEIADggQACgQAGgMQAHgNALgIQALgHATACQAGAAAJADQAIADAIAFQAIAGAGAHQAGAHABAJQACADgFAGIgOALIgVANIgVAMIgTAKIgLAGIAEAcQADAOAEANQAFAMAGAIQAHAIAJAAQAPABALgGQALgFAHgJQAHgJAFgKIAGgVIADgQIACgHQADgBAFABQAFACABAIQAAANgGARQgGARgLAPQgLAOgPAJQgHAEgIACIgIABIgIgBgAgLhTQgHABgFAGQgGAGgDAIQgEAJgBALQgBALABALIBHgpQgLgPgLgEQgIgDgIAAIgHAAg");
	this.shape_10.setTransform(256.6,30.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#464646").s().p("AAtCZQgEgCgBgGIAChKIgLATQgIAMgKAKQgKAKgKAHQgMAHgNAAIgJgCIgFgEIgFgGIgFgJQgDgRAAgVQgBgUAEgWQAEgVAHgSQAHgTAMgOQAGgHAHgFQAHgFAHgDQAJgDAJAAQAKAAALACQACgVgCgWIgDgtQAAgEAEgBIAHgCIAHAAIAFABIgBA4IAAAxIAAAsIAAAqIABAvIAAA2QABAFgCAEQgDAEgDABIgDAAQgCAAgDgBgAABggQgKAJgJAQQgJAOgGAUQgGATgBASQgCASADAOQADAPAJAFQAJAAAIgGQAIgGAGgJQAIgJAGgMIALgWIAIgUIACgOIAAgNIgBgTQgBgKgDgHQgDgIgFAAIgFAAQgKAAgKAHg");
	this.shape_11.setTransform(241,27.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#464646").s().p("AAwBmIgwhOIgqBMQgHADgEAAQgFAAgDgCQgCgDAAgDQAAgEAEgFIAthVIg0hbIACgFIAFgFIAFgDIAFABIAxBTIAnhSIAFgBIAGABIAGADQACABAAAEIgsBgIA0BVIAAAEIgDAGQgCADgEACIgDABIgGgCg");
	this.shape_12.setTransform(208.2,30.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#464646").s().p("AAtBrIgMg5QgBAEgGAJIgPARIgQAQQgJAGgHABQgIAAgGgDQgGgCgFgHQgJgMgEgUQgFgUAAgZIAAguIABgqQABgTgBgJQABgDADgBIAGgCIAGACIAEAEIAAAdIgBAlIABAmIACAlQACAQAFALQAEAKAIACQAFAAAGgEIALgKIALgNIAJgOIAGgNIADgJIABgNIABgUIABgYIABgZIABgUIAAgNIACgFIAFgEQADgBADACQAEACAEAHIgEA0IgBAzQAAAZADAZQADAZAJAYQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABIgFADIgHAAQgEAAgCgDg");
	this.shape_13.setTransform(193.4,31.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#464646").s().p("AACBmQgIAAgHgDQgHgCgFgFQgKgKgGgOQgGgOgDgPIgFgcQgCADgGgBIgLgDQgFgCgCgDQgBgEAFgEIAGgCIAFgCIAFgDQACgBAAgEIADggQACgQAGgMQAHgNALgIQALgHATACQAGAAAJADQAIADAIAFQAIAGAGAHQAGAHABAJQACADgFAGIgOALIgVANIgVAMIgTAKIgLAGIAEAcQADAOAEANQAFAMAGAIQAHAIAJAAQAPABALgGQALgFAHgJQAHgJAFgKIAGgVIADgQIACgHQADgBAFABQAFACABAIQAAANgGARQgGARgLAPQgLAOgPAJQgHAEgIACIgIABIgIgBgAgLhTQgHABgFAGQgGAGgDAIQgEAJgBALQgBALABALIBHgpQgLgPgLgEQgIgDgIAAIgHAAg");
	this.shape_14.setTransform(176.6,30.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#464646").s().p("AgRBoQgNgCgJgJQgJgJgFgOQgFgNgCgQQgBgQABgPQABgXAHgVQAIgWALgQQAMgQAOgIQANgJANACQAOACAJALQAIAMAFAQQAFAQABAUQABATgBARQgCAUgHARQgHASgLANQgLAMgOAHQgLAHgNAAIgCAAgAgFhMQgJAIgIAOQgIAOgFARQgFASgCAQIgBAZQABANADALQACAKAHAHQAGAHALAAQAIAAAJgGQAJgGAIgLQAIgKAHgNQAGgOACgOQADgNgCgQQgBgQgEgNQgEgNgGgKQgGgKgJgCIgDAAQgJAAgIAHg");
	this.shape_15.setTransform(161.3,30.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#464646").s().p("AgDBoIgDgDIg+jDQAAgEACgCIAFgDIAGAAIAGADIAzCkIAahRIAOgwIAFgXIABgGQADgIAEgCQAEgBADACQADACADAEQACAEgBAEIg4C/QgBACgDAAIgGABg");
	this.shape_16.setTransform(147.3,30.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#464646").s().p("Ag4BnQgHgHgBgGQAAgHAJgEQAHAFAJABQAKAAAKgDQALgDAJgFIAUgNQAJgHAHgIQAHgHACgHQACgHgCgGQgDgGgKgDIgiAGQgRADgOgDQgOgCgIgJQgJgIABgSQABgSAJgQQAIgPAOgLQANgLARgGQAQgGARABIAGABIAFABIAEADIABAGQgBAFgDADQgDADgGAAQgUgEgQAGQgQAFgKALQgLAKgEANQgFANADALQAHAMAKADQALADAMgBIAXgDQAMgDAKABQAKABAGAGQAHAGAAASQAAALgHALQgHAKgLAJQgLAJgOAIQgOAHgMAFQgOAFgMABIgKABIgJgBg");
	this.shape_17.setTransform(113.5,30.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#464646").s().p("Ag4BnQgEgCgBgEIgChQIgBg1IAAgiIgBgSIAAgHIAAgBQAAgDADgCIAGgDIAHABQADABABADIABBPQACgMAFgKQAEgJAGgIQALgQAOgJQAOgJAPgDQAQgDAOADQAEABACADQACACABAEQAAADgDADIgEAEQgQgBgNAEQgNADgMAHQgKAHgIAKQgIAJgGALQgGAPgDAQIgDAiIAAAgIAAAaQgBAEgCACIgHACg");
	this.shape_18.setTransform(100.7,30.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#464646").s().p("AAtBrIgMg5QgBAEgGAJIgPARIgQAQQgJAGgHABQgIAAgGgDQgGgCgFgHQgJgMgEgUQgFgUAAgZIAAguIABgqQABgTgBgJQABgDADgBIAGgCIAGACIAEAEIAAAdIgBAlIABAmIACAlQACAQAFALQAEAKAIACQAFAAAGgEIALgKIALgNIAJgOIAGgNIADgJIABgNIABgUIABgYIABgZIABgUIAAgNIACgFIAFgEQADgBADACQAEACAEAHIgEA0IgBAzQAAAZADAZQADAZAJAYQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABIgFADIgHAAQgEAAgCgDg");
	this.shape_19.setTransform(85.8,31.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#464646").s().p("AACBmQgIAAgHgDQgHgCgFgFQgKgKgGgOQgGgOgDgPIgFgcQgCADgGgBIgLgDQgFgCgCgDQgBgEAFgEIAGgCIAFgCIAFgDQACgBAAgEIADggQACgQAGgMQAHgNALgIQALgHATACQAGAAAJADQAIADAIAFQAIAGAGAHQAGAHABAJQACADgFAGIgOALIgVANIgVAMIgTAKIgLAGIAEAcQADAOAEANQAFAMAGAIQAHAIAJAAQAPABALgGQALgFAHgJQAHgJAFgKIAGgVIADgQIACgHQADgBAFABQAFACABAIQAAANgGARQgGARgLAPQgLAOgPAJQgHAEgIACIgIABIgIgBgAgLhTQgHABgFAGQgGAGgDAIQgEAJgBALQgBALABALIBHgpQgLgPgLgEQgIgDgIAAIgHAAg");
	this.shape_20.setTransform(69,30.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#464646").s().p("AgFCQIgDgEIAAkYIAEgDIAEgCIAEABIADAEIACEZQgCADgCACIgFAAg");
	this.shape_21.setTransform(58.2,26.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#464646").s().p("AgFCQIgDgEIAAkYIAEgDIAEgCIAEABIADAEIACEZQgCADgCACIgFAAg");
	this.shape_22.setTransform(52.9,26.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#464646").s().p("AgBCPQgDgDAAgFIgFjKIAFgCIAEgBIAFACIAEAEIABAvIABA0IACA0IABAwQAAAFgDADQgDACgDAAQgEAAgCgCgAgEh5QgEgBgCgEQgDgEAAgGQAAgFADgCIAHgBQAHAAACAFQABAFAAAHQgCAEgDABIgEABIgCAAg");
	this.shape_23.setTransform(47.6,27);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#464646").s().p("AACBmQgIAAgHgDQgHgCgFgFQgKgKgGgOQgGgOgDgPIgFgcQgCADgGgBIgLgDQgFgCgCgDQgBgEAFgEIAGgCIAFgCIAFgDQACgBAAgEIADggQACgQAGgMQAHgNALgIQALgHATACQAGAAAJADQAIADAIAFQAIAGAGAHQAGAHABAJQACADgFAGIgOALIgVANIgVAMIgTAKIgLAGIAEAcQADAOAEANQAFAMAGAIQAHAIAJAAQAPABALgGQALgFAHgJQAHgJAFgKIAGgVIADgQIACgHQADgBAFABQAFACABAIQAAANgGARQgGARgLAPQgLAOgPAJQgHAEgIACIgIABIgIgBgAgLhTQgHABgFAGQgGAGgDAIQgEAJgBALQgBALABALIBHgpQgLgPgLgEQgIgDgIAAIgHAAg");
	this.shape_24.setTransform(36,30.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#464646").s().p("ABvCYIgHgCIgHgFIgWj8QgCgBgDAKIgHAYIgKAhIgLAkIgMAhQgGAQgGAJQgGAJgGABQgFABgDgMIgNgWIgOgeIgQgjIgRghIgRgbQgIgLgIgFQAAAbADAgIAHA/IAHBAQADAgAAAbQACAEgCADQgCADgDACQgDACgEgBQgEgBgDgFQgFgjgCgjIgEhHIgFhHQgDgjgGgjQAAgHACgCIAHgBQAQAEAMAMQAMAMAKAQQAKAQAJASIAQAmIARAjQAIAQAJANIADgCIADgGIAGgQIAKgeIAQgxIAXhIIADgDIAGgCQADAAADACQADADABAFIAGBCIAHBIIAHBJQAFAlAGAlQAAAFgDABQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgBAAg");
	this.shape_25.setTransform(14.7,26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,429.2,54.8);


(lib.copiebestwishes3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgLB3QgGgFAAgGQAAgJAGgEQAFgFAGAAQAIAAAFAFQAFAFAAAIQAAAGgFAGQgGAFgHAAQgGAAgFgGgAgIA8IgDi4IAXAAIgDC4g");
	this.shape.setTransform(370.8,28.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("ACEChIAAgPIiMAAIAAAPIgSAAIAAicICwAAIAACcgABGCBIA+AAIAAgtIg+AAgAgICBIA8AAIAAgtIg8AAgABGBDIA+AAIAAgtIg+AAgAgIBDIA8AAIAAgtIg8AAgAhpChIAAiYQgVAXgYAVIgGgTIAggfQAOgPAMgPQALgPAJgPQAIgPAGgPIhVAAIAAgTIBoAAIAAARQgHATgKATQgKATgOATIAAACQAZAQAWAXIgLAQQgMgPgYgWIAACagAgKgWIAAhKICRAAIAABKgAAHgmIBuAAIAAgqIhuAAgAhzibIASgFQAMAbAGATIgRAGQgHgWgMgZgAgfh+IAAgRIC8AAIAAARg");
	this.shape_1.setTransform(343.3,28.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AhnChIAAiZQgfAggTAQIgGgUQATgQAQgQQAPgOANgQQAMgPAJgPQAJgQAGgOIhaAAIAAgTIBuAAIAAAQQgNAmgeAmIAdATQAOAMANAMIgLAQQgWgXgYgRIAACbgAgxCSQBEg9AAhPIAAgHIggAAIAAiMICPAAIAACMIgkAAIAACBQABAJAJAAIATAAQAIAAADgEQAGgGADgzIARAGIgEAqQgDAQgEAFQgCAFgHACQgFADgIAAIgcAAQgMAAgFgGQgHgIAAgJIAAiFIglAAIAAAHQAABXhHBDgAAFgUIBqAAIAAhmIhqAAgAhxiaIASgGQAMAaAHAVIgSAGQgIgZgLgWg");
	this.shape_2.setTransform(307.6,28.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AA4CdIgEgSIAkABQAPABAIgJQAIgHACgQQAEhSABhmIhnAAQgIASgIAPQgIAPgLAOIgLgPQAKgNAIgPIANgeQAJgVALgyIASACQgJArgHATIByAAIgBCIQgBA0gDAUQgBALgEAIQgDAHgGAGQgHAFgIADQgJACgKAAgAiPCWIAAj0IAfAAQAIgTAIgrIATACQgJAqgIASIA6AAIAADqIgSAAIAAgUIhHAAIAAAegAh9BmIBHAAIAAhTIhHAAgAh9ACIBHAAIAAhOIhHAAgAAqAjIgjgnIAPgKIAkAoQAPATAKAQIgPAMQgLgSgPgUg");
	this.shape_3.setTransform(271.6,28.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AieCTQAqgfAagrIg2gpQAKggAThFIgoAAIAAgTIArAAQAJgnAFgjIATADIgOBHIA/AAIAAAMQgGA2gGAXQgOAvgLAUQAWARAfAcIgNAPQgUgUgdgXQgbAtgpAhgAh8AaIArAfQAIgSANgoQAFgWAGguIgwAAQgRBFgKAagAAKCeIgGgSIAuAAQAIAAAEgEQADgFAAgJIAAhwIhRAAIAAgSIBRAAIAAgvQAdgaAbglIh+AAIAAgTICUAAIAAATQgZAlgiAhIAAAoIBKAAIAAASIhKAAIAAB2QAAAPgGAHQgHAIgNAAg");
	this.shape_4.setTransform(235.7,28.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AifCPQAZgFAogNIAagMQALgGAIgHQAPgNALgSIh4AAIAAgSICAAAQAGgRADgPIARACQgCAOgEAQICLAAIAAASIh/AAQAkA2BsATIgLASQgdgGgZgJQgXgIgTgMQgUgLgOgOQgOgOgIgRQgLAZgUATQgIAHgMAHQgMAHgOAHQgsAPgdAFgAiYAIIAAgRICPAAIAAgnIhwAAIAAgRIBwAAIAAgnIiDAAIAAgRIBTAAQgHgUgLgPIAUgEQAJARAJAWIBLAAQAKgSAGgWIAUAEQgFASgLASIBSAAIAAARIiDAAIAAAnIBxAAIAAARIhxAAIAAAnICPAAIAAARg");
	this.shape_5.setTransform(199.6,28.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgWCZIAAghQhNAIgxADIgDgRIAigCIAAh8IgkAAIAAgQIEzAAIAAAQIieAAIAABzIAVgEIAAAQIgVADIAAAjgAhjBvIBNgGIAAgcIhNAAgAhjA/IBNAAIAAgfIhNAAgAhjARIBNAAIAAgdIhNAAgAANCKQAQgIAPgJQAOgIAMgKQgQgRgLgRQgKgSgGgUIgLAAIAAgRIB1AAIAAAQQgFAVgKASQgJASgOAQQAMAJAPAJIAgAPIgKAQQgSgJgQgJQgPgKgMgKQgNAMgPAJQgPAKgSAHgAA7A/QAJAPAOANQALgNAJgPQAIgPAGgRIhIAAQAFARAKAPgAhqg3IAAhhIDXAAIAABhgAhYhGICyAAIAAgbIiyAAgAhYhvICyAAIAAgaIiyAAg");
	this.shape_6.setTransform(163.5,29.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AB6CWIAAgRIjzAAIAAARIgUAAIAAkrIEbAAIAAErgAh5B0IDzAAIAAj3IjzAAgAhfBKIAAgRIBWAAIAAg8IhBAAIAAgSIBBAAIAAg4IhNAAIAAgRICtAAIAAARIhOAAIAAA4IBDAAIAAASIhDAAIAAA8IBYAAIAAARgAAjALIAQgFQAOATAKAVIgPAHQgMgZgNgRg");
	this.shape_7.setTransform(127.5,29.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#464646").s().p("AgJCiIAAh6IhrAAIAAAYIgTAAIAAigIB+AAIAAhAIASAAIAABAIB/AAIAACgIgTAAIAAgYIhsAAIAAB6gAAJAWIBsAAIAAhjIhsAAgAh0AWIBrAAIAAhjIhrAAg");
	this.shape_8.setTransform(91.5,28.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#464646").s().p("ABhCgIAAgYIjBAAIAAAYIgTAAIAAkTIBLAAQAHgOALgeIATADQgGAWgLATICHAAIAAETgAhgB2IDBAAIAAg/IjBAAgAhgAlIDBAAIAAg5IjBAAgAhggmIDBAAIAAg6IjBAAg");
	this.shape_9.setTransform(55.5,28.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#464646").s().p("AgICfIAAiRIgFAAQgHATgNASQgNARgRAQQgRAQgWAPQgVAPgaANIgKgRQAZgMAUgNQAVgNAQgOQARgOALgPQAMgPAJgQIh6AAIAAgRICOAAIAAheIiBAAIAAgSICBAAIAAgrIASAAIAAArICDAAIAAASIiDAAIAABeIAnAAIAUgnIARgpIATAHQgYA0gOAVIBUAAIAAARIh5AAQAKAQAMAPQANAPAQAOQARAOATANQAUAOAXAMIgMAQQgYgOgVgQQgUgPgQgQQgRgQgNgRQgOgRgJgSIgEAAIAACRgAhohHIARgJQAWAnALAWIgQAIQgLgXgXglg");
	this.shape_10.setTransform(19.5,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400.2,55.1);


(lib.copiebestwishes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgICNQgDgDAAgHQAAgHAEgCQAEgDADAAQAFABADAEQAEADAAAFQAAAGgEADQgEADgEAAQgEAAgEgDgAgIBJQgDgCAAgDIABjNQADgFADgBIAEAAIAFACIACADIAAAwIgBA4IAAA3IACAwQgBAEgDACIgGABg");
	this.shape.setTransform(352.7,26.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AA2BmQgDgBgBgDQgEgHgCgLIgBgZIAAgZQAAgNgCgJQgQAkgOATQgNAUgMAIQgMAJgJgBQgKgBgHgGQgGgGgEgJQgEgIAAgIQgDgNADgTQACgSAFgSQAGgUAJgSQAJgTALgOQALgNAMgHQAGgDAGgBQAHAAAHACIALAAQAFABADAEQADAEABAHIACARQAAAhACAXIAGAoIAHAgQADAOABAQQAAAFgDADQgDADgDABIgDAAIgDgBgAANhTQgKACgIAKQgKAKgIARQgJAQgGASQgGASgDASQgDASACAOQAFAQAHADQAGADAIgFQAIgGAIgLIAPgZIANgbIAKgWIgBg5QgIgKgIAAIgCAAg");
	this.shape_1.setTransform(341.4,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AA2BnIAAgWIgBglIgCgrQgBgVgEgTQgEgTgGgNQgGgNgKgBQgJgCgIALQgHAKgIASQgGARgHAWIgLAqIgIAnIgFAbQgBADgDACIgHACIgHgBQgEgCgBgEIAAjGQAAgEACgCIAFgCIAGAAIAGAEIgBCHIAMgvQAFgYAHgUQAJgUAMgMQAFgHAHgEQAIgDAKgBQALgBAIAHQAHAIAHAMQAFANAEARIAFAjIAEAkIACAiIAAAcIgBARQgDAGgFACIgDAAQgEAAgEgFg");
	this.shape_2.setTransform(325.1,30.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AgBCPQgDgDAAgFIgFjKIAFgCIAEgBIAFACIAEAEIABAvIABA0IACA0IABAwQAAAFgDADQgDACgDAAQgEAAgCgCgAgEh5QgEgBgCgEQgDgEAAgGQAAgFADgCIAHgBQAHAAACAFQABAFAAAHQgCAEgDABIgEABIgCAAg");
	this.shape_3.setTransform(313.9,27);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AA/CSQgDgCgCgFIACgeIABgmIgCgoIgDgkQgCgQgEgLQgDgLgFgBQgLgDgKAFQgLAFgIAMQgIALgIAPIgOAiIgLAjIgIAgIgFAZIgBAOIgGABIgHABIgGAAQgCgBAAgEIgGkYQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAIAGAAIAGABIAEADIACDXIAFgTIAJgdIAMggQAIgRALgNQAKgOAOgIQAPgHAUABQAGAEAFAFQAFAFAEAKQAEAJACAOIAFAjIAEA0IABBGIgEAFIgHADIgCAAIgFgBg");
	this.shape_4.setTransform(302.1,26.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AgmCQQgMAAgJgHQgJgHgFgLQgGgKgDgMQgCgLAAgKIACgiIAIgtQAFgYAIgZQAIgZAKgVQALgUANgNQAOgNAPAAQAJAAAHADQAHAEAEAGQAFAFACAIQACAHAAAJQgJAEgFgCQgFgCgDgFIgGgLQgCgFgFgCQgMAAgKAMQgKAMgIASQgJASgGAWIgKArIgGAmIgCAZIABAVQAAAKAEAIQAEAIAHAFQAHAEANAAQAPAAAOgJQAPgJANgNQAMgNAJgQQAKgPAEgMIADgBIAEAAIAIABQAEABAAAGQgCAMgIAOQgJANgLANQgMANgNALQgOALgNAIQgMAHgLADIgJABQgFAAgEgBg");
	this.shape_5.setTransform(283.5,26.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AhcBvQgDgBgBgDIgCgWIgBgjIgBgqIgBgqIgCgmIgEgdQAAgIAGgCQAFgBAHACIAEAuIACAlIABAbIACATIAJg1QAEgWAFgOQAFgOAGgHQAFgHAHgBQAGAAAGAKQAFAKAFAQIAIAjIAGAiIASg2QAIgUAGgLQAFgKAFgDQAFgDAHABQAIAAAFAHQAFAGACALIAEAaIACAfIADAfIAEAgQADAPAGANQAFANAKAIIgIAKQgEAFgEgDQgKgHgGgPQgGgQgEgUQgDgTgCgWIgDgmIgDgdQgCgMgCAAQgKgCgLAhQgKAggRA/IgDAGIgFACIgFgBIgEgEIgIgyIgGgpIgFgeQgDgLgEgBQgDgBgDAIIgFAUIgGAeIgGAlIgGApIgIArIgEAEIgGABg");
	this.shape_6.setTransform(243.7,30.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AgRBoQgNgCgJgJQgJgJgFgOQgFgNgCgQQgBgQABgPQABgXAHgVQAIgWALgQQAMgQAOgIQANgJANACQAOACAJALQAIAMAFAQQAFAQABAUQABATgBARQgCAUgHARQgHASgLANQgLAMgOAHQgLAHgNAAIgCAAgAgFhMQgJAIgIAOQgIAOgFARQgFASgCAQIgBAZQABANADALQACAKAHAHQAGAHALAAQAIAAAJgGQAJgGAIgLQAIgKAHgNQAGgOACgOQADgNgCgQQgBgQgEgNQgEgNgGgKQgGgKgJgCIgDAAQgJAAgIAHg");
	this.shape_7.setTransform(225.1,30.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#464646").s().p("Ag4BnQgDgCgCgEIgBhQIgBg1IgBgiIAAgSIAAgHIAAgBQAAgDADgCIAGgDIAFABQAEABABADIABBPQADgMAEgKQAEgJAGgIQALgQAPgJQANgJAQgDQAPgDANADQAFABACADQACACAAAEQAAADgBADIgFAEQgPgBgOAEQgNADgMAHQgKAHgIAKQgJAJgEALQgIAPgCAQIgDAiIAAAgIAAAaQgBAEgDACIgGACg");
	this.shape_8.setTransform(212.7,30.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#464646").s().p("AgLCUQgDgCgBgEIgIiOIgiAOQgHAAgDgBQgDgCAAgDIABgFIADgEIApgTIgCgvQAAgXAEgTQAEgTAKgLQAJgKAQACQAIAAAHAFQAIAFAFAIQAFAIADAJQAEAKAAAHQgBADgCACIgEADIgFAAIgEgCQgBgMgDgIQgDgIgEgFQgDgEgEgCIgHgCQgLABgEAHQgFAIgCANQgCAOAAATIACAqIBJgbQADADACADQABAEgFAHIhJAeIAJCUQAAADgDACIgFACIgCAAIgEgBg");
	this.shape_9.setTransform(198.1,26.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#464646").s().p("Ag4BnQgHgHgBgGQAAgHAJgEQAHAFAJABQAKAAAKgDQALgDAJgFIAUgNQAJgHAHgIQAHgHACgHQACgHgCgGQgDgGgKgDIgiAGQgRADgOgDQgOgCgIgJQgJgIABgSQABgSAJgQQAIgPAOgLQANgLARgGQAQgGARABIAGABIAFABIAEADIABAGQgBAFgDADQgDADgGAAQgUgEgQAGQgQAFgKALQgLAKgEANQgFANADALQAHAMAKADQALADAMgBIAXgDQAMgDAKABQAKABAGAGQAHAGAAASQAAALgHALQgHAKgLAJQgLAJgOAIQgOAHgMAFQgOAFgMABIgKABIgJgBg");
	this.shape_10.setTransform(165.2,30.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#464646").s().p("AACBmQgIAAgHgDQgHgCgFgFQgKgKgGgOQgGgOgDgPIgFgcQgCADgGgBIgLgDQgFgCgCgDQgBgEAFgEIAGgCIAFgCIAFgDQACgBAAgEIADggQACgQAGgMQAHgNALgIQALgHATACQAGAAAJADQAIADAIAFQAIAGAGAHQAGAHABAJQACADgFAGIgOALIgVANIgVAMIgTAKIgLAGIAEAcQADAOAEANQAFAMAGAIQAHAIAJAAQAPABALgGQALgFAHgJQAHgJAFgKIAGgVIADgQIACgHQADgBAFABQAFACABAIQAAANgGARQgGARgLAPQgLAOgPAJQgHAEgIACIgIABIgIgBgAgLhTQgHABgFAGQgGAGgDAIQgEAJgBALQgBALABALIBHgpQgLgPgLgEQgIgDgIAAIgHAAg");
	this.shape_11.setTransform(149.1,30.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#464646").s().p("AA/CSQgDgCgCgFIACgeIABgmIgCgoIgDgkQgCgQgEgLQgDgLgFgBQgLgDgKAFQgLAFgIAMQgIALgIAPIgOAiIgLAjIgIAgIgFAZIgBAOIgGABIgHABIgGAAQgCgBAAgEIgGkYQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBABAAIAGAAIAGABIAEADIACDXIAFgTIAJgdIAMggQAIgRALgNQAKgOAOgIQAPgHAUABQAGAEAFAFQAFAFAEAKQAEAJACAOIAFAjIAEA0IABBGIgEAFIgHADIgCAAIgFgBg");
	this.shape_12.setTransform(131.9,26.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#464646").s().p("Ag4BnQgHgHgBgGQAAgHAJgEQAHAFAJABQAKAAAKgDQALgDAJgFIAUgNQAJgHAHgIQAHgHACgHQACgHgCgGQgDgGgKgDIgiAGQgRADgOgDQgOgCgIgJQgJgIABgSQABgSAJgQQAIgPAOgLQANgLARgGQAQgGARABIAGABIAFABIAEADIABAGQgBAFgDADQgDADgGAAQgUgEgQAGQgQAFgKALQgLAKgEANQgFANADALQAHAMAKADQALADAMgBIAXgDQAMgDAKABQAKABAGAGQAHAGAAASQAAALgHALQgHAKgLAJQgLAJgOAIQgOAHgMAFQgOAFgMABIgKABIgJgBg");
	this.shape_13.setTransform(115.2,30.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#464646").s().p("AgBCPQgDgDAAgFIgFjKIAFgCIAEgBIAFACIAEAEIABAvIABA0IACA0IABAwQAAAFgDADQgDACgDAAQgEAAgCgCgAgEh5QgEgBgCgEQgDgEAAgGQAAgFADgCIAHgBQAHAAACAFQABAFAAAHQgCAEgDABIgEABIgCAAg");
	this.shape_14.setTransform(104.9,27);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#464646").s().p("Ag/BpIgEgDIgDgVIgFgjIgGgrIgHgpIgFgjIgEgVQABgFADgEQADgCADAAIAGABIAFAGIAVCbIAEgQIAHgZIAIgeIAJgeIAHgaIAEgPIAGgFIAHgDQADAAADABQAEACACAFIAwCdIAUipIAEgGQADgCADAAQADABADADQACADADAJIgCALIgDAVIgDAcIgEAgIgFAgIgDAcIgDAVIgBALQgDAFgEADQgFACgEAAQgFAAgEgCQgDgDgBgEIgvicIgNA0IgMAqIgKAkIgJAeQgCAEgDABIgGABg");
	this.shape_15.setTransform(91.6,30.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#464646").s().p("AgQCQIgFikIgfAKQgEgBgCgCIgEgGIgBgGQABgDACgBIAngPIAAhgQABgFADgCQAEgCADAAQAEAAADADQADACAAADIAAAXIgBAXIABAXIAAAUIA1gVQAFgBACACQADACABAEQABADgCAEQgBADgDABIg7AbIAAAQIABAeIABAlIAAAlIAAAeIABARQgBALgFAAQgGAAgHgGg");
	this.shape_16.setTransform(58.7,27);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#464646").s().p("Ag4BnQgHgHgBgGQAAgHAJgEQAHAFAJABQAKAAAKgDQALgDAJgFIAUgNQAJgHAHgIQAHgHACgHQACgHgCgGQgDgGgKgDIgiAGQgRADgOgDQgOgCgIgJQgJgIABgSQABgSAJgQQAIgPAOgLQANgLARgGQAQgGARABIAGABIAFABIAEADIABAGQgBAFgDADQgDADgGAAQgUgEgQAGQgQAFgKALQgLAKgEANQgFANADALQAHAMAKADQALADAMgBIAXgDQAMgDAKABQAKABAGAGQAHAGAAASQAAALgHALQgHAKgLAJQgLAJgOAIQgOAHgMAFQgOAFgMABIgKABIgJgBg");
	this.shape_17.setTransform(46,30.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#464646").s().p("AACBmQgIAAgHgDQgHgCgFgFQgKgKgGgOQgGgOgDgPIgFgcQgCADgGgBIgLgDQgFgCgCgDQgBgEAFgEIAGgCIAFgCIAFgDQACgBAAgEIADggQACgQAGgMQAHgNALgIQALgHATACQAGAAAJADQAIADAIAFQAIAGAGAHQAGAHABAJQACADgFAGIgOALIgVANIgVAMIgTAKIgLAGIAEAcQADAOAEANQAFAMAGAIQAHAIAJAAQAPABALgGQALgFAHgJQAHgJAFgKIAGgVIADgQIACgHQADgBAFABQAFACABAIQAAANgGARQgGARgLAPQgLAOgPAJQgHAEgIACIgIABIgIgBgAgLhTQgHABgFAGQgGAGgDAIQgEAJgBALQgBALABALIBHgpQgLgPgLgEQgIgDgIAAIgHAAg");
	this.shape_18.setTransform(30,30.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#464646").s().p("AhSCSIgCgBIgCAAIABkAIgDgKIAAgKIABgEIACgDIADgCIAFABIAFAEIADAGIADAGIABAFIAVgLIAXgJIAXgGQANgCALABIAJACIAJAEIAHAGQADAEgBAFQAAAJgEAKIgKAUIgOATIgPASIgMAPIgKAMQALgFAPgDQAQgDAPABQAPABAMAGQAGAEAEAFQAFAFACAHQABAIgFALQgEAMgJAMQgIALgLANIgXAXIgZAVIgVAQIgTALQgHAEgEgBIgIgOQACABAJgGIAWgQIAagWIAcgZQANgNAJgMQAJgMABgJQACgKgIgGQgIgFgOAAQgOAAgQAFQgQAEgPAGQgPAIgMAJQgLAKgDAKIgBAWIgBAXIAAAXIgCAVIgDAMQgBAEgFAAIgEAAgAgIh7IgTAFQgKADgIAFQgIAFgFAHQgFAGgBAIIgCASIAAAVIABAWIACASIARgOIAXgVIAXgYQALgNAIgMQAIgLACgKQACgKgHgGIgPAAg");
	this.shape_19.setTransform(11.9,26.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,357.9,54.8);


(lib.canadameilleursvoeux = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgICNQgDgDAAgHQAAgHAEgCQAEgDADAAQAFABADAEQAEADAAAFQAAAGgEADQgEADgEAAQgEAAgEgDgAgIBJQgDgCAAgDIABjNQADgFADgBIAEAAIAFACIACADIAAAwIgBA4IAAA3IACAwQgBAEgDACIgGABg");
	this.shape.setTransform(402.6,26.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AA2BmQgDgBgBgDQgEgHgCgLIgBgZIAAgZQAAgNgCgJQgQAkgOATQgNAUgMAIQgMAJgJgBQgKgBgHgGQgGgGgEgJQgEgIAAgIQgDgNADgTQACgSAFgSQAGgUAJgSQAJgTALgOQALgNAMgHQAGgDAGgBQAHAAAHACIALAAQAFABADAEQADAEABAHIACARQAAAhACAXIAGAoIAHAgQADAOABAQQAAAFgDADQgDADgDABIgDAAIgDgBgAANhTQgKACgIAKQgKAKgIARQgJAQgGASQgGASgDASQgDASACAOQAFAQAHADQAGADAIgFQAIgGAIgLIAPgZIANgbIAKgWIgBg5QgIgKgIAAIgCAAg");
	this.shape_1.setTransform(372.8,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AAtCZQgEgCgBgGIAChKIgLATQgIAMgKAKQgKAKgKAHQgMAHgNAAIgJgCIgFgEIgFgGIgFgJQgDgRAAgVQgBgUAEgWQAEgVAHgSQAHgTAMgOQAGgHAHgFQAHgFAHgDQAJgDAJAAQAKAAALACQACgVgCgWIgDgtQAAgEAEgBIAHgCIAHAAIAFABIgBA4IAAAxIAAAsIAAAqIABAvIAAA2QABAFgCAEQgDAEgDABIgDAAQgCAAgDgBgAABggQgKAJgJAQQgJAOgGAUQgGATgBASQgCASADAOQADAPAJAFQAJAAAIgGQAIgGAGgJQAIgJAGgMIALgWIAIgUIACgOIAAgNIgBgTQgBgKgDgHQgDgIgFAAIgFAAQgKAAgKAHg");
	this.shape_2.setTransform(357.4,27.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AA2BmQgDgBgBgDQgEgHgCgLIgBgZIAAgZQAAgNgCgJQgQAkgOATQgNAUgMAIQgMAJgJgBQgKgBgHgGQgGgGgEgJQgEgIAAgIQgDgNADgTQACgSAFgSQAGgUAJgSQAJgTALgOQALgNAMgHQAGgDAGgBQAHAAAHACIALAAQAFABADAEQADAEABAHIACARQAAAhACAXIAGAoIAHAgQADAOABAQQAAAFgDADQgDADgDABIgDAAIgDgBgAANhTQgKACgIAKQgKAKgIARQgJAQgGASQgGASgDASQgDASACAOQAFAQAHADQAGADAIgFQAIgGAIgLIAPgZIANgbIAKgWIgBg5QgIgKgIAAIgCAAg");
	this.shape_3.setTransform(342.3,31);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AA2BnIgBgWIAAglIgCgrQgCgVgDgTQgEgTgGgNQgHgNgKgBQgIgCgIALQgHAKgHASQgIARgGAWIgMAqIgIAnIgEAbQgBADgDACIgHACIgHgBQgEgCgBgEIAAjGQAAgEACgCIAGgCIAGAAIAFAEIgBCHIALgvQAGgYAIgUQAHgUAMgMQAGgHAIgEQAHgDALgBQAKgBAIAHQAIAIAFAMQAGANADARIAHAjIADAkIABAiIAAAcIAAARQgCAGgHACIgCAAQgEAAgEgFg");
	this.shape_4.setTransform(326,30.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AA2BmQgDgBgBgDQgEgHgCgLIgBgZIAAgZQAAgNgCgJQgQAkgOATQgNAUgMAIQgMAJgJgBQgKgBgHgGQgGgGgEgJQgEgIAAgIQgDgNADgTQACgSAFgSQAGgUAJgSQAJgTALgOQALgNAMgHQAGgDAGgBQAHAAAHACIALAAQAFABADAEQADAEABAHIACARQAAAhACAXIAGAoIAHAgQADAOABAQQAAAFgDADQgDADgDABIgDAAIgDgBgAANhTQgKACgIAKQgKAKgIARQgJAQgGASQgGASgDASQgDASACAOQAFAQAHADQAGADAIgFQAIgGAIgLIAPgZIANgbIAKgWIgBg5QgIgKgIAAIgCAAg");
	this.shape_5.setTransform(309.4,31);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgmCQQgMAAgJgHQgJgHgFgLQgGgKgDgMQgCgLAAgKIACgiIAIgtQAFgYAIgZQAIgZAKgVQALgUANgNQAOgNAPAAQAJAAAHADQAHAEAEAGQAFAFACAIQACAHAAAJQgJAEgFgCQgFgCgDgFIgGgLQgCgFgFgCQgMAAgKAMQgKAMgIASQgJASgGAWIgKArIgGAmIgCAZIABAVQAAAKAEAIQAEAIAHAFQAHAEANAAQAPAAAOgJQAPgJANgNQAMgNAJgQQAKgPAEgMIADgBIAEAAIAIABQAEABAAAGQgCAMgIAOQgJANgLANQgMANgNALQgOALgNAIQgMAHgLADIgJABQgFAAgEgBg");
	this.shape_6.setTransform(291.9,26.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AAtBrIgMg5QgBAEgGAJIgPARIgQAQQgJAGgHABQgIAAgGgDQgGgCgFgHQgJgMgEgUQgFgUAAgZIAAguIABgqQABgTgBgJQABgDADgBIAGgCIAGACIAEAEIAAAdIgBAlIABAmIACAlQACAQAFALQAEAKAIACQAFAAAGgEIALgKIALgNIAJgOIAGgNIADgJIABgNIABgUIABgYIABgZIABgUIAAgNIACgFIAFgEQADgBADACQAEACAEAHIgEA0IgBAzQAAAZADAZQADAZAJAYQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABIgFADIgHAAQgEAAgCgDg");
	this.shape_7.setTransform(256.3,31.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#464646").s().p("AAtCZQgEgCgBgGIAChKIgLATQgIAMgKAKQgKAKgKAHQgMAHgNAAIgJgCIgFgEIgFgGIgFgJQgDgRAAgVQgBgUAEgWQAEgVAHgSQAHgTAMgOQAGgHAHgFQAHgFAHgDQAJgDAJAAQAKAAALACQACgVgCgWIgDgtQAAgEAEgBIAHgCIAHAAIAFABIgBA4IAAAxIAAAsIAAAqIABAvIAAA2QABAFgCAEQgDAEgDABIgDAAQgCAAgDgBgAABggQgKAJgJAQQgJAOgGAUQgGATgBASQgCASADAOQADAPAJAFQAJAAAIgGQAIgGAGgJQAIgJAGgMIALgWIAIgUIACgOIAAgNIgBgTQgBgKgDgHQgDgIgFAAIgFAAQgKAAgKAHg");
	this.shape_8.setTransform(241,27.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#464646").s().p("AAwBmIgwhOIgqBMQgHADgEAAQgFAAgDgCQgCgDAAgDQAAgEAEgFIAthVIg0hbIACgFIAFgFIAFgDIAFABIAxBTIAnhSIAFgBIAGABIAGADQACABAAAEIgsBgIA0BVIAAAEIgDAGQgCADgEACIgDABIgGgCg");
	this.shape_9.setTransform(208.2,30.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#464646").s().p("AAtBrIgMg5QgBAEgGAJIgPARIgQAQQgJAGgHABQgIAAgGgDQgGgCgFgHQgJgMgEgUQgFgUAAgZIAAguIABgqQABgTgBgJQABgDADgBIAGgCIAGACIAEAEIAAAdIgBAlIABAmIACAlQACAQAFALQAEAKAIACQAFAAAGgEIALgKIALgNIAJgOIAGgNIADgJIABgNIABgUIABgYIABgZIABgUIAAgNIACgFIAFgEQADgBADACQAEACAEAHIgEA0IgBAzQAAAZADAZQADAZAJAYQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABIgFADIgHAAQgEAAgCgDg");
	this.shape_10.setTransform(193.4,31.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#464646").s().p("AACBmQgIAAgHgDQgHgCgFgFQgKgKgGgOQgGgOgDgPIgFgcQgCADgGgBIgLgDQgFgCgCgDQgBgEAFgEIAGgCIAFgCIAFgDQACgBAAgEIADggQACgQAGgMQAHgNALgIQALgHATACQAGAAAJADQAIADAIAFQAIAGAGAHQAGAHABAJQACADgFAGIgOALIgVANIgVAMIgTAKIgLAGIAEAcQADAOAEANQAFAMAGAIQAHAIAJAAQAPABALgGQALgFAHgJQAHgJAFgKIAGgVIADgQIACgHQADgBAFABQAFACABAIQAAANgGARQgGARgLAPQgLAOgPAJQgHAEgIACIgIABIgIgBgAgLhTQgHABgFAGQgGAGgDAIQgEAJgBALQgBALABALIBHgpQgLgPgLgEQgIgDgIAAIgHAAg");
	this.shape_11.setTransform(176.6,30.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#464646").s().p("AgRBoQgNgCgJgJQgJgJgFgOQgFgNgCgQQgBgQABgPQABgXAHgVQAIgWALgQQAMgQAOgIQANgJANACQAOACAJALQAIAMAFAQQAFAQABAUQABATgBARQgCAUgHARQgHASgLANQgLAMgOAHQgLAHgNAAIgCAAgAgFhMQgJAIgIAOQgIAOgFARQgFASgCAQIgBAZQABANADALQACAKAHAHQAGAHALAAQAIAAAJgGQAJgGAIgLQAIgKAHgNQAGgOACgOQADgNgCgQQgBgQgEgNQgEgNgGgKQgGgKgJgCIgDAAQgJAAgIAHg");
	this.shape_12.setTransform(161.3,30.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#464646").s().p("AgDBoIgDgDIg+jDQAAgEACgCIAFgDIAGAAIAGADIAzCkIAahRIAOgwIAFgXIABgGQADgIAEgCQAEgBADACQADACADAEQACAEgBAEIg4C/QgBACgDAAIgGABg");
	this.shape_13.setTransform(147.3,30.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#464646").s().p("Ag4BnQgHgHgBgGQAAgHAJgEQAHAFAJABQAKAAAKgDQALgDAJgFIAUgNQAJgHAHgIQAHgHACgHQACgHgCgGQgDgGgKgDIgiAGQgRADgOgDQgOgCgIgJQgJgIABgSQABgSAJgQQAIgPAOgLQANgLARgGQAQgGARABIAGABIAFABIAEADIABAGQgBAFgDADQgDADgGAAQgUgEgQAGQgQAFgKALQgLAKgEANQgFANADALQAHAMAKADQALADAMgBIAXgDQAMgDAKABQAKABAGAGQAHAGAAASQAAALgHALQgHAKgLAJQgLAJgOAIQgOAHgMAFQgOAFgMABIgKABIgJgBg");
	this.shape_14.setTransform(113.5,30.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#464646").s().p("Ag4BnQgEgCgBgEIgChQIgBg1IAAgiIgBgSIAAgHIAAgBQAAgDADgCIAGgDIAHABQADABABADIABBPQACgMAFgKQAEgJAGgIQALgQAOgJQAOgJAPgDQAQgDAOADQAEABACADQACACABAEQAAADgDADIgEAEQgQgBgNAEQgNADgMAHQgKAHgIAKQgIAJgGALQgGAPgDAQIgDAiIAAAgIAAAaQgBAEgCACIgHACg");
	this.shape_15.setTransform(100.7,30.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#464646").s().p("AAtBrIgMg5QgBAEgGAJIgPARIgQAQQgJAGgHABQgIAAgGgDQgGgCgFgHQgJgMgEgUQgFgUAAgZIAAguIABgqQABgTgBgJQABgDADgBIAGgCIAGACIAEAEIAAAdIgBAlIABAmIACAlQACAQAFALQAEAKAIACQAFAAAGgEIALgKIALgNIAJgOIAGgNIADgJIABgNIABgUIABgYIABgZIABgUIAAgNIACgFIAFgEQADgBADACQAEACAEAHIgEA0IgBAzQAAAZADAZQADAZAJAYQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABIgFADIgHAAQgEAAgCgDg");
	this.shape_16.setTransform(85.8,31.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#464646").s().p("AACBmQgIAAgHgDQgHgCgFgFQgKgKgGgOQgGgOgDgPIgFgcQgCADgGgBIgLgDQgFgCgCgDQgBgEAFgEIAGgCIAFgCIAFgDQACgBAAgEIADggQACgQAGgMQAHgNALgIQALgHATACQAGAAAJADQAIADAIAFQAIAGAGAHQAGAHABAJQACADgFAGIgOALIgVANIgVAMIgTAKIgLAGIAEAcQADAOAEANQAFAMAGAIQAHAIAJAAQAPABALgGQALgFAHgJQAHgJAFgKIAGgVIADgQIACgHQADgBAFABQAFACABAIQAAANgGARQgGARgLAPQgLAOgPAJQgHAEgIACIgIABIgIgBgAgLhTQgHABgFAGQgGAGgDAIQgEAJgBALQgBALABALIBHgpQgLgPgLgEQgIgDgIAAIgHAAg");
	this.shape_17.setTransform(69,30.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#464646").s().p("AgFCQIgDgEIAAkYIAEgDIAEgCIAEABIADAEIACEZQgCADgCACIgFAAg");
	this.shape_18.setTransform(58.2,26.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#464646").s().p("AgFCQIgDgEIAAkYIAEgDIAEgCIAEABIADAEIACEZQgCADgCACIgFAAg");
	this.shape_19.setTransform(52.9,26.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#464646").s().p("AgBCPQgDgDAAgFIgFjKIAFgCIAEgBIAFACIAEAEIABAvIABA0IACA0IABAwQAAAFgDADQgDACgDAAQgEAAgCgCgAgEh5QgEgBgCgEQgDgEAAgGQAAgFADgCIAHgBQAHAAACAFQABAFAAAHQgCAEgDABIgEABIgCAAg");
	this.shape_20.setTransform(47.6,27);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#464646").s().p("AACBmQgIAAgHgDQgHgCgFgFQgKgKgGgOQgGgOgDgPIgFgcQgCADgGgBIgLgDQgFgCgCgDQgBgEAFgEIAGgCIAFgCIAFgDQACgBAAgEIADggQACgQAGgMQAHgNALgIQALgHATACQAGAAAJADQAIADAIAFQAIAGAGAHQAGAHABAJQACADgFAGIgOALIgVANIgVAMIgTAKIgLAGIAEAcQADAOAEANQAFAMAGAIQAHAIAJAAQAPABALgGQALgFAHgJQAHgJAFgKIAGgVIADgQIACgHQADgBAFABQAFACABAIQAAANgGARQgGARgLAPQgLAOgPAJQgHAEgIACIgIABIgIgBgAgLhTQgHABgFAGQgGAGgDAIQgEAJgBALQgBALABALIBHgpQgLgPgLgEQgIgDgIAAIgHAAg");
	this.shape_21.setTransform(36,30.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#464646").s().p("ABvCYIgHgCIgHgFIgWj8QgCgBgDAKIgHAYIgKAhIgLAkIgMAhQgGAQgGAJQgGAJgGABQgFABgDgMIgNgWIgOgeIgQgjIgRghIgRgbQgIgLgIgFQAAAbADAgIAHA/IAHBAQADAgAAAbQACAEgCADQgCADgDACQgDACgEgBQgEgBgDgFQgFgjgCgjIgEhHIgFhHQgDgjgGgjQAAgHACgCIAHgBQAQAEAMAMQAMAMAKAQQAKAQAJASIAQAmIARAjQAIAQAJANIADgCIADgGIAGgQIAKgeIAQgxIAXhIIADgDIAGgCQADAAADACQADADABAFIAGBCIAHBIIAHBJQAFAlAGAlQAAAFgDABQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgBAAg");
	this.shape_22.setTransform(14.7,26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,407.8,54.8);


(lib.canadabestwishes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgICNQgDgDAAgHQAAgHAEgCQAEgDADAAQAFABADAEQAEADAAAFQAAAGgEADQgEADgEAAQgEAAgEgDgAgIBJQgDgCAAgDIABjNQADgFADgBIAEAAIAFACIACADIAAAwIgBA4IAAA3IACAwQgBAEgDACIgGABg");
	this.shape.setTransform(375.7,26.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AA2BmQgDgBgBgDQgEgHgCgLIgBgZIAAgZQAAgNgCgJQgQAkgOATQgNAUgMAIQgMAJgJgBQgKgBgHgGQgGgGgEgJQgEgIAAgIQgDgNADgTQACgSAFgSQAGgUAJgSQAJgTALgOQALgNAMgHQAGgDAGgBQAHAAAHACIALAAQAFABADAEQADAEABAHIACARQAAAhACAXIAGAoIAHAgQADAOABAQQAAAFgDADQgDADgDABIgDAAIgDgBgAANhTQgKACgIAKQgKAKgIARQgJAQgGASQgGASgDASQgDASACAOQAFAQAHADQAGADAIgFQAIgGAIgLIAPgZIANgbIAKgWIgBg5QgIgKgIAAIgCAAg");
	this.shape_1.setTransform(364.4,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AAtCZQgEgCgBgGIAChKIgLATQgIAMgKAKQgKAKgKAHQgMAHgNAAIgJgCIgFgEIgFgGIgFgJQgDgRAAgVQgBgUAEgWQAEgVAHgSQAHgTAMgOQAGgHAHgFQAHgFAHgDQAJgDAJAAQAKAAALACQACgVgCgWIgDgtQAAgEAEgBIAHgCIAHAAIAFABIgBA4IAAAxIAAAsIAAAqIABAvIAAA2QABAFgCAEQgDAEgDABIgDAAQgCAAgDgBgAABggQgKAJgJAQQgJAOgGAUQgGATgBASQgCASADAOQADAPAJAFQAJAAAIgGQAIgGAGgJQAIgJAGgMIALgWIAIgUIACgOIAAgNIgBgTQgBgKgDgHQgDgIgFAAIgFAAQgKAAgKAHg");
	this.shape_2.setTransform(349,27.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AA2BmQgDgBgBgDQgEgHgCgLIgBgZIAAgZQAAgNgCgJQgQAkgOATQgNAUgMAIQgMAJgJgBQgKgBgHgGQgGgGgEgJQgEgIAAgIQgDgNADgTQACgSAFgSQAGgUAJgSQAJgTALgOQALgNAMgHQAGgDAGgBQAHAAAHACIALAAQAFABADAEQADAEABAHIACARQAAAhACAXIAGAoIAHAgQADAOABAQQAAAFgDADQgDADgDABIgDAAIgDgBgAANhTQgKACgIAKQgKAKgIARQgJAQgGASQgGASgDASQgDASACAOQAFAQAHADQAGADAIgFQAIgGAIgLIAPgZIANgbIAKgWIgBg5QgIgKgIAAIgCAAg");
	this.shape_3.setTransform(333.9,31);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AA2BnIAAgWIgBglIgCgrQgBgVgEgTQgEgTgGgNQgGgNgKgBQgJgCgIALQgHAKgIASQgGARgHAWIgLAqIgIAnIgFAbQgBADgDACIgHACIgHgBQgDgCgCgEIAAjGQAAgEACgCIAGgCIAFAAIAGAEIgBCHIALgvQAGgYAHgUQAJgUAMgMQAGgHAGgEQAIgDAKgBQALgBAIAHQAHAIAHAMQAFANAEARIAFAjIAEAkIABAiIAAAcIAAARQgDAGgFACIgDAAQgEAAgEgFg");
	this.shape_4.setTransform(317.6,30.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AA2BmQgDgBgBgDQgEgHgCgLIgBgZIAAgZQAAgNgCgJQgQAkgOATQgNAUgMAIQgMAJgJgBQgKgBgHgGQgGgGgEgJQgEgIAAgIQgDgNADgTQACgSAFgSQAGgUAJgSQAJgTALgOQALgNAMgHQAGgDAGgBQAHAAAHACIALAAQAFABADAEQADAEABAHIACARQAAAhACAXIAGAoIAHAgQADAOABAQQAAAFgDADQgDADgDABIgDAAIgDgBgAANhTQgKACgIAKQgKAKgIARQgJAQgGASQgGASgDASQgDASACAOQAFAQAHADQAGADAIgFQAIgGAIgLIAPgZIANgbIAKgWIgBg5QgIgKgIAAIgCAAg");
	this.shape_5.setTransform(301,31);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("AgmCQQgMAAgJgHQgJgHgFgLQgGgKgDgMQgCgLAAgKIACgiIAIgtQAFgYAIgZQAIgZAKgVQALgUANgNQAOgNAPAAQAJAAAHADQAHAEAEAGQAFAFACAIQACAHAAAJQgJAEgFgCQgFgCgDgFIgGgLQgCgFgFgCQgMAAgKAMQgKAMgIASQgJASgGAWIgKArIgGAmIgCAZIABAVQAAAKAEAIQAEAIAHAFQAHAEANAAQAPAAAOgJQAPgJANgNQAMgNAJgQQAKgPAEgMIADgBIAEAAIAIABQAEABAAAGQgCAMgIAOQgJANgLANQgMANgNALQgOALgNAIQgMAHgLADIgJABQgFAAgEgBg");
	this.shape_6.setTransform(283.5,26.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AhcBvQgDgBgBgDIgCgWIgBgjIgBgqIgBgqIgCgmIgEgdQAAgIAGgCQAFgBAHACIAEAuIACAlIABAbIACATIAJg1QAEgWAFgOQAFgOAGgHQAFgHAHgBQAGAAAGAKQAFAKAFAQIAIAjIAGAiIASg2QAIgUAGgLQAFgKAFgDQAFgDAHABQAIAAAFAHQAFAGACALIAEAaIACAfIADAfIAEAgQADAPAGANQAFANAKAIIgIAKQgEAFgEgDQgKgHgGgPQgGgQgEgUQgDgTgCgWIgDgmIgDgdQgCgMgCAAQgKgCgLAhQgKAggRA/IgDAGIgFACIgFgBIgEgEIgIgyIgGgpIgFgeQgDgLgEgBQgDgBgDAIIgFAUIgGAeIgGAlIgGApIgIArIgEAEIgGABg");
	this.shape_7.setTransform(243.7,30.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#464646").s().p("AgRBoQgNgCgJgJQgJgJgFgOQgFgNgCgQQgBgQABgPQABgXAHgVQAIgWALgQQAMgQAOgIQANgJANACQAOACAJALQAIAMAFAQQAFAQABAUQABATgBARQgCAUgHARQgHASgLANQgLAMgOAHQgLAHgNAAIgCAAgAgFhMQgJAIgIAOQgIAOgFARQgFASgCAQIgBAZQABANADALQACAKAHAHQAGAHALAAQAIAAAJgGQAJgGAIgLQAIgKAHgNQAGgOACgOQADgNgCgQQgBgQgEgNQgEgNgGgKQgGgKgJgCIgDAAQgJAAgIAHg");
	this.shape_8.setTransform(225.1,30.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#464646").s().p("Ag4BnQgDgCgCgEIgBhQIgBg1IgBgiIAAgSIAAgHIAAgBQAAgDADgCIAGgDIAFABQAEABABADIABBPQADgMAEgKQAEgJAGgIQALgQAPgJQANgJAQgDQAPgDANADQAFABACADQACACAAAEQAAADgBADIgFAEQgPgBgOAEQgNADgMAHQgKAHgIAKQgJAJgEALQgIAPgCAQIgDAiIAAAgIAAAaQgBAEgDACIgGACg");
	this.shape_9.setTransform(212.7,30.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#464646").s().p("AgLCUQgDgCgBgEIgIiOIgiAOQgHAAgDgBQgDgCAAgDIABgFIADgEIApgTIgCgvQAAgXAEgTQAEgTAKgLQAJgKAQACQAIAAAHAFQAIAFAFAIQAFAIADAJQAEAKAAAHQgBADgCACIgEADIgFAAIgEgCQgBgMgDgIQgDgIgEgFQgDgEgEgCIgHgCQgLABgEAHQgFAIgCANQgCAOAAATIACAqIBJgbQADADACADQABAEgFAHIhJAeIAJCUQAAADgDACIgFACIgCAAIgEgBg");
	this.shape_10.setTransform(198.1,26.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#464646").s().p("Ag4BnQgHgHgBgGQAAgHAJgEQAHAFAJABQAKAAAKgDQALgDAJgFIAUgNQAJgHAHgIQAHgHACgHQACgHgCgGQgDgGgKgDIgiAGQgRADgOgDQgOgCgIgJQgJgIABgSQABgSAJgQQAIgPAOgLQANgLARgGQAQgGARABIAGABIAFABIAEADIABAGQgBAFgDADQgDADgGAAQgUgEgQAGQgQAFgKALQgLAKgEANQgFANADALQAHAMAKADQALADAMgBIAXgDQAMgDAKABQAKABAGAGQAHAGAAASQAAALgHALQgHAKgLAJQgLAJgOAIQgOAHgMAFQgOAFgMABIgKABIgJgBg");
	this.shape_11.setTransform(165.2,30.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#464646").s().p("AACBmQgIAAgHgDQgHgCgFgFQgKgKgGgOQgGgOgDgPIgFgcQgCADgGgBIgLgDQgFgCgCgDQgBgEAFgEIAGgCIAFgCIAFgDQACgBAAgEIADggQACgQAGgMQAHgNALgIQALgHATACQAGAAAJADQAIADAIAFQAIAGAGAHQAGAHABAJQACADgFAGIgOALIgVANIgVAMIgTAKIgLAGIAEAcQADAOAEANQAFAMAGAIQAHAIAJAAQAPABALgGQALgFAHgJQAHgJAFgKIAGgVIADgQIACgHQADgBAFABQAFACABAIQAAANgGARQgGARgLAPQgLAOgPAJQgHAEgIACIgIABIgIgBgAgLhTQgHABgFAGQgGAGgDAIQgEAJgBALQgBALABALIBHgpQgLgPgLgEQgIgDgIAAIgHAAg");
	this.shape_12.setTransform(149.1,30.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#464646").s().p("AA/CSQgDgCgCgFIACgeIABgmIgCgoIgDgkQgCgQgEgLQgDgLgFgBQgLgDgKAFQgLAFgIAMQgIALgIAPIgOAiIgLAjIgIAgIgFAZIgBAOIgGABIgHABIgGAAQgCgBAAgEIgGkYQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBABAAIAGAAIAGABIAEADIACDXIAFgTIAJgdIAMggQAIgRALgNQAKgOAOgIQAPgHAUABQAGAEAFAFQAFAFAEAKQAEAJACAOIAFAjIAEA0IABBGIgEAFIgHADIgCAAIgFgBg");
	this.shape_13.setTransform(131.9,26.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#464646").s().p("Ag4BnQgHgHgBgGQAAgHAJgEQAHAFAJABQAKAAAKgDQALgDAJgFIAUgNQAJgHAHgIQAHgHACgHQACgHgCgGQgDgGgKgDIgiAGQgRADgOgDQgOgCgIgJQgJgIABgSQABgSAJgQQAIgPAOgLQANgLARgGQAQgGARABIAGABIAFABIAEADIABAGQgBAFgDADQgDADgGAAQgUgEgQAGQgQAFgKALQgLAKgEANQgFANADALQAHAMAKADQALADAMgBIAXgDQAMgDAKABQAKABAGAGQAHAGAAASQAAALgHALQgHAKgLAJQgLAJgOAIQgOAHgMAFQgOAFgMABIgKABIgJgBg");
	this.shape_14.setTransform(115.2,30.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#464646").s().p("AgBCPQgDgDAAgFIgFjKIAFgCIAEgBIAFACIAEAEIABAvIABA0IACA0IABAwQAAAFgDADQgDACgDAAQgEAAgCgCgAgEh5QgEgBgCgEQgDgEAAgGQAAgFADgCIAHgBQAHAAACAFQABAFAAAHQgCAEgDABIgEABIgCAAg");
	this.shape_15.setTransform(104.9,27);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#464646").s().p("Ag/BpIgEgDIgDgVIgFgjIgGgrIgHgpIgFgjIgEgVQABgFADgEQADgCADAAIAGABIAFAGIAVCbIAEgQIAHgZIAIgeIAJgeIAHgaIAEgPIAGgFIAHgDQADAAADABQAEACACAFIAwCdIAUipIAEgGQADgCADAAQADABADADQACADADAJIgCALIgDAVIgDAcIgEAgIgFAgIgDAcIgDAVIgBALQgDAFgEADQgFACgEAAQgFAAgEgCQgDgDgBgEIgvicIgNA0IgMAqIgKAkIgJAeQgCAEgDABIgGABg");
	this.shape_16.setTransform(91.6,30.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#464646").s().p("AgQCQIgFikIgfAKQgEgBgCgCIgEgGIgBgGQABgDACgBIAngPIAAhgQABgFADgCQAEgCADAAQAEAAADADQADACAAADIAAAXIgBAXIABAXIAAAUIA1gVQAFgBACACQADACABAEQABADgCAEQgBADgDABIg7AbIAAAQIABAeIABAlIAAAlIAAAeIABARQgBALgFAAQgGAAgHgGg");
	this.shape_17.setTransform(58.7,27);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#464646").s().p("Ag4BnQgHgHgBgGQAAgHAJgEQAHAFAJABQAKAAAKgDQALgDAJgFIAUgNQAJgHAHgIQAHgHACgHQACgHgCgGQgDgGgKgDIgiAGQgRADgOgDQgOgCgIgJQgJgIABgSQABgSAJgQQAIgPAOgLQANgLARgGQAQgGARABIAGABIAFABIAEADIABAGQgBAFgDADQgDADgGAAQgUgEgQAGQgQAFgKALQgLAKgEANQgFANADALQAHAMAKADQALADAMgBIAXgDQAMgDAKABQAKABAGAGQAHAGAAASQAAALgHALQgHAKgLAJQgLAJgOAIQgOAHgMAFQgOAFgMABIgKABIgJgBg");
	this.shape_18.setTransform(46,30.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#464646").s().p("AACBmQgIAAgHgDQgHgCgFgFQgKgKgGgOQgGgOgDgPIgFgcQgCADgGgBIgLgDQgFgCgCgDQgBgEAFgEIAGgCIAFgCIAFgDQACgBAAgEIADggQACgQAGgMQAHgNALgIQALgHATACQAGAAAJADQAIADAIAFQAIAGAGAHQAGAHABAJQACADgFAGIgOALIgVANIgVAMIgTAKIgLAGIAEAcQADAOAEANQAFAMAGAIQAHAIAJAAQAPABALgGQALgFAHgJQAHgJAFgKIAGgVIADgQIACgHQADgBAFABQAFACABAIQAAANgGARQgGARgLAPQgLAOgPAJQgHAEgIACIgIABIgIgBgAgLhTQgHABgFAGQgGAGgDAIQgEAJgBALQgBALABALIBHgpQgLgPgLgEQgIgDgIAAIgHAAg");
	this.shape_19.setTransform(30,30.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#464646").s().p("AhSCSIgCgBIgCAAIABkAIgDgKIAAgKIABgEIACgDIADgCIAFABIAFAEIADAGIADAGIABAFIAVgLIAXgJIAXgGQANgCALABIAJACIAJAEIAHAGQADAEgBAFQAAAJgEAKIgKAUIgOATIgPASIgMAPIgKAMQALgFAPgDQAQgDAPABQAPABAMAGQAGAEAEAFQAFAFACAHQABAIgFALQgEAMgJAMQgIALgLANIgXAXIgZAVIgVAQIgTALQgHAEgEgBIgIgOQACABAJgGIAWgQIAagWIAcgZQANgNAJgMQAJgMABgJQACgKgIgGQgIgFgOAAQgOAAgQAFQgQAEgPAGQgPAIgMAJQgLAKgDAKIgBAWIgBAXIAAAXIgCAVIgDAMQgBAEgFAAIgEAAgAgIh7IgTAFQgKADgIAFQgIAFgFAHQgFAGgBAIIgCASIAAAVIABAWIACASIARgOIAXgVIAXgYQALgNAIgMQAIgLACgKQACgKgHgGIgPAAg");
	this.shape_20.setTransform(11.9,26.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,380.9,54.8);


(lib.bestwishesManilla = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464646").s().p("AgICNQgDgDAAgHQAAgHAEgCQAEgDADAAQAFABADAEQAEADAAAFQAAAGgEADQgEADgEAAQgEAAgEgDgAgIBJQgDgCAAgDIABjNQADgFADgBIAEAAIAFACIACADIAAAwIgBA4IAAA3IACAwQgBAEgDACIgGABg");
	this.shape.setTransform(362.6,26.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("AA2BmQgDgBgBgDQgEgHgCgLIgBgZIAAgZQAAgNgCgJQgQAkgOATQgNAUgMAIQgMAJgJgBQgKgBgHgGQgGgGgEgJQgEgIAAgIQgDgNADgTQACgSAFgSQAGgUAJgSQAJgTALgOQALgNAMgHQAGgDAGgBQAHAAAHACIALAAQAFABADAEQADAEABAHIACARQAAAhACAXIAGAoIAHAgQADAOABAQQAAAFgDADQgDADgDABIgDAAIgDgBgAANhTQgKACgIAKQgKAKgIARQgJAQgGASQgGASgDASQgDASACAOQAFAQAHADQAGADAIgFQAIgGAIgLIAPgZIANgbIAKgWIgBg5QgIgKgIAAIgCAAg");
	this.shape_1.setTransform(351.4,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("AgFCQIgDgEIAAkYIAEgDIAEgCIAEABIADAEIACEZQgCADgCACIgFAAg");
	this.shape_2.setTransform(340.8,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464646").s().p("AgBCPQgDgDAAgFIgFjKIAFgCIAEgBIAFACIAEAEIABAvIABA0IACA0IABAwQAAAFgDADQgDACgDAAQgEAAgCgCgAgEh5QgEgBgCgEQgDgEAAgGQAAgFADgCIAHgBQAHAAACAFQABAFAAAHQgCAEgDABIgEABIgCAAg");
	this.shape_3.setTransform(335.4,27);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464646").s().p("AA2BnIgBgWIAAglIgCgrQgCgVgDgTQgEgTgGgNQgHgNgJgBQgJgCgIALQgHAKgIASQgGARgHAWIgMAqIgIAnIgEAbQgBADgDACIgHACIgHgBQgEgCgCgEIAAjGQAAgEADgCIAFgCIAHAAIAFAEIgBCHIAMgvQAFgYAHgUQAIgUAMgMQAGgHAIgEQAHgDALgBQAKgBAIAHQAIAIAFAMQAGANADARIAGAjIAEAkIACAiIAAAcIgBARQgDAGgFACIgDAAQgFAAgDgFg");
	this.shape_4.setTransform(324.5,30.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464646").s().p("AA2BmQgDgBgBgDQgEgHgCgLIgBgZIAAgZQAAgNgCgJQgQAkgOATQgNAUgMAIQgMAJgJgBQgKgBgHgGQgGgGgEgJQgEgIAAgIQgDgNADgTQACgSAFgSQAGgUAJgSQAJgTALgOQALgNAMgHQAGgDAGgBQAHAAAHACIALAAQAFABADAEQADAEABAHIACARQAAAhACAXIAGAoIAHAgQADAOABAQQAAAFgDADQgDADgDABIgDAAIgDgBgAANhTQgKACgIAKQgKAKgIARQgJAQgGASQgGASgDASQgDASACAOQAFAQAHADQAGADAIgFQAIgGAIgLIAPgZIANgbIAKgWIgBg5QgIgKgIAAIgCAAg");
	this.shape_5.setTransform(307.9,31);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("ABvCYIgHgCIgHgFIgWj8QgCgBgDAKIgHAYIgKAhIgLAkIgMAhQgGAQgGAJQgGAJgGABQgFABgDgMIgNgWIgOgeIgQgjIgRghIgRgbQgIgLgIgFQAAAbADAgIAHA/IAHBAQADAgAAAbQACAEgCADQgCADgDACQgDACgEgBQgEgBgDgFQgFgjgCgjIgEhHIgFhHQgDgjgGgjQAAgHACgCIAHgBQAQAEAMAMQAMAMAKAQQAKAQAJASIAQAmIARAjQAIAQAJANIADgCIADgGIAGgQIAKgeIAQgxIAXhIIADgDIAGgCQADAAADACQADADABAFIAGBCIAHBIIAHBJQAFAlAGAlQAAAFgDABQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgBAAg");
	this.shape_6.setTransform(286.7,26.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#464646").s().p("AhcBvQgDgBgBgDIgCgWIgBgjIgBgqIgBgqIgCgmIgEgdQAAgIAGgCQAFgBAHACIAEAuIACAlIABAbIACATIAJg1QAEgWAFgOQAFgOAGgHQAFgHAHgBQAGAAAGAKQAFAKAFAQIAIAjIAGAiIASg2QAIgUAGgLQAFgKAFgDQAFgDAHABQAIAAAFAHQAFAGACALIAEAaIACAfIADAfIAEAgQADAPAGANQAFANAKAIIgIAKQgEAFgEgDQgKgHgGgPQgGgQgEgUQgDgTgCgWIgDgmIgDgdQgCgMgCAAQgKgCgLAhQgKAggRA/IgDAGIgFACIgFgBIgEgEIgIgyIgGgpIgFgeQgDgLgEgBQgDgBgDAIIgFAUIgGAeIgGAlIgGApIgIArIgEAEIgGABg");
	this.shape_7.setTransform(243.7,30.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#464646").s().p("AgRBoQgNgCgJgJQgJgJgFgOQgFgNgCgQQgBgQABgPQABgXAHgVQAIgWALgQQAMgQAOgIQANgJANACQAOACAJALQAIAMAFAQQAFAQABAUQABATgBARQgCAUgHARQgHASgLANQgLAMgOAHQgLAHgNAAIgCAAgAgFhMQgJAIgIAOQgIAOgFARQgFASgCAQIgBAZQABANADALQACAKAHAHQAGAHALAAQAIAAAJgGQAJgGAIgLQAIgKAHgNQAGgOACgOQADgNgCgQQgBgQgEgNQgEgNgGgKQgGgKgJgCIgDAAQgJAAgIAHg");
	this.shape_8.setTransform(225.1,30.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#464646").s().p("Ag4BnQgDgCgCgEIgBhQIgBg1IgBgiIAAgSIAAgHIAAgBQAAgDADgCIAGgDIAFABQAEABABADIABBPQADgMAEgKQAEgJAGgIQALgQAPgJQANgJAQgDQAPgDANADQAFABACADQACACAAAEQAAADgBADIgFAEQgPgBgOAEQgNADgMAHQgKAHgIAKQgJAJgEALQgIAPgCAQIgDAiIAAAgIAAAaQgBAEgDACIgGACg");
	this.shape_9.setTransform(212.7,30.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#464646").s().p("AgLCUQgDgCgBgEIgIiOIgiAOQgHAAgDgBQgDgCAAgDIABgFIADgEIApgTIgCgvQAAgXAEgTQAEgTAKgLQAJgKAQACQAIAAAHAFQAIAFAFAIQAFAIADAJQAEAKAAAHQgBADgCACIgEADIgFAAIgEgCQgBgMgDgIQgDgIgEgFQgDgEgEgCIgHgCQgLABgEAHQgFAIgCANQgCAOAAATIACAqIBJgbQADADACADQABAEgFAHIhJAeIAJCUQAAADgDACIgFACIgCAAIgEgBg");
	this.shape_10.setTransform(198.1,26.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#464646").s().p("Ag4BnQgHgHgBgGQAAgHAJgEQAHAFAJABQAKAAAKgDQALgDAJgFIAUgNQAJgHAHgIQAHgHACgHQACgHgCgGQgDgGgKgDIgiAGQgRADgOgDQgOgCgIgJQgJgIABgSQABgSAJgQQAIgPAOgLQANgLARgGQAQgGARABIAGABIAFABIAEADIABAGQgBAFgDADQgDADgGAAQgUgEgQAGQgQAFgKALQgLAKgEANQgFANADALQAHAMAKADQALADAMgBIAXgDQAMgDAKABQAKABAGAGQAHAGAAASQAAALgHALQgHAKgLAJQgLAJgOAIQgOAHgMAFQgOAFgMABIgKABIgJgBg");
	this.shape_11.setTransform(165.2,30.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#464646").s().p("AACBmQgIAAgHgDQgHgCgFgFQgKgKgGgOQgGgOgDgPIgFgcQgCADgGgBIgLgDQgFgCgCgDQgBgEAFgEIAGgCIAFgCIAFgDQACgBAAgEIADggQACgQAGgMQAHgNALgIQALgHATACQAGAAAJADQAIADAIAFQAIAGAGAHQAGAHABAJQACADgFAGIgOALIgVANIgVAMIgTAKIgLAGIAEAcQADAOAEANQAFAMAGAIQAHAIAJAAQAPABALgGQALgFAHgJQAHgJAFgKIAGgVIADgQIACgHQADgBAFABQAFACABAIQAAANgGARQgGARgLAPQgLAOgPAJQgHAEgIACIgIABIgIgBgAgLhTQgHABgFAGQgGAGgDAIQgEAJgBALQgBALABALIBHgpQgLgPgLgEQgIgDgIAAIgHAAg");
	this.shape_12.setTransform(149.1,30.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#464646").s().p("AA/CSQgDgCgCgFIACgeIABgmIgCgoIgDgkQgCgQgEgLQgDgLgFgBQgLgDgKAFQgLAFgIAMQgIALgIAPIgOAiIgLAjIgIAgIgFAZIgBAOIgGABIgHABIgGAAQgCgBAAgEIgGkYQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBABAAIAGAAIAGABIAEADIACDXIAFgTIAJgdIAMggQAIgRALgNQAKgOAOgIQAPgHAUABQAGAEAFAFQAFAFAEAKQAEAJACAOIAFAjIAEA0IABBGIgEAFIgHADIgCAAIgFgBg");
	this.shape_13.setTransform(131.9,26.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#464646").s().p("Ag4BnQgHgHgBgGQAAgHAJgEQAHAFAJABQAKAAAKgDQALgDAJgFIAUgNQAJgHAHgIQAHgHACgHQACgHgCgGQgDgGgKgDIgiAGQgRADgOgDQgOgCgIgJQgJgIABgSQABgSAJgQQAIgPAOgLQANgLARgGQAQgGARABIAGABIAFABIAEADIABAGQgBAFgDADQgDADgGAAQgUgEgQAGQgQAFgKALQgLAKgEANQgFANADALQAHAMAKADQALADAMgBIAXgDQAMgDAKABQAKABAGAGQAHAGAAASQAAALgHALQgHAKgLAJQgLAJgOAIQgOAHgMAFQgOAFgMABIgKABIgJgBg");
	this.shape_14.setTransform(115.2,30.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#464646").s().p("AgBCPQgDgDAAgFIgFjKIAFgCIAEgBIAFACIAEAEIABAvIABA0IACA0IABAwQAAAFgDADQgDACgDAAQgEAAgCgCgAgEh5QgEgBgCgEQgDgEAAgGQAAgFADgCIAHgBQAHAAACAFQABAFAAAHQgCAEgDABIgEABIgCAAg");
	this.shape_15.setTransform(104.9,27);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#464646").s().p("Ag/BpIgEgDIgDgVIgFgjIgGgrIgHgpIgFgjIgEgVQABgFADgEQADgCADAAIAGABIAFAGIAVCbIAEgQIAHgZIAIgeIAJgeIAHgaIAEgPIAGgFIAHgDQADAAADABQAEACACAFIAwCdIAUipIAEgGQADgCADAAQADABADADQACADADAJIgCALIgDAVIgDAcIgEAgIgFAgIgDAcIgDAVIgBALQgDAFgEADQgFACgEAAQgFAAgEgCQgDgDgBgEIgvicIgNA0IgMAqIgKAkIgJAeQgCAEgDABIgGABg");
	this.shape_16.setTransform(91.6,30.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#464646").s().p("AgQCQIgFikIgfAKQgEgBgCgCIgEgGIgBgGQABgDACgBIAngPIAAhgQABgFADgCQAEgCADAAQAEAAADADQADACAAADIAAAXIgBAXIABAXIAAAUIA1gVQAFgBACACQADACABAEQABADgCAEQgBADgDABIg7AbIAAAQIABAeIABAlIAAAlIAAAeIABARQgBALgFAAQgGAAgHgGg");
	this.shape_17.setTransform(58.7,27);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#464646").s().p("Ag4BnQgHgHgBgGQAAgHAJgEQAHAFAJABQAKAAAKgDQALgDAJgFIAUgNQAJgHAHgIQAHgHACgHQACgHgCgGQgDgGgKgDIgiAGQgRADgOgDQgOgCgIgJQgJgIABgSQABgSAJgQQAIgPAOgLQANgLARgGQAQgGARABIAGABIAFABIAEADIABAGQgBAFgDADQgDADgGAAQgUgEgQAGQgQAFgKALQgLAKgEANQgFANADALQAHAMAKADQALADAMgBIAXgDQAMgDAKABQAKABAGAGQAHAGAAASQAAALgHALQgHAKgLAJQgLAJgOAIQgOAHgMAFQgOAFgMABIgKABIgJgBg");
	this.shape_18.setTransform(46,30.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#464646").s().p("AACBmQgIAAgHgDQgHgCgFgFQgKgKgGgOQgGgOgDgPIgFgcQgCADgGgBIgLgDQgFgCgCgDQgBgEAFgEIAGgCIAFgCIAFgDQACgBAAgEIADggQACgQAGgMQAHgNALgIQALgHATACQAGAAAJADQAIADAIAFQAIAGAGAHQAGAHABAJQACADgFAGIgOALIgVANIgVAMIgTAKIgLAGIAEAcQADAOAEANQAFAMAGAIQAHAIAJAAQAPABALgGQALgFAHgJQAHgJAFgKIAGgVIADgQIACgHQADgBAFABQAFACABAIQAAANgGARQgGARgLAPQgLAOgPAJQgHAEgIACIgIABIgIgBgAgLhTQgHABgFAGQgGAGgDAIQgEAJgBALQgBALABALIBHgpQgLgPgLgEQgIgDgIAAIgHAAg");
	this.shape_19.setTransform(30,30.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#464646").s().p("AhSCSIgCgBIgCAAIABkAIgDgKIAAgKIABgEIACgDIADgCIAFABIAFAEIADAGIADAGIABAFIAVgLIAXgJIAXgGQANgCALABIAJACIAJAEIAHAGQADAEgBAFQAAAJgEAKIgKAUIgOATIgPASIgMAPIgKAMQALgFAPgDQAQgDAPABQAPABAMAGQAGAEAEAFQAFAFACAHQABAIgFALQgEAMgJAMQgIALgLANIgXAXIgZAVIgVAQIgTALQgHAEgEgBIgIgOQACABAJgGIAWgQIAagWIAcgZQANgNAJgMQAJgMABgJQACgKgIgGQgIgFgOAAQgOAAgQAFQgQAEgPAGQgPAIgMAJQgLAKgDAKIgBAWIgBAXIAAAXIgCAVIgDAMQgBAEgFAAIgEAAgAgIh7IgTAFQgKADgIAFQgIAFgFAHQgFAGgBAIIgCASIAAAVIABAWIACASIARgOIAXgVIAXgYQALgNAIgMQAIgLACgKQACgKgHgGIgPAAg");
	this.shape_20.setTransform(11.9,26.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,367.8,54.8);


(lib.ville7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.CompoundPath();
	this.instance.parent = this;
	this.instance.setTransform(40.1,19.4,1,1,0,0,0,40.1,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.3,38.8);


(lib.ville5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(40.1,19.1,1,1,0,0,0,40.1,19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.1,38.2);


(lib.ville4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(8.8,18.7,1,1,0,0,0,8.8,14.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnWCsIAAgSICOAAIAAgPIAKAAIAAjpIADAAIAAgIIAKAAIAAAIIAOAAIAAASIAbAAIAADmIAUAAIAAhWIAOAAIAAhXIAgAAIAACtIAGAAIAAjfIAdAAIAAg7IA3AAIAAEaIAGAAIAAjAIAQAAIAAgNIAGAAIAAgeIAPAAIAAAeIAGAAIAAAfIAhAAIAACuIAVAAIAAh8IAGAAIAAguIAgAAIAAgSIA6AAIAAASIAGAAIAACqIAHAAIAAkmIAkAAIAAgJIAKAAIAAAJIAUAAIAAB1IANAAIAAAjIAOAAIAACOIAHAAIAAiuIASAAIAAAKIAIAAIAAALIAEAAIAACZIAHAAIAAiZIADAAIAAgRIARAAIAAgxIAMAAIAAgcIAyAAIAAD3IAHAAIAAkzIAJAAIAAgSIAsAAIAAASIAJAAIAAB3IAKAAIAAC8IAJAAIAAjnIA9AAIAAD5g");
	this.shape.setTransform(48.9,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,34.5);


(lib.ville3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.CompoundPath_1();
	this.instance.parent = this;
	this.instance.setTransform(40.1,21.4,1,1,0,0,0,40.1,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.3,42.8);


(lib.URL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Symbole34("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(84.5,13.1,1,1,0,0,0,84.5,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AsjAAIZHAA");
	this.shape.setTransform(85.7,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Calque 3
	this.instance_1 = new lib.Symbole35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(471.2,14.9,1,1,0,180,0,102.5,27.5);
	this.instance_1.alpha = 0;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.3,-12.6,205,55);


(lib.Symbole20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Symbole19("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(8.7,9.3,0.216,0.216,0,0,0,40,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.3,18.6);


(lib.Symbole3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.rectangle();
	this.instance.parent = this;
	this.instance.setTransform(47.1,11,1.106,1,0,0,0,42.6,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.3,22);


(lib.Symbole2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		/* Arrêter la lecture à partir de cette image
		Le scénario arrête/met en pause la lecture à partir de cette image lorsque vous insérez ce code.
		Vous pouvez également utiliser ce code pour arrêter/mettre en pause le scénario des clips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Calque 1
	this.instance = new lib.Symbole1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(11,-15.7,1,1,0,0,0,11.5,2.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-2.2,alpha:1},3,cjs.Ease.get(1)).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-18.5,23,3.8);


(lib.red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.reddot("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3.8,3.8,1,1,0,0,0,3.8,3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.red, new cjs.Rectangle(0,0,7.5,7.5), null);


(lib.rectangleover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Calque 1
	this.instance = new lib.Symbole3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(47.1,11,1,1,0,0,0,47.1,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.13,scaleY:1.18,x:47.2},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.3,22);


(lib.rectangleanimé = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Symbole3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(47.1,11,1,1,0,0,0,47.1,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.13,scaleY:1.18,x:47.2},2).to({regX:47,regY:10.8,scaleX:1,scaleY:1,x:43.1,y:9.4},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.3,22);


(lib.pomme_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Symbole7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-699,381,1,1,0,0,180,700,375);

	this.instance_1 = new lib.Symbole7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(700,381,1,1,0,0,0,700,375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1399,6,2799,750);


(lib.photo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Symbole26("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(319.6,223,1,1,0,0,0,297.5,197.5);

	this.instance_1 = new lib.copiebestwishes3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(308.6,494.3,1,1.003,0,4.2,0,190.4,27.4);
	this.instance_1.alpha = 0.781;

	this.instance_2 = new lib.copiebestwishes2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(322,456.3,1,1.003,0,4.2,0,190.4,27.4);

	this.instance_3 = new lib.Symbole6("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(331.9,496.3,1,1,0,0,0,203.8,27.4);

	this.instance_4 = new lib.Symbole5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(319.5,264.9,1,1,0,0,0,319.5,264.9);

	this.instance_5 = new lib.shadow_1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(322.5,281,1,1,0,0,0,371.5,322);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-41,743,644);


(lib.peche_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Symbole25("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-698,381,1,1,0,0,180,700,375);

	this.instance_1 = new lib.Symbole25("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(701,381,1,1,0,0,0,700,375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1398,6,2799,750);


(lib.PARISteam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Imagebitmap20();
	this.instance.parent = this;
	this.instance.setTransform(22,22);

	this.instance_1 = new lib.copiePARISbestwishes("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(306.9,492.1,1,1.003,0,4.2,0,190.4,27.4);
	this.instance_1.alpha = 0.59;

	this.instance_2 = new lib.PARISbestwishes("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(333.9,454.2,1,1.003,0,4.2,0,190.4,27.4);

	this.instance_3 = new lib.Symbole6("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(331.9,496.3,1,1,0,0,0,203.8,27.4);

	this.instance_4 = new lib.Symbole5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(319.5,264.9,1,1,0,0,0,319.5,264.9);

	this.instance_5 = new lib.shadow_1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(322.5,281,1,1,0,0,0,371.5,322);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-41,743,644);


(lib.PARISfond = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Symbole32("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-700,381,1,1,0,0,180,700,375);

	this.instance_1 = new lib.Symbole32("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(700,381,1,1,0,0,0,700,375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1400,6,2800,750);


(lib.MEteam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Imagebitmap19();
	this.instance.parent = this;
	this.instance.setTransform(22,24);

	this.instance_1 = new lib.MEwishes("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(297.7,468,1,1.003,0,4.2,0,190.4,27.4);

	this.instance_2 = new lib.Symbole6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(331.9,496.3,1,1,0,0,0,203.8,27.4);

	this.instance_3 = new lib.Symbole5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(319.5,264.9,1,1,0,0,0,319.5,264.9);

	this.instance_4 = new lib.shadow_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(322.5,281,1,1,0,0,0,371.5,322);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-41,743,644);


(lib.MEfond = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Symbole31("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-699,381,1,1,0,0,180,700,375);

	this.instance_1 = new lib.Symbole31("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(701,381,1,1,0,0,0,700,375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1399,6,2800,750);


(lib.manilleteam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.bestwishesManilla("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(302.2,475.4,1,1.003,0,4.2,0,190.4,27.4);

	this.instance_1 = new lib.Symbole6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(331.9,496.3,1,1,0,0,0,203.8,27.4);

	this.instance_2 = new lib.Imagebitmap10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(22.1,25.5);

	this.instance_3 = new lib.Symbole5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(319.5,264.9,1,1,0,0,0,319.5,264.9);

	this.instance_4 = new lib.shadow_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(322.5,281,1,1,0,0,0,371.5,322);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-41,743,644);


(lib.manillefond = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Symbole30("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-700,381,1,1,0,0,180,700,375);

	this.instance_1 = new lib.Symbole30("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(700,381,1,1,0,0,0,700,375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1400,6,2800,750);


(lib.Lookdeeper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Symbole29("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(128.8,27.9,1,1,0,0,0,128.8,27.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Lookdeeper, new cjs.Rectangle(0,0,257.7,56), null);


(lib.logo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.Symbole24("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(286.4,89.5,1.011,1.011,0,0,0,276.6,91.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.7,-2.8,559.6,184.5);


(lib.Indonesiateam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Imagebitmap18();
	this.instance.parent = this;
	this.instance.setTransform(22,26);

	this.instance_1 = new lib.Indonesiawishes("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(302.2,475.4,1,1.003,0,4.2,0,190.4,27.4);

	this.instance_2 = new lib.Symbole6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(331.9,496.3,1,1,0,0,0,203.8,27.4);

	this.instance_3 = new lib.Symbole5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(319.5,264.9,1,1,0,0,0,319.5,264.9);

	this.instance_4 = new lib.shadow_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(322.5,281,1,1,0,0,0,371.5,322);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-41,743,644);


(lib.Indonesiafond = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Indonesiaimg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-700,381,1,1,0,0,180,700,375);

	this.instance_1 = new lib.Indonesiaimg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(700,381,1,1,0,0,0,700,375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1400,6,2800,750);


(lib.copieLookdeeper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.copieSymbole29("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(128.8,27.9,1,1,0,0,0,128.8,27.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.copieLookdeeper, new cjs.Rectangle(0,0,257.7,56), null);


(lib.canadaphoto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.canadameilleursvoeux("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(294,491.2,1,1.003,0,4.2,0,190.4,27.4);
	this.instance.alpha = 0.68;

	this.instance_1 = new lib.canadabestwishes("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(301.9,447.5,1,1.003,0,4.2,0,190.4,27.4);

	this.instance_2 = new lib.Symbole6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(331.9,496.3,1,1,0,0,0,203.8,27.4);

	this.instance_3 = new lib.Imagebitmap9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(23,24,0.885,0.885);

	this.instance_4 = new lib.Symbole5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(319.5,264.9,1,1,0,0,0,319.5,264.9);

	this.instance_5 = new lib.shadow_1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(322.5,281,1,1,0,0,0,371.5,322);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-41,743,644);


(lib.bt7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.txtville7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(66.7,11.1,1,1,0,0,0,42,10.5);

	this.instance_1 = new lib.rectangle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(47.1,11,1.106,1,0,0,0,42.6,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(2));

	// Calque 2
	this.instance_2 = new lib.rectangleover();
	this.instance_2.parent = this;
	this.instance_2.setTransform(47.1,11,1,1,0,0,0,47.1,11);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.3,22);


(lib.bt6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.txtville6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(47.7,11.1,1,1,0,0,0,42,10.5);

	this.instance_1 = new lib.rectangle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(47.1,11,1.106,1,0,0,0,42.6,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(2));

	// Calque 2
	this.instance_2 = new lib.rectangleover();
	this.instance_2.parent = this;
	this.instance_2.setTransform(47.1,11,1,1,0,0,0,47.1,11);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.3,22);


(lib.bt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.txtville5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(55.7,11.1,1,1,0,0,0,42,10.5);

	this.instance_1 = new lib.rectangle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(47.1,11,1.106,1,0,0,0,42.6,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(2));

	// Calque 2
	this.instance_2 = new lib.rectangleover();
	this.instance_2.parent = this;
	this.instance_2.setTransform(47.1,11,1,1,0,0,0,47.1,11);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.3,22);


(lib.bt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.txtville4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(57.7,11.1,1,1,0,0,0,42,10.5);

	this.instance_1 = new lib.rectangle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(47.1,11,1.106,1,0,0,0,42.6,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(2));

	// Calque 2
	this.instance_2 = new lib.rectangleover();
	this.instance_2.parent = this;
	this.instance_2.setTransform(47.1,11,1,1,0,0,0,47.1,11);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.3,22);


(lib.bt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.txtville3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(47.7,11.1,1,1,0,0,0,42,10.5);

	this.instance_1 = new lib.rectangle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(47.1,11,1.106,1,0,0,0,42.6,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(2));

	// Calque 2
	this.instance_2 = new lib.rectangleover();
	this.instance_2.parent = this;
	this.instance_2.setTransform(47.1,11,1,1,0,0,0,47.1,11);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.3,22);


(lib.bt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.txtville2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(50.7,11.1,1,1,0,0,0,42,10.5);

	this.instance_1 = new lib.rectangle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(47.1,11,1.106,1,0,0,0,42.6,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(2));

	// Calque 3
	this.instance_2 = new lib.rectangleover();
	this.instance_2.parent = this;
	this.instance_2.setTransform(47.1,11,1,1,0,0,0,47.1,11);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.3,22);


(lib.bt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 2
	this.instance = new lib.txtville1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(47.2,10.5,1,1,0,0,0,42,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Calque 1
	this.instance_1 = new lib.Symbole3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(47.1,11,1,1,0,0,0,47.1,11);

	this.instance_2 = new lib.rectangleover();
	this.instance_2.parent = this;
	this.instance_2.setTransform(47.1,11,1,1,0,0,0,47.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.3,22);


(lib.b7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3
	this.instance = new lib.ville7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(66.5,1.5,1,1,0,0,0,54,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Calque 4
	this.instance_1 = new lib.Symbole2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(54.1,73,1,1,0,0,0,11.5,2.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(3));

	// Calque 1
	this.instance_2 = new lib.txtville7("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(73.1,51.5,1,1,0,0,0,42,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4));

	// Calque 2
	this.instance_3 = new lib.rectanglegriis("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(54.1,30.4,1,1,0,0,0,64.5,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-12,129,89.4);


(lib.b6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3
	this.instance = new lib.ville6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(67.1,5.5,1,1,0,0,0,54,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Calque 4
	this.instance_1 = new lib.Symbole2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(54.1,73,1,1,0,0,0,11.5,2.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(3));

	// Calque 1
	this.instance_2 = new lib.txtville6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(56.1,51.5,1,1,0,0,0,42,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4));

	// Calque 2
	this.instance_3 = new lib.rectanglegriis("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(54.1,30.4,1,1,0,0,0,64.5,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-8,129,85.4);


(lib.b5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3
	this.instance = new lib.ville5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(66.5,1.7,1,1,0,0,0,54,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Calque 4
	this.instance_1 = new lib.Symbole2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(54.1,73,1,1,0,0,0,11.5,2.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(3));

	// Calque 1
	this.instance_2 = new lib.txtville5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(63.1,51.5,1,1,0,0,0,42,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4));

	// Calque 2
	this.instance_3 = new lib.rectanglegriis("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(54.1,30.4,1,1,0,0,0,64.5,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-11.8,129,89.2);


(lib.b4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3
	this.instance = new lib.ville4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(58.5,4.5,1,1,0,0,0,54,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Calque 4
	this.instance_1 = new lib.Symbole2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(54.1,73,1,1,0,0,0,11.5,2.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(3));

	// Calque 1
	this.instance_2 = new lib.txtville4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(63.1,51.5,1,1,0,0,0,42,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4));

	// Calque 2
	this.instance_3 = new lib.rectanglegriis("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(54.1,30.4,1,1,0,0,0,64.5,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-9,129,86.4);


(lib.b3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3
	this.instance = new lib.ville3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(69.5,-2.9,1,1,0,0,0,54,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Calque 4
	this.instance_1 = new lib.Symbole2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(54.1,73,1,1,0,0,0,11.5,2.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(3));

	// Calque 1
	this.instance_2 = new lib.txtville3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(56.1,51.5,1,1,0,0,0,42,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4));

	// Calque 2
	this.instance_3 = new lib.rectanglegriis("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(54.1,30.4,1,1,0,0,0,64.5,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-16.4,129,93.8);


(lib.b2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3
	this.instance = new lib.ville2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(65.1,-7.1,1,1,0,0,0,54,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Calque 4
	this.instance_1 = new lib.Symbole2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(57.1,73,1,1,0,0,0,11.5,2.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(3));

	// Calque 1
	this.instance_2 = new lib.txtville2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(59.1,51.5,1,1,0,0,0,42,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4));

	// Calque 2
	this.instance_3 = new lib.rectanglegriis("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(54.1,30.4,1,1,0,0,0,64.5,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-20.6,129,98);


(lib.b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3
	this.instance = new lib.ville1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(52.5,13.5,1,1,0,0,0,54,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Calque 4
	this.instance_1 = new lib.Symbole2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(54.1,73,1,1,0,0,0,11.5,2.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(3));

	// Calque 1
	this.instance_2 = new lib.txtville1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(54.1,51.5,1,1,0,0,0,42,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4));

	// Calque 2
	this.instance_3 = new lib.rectanglegriis("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(54.1,30.4,1,1,0,0,0,64.5,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,0,129,77.4);


(lib.Symbole28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.red();
	this.instance.parent = this;
	this.instance.setTransform(329.8,105.3,1,1,0,0,0,3.8,3.8);

	this.instance_1 = new lib.red();
	this.instance_1.parent = this;
	this.instance_1.setTransform(339.3,83.3,1,1,0,0,0,3.8,3.8);

	this.instance_2 = new lib.red();
	this.instance_2.parent = this;
	this.instance_2.setTransform(346.8,39.3,1,1,0,0,0,3.8,3.8);

	this.instance_3 = new lib.red();
	this.instance_3.parent = this;
	this.instance_3.setTransform(260.3,64.3,1,1,0,0,0,3.8,3.8);

	this.instance_4 = new lib.red();
	this.instance_4.parent = this;
	this.instance_4.setTransform(144.8,3.8,1,1,0,0,0,3.8,3.8);

	this.instance_5 = new lib.red();
	this.instance_5.parent = this;
	this.instance_5.setTransform(15.8,11.3,1,1,0,0,0,3.8,3.8);

	this.instance_6 = new lib.red();
	this.instance_6.parent = this;
	this.instance_6.setTransform(3.8,14.8,1,1,0,0,0,3.8,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350.5,109);


// stage content:
(lib.sialvoeux2017alt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{musique:3,seq7:553,seq6:454,seq5:357,seq4:259,seq3:163,seq1:67,home:0,intro:8});

	// timeline functions:
	this.frame_3 = function() {
		playSound("musique",-1);
	}
	this.frame_18 = function() {
		/* Cliquer pour atteindre l’image et démarrer la lecture
		Cliquez sur l’occurrence de symbole spécifiée pour déplacer la tête de lecture vers l’image sélectionnée dans le scénario et poursuivre la lecture à partir de cette image.
		Ce code peut être utilisé sur le scénario principal ou sur les scénarios des clips.
		
		Instructions :
		1. Dans le code ci-dessous, remplacez le chiffre 5 par le numéro de l’image vers laquelle vous souhaitez que la tête de lecture se déplace lorsque vous cliquez sur l’occurrence de symbole.
		2. Les numéros d’image dans EaselJS commencent à 0 au lieu de 1
		*/
		
		/* Cliquer pour atteindre l’image et démarrer la lecture
		Cliquez sur l’occurrence de symbole spécifiée pour déplacer la tête de lecture vers l’image sélectionnée dans le scénario et poursuivre la lecture à partir de cette image.
		Ce code peut être utilisé sur le scénario principal ou sur les scénarios des clips.
		
		Instructions :
		1. Dans le code ci-dessous, remplacez le chiffre 5 par le numéro de l’image vers laquelle vous souhaitez que la tête de lecture se déplace lorsque vous cliquez sur l’occurrence de symbole.
		2. Les numéros d’image dans EaselJS commencent à 0 au lieu de 1
		*/
		
		this.button_0.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_20.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_20() {
			this.gotoAndPlay("home");
		}
		
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		this.b_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		this.b_2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame() {
			this.gotoAndPlay("seq1");
		}
		
		
		this.button_2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2() {
			this.gotoAndPlay("seq1");
		}
		
		this.button_3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		this.b_3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3() {
			this.gotoAndPlay("seq3");
		}
		
		this.button_4.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		this.b_4.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4() {
			this.gotoAndPlay("seq4");
		}
		
		this.button_5.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		this.b_5.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5() {
			this.gotoAndPlay("seq5");
		}
		
		this.button_6.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		this.b_6.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_6() {
			this.gotoAndPlay("seq6");
		}
		
		this.button_7.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_7.bind(this));
		this.b_7.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_7.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_7() {
			this.gotoAndPlay("seq7");
		}
		
		
		this.url2.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://www.sial-network.com/", "_blank");
		}
		/* Cliquer pour atteindre la page Web
		Cliquez sur l’occurrence de symbole spécifiée pour charger l’URL dans une nouvelle fenêtre de navigateur.
		
		Instructions :
		1. Remplacez http://www.adobe.com par l’adresse URL de votre choix.
		      Maintenez les guillemets ("").
		*/
		
		this.url.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("https://www.sial-network.com/", "_blank");
		}
	}
	this.frame_670 = function() {
		/* Cliquer pour atteindre la page Web
		Cliquez sur l’occurrence de symbole spécifiée pour charger l’URL dans une nouvelle fenêtre de navigateur.
		
		Instructions :
		1. Remplacez http://www.adobe.com par l’adresse URL de votre choix.
		      Maintenez les guillemets ("").
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(15).call(this.frame_18).wait(652).call(this.frame_670).wait(77));

	// active
	this.instance = new lib.Symbole27("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(206.9,692.8,1,1,180,0,0,8.4,4.2);
	this.instance._off = true;

	this.instance_1 = new lib.Symbole27("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(356.9,692.8,1,1,180,0,0,8.4,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},76).to({state:[{t:this.instance}]},87).to({state:[{t:this.instance}]},96).to({state:[{t:this.instance}]},96).to({state:[{t:this.instance}]},99).to({state:[{t:this.instance}]},98).to({state:[]},99).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(76).to({_off:false},0).wait(87).to({x:489.9,y:693.8},0).wait(96).to({x:619.9},0).wait(96).to({x:765.9},0).wait(99).to({x:908.9},0).wait(98).to({x:1048.9},0).to({_off:true},99).wait(96));

	// Home
	this.button_0 = new lib.Symbole20();
	this.button_0.parent = this;
	this.button_0.setTransform(71.6,679.8,1,1,0,0,0,8.7,9.3);
	new cjs.ButtonHelper(this.button_0, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_0).wait(747));

	// 7
	this.button_7 = new lib.b7();
	this.button_7.parent = this;
	this.button_7.setTransform(994.9,662.3);
	new cjs.ButtonHelper(this.button_7, 0, 1, 2, false, new lib.b7(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_7).wait(747));

	// 6
	this.button_6 = new lib.b6();
	this.button_6.parent = this;
	this.button_6.setTransform(852.9,662.3);
	new cjs.ButtonHelper(this.button_6, 0, 1, 2, false, new lib.b6(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_6).wait(747));

	// 5
	this.button_5 = new lib.b5();
	this.button_5.parent = this;
	this.button_5.setTransform(713,662.3);
	new cjs.ButtonHelper(this.button_5, 0, 1, 2, false, new lib.b5(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_5).wait(747));

	// 4
	this.button_4 = new lib.b4();
	this.button_4.parent = this;
	this.button_4.setTransform(568,662.3);
	new cjs.ButtonHelper(this.button_4, 0, 1, 2, false, new lib.b4(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_4).wait(747));

	// 3
	this.button_3 = new lib.b3();
	this.button_3.parent = this;
	this.button_3.setTransform(434.8,663.5);
	new cjs.ButtonHelper(this.button_3, 0, 1, 2, false, new lib.b3(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_3).wait(747));

	// 2
	this.button_2 = new lib.b2();
	this.button_2.parent = this;
	this.button_2.setTransform(299,663.2);
	new cjs.ButtonHelper(this.button_2, 0, 1, 2, false, new lib.b2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_2).wait(747));

	// 1
	this.button_1 = new lib.b1();
	this.button_1.parent = this;
	this.button_1.setTransform(205.5,695.1,1,1,0,0,0,54,32.6);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.b1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(747));

	// Calque 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ehg3AAUIAAgnMDBvAAAIAAAng");
	this.shape.setTransform(620.6,687.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(747));

	// Calque 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464646").s().p("Ehh9AEYIAAovMDD7AAAIAAIvg");
	this.shape_1.setTransform(620.6,713.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(747));

	// FlashAICB
	this.instance_2 = new lib.PARISlogo("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(137.6,63.4,0.449,0.449,0,0,0,241.8,90.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(561).to({_off:false},0).to({regX:241.6,regY:90.7,scaleX:0.32,scaleY:0.32,x:137.5,alpha:1},5,cjs.Ease.get(1)).wait(80).to({startPosition:0},0).to({alpha:0},3).to({_off:true},2).wait(96));

	// Calque 20
	this.instance_3 = new lib.PARISteam("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(404.6,378,0.916,0.916,0,0,0,319.7,264.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(580).to({_off:false},0).to({scaleX:0.93,scaleY:0.93,rotation:-1.2,x:410.6,y:368.9,alpha:1},3).wait(63).to({startPosition:0},0).to({alpha:0},3).to({_off:true},2).wait(96));

	// Calque 17
	this.instance_4 = new lib.Lookdeeper();
	this.instance_4.parent = this;
	this.instance_4.setTransform(869.8,342.7,1,1,0,0,0,128.8,27.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(584).to({_off:false},0).to({alpha:1},3).wait(59).to({alpha:0},3).to({_off:true},2).wait(96));

	// Calque 15
	this.instance_5 = new lib.PARISfond("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(619,366,1,1,0,0,0,700,375);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(553).to({_off:false},0).to({alpha:0.172},1).to({alpha:1},5).wait(16).to({startPosition:0},0).wait(1).to({regX:0,regY:381,x:-73.3,y:372.1},0).wait(1).to({x:-49.8,y:372.2},0).wait(1).to({x:-11.5,y:372.3},0).wait(1).to({x:35.2,y:372.4},0).wait(1).to({x:80.7,y:372.6},0).wait(1).to({x:116.1,y:372.7},0).wait(1).to({x:137.3,y:372.8},0).wait(1).to({regX:700,regY:375,x:844,y:366.8},0).wait(63).to({startPosition:0},0).to({alpha:0},3).to({_off:true},2).wait(96));

	// FlashAICB
	this.instance_6 = new lib.MElogo("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(137.6,63.4,0.449,0.449,0,0,0,241.8,90.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(462).to({_off:false},0).to({regX:241.6,regY:90.7,scaleX:0.32,scaleY:0.32,x:137.5,alpha:1},5,cjs.Ease.get(1)).wait(81).to({startPosition:0},0).to({alpha:0},3).to({_off:true},1).wait(195));

	// Calque 29
	this.instance_7 = new lib.MEteam("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(404.6,378,0.916,0.916,0,0,0,319.7,264.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(481).to({_off:false},0).to({scaleX:0.93,scaleY:0.93,rotation:-1.2,x:410.6,y:368.9,alpha:1},3).wait(64).to({startPosition:0},0).to({alpha:0},3).to({_off:true},1).wait(195));

	// Calque 28
	this.instance_8 = new lib.Lookdeeper();
	this.instance_8.parent = this;
	this.instance_8.setTransform(869.8,342.7,1,1,0,0,0,128.8,27.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(485).to({_off:false},0).to({alpha:1},4).wait(59).to({alpha:0},3).to({_off:true},1).wait(195));

	// Calque 26
	this.instance_9 = new lib.MEfond("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(619,366,1,1,0,0,0,700,375);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(454).to({_off:false},0).to({alpha:0.172},1).to({alpha:1},5).wait(16).to({startPosition:0},0).wait(1).to({regX:1,regY:381,x:-72.3,y:372.1},0).wait(1).to({x:-48.8,y:372.2},0).wait(1).to({x:-10.5,y:372.3},0).wait(1).to({x:36.2,y:372.4},0).wait(1).to({x:81.7,y:372.6},0).wait(1).to({x:117.1,y:372.7},0).wait(1).to({x:138.3,y:372.8},0).wait(1).to({regX:700,regY:375,x:844,y:366.8},0).wait(64).to({startPosition:0},0).to({alpha:0},3).to({_off:true},1).wait(195));

	// FlashAICB
	this.instance_10 = new lib.Indonesialogo("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(137.6,63.4,0.449,0.449,0,0,0,241.8,90.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(365).to({_off:false},0).to({regX:241.6,regY:90.7,scaleX:0.32,scaleY:0.32,x:137.5,alpha:1},5,cjs.Ease.get(1)).wait(80).to({startPosition:0},0).to({alpha:0},3).to({_off:true},1).wait(293));

	// Calque 24
	this.instance_11 = new lib.Indonesiateam("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(404.6,378,0.916,0.916,0,0,0,319.7,264.9);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(384).to({_off:false},0).to({scaleX:0.93,scaleY:0.93,rotation:-1.2,x:410.6,y:368.9,alpha:1},3).wait(63).to({startPosition:0},0).to({alpha:0},3).to({_off:true},1).wait(293));

	// Calque 23
	this.instance_12 = new lib.copieLookdeeper();
	this.instance_12.parent = this;
	this.instance_12.setTransform(869.8,342.7,1,1,0,0,0,128.8,27.9);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(388).to({_off:false},0).to({alpha:1},3).wait(59).to({alpha:0},3).to({_off:true},1).wait(293));

	// Calque 22
	this.instance_13 = new lib.Indonesiafond("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(619,366,1,1,0,0,0,700,375);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(357).to({_off:false},0).to({alpha:0.172},1).to({alpha:1},5).wait(16).to({startPosition:0},0).wait(1).to({regX:0,regY:381,x:-73.3,y:372.1},0).wait(1).to({x:-49.8,y:372.2},0).wait(1).to({x:-11.5,y:372.3},0).wait(1).to({x:35.2,y:372.4},0).wait(1).to({x:80.7,y:372.6},0).wait(1).to({x:116.1,y:372.7},0).wait(1).to({x:137.3,y:372.8},0).wait(1).to({regX:700,regY:375,x:844,y:366.8},0).wait(63).to({startPosition:0},0).to({alpha:0},3).to({_off:true},1).wait(293));

	// FlashAICB
	this.instance_14 = new lib.manillelogo("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(137.6,63.4,0.449,0.449,0,0,0,241.8,90.8);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.instance_15 = new lib.Symbole21("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(137.5,63.4,0.316,0.316,0,0,0,241.6,90.7);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(267).to({_off:false},0).to({regX:241.6,regY:90.7,scaleX:0.32,scaleY:0.32,x:137.5,alpha:1},5,cjs.Ease.get(1)).to({_off:true},80).wait(395));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(352).to({_off:false},0).to({alpha:0},3).to({_off:true},1).wait(391));

	// Calque 33
	this.instance_16 = new lib.manilleteam("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(404.6,378,0.916,0.916,0,0,0,319.7,264.9);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(286).to({_off:false},0).to({scaleX:0.93,scaleY:0.93,rotation:-1.2,x:410.6,y:368.9,alpha:1},3).wait(63).to({startPosition:0},0).to({alpha:0},3).to({_off:true},1).wait(391));

	// Calque 32
	this.instance_17 = new lib.Lookdeeper();
	this.instance_17.parent = this;
	this.instance_17.setTransform(869.8,342.7,1,1,0,0,0,128.8,27.9);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(290).to({_off:false},0).to({alpha:1},3).wait(59).to({alpha:0},3).to({_off:true},1).wait(391));

	// Calque 31
	this.instance_18 = new lib.pomme_1("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(619,366,1,1,0,0,0,700,375);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.instance_19 = new lib.manillefond("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(619,366,1,1,0,0,0,700,375);
	this.instance_19.alpha = 0.172;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(259).to({_off:false},0).to({_off:true,alpha:0.172},1).wait(487));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(259).to({_off:false},1).to({alpha:1},5).wait(16).to({startPosition:0},0).wait(1).to({regX:0,regY:381,x:-73.3,y:372.1},0).wait(1).to({x:-49.8,y:372.2},0).wait(1).to({x:-11.5,y:372.3},0).wait(1).to({x:35.2,y:372.4},0).wait(1).to({x:80.7,y:372.6},0).wait(1).to({x:116.1,y:372.7},0).wait(1).to({x:137.3,y:372.8},0).wait(1).to({regX:700,regY:375,x:844,y:366.8},0).wait(63).to({startPosition:0},0).to({alpha:0},3).to({_off:true},1).wait(391));

	// FlashAICB
	this.instance_20 = new lib.Symbole24("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(137.6,63.4,0.449,0.449,0,0,0,241.8,90.8);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.instance_21 = new lib.logo2("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(137.5,63.4,0.316,0.316,0,0,0,241.6,90.7);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(171).to({_off:false},0).to({_off:true,regX:241.6,regY:90.7,scaleX:0.32,scaleY:0.32,x:137.5,alpha:1},5,cjs.Ease.get(1)).wait(571));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(171).to({_off:false},5,cjs.Ease.get(1)).wait(79).to({startPosition:0},0).to({alpha:0},3).to({_off:true},1).wait(488));

	// Calque 16
	this.instance_22 = new lib.photo2("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(404.6,378,0.916,0.916,0,0,0,319.7,264.9);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(190).to({_off:false},0).to({scaleX:0.93,scaleY:0.93,rotation:-1.2,x:410.6,y:368.9,alpha:1},3).wait(62).to({startPosition:0},0).to({alpha:0},3).to({_off:true},1).wait(488));

	// Calque 8
	this.instance_23 = new lib.Lookdeeper();
	this.instance_23.parent = this;
	this.instance_23.setTransform(869.8,342.7,1,1,0,0,0,128.8,27.9);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(194).to({_off:false},0).to({alpha:1},3).wait(58).to({alpha:0},3).to({_off:true},1).wait(488));

	// Calque 18
	this.instance_24 = new lib.peche_1("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(619,366,1,1,0,0,0,700,375);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(163).to({_off:false},0).to({alpha:0.172},1).to({alpha:1},5).wait(16).to({startPosition:0},0).wait(1).to({regX:1.5,regY:381,x:-71.8,y:372.1},0).wait(1).to({x:-48.3,y:372.2},0).wait(1).to({x:-10,y:372.3},0).wait(1).to({x:36.7,y:372.4},0).wait(1).to({x:82.2,y:372.6},0).wait(1).to({x:117.6,y:372.7},0).wait(1).to({x:138.8,y:372.8},0).wait(1).to({regX:700,regY:375,x:844,y:366.8},0).wait(62).to({startPosition:0},0).to({alpha:0},3).to({_off:true},1).wait(488));

	// FlashAICB
	this.instance_25 = new lib.Symbole21("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(137.6,63.4,0.449,0.449,0,0,0,241.8,90.8);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(75).to({_off:false},0).to({regX:241.6,regY:90.7,scaleX:0.32,scaleY:0.32,x:137.5,alpha:1},5,cjs.Ease.get(1)).wait(77).to({startPosition:0},0).to({alpha:0},4).to({_off:true},1).wait(585));

	// Calque 10
	this.instance_26 = new lib.canadaphoto("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(404.6,378,0.916,0.916,0,0,0,319.7,264.9);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(91).to({_off:false},0).to({scaleX:0.93,scaleY:0.93,rotation:-1.2,x:410.6,y:368.9,alpha:1},3).wait(63).to({startPosition:0},0).to({alpha:0},4).to({_off:true},1).wait(585));

	// Calque 5
	this.instance_27 = new lib.Lookdeeper();
	this.instance_27.parent = this;
	this.instance_27.setTransform(869.8,342.7,1,1,0,0,0,128.8,27.9);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(95).to({_off:false},0).to({alpha:1},3).wait(59).to({alpha:0},4).to({_off:true},1).wait(585));

	// Calque 1
	this.instance_28 = new lib.pomme_1("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(619,366,1,1,0,0,0,700,375);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(67).to({_off:false},0).to({alpha:0.172},1).to({alpha:1},5).wait(13).to({startPosition:0},0).wait(1).to({regX:0.5,regY:381,x:-72.8,y:372.1},0).wait(1).to({x:-49.3,y:372.2},0).wait(1).to({x:-11,y:372.3},0).wait(1).to({x:35.7,y:372.4},0).wait(1).to({x:81.2,y:372.6},0).wait(1).to({x:116.6,y:372.7},0).wait(1).to({x:137.8,y:372.8},0).wait(1).to({regX:700,regY:375,x:844,y:366.8},0).wait(63).to({startPosition:0},0).to({alpha:0},4).to({_off:true},1).wait(585));

	// Calque 19
	this.url2 = new lib.URL();
	this.url2.parent = this;
	this.url2.setTransform(617.9,618.7,1,1,0,0,0,84.5,13.1);
	this.url2.alpha = 0;
	this.url2._off = true;
	new cjs.ButtonHelper(this.url2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.url2).wait(670).to({_off:false},0).to({y:598.7,alpha:1},4).wait(69).to({alpha:0},3).wait(1));

	// Calque 36
	this.instance_29 = new lib.Symbole33("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(677.5,531.6,0.868,0.879,0,9.1,0,359.1,56.5);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(664).to({_off:false},0).to({y:511.6,alpha:1},5).wait(74).to({startPosition:0},0).to({alpha:0},3).wait(1));

	// logo
	this.instance_30 = new lib.logo("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(620.5,292.8,4.342,4.342,0,0,0,85.2,35.9);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(658).to({_off:false},0).to({y:272.8,alpha:1},5).wait(80).to({startPosition:0},0).to({alpha:0},3).wait(1));

	// Calque 2
	this.instance_31 = new lib.fondfin("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(584,358.1,1,1,0,0,0,700,360);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(651).to({_off:false},0).to({alpha:1},5).wait(87).to({startPosition:0},0).to({alpha:0},3).wait(1));

	// Calque 21
	this.url = new lib.URL();
	this.url.parent = this;
	this.url.setTransform(617.9,598.7,1,1,0,0,0,84.5,13.1);
	this.url.alpha = 0;
	this.url._off = true;
	new cjs.ButtonHelper(this.url, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.url).wait(14).to({_off:false},0).to({alpha:1},2).wait(44).to({alpha:0},4).to({_off:true},1).wait(682));

	// logo
	this.instance_32 = new lib.logo("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(130.5,64.2,0.824,0.824,0,0,0,85.1,35.9);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(8).to({_off:false},0).to({alpha:1},2).wait(50).to({startPosition:0},0).to({alpha:0},4).to({_off:true},1).wait(682));

	// Calque 37
	this.b_7 = new lib.bt7();
	this.b_7.parent = this;
	this.b_7.setTransform(517,277.1);
	new cjs.ButtonHelper(this.b_7, 0, 1, 1);

	this.b_6 = new lib.bt6();
	this.b_6.parent = this;
	this.b_6.setTransform(617,338);
	new cjs.ButtonHelper(this.b_6, 0, 1, 1);

	this.b_5 = new lib.bt5();
	this.b_5.parent = this;
	this.b_5.setTransform(685,415);
	new cjs.ButtonHelper(this.b_5, 0, 1, 1);

	this.b_4 = new lib.bt4();
	this.b_4.parent = this;
	this.b_4.setTransform(802.5,390);
	new cjs.ButtonHelper(this.b_4, 0, 1, 1);

	this.b_3 = new lib.bt3();
	this.b_3.parent = this;
	this.b_3.setTransform(807,314);
	new cjs.ButtonHelper(this.b_3, 0, 1, 1);

	this.b_1 = new lib.bt1();
	this.b_1.parent = this;
	this.b_1.setTransform(374.8,283);
	new cjs.ButtonHelper(this.b_1, 0, 1, 1);

	this.b_2 = new lib.bt2();
	this.b_2.parent = this;
	this.b_2.setTransform(461.6,325.1);
	new cjs.ButtonHelper(this.b_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.b_2},{t:this.b_1},{t:this.b_3},{t:this.b_4},{t:this.b_5},{t:this.b_6},{t:this.b_7}]},13).to({state:[]},51).wait(683));

	// Calque 27
	this.instance_33 = new lib.rectangleanimé();
	this.instance_33.parent = this;
	this.instance_33.setTransform(418.8,294,1,1,0,0,0,47.1,11);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(23).to({_off:false},0).wait(5).to({x:504.8,y:336},0).wait(5).to({x:559.8,y:289},0).wait(5).to({x:660.8,y:349},0).wait(5).to({x:726.8,y:426},0).wait(5).to({x:846.8,y:401},0).wait(5).to({x:851.8,y:326},0).to({_off:true},5).wait(689));

	// dots
	this.instance_34 = new lib.Symbole28("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(626.2,357.5,1,1,0,0,0,175.2,54.5);
	this.instance_34.alpha = 0;
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(9).to({_off:false},0).to({alpha:1},2).wait(49).to({startPosition:0},0).to({alpha:0},4).to({_off:true},1).wait(682));

	// map1
	this.instance_35 = new lib.mappemonde("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(619,360,1,1,0,0,0,700,360);
	this.instance_35.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).to({alpha:1},4).wait(58).to({startPosition:0},0).to({alpha:0},3).to({_off:true},1).wait(681));

	// Calque 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464646").s().p("EhhrA1uMAAAhrbMDB0AAAMAAAAsWIBjAAIAAKJIhjAAMAAAA08g");
	this.shape_2.setTransform(625.3,341.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(747));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(539,368.1,1400,743.7);
// library properties:
lib.properties = {
	width: 1240,
	height: 740,
	fps: 10,
	color: "#464646",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/citron.jpg", id:"citron"},
		{src:"images/Imagebitmap10.jpg", id:"Imagebitmap10"},
		{src:"images/Imagebitmap1611.jpg", id:"Imagebitmap1611"},
		{src:"images/Imagebitmap18.jpg", id:"Imagebitmap18"},
		{src:"images/Imagebitmap19.jpg", id:"Imagebitmap19"},
		{src:"images/Imagebitmap20.jpg", id:"Imagebitmap20"},
		{src:"images/Imagebitmap3.jpg", id:"Imagebitmap3"},
		{src:"images/Imagebitmap9.jpg", id:"Imagebitmap9"},
		{src:"images/indonesia.jpg", id:"indonesia"},
		{src:"images/manille.jpg", id:"manille"},
		{src:"images/me.jpg", id:"me"},
		{src:"images/peche.jpg", id:"peche"},
		{src:"images/pomme.jpg", id:"pomme"},
		{src:"images/shadow.png", id:"shadow"},
		{src:"images/world.jpg", id:"world"},
		{src:"sounds/musique.mp3", id:"musique"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;