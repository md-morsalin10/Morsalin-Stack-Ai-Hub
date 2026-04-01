
import { Suspense, useState } from 'react'
import './App.css'
import AllCarts from './component/AllCarts/AllCarts'
import BannerSection from './component/BannerSection/BannerSection'
import Navbar from './component/Navbar/Navbar'
import Ratting from './component/Ratting/Ratting'
import TabSection from './component/TabSection/TabSection'

const dataPromise = fetch('/data.json').then(res => res.json())

function App() {

  const [tabActive, setTabActive] = useState('All');


  return (
    <>
      <Navbar></Navbar>
      <BannerSection/>
      <Ratting/>
      <TabSection tabActive={tabActive} setTabActive={setTabActive}/>
      <Suspense fallback={<p>Loading.....</p>}>
          <AllCarts tabActive={tabActive} setTabActive={setTabActive} dataPromise={dataPromise}/>
      </Suspense>


    </>
  )
}

export default App
