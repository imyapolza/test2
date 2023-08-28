import { ChangeEvent, useState } from "react";
import { users } from "../../../constants/users";

const useSearchCardsByInput = () => {
  const [cards, setCards] = useState(users);
  const [textInput, setTextInput] = useState<string>("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setTextInput(text);

    const filteredCards = cards.filter((user) =>
      user.firstAndLastName.toLowerCase().includes(text.toLowerCase().trim())
    );

    setCards(filteredCards);

    if (text.trim().length === 0) {
      setCards(users);
    }
  };

  return { textInput, handleChangeInput, cards };
};

export default useSearchCardsByInput;
