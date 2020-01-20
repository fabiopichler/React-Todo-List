import React from 'react';
import PropTypes from 'prop-types';

import { Button, Modal, Form } from 'react-bootstrap';

import { useStore } from '../../store/StoreContext';

const EditTaskDialog = ({
    show,
    onClose,
    idToEdit = 0,
}) => {
    const newTask = idToEdit === 0;

    const { state, actions } = useStore();

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [titleError, setTitleError] = React.useState(false);

    React.useEffect(() => {
        if (show && !newTask) {
            const index = state.todos.map(x => x.id).indexOf(idToEdit);
            const item = state.todos[index];

            setTitle(item.title);
            setDescription(item.description);
        }
        // eslint-disable-next-line
    }, [show, idToEdit, newTask]);

    const handleClose = () => {
        onClose();
        setTitle('');
        setDescription('');
        setTitleError(false);
    }

    const handleOk = () => {
        if (!title) {
            setTitleError(true);
            return;
        }

        if (newTask)
            actions.add(title, description);
        else
            actions.edit(idToEdit, title, description);

        handleClose();
    }

    return (
        <Modal
            show={show}
            onHide={handleClose}
        >
            <Modal.Header
                closeButton
                className="border-0"
            >
                <Modal.Title>{newTask ? 'Adicionar tarefa' : 'Editar tarefa'}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="py-0">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Tarefa:</Form.Label>

                    <Form.Control
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        type="text"
                        placeholder="Assunto da tarefa"
                        isInvalid={titleError}
                    />

                    <Form.Control.Feedback type="invalid">
                        Insira uma tarefa
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descrição (opcional):</Form.Label>

                    <Form.Control
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        as="textarea"
                        rows="3"
                    />
                </Form.Group>
            </Modal.Body>

            <Modal.Footer className="border-0 pt-0">
                <Button
                    variant="secondary"
                    onClick={handleClose}
                >
                    Cancelar
                </Button>

                <Button
                    variant="primary"
                    onClick={handleOk}
                >
                    Salvar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

EditTaskDialog.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    idToEdit: PropTypes.number,
}

export default EditTaskDialog;
