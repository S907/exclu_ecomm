import React from 'react';
import DropDown from '../../components/DropDown';
import FragmentComp from '../../components/FragmentComp';
import './css/login.css';


const LoginPage = () => {
  return (
    <FragmentComp>
      <div className='topContainer'>
        <p>Summer sale for all Swim Suits and Free Express Delivery- Off 50%</p>
        <a>ShopNow</a>
        <div>
          <DropDown />
        </div>
      </div>

    </FragmentComp>
  )
}

export default LoginPage