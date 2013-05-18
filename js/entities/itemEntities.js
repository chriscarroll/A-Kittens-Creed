/*----------------
a Coin entity
------------------------ */
var coinEntity = entity("CoinEntity", me.CollectableEntity.extend({
   // extending the init function is not mandatory
   // unless you need to add some extra initialization
   init: function(x, y, settings) {
       // call the parent constructor
       this.parent(x, y, settings);
   },

    // call by the engine when colliding with another object
    // obj parameter corresponds to the other object (typically the player) touching this one
    onCollision: function(res, obj) {
      if(obj.name == "mainplayer" ){
         // do something when collide
         me.audio.play("cling");
         // give some score
         me.game.HUD.updateItemValue("score", 250);
         // make sure it cannot be collected "again"
         this.collidable = false;
         // remove it
         me.game.remove(this);
     }
   }
}));

var teleporterEntity = entity("teleporter", me.ObjectEntity.extend({
   // extending the init function is not mandatory
   // unless you need to add some extra initialization
   init: function(x, y, settings) {
       // call the parent constructor
       this.parent(x, y, settings);
       this.endX = settings.endX;
       this.endY = settings.endY;
       this.collidable = true;
       this.type="teleporter";
   }
}));

/*----------------
a Mushroom entity
------------------------ */
var mushroomEntity = entity("mushroomEntity", me.CollectableEntity.extend({
   // extending the init function is not mandatory
   // unless you need to add some extra initialization
   init: function(x, y, settings) {
       // call the parent constructor
       this.parent(x, y, settings);
       this.type = settings.type;
   },

    // call by the engine when colliding with another object
    // obj parameter corresponds to the other object (typically the player) touching this one
    onCollision: function(res, obj) {
       // do something when collected
       if(obj.name == "mainplayer" ){
        me.game.remove(this);
      }
   }

}));
/*----------------
a health entity
------------------------ */
var healthEntity = entity("healthEntity", me.CollectableEntity.extend({
   // extending the init function is not mandatory
   // unless you need to add some extra initialization
   init: function(x, y, settings) {
       // call the parent constructor
       this.parent(x, y, settings);
       this.type = settings.type;
   },

    // call by the engine when colliding with another object
    // obj parameter corresponds to the other object (typically the player) touching this one
    onCollision: function(res, obj) {
      	// do something when collected
       	if(obj.name == "mainplayer" ){
        	obj.health += 5;
       		me.game.remove(this);
        }
   }

}));

/*----------------
an Apple entity
------------------------ */
var appleEntity = entity("appleEntity", me.CollectableEntity.extend({
   // extending the init function is not mandatory
   // unless you need to add some extra initialization
   init: function(x, y, settings) {
       // call the parent constructor
       this.parent(x, y, settings);
       this.type = settings.type;
   },

    // call by the engine when colliding with another object
    // obj parameter corresponds to the other object (typically the player) touching this one
    onCollision: function(res, obj) {
      	// do something when collected
       	if(obj.name == "mainplayer" ){
        	obj.ammo += 5;
       		me.game.remove(this);
        }
   }

}));

var breakableIceEntity = entity("breakableIceEntity", me.ObjectEntity.extend({
	
   init: function(x, y, settings) {
       // call the parent constructor
       this.parent(x, y, settings);
       this.type = "Ice";
       this.collidable = true;
   },

    // call by the engine when colliding with another object
    // obj parameter corresponds to the other object (typically the player) touching this one
    onCollision: function(res, obj) {
       // do something when collected
       if(typeof obj == "undefined") {
       		return;
       }	
       
       if(obj.type == "Bullet" ){
        me.game.remove(this);
      }
   }
}));

var ropeEntity = entity("ropeEntity", me.ObjectEntity.extend({

    init: function(x, y, settings) {
        // call the parent constructor
        this.parent(x, y, settings);
        this.type = "Rope";
        this.collidable = true;
    },

    // call by the engine when colliding with another object
    // obj parameter corresponds to the other object (typically the player) touching this one
    onCollision: function(res, obj) {
        // do something when collected
        if(typeof obj == "undefined") {
            return;
        }

        if(obj.type == "Sunlight" ){
            me.game.remove(this);
        }
    }
}));

/*----------------
a Mushroom entity
------------------------ */
var PlayerDeath = entity("PlayerDeath", me.InvisibleEntity.extend({
   // extending the init function is not mandatory
   // unless you need to add some extra initialization
   init: function(x, y, settings) {
       // call the parent constructor
       this.parent(x, y, settings);
       this.type = "PlayerDeath";
   }

}));

/*----------------
a Mirror entity
------------------------ */
MirrorEntity = entity("mirror2", me.ObjectEntity.extend({
   // extending the init function is not mandatory
   // unless you need to add some extra initialization
   init: function(x, y, settings) {
       // call the parent constructor
       this.parent(x, y, settings);
       this.type = "mirror2";
	   this.collidable = true;
   },
   
   onCollision: function(res, obj) {
       //do something when collide
      if(obj.name == "mainplayer" ){		
		//alert("hit!");
		if(obj.vel.x > 0){
			this.pos.x+=3;
		}
		else if(obj.vel.x < 0){
			this.pos.x-=3;
		}
    }

}}));

/*----------------
a Key entity
------------------------ */
KeyEntity = entity("key", me.ObjectEntity.extend({
   // extending the init function is not mandatory
   // unless you need to add some extra initialization
   init: function(x, y, settings) {
       // call the parent constructor
       this.parent(x, y, settings);
       this.type = "key";
	   this.collidable = true;
   },
   
   onCollision: function(res, obj) {
       //do something when collide
      if(obj.name == "mainplayer" ){		
		//alert("hit!");
		if(obj.vel.x > 0){
			this.pos.x+=3;
		}
		else if(obj.vel.x < 0){
			this.pos.x-=3;
		}
    }

}}));

/*----------------
a Checkpoint entity
------------------------ */
var checkpointEntity = entity("Checkpoint", me.CollectableEntity.extend({
   // extending the init function is not mandatory
   // unless you need to add some extra initialization
   init: function(x, y, settings) {
       	// call the parent constructor
       	this.parent(x, y, settings);
       	this.type="Checkpoint";
       	this.checkpointX = x;
       	this.checkpointY = y - 200;
   },
   
    // call by the engine when colliding with another object
    // obj parameter corresponds to the other object (typically the player) touching this one
    onCollision: function(res, obj) {
       // do something when collide
      if(obj.name == "mainplayer" ){
  	   	me.audio.play("cling");
  	   	
  	   	localStorage.checkpointLevel = me.levelDirector.getCurrentLevelId();
    		localStorage.checkpointX = this.checkpointX;
    		localStorage.checkpointY = this.checkpointY;
    		localStorage.checkpointScore = me.game.HUD.getItemValue("score");
    		// make sure it cannot be collected "again"
    		this.collidable = false;
         
    		// remove it
    		me.game.remove(this);
    }
   }
}));

/*----------------
a Checkpoint entity
------------------------ */
var moveEntityXAxis = entity("MoveEntityXAxis",  me.ObjectEntity.extend({
   // extending the init function is not mandatory
   // unless you need to add some extra initialization
   init: function(x, y, settings) {
       	// call the parent constructor
       	this.parent(x, y, settings);
       	this.type="MovingBlockBullet";
        this.gravity = 0;
        this.startX = x;
        this.endX = x + settings.width;
        this.moveUp = false;
        // make it collidable
        this.collidable = true;
   },
   
   update: function(){
       if (!this.visible){
           return false;
       }
       
	   if(this.endX - 70 <= this.pos.x){
	        this.pos.x = this.startX;
	   }else if(this.startX >= this.pos.x){
	        this.vel.x = this.vel.x + 1;
	   }
       this.updateMovement();
       return true;
   },
   
   onCollision: function(res, obj) {
    	me.game.remove(this);
   }
}));

var moveEntityXYAxis = entity("MoveEntityXYAxis",  me.ObjectEntity.extend({
    // extending the init function is not mandatory
    // unless you need to add some extra initialization
    init: function(x, y, settings) {
        // call the parent constructor
        this.parent(x, y, settings);
        this.type="Sunlight";
        this.gravity = 0;
        this.startX = x;
        this.startY = y;
        this.endX = x + settings.width;
        this.endY = y + settings.height;
        this.moveUp = false;
        this.vel.x = 3;
        this.vel.y = 3;
        // make it collidable
        this.collidable = true;
    },

    update: function(){
        if (!this.visible){
            return false;
        }

        console.log("x: " + this.pos.x + " y: " + this.pos.y + " startY: " + this.startY + " yvel " + this.vel.x + " xvel " +this.vel.y);
        //RHS of screen
        if(this.endX - 70 <= this.pos.x){
            this.pos.x = this.startX;
            this.pos.y = this.startY;
            this.vel.x = 3;
            this.vel.y = 3;
        }
        //bottom of level
       if(this.pos.y > 659){
           this.vel.y = -3;
       }

       if(this.pos.y < this.startY){
           this.pos.y = this.startY;
           this.vel.y = 3;
       }


        this.updateMovement();
        return true;
    },

    onCollision: function(res, obj) {
        if(res.obj.type == "Mirror"){
            this.vel.x = 0;
            this.vel.y = -3;
        }
       // me.game.remove(this);
    }
}));


var moveEntityYAxis = entity("MoveEntityYAxis",  me.ObjectEntity.extend({
	   // extending the init function is not mandatory
	   // unless you need to add some extra initialization
	   init: function(x, y, settings) {
	       	// call the parent constructor
	       	this.parent(x, y, settings);
	       	this.type=settings.type;
	        this.gravity = 0;
	        this.startY = y;
	        this.endY = y + settings.height;
	        this.moveUp = false;
	        // make it collidable
	        this.collidable = true;
	   },
	   
	   update: function(){
	       if (!this.visible){
	           return false;
	       }
	       
		   if(this.endY - 60 <= this.pos.y){
		        this.vel.y = this.startY;
		   }
	       this.updateMovement();
	       return true;
	   },
	   
	   onCollision: function(res, obj) {
		   
	       // res.y > 0 means touched by something on the bottom
	       // which mean at top position for this one
	       if ((res.y > 0) && obj.falling) {
	           this.flicker(8);
	       }
	   }
	}));

itemEntity.push(breakableIceEntity);
itemEntity.push(coinEntity);
itemEntity.push(checkpointEntity);
itemEntity.push(PlayerDeath);
itemEntity.push(moveEntityXAxis);
itemEntity.push(moveEntityXYAxis);
itemEntity.push(moveEntityYAxis);
itemEntity.push(mushroomEntity);
itemEntity.push(healthEntity);
itemEntity.push(appleEntity);
itemEntity.push(teleporterEntity);
itemEntity.push(ropeEntity);
itemEntity.push(MirrorEntity);
itemEntity.push(KeyEntity);
