'use client';
import { motion } from "framer-motion";

interface CardData {
  id: number;
  title: string;
  description: string;
}

interface InfiniteMovingCardsProps {
  cards: CardData[];
}

const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({ cards }) => {
  const duplicatedCards = [...cards, ...cards]; // Duplicate cards to create a seamless loop

  return (
    <div className="overflow-hidden relative rounded-md min-h-1/2 bg-transparent p-4">
      <motion.div
        className="flex space-x-4"
        animate={{ x: ["0%", "-100%"] }} // Move from left to right in a loop
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        {duplicatedCards.map((card, index) => (
          <motion.div
            key={`${card.id}-${index}`} // Ensure each card has a unique key
            className="bg-gray-900 rounded-lg p-6 shadow-lg w-64 sm:w-80 h-48 sm:h-64 flex-shrink-0"
            initial={{ opacity: 0, y: 20 }} // Start hidden and below
            animate={{ opacity: 1, y: 0 }} // Fade in and move up
            transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered entrance
          >
            <h3 className="text-lg sm:text-xl font-bold text-white">{card.title}</h3>
            <p className="text-gray-400 text-sm sm:text-base">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteMovingCards;
