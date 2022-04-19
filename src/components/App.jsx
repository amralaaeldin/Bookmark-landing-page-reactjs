import React, { lazy, Suspense } from 'react'
import './styles/global.css'
import Header from './Header'
import Landing from './Landing'
import Footer from './Footer'


function App() {
  const Features = lazy(() => import('./Features'))
  const Download = lazy(() => import('./Download'))
  const FAQ = lazy(() => import('./FAQ'))
  const Contact = lazy(() => import('./Contact'))
  return (
    <>
      <Header />
      <Landing />
      <Suspense fallback={<div className='loading-element' >Loading...</div>}>
        <Features />
      </Suspense>
      <Suspense fallback={<div className='loading-element' >Loading...</div>}>
        <Download />
      </Suspense>
      <Suspense fallback={<div className='loading-element' >Loading...</div>}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<div className='loading-element' >Loading...</div>}>
        <Contact />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
