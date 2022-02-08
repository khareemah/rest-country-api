import React from 'react';

const Region = ({ regionArray }) => {
  return (
    <section className="countries">
      {regionArray.map((country) => {
        const { region, population, capital } = country;
        const name = country.name.common;
        const flag = country.flags.png;

        return (
          <article className="card">
            <img src={flag} alt={name} className="country-flag" />
            <div className="country-info">
              <h3>{name}</h3>
              <p>
                population: <span> {population}</span>
              </p>
              <p>
                region: <span>{region}</span>
              </p>
              <p>
                capital: <span>{capital}</span>
              </p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Region;
