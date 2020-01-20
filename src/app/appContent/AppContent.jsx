import React from 'react';

import List from './list/List';
import EditTaskDialog from '../../components/editTaskDialog/EditTaskDialog';
import ShowTaskDialog from '../../components/showTaskDialog/ShowTaskDialog';

import { useStore } from '../../store/StoreContext';

const AppContent = () => {
    const { state, actions } = useStore();

    const [showTaskDialog, setShowTaskDialog] = React.useState({ show: false, id: 0 });
    const [editTaskDialog, setEditTaskDialog] = React.useState({ show: false, id: 0 });

    const handleShowTask = React.useCallback(id => {
        setShowTaskDialog({ show: true, id });
    }, []);

    const handleToggle = React.useCallback(id => {
        actions.toggle(id);
    }, [actions]);

    const handleEdit = React.useCallback(id => {
        setEditTaskDialog({ show: true, id })
    }, []);

    const handleDelete = React.useCallback(id => {
        actions.remove(id);
    }, [actions]);

    return (
        <main style={{ flexGrow: 1 }}>
            <section className="h-100">
                <List
                    items={state.todos}
                    onShowTask={handleShowTask}
                    onToggle={handleToggle}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />

                <EditTaskDialog
                    idToEdit={editTaskDialog.id}
                    show={editTaskDialog.show}
                    onClose={() => setEditTaskDialog({ show: false, id: 0 })}
                />

                <ShowTaskDialog
                    id={showTaskDialog.id}
                    show={showTaskDialog.show}
                    onHide={() => setShowTaskDialog({ show: false, id: 0 })}
                />
            </section>
        </main>
    );
};

export default AppContent;
