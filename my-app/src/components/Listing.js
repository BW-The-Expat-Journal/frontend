import React from 'react';

const Listing = ({title, location, description}) => {
    return(
        <div> 
            <h1> {title} </h1>
             <p> {location}</p>
             <p>{description}</p>
             <button>Edit Story</button>
             <button>Delete Story</button>
           
       </div>
    );
};


export default Listing;
 