import React from 'react';
import DropDown from '../../components/DropDown';
import FragmentComp from '../../components/FragmentComp';
import './css/login.css';


const LoginPage = () => {
  return (
    <FragmentComp>
      <div className='topContainer'>
        <p style={styles.link}>Summer sale for all Swim Suits and Free Express Delivery- Off 50%</p>
        <a>ShopNow</a>
        <div>
          <DropDown />
        </div>
      </div>

    </FragmentComp>
  )
}
const styles = {
  topContainer: {
    backgroundColor: "#f8f9fa",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#333",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    cursor: "pointer",
    marginLeft: "10px",
  },
};
export default LoginPage