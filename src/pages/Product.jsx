// import React, { useState, useRef, useEffect } from "react";
// import * as maptilersdk from "@maptiler/sdk";
// import "@maptiler/sdk/dist/maptiler-sdk.css";

// const Product = () => {
//   const [places, setPlaces] = useState(["", ""]);
//   const [coordinates, setCoordinates] = useState([]); // Store coordinates to add markers
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const markers = useRef([]); // Track markers for each place

//   // Handle place input changes
//   const handlePlaceChange = (index, value) => {
//     const updatedPlaces = [...places];
//     updatedPlaces[index] = value;
//     setPlaces(updatedPlaces);
//   };

//   // Add a new place input field
//   const addPlaceField = () => {
//     if (places.length < 12) {
//       const updatedPlaces = [...places];
//       updatedPlaces.splice(places.length - 1, 0, ""); // Add before the last input
//       setPlaces(updatedPlaces);
//     }
//   };

//   // Remove a place field
//   const removePlaceField = (index) => {
//     const updatedPlaces = places.filter((_, i) => i !== index);
//     setPlaces(updatedPlaces);
//     const updatedCoordinates = coordinates.filter((_, i) => i !== index);
//     setCoordinates(updatedCoordinates);
//     // Remove marker from the map
//     if (markers.current[index]) {
//       markers.current[index].remove();
//       markers.current[index] = null;
//     }
//   };

//   // Fetch coordinates based on place name using MapTiler Geocoding API
//   const getCoordinates = async (place, index) => {
//     if (place) {
//       try {
//         const response = await fetch(
//           `https://api.maptiler.com/geocoding/${encodeURIComponent(
//             place
//           )}.json?key=kzVehHF1ujplkukgWXsF`
//         );
//         const data = await response.json();
//         if (data.features && data.features.length > 0) {
//           const { lon, lat } = data.features[0].geometry.coordinates;

//           // Update coordinates array with the new place's coordinates
//           const updatedCoordinates = [...coordinates];
//           updatedCoordinates[index] = [lon, lat];
//           setCoordinates(updatedCoordinates);

//           // Add marker to the map
//           if (map.current) {
//             const marker = new maptilersdk.Marker({ color: "#FF0000" })
//               .setLngLat([lon, lat])
//               .addTo(map.current);

//             // Track the marker for later removal
//             markers.current[index] = marker;
//           }
//         } else {
//           console.log("Place not found");
//         }
//       } catch (error) {
//         console.error("Error fetching coordinates:", error);
//       }
//     }
//   };

//   // Initialize the map when the component is mounted
//   useEffect(() => {
//     if (map.current) return; // Stop if map is already initialized

//     maptilersdk.config.apiKey = "kzVehHF1ujplkukgWXsF"; // Set your MapTiler API key

//     // Initialize map with a default center
//     map.current = new maptilersdk.Map({
//       container: mapContainer.current,
//       style: maptilersdk.MapStyle.STREETS,
//       center: [0, 0], // Initial center coordinates
//       zoom: 2, // Initial zoom level
//     });
//   }, []);

//   // Update map bounds after coordinates are added
//   useEffect(() => {
//     if (map.current && coordinates.length > 0) {
//       const bounds = new maptilersdk.LngLatBounds();
//       coordinates.forEach(([lon, lat]) => {
//         bounds.extend([lon, lat]);
//       });
//       map.current.fitBounds(bounds);
//     }
//   }, [coordinates]);

//   return (
//     <div className="flex flex-col md:flex-row h-screen">
//       {/* Map Section */}
//       <div className="w-full md:w-2/3 h-2/3 md:h-full">
//         <div ref={mapContainer} className="w-full h-full" />
//       </div>

//       {/* Form Section */}
//       <div className="mt-20 w-full md:w-1/3 md:h-full h-1/3 bg-gray-100 p-4 border-t md:border-t-0 md:border-l border-gray-300 flex flex-col">
//         <h2 className="text-2xl font-bold mb-4">Enter Your Locations</h2>
//         {places.map((place, index) => (
//           <div key={index} className="flex items-center mb-3">
//             <input
//               type="text"
//               value={place}
//               onChange={(e) => handlePlaceChange(index, e.target.value)}
//               placeholder={
//                 index === 0
//                   ? "Starting Location"
//                   : index === places.length - 1
//                   ? "Ending Destination"
//                   : `Intermediate Place ${index}`
//               }
//               className="flex-grow p-2 border border-gray-300 rounded mr-2"
//             />
//             <button
//               className="bg-blue-500 text-white px-3 py-1 rounded"
//               onClick={() => getCoordinates(place, index)} // Get coordinates for the entered place
//             >
//               View
//             </button>
//             {index > 0 && index < places.length - 1 && (
//               <button
//                 className="bg-red-500 text-white px-3 py-1 rounded"
//                 onClick={() => removePlaceField(index)} // Remove place field
//               >
//                 Remove
//               </button>
//             )}
//           </div>
//         ))}
//         {places.length < 12 && (
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded mb-3"
//             onClick={addPlaceField} // Add a new place field
//           >
//             Add Place
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Product;


import React, { useState, useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

export default function Map() {
  const [places, setPlaces] = useState([""]); // Holds user-inputted place names
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markers = useRef([]); // To track all markers
  const zoom = 2;

  // Replace with your MapTiler API Key
  maptilersdk.config.apiKey = "kzVehHF1ujplkukgWXsF";

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

          // Adjust map bounds
          map.current.fitBounds(
            markers.current.reduce(
              (bounds, marker) => bounds.extend(marker.getLngLat()),
              new maptilersdk.LngLatBounds()
            )
          );
        } else {
          console.log(`Place "${place}" not found`);
        }
      } catch (error) {
        console.error(`Error fetching coordinates for "${place}":`, error);
      }
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
      <div className="w-full lg:w-2/3 h-2/3 lg:h-full">
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
