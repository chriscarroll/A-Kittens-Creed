/*
 * Add title screen graphics here
 */
gameResources.addScreenGraphics = function addScreenGraphics(name, source){
	this.screens.push({
		name: name,
		type: "image",
		src: source
	});
}
gameResources.addScreenGraphics("titleScreen","data/GUI/titleScreen.png");
gameResources.addScreenGraphics("storyScreen","data/GUI/scroll.png");
gameResources.addScreenGraphics("gameover","data/GUI/endGame.png");
gameResources.addScreenGraphics("comic1","data/introcomic1.jpg");
gameResources.addScreenGraphics("comic2","data/introcomic2.jpg");
gameResources.addScreenGraphics("comic3","data/intro comic3.jpg");