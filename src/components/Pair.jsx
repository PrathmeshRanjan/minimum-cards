/* eslint-disable react/prop-types */
import Card from "./Card";

const Pair = ({ cards }) => (
    <div className="pair-container">
        {cards.map((card, index) => (
            <Card key={index} number={card.number} suit={card.suit} />
        ))}
    </div>
);

export default Pair;
