import React from "react";

/**
 * Component to handle file upload. Works **/
 
function FileUpload() {
  // State to store uploaded file
  const [file, setFile] = React.useState("");

  // Handles file upload event and updates state
  function handleUpload(event) {
    setFile(event.target.files[0]);

    
  }

  return (
    <div id="upload-box">
      <input type="file" onChange={handleUpload} />
      <p>Filename: {file.name}</p>
      <p>File type: {file.type}</p>
      <p>File size: {file.size} bytes</p>
      <a href={file} download>Download File</a>
      
    </div>
  );
}


export default function File() {
  return <FileUpload />;
}