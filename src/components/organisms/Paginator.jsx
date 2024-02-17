import Pagination from "react-js-pagination";
import { useState } from "react";
import styled from "styled-components";

const Paginator = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <StyledPagination
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={450}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  );
};

const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  margin-top: 15px;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 5px;
  }

  li {
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  li:first-child {
    border-radius: 5px 0 0 5px;
  }

  li:last-child {
    border-radius: 0 5px 5px 0;
  }

  a {
    text-decoration: none;
    color: #337ab7;
    font-size: 1rem;
  }

  .active a {
    color: white;
  }

  .active {
    background-color: #337ab7;
  }

  a:hover,
  a.active {
    color: blue;
  }

  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`;

export default Paginator;
