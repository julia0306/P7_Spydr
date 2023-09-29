console.log('connected')

$(document).ready(init);
function init(){
    $(document).attr('unselectable', 'on').css('user-select', 'none').css('MozUserSelect', 'none').on('selectstart', false);
    $('.gameZone').on('mousemove', rotateDiv)
    
    $(document).on('click', shoot)
}


