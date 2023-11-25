
import { groq } from 'next-sanity';
import { readClient } from './lib/client';

export const getResources = async () => { 
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
      return resources;
    } catch (error) {
      alert(`Quelque chose s'est mal passé ${error}, réessayer`);
    }
} 

export const getLatestResources = async () => {
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
      alert(`Quelque chose s'est mal passé ${error}, réessayer`);
    }
} 

export const getActivitieslList = async () => {
  try {
    const activities = await readClient.fetch(
      groq`*[_type == "activities"]{
        _id,
        activityName,
        activityDescription,
        "image": poster.asset->url
      }`
    ); 
    return activities;
  } catch (error) {
    alert(`Quelque chose s'est mal passé ${error}, réessayer`);
  }
} 