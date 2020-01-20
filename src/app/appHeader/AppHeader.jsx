import React from 'react';
import styled from 'styled-components';

import { Container, Navbar, Button } from 'react-bootstrap';

import EditTaskDialog from '../../components/editTaskDialog/EditTaskDialog';

const NavbarStyled = styled(Navbar)`
    box-shadow: 0 0 4px rgba(0,0,0,.7);
    z-index: 100;
`;

const AppHeader = () => {
    const [editTaskDialog, setEditTaskDialog] = React.useState(false);

    return (
        <header>
            <NavbarStyled
                expand="lg"
                variant="dark"
                bg="dark"
            >
                <Container>
                    <Navbar.Brand>Todo List</Navbar.Brand>

                    <Button
                        onClick={() => setEditTaskDialog(true)}
                        variant="success"
                    >
                        Adicionar
                    </Button>
                </Container>
            </NavbarStyled>

            <EditTaskDialog
                show={editTaskDialog}
                onClose={() => setEditTaskDialog(false)}
            />
        </header>
    );
}

export default AppHeader;
