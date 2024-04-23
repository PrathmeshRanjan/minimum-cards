/* eslint-disable react/prop-types */
import Card from "./Card";

const Sequence = ({ cards }) => (
    <div className="sequence-container">
        {cards.map((card, index) => (
            <Card key={index} number={card.number} suit={card.suit} />
        ))}
    </div>
);

export default Sequence;
