class Enemy{
    constructor(x){
        this.y=random([50,250,450])
        this.body=createSprite(x,this.y)
        this.body.addAnimation("enemy",e_walking1)
        this.body.scale=0.4
        this.body.velocityX=-5
    }
    gravity(){
        this.body.velocityY+=2
    }
}