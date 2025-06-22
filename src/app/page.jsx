'use client';
import { useState } from 'react';
import Header from '../components/Header/page';
import AppointmentList from '../components/AppointmentList/page';

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState('all');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header onAddClick={() => setShowForm(true)} onFilterChange={setFilter} />
      <div className="pt-16">
        <AppointmentList
          showForm={showForm}
          setShowForm={setShowForm}
          filter={filter}
        />
      </div>
    </div>
  );
}