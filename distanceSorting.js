const haversine=require('haversine-distance');

//An array of various locations with their coordinates
const ad=[{cdiAirport:{lat: 35.2147488, lon: -80.9451976}},
          {uncg:{lat: 36.0688711, lon: -79.8115296}},
          {sheratonGreensboro:{lat: 36.0416402, lon:-79.8402197}},
          {hpu:{lat: 35.9764884, lon: -79.9977019}},
          {ptiAirport:{lat: 36.1036894, lon: -79.9349198}},
          {gtccJamestown:{lat: 35.9970191, lon:-79.9209686}},
          {elonUniversity:{lat: 36.1028874, lon: -79.5021929}}];

//Current location
let location={lat:36.0916983, lon:-79.8886390};

let distance=[];

// Create a new array with the distances from the current location to each location.
for(let i=0; i<ad.length; i++){ 
    distance.push({[Object.keys(ad[i]).toString()]:haversine(location, Object.values(ad[i])[0])})
}

//Method that sorts the array based on the distance
const sort=(o)=>{
    let swapping=true;
    let temp;
    while(swapping){
        swapping=false;
       for(let i=0; i<o.length-1; i++){
        if((Object.values(o[i])[0])>(Object.values(o[i+1])[0])){
            temp=o[i]
            o[i]=o[i+1]
            o[i+1]=temp;
            swapping=true;
        }
       }   
    }
// return the sorted array
    return o;
}

// Locations sorted by distance from the current location.
console.log(sort(distance));