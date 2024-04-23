const suitSymbols = {
    clubs: "♣",
    diamonds: "♦",
    hearts: "♥",
    spades: "♠",
};

// eslint-disable-next-line react/prop-types
const Card = ({ handleClick = () => {}, number, suit }) => {
    return (
        <div
            style={{
                position: "relative",
                width: "200px",
                height: "250px",
                border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
            }}
            onClick={() => {
                handleClick(number);
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    fontSize: "24px",
                    color:
                        suitSymbols[suit] === "♦" || suitSymbols[suit] === "♥"
                            ? "red"
                            : "black",
                }}
            >
                {suitSymbols[suit]}
            </div>
            <div style={{ fontSize: "48px" }}>{number}</div>
            <div
                style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    fontSize: "24px",
                    color:
                        suitSymbols[suit] === "♦" || suitSymbols[suit] === "♥"
                            ? "red"
                            : "black",
                }}
            >
                {suitSymbols[suit]}
            </div>
        </div>
    );
};

export default Card;
