import { FC } from "react";

import "../../styles/components/Divider.css";

interface IProps {
  text: string;
  color?: string;
}

const Divider: FC<IProps> = (props: IProps) => {
  const { color, text } = props;

  return (
    <div className="divider-container">
      <div
        style={{ backgroundColor: color ? color : "grey" }}
        className="divider-line"
      />
      <div className="divider-text">{text}</div>
      <div
        style={{ backgroundColor: color ? color : "grey" }}
        className="divider-line"
      />
    </div>
  );
};

export default Divider;
