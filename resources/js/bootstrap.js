/*
 *   Copyright (c) 2022 andydevs69420
 *   All rights reserved.
 */
import _ from 'lodash';
window._ = _;

import 'bootstrap';

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
window.axios = axios;

window.axios.baseUrl = import.meta.env.VITE_APP_HOST;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


/**
 * More like jquery
 **/
window.$ = Object.freeze((query) => {
    let nodes = document.querySelectorAll(query);
    // 
    if (nodes.length === 1) return nodes[0];
    else if (nodes.length <= 0)
        return undefined;
    // 
    return [...nodes];
});
