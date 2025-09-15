const restaurant = [];
const images = ["First","second","third","fourth","fifth","sixth","seventh","Eigth","nine","tenth"]
const rest_name = [ "Savory Bites",
  "The Spice Lounge",
  "Ocean's Delight",
  "Urban Grill",
  "The Green Fork",
  "Flavors of India",
  "Golden Chopsticks",
  "Rustic Table",
  "Bella Pasta",
  "Sunset Eatery",
  "The Hungry Hippo",
  "Café Mosaic",
  "Sizzle & Smoke",
  "Garden Fresh Deli",
  "The Melting Pot",
  "Twilight Tacos",
  "Harvest Kitchen",
  "Blue Plate Bistro",
  "Crave Corner",
  "The Gourmet Spot"]
const foodTypes = [
  "Italian",
  "Chinese",
  "Mexican",
  "Indian",
  "Japanese",
  "Mediterranean",
  "Thai",
  "French",
  "American",
  "Greek"
];
const delhiLocations = [
  "Connaught Place",
  "Karol Bagh",
  "Hauz Khas",
  "Dwarka",
  "Chanakyapuri",
  "Lajpat Nagar",
  "Saket",
  "Vasant Kunj",
  "Rajouri Garden",
  "Shahdara"
];



for(let i=0;i<100;i++){
  
    const obj = {};
    obj["image"] = images[Math.floor(Math.random()*10)];
    obj["name"] = rest_name[Math.floor(Math.random()*20)];
    obj["rating"]   = Math.floor(Math.random()*5+1);
    obj["food_type"] = foodTypes[Math.floor(Math.random()*10)];
    obj["price_for_two"] = Math.floor(Math.random()*2401+100);
    obj["location"] = delhiLocations[Math.floor(Math.random()*10)];
    obj["distance"] = (Math.random()*10+1).toFixed(1);
    obj["offers"] = Math.floor(Math.random()*30);
    obj["alcholol"] = Math.random() >0.7;
    obj["restaurant_open_time"] = Math.floor(Math.random()*24);
    obj["restaurant_close_time"] = (obj["restaurant_open_time"]+12)%24;

      restaurant.push(obj);
    }

  console.log(restaurant);

  //array convert into JSON(homework);