import React, { useState, useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Map() {
  const [start, setStart] = useState(""); // Start Location
  const [end, setEnd] = useState(""); // End Location
  const [middlePoints, setMiddlePoints] = useState([]); // Middle Locations
  const [showMiddlePoints, setShowMiddlePoints] = useState(false); // Toggle for middle points
  const [isFormVisible, setIsFormVisible] = useState(true); // Toggle form visibility (small screens only)
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markers = useRef([]); // To track all markers
  const zoom = 1;

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

    const locations = [start, ...middlePoints.filter((p) => p.trim()), end];
    const bounds = new maptilersdk.LngLatBounds();

    for (const location of locations) {
      if (!location.trim()) continue; // Skip empty input

      try {
        const response = await fetch(
          `https://api.maptiler.com/geocoding/${encodeURIComponent(
            location
          )}.json?key=${maptilersdk.config.apiKey}`
        );
        const data = await response.json();

        if (data.features && data.features.length > 0) {
          const [lon, lat] = data.features[0].geometry.coordinates;

          // Add marker to the map
          const marker = new maptilersdk.Marker({ color: "#00FF00" })
            .setLngLat([lon, lat])
            .addTo(map.current);
          markers.current.push(marker);

          // Extend map bounds to include this marker
          bounds.extend([lon, lat]);
        } else {
          toast.error(`Place "${location}" not found.`);
        }
      } catch (error) {
        toast.error(`Error fetching coordinates for "${location}": ${error}`);
      }
    }

    // Adjust map bounds to fit all markers, with padding
    if (!bounds.isEmpty()) {
      map.current.fitBounds(bounds, {
        padding: 100, // Add padding to ensure markers are not at the edge of the map
        maxZoom: 10, // Set a maximum zoom level
        duration: 1500, // Smooth transition duration in milliseconds
      });
      toast.success("Markers added and map adjusted!");
    } else {
      toast.error("No valid locations to map!");
    }
  };

  // Handle input change for middle points
  const handleMiddlePointChange = (index, value) => {
    const updatedPoints = [...middlePoints];
    updatedPoints[index] = value;
    setMiddlePoints(updatedPoints);
  };

  // Add a new middle point input field
  const addMiddlePoint = () => {
    if (middlePoints.length < 10) {
      setMiddlePoints([...middlePoints, ""]);
      toast.info("Added a new middle point.");
    } else {
      toast.error("You can only add up to 10 middle points.");
    }
  };

  // Remove a middle point input field
  const removeMiddlePoint = (index) => {
    setMiddlePoints(middlePoints.filter((_, i) => i !== index));
    toast.info("Middle point removed.");
  };

  // Toggle form visibility
  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  // Validate the inputs and fetch the optimal route
  // Function to process the response and draw the path
const printLocations = async () => {
  if (!start.trim() || !end.trim()) {
    toast.error("Start and End locations must be filled.");
    return;
  }

  for (const point of middlePoints) {
    if (point.trim() === "") {
      toast.error("All middle points must be filled.");
      return;
    }
  }

  const locations = [start, ...middlePoints.filter((p) => p.trim()), end];
  console.log("Locations Data:", locations);
  toast.info("Fetching the Optimal Route...");

  try {
    const response = await fetch("http://localhost:3000/calculate-distance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ locations }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Distance Matrix Response:", data);
      toast.success("Optimal Route fetched successfully!");

      // Clear existing markers
      markers.current.forEach((marker) => marker.remove());
      markers.current = [];

      const optimalRoute = data.optimalRoute;

      if (optimalRoute && optimalRoute.length > 0) {
        const routeCoordinates = [];

        for (const stop of optimalRoute) {
          const { location } = stop;

          // Fetch coordinates for each location
          const geoResponse = await fetch(
            `https://api.maptiler.com/geocoding/${encodeURIComponent(
              location
            )}.json?key=${maptilersdk.config.apiKey}`
          );
          const geoData = await geoResponse.json();

          if (geoData.features && geoData.features.length > 0) {
            const [lon, lat] = geoData.features[0].geometry.coordinates;
            routeCoordinates.push([lon, lat]);

            // Add a marker for this location
            const marker = new maptilersdk.Marker({ color: "#00FF00" })
              .setLngLat([lon, lat])
              .setPopup(new maptilersdk.Popup().setText(location)) // Add popup with location name
              .addTo(map.current);
            markers.current.push(marker);
          } else {
            toast.error(`Coordinates not found for "${location}".`);
          }
        }

        // Draw the route on the map
        drawRoute(routeCoordinates);
      } else {
        toast.error("No valid optimal route found in the response.");
      }
    } else {
      toast.error(`Error: ${data.error || "Failed to fetch distance matrix."}`);
    }
  } catch (error) {
    console.error("Error sending data to backend:", error);
    toast.error("Error while fetching the route.");
  }
};

// Draw route function
const drawRoute = (coordinates) => {
  if (map.current.getLayer("route")) {
    map.current.removeLayer("route");
  }
  if (map.current.getSource("route")) {
    map.current.removeSource("route");
  }

  // Add the route source
  map.current.addSource("route", {
    type: "geojson",
    data: {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: coordinates,
      },
    },
  });

  // Add the route layer
  map.current.addLayer({
    id: "route",
    type: "line",
    source: "route",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#FF5733",
      "line-width": 4,
    },
  });

  toast.success("Route drawn successfully on the map!");
};


  return (
    <div className="pt-20 h-screen flex flex-col lg:flex-row">
      {/* Toast Notifications */}
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />

      {/* Map Section */}
      <div className="flex-grow relative">
        <div ref={mapContainer} className="w-full h-full" />
        {!isFormVisible && (
          <button
            onClick={toggleForm}
            className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg lg:hidden"
          >
            ↑
          </button>
        )}
      </div>

      {/* Form Section */}
      <div
        className={`lg:w-1/3 lg:static lg:block ${
          isFormVisible ? "fixed bottom-0 left-0 right-0" : "hidden"
        } bg-gray-100 border-t lg:border-t-0 lg:border-l border-gray-300`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Enter Locations</h2>
            <button
              onClick={toggleForm}
              className="bg-blue-500 text-white px-3 py-1 rounded lg:hidden"
            >
              ↓
            </button>
          </div>

          <div>
            <div className="mb-3">
              <label className="block text-lg font-semibold mb-1">
                Start Location
              </label>
              <input
                type="text"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                placeholder="Start Location"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {!showMiddlePoints ? (
              <button
                onClick={() => setShowMiddlePoints(true)}
                className="mt-4 mb-4 bg-blue-600 text-white px-6 py-3 rounded-lg"
              >
                Add Middle Points
              </button>
            ) : (
              <>
                <h3 className="text-lg font-semibold mt-4">
                  Middle Points (Optional)
                </h3>
                {middlePoints.map((point, index) => (
                  <div key={index} className="flex items-center mb-3">
                    <input
                      type="text"
                      value={point}
                      onChange={(e) =>
                        handleMiddlePointChange(index, e.target.value)
                      }
                      placeholder={`Middle Point ${index + 1}`}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                    <button
                      onClick={() => removeMiddlePoint(index)}
                      className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  onClick={addMiddlePoint}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Add More
                </button>
              </>
            )}

            <div className="mt-4 mb-3">
              <label className="block text-lg font-semibold mb-1">
                End Location
              </label>
              <input
                type="text"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                placeholder="End Location"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-3">
              <button
                onClick={addMarkers}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add Markers
              </button>
              <button
                onClick={printLocations}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Find Route
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
