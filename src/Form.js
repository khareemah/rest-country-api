import React from 'react';

const Form = ({ regions, showByRegion }) => {
  return (
    <section className="form">
      <form action="#">
        <input type="text" placeholder="Search for a country..." />

        <select name="" id="" onChange={(e) => showByRegion(e.target.value)}>
          {regions.map((region, index) => {
            return (
              <option value={region} key={index}>
                {region}
              </option>
            );
          })}
        </select>
      </form>
    </section>
  );
};

export default Form;
