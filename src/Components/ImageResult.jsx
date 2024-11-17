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
    
      <SearchCard src="https://www.google.com/imgres?q=joe%20biden&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F68%2FJoe_Biden_presidential_portrait.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FJoe_Biden&docid=n3VthzSMI2HkHM&tbnid=KzmnocMkP1Zx6M&vet=12ahUKEwibucXPhuOJAxUdxTgGHXqXBboQM3oECBUQAA..i&w=2400&h=3000&hcb=2&ved=2ahUKEwibucXPhuOJAxUdxTgGHXqXBboQM3oECBUQAA" />
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
