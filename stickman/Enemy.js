var Enemy = function(gameData,x,y,w,h){
	
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	
	this.enemyImages = [];
	this.imageFrame = 0;
	var imgLoader = new ImageLoader();
	this.gameData = gameData;
	
	this.enemyImages.push(imgLoader.getImage('img/enemy1.png'));
	this.enemyImages.push(imgLoader.getImage('img/enemy2.png'));
	
	this.update = function(){
		
		
		this.x -= 2;
		
		if(this.x < 0){
			var yPos = [160,210];
			this.x = gameData.gameWidth;
			this.y = yPos[Math.round(Math.random() * 1)];
		}
		
		
	}
	this.timer = 0;
	this.render = function(ctx){

		this.timer++;
		
		if(this.timer > 5){
			this.imageFrame++;
			this.timer = 0;
			
			
			if(this.imageFrame >= this.enemyImages.length){
						this.imageFrame = 0;
			}
			
		}
		
				
		ctx.drawImage(this.enemyImages[this.imageFrame],this.x,this.y,this.w,this.h);
		
	}
	
	
}