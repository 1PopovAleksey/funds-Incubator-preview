import { FC } from 'react';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './PaginatedItems.modele.scss';
import { TPaginatedItems, IPaginated } from '../../../models';

const PaginatedItems: FC<IPaginated> = ({ itemsPerPage, items, children }) => {
  const [currentItems, setCurrentItems] = useState<TPaginatedItems | null>(null);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [paginationDisplaySwitch, setPaginationDisplaySwitch] = useState<boolean>(false);

  useEffect(() => {
    const endOffset: number = itemOffset + itemsPerPage;

    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [items, itemOffset, itemsPerPage]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  const makeLabelToOrder = (page: number) => {
    const newPage = `${(page - 1) * itemsPerPage + 1}-${page * itemsPerPage}`;
    return newPage;
  };

  const changePaginationDisplay = () => {
    setPaginationDisplaySwitch(paginationDisplaySwitch ? false : true);
  };

  return (
    <>
      {children(currentItems)}
      <div className="pagination__box">
        <ReactPaginate
          previousLabel={''}
          nextLabel={''}
          breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={paginationDisplaySwitch ? pageCount : 2}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          pageLabelBuilder={makeLabelToOrder}
          nextLinkClassName="pagination__link pagination__link_arrow"
          previousLinkClassName="pagination__link pagination__link_arrow"
          previousClassName="pagination__item_arrow pagination__item_arrow_left"
          nextClassName="pagination__item_arrow pagination__item_arrow_right"
          pageLinkClassName="pagination__link"
          breakLinkClassName="pagination__link"
          pageClassName="pagination__item"
          activeLinkClassName="pagination__link_active"
          containerClassName="pagination__list"
          disabledClassName="pagination__item_arrow-dec"
        />
        <button className="pagination__display" onClick={changePaginationDisplay}>
          {paginationDisplaySwitch ? 'Свернуть' : 'Показать еще...'}
        </button>
      </div>
    </>
  );
};

export default PaginatedItems;
