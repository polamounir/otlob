import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface rating {
  rating: number;
}
const Rating = ({ rating }: rating) => {
  const avgRating = Number(rating).toFixed(1);
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-2 text-yellow-500">
      {/* Stars */}
      <div className="flex space-x-1">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}
        {hasHalfStar && <FaStarHalfAlt key="half" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
      </div>

      <span className="text-gray-700 text-sm font-medium">{avgRating}</span>
    </div>
  );
};

export default Rating;
