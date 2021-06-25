class Food{
    constructor(){
        this.foodS = foodS;
    }

    updateFoodStock(foodS){
        this.foodS = foodS;
    }

    getFedTime(lastFed){
        this.lastFed = lastFed;
    }

    deductFood(){
        if(this.foodS>0){
            this.foodS-=1;
        }
    }

    getfoodStock(){
        return this.foodS;
    }   

    display(){

        fill(255,255,254);
        textSize(15);
        
        if(lastFed>=12){
           text("Last Fed : "+lastFed/12 + " PM", 350,90)
        } else if(lastFed===0){
           text("Last Fed : 12 AM",350,90)
        } else{
           text("Last Fed : "+lastFed+" AM",350,90);
                }

        var x=10,y=200;
        imageMode(CENTER);

        if(this.foodS!=0){

            for(var i =0;i<this.foodS;i++){

                if(i%10===0){
                    x=30;
                    y+=50
                }

                image(foodImg,x,y,90,100)
                x+=30;
            }}}

    bedroom(){
        background(bedroomImg)
        textSize(50);
        fill("black");
        text("ERTY",100,100);
    }

    washroom(){
        background(washroomImg)
        textSize(50);
        fill("black");
        text("QWERTY",100,100);
    }

    garden(){
        background(gardenImg)
        textSize(50);
        fill("black");
        text("QW",100,100);
    }
    
}