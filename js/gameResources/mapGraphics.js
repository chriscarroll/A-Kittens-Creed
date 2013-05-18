/*
 * Add all graphics for the levels here
 */

gameResources.addGraphics = function addGraphics(name, source){
	this.mapGraphics.push({
		name: name,
		type: "image",
		src: source
	});
}
gameResources.addGraphics("area01_level_tiles","data/area01_tileset/area01_level_tiles.png");
gameResources.addGraphics("blocks2","data/area01_tileset/blocks2.png");
gameResources.addGraphics("metatiles32x32","data/area01_tileset/metatiles32x32.png");
gameResources.addGraphics("ground_tiles","data/tilesets/ground_tiles.png");
gameResources.addGraphics("level1ver2", "data/tilesets/level1ver2.png");
gameResources.addGraphics("vines","data/vines.png");
gameResources.addGraphics("Henryback","data/Henryback.png");
<<<<<<< HEAD
gameResources.addGraphics("MOREEJYTILES1","data/MOREEJYTILES1.png");
gameResources.addGraphics("metalbk","data/tilesets/metalbk.png");
=======
gameResources.addGraphics("hair ladder","data/hair ladder.png");
gameResources.addGraphics("MOREEJYTILES1","data/MOREEJYTILES1.png");
>>>>>>> c3dfd052a734a04c276763fd48caf56cf73862db
