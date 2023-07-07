import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slice';

import PropTypes from 'prop-types';
import { Info, Item, List } from './ContactList.styled';

export const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Info>
              {name}: {number}
            </Info>
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
