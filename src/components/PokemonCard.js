import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ poke }) {
  const [sprite, setSprite] = useState(true);

  function toggleSprite() {
    setSprite((prev) => !prev);
  }

  return (
    <Card>
      <div onClick={toggleSprite}>
        <div className="image">
          <img
            alt="oh no!"
            src={sprite ? poke.sprites.front : poke.sprites.back}
          />
        </div>
        <div className="content">
          <div className="header">{poke.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poke.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
