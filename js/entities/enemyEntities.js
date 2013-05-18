/* --------------------------
an enemy Entity
------------------------ */
var enemyWindow = entity("EnemyWindow", me.ObjectEntity.extend({
    init: function(x, y, settings) {
        // call the parent constructor
        this.parent(x, y, settings);
 		
 		this.standardRate = 100;
 		this.showRate = settings.showRate;
 		this.gravity = 0;
           // make it collidable
        this.collidable = true;
        // make it a enemy object
        this.type = "enemyWindow";
    	
        this.addAnimation("blank", [0]);
        this.addAnimation("popUp", [0, 1, 2, 3, 4, 5]);
        this.addAnimation("popDown", [5, 4, 3, 2, 1, 0]);
        
		this.setCurrentAnimation("blank");
    },
 
 
    // call by the engine when colliding with another object
    // obj parameter corresponds to the other object (typically the player) touching this one
    onCollision: function(res, obj) {
        if(this.isCurrentAnimation("popUp") || this.isCurrentAnimation("popDown")){
        	if(obj.name == "mainplayer" && !obj.isFlickering()){
           		maxtimeSecs = maxtimeSecs - 15;
	           	if(maxtimeSecs < 0){
	           		maxtimeSecs = 0;
	           	}
            }
        }
           
    },
 
    // manage the enemy movement
    update: function() {
        // do nothing if not visible
        if (!this.visible)
            return false;
 
        if (this.alive) {
            this.vel.y = 0;
            this.vel.x = 0;
            if(this.isCurrentAnimation("popUp") || this.isCurrentAnimation("popDown")){
            	if(this.isCurrentAnimation("popDown") && this.getCurrentAnimationFrame() == 5){
            		this.setAnimationFrame(0);
					this.setCurrentAnimation("blank");
            		//end of popUp
            		this.standardRates = 100;
            	}else if(this.isCurrentAnimation("popUp") && this.getCurrentAnimationFrame() == 5){
            		this.setAnimationFrame(0);
					this.setCurrentAnimation("popDown");
            	}
            	
            }else{
            	if(this.standardRate == 100){
	            	this.standardRate = this.standardRate - (this.showRate);
	            }else if(this.standardRate < 0){
					this.standardRate = 100;
					this.setCurrentAnimation("popUp");
	            }else{
	            	this.standardRate -= 1;
	            }
            }
        }
         
        // check and update movement
        this.updateMovement();
        
        // update objet animation
        this.parent(this);
        return true;
    }
}));

var spaceDog = entity("SpaceDog", me.ObjectEntity.extend({
    init: function(x, y, settings) {
        // call the parent constructor
        this.parent(x, y, settings);
 		
 		this.gravity = 0;
        this.startX = x;
        this.endX = x + settings.width - settings.spritewidth;
        // size of sprite
 
        // make him start from the right
        this.pos.x = x + settings.width - settings.spritewidth;
        this.walkLeft = true;
 
        // walking & jumping speed
        this.setVelocity(4, 6);
 
        // make it collidable
        this.collidable = true;
        // make it a enemy object
        this.type = me.game.ENEMY_OBJECT;
        this.damage = 5;
 
    },
 
 
    // call by the engine when colliding with another object
    // obj parameter corresponds to the other object (typically the player) touching this one
    onCollision: function(res, obj) {
        
        if(this.falling){
        	this.vel.y = 0;
        }
        
        if(this.onladder){
        	this.vel.y = 0;
        }
        
    },
 
    // manage the enemy movement
    update: function() {
        // do nothing if not visible
        if (!this.visible)
            return false;
 
        if (this.alive) {
            if (this.walkLeft && this.pos.x <= this.startX) {
                this.walkLeft = false;
            } else if (!this.walkLeft && this.pos.x >= this.endX) {
                this.walkLeft = true;
            }
            // make it walk
            this.flipX(this.walkLeft);
            this.vel.x += (this.walkLeft) ? -this.accel.x * me.timer.tick : this.accel.x * me.timer.tick;
            this.vel.y = 0;
                 
        } else {
            this.vel.x = 0;
        }
         
        // check and update movement
        this.updateMovement();
         
        // update animation if necessary
        if (this.vel.x!=0 || this.vel.y!=0) {
            // update objet animation
            this.parent(this);
            return true;
        }
        return false;
    }
}));

var enemyBird = entity("EnemyBird", me.ObjectEntity.extend({
    init: function(x, y, settings) {
        // call the parent constructor
        this.parent(x, y, settings);
 		
 		this.gravity = 0;
        this.startX = x;
        this.endX = x + settings.width - settings.spritewidth;
        // size of sprite
 
        // make him start from the right
        this.pos.x = x + settings.width - settings.spritewidth;
        this.walkLeft = true;
 
        // walking & jumping speed
        this.setVelocity(4, 6);
 
        // make it collidable
        this.collidable = true;
        // make it a enemy object
        this.type = "enemyBird";
        this.damage = 5;
 
    },
 
 
    // call by the engine when colliding with another object
    // obj parameter corresponds to the other object (typically the player) touching this one
    onCollision: function(res, obj) {
        
        if(this.falling){
        	this.vel.y = 0;
        }
        
        if(this.onladder){
        	this.vel.y = 0;
        }
        if(obj.name == "mainplayer" && !obj.isFlickering()){
           	maxtimeSecs = maxtimeSecs - 15;
           	if(maxtimeSecs < 0){
           		maxtimeSecs = 0;
           	}
        }
        
    },
 
    // manage the enemy movement
    update: function() {
        // do nothing if not visible
        if (!this.visible)
            return false;
 
        if (this.alive) {
            if (this.walkLeft && this.pos.x <= this.startX) {
                this.walkLeft = false;
            } else if (!this.walkLeft && this.pos.x >= this.endX) {
                this.walkLeft = true;
            }
            // make it walk
            this.flipX(this.walkLeft);
            this.vel.x += (this.walkLeft) ? -this.accel.x * me.timer.tick : this.accel.x * me.timer.tick;
            this.vel.y = 0;
                 
        } else {
            this.vel.x = 0;
        }
         
        // check and update movement
        this.updateMovement();
         
        // update animation if necessary
        if (this.vel.x!=0 || this.vel.y!=0) {
            // update objet animation
            this.parent(this);
            return true;
        }
        return false;
    }
}));

var wheelie = entity("EnemyEntity", me.ObjectEntity.extend({
    init: function(x, y, settings) {
        // define this here instead of tiled
        settings.image = "wheelie_right";
        settings.spritewidth = 64;
 
        // call the parent constructor
        this.parent(x, y, settings);
 
        this.startX = x;
        this.endX = x + settings.width - settings.spritewidth;
        // size of sprite
 
        // make him start from the right
        this.pos.x = x + settings.width - settings.spritewidth;
        this.walkLeft = true;
 
        // walking & jumping speed
        this.setVelocity(4, 6);
 
        // make it collidable
        this.collidable = true;
        // make it a enemy object
        this.type = me.game.ENEMY_OBJECT;
        this.damage = 5;
 
    },
 
 
    // call by the engine when colliding with another object
    // obj parameter corresponds to the other object (typically the player) touching this one
    onCollision: function(res, obj) {
 
        if(obj.name == "mainplayer" ){
            // res.y >0 means touched by something on the bottom
            // which mean at top position for this one
            if (this.alive && (res.y > 0) && obj.falling) {
                this.flicker(45);
            	me.game.remove(this);
            }
        }
        
        if(obj.type == "Bullet"){
            me.game.remove(this);
        }
        
    },
 
    // manage the enemy movement
    update: function() {
        // do nothing if not visible
        if (!this.visible)
            return false;
 
        if (this.alive) {
            if (this.walkLeft && this.pos.x <= this.startX) {
                this.walkLeft = false;
            } else if (!this.walkLeft && this.pos.x >= this.endX) {
                this.walkLeft = true;
            }
            // make it walk
            this.flipX(this.walkLeft);
            this.vel.x += (this.walkLeft) ? -this.accel.x * me.timer.tick : this.accel.x * me.timer.tick;
                 
        } else {
            this.vel.x = 0;
        }
         
        // check and update movement
        this.updateMovement();
         
        // update animation if necessary
        if (this.vel.x!=0 || this.vel.y!=0) {
            // update objet animation
            this.parent(this);
            return true;
        }
        return false;
    }
}));

var lawnMowerCurrentXPosition = 0;

var lawnmowerEntity = entity("lawnmower", me.ObjectEntity.extend({
    init: function(x, y, settings) {
        // define this here instead of tiled
        settings.image = "lawnmower";
        settings.spritewidth = 384;
 
 
 		me.audio.play("LawnMower");
 	
        // call the parent constructor
        this.parent(x, y, settings);
 
 		console.log("Settings Width " + settings.spritewidth);
        this.startX = x;
        this.endX = x + settings.width - settings.spritewidth;
  
        // walking & jumping speed
        this.setVelocity(2, 6);
 
 		this.gravity=0.98;
 
        // make it collidable
        this.collidable = true;
        // make it a enemy object
        this.type = "lawnmower";
        this.damage = 10000;
        
        this.canBreakTile = true;
 
    },
 
 
    // call by the engine when colliding with another object
    // obj parameter corresponds to the other object (typically the player) touching this one
    onCollision: function(res, obj) {
 		
 		
    },
 
    // manage the enemy movement
    update: function() {
       
       // // do nothing if not visible
       if (this.pos.x >= this.endX) {
            this.vel.x = 0;
       }else{
       		this.vel.x +=  this.accel.x * me.timer.tick;
       		lawnMowerCurrentXPosition = this.pos.x;
       }
  
  
        // check and update movement
        this.updateMovement();
         
        // update animation if necessary
        if (this.vel.x!=0 || this.vel.y!=0) {
            // update objet animation
            this.parent(this);
            return true;
        }
        return false;
    },
	
	onDestroyEvent: function() {
		lawnMowerCurrentXPosition = 0;
		me.audio.stop("LawnMower");
	}
}));


enemyEntity.push(wheelie);
enemyEntity.push(enemyBird);
enemyEntity.push(spaceDog);
enemyEntity.push(enemyWindow);