import { action, makeObservable, observable, runInAction } from "mobx";

import apiStore from "./apiStore";
import { setDropdown } from "../components/Dropdown";

export interface Data<T> {
  results: T;
}

export interface Character {
  id: string;
  name: string;
  episode: Array<string>;
  image: string;
}

export class CharacterStore {
  characters: Character[] = [];
  isFetching: boolean = false;
  error: string = "";
  selectedCharacters: Character[] = [];
  searchKey: string = "";

  constructor() {
    makeObservable(this, {
      characters: observable,
      selectedCharacters: observable,
      searchKey: observable,
      isFetching: observable,

      getCharacters: action,
      addCharacter: action,
      removeCharacter: action,
      toggleCharacter: action,
    });
  }

  getCharacters = async () => {
    runInAction(() => {
      this.isFetching = true;
      this.characters = [];
    });

    if (this.searchKey === "") {
      setDropdown(false);
    } else {
      setDropdown(true);
      await apiStore.instance
        .get<Data<Character[]>>(`character/?name=${this.searchKey}`)
        .then((response) => {
          runInAction(() => {
            this.characters = response.data.results;
          });
        })
        .catch((error) => {
          runInAction(() => (this.characters = []));
        });
    }
    runInAction(() => (this.isFetching = false));
  };

  toggleCharacter(item: Character) {
    const found = this.selectedCharacters.some((char) => char.id === item.id);

    if (found) {
      this.removeCharacter(item);
    } else {
      this.addCharacter(item);
    }
  }

  addCharacter = (item: Character) => {
    runInAction(
      () => (this.selectedCharacters = [...this.selectedCharacters, item])
    );
  };

  removeCharacter = (item: Character) => {
    const filteredCharacterList = this.selectedCharacters.filter(function (
      char
    ) {
      return char.id !== item.id;
    });

    runInAction(() => (this.selectedCharacters = filteredCharacterList));
  };
}
