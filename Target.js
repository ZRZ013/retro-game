class Target {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
	}
	
	contains(x, y) {
		let d = dist(x, y, this.x, this.y);
		if (d < this.r) {
			return true;
		} else {
			return false;	
		}
	}
	
	show() {
		fill(255)
        ellipse(this.x, this.y, this.r*2)
	}
}

