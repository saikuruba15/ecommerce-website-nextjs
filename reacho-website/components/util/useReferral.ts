import { useEffect } from 'react';

const COOKIE_NAME = 'reacho_referral_code';

export const useReferral = () => {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const ref = params.get('ref');

        if (ref) {
            // Save to cookie for 30 days
            document.cookie = `${COOKIE_NAME}=${ref}; path=/; domain=.reacho.com; max-age=${30 * 24 * 60 * 60}`;
        }
    }, []);
};