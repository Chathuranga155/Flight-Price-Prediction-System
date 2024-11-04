// src/FlightPricePredictor.js

import React, { useState } from 'react';
import axios from 'axios';

function FlightPricePredictor() {
  const [formData, setFormData] = useState({
    airline: '',
    source_city: '',
    departure_time: '',
    stops: '',
    arrival_time: '',
    destination_city: '',
    class: '',
    departure_date: '',
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', formData);
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error fetching prediction:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-semibold text-blue-700 mb-8">Flight Price Prediction</h1>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg space-y-6">
        
        {/* Airline Field */}
        <div className="space-y-2 w-full">
          <label className="block text-sm font-medium text-gray-700">Airline</label>
          <select
            name="airline"
            value={formData.airline}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Airline</option>
            <option value="SpiceJet">SpiceJet</option>
            <option value="AirAsia">AirAsia</option>
            <option value="Vistara">Vistara</option>
            <option value="GO_FIRST">GO_FIRST</option>
            <option value="Indigo">Indigo</option>
            <option value="Air_India">Air India</option>
          </select>
        </div>

        {/* Source City Field */}
        <div className="space-y-2 w-full">
          <label className="block text-sm font-medium text-gray-700">Source City</label>
          <select
            name="source_city"
            value={formData.source_city}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Source City</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
          </select>
        </div>

        {/* Departure Time Field */}
        <div className="space-y-2 w-full">
          <label className="block text-sm font-medium text-gray-700">Departure Time</label>
          <select
            name="departure_time"
            value={formData.departure_time}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Departure Time</option>
            <option value="Evening">Evening</option>
            <option value="Early_Morning">Early Morning</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Night">Night</option>
            <option value="Late_Night">Late Night</option>
          </select>
        </div>

        {/* Stops Field */}
        <div className="space-y-2 w-full">
          <label className="block text-sm font-medium text-gray-700">Stops</label>
          <select
            name="stops"
            value={formData.stops}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Stops</option>
            <option value="zero">Zero</option>
            <option value="one">One</option>
            <option value="two_or_more">Two or More</option>
          </select>
        </div>

        {/* Arrival Time Field */}
        <div className="space-y-2 w-full">
          <label className="block text-sm font-medium text-gray-700">Arrival Time</label>
          <select
            name="arrival_time"
            value={formData.arrival_time}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Arrival Time</option>
            <option value="Night">Night</option>
            <option value="Morning">Morning</option>
            <option value="Early_Morning">Early Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
            <option value="Late_Night">Late Night</option>
          </select>
        </div>

        {/* Destination City Field */}
        <div className="space-y-2 w-full">
          <label className="block text-sm font-medium text-gray-700">Destination City</label>
          <select
            name="destination_city"
            value={formData.destination_city}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Destination City</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
          </select>
        </div>

        {/* Class Field */}
        <div className="space-y-2 w-full">
          <label className="block text-sm font-medium text-gray-700">Class</label>
          <select
            name="class"
            value={formData.class}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Class</option>
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
          </select>
        </div>

        {/* Departure Date Field */}
        <div className="space-y-2 w-full">
          <label className="block text-sm font-medium text-gray-700">Departure Date</label>
          <input
            type="date"
            name="departure_date"
            min={new Date().toISOString().split('T')[0]}
            value={formData.departure_date}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Predict
        </button>
      </form>

      {prediction !== null && (
        <div className="mt-6 p-4 bg-green-100 rounded-lg text-green-700">
          <h2 className="text-xl font-semibold">Your Flight Price: ₹{prediction}</h2>
        </div>
      )}
    </div>
  );
}

export default FlightPricePredictor;
