import React from 'react';
import ViewWriteStories from './ViewWriteStories';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import WriteStory from './WriteStory';
import ViewStories from './ViewStories';


function App() {
  return (
      <div>
      
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path='/' element={<Home />} />
          {/* Green Lake Routes */}
          <Route path='/viewWriteStories-GreenLake' element={<ViewWriteStories artwork="Green-Lake-Stories"/>}/>
          <Route path="writeStory-Green-Lake-Stories" element={<WriteStory artURL="Green-Lake-Stories"/>}/>
          <Route path="/viewStory-Green-Lake-Stories" element={<ViewStories artLink="Green-Lake-Stories"/>}/>

          {/* Ghibli House Routes */}
          <Route path='/viewWriteStories-GhibliHouse' element={<ViewWriteStories artwork="Ghibli-House-Stories"/>}/>
          <Route path="writeStory-Ghibli-House-Stories" element={<WriteStory artURL="Ghibli-House-Stories"/>}/>
          <Route path="/viewStory-Ghibli-House-Stories" element={<ViewStories artLink="Ghibli-House-Stories"/>}/>

          {/* Carosel Routes */}
          <Route path='/viewWriteStories-Carosel' element={<ViewWriteStories artwork="Carosel-Stories"/>}/>
          <Route path="writeStory-Carosel-Stories" element={<WriteStory artURL="Carosel-Stories"/>}/>
          <Route path="/viewStory-Carosel-Stories" element={<ViewStories artLink="Carosel-Stories"/>}/>

          {/* Cooling Mist Routes */}
          <Route path='/viewWriteStories-CoolingMist' element={<ViewWriteStories artwork="Cooling-Mist-Stories"/>}/>
          <Route path="writeStory-Cooling-Mist-Stories" element={<WriteStory artURL="Cooling-Mist-Stories"/>}/>
          <Route path="/viewStory-Cooling-Mist-Stories" element={<ViewStories artLink="Cooling-Mist-Stories"/>}/>

        </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
