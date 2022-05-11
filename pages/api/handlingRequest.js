// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils";

//function handler(req, res) {

  //res.status(200).json({ name: "Kike Vanegas"})
//}

const urlFetch = (house) =>{
  return `https://hp-api.herokuapp.com/api/characters/house/${house}`
}

const fetchingData = async ( house = "slytherin" )=>{
  try {
    const response = await fetch(urlFetch(house));
    const results = await response.json();
    return results;
  } catch (error) {
    return { error }
  }

}

const handlingRequest = async (req, res)=>{
  const { house } = req.query;
  try {
    const results = await fetchingData(house);
    res.status(200);
    res.json(results);
  } catch (err) {
    res.status(500);
    res.json({message: "Something went wrong with your request"})
  }
}

export default handlingRequest;