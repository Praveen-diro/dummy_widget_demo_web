import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import '../stylesSelectLink.css';

export const WidgetDemo = forwardRef((props, ref) => {
  const containerRef = useRef('diro-widget-container');
  const widgetInstance = useRef(null);

  useEffect(() => {
    // Initialize widget only once
    if (containerRef.current && !widgetInstance.current) {
      widgetInstance.current = window.initializeDiroWidget(
        containerRef.current,
        {
          targetUrl: "https://verification.diro.live/?buttonid=O.DD-KORpuZ-f9DU-sandbox&trackid=",
          buttonText: "Start verification",
          allowRedirection: true,

          openWith: "newtab",
          containerStyles: {
            backgroundColor: "#f0f0f0",
            padding: "20px",
            borderRadius: "10px",
          },
          buttonStyles: {
            fontSize: "16px",
            borderRadius: "12px",
            width: "300px",
            // padding:"100px"
          },
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