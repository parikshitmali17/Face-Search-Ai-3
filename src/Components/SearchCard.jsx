export default function SearchCard(props){
    return <div style={{ width: '275px', height: '350px', overflow: 'hidden' }}>
    <img
      src={props.src}
      alt="Search Result"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover', // Ensures the image fills the box without distortion
      }}
    />
  </div>

//     <div class="card" style={{width: '18rem'}}>
//     <img src={props.src} class="card-img-top" alt="..."/>
//     <div class="card-body">
//       <p class="card-text">Joseph Robinette Biden Jr. was born on November 20, 1942, at St. Mary's Hospital</p>
//     </div>
//   </div>


}