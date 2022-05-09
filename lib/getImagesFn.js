export const getImagesFn = async ({ page, limit, query })=>{
    const response = await fetch(`https://api.pexels.com/v1/search/?page=${page}&per_page=${limit}&query=${query}`, {
        headers:{
            Authorization: process.env.API_KEY
        }
    });
    const resultApi = await response.json();
    return { 
        photos: resultApi.photos,
    }
}