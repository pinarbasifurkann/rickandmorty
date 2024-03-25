import { dropdownState, setDropdown, setFocused } from "../components/Dropdown";
import { CharacterStore } from "../stores/characterStore";

export const registerClosedDropdownHandlers = () => {
  const keyDownCallback = (e: KeyboardEvent) => {
    switch (e.key) {
      case "Up":
      case "ArrowUp":
      case "Down":
      case "ArrowDown":
      case " ": // Space
      case "Enter":
        e.preventDefault();
        setDropdown(true);
    }
  };
  document.addEventListener("keydown", keyDownCallback);
  return () => {
    document.removeEventListener("keydown", keyDownCallback);
  };
};

export const registerOpenDropdownHandlers = (
  characterStore: CharacterStore
) => {
  const keyDownCallback = (e: KeyboardEvent) => {
    switch (e.key) {
      case "Up":
      case "ArrowUp":
        e.preventDefault();
        setFocused(
          dropdownState.focusedIndex <= 0
            ? characterStore.characters.length - 1
            : dropdownState.focusedIndex - 1
        );
        return;
      case "Down":
      case "ArrowDown":
      case "Tab":
        e.preventDefault();
        setFocused(
          dropdownState.focusedIndex + 1 === characterStore.characters.length
            ? 0
            : dropdownState.focusedIndex + 1
        );
        return;
      case "Enter":
      case " ": // Space
        e.preventDefault();
        if (dropdownState.focusedIndex >= 0) {
          characterStore.toggleCharacter(
            characterStore.characters[dropdownState.focusedIndex]
          );
        }
        return;
      case "PageUp":
      case "Home":
        e.preventDefault();
        setFocused(0);
        return;
      case "PageDown":
      case "End":
        e.preventDefault();
        setFocused(characterStore.characters.length - 1);
        return;
    }
  };
  document.addEventListener("keydown", keyDownCallback);
  return () => {
    document.removeEventListener("keydown", keyDownCallback);
  };
};
