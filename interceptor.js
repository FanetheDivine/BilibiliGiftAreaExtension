const style = document.createElement('style')
style.innerHTML = 
`
    .fullscreen-danmaku{
        bottom:0px !important;
    }
    #web-player__bottom-bar__container{
        display:none;
    }
`
document.documentElement.append(style)