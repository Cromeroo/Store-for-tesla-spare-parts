import React from 'react';
import { Text as TextRN } from 'react';
;

const Text = (props) => {
  return (
    <TextRN style={[styles.font, props.style]} {...props}>
      {props.children}
    </TextRN>
  );
};

const styles = {
  font: {
    fontFamily: 'Roboto',
  },
};

export default Text;
