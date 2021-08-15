class Player{
    constructor(){
        this.body=createSprite(50,100)
        this.body.shapeColor='red'
        this.body.addAnimation("walk",p_walking1)
        
        this.body.addAnimation("shoot",shootImg)
        this.body.scale=1.5
    }
    moveRight(){
        this.body.x+=15
    }
    moveLeft(){
        this.body.x-=15
    }
    moveUp(){
        this.body.velocityY=-41
    }
    gravity(){
    this.body.velocityY+=2
    }
}