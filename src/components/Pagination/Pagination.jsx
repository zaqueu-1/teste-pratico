import React from 'react'

function Pagination({currentPage, handlePage, allPosts}) {
  return (
    <div className='pagination'>
        <button onClick={() => handlePage('previous')} disabled={currentPage <= 1}>Anterior</button>
        <button onClick={() => handlePage('next')} disabled={currentPage == Math.ceil(allPosts/6) }>Próximo</button>
    </div>  
  )
}

export default Pagination
