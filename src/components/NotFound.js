import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.h1`
    text-align: center;
    font-size: var(--fontBig);
    color: var(--darkGrey);
`;

const NotFound = () => {
    return (
        <Wrapper>
            PAGE NOT FOUND
        </Wrapper>
    )
}

export default NotFound;
