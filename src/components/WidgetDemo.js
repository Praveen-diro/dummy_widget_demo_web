import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

export const WidgetDemo = forwardRef((props, ref) => {
  const containerRef = useRef(null);
  const widgetInstance = useRef(null);

  useEffect(() => {
    // Initialize widget only once
    if (containerRef.current && !widgetInstance.current) {
      widgetInstance.current = window.initializeDiroWidget(
        containerRef.current,
        {
          targetUrl: "https://verification.diro.io/?buttonid=O.IN-83BAMy-b2wA-sandbox&trackid=",
          containerStyles: {
            backgroundColor: "#f0f0f0",
            padding: "20px",
            borderRadius: "10px",
            width: "350px",
            // height: "300px"
          },
          buttonStyles: {
            fontSize: "18px",
            borderRadius: "8px",
            width: "300px",
          }
        }
      );
    }
  }, []);

  useImperativeHandle(ref, () => ({
    updateWidget: (data) => {
      if (widgetInstance.current) {
        widgetInstance.current.update(data);
      }
    }
  }));

  return (
    <div 
      className="diro-widget" 
      id="diro-widget-container" 
      ref={containerRef} 
    />
  );
});

export default WidgetDemo; 