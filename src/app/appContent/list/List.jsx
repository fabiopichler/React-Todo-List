import React from 'react';
import PropTypes from 'prop-types';
import AutoSizer from "react-virtualized-auto-sizer";

import { FixedSizeList } from 'react-window';

import ListItem from './listItem/ListItem';

const List = ({
    items,
    onShowTask,
    onToggle,
    onEdit,
    onDelete,
}) => (
    <AutoSizer>
        {({ height, width }) => (
            <FixedSizeList
                height={height}
                width={width}
                itemCount={items.length}
                itemSize={60}
                itemData={{ items, onShowTask, onToggle, onEdit, onDelete }}
            >
                {ListItem}
            </FixedSizeList>
        )}
    </AutoSizer>
);

List.propTypes = {
    items: PropTypes.array.isRequired,
    onShowTask: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default List;
