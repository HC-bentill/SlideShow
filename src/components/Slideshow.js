import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const images = [
    'https://i.pinimg.com/564x/5c/7a/d1/5c7ad1a311d564994ba4356ffaecadcf.jpg',
    'https://i.pinimg.com/236x/d8/63/c2/d863c26cedc9916ebd989ef82d6f3bdb.jpg',
    'https://i.pinimg.com/564x/4a/cb/f8/4acbf8805ea148a1d2919f50bd4c10e2.jpg',
  ];
  
  const Slideshow = () => {
      return (
        <div className="slide-container" style={{width: "500px", margin:"auto"}} >
          <Zoom scale={0.3}>
            {
              images.map((each, index) => <img alt='' key={index} style={{width: "100%", height: "150px"}} src={each} />)
            }
          </Zoom>
        </div>
      )
  };
  export default Slideshow