
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(express.static("public"));
const place="New Delhi";
const place2="Mumbai";
const place3="Kolkata";
const place4="Bangalore";
const place5="Pune";
const place6="Hyderabad";
const API_URL = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather";
app.use(bodyParser.urlencoded({ extended: true }));
const options = {
 // method: 'GET',
  // url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
  // params: {city: 'Seattle'},
  headers: {
    'X-RapidAPI-Key': 'd5f2d88dd3msh4819bb08a3b77e1p125ac3jsn61e6761f1e30',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};
const response1 = await axios.get(API_URL+"?city="+place,options);
const response2 = await axios.get(API_URL+"?city="+place2,options);
const response3= await axios.get(API_URL+"?city="+place3,options);
const response4= await axios.get(API_URL+"?city="+place4,options);
const response5= await axios.get(API_URL+"?city="+place5,options);
const response6= await axios.get(API_URL+"?city="+place6,options);

app.get("/", async(req,res)=>{
  try {
	const response = await axios.get(API_URL+"?city="+place,options);
  res.render("index.ejs",{
      heading : "Weather for "+place,
      temp: response.data.feels_like,
      mintemp: response.data.min_temp,
      maxtemp:response.data.max_temp,
      wspeed:response.data.wind_speed,
      hmdtiy:response.data.humidity,
      wdegree:response.data.wind_degrees,

      feels1:response1.data.feels_like,
      humid1:response1.data.humidity,
      max1:response1.data.max_temp,
      min1:response1.data.min_temp,
      ws1:response1.data.wind_speed,

      feels2:response2.data.feels_like,
      humid2:response2.data.humidity,
      max2:response2.data.max_temp,
      min2:response2.data.min_temp,
      ws2:response2.data.wind_speed,

      feels3:response3.data.feels_like,
      humid3:response3.data.humidity,
      max3:response3.data.max_temp,
      min3:response3.data.min_temp,
      sunr3:response3.data.sunrise,
      suns3:response3.data.sunset,
      ws3:response3.data.wind_speed,

      feels4:response4.data.feels_like,
      humid4:response4.data.humidity,
      max4:response4.data.max_temp,
      min4:response4.data.min_temp,
      ws4:response4.data.wind_speed,

      feels5:response5.data.feels_like,
      humid5:response5.data.humidity,
      max5:response5.data.max_temp,
      min5:response5.data.min_temp,
      ws5:response5.data.wind_speed,

      feels6:response6.data.feels_like,
      humid6:response6.data.humidity,
      max6:response6.data.max_temp,
      min6:response6.data.min_temp,
      ws6:response6.data.wind_speed,
    })
} catch (error) {
	console.error(error);
  res.render("index1.ejs",{
    heading:"Oops...! It seem's like you entered wrong spelling.",
    heading1:"Please correct it and try again :)",
  });
}
});
app.post("/search", async(req,res)=>{
  const searchjagah =req.body.city;
  const firstLetter = searchjagah.charAt(0);
  const capitalizedFirstLetter = firstLetter.toUpperCase();
  const capitalizedString = capitalizedFirstLetter + searchjagah.slice(1);
  try{
    const response = await axios.get(API_URL+"?city="+searchjagah,options);
    //console.log(response.data);

  res.render("index.ejs",{
    heading : "Weather for "+capitalizedString,
    temp: response.data.feels_like,
      mintemp: response.data.min_temp,
      maxtemp:response.data.max_temp,
      wspeed:response.data.wind_speed,
      hmdtiy:response.data.humidity,
      wdegree:response.data.wind_degrees,

      feels1:response1.data.feels_like,
      humid1:response1.data.humidity,
      max1:response1.data.max_temp,
      min1:response1.data.min_temp,
      ws1:response1.data.wind_speed,

      feels2:response2.data.feels_like,
      humid2:response2.data.humidity,
      max2:response2.data.max_temp,
      min2:response2.data.min_temp,
      ws2:response2.data.wind_speed,

      feels3:response3.data.feels_like,
      humid3:response3.data.humidity,
      max3:response3.data.max_temp,
      min3:response3.data.min_temp,
      ws3:response3.data.wind_speed,

      feels4:response4.data.feels_like,
      humid4:response4.data.humidity,
      max4:response4.data.max_temp,
      min4:response4.data.min_temp,
      ws4:response4.data.wind_speed,

      feels5:response5.data.feels_like,
      humid5:response5.data.humidity,
      max5:response5.data.max_temp,
      min5:response5.data.min_temp,
      ws5:response5.data.wind_speed,

      feels6:response6.data.feels_like,
      humid6:response6.data.humidity,
      max6:response6.data.max_temp,
      min6:response6.data.min_temp,
      ws6:response6.data.wind_speed,
      
  })
  }catch (error) {
    console.log(error);
    res.render("index1.ejs",{
      heading:"Oops...! It seem's like you entered wrong spelling.",
      heading1:"Please correct it and try again :)",
    });
  }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  