"use client";

const positions = [
  {
    title: "Software Engineer",
    location: "Nairobi, Kenya",
    description: "Develop and maintain web applications using modern frameworks.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "2+ years of experience in software development",
      "Proficiency in JavaScript, React, and Node.js",
    ],
    responsibilities: [
      "Write clean, scalable code",
      "Collaborate with cross-functional teams",
      "Participate in code reviews and provide feedback",
    ],
  },
  {
    title: "Product Manager",
    location: "Remote",
    description: "Lead product development from ideation to launch.",
    requirements: [
      "3+ years of experience in product management",
      "Strong understanding of Agile methodologies",
      "Excellent communication and leadership skills",
    ],
    responsibilities: [
      "Define product vision and roadmap",
      "Gather and prioritize product requirements",
      "Work closely with engineering, design, and marketing teams",
    ],
  },
  {
    title: "UI/UX Designer",
    location: "Nairobi, Kenya",
    description: "Design user-friendly interfaces and enhance user experience.",
    requirements: [
      "Proficiency in design tools like Figma, Sketch, or Adobe XD",
      "Strong portfolio showcasing design projects",
      "Understanding of user research methodologies",
    ],
    responsibilities: [
      "Create wireframes and prototypes",
      "Conduct user testing and gather feedback",
      "Collaborate with developers to implement designs",
    ],
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Join Our Team</h1>
        <p className="text-center text-gray-600 mb-8">
          We are looking for talented individuals to join our team and contribute to our mission.
        </p>

        <div className="space-y-8">
          {positions.map((position, index) => (
            <div key={index} className="p-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition">
              <h2 className="text-2xl font-semibold text-gray-800">{position.title}</h2>
              <p className="text-gray-600 mb-2">{position.location}</p>
              <p className="mb-4">{position.description}</p>

              <h3 className="font-bold text-gray-800">Requirements:</h3>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                {position.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>

              <h3 className="font-bold text-gray-800">Responsibilities:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {position.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>

              <button className="mt-4 bg-accent text-white py-2 px-4 rounded-md hover:bg-green-500 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
