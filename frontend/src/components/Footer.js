import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com"><InstagramIcon /></a>
        <a href="https://www.twitter.com"><TwitterIcon /></a>
        <a href="https://www.facebook.com"><FacebookIcon /></a>
        <a href="https://www.linkedin.com"><LinkedInIcon /></a>
        <hr style={{height:"2px", width:"100%", color:"gray", backgroundColor:"gray"}}/>
      </div>
      <p> &copy; 2022 StudentWala Inc.</p>
    </div>
  );
}

export default Footer;