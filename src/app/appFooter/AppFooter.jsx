import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    box-shadow: 0 0 4px rgba(0,0,0,.15);
    z-index: 100;
`;

const AppFooter = () => (
    <Footer className="p-3 bg-white">
        <div className="text-center text-secondary small">
            &copy; 2020 Fábio Pichler
        </div>
    </Footer>
);

export default AppFooter;
