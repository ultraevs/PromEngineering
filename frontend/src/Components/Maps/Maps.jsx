import React from "react";
import { useState, useEffect } from 'react';

import { YMaps, Map, Placemark, GeolocationControl } from "@pbe/react-yandex-maps";


const Maps = () => {
  let map_width, map_height;
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  if (width <= 768){
    map_width = 342, 
    map_height = 207;
  }
  else if (width <= 1000){
    map_width = 417;
    map_height = 252;
  }
  else if (width <= 1280){
    map_width = 492;
    map_height = 298;
  }
  else if (width <= 1440){
    map_width = 601;
    map_height = 364;
  }
  else{
    map_width = 710;
    map_height = 430;
  }
  
  return (
    <div >
      <YMaps>
        <Map
          style={{borderRadius: 12, overflow: "hidden", width: map_width, height: map_height}}
          defaultState={{
            center: [55.784405, 37.673421],
            zoom: 15,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          <GeolocationControl options={{ float: "left" }} />
          <Placemark
            modules={["geoObject.addon.balloon"]}
            defaultGeometry={[55.784405, 37.673421]}
            properties={{
              balloonContentHeader:
                "Проминжиниринг",
              balloonContentBody:
                "",
              balloonBottom: true,
            }}
          />
          
        </Map>
      </YMaps>
    </div>
  );
};

export default Maps;