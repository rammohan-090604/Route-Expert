import React, { useState, useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

export default function Map() {
  const [places, setPlaces] = useState([""]); // Holds user-inputted place names
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markers = useRef([]); // To track all markers
  const zoom = 1.5;

  // Replace with your MapTiler API Key
  maptilersdk.config.apiKey = import.meta.env.REACT_APP_MAPTILER_API_KEY;

  // Initialize the map
  useEffect(() => {
    if (map.current) return; // Prevent re-initialization

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [0, 0], // Default center: world view
      zoom: zoom,
    });
  }, [zoom]);

  // Add markers to the map
const addMarkers = async () => {
  // Clear existing markers
  markers.current.forEach((marker) => marker.remove());
  markers.current = [];

  // Fetch coordinates for each place and add markers
  const bounds = new maptilersdk.LngLatBounds();

  for (const place of places) {
    if (!place.trim()) continue; // Skip empty input

    try {
      const response = await fetch(
        `https://api.maptiler.com/geocoding/${encodeURIComponent(
          place
        )}.json?key=${maptilersdk.config.apiKey}`
      );
      const data = await response.json();

      if (data.features && data.features.length > 0) {
        const [lon, lat] = data.features[0].geometry.coordinates;

        // Add marker to the map
        const marker = new maptilersdk.Marker({ color: "#FF0000" })
          .setLngLat([lon, lat])
          .addTo(map.current);
        markers.current.push(marker);

        // Extend map bounds to include this marker
        bounds.extend([lon, lat]);
      } else {
        console.log(`Place "${place}" not found`);
      }
    } catch (error) {
      console.error(`Error fetching coordinates for "${place}":`, error);
    }
  }

  // Adjust map bounds to fit all markers, with padding
  if (!bounds.isEmpty()) {
    map.current.fitBounds(bounds, {
      padding: 150, // Add padding to ensure markers are not at the edge of the map
      maxZoom: 10, // Set a maximum zoom level
      duration: 1500, // Smooth transition duration in milliseconds
    });
  }
};


  // Handle input change
  const handlePlaceChange = (index, value) => {
    const updatedPlaces = [...places];
    updatedPlaces[index] = value;
    setPlaces(updatedPlaces);
  };

  // Add a new input field
  const addPlaceField = () => {
    setPlaces([...places, ""]);
  };

  // Remove an input field
  const removePlaceField = (index) => {
    setPlaces(places.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Map Section */}
      <div className="mt-20 w-full lg:w-2/3 h-2/3 lg:h-full">
      <div ref={mapContainer} className="w-full h-full" />
    </div>

    {/* Input Section */}
    <div className="lg:mt-20 w-full lg:w-1/3 bg-gray-100 p-4 border-t lg:border-t-0 lg:border-l border-gray-300 flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Enter Locations</h2>
        {places.map((place, index) => (
          <div key={index} className="flex items-center mb-3">
            <input
              type="text"
              value={place}
              onChange={(e) => handlePlaceChange(index, e.target.value)}
              placeholder={`Place ${index + 1}`}
              className="flex-grow p-2 border border-gray-300 rounded mr-2"
            />
            {places.length > 1 && (
              <button
                onClick={() => removePlaceField(index)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <div className="flex justify-between">
          <button
            onClick={addPlaceField}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Place
          </button>
          <button
            onClick={addMarkers}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Map Locations
          </button>
        </div>
      </div>
    </div>
  );
}
