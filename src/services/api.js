export const getPlaces=async()=>{
   const response=await fetch('https://nijin-server.vercel.app/api/explorer');
   const data=await response.json();
   return data;
}

export const getPlaceNames=async()=>{
   const response=await fetch('https://nijin-server.vercel.app/api/explorer');
   const data=await response.json();
   const places=data.map(placeDetail=>placeDetail.place);
   return places;
}

export const getPlaceDetail=async(place)=>{
    const response=await fetch(`https://nijin-server.vercel.app/api/explorer/places/${place}`);
    const detail=await response.json();
    return detail;
}

