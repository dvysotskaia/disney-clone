import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg"></Logo>
      <Navmenu>
        <a href="">
          <img src="/images/home-icon.svg" alt="" />
          <span>Home</span>
        </a>
        <a href="">
          <img src="/images/search-icon.svg" alt="" />
          <span>Search</span>
        </a>
        <a href="">
          <img src="/images/watchlist-icon.svg" alt="" />
          <span>Watchlist</span>
        </a>
        <a href="">
          <img src="/images/original-icon.svg" alt="" />
          <span>Originals</span>
        </a>
        <a href="">
          <img src="/images/movie-icon.svg" alt="" />
          <span>Movies</span>
        </a>
        <a href="">
          <img src="/images/series-icon.svg" alt="" />
          <span>Series</span>
        </a>
      </Navmenu>
      <UserImg>
        <img
          src="https://media.istockphoto.com/photos/headshot-of-cheerful-handsome-man-with-trendy-haircut-and-eyeglasses-picture-id1171169127?b=1&k=20&m=1171169127&s=170667a&w=0&h=EhnDHqf3YPp71FK23x_ZyFPhMLKCk_ZyNchiPE93ESw="
          alt=""
        />
      </UserImg>
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  
  height: 70px;
  background-color: #090b13;
`;
const Logo = styled.img`
  padding: 0 36px;
  width: 80px;
`;

const Navmenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;


  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    color: white;
    cursor: pointer;

    img {
      height: 20px;
      margin-right: 8px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        width: 100%;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -7px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.div`
  width: 48px;
  height: 48px;
  cursor: pointer;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
