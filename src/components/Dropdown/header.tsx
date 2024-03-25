import { FC } from "react";

import { runInAction } from "mobx";
import { inject, observer } from "mobx-react";

import { CharacterStore, Character } from "../../stores/characterStore";
import { dropdownState, setFocused, toggleDropdown } from ".";

interface IProps {
  characters?: CharacterStore;
}

const Header: FC<IProps> = inject("characters")(
  observer((props: IProps) => {
    const { characters } = props;

    const handleChangeInput = (input: string) => {
      runInAction(() => {
        characters!.searchKey = input;
      });
      setFocused(-1);
      characters!.getCharacters();
    };

    const handleClick = (item: Character) => {
      characters!.removeCharacter(item);
    };

    const renderCharacter = (item: Character, index: number) => {
      return (
        <div
          className="header-selected-item"
          onClick={() => handleClick(item)}
          key={index}
        >
          {item.name}
          <img
            alt="close"
            width={10}
            height={10}
            className="header-selected-close"
            src={require("../../assets/close.png")}
          />
        </div>
      );
    };

    return (
      <div className="header">
        <div className="header-selected">
          {characters!.selectedCharacters.map((item, index) =>
            renderCharacter(item, index)
          )}
        </div>

        <input
          className="header-input"
          onChange={(e) => handleChangeInput(e.target.value)}
          placeholder="Character Name"
        />

        <img
          alt="down"
          onClick={() => toggleDropdown()}
          width={12.5}
          height={12.5}
          className="header-down"
          src={require(`../../assets/${
            dropdownState.isOpened ? "down" : "up"
          }.png`)}
        />
      </div>
    );
  })
);

export default Header;
