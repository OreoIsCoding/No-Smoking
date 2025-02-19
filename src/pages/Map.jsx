import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../components/Navbar";
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Inline SVG for the custom green and red marker icons
const svgSmokingMarker = `
  <svg width="30" height="45" viewBox="0 0 30 45" xmlns="http://www.w3.org/2000/svg">
    <path d="M15,0 C23.2843,0 30,6.7157 30,15 C30,26.25 15,45 15,45 C15,45 0,26.25 0,15 C0,6.7157,0 15,0 Z" fill="#73C329"/>
    <circle cx="15" cy="15" r="5" fill="white"/>
  </svg>
`;

const svgNonSmokingMarker = `
  <svg width="30" height="45" viewBox="0 0 30 45" xmlns="http://www.w3.org/2000/svg">
    <path d="M15,0 C23.2843,0 30,6.7157 30,15 C30,26.25 15,45 15,45 C15,45 0,26.25 0,15 C0,6.7157 6.7157,0 15,0 Z" fill="#D9534F"/>
    <circle cx="15" cy="15" r="5" fill="white"/>
  </svg>
`;

// Create custom Leaflet icons using the SVG data URIs
const smokingIcon = new L.Icon({
  iconUrl: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svgSmokingMarker)}`,
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [0, -40],
});

const nonSmokingIcon = new L.Icon({
  iconUrl: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svgNonSmokingMarker)}`,
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [0, -40],
});

// Coordinates for the smoke-free and smoking areas
const areas = [
  { id: 1, name: "Area 1", lat: 14.411778, lng: 121.036333, type: "smoking" },
  { id: 2, name: "Area 2", lat: 14.411806, lng: 121.038500, type: "non-smoking" },
  { id: 3, name: "Area 3", lat: 14.411278, lng: 121.038639, type: "smoking" },
  { id: 4, name: "Area 4", lat: 14.415444, lng: 121.038778, type: "non-smoking" },
  { id: 5, name: "Area 5", lat: 14.238389, lng: 121.055611, type: "smoking" },
  { id: 6, name: "Area 6", lat: 14.818722534481978, lng: 120.90130092776394, type: "non-smoking" },
];

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [notification, setNotification] = useState(null);
  const [notificationColor, setNotificationColor] = useState("bg-green-500"); // Default to green for smoking areas
  const [filter, setFilter] = useState("all"); // Filter state
  const defaultLocation = { lat: 14.41072, lng: 121.03825 };
  const radius = 1000; // 1 km radius around the user's location
  const navigate = useNavigate(); // Initialize navigate for redirection

  useEffect(() => {
    let watchId;
    if (navigator.geolocation) {
      // Start watching the user's location
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting location: ", error);
          setUserLocation(defaultLocation);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 5000,
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
      setUserLocation(defaultLocation);
    }

    return () => {
      if (watchId) navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  useEffect(() => {
    if (userLocation) {
      // If user is in a smoke-free area, show notification
      const nearby = areas.filter((area) => {
        const distance = haversineDistance(
          userLocation.lat,
          userLocation.lng,
          area.lat,
          area.lng
        );
        return distance <= radius;
      });

      // Show notification based on area type
      if (nearby.length > 0) {
        const areaType = nearby[0].type; // Assuming the user is close to one area
        if (areaType === "smoking") {
          setNotification("You are in a smoking area!");
          setNotificationColor("bg-green-500"); // Green for smoking
        } else {
          setNotification("You are in a non-smoking area!");
          setNotificationColor("bg-red-500"); // Red for non-smoking
          
          // Redirect user to /detect page after 3 seconds
          setTimeout(() => {
            navigate("/detect");
          }, 3000);
        }
        setTimeout(() => setNotification(null), 3000); // Remove notification after 3 seconds
      } else {
        setNotification("No nearby areas found.");
        setNotificationColor("bg-yellow-500"); // Yellow for no nearby areas
        setTimeout(() => setNotification(null), 3000); // Remove notification after 3 seconds
      }
    }
  }, [userLocation, navigate]); // Add navigate to dependency

  // Haversine formula to calculate the distance between two coordinates in meters
  const haversineDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3; // Earth radius in meters
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon1 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in meters

    return distance;
  };

  if (!userLocation) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-center">
          <span className="text-lg text-gray-600">Loading map...</span>
        </div>
      </div>
    );
  }
  

  const handleAreaClick = (area) => {
    setSelectedArea(area); // Set the selected area to center on map
    setIsSidebarVisible(false); // Close the sidebar when an area is selected
  };

  // Component to control map center change and show the area name
  const ChangeMapCenter = () => {
    const map = useMap();
    useEffect(() => {
      if (selectedArea) {
        map.setView([selectedArea.lat, selectedArea.lng], 13); // Set view to selected area
      }
    }, [selectedArea, map]);
    return null;
  };

  // Filter areas based on the selected filter
  const filteredAreas = areas.filter((area) => {
    if (filter === "all") return true;
    return area.type === filter;
  });

  return (
    <div className="flex flex-col h-screen bg-gray-50 relative">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-400 to-green-600 p-4 text-white w-full flex items-center justify-center rounded-b-[24px] shadow-lg mb-6">
        <h2 className="uppercase text-lg sm:text-xl font-semibold text-center">Smoke-Free Spots in Your Area</h2>
      </div>

      {/* Notification Banner */}
      {notification && (
        <div className={`flex justify-center items-center ${notificationColor} bg-opacity-80 text-white p-4 absolute top-16 left-0 right-0 rounded-md shadow-md z-30`}>
          {notification}
        </div>
      )}

      {/* Sidebar Toggle Button */}
      <button
        className="absolute top-45 left-2 bg-neutral-800 text-white p-2 rounded-full shadow-lg z-30"
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
      >
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>

      {/* Sidebar */}
      {isSidebarVisible && (
        <div className="absolute top-0 left-0 bg-gradient-to-b from-green-700 to-green-800 w-64 h-full shadow-xl z-30 p-6 overflow-y-auto transition-all duration-500 ease-in-out transform translate-x-0">
          <h3 className="text-2xl font-bold text-white mb-6">Areas</h3>
          <div className="mb-6">
            <button
              className={`flex items-center justify-between w-full p-3 rounded-lg mb-2 text-white ${filter === "all" ? "bg-green-500" : "bg-transparent"}`}
              onClick={() => setFilter("all")}
            >
              <span>All</span>
            </button>
            <button
              className={`flex items-center justify-between w-full p-3 rounded-lg mb-2 text-white ${filter === "non-smoking" ? "bg-green-500" : "bg-transparent"}`}
              onClick={() => setFilter("non-smoking")}
            >
              <span>Non-Smoking</span>
            </button>
            <button
              className={`flex items-center justify-between w-full p-3 rounded-lg mb-2 text-white ${filter === "smoking" ? "bg-green-500" : "bg-transparent"}`}
              onClick={() => setFilter("smoking")}
            >
              <span>Smoking</span>
            </button>
          </div>
          <ul>
            {filteredAreas.map((area) => (
              <li
                key={area.id}
                className={`cursor-pointer p-3 mb-2 rounded-lg transition-colors duration-200 ease-in-out hover:bg-green-600 ${
                  selectedArea && selectedArea.id === area.id ? "bg-green-500 text-white" : "text-neutral-200"
                }`}
                onClick={() => handleAreaClick(area)}
              >
                {area.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Map Section */}
      <div className="flex-grow w-full h-full pb-20 z-20">
        <MapContainer
          center={selectedArea ? [selectedArea.lat, selectedArea.lng] : [userLocation.lat, userLocation.lng]}
          zoom={13}
          className="w-full h-full rounded-lg shadow-xl"
        >
          <ChangeMapCenter />
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* User location marker */}
          <Marker position={[userLocation.lat, userLocation.lng]} icon={smokingIcon}>
            <Popup>Your Current Location</Popup>
          </Marker>

          {/* Circle for the radius */}
          <Circle
            center={[userLocation.lat, userLocation.lng]}
            radius={radius}
            color="green"
            fillColor="green"
            fillOpacity={0.2}
          />

          {/* Show all areas */}
          {filteredAreas.length > 0 &&
            filteredAreas.map((area) => (
              <Marker
                key={area.id}
                position={[area.lat, area.lng]}
                icon={area.type === "smoking" ? smokingIcon : nonSmokingIcon}
              >
                <Popup>{area.name}</Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>

      {/* Bottom Navbar */}
      <div className="w-full fixed bottom-0 z-20">
        <Navbar />
      </div>
    </div>
  );
};

export default Map;
