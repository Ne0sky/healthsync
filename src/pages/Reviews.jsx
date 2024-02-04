import React from 'react';

const Reviews = () => {
  return (
    <div className="flex flex-col justify-center gap-8 pb-16 items-center">
      <h2 className='text-4xl font-bold'>Our <span className='text-lime-600'>Reviews</span></h2>
      <div className='flex justify-center'>
      <div className="flex space-x-6">
        {/* First Review */}
        <div className="max-w-sm flex flex-col justify-between bg-white shadow shadow-xl shadow-gray-300 rounded-xl overflow-hidden">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Exceptional Service</h2>
            <p className="text-gray-600 text-sm font-smedium italic">The platform provided an exceptional service. It significantly improved our workflow and streamlined communication. The AI-powered features are cutting-edge, and the team's dedication to security is commendable.</p>
          </div>
          <div className="bg-lime-200 p-4 flex justify-between items-center">
            <span className="text-sm text-gray-900 font-semibold">John Doe</span>
            <span className='text-sm text-gray-700'>Senior Developer @Google</span>
          </div>
        </div>

        {/* Second Review */}
        <div className="max-w-sm bg-white flex flex-col justify-between  shadow shadow-xl shadow-gray-300  rounded-xl overflow-hidden">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Impressive Features</h2>
            <p className="text-gray-600 text-sm italic">We were impressed with the containerized deployment, ensuring seamless integration across different environments. The secure design and commitment to user privacy make it a standout platform in the industry.</p>
          </div>
          <div className="bg-lime-200 p-4 flex justify-between items-center">
            <span className="text-sm text-gray-900 font-semibold">Ram Chandra</span>
            <span className='text-sm text-gray-700'>Senior Developer @Gita</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Reviews;
