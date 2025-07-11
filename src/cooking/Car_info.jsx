import "../css/CarInfo.css"; // Import custom styles

const CarInfo = () => {
  return (
    <div className="car-info-container">
      <h1 className="car-info-header">Car Information</h1>
      <div className="car-details">
        <div className="car-detail-item">
          <span>Car Model:</span> Tesla Model S
        </div>
        <div className="car-detail-item">
          <span>Year:</span> 2022
        </div>
        <div className="car-detail-item">
          <span>Price:</span> $80,000
        </div>
      </div>
    </div>
  );
};

export default CarInfo;
