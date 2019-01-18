import React from 'react';

const styles = {
    input: {width: '100%', height: '30px', margin: '10px 0', borderRadius: '5px', fontFamily: 'Montserrat' }
}


const Input = props => {
  const {value} = props;
  return  (
    <input style={styles.input} disabled={true} value={value}></input>
  )
}

export default Input

