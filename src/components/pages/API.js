import axios from "axios";
const BASEURL = "https://dog.ceo/api/breeds/image/random";
const BREEDURL = "https://dog.ceo/api/breed/"
// const APIKEY = "&apikey=trilogy";

export default {
  getRandomDog: function() {
    return axios.get(BASEURL);
  },
  
  getDogByBreed: function(query){
    return axios.get("https://dog.ceo/api/breed/"+ query + "/images/random");
  }
};
