import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {
  const pokeCard = [...pokemon].map((poke) => (
    <PokemonCard key={poke.id} poke={poke} />
  ));

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokeCard}
    </Card.Group>
  );
}

export default PokemonCollection;
