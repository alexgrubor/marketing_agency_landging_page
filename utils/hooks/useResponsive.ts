'use client'
import { useState, useEffect } from 'react';

type DeviceType = 'desktop' | 'tablet' | 'mobile';

const useResponsive = (): DeviceType => {
    const [deviceType, setDeviceType] = useState<DeviceType>('desktop');

    useEffect(() => {
        const handleResize = () => {
            const { innerWidth } = window;
            if (innerWidth >= 1024) {
                setDeviceType('desktop');
            } else if (innerWidth >= 768) {
                setDeviceType('tablet');
            } else {
                setDeviceType('mobile');
            }
        };

        handleResize(); 

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return deviceType;
};

export default useResponsive;