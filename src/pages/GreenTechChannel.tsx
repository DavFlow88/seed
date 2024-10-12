import React from 'react';
import { Play } from 'lucide-react';

const GreenTechChannel: React.FC = () => {
  // Mock data for Green-Tech content
  const content = [
    { id: 1, type: 'video', title: 'Sustainable Energy Solutions', thumbnail: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    { id: 2, type: 'podcast', title: 'The Future of Recycling', thumbnail: 'https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    { id: 3, type: 'blog', title: '10 Ways to Reduce Your Carbon Footprint', thumbnail: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Green-Tech Channel</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <div className="relative">
              <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover mb-4 rounded" />
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="text-white w-16 h-16" />
                </div>
              )}
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600 capitalize">{item.type}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              {item.type === 'video' ? 'Watch' : item.type === 'podcast' ? 'Listen' : 'Read'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GreenTechChannel;