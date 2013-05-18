var playScreenGlobalObject;
var gameOverScreenGlobalObject;

var game = {	
	/* ---
	
		Initialize the jsApp
		
		---			*/
	onload: function onload(){
		
		// init the video
		if (!me.video.init('gameDiv', 640, 480, false, 1.0))
		{
			alert("Sorry but your browser does not support html 5 canvas.");
			return;
		}
				
		// initialize the "audio"
		me.audio.init("mp3");
		
		// set all resources to be loaded
		me.loader.onload = this.loaded.bind(this);
		
		// set all resources to be loaded
		me.loader.preload(gameResources.getGameData());

		// load everything & display a loading screen
		me.state.change(me.state.LOADING);
	},
	
	
	/* ---
	
		callback when everything is loaded
		
		---										*/
	loaded: function loaded()	{
		var i = 0;
		
		// set the "Play/Ingame" Screen Object
	    me.state.set(me.state.MENU, new TitleScreen());
		
	    // set the "Play/Ingame" Screen Object
		playScreenGlobalObject = new PlayScreen();
		me.state.set(me.state.PLAY, playScreenGlobalObject);
		
		// set the Game over screen
		gameOverScreenGlobalObject = new game.GameOverScreen();
		me.state.set(me.state.OVER, gameOverScreenGlobalObject);
		
		me.state.set(STORY_STATE, new StoryScreen());
	    
		// set a global fading transition for the screen
	    me.state.transition("fade", "#FFFFFF", 250);
		
	    // Add Player Entities to the entity pool
		this.addEntity(playerEntity);
		
	   	    
	    me.entityPool.add("StoryEntity", StoryEntity);
		
		this.addEntity(MirrorEntity);	
		
		this.addEntity(KeyEntity);	
	   
		// Add Item Entities to the entity pool
		this.addEntity(itemEntity);

		// Add Enemy Entities to the entity pool
		this.addEntity(enemyEntity);
		
		// Add Checkpoint Entity to the entity pool
		//this.addEntity(checkpointEntity);

	             
		// enable the keyboard
		this.controls();
		
		// display the menu title
	    me.state.change(me.state.MENU);
	},
	
	addEntity: function addEntity(entityArray){
		for(var i = 0; i < entityArray.length; i++){
			me.entityPool.add(entityArray[i].name, entityArray[i].data);
		}
	},
	
	controls: function controls(){
		me.input.bindKey(me.input.KEY.LEFT,  "left");
		me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.SPACE, "jump");
        me.input.bindKey(me.input.KEY.UP, "up");
		me.input.bindKey(me.input.KEY.DOWN,     "down");
		me.input.bindKey(me.input.KEY.S, 	 "save", true);
		me.input.bindKey(me.input.KEY.F, 	 "toggle_fly", true);
		me.input.bindKey(me.input.KEY.Q, 	"shoot", true);
		me.input.bindKey(me.input.KEY.ESC, 	"menu", true);
		me.input.bindKey(me.input.KEY.R, 	 "rewind");
	}

};

//Load when HTML loads
window.onReady(function(){
	game.onload();
});