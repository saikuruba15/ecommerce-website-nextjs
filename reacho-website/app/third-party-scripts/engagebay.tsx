import { useEffect } from 'react';

// Extend the Window interface locally within this file
declare global {
    interface Window {
        EhAPI: {
            after_load?: () => void;
            set_account: (accountKey: string, domain: string) => void;
            execute: (command: string) => void;
        };
    }
}

const EngageBayScript = () => {
    useEffect(() => {
        // Define the script dynamically
        const loadScript = () => {
            window.EhAPI = window.EhAPI || {}; // Ensure EhAPI exists
            window.EhAPI.after_load = function () {
                window.EhAPI.set_account('h62bc6b9s365jqcu79hd7ur1aa', 'engagebayzt');
                window.EhAPI.execute('rules');
            };

            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = `//d2p078bqz5urf7.cloudfront.net/jsapi/ehform.js?v=${new Date().getHours()}`;

            // Append the script to the document
            const firstScript = document.getElementsByTagName('script')[0];
            // Append the script to the document if firstScript and its parentNode exist
            if (firstScript && firstScript.parentNode) {
                firstScript.parentNode.insertBefore(script, firstScript);
            }
        };

        // Call the function to load the script
        loadScript();

        // Cleanup: remove the script when component unmounts
        return () => {
            const script = document.querySelector(
                'script[src^="//d2p078bqz5urf7.cloudfront.net/jsapi/ehform.js"]'
            );
            if (script) {
                script.remove();
            }
        };
    }, []);

    return null; // This component only injects a script, so no JSX is needed
};

export default EngageBayScript;
