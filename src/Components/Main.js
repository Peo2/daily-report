import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

export const Entry = () => {
  const [meterNumber, setMeterNumber] = useState('');
  const [data, setData] = useState([]);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('meterData')) || [];
    const now = new Date().getTime();

    // Filter out expired entries
    const validData = savedData.filter(
      (entry) => now - entry.timestamp < 13 * 60 * 60 * 1000
    );

    setData(validData);
    localStorage.setItem('meterData', JSON.stringify(validData));
  }, []);

  const handleSave = () => {
    if (!meterNumber) {
      alert('Please enter a meter number');
      return;
    }

    // Get geolocation
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const geocode = `${latitude}, ${longitude}`;
        const timestamp = new Date().getTime();

        // Add new entry to data
        const newData = [...data, { meterNumber, geocode, timestamp }];
        setData(newData);

        // Save updated data to localStorage
        localStorage.setItem('meterData', JSON.stringify(newData));

        // Clear input
        setMeterNumber('');

        // Save to Excel
        saveToExcel(newData);
      },
      (error) => {
        alert('Error fetching geolocation: ' + error.message);
      }
    );
  };

  const saveToExcel = (data) => {
    // Remove timestamps before saving to Excel
    const cleanData = data.map(({ meterNumber, geocode }) => ({
      meterNumber,
      geocode,
    }));

    const ws = XLSX.utils.json_to_sheet(cleanData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'MeterData.xlsx');
  };

  return (
    <div>
      <div className="form-group">
        <label className='pl-24 lg:text-xl lg:pl-36'>Meter Number</label><br/>
        <input
          type="text"
          placeholder="Enter Meter Number"
          value={meterNumber}
          onChange={(e) => setMeterNumber(e.target.value)}
         className="border-2 mt-4 w-[150px] rounded-lg ml-20 lg:ml-28" /><br/>
        <button type="button" onClick={handleSave} className="border-2 mt-2 rounded-lg bg-green ml-24 w-[100px] lg:ml-36">
          Submit
        </button>
      </div>

      <div className='pl-28 mt-1 lg:ml-11'>
        <h1>Saved Data:</h1>
        <ul>
          {data.map((input, index) => (
            <li key={index}>
              {input.meterNumber} - {input.geocode}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
