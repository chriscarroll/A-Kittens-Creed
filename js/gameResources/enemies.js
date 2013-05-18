/*
 * Add all enemies in the level here
 */
gameResources.addEnemy = function addEnemy(name, source){
	this.enemies.push({
		name: name,
		type: "image",
		src: source
	});
}

gameResources.addEnemy("wheelie_right","data/sprite/wheelie_right.png");
gameResources.addEnemy("lawnmower","data/sprite/lawnmower_96px.png");
gameResources.addEnemy("EnemyBird","data/kev/main_character/bird_walking_50px.png");
gameResources.addEnemy("EnemyWindow","data/windo.png");