class Ball{
    constructor(x){
            this.y=random([50,250,450])
            this.body=createSprite(x,this.y)
            this.body.addAnimation("ball",BallImg)
            this.body.scale=0.3
            this.body.velocityX=-5
        }
        gravity(){
            this.body.velocityY+=2
        }
    }