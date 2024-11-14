import React, { useState } from 'react';
import Webcam from 'react-webcam';

function ImageVideoUpload() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  // Webcam configuration
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setIsCameraOpen(false);
  }, [webcamRef]);

  // Handle file upload
  const handleFileChange = (event) => {
    setUploadedFile(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Upload or Capture Image/Video</h2>

      {/* Button to open the camera */}
      <button onClick={() => setIsCameraOpen(true)}>Open Camera</button>

      {/* File input to upload image/video */}
      <input
        type="file"
        accept="image/*,video/*"
        onChange={handleFileChange}
        style={{ display: 'block', margin: '20px auto' }}
      />

      {/* Display Webcam for live capture */}
      {isCameraOpen && (
        <div>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            style={{ width: '100%', maxWidth: '500px' }}
          />
          <button onClick={capture}>Capture Image</button>
          <button onClick={() => setIsCameraOpen(false)}>Close Camera</button>
        </div>
      )}

      {/* Display the captured image */}
      {capturedImage && (
        <div>
          <h3>Captured Image:</h3>
          <img src={capturedImage} alt="Captured" style={{ width: '100%', maxWidth: '500px' }} />
        </div>
      )}

      {/* Display the uploaded file (image/video) */}
      {uploadedFile && (
        <div>
          <h3>Uploaded File:</h3>
          {uploadedFile.includes("video") ? (
            <video src={uploadedFile} controls style={{ width: '100%', maxWidth: '500px' }} />
          ) : (
            <img src={uploadedFile} alt="Uploaded" style={{ width: '100%', maxWidth: '500px' }} />
          )}
        </div>
      )}
      {/* <button onClick={() => }>Upload Image/Video</button> */}
    </div>
  );
}

export default ImageVideoUpload;
