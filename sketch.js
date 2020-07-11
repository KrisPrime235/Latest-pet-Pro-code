//Create variables here
var dog , dogImg, dogHappy;
var database;
var foodStock, foods;
var milkImg, foodObj;
var feedDog, addFood;
var fedTime, lastfed;
var foodC = 0;

function preload()
{
  //load images here
  dogImg = loadImage("../images/dogImg.png");
  dogHappy = loadImage("../images/dogImg1.png");
}

function setup() {
  createCanvas(800, 300);
  

  database = firebase.database();

  

  dog = createSprite(570, 130, 10, 10);
  dog.addImage(dogImg);
  dog.scale = 0.16;

  foodObj = new Food();

  
}


function draw() {  
  background(46, 139, 87);
  
  fedTime = database.ref('feedTime');
  fedTime.on("value",(data)=>{
    lastfed = data.val();
  });

  feedDog = createButton("Feed The Dog");
  feedDog.position(450, 95);
  feedDog.mousePressed(FeedDog);

  addFood = createButton("Add Milk");
  addFood.position(550, 95);
  addFood.mousePressed(addFoods);

  foodObj.display();

  drawSprites();
  //add styles here
  fill(255, 255, 254)
  textSize(12.5);
  if(lastfed >= 12){
    text("Last Fed : " + lastfed%12 + "PM", 100, 30)
  } else if(lastfed == 0){
    text("Last Fed : 12 AM", 100, 30)
  } else {
    text("Last Fed: " + lastfed + "AM", 100, 30)
  }
  
}




function FeedDog(){
  dog.addImage(dogHappy)


  foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  database.ref('/').update({
      food:foodObj.getFoodStock(),
      feedTime: hour()
  })
}

function addFoods(){
  foodC + 1;
  
  database.ref('/').update({
    foodCount: foodC
  })
  
}

  

