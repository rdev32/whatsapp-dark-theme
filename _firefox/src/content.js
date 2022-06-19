if (document.getElementsByTagName("body")[0].className == 'web') {
    document.getElementsByTagName("body")[0].className = 'web dark'
    let s = document.createElement('style');
    s.type = 'text/css';
    s.innerText = '._27lSL { filter: invert(100%); }';
    document.getElementsByTagName('head')[0].appendChild(s);
}

if ((document.getElementById("startup") != null) ||
    (document.getElementById("startup") != undefined)){
    document.getElementById("startup").id = 'startup dark';
}