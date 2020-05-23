import React from 'react';

const BooksComponent = (props) => {
  let {books} =props;
  console.log(books);
  let booksList = books.map((el) => {
    
  return <div className='cards-book'>
      <img className='cover' src = {el.book_image}></img>
      <div className='button-div'>
      <p>{el.title}</p>
    <p>{el.author}</p>
    <p>{el.description}</p>
    
  <button>BUY ON {el.buy_links.name}</button>
  </div>
    </div>;
    
  });
  return (
    <>
      <div className='books'>
        
        {booksList};
      </div>
    </>
  );
};

export default BooksComponent;