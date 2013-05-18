/*
 * Add all levels here
 */

gameResources.addMap = function addMap(name, source){
	this.maps.push({
		name: name,
		type: "tmx",
		src: source
	});
};

gameResources.addMap("egypt","data/egypt.tmx");
<<<<<<< HEAD
gameResources.addMap("spacemap","data/spacemap.tmx");
=======
//gameResources.addMap("spacemap","data/spacemap.tmx");
>>>>>>> ee4033adb39939ad4e283e6e519514b339d0fcc0
gameResources.addMap("renaisannce","data/Renaisannce.tmx");
gameResources.addMap("spacemap","data/spacemap.tmx");
gameResources.addMap("level2","data/level2.tmx");
gameResources.addMap("level02","data/level02.tmx");
gameResources.addMap("level3","data/level3.tmx");
gameResources.addMap("level4","data/level4.tmx");