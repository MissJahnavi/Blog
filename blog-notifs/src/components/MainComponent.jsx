import React from 'react'
import Component1 from './Component1'
import Component2 from './Component2'

const MainComponent = () => {
    return (
        <>
            <div className='main m-16 flex flex-col lg:flex-row justify-center  lg:justify-between p-4 lg:p-10 gap-6 bg-white min-h-screen'>
                <Component1 />
                <Component2 />
            </div>

        </>
    )
}

export default MainComponent
