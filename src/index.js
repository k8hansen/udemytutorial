// import React, { Children } from 'react'
import ReactDom from 'react-dom';
import './index.css';
//setup vars

const books =[
{
  id:1,
  img: 'https://upload.wikimedia.org/wikipedia/en/0/0c/MeTalkPrettyOneDayCover.JPG',
  title: 'Me Talk Pretty One Day',
  author: 'David Sedaris'
},
{
  id:2,
  img: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Marquis_de_Sade_-_The_120_Days_of_Sodom.jpeg',
  title: '100 Days of Sodom',
  author: 'Marquis de Sade'
},
{
  id:3,
  img: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Wizard_title_page.jpg',
  title: 'Wizard of Oz',
  author: 'Frank Baum'
}
]


function BookList() {
  return ( 
  <section className="booklist">
    {books.map((book)=> {
      return (
      <Book key={book.id} {...book}></Book>
        );
    })}
  </section>
    );
  }

const Book = (props) => {
//attribute, eventHandler
//onClick, onMouseOver
  const clickHandler = () => {
    alert('Hello World')
  }
  const { img, title, author } = props;
  return (
  <article className="book" onMouseOver={()=>{
    console.log(title)
  }}>
    <img src={img} alt='' />
    <h1 onClick={()=> console.log(title)}>{title}</h1>
    <h4>{author}</h4>
  </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'))