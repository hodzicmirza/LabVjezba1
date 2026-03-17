import React, { useCallback, useEffect, useRef, useState } from "react";
import Map from "ol/Map";
import View from "ol/View";
import "ol/ol.css";
import { fromLonLat, transformExtent, toLonLat } from "ol/proj";
import ispisiGranice from "../lib/granice";
import geoloskeKarte from "../lib/geoloskeKarte";
import ImageModal from "./ImageModal";

const MapComponent = () => {
  const mapRef = useRef(null);
  const [imageModal, setImageModal] = useState(null);
  const hoveredLayerRef = useRef(null);
  const mapRefInstance = useRef(null);

  const handleHover = useCallback((event) => {
    if (!mapRefInstance.current) return;

    const mouseCoords = toLonLat(event.coordinate, "EPSG:3857");
    let isHovered = false;

    geoloskeKarte.forEach((layer) => {
      const imageExtent = layer.getSource().getImageExtent();
      const isInside =
        mouseCoords[0] >= imageExtent[0] &&
        mouseCoords[0] <= imageExtent[2] &&
        mouseCoords[1] >= imageExtent[1] &&
        mouseCoords[1] <= imageExtent[3];

      if (isInside) {
        isHovered = true;
        hoveredLayerRef.current = layer;
      }
    });

    document.body.style.cursor = isHovered ? "pointer" : "default";
    if (!isHovered) {
      hoveredLayerRef.current = null;
    }
  }, []);

  const handleClick = useCallback(() => {
    if (hoveredLayerRef.current) {
      setImageModal({
        image: hoveredLayerRef.current.get("modalUrl"),
        title: hoveredLayerRef.current.get("name"),
      });
    }
  }, []);

  const handleCloseModal = () => {
    setImageModal(null);
  };

  useEffect(() => {
    const extent = transformExtent(
      [13.0, 41.0, 23.0, 47.0],
      "EPSG:4326",
      "EPSG:3857"
    );

    const map = new Map({
      target: mapRef.current,
      layers: [...geoloskeKarte, ispisiGranice],
      view: new View({
        center: fromLonLat([17.789, 44.0]),
        zoom: 7,
        minZoom: 7,
        maxZoom: 16,
        extent: extent,
      }),
    });

    mapRefInstance.current = map;

    map.on("pointermove", handleHover);
    map.on("click", handleClick);

    return () => {
      map.un("pointermove", handleHover);
      map.un("click", handleClick);
      map.setTarget(undefined);
      mapRefInstance.current = null;
    };
  }, [handleClick, handleHover]);

  return (
    <div ref={mapRef} className="w-screen h-screen relative">
      <div className="absolute top-4 w-8/12 sm:w-auto sm:min-w-max left-1/2 transform -translate-x-1/2 z-40 bg-transparent bg-opacity-50 text-white text-lg font-bold rounded">
        Osnovna geološka karta Bosne i Hercegovine 1:100 000
      </div>

      {imageModal && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white p-4 rounded-lg max-w-4xl max-h-screen overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">{imageModal.title}</h2>

            <img
              src={imageModal.image}
              alt={imageModal.title}
              className="max-w-full max-h-[80vh]"
            />
            <button
              onClick={handleCloseModal}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Zatvori
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
