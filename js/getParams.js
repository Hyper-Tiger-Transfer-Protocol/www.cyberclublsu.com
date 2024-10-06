function get_params()
{
    var query_str, p, tab, i, params, tab2;
    query_str = window.location.href;
    p = query_str.indexOf("?");
    if (p < 0)
        return {};
    query_str = query_str.substr(p + 1);
    tab = query_str.split("&");
    params = {};
    for(i = 0; i < tab.length; i++) {
        tab2 = tab[i].split("=");
        params[decodeURIComponent(tab2[0])] = decodeURIComponent(tab2[1]);
    }
    return params;
}