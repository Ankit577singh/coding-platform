// src/components/FeatureCard.jsx
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="text-blue-600 text-2xl sm:text-3xl mb-3 sm:mb-4">{icon}</div>
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;