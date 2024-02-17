import React, { useState, useEffect } from 'react';
import workshopService from './WorkshopService';

const Workshop = ({ workshopId }) => {
  const [workshop, setWorkshop] = useState(null);

  useEffect(() => {
    // Fetch workshop details when the component mounts
    const fetchedWorkshop = workshopService.getWorkshopById(workshopId);
    setWorkshop(fetchedWorkshop);
  }, [workshopId]);

  return (
    <div className="workshop-details">
      {workshop ? (
        <>
          <h2>{workshop.title}</h2>
          <div className="workshop-info">
            <p>Date: {workshop.date}</p>
            <p>Time: {workshop.time}</p>
          </div>
        </>
      ) : (
        <p>Workshop not found.</p>
      )}
    </div>
  );
};

export default Workshop;
