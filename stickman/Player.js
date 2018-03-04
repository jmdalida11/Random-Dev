var Player = function(gameData,x,y,w,h){
			this.x = x;
			this.y = y;
			this.w = w;
			this.h = h;
			this.xSpeed = 0;
			this.ySpeed = 0;
			this.gameData = gameData;
			
			this.playerImages = [];
			
			var imgLoader = new ImageLoader();
			
			this.playerImages.push(imgLoader.getImage('img/stickman1.png'));
			this.playerImages.push(imgLoader.getImage('img/stickman2.png'));
			this.playerImages.push(imgLoader.getImage('img/stickman3.png'));
			
			this.imageFrame = 0;
			
			this.update = function(){
				
				if(this.x <= 0){
					this.x = 0;
				}else if(this.x + this.w >= gameData.gameWidth){
					this.x = gameData.gameWidth - this.w;
				}
				
				this.x += this.xSpeed;
				
			};
			
			this.render = function(cxt){
				
				if(this.imageFrame >= this.playerImages.length){
					this.imageFrame = 0;
				}
				
				cxt.drawImage(this.playerImages[this.imageFrame],this.x,this.y,this.w,this.h);
			};
		
			
		}
		
		
		window.addEventListener('keydown',function(event){
			//alert(event.keyCode);
			switch(event.keyCode){
				case 39: 
						player.xSpeed = 5;
						break;
				case 37:
						player.xSpeed = -5;
						break;
				case 38:
						player.y = 160;
						break;
				case 40:
						player.y = 210;
						break;
			}
			
			player.imageFrame++;
			
		},false);
		
		window.addEventListener('keyup',function(event){
			
			switch(event.keyCode){
				case 39: 
						player.xSpeed = 0;
						break;
				case 37:
						player.xSpeed = 0;
						break;
			}
			
		},false);