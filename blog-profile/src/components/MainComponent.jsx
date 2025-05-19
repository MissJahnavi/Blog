import React from 'react';
import ProfileBox from './ProfileBox';
import PostList from './PostList';
import Connection from './Connection';


const MainComponent = () => {
    return (
        <>
            <div className='main max-w-7xl mx-auto p-6 mt-7 rounded-b-lg flex flex-col lg:flex-row gap-6 '>
                <div className="flex-1 space-y-6">
                    <ProfileBox />
                    <PostList />
                </div>
                <Connection />
            </div>
        </>
    )
}

export default MainComponent;
