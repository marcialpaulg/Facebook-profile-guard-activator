// author: https://github.com/marcialpaulg

(() => {
    
    const activate = true;

    fetch("https://www.facebook.com/api/graphql/", {
        "credentials": "include",
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,fil;q=0.8,fr;q=0.7",
            "content-type": "application/x-www-form-urlencoded",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "viewport-width": "1080"
        },
        "referrer": "https://www.facebook.com/settings",
        "referrerPolicy": "origin-when-cross-origin",
        "body": (function(param){
            return Object.keys(param).map(function(key) {
                return key + '=' + encodeURIComponent(param[key]);
            }).join('&')
        })({
            av: (user_id = document.cookie.split('c_user=')[1].split(';')[0]),
            __user: user_id,
            __a: '1',
            __dyn: '',
            __csr: '',
            __req: 'e',
            __beoa: '0',
            __pc: 'PHASED:DEFAULT',
            dpr: '1',
            __rev: '1001692495',
            __s: '',
            __hsi: '',
            fb_dtsg: document.querySelector('input[name="fb_dtsg"]').value,
            jazoest: document.querySelector('input[name="jazoest"]').value,
            __spin_r: '1001692495',
            __spin_b: 'trunk',
            __spin_t: (new Date().getTime()),
            fb_api_caller_class: 'IsShieldedSetMutation',
            fb_api_req_friendly_name: 'IsShieldedSetMutation',
            variables: '{\"0\":{\"is_shielded\":'+activate+',\"session_id\":\"\",\"actor_id\":\"'+user_id+'\",\"client_mutation_id\":\"1\"}}',
            doc_id: '1477043292367183',
        }),
        "method": "POST",
        "mode": "cors"
    });
})()

