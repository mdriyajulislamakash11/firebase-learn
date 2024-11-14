import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../Aout/aouth-init';

const Registitons = () => {

    const [errorMassege, setErrorMassege] = useState('');
    const [succes, setSuccess] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        // reset error status
        setErrorMassege('');
        setSuccess(false)

        if(password.length < 6){
            setErrorMassege('password sould be 6 charector or longer');
            return;
        };

        

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result)
            setSuccess(true)
        })
        .catch(error => {
            console.log(error, "ERROR")
            setErrorMassege(error.message)
            setSuccess(false)
        })

    }

    return (
        <div className='max-w-lg mx-auto'>
            <h2 className="my-8 text-4xl">Register</h2>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                {
                    errorMassege && <p className='text-red-600'>{errorMassege}</p>
                }
                {
                    succes && <p className='text-green-600'>Sign up is successfully.</p>
                }
            </div>
        </div>
    );
};

export default Registitons;