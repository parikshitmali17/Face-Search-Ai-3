export default function Card(){
    return <div>
    
    <div class="album py-5 bg-body-tertiary">
        
    <div class="container">
    <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3"> Key Features</h1>
    
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        
        <div class="col">
          <div class="card shadow-sm">
            {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
            <img
        src="\Images\Mobile1.png"
        className="card-img-top"
        alt="Thumbnail"
        style={{ width: '100%', height: '225px', objectFit: 'cover' }}
      />
            <div class="card-body">
              <p class="card-text">Search anyone using their Face and get all the corresponding
              websites over which person's image is getting used</p>
              {/* <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-body-secondary">9 mins</small>
              </div> */}
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
            <img
        src="\Images\Mobile2.jpg"
        className="card-img-top"
        alt="Thumbnail"
        style={{ width: '100%', height: '225px', objectFit: 'cover' }}
      />
            <div class="card-body">
              <p class="card-text">Instantly Find Email Address and Phone Number of any Individual using their Full Name Easily and Quickly Online Searches</p>
              {/* <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-body-secondary">9 mins</small>
              </div> */}
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img
        src="\Images\Mobile3.jpg"
        className="card-img-top"
        alt="Thumbnail"
        style={{ width: '100%', height: '225px', objectFit: 'cover' }}
      />
            {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
            <div class="card-body">
              <p class="card-text">Discover Someone's Interests and Get Topics to Discuss with Them by Their Name, Plus a Personalized Customized Poem Insight</p>
              {/* <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-body-secondary">9 mins</small>
              </div> */}
            </div>
          </div>
        </div>

        
      </div>
    </div>
  </div>
  </div>
}