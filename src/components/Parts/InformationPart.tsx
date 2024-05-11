import { FC } from "react";

import "../../styles/components/InformationPart.css";

const InformationPart: FC = () => {
  return (
    <div>
      <div className="information-title">
        Autocomplete & <br />
        Flash Message
      </div>
      <div className="information-text">
        Not used any extra library except Mobx and Axios
      </div>
      <div className="information-subtext">
        to see flash message component you can type wrong character name which
        Rick & Morty series doesn't have like "Furkan"
      </div>
    </div>
  );
};

export default InformationPart;
