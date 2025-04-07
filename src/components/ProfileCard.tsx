import { useState } from 'react';
import { Modal } from 'flowbite-react';

interface Hobby {
  title: string;
  description: string;
}

interface ProfileCardProps {
  name: string;
  age: number;
  tagline: string;
  location: string;
  avatar: string;
  description: string;
  hobbies: Hobby[];
}

export function ProfileCard({
  name,
  age,
  tagline,
  location,
  avatar,
  description,
  hobbies,
}: ProfileCardProps) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div 
        className="group relative border-2 border-primary/20 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-primary/40 hover:-translate-y-1"
        onClick={() => setOpenModal(true)}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Section 1: Header */}
        <div className="relative bg-white p-8 text-center">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <img
              src={avatar}
              alt={name}
              className="w-28 h-28 rounded-full relative z-10 object-cover"
            />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-1">{name}</h3>
          <p className="text-xl text-primary/80">{age} years</p>
        </div>

        {/* Spacing */}
        <div className="h-1.5 bg-gradient-to-r from-secondary via-tertiary to-secondary" />

        {/* Section 2: Hobbies */}
        <div className="relative bg-white px-8 py-6">
          <h4 className="text-lg font-semibold mb-4 text-gray-900">Interests & Hobbies</h4>
          <div className="space-y-4">
            {hobbies.map((hobby, index) => (
              <div key={index} className="group/hobby">
                <div className="space-y-1">
                  <h5 className="font-semibold text-primary group-hover/hobby:text-primary/80 transition-colors">
                    {hobby.title}
                  </h5>
                  <p className="text-gray-600 leading-relaxed">{hobby.description}</p>
                </div>
                {index < hobbies.length - 1 && (
                  <hr className="my-4 border-secondary/50" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Spacing */}
        <div className="h-1.5 bg-gradient-to-r from-secondary via-tertiary to-secondary" />

        {/* Section 3: Details */}
        <div className="relative bg-white px-8 py-6">
          <div className="space-y-3">
            <p className="text-lg font-medium text-primary">{location}</p>
            <p className="font-medium text-gray-800 italic">"{tagline}"</p>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="border-b border-secondary">
          <h3 className="text-2xl font-semibold text-gray-900">{name}, {age}</h3>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col items-center gap-6 py-4">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-400 rounded-full opacity-20" />
              <img
                src={avatar}
                alt={name}
                className="w-48 h-48 rounded-full relative z-10 object-cover"
              />
            </div>
            <div className="text-center space-y-3">
              <p className="text-lg font-medium text-primary">{location}</p>
              <p className="text-gray-800 italic">"{tagline}"</p>
              <p className="text-gray-600 max-w-lg mx-auto leading-relaxed">{description}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}