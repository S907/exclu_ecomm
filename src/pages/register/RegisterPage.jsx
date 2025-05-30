import React from 'react'
import phnImg from '../../../public/images/screenImg.png'
import { TextField } from '@mui/material';
import { Link } from 'react-router';

function RegisterPage() {

  return (
    <div style={stylesSx.pageWrapper}>
      {/* Top Bar */}
      <div style={{ background: '#000', color: '#fff', padding: '5px 20px', fontSize: 14, textAlign: 'center' }}>
        <p style={{ fontFamily: 'Poppins-Black' }}>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <b>ShopNow</b>
        </p>
      </div>

      {/* Header */}
      <header style={stylesSx.header}>
        <div style={{ fontWeight: 'bold', fontSize: 22 }}>Exclusive</div>
        <nav style={stylesSx.nav}>
          <div style={stylesSx.innerNav}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/signup" className="nav-link">Sign up</Link>
          </div>
          <input type="text" placeholder="What are you looking for?" style={stylesSx.input} />
        </nav>
      </header>

      {/* Hero/Login */}
      <section style={stylesSx.hero}>
        <div style={stylesSx.imageWrapper}>
          <img
            src={phnImg}
            alt="phone"
            style={stylesSx.image}
          />
        </div>
        <div style={stylesSx.formWrapper}>
          <h2 style={{ fontFamily: 'Poppins-Medium' }}>Create an account</h2>
          <p style={{ fontFamily: 'Poppins-Light' }}>Enter your details below</p>
          <form style={stylesSx.form}>
            {/* <input style={stylesSx.input} type="text" placeholder="Email or Phone Number" /> */}
            {/* <input style={stylesSx.input} type="password" placeholder="Password" /> */}
            {/* <button style={stylesSx.button}>Register</button> */}
            {/* <a href="#" style={{ color: '#db4444', textAlign: 'right' }}>
              Forgot Password?
            </a> */}
            <section style={{ width: '98%' }}>
              <TextField id="standard-basic" label="Name" variant="standard" margin="dense" style={{ width: '100%', marginBottom: 20 }} />
              <TextField id="standard-basic" label="Email or Phone Number" variant="standard" margin="dense" style={{ width: '100%', marginBottom: 20 }} />
              <TextField id="standard-basic" label="Password" variant="standard" margin="dense" style={{ width: '100%', marginBottom: 20 }} />
            </section>
            <section style={stylesSx.sectionBtn}>
              <div style={stylesSx.sectDiv}>
                {/* <a style={{color:'#fff',fontFamily:'Poppins-Light'}}>Create Account</a> */}
                <a style={{ color: '#fff', fontFamily: 'Poppins-Light' }} href="">Create Account</a>
              </div>
              <div style={stylesSx.sectDiv2}>
                <a style={{ color: '#bbb', fontFamily: 'Poppins-Light' }} href="">Sign up with google</a>
              </div>
              <div>
                <p>Already have an account?</p>
                <p>Log in</p>
              </div>
            </section>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={stylesSx.footer}>
        <div style={stylesSx.column}>
          <div style={stylesSx.footerHeading}>Exclusive</div>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div style={stylesSx.inputGroup}>
            <input style={stylesSx.emailInput} type="text" placeholder="Enter your email" />
            <button style={stylesSx.button}>→</button>
          </div>
        </div>

        <div style={stylesSx.column}>
          <div style={stylesSx.footerHeading}>Support</div>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div style={stylesSx.column}>
          <div style={stylesSx.footerHeading}>Account</div>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        <div style={stylesSx.column}>
          <div style={stylesSx.footerHeading}>Quick Link</div>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        <div style={stylesSx.column}>
          <div style={stylesSx.footerHeading}>Download App</div>
          <p>Save $3 with App New User Only</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Play_Store_badge_EN.svg" alt="Play Store" style={{ height: 40 }} />
          <br />
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" style={{ height: 40, marginTop: 10 }} />
          <div style={stylesSx.socialIcons}>
            <span>🔵</span>
            <span>🐦</span>
            <span>📸</span>
            <span>🔗</span>
          </div>
        </div>
      </footer>

      <div style={{ textAlign: 'center', padding: 20, backgroundColor: '#000', color: '#fff', fontSize: 12 }}>
        © Copyright Rimel 2022. All right reserved
      </div>
    </div>
  )
}

export default RegisterPage;

const stylesSx = {
  pageWrapper: {
    // flex:1
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    // padding: '15px 30px',
    // flexWrap: 'wrap',
    // justifyContent:'space-evenly',
    // backgroundColor:'red',
    borderBottom: '1px solid #eee',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px'
  },
  nav: {
    // backgroundColor:'green',
    display: 'flex',
    gap: 20,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly'
  },
  innerNav: {
    // backgroundColor:'white',
    // padding:20
    // width:200
    // flex:1
    flex: 0.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15
  },
  iconName: {

  },
  hero: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
    // padding: '40px 20px',
    // marginRight:20
    // backgroundColor:'green'
  },
  imageWrapper: {
    // flex: '1 1 300px',
    // flex:1,
    // padding: 20,
    // backgroundColor:'green',
    width: '50%',
    flex: '1 1 300px'
  },
  image: {
    width: '100%',
    maxWidth: 800,
    height: 600,
  },
  formWrapper: {
    flex: '1 1 300px',
    // maxWidth: 500,
    // padding: 20,
    // backgroundColor:'red'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: 500,
    // backgroundColor:'green',
    // margin:10
  },
  sectionBtn: {
    // backgroundColor: 'green',
    // gap:10,
    // alignItems: 'center',
    // justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    height: 200
  },
  sectDiv: {
    backgroundColor: '#db4444',
    width: '97%',
    minHeight: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3
  },
  sectDiv2: {
    backgroundColor: '#fff',
    width: '97%',
    minHeight: 70, display: 'flex', justifyContent: 'center',
    alignItems: 'center', borderRadius: 3,
    border: '1px solid #ABABAB'
  },
  input: {
    padding: 12,
    border: '1px solid #ccc',
    borderRadius: 4,
  },
  button: {
    padding: 12,
    backgroundColor: '#db4444',
    color: '#fff',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
  },
  footer: {
    // height:'37vh',
    // backgroundColor: 'red',
    // padding: 10px 10px 10px 10px; /* top right bottom left */
    // padding: '40px 20px',
    backgroundColor: '#000',
    margin: 0,
    padding: '10px 10px 10px 10px',
    color: '#fff',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 30,
    flexGrow: 1,
    gap:10,
    // margin:20
    padding:30
  },
  column: {
    // flex: '1 1 200px',
  },
  footerHeading: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  emailInput: {
    padding: 10,
    flex: 1,
  },
  socialIcons: {
    marginTop: 10,
    display: 'flex',
    gap: 10,
  },
};