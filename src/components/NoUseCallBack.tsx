import React, { useState } from 'react';
import Light from './Light';

const NoUseCallBack = () => {
    const [masterOn, setMasterOn] = useState<boolean>(false);
    const [kitchecOn, setKitchecOn] = useState<boolean>(false);
    const [bathOn, setBathOn] = useState<boolean>(false);
  
    const toggleMaster = () => setMasterOn(!masterOn);
    const toggleKitchen = () => setKitchecOn(!kitchecOn);
    const toggleBath = () => setBathOn(!bathOn);
  
    return (
      <>
        <Light room="침실" on={masterOn} toggle={toggleMaster} />
        <Light room="주방" on={kitchecOn} toggle={toggleKitchen} />
        <Light room="욕실" on={bathOn} toggle={toggleBath} />
      </>
    )
}

export default NoUseCallBack
