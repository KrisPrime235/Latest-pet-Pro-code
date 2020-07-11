class Food{
    constructor(){
        this.foodStock = null;
        this.lastFed = null;
        this.image = loadImage("../images/Milk.png");
        /*function preload(){
        }*/
    }
    getFoodStock(){
        var foodCountRef = database.ref('foodCount');
        foodCountRef.on("value",(data)=>{
          foodC = data.val();
        });
    }

    updateFoodStock(count){
        database.ref('/').update({
            foodCount: count
        });
    }

    updateFeedTime(time){
        database.ref('/').update({
            feedTime: time
        })
    }

    display(){
        var x = 80, y = 100;

        imageMode(CENTER);
        image(this.image, 520, 160, 70, 70);
        
        if(this.foodStock != 0){
            for(var i = 0;i<this.foodStock;i++){
              if(i%10 == 0){
                x = 80;
                y = y + 50
                }
            }
            image(this.image, x, y, 50, 50);
            x = x + 30;
        }
    }

    
    
    
}

