// author: https://github.com/marcialpaulg

var jazoest = document.querySelector('input[name="jazoest"]').value,
    fb_dtsg = document.querySelector('input[name="fb_dtsg"]').value,
    session_id = document.querySelector('input[name="composer_session_id"]').value,
    user_id = document.cookie.split('c_user=')[1].split(';')[0];
    
var param = {
    av: user_id,
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
    fb_dtsg: fb_dtsg,
    jazoest: jazoest,
    __spin_r: '1001692495',
    __spin_b: 'trunk',
    __spin_t: (new Date().getTime()),
    fb_api_caller_class: 'IsShieldedSetMutation',
    fb_api_req_friendly_name: 'IsShieldedSetMutation',
    variables: '{\"0\":{\"is_shielded\":true,\"session_id\":\"'+session_id+'\",\"actor_id\":\"'+user_id+'\",\"client_mutation_id\":\"'+session_id+'\"}}',
    doc_id: '1477043292367183',
};

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
    "body": Object.keys(param).map(function(key) {
            return key + '=' + encodeURIComponent(param[key]);
        }).join('&'),
    "method": "POST",
    "mode": "cors"
});
