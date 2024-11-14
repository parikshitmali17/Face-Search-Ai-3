import React from 'react';
import SearchCard from './SearchCard';

function ImageResult() {
  return (
    // <div style={{ textAlign: 'center', marginTop: '50px' }}>
    //   <h2>Your Search Result...</h2>
    //   <p>Here you can display anything you'd like.</p>
    //   <SearchCard src="\Images\Donald.jpg"/>
    //   <SearchCard src="\Images\Donald.jpg"/>

    // </div> 


    //here
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h2>Your Search Result...</h2>
    <p>Here you can display anything you'd like.</p>

    {/* Flex container to align cards in a row */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
    
      <SearchCard src="/Images/download.JPEG" />
      
     
      {/* <SearchCard src="/Images/JB2.JPEG" /> */}
      <SearchCard src="/Images/JB3.JPEG" />
      <SearchCard src="/Images/JB4.JPEG" />
      <SearchCard src="/Images/JB5.JPEG" />
      {/* <SearchCard src="/Images/JB6.JPEG" /> */}
    </div>
  </div>
  );
}

export default ImageResult;
