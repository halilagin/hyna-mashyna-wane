
start=0
end=3.5
duration=end-start
dx = 1./duration/24


opacity=0
i=0
while opacity<1:
    i+=1
    svg_code = """
    <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 1920 1080" style="enable-background:new 0 0 1920 1080;" xml:space="preserve">
    <style type="text/css">
     @font-face {
          font-family: TYPEWRITER;
          src: url('./TYPEWR_B.TTF');
        }   

        .wane_title{
            fill: #F5DB36; 
            font-weight:bold;
            font-family:'TYPEWRITER';
            font-size:90px;
            opacity: {OPACITY};
        }   
        .wane_text{
            fill: #fff; 
            font-weight:bold;
            font-size:90px;
            opacity: {OPACITY};
        }   


    </style>
    <rect class="st0" width="1920" height="1080"/>
    <text transform="matrix(1 0 0 1 420 361)" class="wane_title">WANE (DERS) 00070</text>
    <text transform="matrix(1 0 0 1 420 500)" class="wane_text">Hin peyvən kurdy bo byrkaryə</text>
    </svg>
    """.replace("OPACITY", str( '{:.4f}'.format(opacity)) )
    f = open (f"svgs/svg-{i}.svg", "w")
    f.write(svg_code)
    opacity +=dx
    

