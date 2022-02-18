import 'source-map-support/register';

import axios from 'axios';

export const getBreedCount = async (event, _context) => {

  const getBreeds = async () => {
    try {
      return await axios.get('https://dog.ceo/api/breeds/list/all')
    } catch (error) {
      console.error(error)
    }
  }
  
  const countBreeds = async () => {
    const breeds = await getBreeds()
    
    if (breeds.data.message) {
      const count = Object.entries(breeds.data.message).length;
      console.log(`Got ${count} breeds`)
      return count;
    }
  }
  
  const breedCount = await countBreeds();

  return {     
      body: JSON.stringify({'breedData': breedCount})
  }

}
