import React from 'react'
import Nav from './Nav'

function Home() {
  return (
    <div>
        <Nav/>
        <div className='container-fluid'>
            <div className='row g-3 my-2'>
                <div className='col-md-3'>
                    <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center runded'>
                        <div>
                            <h3 className=''>

                            </h3>
                            <p>
Products
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home