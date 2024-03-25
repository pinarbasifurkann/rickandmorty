import { FC, useEffect } from "react";

import { inject, observer } from "mobx-react";

import BoldedText from "../Text/BoldedText";
import Loader from "../Loader";

import { CharacterStore } from "../../stores/characterStore";
import { Character } from "../../stores/characterStore";
import { registerOpenDropdownHandlers } from "../../helpers/keyboardListener";
import { dropdownState, setFocused } from ".";

interface IProps {
  characters?: CharacterStore;
}

const Menu: FC<IProps> = inject("characters")(
  observer((props: IProps) => {
    const { characters } = props;

    useEffect(() => {
      return registerOpenDropdownHandlers(characters!);
    }, []);

    const handleClick = (
      item: Character,
      index: number,
      isFocused: boolean
    ) => {
      characters!.toggleCharacter(item);

      if (isFocused) {
        setFocused(-1);
      } else {
        setFocused(index);
      }
    };

    const renderCharacter = (item: Character, index: number) => {
      const found = characters!.selectedCharacters.some(
        (char) => char.id === item.id
      );

      const isFocused = index === dropdownState.focusedIndex;

      return (
        <div
          className="menu-item"
          onClick={() => handleClick(item, index, isFocused)}
          key={index}
          style={isFocused ? { backgroundColor: "#dadee4" } : {}}
        >
          <input type="checkbox" checked={found} />
          <img className="menu-item-image" alt="avatar" src={item.image} />
          <div className="menu-item-information">
            <BoldedText text={item.name} shouldBeBold={characters!.searchKey} />
            <div>{item.episode.length} Episodes</div>
          </div>
        </div>
      );
    };

    return (
      <div className="menu">
        {characters!.characters.length === 0 ? (
          <div className="menu-info">
            {characters!.isFetching ? <Loader /> : <div>No Item</div>}
          </div>
        ) : (
          <>
            {characters!.characters.map((item, index) =>
              renderCharacter(item, index)
            )}
          </>
        )}
      </div>
    );
  })
);

export default Menu;
