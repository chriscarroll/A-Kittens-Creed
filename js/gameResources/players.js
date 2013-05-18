/*
 * Add all player graphics here
 */
gameResources.addPlayerGraphics = function addPlayerGraphics(name, source){
	this.players.push({
		name: name,
		type: "image",
		src: source
	});
}
gameResources.addPlayerGraphics("catwalk","data/kev/main_character/catwalk.png");
gameResources.addPlayerGraphics("SpaceDog","data/kev/main_character/catwalk.png");