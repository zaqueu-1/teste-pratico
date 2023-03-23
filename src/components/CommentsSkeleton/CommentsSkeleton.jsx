import React from 'react'
import Skeleton from 'react-loading-skeleton'

function CommentsSkeleton({cards}) {
    return Array(cards)
    .fill(0)
    .map((item, key) => (
        <div key={key} className='comments-skeleton'>
            <Skeleton style={{height:'15px', minWidth:'200px', maxWidth:'500px', width:'100%', marginBottom:'1rem'}}/>
            <Skeleton style={{height:'10px', minWidth:'280px', maxWidth:'600px', width:'100%', marginBottom:'.5rem'}} />
            <Skeleton count={2} style={{height:'10px', minWidth:'280px', maxWidth:'800px', width:'100%'}} />
        </div>
    ))
}

export default CommentsSkeleton
