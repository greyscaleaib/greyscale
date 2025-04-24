import React from 'react';

function StatBlock({ value, description }) {
  return (
    <div className="p-6 border border-[#DDDDDD] bg-white">
      <div className="text-4xl font-bold mb-2 text-[#F4098A]">{value}</div>
      <div className="font-mono uppercase text-[#555555]">{description}</div>
    </div>
  );
}

function Sustainability() {
  const stats = [
    {
      value: "70%",
      description: "Mining waste used in our production process"
    },
    {
      value: "60%",
      description: "Reduction in water usage compared to industry standard"
    },
    {
      value: "100%",
      description: "Self-cleaning (photocatalytic) concrete technology"
    }
  ];

  return (
    <section id="sustainability" className="px-6 md:px-16 py-16 bg-[#FCF2F8]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-[#333333]">SUSTAINABILITY</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#333333]">
          {stats.map((stat, index) => (
            <StatBlock 
              key={index}
              value={stat.value}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sustainability;