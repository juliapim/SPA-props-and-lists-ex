import React from 'react';

const RicksComponent = (props) => {
  let { rick } = props;
  
  let alive = rick.filter((el) => el.status === 'Alive');
  let dead = rick.filter((el) => el.status === 'Dead');
  let unknown = rick.filter((el) => el.status === 'unknown');

  let fotoList = rick.map((el) => {
   
    return <div className='cards-pick'>
      <section>
      <h2>{el.name}</h2>
      <p>{el.status} - {el.species}</p>
      <h5>Last known Location:</h5>
      <p>{el.location.name}</p>
      
      </section>
      <img className='img-pi' src={el.image}></img>
    </div>
    ;

  });
  return (
    <>
      <div className='pickle'>

        {fotoList};
      </div>
    </>
  );
};

export default RicksComponent;