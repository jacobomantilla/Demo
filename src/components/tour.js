import React from 'react';
import ReactDOM from 'react-dom';

function VirtualTour(){
    return(
        <div className='VirtualTour'>
            <h2 className="main-title text-center">VirtualTour</h2>
            <iframe src='https://www.zillow.com/view-3d-home/8a3913ee-67b5-4127-aa89-2f0a34d74922/?utm_source=captureapp' height='500' width='1300'></iframe>
        </div>
    );
}
export default VirtualTour;