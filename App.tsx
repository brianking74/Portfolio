import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsDashboard } from './components/StatsDashboard';
import { ClientProjects } from './components/ClientProjects';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import { MouseFollower } from './components/MouseFollower';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-yellow-200 cursor-default">
      <MouseFollower />
      <Navbar />
      <Hero />
      <StatsDashboard />
      <ClientProjects />
      <ExperienceTimeline />
      <Education />
      <Footer />
    </div>
  );
};

export default App;