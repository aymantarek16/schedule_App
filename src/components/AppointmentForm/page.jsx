"use client";
import { useState } from 'react';

export default function AppointmentForm({ onClose, onSubmit, initialData = null }) {
  const [formData, setFormData] = useState(
    initialData || {
      title: '',
      date: '',
      startTime: '',
      endTime: '',
      location: '',
      department: '',
      status: 'pending'
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  const inputClass = "p-1 mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500";
  const labelClass = "block text-sm font-medium text-white";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-white">
          {initialData ? 'Edit Appointment' : 'New Appointment'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {['title', 'date', 'location', 'department'].map((field) => (
            <div key={field}>
              <label className={labelClass}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                type={field === 'date' ? 'date' : 'text'}
                value={formData[field]}
                onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                className={inputClass}
                required
              />
            </div>
          ))}

          <div className="grid grid-cols-2 gap-4">
            {['startTime', 'endTime'].map((field) => (
              <div key={field}>
                <label className={labelClass}>{field === 'startTime' ? 'Start Time' : 'End Time'}</label>
                <input
                  type="time"
                  value={formData[field]}
                  onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                  className={inputClass}
                  required
                />
              </div>
            ))}
          </div>

          <div>
            <label className={labelClass}>Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className={inputClass}
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="missed">Missed</option>
            </select>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              {initialData ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
