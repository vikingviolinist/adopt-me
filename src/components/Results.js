import { Pet } from ".";

const Results = ({ pets }) => (
  <div className="search">
    {!pets.length ? (
      <h1>No Pets Found</h1>
    ) : (
      pets.map((pet) => (
        <Pet
          name={pet.name}
          aninmal={pet.animal}
          breed={pet.breed}
          key={pet.id}
          images={pet.images}
          location={`${pet.city}, ${pet.state}`}
          id={pet.id}
        />
      ))
    )}
  </div>
);

export default Results;
