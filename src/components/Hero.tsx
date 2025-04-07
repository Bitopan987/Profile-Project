import { Carousel } from 'flowbite-react';

export function Hero() {
  return (
    <div className="h-[600px]">
      <Carousel slideInterval={4000}>
        <div className="relative h-full">
          <img
            src="https://images.unsplash.com/photo-1511306404404-ad607bd7c601?auto=format&fit=crop&w=2000"
            alt="Couple enjoying dinner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            <div>
              <h2 className="text-5xl font-bold mb-4">Find Your Perfect Match</h2>
              <p className="text-xl">Begin your journey to lasting love</p>
            </div>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gradient-to-r from-primary via-orange-400 to-orange-500">
          <div className="text-center text-white px-4">
            <h2 className="text-5xl font-bold mb-6">
              Meaningful Connections
            </h2>
            <p className="text-2xl max-w-2xl mx-auto">
              Connect with like-minded individuals who share your values and aspirations
            </p>
          </div>
        </div>

        {/* Slide 3: Text and image together */}
        <div className="grid md:grid-cols-2 image-full-height">
  <div className="flex items-center justify-center bg-gradient-to-br from-tertiary to-secondary p-12">
    <div>
      <h2 className="text-4xl font-bold mb-6 text-primary">
        Your Story Begins Here
      </h2>
      <p className="text-xl text-gray-700 max-w-lg">
        Join thousands of others who have found their special someone through
        our carefully curated matchmaking platform.
      </p>
    </div>
  </div>
  <div>
  <img
    src="https://images.unsplash.com/photo-1623091411395-09e79fdbfcf3?auto=format&fit=crop&w=1000"
    alt="Happy couple"
    className="w-full h-full md:h-auto object-cover"
  />
  </div>
</div>

      </Carousel>
    </div>
  );
}