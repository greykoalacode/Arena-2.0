import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import PropTypes from 'prop-types';

const PasswordField = ({
  label, id, password, setPassword,
}) => {
  const [passwordFieldIcon, setPasswordFieldIcon] = useState('visibility');
  const [passwordFieldType, setPasswordFieldType] = useState('password');

  const togglePasswordVisibilityState = () => {
    if (passwordFieldIcon === 'visibility') {
      setPasswordFieldIcon('visibility_off');
      setPasswordFieldType('text');
    } else {
      setPasswordFieldIcon('visibility');
      setPasswordFieldType('password');
    }
  };

  return (
    <TextField
      label={label}
      className="pa2 w-100 noselect"
      outlined
      onTrailingIconSelect={togglePasswordVisibilityState}
      trailingIcon={<MaterialIcon className="outline-0" role="presentation" icon={passwordFieldIcon} />}
    >
      <Input
        id={id}
        type={passwordFieldType}
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
    </TextField>
  );
};

PasswordField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default PasswordField;
