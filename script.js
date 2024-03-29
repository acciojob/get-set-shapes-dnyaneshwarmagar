//complete this code
class Rectangle {
	#width;
	#height;
	constructor(width,height){
		this.width = width;
		this.height = height;
	}
	get width(){
		return this.#width;
	}
	set width(width){
		this.#width = width;
	}
	get height(){
		return this.#height;
	}
	set height(height){
		this.#height = height;
	}
	getArea(){
		return width * height;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side,side)
	}
	getPerimeter(){
		return 4 * side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
