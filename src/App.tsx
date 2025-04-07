import React from 'react';
import { Hero } from './components/Hero';
import { FeaturedProfiles } from './components/FeaturedProfiles';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <FeaturedProfiles />
    </div>
  );
}

export default App;