import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import {Container, Text} from './styles';

export default function Button({children, loading, Icon, ...rest}) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="smaill" color="#fff" />
      ) : (
        <>
          {/* {Icon && <View>{Icon}</View>} */}
          <Text>{children}</Text>
        </>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  // Icon: PropTypes.object,
};

Button.defaultProps = {
  loading: false,
  // Icon: null,
};
