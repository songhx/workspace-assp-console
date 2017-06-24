/**
 * Created by zuimeideshiguang on 17/6/24.
 */
$(function(){


    //nava
    var $fullwidth=$('#layer_header .full_width');
    $fullwidth.css({left:0-$('#canvas').offset().left+$('#scroll_container').offset().left-$('#scroll_container').scrollLeft()-$.parseInteger($('#canvas').css("borderLeftWidth")),width:$('#scroll_container_bg').width()});
    var videoParams={"id":"layerE824EBBF7C74E7D061015D13611C18B2","bgauto":null,"ctauto":null,"bVideouse":null,"cVideouse":null,"bgvHeight":null,"bgvWidth":null};
    fullcolumn_bgvideo_init_func(videoParams);



});