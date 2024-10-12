'use client'
const Torchlight: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-100 to-transparent via-transparent mask-torchlight"></div>
    </div>
  );
};

export default Torchlight;
