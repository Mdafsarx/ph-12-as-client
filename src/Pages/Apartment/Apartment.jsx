import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import ApartmentBanner from "./ApartmentBanner";
import ApartmentCard from "./ApartmentCard";
import  {  useState } from 'react';
import ReactPaginate from 'react-paginate';
import './button.css'

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];



const Apartment = () => {


    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                    currentItems.map((item) => '')}
            </>
        );
    }

    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + 6;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / 2);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * 2) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };




    return (
        <div className="md:py-16 bg-[#F8F8F8]">

            <div>
                <ApartmentBanner />

                <div className="max-w-6xl py-28 mx-auto grid md:grid-cols-3 gap-16 ">
                    <ApartmentCard />
                    <ApartmentCard />
                    <ApartmentCard />
                    <ApartmentCard />
                    <ApartmentCard />
                    <ApartmentCard />
                </div>

                <Items currentItems={currentItems} />
                <ReactPaginate
                    breakLabel="..."
                    previousLabel={<button className="btn btn-ghost bg-[#7EA1FF] btn-sm text-white font-bold"><GrCaretPrevious/></button>}
                    nextLabel={<button className="btn btn-ghost bg-[#7EA1FF] btn-sm text-white font-bold"><GrCaretNext/></button>}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}
                    containerClassName="pagination-container"
                    pageClassName="pagination-page"
                    pageLinkClassName="pagination-link"
                    previousClassName="pagination-previous"
                    nextClassName="pagination-next"
                    breakClassName="pagination-break"
                    activeClassName="pagination-active"
                />

            </div>
        </div>
    );
};

export default Apartment;