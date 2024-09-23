"use client";

import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          About Us
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Text */}
          <div className="space-y-6 text-gray-600">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto atque alias tempora necessitatibus enim at. Eius ad inventore ducimus rem vitae debitis impedit perferendis cum rerum, suscipit sunt asperiores culpa.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptas unde, iure officiis doloribus dolor at architecto repellat autem labore impedit aperiam, error a eius dignissimos sit enim illum debitis.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, unde laboriosam repellendus tempore aperiam voluptatum ab cumque qui ad! Temporibus pariatur quae placeat, ex aliquam eum aperiam est ducimus optio?
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full h-96">
            <Image
              src="https://images.pexels.com/photos/5537517/pexels-photo-5537517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
