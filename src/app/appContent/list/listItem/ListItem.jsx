import React from 'react';
import clsx from 'clsx';
import styled from "styled-components";

import { Container, Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle, faUndo, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle as faCheckCircleRegular } from '@fortawesome/free-regular-svg-icons';

const ContainerStyled = styled(Container)`
    display: flex;
    align-items: center;
    height: 100%;
    background: white;
    cursor: pointer;

    &.alternate/*:nth-of-type(odd)*/ {
        background: #fdfdfd;
    }

    &:hover {
        background: #f6f6f6;
    }

    &:active {
        background: #f1f1f1;
    }

    & > .icon {
        font-size: 30px;

        &.secondary {
            color: #aaa;
        }
    }

    & > .texts {
        width:100%;
        overflow: hidden;

        & > h6,
        & > span {
            display: block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
`;

const ListItem = React.memo(({
    index,
    data,
    style,
}) => {
    const { items, onShowTask, onToggle, onEdit, onDelete } = data;
    const item = items[index];

    return (
        <div
            style={style}
            key={index}
        >
            <ContainerStyled
                onClick={() => onShowTask(item.id)}
                className={clsx('px-3', {
                    alternate: index % 2 === 1,
                })}
            >
                <FontAwesomeIcon
                    icon={item.open ? faCheckCircleRegular : faCheckCircle}
                    className={clsx(
                        'icon',
                        item.open ? 'secondary' : 'text-success'
                    )}
                />

                <div className="texts mx-3">
                    <h6
                        className={clsx('mb-0', {
                            'text-success': !item.open
                        })}
                    >
                        {item.title}
                    </h6>

                    {item.description ? (
                        <span
                            className={clsx(
                                'small',
                                item.open ? 'text-secondary' : 'text-success',
                            )}
                        >
                            {item.description}
                        </span>
                    ) : null}
                </div>

                <ButtonGroup
                    onClick={e => e.stopPropagation()}
                >
                    <Button
                        onClick={() => onToggle(item.id)}
                        variant="light"
                    >
                        <FontAwesomeIcon
                            icon={item.open ? faCheck : faUndo}
                            className={item.open ? 'text-success' : 'text-secondary'}
                        />
                    </Button>

                    <DropdownButton
                        as={ButtonGroup}
                        id="bg-nested-dropdown"
                        variant="light"
                        title=""
                    >
                        <Dropdown.Item onClick={() => onEdit(item.id)}>
                            <FontAwesomeIcon
                                icon={faEdit}
                                className="text-secondary mr-3"
                            />

                            Editar
                        </Dropdown.Item>

                        <Dropdown.Item onClick={() => onDelete(item.id)}>
                            <FontAwesomeIcon
                                icon={faTrashAlt}
                                className="text-secondary mr-3"
                            />

                            Apagar
                        </Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup>
            </ContainerStyled>
        </div>
    );
});

export default ListItem;
