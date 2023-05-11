import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((resp) => resp.json())
      .then((data) => setPokemon(data));
  }, []);

  function onSearch(e) {
    setSearch(e.target.value);
  }

  let searchedPokemon = [...pokemon].filter((poke) =>
    poke.name.toLowerCase().includes(search.toLowerCase())
  );

  function onSubmit(newPoke) {
    setPokemon([...pokemon, newPoke]);
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onSubmit={onSubmit} />
      <br />
      <Search onSearch={onSearch} serach={search} />
      <br />
      <PokemonCollection pokemon={searchedPokemon} />
    </Container>
  );
}

export default PokemonPage;
