import React from 'react';
import { ListItem, DeleteButton, ListItemName } from './ContactItem.styled';
import { HiUser } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ListItem>
      <HiUser />
      <ListItemName>
        {name}: {number}
      </ListItemName>
      <DeleteButton type="button" id={id} onClick={() => onDeleteContact(id)}>
        <MdDelete />
        Delete
      </DeleteButton>
    </ListItem>
  );
};
