const style = document.createElement('style')
style.innerHTML = 
`
    .fullscreen-danmaku{
        bottom:0px !important;
    }
    #web-player__bottom-bar__container{
        display:none !important;
    }
    .announcement-wrapper{
        display:none !important;
    }
`
document.documentElement.append(style)