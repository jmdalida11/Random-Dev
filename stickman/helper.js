var ImageLoader = function(){
		
	this.getImage = function(path){
		var i = new Image();
			i.src = path;
			return i;
		}
		
};