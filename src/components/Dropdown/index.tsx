import { FC, useEffect } from "react";

import { observable, runInAction } from "mobx";
import { observer } from "mobx-react";

import Header from "./header";
import Menu from "./menu";

import { registerClosedDropdownHandlers } from "../../helpers/keyboardListener";

import "../../styles/components/Dropdown.css";

export const dropdownState = observable({
  isOpened: false,
  focusedIndex: -1,
});

export const toggleDropdown = () =>
  runInAction(() => {
    dropdownState.isOpened = !dropdownState.isOpened;
  });

export const setDropdown = (state: boolean) =>
  runInAction(() => {
    dropdownState.isOpened = state;
  });

export const setFocused = (index: number) =>
  runInAction(() => {
    dropdownState.focusedIndex = index;
  });

const Dropdown: FC = observer(() => {
  useEffect(() => {
    return registerClosedDropdownHandlers();
  }, []);

  return (
    <div className="container">
      <Header />

      {dropdownState.isOpened ? <Menu /> : null}
    </div>
  );
});

export default Dropdown;
