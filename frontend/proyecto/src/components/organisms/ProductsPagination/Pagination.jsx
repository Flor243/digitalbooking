import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts, paginate ,setReRender}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="productsPagination-items">
                {pageNumbers.map(number => (
                    <div onClick={() =>{ setReRender(prevValue=>prevValue+1)
                     return paginate(number);} } className="pagination-item">
                            <h5 key={number}  className='page-link'>
                                {number}
                            </h5>
                    </div>
                ))}
        </div>
    )
}
