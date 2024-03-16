import React from 'react'
import './Volunteer.css'
const Volunteer = () => {
    return (
        <div>
            <div className='Volu'>
                <div className='node'>
                    <div className='details'>
                        <h2>Want to join fight against hunger?</h2>
                        <p>Be a part of our fight against hunger. If you’re an individual, organization, institution, donor, the press or an artist who would like to join us or partner with us, please reach out here or write to us at:
                        </p>
                    </div>
                </div>
                <div className='node'>
                    <form className="form">
                        <h2>Join US</h2>
                        <label>
                            <input className="input" type="text" placeholder="" required="" />
                            <span>Name</span>
                        </label>


                        <label>
                            <input className="input" type="email" placeholder="" required="" />
                            <span>Email</span>
                        </label>

                        <label>
                            <input className="input" type="text" placeholder="" required="" />
                            <span>Location</span>
                        </label>
                        <label>
                            <input className="input" type="text" placeholder="" required="" />
                            <span>Qty Of Food</span>
                        </label>
                        <label>
                            <input className="input" type="text" placeholder="" required="" />
                            <span>Contact Number</span>
                        </label>
                        <button className   ="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Volunteer