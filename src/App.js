import React, { useState } from "react";
import SearchBar from "./components/searchBar";
import CanvasEditor from "./components/canvasEditor";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCaptionPage from "./AddCaptionPage";
function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image selection
  const onImageSelect = (image) => {
    setSelectedImage(image); // Updates the state with the selected image
  };
  return (
  //   <div className="">
  //   <h1 className="text-3xl font-bold underline">Image Editor</h1>
  //   <SearchBar onImageSelect={onImageSelect} />{" "}
  //   {/* Pass the function as a prop */}
  //   {selectedImage && <CanvasEditor image={selectedImage} />}{" "}
  //   {/* Pass selected image */}
  // </div>


<Router>
      <Routes>
        
        <Route path="/" element={<SearchBar onImageSelect={setSelectedImage} />} />
        <Route path="/add-caption" element={<AddCaptionPage imageUrl={selectedImage} />} />
      </Routes>
    </Router>
  );
}

export default App;
