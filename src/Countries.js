import React from 'react';

const Countries = ({ countries }) => {
  return (
    <>
      <section className="countries">
        {countries.map((country) => {
          const { region, population, capital } = country;
          const name = country.name.common;
          const flag = country.flags.png;

          return (
            <article className="card">
              <img src={flag} alt={name} className="country-flag" />
              <div className="country-info">
                <h3>{name}</h3>
                <p>
                  <span> population: </span>
                  {population}
                </p>
                <p>
                  <span> region: </span>
                  {region}
                </p>
                <p>
                  <span>capital: </span>
                  {capital}
                </p>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
