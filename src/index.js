import React from 'react'
import ReactDom from 'react-dom';
import './index.css';
//setup vars

const firstBook = {
  img: 'https://upload.wikimedia.org/wikipedia/en/0/0c/MeTalkPrettyOneDayCover.JPG',
  title: 'me talk pretty one day',
  author: 'david sedaris'
}

function BookList() {
  return ( 
  <section className="booklist">
    <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
    <Book number={22}/>
    <Book />
    <Book />
  </section>
    );
  }

const Book = (props) => {
  return (<article className="book">
    <img src={props.img} alt='' />
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
  </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'))