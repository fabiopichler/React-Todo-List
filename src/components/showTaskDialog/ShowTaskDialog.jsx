import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styled from 'styled-components';

import { Button, Modal, Media } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle as faCheckCircleRegular } from '@fortawesome/free-regular-svg-icons';

import { useStore } from '../../store/StoreContext';

const ModalStyled = styled(Modal)`
    & .icon {
        font-size: 50px;
        
        &.secondary {
            color: #aaa;
        }
    }
    
    & .description {
        white-space: pre-line;
    }
`;

const ShowTaskDialog = ({
    id,
    ...rest
}) => {
    const { state } = useStore();

    const [item, setItem] = React.useState({
        title: ''
    });

    React.useEffect(() => {
        if (rest.show && id > 0) {
            const index = state.todos.map(x => x.id).indexOf(id);
            const item = state.todos[index];

            setItem(item);
        }
        // eslint-disable-next-line
    }, [rest.show, id])

    return (
        <ModalStyled
            {...rest}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header
                closeButton
                className="border-0"
            />

            <Modal.Body>
                <Media>
                    <FontAwesomeIcon
                        icon={item.open ? faCheckCircleRegular : faCheckCircle}
                        className={clsx(
                            'icon align-self-center mr-3',
                            item.open ? 'secondary' : 'text-success'
                        )}
                    />

                    <Media.Body className="align-self-center">
                        <h5 className="mb-0">{item.title}</h5>

                        {item.description ? (
                            <p className="description mt-2 mb-0">{item.description}</p>
                        ) : null}
                    </Media.Body>
                </Media>
            </Modal.Body>

            <Modal.Footer className="border-0">
                <Button onClick={rest.onHide}>Fechar</Button>
            </Modal.Footer>
        </ModalStyled>
    );
};

ShowTaskDialog.propTypes = {
    id: PropTypes.number.isRequired,
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
}

export default ShowTaskDialog;
