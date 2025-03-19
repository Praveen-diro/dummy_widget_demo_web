import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

export const UploadWidget = forwardRef((props, ref) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create the widget div with required attributes
    const widgetDiv = document.createElement('div');
    widgetDiv.id = 'reactWidget';
    widgetDiv.setAttribute('data-buttonid', 'O.IN-oBdsIx-HGWM');
    widgetDiv.setAttribute('data-trackid', 'abc');
    widgetDiv.setAttribute('wrapper', JSON.stringify({
      height: "260px",
      width: "350px",
      themeColor: "black",
      fontFamily: "Montserrat",
      fontSize: "12px"
    }));

    // Clear any existing content and append the new widget div
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(widgetDiv);
    }

    // Load the upload widget script
    const script = document.createElement('script');
    script.src = 'https://smartupload.diro.io/widgets/diro.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      style={{
        width: "350px",
        height: "300px",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "10px"
      }}
      className="upload-widget-container"
      ref={containerRef}
    />
  );
});

export default UploadWidget;