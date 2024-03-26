import { FC, useEffect } from "react";

import { observable, runInAction } from "mobx";
import { observer } from "mobx-react";

import "../../styles/components/MessageBox.css";

export const messageBoxState = observable({
  isOpened: false,
  message: "",
});

export const closeMessageBox = () =>
  runInAction(() => {
    messageBoxState.isOpened = false;
  });

export const showMessage = (message: string) =>
  runInAction(() => {
    messageBoxState.message = message;
    messageBoxState.isOpened = true;
  });

const MessageBox: FC = observer(() => {
  useEffect(() => {
    const handleClose = setTimeout(() => {
      closeMessageBox();
    }, 5000);
    return () => clearTimeout(handleClose);
  }, [messageBoxState.isOpened]);

  return (
    <div
      style={{ opacity: messageBoxState.isOpened ? 1 : 0 }}
      className="message-container"
    >
      Error: {messageBoxState.message}
    </div>
  );
});

export default MessageBox;
