export function formatDatetime( date ){
    const d = Intl.DateTimeFormat('en',{ month: 'short', day: 'numeric',}).format(date);
    const t = Intl.DateTimeFormat('en',{hour:'2-digit', minute:'2-digit'}).format(date);
    return d + ' ' + t;
}

export function aqiFormat( index ){
    const levels = [
        {quality:'Good',      color: 'text-green-500' },
        {quality:'Moderate',  color: 'text-yellow-300'},
        {quality:'Sensitive', color: 'text-orange-500'},
        {quality:'Unhealthy', color: 'text-red-500'},
        {quality:'Severe',    color: 'text-purple-500'},
        {quality:'Hazardous', color: 'text-orange-200'}
    ]
    return { ...levels[index-1], index}
}

export function uvFormat( index ){
    if( index < 3 ) return 'text-green-500';
    if( index < 6 ) return 'text-yellow-500';
    if( index < 8 ) return 'text-orange-500';
    if( index < 10) return 'text-red-500';
    return 'text-purple-500';
}