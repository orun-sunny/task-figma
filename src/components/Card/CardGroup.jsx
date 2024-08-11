import Card from "./Card";
import {
  FaUserFriends,
  FaShoppingCart,
  FaSignInAlt,
  FaRocket,
  FaKey,
  FaCompass,
  FaLock,
  FaRoad,
} from "react-icons/fa";

const CardGroup = () => {
  const cardData = [
    {
      title: "Employee",
      content: "If a dog chews shoes whose shoes does he choose?",
      buttonText: "Buy Now",
      Icon: FaUserFriends,
    },
    {
      title: "Manager",
      content: "Another interesting question goes here.",
      buttonText: "Learn More",
      Icon: FaShoppingCart,
    },
    {
      title: "Client",
      content: "Yet another piece of content for the third card.",
      buttonText: "Sign Up",
      Icon: FaSignInAlt,
    },
    {
      title: "Client",
      content: "Final card with some different content.",
      buttonText: "Get Started",
      Icon: FaRocket,
    },
    {
      title: "Client",
      content: "Explore the world of possibilities with this card.",
      buttonText: "Discover More",
      Icon: FaCompass,
    },
    {
      title: "Client",
      content: "This card holds the key to your next adventure.",
      buttonText: "Join Now",
      Icon: FaKey,
    },
    {
      title: "Client",
      content: "Unlock the secrets of success with this card.",
      buttonText: "Unlock",
      Icon: FaLock,
    },
    {
      title: "Client",
      content: "Embrace the journey with this final card.",
      buttonText: "Start Today",
      Icon: FaRoad,
    },
  ];

  return (
    <div className="p-4 space-y-4">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          content={card.content}
          buttonText={card.buttonText}
          Icon={card.Icon}
        />
      ))}
    </div>
  );
};

export default CardGroup;
