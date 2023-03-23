import React from 'react'
import Skeleton from 'react-loading-skeleton'

function UserSkeleton({cards}) {
    return Array(cards)
    .fill(0)
    .map((item, key) => (
        <div key={key} >
            <div className='user-skeleton'>
                <Skeleton style={{width: '200px', height: '30px', marginBottom: '1rem'}}/>
                <Skeleton count={8} style={{height:'15px', width:'250px'}} />
            </div>
            <div style={{marginTop:'1rem'}} className='user-skeleton'>
                <Skeleton style={{width: '200px', height: '30px', marginBottom: '1rem'}}/>
                <Skeleton count={3} style={{height:'15px', width:'250px'}} />
            </div>
        </div>
    ))
}

export default UserSkeleton
