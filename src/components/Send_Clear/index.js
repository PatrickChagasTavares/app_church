import React, {memo} from 'react';
import PropTypes from 'prop-types';

import {Container, CancelButton, SaveButton, TextButton} from './styles';

function Send_Clear({loading, handleClear, handleSave}) {
  return (
    <Container>
      <CancelButton disabled={loading} onPress={handleClear}>
        <TextButton>Limpar</TextButton>
      </CancelButton>
      <SaveButton disabled={loading} onPress={handleSave}>
        <TextButton>Salvar</TextButton>
      </SaveButton>
    </Container>
  );
}

Send_Clear.propTypes = {
  loading: PropTypes.bool.isRequired,
  handleClear: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
};

export default memo(Send_Clear);
