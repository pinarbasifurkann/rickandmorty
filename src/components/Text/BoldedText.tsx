import { FC } from "react";

interface IProps {
  text: string;
  shouldBeBold: string;
}

const BoldedText: FC<IProps> = (props: IProps) => {
  const { text, shouldBeBold } = props;

  const textArray = text.split(RegExp(shouldBeBold, "ig"));
  const match = text.match(RegExp(shouldBeBold, "ig"));

  return (
    <span>
      {textArray.map((item, index) => (
        <>
          {item}
          {index !== textArray.length - 1 && match && <b>{match[index]}</b>}
        </>
      ))}
    </span>
  );
};

export default BoldedText;
