import style from './Pagination.module.scss';
import cn from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as ArrowLeftSVG } from '../../assets/arrow-left.svg';
import { ReactComponent as ArrowRightSVG } from '../../assets/arrow-right.svg';
import { useEffect, useState } from 'react';

const Pagination = () => {
  const [pagePagination, setPagePagination] = useState(null);
  const pathname = useLocation().pathname;
  const { page, pages } = useSelector((state) => state.goods);

  const handlePageChange = (newPage) => setPagePagination(newPage);

  const handlePrevPage = () => {
    if (pagePagination > 1) {
      handlePageChange(pagePagination - 1);
    }
  };

  const handleNextPage = () => {
    if (pagePagination < pages) {
      handlePageChange(pagePagination + 1);
    }
  };

  useEffect(() => {
    setPagePagination(page);
  }, [page]);

  const renderPaginationItems = () => {
    const paginationItems = [];
    let startPage = ((pagePagination === pages) && (pages >= 3)) ? (pagePagination - 2) : Math.max(1, pagePagination - 1);
    let endPage = Math.min(startPage + 2, pages);

    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <li key={i}>
          <NavLink
            className={cn(style.link, i === +pagePagination ?? style.linkActive)}
            to={`${pathname}?page=${i}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </NavLink>
        </li>
      );
    }

    return paginationItems;
  };

  return (
    pages > 1 &&
    <div className={style.pagination}>
      <button
        className={style.arrow}
        type='button'
        onClick={handlePrevPage}
        disabled={pagePagination <= 2}
      >
        <ArrowLeftSVG />
      </button>

      <ul className={style.list}>{renderPaginationItems()}</ul>

      <button
        className={style.arrow}
        type='button'
        onClick={handleNextPage}
        disabled={pagePagination >= pages - 1 || pages <= 3}
      >
        <ArrowRightSVG />
      </button>
    </div>
  );
};

export default Pagination;
