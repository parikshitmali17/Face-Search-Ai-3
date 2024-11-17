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
      <SearchCard src="https://www.google.com/imgres?q=joe%20biden&imgurl=https%3A%2F%2Findianexpress.com%2Fwp-content%2Fuploads%2F2023%2F12%2FJoe_Biden-removebg-preview.png&imgrefurl=https%3A%2F%2Findianexpress.com%2Fabout%2Fjoe-biden%2F&docid=KD0tYRrPkeyPfM&tbnid=u8TlqztJCattjM&vet=12ahUKEwibucXPhuOJAxUdxTgGHXqXBboQM3oECGYQAA..i&w=447&h=559&hcb=2&ved=2ahUKEwibucXPhuOJAxUdxTgGHXqXBboQM3oECGYQAA" />
      <SearchCard src="https://www.google.com/imgres?q=joe%20biden&imgurl=https%3A%2F%2Fwww.whitehouse.gov%2Fwp-content%2Fuploads%2F2021%2F01%2Feo_1-1.jpg&imgrefurl=https%3A%2F%2Fwww.whitehouse.gov%2Fbriefing-room%2Fspeeches-remarks%2F2021%2F01%2F20%2Finaugural-address-by-president-joseph-r-biden-jr%2F&docid=nlnSEZujw9EVOM&tbnid=8P9i_nJPUxeyWM&vet=12ahUKEwibucXPhuOJAxUdxTgGHXqXBboQM3oECBQQAA..i&w=1500&h=1000&hcb=2&ved=2ahUKEwibucXPhuOJAxUdxTgGHXqXBboQM3oECBQQAA" />
      <SearchCard src="https://www.google.com/imgres?q=joe%20biden&imgurl=https%3A%2F%2Fwww.hindustantimes.com%2Fht-img%2Fimg%2F2024%2F09%2F26%2F550x309%2FUN-ASSEMBLY-STARMER-64_1727361235337_1727361260874.JPG&imgrefurl=https%3A%2F%2Fwww.hindustantimes.com%2Fworld-news%2Fus-news%2Fjoe-biden-shares-his-future-plans-how-he-wants-to-be-remembered-after-white-house-exit-it-sounds-corny-101727359574791.html&docid=PPuxWzC-CN-0wM&tbnid=We9MVbi804x_iM&vet=12ahUKEwibucXPhuOJAxUdxTgGHXqXBboQM3oECHMQAA..i&w=549&h=309&hcb=2&ved=2ahUKEwibucXPhuOJAxUdxTgGHXqXBboQM3oECHMQAA" />
      <SearchCard src="https://www.google.com/imgres?q=joe%20biden&imgurl=https%3A%2F%2Fimage.cnbcfm.com%2Fapi%2Fv1%2Fimage%2F107413217-17153409552024-05-09t233524z_1362200356_rc29n7a2umdk_rtrmadp_0_usa-biden.jpeg%3Fv%3D1715341009%26w%3D1858%26h%3D1045%26vtcrop%3Dy&imgrefurl=https%3A%2F%2Fwww.cnbc.com%2F2024%2F05%2F20%2Fpresident-joe-biden-love-hate-american-ceos.html&docid=cuRB8tTaF_jxNM&tbnid=3QUNtXIrTtHtSM&vet=12ahUKEwibucXPhuOJAxUdxTgGHXqXBboQM3oECCsQAA..i&w=1858&h=1045&hcb=2&ved=2ahUKEwibucXPhuOJAxUdxTgGHXqXBboQM3oECCsQAA" />

      {/* <SearchCard src="/Images/download.JPEG" />
      <SearchCard src="/Images/JB2.JPEG" />
      <SearchCard src="/Images/JB3.JPEG" />
      <SearchCard src="/Images/JB4.JPEG" />
      <SearchCard src="/Images/JB5.JPEG" /> */}
      {/* <SearchCard src="/Images/JB6.JPEG" /> */}
    </div>
  </div>
  );
}

export default ImageResult;
