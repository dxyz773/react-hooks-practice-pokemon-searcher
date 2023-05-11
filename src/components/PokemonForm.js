import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [hp, setHp] = useState(0);
  const [spriteFront, setSpriteFront] = useState("");
  const [spriteBack, setSpriteBack] = useState("");

  function handleSubmit() {
    const newPokemon = {
      name: name,
      hp: hp,
      sprites: { front: spriteFront, back: spriteBack },
    };

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPokemon),
    })
      .then((resp) => resp.json())
      .then((data) => {
        onSubmit(data);
        setHp(0);
        setName("");
        setSpriteFront("");
        setSpriteBack("");
      });
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            name="name"
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={hp}
            onChange={(e) => setHp(e.target.value)}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="spriteFront"
            value={spriteFront}
            onChange={(e) => setSpriteFront(e.target.value)}
          />

          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="spriteBack"
            value={spriteBack}
            onChange={(e) => setSpriteBack(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
