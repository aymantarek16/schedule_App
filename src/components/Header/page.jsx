'use client';
import { useState, useEffect } from 'react';

export default function Header({ onAddClick, onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  const filters = ['all', 'pending', 'completed', 'missed'];

  return (
    <nav className=" bg-gray-800 border-b border-gray-700 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">Schedule</span>
            </div>
          </div>

          {/* Filters */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => handleFilterClick(f)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-150
                    ${activeFilter === f
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-200 hover:bg-gray-100 hover:bg-gray-700'}`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
        
            <button
              onClick={onAddClick}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-150 ease-in-out"
            >
              + Add Appointment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}