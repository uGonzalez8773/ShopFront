import Guitar from './guitar'

export default function GuitarList({guitars}) {
  return (
    <>
      <h2 className="heading"> Our Collection! </h2>

      {!guitars?.lenght && (
        <div className="guitars-grid">
          {guitars.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar.attributes} />
          ))}
        </div>
      )}
    </>
  );
}
