import React from 'react'

const LoginPage = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(/blur.png)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to spinMe</h1>
            <p className="mb-5">We'll help you pick a record to play.</p>
            <button className="btn btn-primary">Hey Ho, Let's Go!</button>
          </div>
        </div>
      </div>
    )
}

export default LoginPage