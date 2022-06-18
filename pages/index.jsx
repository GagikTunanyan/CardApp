import { useCallback, useState, useEffect } from "react";
import styles from "../styles/home.module.css";
import Wrapper from "../components/layout";
import Card from "../components/card/card";
import { Actions } from "../contexts/actions.context";
import { generateUniqueRandomNumber } from "../utils";

export default function Home() {
  const [cards, setCards] = useState([]);
  const [sorted, setSorted] = useState(false);

  const handleAddCard = useCallback(() => {
    const newNumber = generateUniqueRandomNumber(cards, 1000);
    fetch("/api/card", { method: "POST", body: JSON.stringify({ newNumber }) })
      .then((response) => response.json())
      .then(({ cards }) => setCards(cards))
  }, [cards]);

  const handleSorted = useCallback(() => {
    fetch("/api/sorted", { method: "GET" })
      .then((response) => response.json())
      .then(({ cards, sorted }) => {
        setSorted(sorted);
        setCards(cards);
      })
  }, []);

  const handleRemove = useCallback((number) => {
    return () => {
      fetch("/api/card", { method: "DELETE", body: JSON.stringify({ removeNumber: number }) })
      .then((response) => response.json())
      .then(({ cards }) => setCards(cards))
    }
  }, []);

  const handleClear = useCallback(() => {
    fetch("/api/cards", { method: "DELETE" })
      .then((response) => response.json())
      .then(({ cards }) => setCards(cards))
  }, [])

  useEffect(() => {
    fetch("/api/cards", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setCards(data.cards);
        setSorted(data.sorted);
      })
  }, []);

  return (
    <Actions.Provider value={{ addCard: handleAddCard, sortCard: handleSorted, sorted, clear: handleClear }}>
      <div className={styles.home}>
        <Wrapper>
          <div className={styles.cardsWrapper}>
            {cards.map((number) => {
              return (
                <Card
                  value={number}
                  className={styles.cardItem}
                  key={number}
                  onRemove={handleRemove(number)}
                />
              )
            })}
          </div>
        </Wrapper>
      </div>
    </Actions.Provider>
  )
}
