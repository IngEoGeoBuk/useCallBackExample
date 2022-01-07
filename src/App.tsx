// https://www.daleseo.com/react-hooks-use-callback/

import React, { useState, useCallback } from 'react'
import NoUseCallBack from './components/NoUseCallBack';
import YesUseCallBack from './components/YesUseCallBack';

const App = () => {
  return (
    <>
      no useCallBack
      <br/>
      <NoUseCallBack />
      <br/><br/><br/>
      use useCallBack
      <br/>
      <YesUseCallBack />
    </>
  )
}

export default App
