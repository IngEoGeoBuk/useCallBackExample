import React, { useState, useCallback } from 'react';
import Light from './Light';

const YesUseCallBack = () => {
    const [masterOn, setMasterOn] = useState<boolean>(false);
    const [kitchecOn, setKitchecOn] = useState<boolean>(false);
    const [bathOn, setBathOn] = useState<boolean>(false);

    const toggleMaster = useCallback(() => setMasterOn(!masterOn), [masterOn]);
    const toggleKitchen = useCallback(() => setKitchecOn(!kitchecOn), [kitchecOn]);
    const toggleBath = useCallback(() => setBathOn(!bathOn), [bathOn]);

    return (
        <>
            <Light room="침실" on={masterOn} toggle={toggleMaster} />
            <Light room="주방" on={kitchecOn} toggle={toggleKitchen} />
            <Light room="욕실" on={bathOn} toggle={toggleBath} />
        </>
    )
}

export default YesUseCallBack
