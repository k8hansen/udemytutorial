import React, { Children } from 'react'
import ReactDom from 'react-dom';
import './index.css';
//setup vars

const books =[
{
  img: 'https://upload.wikimedia.org/wikipedia/en/0/0c/MeTalkPrettyOneDayCover.JPG',
  title: 'Me Talk Pretty One Day',
  author: 'David Sedaris'
},
{
  img: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Marquis_de_Sade_-_The_120_Days_of_Sodom.jpeg',
  title: '100 Days of Sodom',
  author: 'Marquis de Sade'
}
]


function BookList() {
  return ( 
  <section className="booklist">
    {books.map((book)=> {
      const { img, title, author } = book;
      return (
      <Book book={book}></Book>
        );
    })}
  </section>
    );
  }

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
  <article className="book">
    <img src={img} alt='' />
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'))