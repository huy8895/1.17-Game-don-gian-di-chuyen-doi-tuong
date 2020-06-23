/**
 * Created by huy8895 on 6/23/19.
 */

function Hero(image, top, left, sizeWidth, sizeHeight){
    this.image = image;
    this.top = top;
    this.left = left;
    this.width = sizeWidth;
    this.height = sizeHeight;

    this.getHeroElement = function(){
        return '<img width="'+ this.width + '"' +
            ' height="'+ this.height + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 10;
        console.log('ok: ' + this.left);

    }
    this.moveLeft = function () {
        this.left -= 10
        console.log('ok: ' + this.left);

    }

    this.moveDown = function () {
        this.top += 10
        console.log('ok: ' + this.top);


    }
    this.moveUP = function () {
        this.top -= 10
        console.log('ok: ' + this.top);

    }
}
var hero = new Hero('yasuo.png', 0, 0, 200,122);

function start() {
    if ( hero.left < (window.innerWidth - hero.width) && hero.top === 0 ) {
        hero.moveRight()
    } else if (hero.left >= (window.innerWidth - hero.width) && hero.top < window.innerHeight - hero.height){
        hero.moveDown()
    } else if ( hero.left >= 10 && hero.top >= window.innerHeight - hero.height -10){
        hero.moveLeft()
    } else if (hero.left === 0 && hero.top >= 0){
        hero.moveUP()
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 0.001)
}
start();







