import React from 'react';

import { CustomerButtonContainer } from './custom-button.styles';

const CustomButton = ({children, ...props}) => (
  <CustomerButtonContainer {...props}>
    {children}
  </CustomerButtonContainer>
);

export default CustomButton;