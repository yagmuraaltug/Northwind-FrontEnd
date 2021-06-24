import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SingedIn from "./SingedIn";
export default function Navi() {
  const { cartItems } = useSelector(state => state.cart);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const  history = useHistory()
  function handleSignOut(){
    setIsAuthenticated(false)
    history.push("/")

  }
  
  
  function handleSignIn(){
    setIsAuthenticated(true)
  }
  
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
          {cartItems.length>0&&<CartSummary/>}
            {isAuthenticated ? <SingedIn signOut = {handleSignOut} /> :
             <SignedOut signIn = {handleSignIn} />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
