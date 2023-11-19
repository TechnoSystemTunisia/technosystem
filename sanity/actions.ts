
import { groq } from 'next-sanity';
import { readClient } from './lib/client';

interface GetResourcesParams {
    query: string;
  }

export const getResources = async () => {
    //const { query } = params;
  
    try {
      const resources = await readClient.fetch(
        groq`*[_type == "resource"]{
            _id,
            projectName,
            projecDescription,
            projectClient,
            "imageUrls": projectImages[]{ 
              "url": asset->url,
              height,
              width
            }
          }`
      );
      console.log("resources", resources);
      
      return resources;
    } catch (error) {
      return(error);
    }
} 

export const getLatestResources = async () => {
    //const { query } = params;
  
    try {
      const resources = await readClient.fetch(
        groq`*[_type == "resource"]{
            _id,
            projectName,
            projecDescription,
            projectClient,
            "imageUrls": projectImages[]{ 
              "url": asset->url,
              height,
              width
            },
          }[0...6]`
      ); 
      return resources;
    } catch (error) {
      return(error);
    }
} 