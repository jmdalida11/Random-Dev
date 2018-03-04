function Player(x,y){
		
	this.x = x;
	this.y = y;
	this.w = 10;
	this.h = 20;
	
	this.xSpeed = 0;
	this.ySpeed = 0;
	
	this.spriteImg = [];
	
	var helper = new Helper();
	
	this.spriteImg.push(helper.getImage('images/stickman1.png'));
	this.spriteImg.push(helper.getImage('images/stickman2.png'));
	this.spriteImg.push(helper.getImage('images/stickman3.png'));
	
	this.currentImage = 1;
	
	this.moving = false;
	
	this.update = function(){
		this.x += this.xSpeed;	
		this.y += this.ySpeed;
		
		if(this.moving){
			this.imageCounter++;
		}
		
		if(this.imageCounter > 10){
			
			this.currentImage++;
			this.imageCounter = 0;
			
			if(this.currentImage >= this.spriteImg.length){
				this.currentImage = 0;
			}
	
		}
	
	}
	
	this.imageCounter = 0;
	
	this.render = function(context){
		
		context.drawImage(this.spriteImg[this.currentImage],this.x,this.y,this.w,this.h);
		
	}
	
	this.collideSide = function(objX,objY,objW,objH){
		var wid = this.x + this.w;
		var hei = this.y + this.h;
		
		var objwid = objX + objW;
		var objhei = objY + objH;
		
		var cX = ((this.x >= objX && this.x <= objwid) || (wid >= objX && wid <= objwid) || (this.x <= objX && wid >= objwid));
		var cY = ((this.y >= objY && this.y <= objhei) || (hei >= objY && hei <= objhei) || (this.y <=objY && hei >= objhei));
		
		if(cX && cY){
			
			var topBot = false;
			if(this.y <= objhei && hei > objhei){
				topBot = true;
			}else if(hei >= objY && this.y < objY){
				topBot = true;
			}
			
			if(wid >= objX && this.x < objX && !topBot){
				this.x = objX - this.w;
			}
			else if(this.x <= objwid && wid > objwid && !topBot){
				this.x = objwid;
			}
			else if(this.y <= objhei && hei > objhei){
				this.y = objhei;
			}else if(hei >= objY && this.y < objY){
				this.y = objY - this.h;
			}
			
		}
		
	}

			
}




