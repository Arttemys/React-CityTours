import React, { useState } from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import { tourData } from '../TourData';

const TourList = () => {
    const [tour, setTour] = useState(tourData);

    const deleteTour = id => { 
        const updateList = tour.filter(item => item.id !== id);

        setTour(updateList);
    }

    return (
        <div className="wrapper">
            {
                tour.map(tour => {
                    return <Tour key={tour.id} tour={tour} deleteTour={deleteTour} />
                })
            }
        </div>
    )
}

export default TourList
