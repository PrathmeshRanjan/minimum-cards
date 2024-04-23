import { useState } from "react";
import Card from "./components/Card";
import "./App.css";
import Sequence from "./components/Sequence";
import Pair from "./components/Pair";
import Intro from "./components/Intro";

const suitSymbols = {
    clubs: "♣",
    diamonds: "♦",
    hearts: "♥",
    spades: "♠",
};

const cards = [];
for (let suit of Object.keys(suitSymbols)) {
    for (let number = 1; number <= 13; number++) {
        cards.push({ number, suit });
    }
}

function App() {
    const [selectedCards, setSelectedCards] = useState([]);
    const [showButton, setShowButton] = useState(true);
    const [pairs, setPairs] = useState([]);
    const [sequences, setSequences] = useState([]);
    const [open, setOpen] = useState(false);

    const handleClick = (number) => {
        const p = getPairs(number, selectedCards);
        setPairs(p);
        setOpen(true);
        const s = getSequences(number, selectedCards);
        setSequences(s);
    };

    const handleRandomCardSelection = () => {
        const randomIndices = new Set();
        while (randomIndices.size < 7) {
            randomIndices.add(Math.floor(Math.random() * cards.length));
        }
        const randomCards = Array.from(randomIndices).map(
            (index) => cards[index]
        );

        setSelectedCards(randomCards);
        setShowButton(false);
        setPairs(pairs);
        setSequences(sequences);
    };

    const generateRandomCard = () => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        return cards[randomIndex];
    };

    const getPairs = (number, cards) => {
        const pairs = [];
        Object.keys(cards).forEach((key) => {
            if (cards[key].number === number) {
                pairs.push(cards[key]);
            }
        });
        return pairs;
    };

    const getSequences = (number, cards) => {
        let sequences = [];
        const sortedCards = [...cards].sort((a, b) => a.number - b.number);
        let currentSequence = [];
        for (let i = 0; i < sortedCards.length; i++) {
            if (
                i === 0 ||
                sortedCards[i].number === sortedCards[i - 1].number + 1
            ) {
                currentSequence.push(sortedCards[i]);
            } else {
                if (sortedCards[i].number === sortedCards[i - 1].number) {
                    continue;
                }
                if (currentSequence.some((card) => card.number === number)) {
                    sequences = currentSequence;
                }
                currentSequence = [sortedCards[i]];
            }
        }

        if (currentSequence.some((card) => card.number === number)) {
            sequences = currentSequence;
        }

        return sequences;
    };

    const handlePairClick = () => {
        const newCards = selectedCards.filter((card) => !pairs.includes(card));
        newCards.push(generateRandomCard());
        setSelectedCards(newCards);
        setOpen(false);
    };

    const handleSequenceClick = () => {
        const newCards = selectedCards.filter(
            (card) => !sequences.includes(card)
        );
        newCards.push(generateRandomCard());
        setSelectedCards(newCards);
        setOpen(false);
    };

    return (
        <>
            <h1 className="flex justify-center">The Game of Minimum</h1>
            <div className="app-container">
                <div className="flex">
                    {open && (
                        <>
                            {pairs.length > 0 && (
                                <div
                                    onClick={() => {
                                        handlePairClick();
                                    }}
                                >
                                    <h1 style={{ textAlign: "center" }}>
                                        Option 1
                                    </h1>
                                    <div className="pair-container">
                                        <Pair className="flex" cards={pairs} />
                                    </div>
                                </div>
                            )}
                            {sequences.length > 1 && (
                                <div onClick={handleSequenceClick}>
                                    <h1 style={{ textAlign: "center" }}>
                                        Option 2
                                    </h1>
                                    <div className="sequence-container">
                                        <Sequence cards={sequences} />
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
                <div className="card-container">
                    <div className="flex">
                        {selectedCards.map((card, index) => (
                            <Card
                                key={index}
                                number={card.number}
                                suit={card.suit}
                                handleClick={handleClick}
                            />
                        ))}
                    </div>
                </div>
                {showButton ? (
                    <>
                        <Intro />
                        <button
                            onClick={handleRandomCardSelection}
                            className="flex justify-center button"
                        >
                            Select 7 random cards
                        </button>
                    </>
                ) : (
                    <h1 className="heading">Player 1</h1>
                )}
            </div>
        </>
    );
}

export default App;
