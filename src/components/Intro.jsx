const Intro = () => {
    return (
        <div className="justify-center">
            <h2 className="flex justify-center">Description</h2>
            <p>
                Minimum is a card game in which 7 cards are dealt to all players
                in the beginning. Then each player throws one sequence or pair
                turn by turn and the player who has the least total sum of the
                numbers of each card he has in his hands wins the game. Example
                - If three players are playing the game and their cards are as
                such Player A - 3 of hearts, 4 of spades, 5 of heart, and 8 of
                spades Player B - 10 of hearts, and 7 of diamond Player C - 4 of
                spades, 2 of club, 3 of diamond, 3 of club, and ace of diamond
                When any of the players is going to call for the show. Player C,
                who has the most number of cards in their hand will win the game
                because the total sum of all the numbers is the lowest, i.e
                4+2+3+3+1 = 13. Player B has 17 and Player C has 20.
            </p>
            <h2 className="flex justify-center ">How To Play</h2>
            <p>
                In the beginning, seven cards are dealt to each player Now the
                goal is to get rid of as many cards as possible from your hand.
                So the total sum of the numbers of each card is as low as
                possible. When deciding which cards to throw, there are two
                options. Option 1 - They can throw a sequence, i.e: ace of
                diamond, 2 of club, 3 of diamond, and 4 of spades. Option 2 -
                They can throw cards in pairs, i.e: 4 of spades, 4 of club, 4 of
                diamond, 4 of hearts There is no limit to the number of cards
                you can throw in your turn. If all the seven cards in your hand
                are in a sequence you can throw all of them at once. But you can
                only throw one sequence or one pair in one turn. After throwing
                the cards the player is required to pick one card from the deck
                and then the next player will repeat the same. This will keep on
                repeating until any of the player feels they have the least sum
                in their hand and they call for a show. Once they call, every
                player will reveal their cards. If the player who calls it has
                the lowest total they win if not they lose that many points to
                the player who has less total in hand.
            </p>
        </div>
    );
};

export default Intro;
