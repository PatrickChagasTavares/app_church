import React, {memo} from 'react';
import PropTypes from 'prop-types';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

import {Container} from './styles';

function SelectPickerMutiple({
  itens,
  placeholder,
  itemSelected,
  setItem,
  single,
  showDropDowns,
}) {
  return (
    <SectionedMultiSelect
      items={itens}
      uniqueKey="id"
      selectText={placeholder}
      onSelectedItemsChange={e => setItem(e)}
      selectedItems={itemSelected}
      single={single}
      showDropDowns={showDropDowns}
      colors={{primary: '#0471C6'}}
    />
  );
}

SelectPickerMutiple.propTypes = {
  itens: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  placeholder: PropTypes.string,
  itemSelected: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    .isRequired,
  setItem: PropTypes.func.isRequired,
  single: PropTypes.bool,
  showDropDowns: PropTypes.bool,
};

SelectPickerMutiple.defaultProps = {
  placeholder: 'Selecione uma das opções',
  single: true,
  showDropDowns: false,
};

export default memo(SelectPickerMutiple);
