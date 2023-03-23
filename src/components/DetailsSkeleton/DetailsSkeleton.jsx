import React from 'react'
import Skeleton from 'react-loading-skeleton'

function DetailsSkeleton({cards}) {
    return (
        <div className='details-skeleton'>
            <Skeleton style={{height:'35px', minWidth:'200px', maxWidth:'500px', width:'100%', marginBottom:'1rem'}}/>
            <Skeleton count={3} style={{height:'20px', minWidth:'280px', maxWidth:'600px', width:'100%', marginBottom:'.2rem'}} />
        </div>
    )
}

export default DetailsSkeleton
