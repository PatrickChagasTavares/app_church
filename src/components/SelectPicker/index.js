import React, {memo} from 'react';
import PropTypes from 'prop-types';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

import {Container} from './styles';

function SelectPicker({itens, placeholder, itemSelected, setItem, single}) {
  return (
    <Container>
      <SectionedMultiSelect
        items={itens}
        uniqueKey="id"
        selectText={placeholder}
        onSelectedItemsChange={e => setItem(e)}
        selectedItems={itemSelected}
        single={single}
        colors={{primary: '#0471C6'}}
      />
    </Container>
  );
}

SelectPicker.propTypes = {
  itens: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  placeholder: PropTypes.string,
  itemSelected: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    .isRequired,
  setItem: PropTypes.func.isRequired,
  single: PropTypes.bool,
  showDropDowns: PropTypes.bool,
};

SelectPicker.defaultProps = {
  placeholder: 'Selecione uma das opções',
  single: true,
};

export default memo(SelectPicker);
