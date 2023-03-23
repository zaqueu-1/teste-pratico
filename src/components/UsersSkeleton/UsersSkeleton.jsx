import React from 'react'
import Skeleton from 'react-loading-skeleton'

function UsersSkeleton({cards}) {
    return Array(cards)
    .fill(0)
    .map((item, key) => (
        <div key={key} className='users-skeleton'>
            <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center', gap:'.5rem'}}>
                <Skeleton circle style={{width: '23px', height: '23px'}}/>
                <Skeleton style={{height:'20px', width:'170px'}} />
            </div>
        </div>
    ))
}

export default UsersSkeleton
