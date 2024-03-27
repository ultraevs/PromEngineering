import React from "react";
import { YMaps, Map, Placemark, GeolocationControl } from "@pbe/react-yandex-maps";

const Maps = () => {
  return (
    <div>
      <YMaps>
        <Map
          style={{ marginTop: 42, borderRadius: 12, overflow: "hidden", width: 710, height: 430 }}
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