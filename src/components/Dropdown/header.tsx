import { FC, useEffect } from "react";

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

    useEffect(() => {
      const getData = setTimeout(() => {
        fetchCharacters();
      }, 500);
      return () => clearTimeout(getData);
    }, [characters!.searchKey]);

    const fetchCharacters = () => {
      characters!.getCharacters();
      setFocused(-1);
    };

    const handleChangeInput = (input: string) => {
      runInAction(() => {
        characters!.searchKey = input;
      });
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
          value={characters!.searchKey}
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
