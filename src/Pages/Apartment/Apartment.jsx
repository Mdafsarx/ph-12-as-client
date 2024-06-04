import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import ApartmentBanner from "./ApartmentBanner";
import ApartmentCard from "./ApartmentCard";
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './button.css'
import { useQuery } from "@tanstack/react-query";
import CommonUrl from "../../Hooks/CommonUrl";



const Apartment = () => {
    const axiosUrl = CommonUrl();
    // data load here
    const { data: Data = [] } = useQuery({
        queryKey: ['apartment'],
        // enabled:,
        queryFn: async () => {
            const res = await axiosUrl('/apartment');
            return res.data
        }
        

    })

    const pageCount = Math.ceil(Data.length / 6); 
    const [currentPage,setCurrentPage]=useState(0);
    const [endPage,setEndPage]=useState(6)


    function handlePage(e){
      setCurrentPage(e.selected*6);
      setEndPage((e.selected*6)+6)
    }
    



    return (
        <div className="md:py-16 bg-[#F8F8F8] ">

            <div>
                <ApartmentBanner />


                <div className="pt-20 pb-8">
                    <h1 className="text-3xl text-[#7EA1FF] text-center "><span className="font-serif">Apartment Items</span> ({Data.length})</h1>
                </div>

                {/* all apartment show here */}
                <>
                    {Data &&
                        <div className="max-w-6xl pb-20 mx-auto grid md:grid-cols-3 gap-16 px-4 md:px-0">
                            {Data.slice(currentPage,endPage).map((item, i) => <ApartmentCard key={i} data={item}/>)}
                        </div>
                    }
                </>
                {/* button paginate here */}
                <ReactPaginate
                    breakLabel="..."
                    previousLabel={<button className="btn btn-ghost bg-[#7EA1FF] btn-sm text-white font-bold"><GrCaretPrevious /></button>}
                    nextLabel={<button className="btn btn-ghost bg-[#7EA1FF] btn-sm text-white font-bold"><GrCaretNext /></button>}
                    onPageChange={handlePage}
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