import { profiles } from '../data/profiles';
import { ProfileCard } from './ProfileCard';

export function FeaturedProfiles() {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Profiles</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>
    </div>
  );
}