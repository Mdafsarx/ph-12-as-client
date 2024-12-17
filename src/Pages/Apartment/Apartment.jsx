import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import ApartmentBanner from "./ApartmentBanner";
import ApartmentCard from "./ApartmentCard";
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './button.css'
import { useQuery } from "@tanstack/react-query";
import { Box, TextField } from "@mui/material";
import axios from "axios";
import Lottie from "lottie-react";
import lottieImage from '../../../public/Animation - 1734418780645.json'




const Apartment = () => {
    const [inputValue, setInputValue] = useState('');
    const [sort, setSort] = useState(1)
    // data load here
    const { data: Data = [], refetch } = useQuery({
        queryKey: ['apartment', inputValue, sort],
        // enabled:,
        queryFn: async () => {
            const res = await axios(`http://localhost:1000/apartment?search=${inputValue}&sort=${sort}`);
            return res.data
        }
    })

    const pageCount = Math.ceil(Data.length / 6);
    const [currentPage, setCurrentPage] = useState(0);
    const [endPage, setEndPage] = useState(6)

    function handlePage(e) {
        setCurrentPage(e.selected * 6);
        setEndPage((e.selected * 6) + 6)
        refetch()
    }

    return (
        <div className="md:pt-16 text-black">

            <div>
                <ApartmentBanner />

                <div className="pt-20 pb-10">
                    <h1 className="text-2xl md:text-3xl text-[#7EA1FF] text-center hover:text-[#E26EE5]"><span className="font-serif">Apartment Items</span> ({Data.length})</h1>
                </div>

                {/* search bar and filter method */}
                <div className="max-w-6xl mx-auto pb-10 flex justify-center">
                    <div className="flex items-center relative">
                        <Box sx={{ width: 600, maxWidth: '100%' }}>
                            <TextField
                                value={inputValue}
                                onChange={(e) => {
                                    setInputValue(e?.target?.value)
                                    refetch()
                                }}
                                sx={{
                                    input: {
                                        color: 'white',
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'white',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#303133',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'white',
                                        },
                                    },
                                    '& .MuiOutlinedInput-root input::placeholder': {
                                        color: 'white',
                                        opacity: 1,
                                    },
                                }} fullWidth label="Enter apartment name" />
                        </Box>
                        <select onChange={(e) => {
                            setSort(e?.target?.value)
                            refetch()
                        }} className="p-2 h-14 w-full max-w-36 rounded-r-md absolute right-0 bg-white/10 text-white focus:outline-none focus:ring-0 focus:text-slate-400">
                            <option disabled selected>Sort by price</option>
                            <option value={1}>Low to High</option>
                            <option value={-1}>High to Low</option>
                        </select>
                    </div>
                </div>

                {/* all apartment show here */}
                <div className="max-w-6xl pb-20 mx-auto px-4 md:px-0">
                    {Data?.length === 0
                        ? <div className='text-white flex flex-col items-center justify-center'>
                            <Lottie animationData={lottieImage} loop className="w-72" autoplay />
                            <div className='text-center'>
                                <h2 className='text-xl font-bold pb-1'>No results found</h2>
                                <p>Your search "{inputValue}" did not  <br /> match any products
                                    Please try again.</p>
                            </div>
                        </div>
                        : <div className="grid md:grid-cols-3 gap-16">
                            {Data.slice(currentPage, endPage).map((item, i) => <ApartmentCard key={i} data={item} />)}
                        </div>}
                </div>

                {/* button paginate here */}
                <div className="pb-20">
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
        </div>
    );
};

export default Apartment;