import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selecCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles';

import './header.styles.scss';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo"/>
    </LogoContainer>
  
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/contact">
        CONTACT
      </OptionLink>
      {
        currentUser ?
        <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>
        :
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    { hidden ? null : <CartDropdown /> }
  </HeaderContainer>
)

const mapStateToProps = () => createStructuredSelector({
  currentUser: selecCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatxh => ({
  signOutStart: () => dispatxh(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);