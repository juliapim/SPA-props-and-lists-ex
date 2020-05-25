import React from 'react';
// import Icon from'./IconRick';
const RicksComponent = (props) => {
  let { rick } = props;
  
  let alive = rick.filter((el) => el.status === 'Alive');
  let dead = rick.filter((el) => el.status === 'Dead');
  let unknown = rick.filter((el) => el.status === 'unknown');
  // let classes= {classes};
  // classes+= (props.status==='Alive')?'red':'green'
  let fotoList = rick.map((el) => {
  
    return <div className='cards-pick'>
      
      <img className='img-pi' src={el.image}></img>
      <section>
      <h2>{el.name}</h2>
      <span></span>
      {el.status==='Alive' && <span className='green'>&#9864;</span>}
     
      {el.status==='Dead' && <span className='red'>&#9864;</span>}      <p>{el.status} - {el.species}</p>
      {el.status==='unknown' && <span className='grey'>&#9864;</span>}  
      {/* <Icon alive={alive} dead={dead} unknown={unknown}></Icon> */}
      <h5>Last known Location:</h5>
      <p>{el.location.name}</p>
      </section>
     
     
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