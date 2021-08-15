class Win{
    constructor(x){
        this.body=createSprite(x,200,250,500)
        this.body.shapeColor='blue'
        this.body.addImage(winImg)   
        this.body.scale=2.2     
    }
}