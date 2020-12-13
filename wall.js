class Wall {
    constructor (x,y,width,height){
    var options = {
        isStatic:true
    }

    this.wall = Bodies.rectangle (x,y,width,height,options)
    this.width = width
    this.height = height
    World.add (World,this.wall)
}
display (){
    rectMode (CENTER)
    rect (this.wall.postion.x, this.wall.postion.y, this.width, this.height)
}

}