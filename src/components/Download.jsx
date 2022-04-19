import React, { useMemo } from 'react';
import { DownloadData } from './DownloadData.js'
import './styles/download.css'
import Content from './Content';
import BrowserCard from './BrowserCard';


function Download() {


  const btn = useMemo(() => {
    return <button className='btn btn-dark'>add & install extension</button>
  }, [])

  return (
    <main className='container download-section'>
      <Content>
        <h2>download the extension</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur in, neque alias fugit sed distinctio aliquid animi perferendis laudantium?</p>
      </Content>
      <div className="container-cards">
        {DownloadData.map(({ id, main, sub, src, alt }) => (
          <BrowserCard id={id} key={id} main={main} sub={sub} src={src} alt={alt} btn={btn} />
        ))}
      </div>
    </main>
  );
}

export default Download;
