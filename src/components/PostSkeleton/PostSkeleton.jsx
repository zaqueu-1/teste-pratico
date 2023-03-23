import React from 'react'
import Skeleton from 'react-loading-skeleton'

function PostSkeleton({cards}) {
  return Array(cards)
    .fill(0)
    .map((item, key) => (
        <div key={key} className='post-skeleton'>
            <div>
                <Skeleton style={{height: '30px', marginTop:'2rem', marginBottom: '1.5rem'}}/>
            </div>
            <div>
                <Skeleton count={4} style={{marginBottom: '.3rem'}}/>
            </div>
            <div style={{display:'flex', justifyContent:'flex-end'}}>
                <Skeleton style={{width: '40px', marginTop: '2rem'}}/>
            </div>
        </div>
    ))
}

export default PostSkeleton
