import React, {useState} from 'react';
import Card from './Card';
import ReactPaginate from 'react-paginate';
import './CardList.css';

let CardList = ({characters}) => {
    // if (true) {
    //     throw new Error('noooooooooooo');
    // }
let CardComponent = characters.map((user, i) => {
    return <Card key = {i} id = {characters[i].id} name ={characters[i].name} birthday = {characters[i].birthday} status = {characters[i].status}
    occupation = {characters[i].occupation} portrayed = {characters[i].portrayed} appearance = {characters[i].appearance} img = {characters[i].img}
     />
})
    
    let [users] = useState(CardComponent.slice(0, characters.length));
    let [currentPage, setCurrentPage] = useState(0);
    // total records per page to display

  let usersPerPage = 10
  // total number of the records
  let pagesVisited = currentPage * usersPerPage
  
  let displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage)
let pageCount = Math.ceil(users.length / usersPerPage);

let changePage = ({selected}) => {
setCurrentPage(selected);
};

    return (
    <div className = 'user'>
    {displayUsers}
 
    <ReactPaginate
    previousLabell = {'previous'} 
    nextLabel = {'next'}
    pageCount = {pageCount}
    onPageChange ={changePage}  
    containerClassName = {'paginationBttns'}
    previousLinkClassName = {'previousBttn'}
    nextLinkClassName = {'nextBttn'}
    disabledClassName = {'paginationDisabled'}
    activeClassName = {'paginationActive'}
/>
    </div>
);
};


export default CardList;
