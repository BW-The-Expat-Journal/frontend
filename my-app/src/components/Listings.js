import React, {useState,useEffect}from 'react'
import Listing from './Listing';
import axios from 'axios';

const Listings = () => {

 
    const [stories, setStories] = useState([]);
 
    useEffect(() => {
      axios
        .get(' http://sj-mh-expat-journal.herokuapp.com/stories/stories')
        .then(response => {
          setStories(response.data.results);
        })
        .catch(error => {
          console.log(error);
        });
    }, [stories]);
   
   
 
    return (
     <div>
         {stories.map(story => {
           return (
             <Listing 
               title= {story.title}
               location= {story.location}
               description= {story.description}
             />
           );
         })}
       </div>
     
   );
 }
 
 export default Listings;
 