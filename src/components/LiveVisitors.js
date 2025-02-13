import React, { useState, useEffect } from 'react';

const LiveVisitors = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Simulate live visitor count
    const interval = setInterval(() => {
      setVisitorCount(prev => Math.floor(Math.random() * 20) + prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="live-visitors">
      <h3>Live Visitors</h3>
      <div className="visitor-count">
        {visitorCount}
      </div>
    </div>
  );
};

export default LiveVisitors; 