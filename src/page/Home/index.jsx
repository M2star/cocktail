import React from 'react'
import Footer from '../../component/common/Footer/Footer'
import Menu from '../../component/common/Menu/Menu'
import Search from '../../component/common/searchBar/Search'
import Banner from '../../component/Home/bannner/Banner'
import './style.css'



const Home = () => {
  

  return (
    <div>
        {/* banner */}
        <Banner />
        {/* menu */}
        <Search />
        <Menu />
        {/* footer */}
        <Footer />
        {/* cart counter */}
        
    </div>
  ) 
}

export default Home