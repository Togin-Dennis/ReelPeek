import React, { lazy } from 'react'
import Header from './HomeComponents/Header'

import { TopMovies, actionmovie, Baseurl, netflixorginal, ComedyMovies, HorrorMovies, RomanceMovies, Documentaries, malayalamMovies, PopolarinIndiaMovies } from './links'
const Poster = lazy(() => import('./HomeComponents/Poster'));
const SmallPosters = lazy(() => import('./HomeComponents/smallposter'));




function Home() {
  
  return (
    <div className='Homediv'>
      <Header />
      <Poster />


      <SmallPosters title='Popular Movies' url={TopMovies} isNormal={false} vertical={true} wrapMode={false} ScrollButton={true} />
      <SmallPosters title='Netflix Originals' url={netflixorginal} isNormal={true} vertical={true} wrapMode={false} ScrollButton={true} />
      <SmallPosters title='Popular Malayalam Movies' url={malayalamMovies} isNormal={true} vertical={true} wrapMode={false} ScrollButton={true} />
      <SmallPosters title='Action Movies' url={Baseurl + actionmovie} isNormal={true} vertical={true} wrapMode={false} ScrollButton={true} />
      <SmallPosters title='Comedy Movies' url={ComedyMovies} isNormal={true} vertical={true} wrapMode={false} ScrollButton={true} />
      <SmallPosters title='Popular Indian Movies' url={PopolarinIndiaMovies} isNormal={true} vertical={true} wrapMode={false} ScrollButton={true} />
      <SmallPosters title='Horror Movies' url={HorrorMovies} isNormal={true} vertical={true} wrapMode={false} ScrollButton={true} />
      <SmallPosters title='Romance Movies' url={RomanceMovies} isNormal={true} vertical={true} wrapMode={false} ScrollButton={true} />
      <SmallPosters title='Documentaries' url={Documentaries} isNormal={true} vertical={true} wrapMode={false} ScrollButton={true} />







    </div>
  )
}

export default Home
