
import { Suspense, useState } from 'react'
import './App.css'
import AllCarts from './component/AllCarts/AllCarts'
import BannerSection from './component/BannerSection/BannerSection'
import Navbar from './component/Navbar/Navbar'
import Ratting from './component/Ratting/Ratting'
import TabSection from './component/TabSection/TabSection'
import CartsSection from './component/CartsSection/CartsSection'
import Solutions from './component/Solutions/Solutions'

const dataPromise = fetch('/data.json').then(res => res.json())

function App() {

  const [tabActive, setTabActive] = useState('All');
  const [carts, setCarts] = useState([]);


  return (
    <>
      <Navbar></Navbar>
      <BannerSection />
      <Ratting />
      <TabSection tabActive={tabActive} carts={carts} setTabActive={setTabActive} />
      <Suspense fallback={<p>Loading.....</p>}>
        <AllCarts carts={carts} setCarts={setCarts} tabActive={tabActive} setTabActive={setTabActive} dataPromise={dataPromise} />
      </Suspense>
      {tabActive === 'cart' &&
        <CartsSection carts={carts} setCarts={setCarts}></CartsSection>
      }

      <Solutions></Solutions>

    </>
  )
}

export default App
