import React from 'react';

const GorillazComponent = (props) => {
  let {data} =props;
  console.log(data);
  let fotoList = data.map((el) => {
    console.log(el);
  return <div className='cards'>
    <p>{el.artist}</p>
    <p>{el.name}</p>
    <img src = {el.image[2]['#text']}></img>
    </div>;
    
  });
  return (
    <>
      <div className='image'>
        
        {fotoList};
      </div>
    </>
  );
};

export default GorillazComponent;