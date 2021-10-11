const fs = require("pn/fs");
const svg2png = require("svg2png");
const svg2img = require("svg2img");
const btoa_ = require("btoa");
const sharp = require("sharp")


function svg_to_file(i:any,opacity:any) {

        var svgString =`
        <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 1920 1080" style="enable-background:new 0 0 1920 1080;" xml:space="preserve">
        <style type="text/css">
         @font-face {
              font-family: "TYPEWRITER";
              src: url('./TYPEWR_B.TTF');
            }   

            .wane_title{
                fill: #F5DB36; 
                font-weight:bold;
                font-family:'TYPEWRITER';
                font-size:90px;
                opacity: ${opacity};
            }   
            .wane_text{
                fill: #fff; 
                font-weight:bold;
                font-size:90px;
                font-family: "arial";
                opacity: ${opacity};
            }   

        .st0{fill:#084F61;}


        </style>
        <rect class="st0" width="1920" height="1080"/>
        <text transform="matrix(1 0 0 1 420 361)" class="wane_title ">WANE (DERS) 00070</text>
        <text transform="matrix(1 0 0 1 420 500)" class="wane_text ">Hin peyvən kurdy bo byrkaryə</text>
        </svg>
        `; 

        let padded_i = `${i}`.padStart(5,"0")
        let svgFile = `/tmp/svg-${padded_i}.svg`;
        fs.writeFile(svgFile, svgString, function (err:any) {
          if (err)
              return console.log(err);
        });
}


async function svg_to_svg() {
    const Canvas = require('canvas') 

    Canvas.registerFont('TYPEWR_B.TTF', {family: 'TYPEWRITER'});

    let start=0.0;
    let end = 1;
    let dx = (end-start)/3.5/24;

    let i=0;
    for(let opacity = start; opacity < 1 ;opacity += dx){
        i+=1;
        console.log(i)
        svg_to_file(i, opacity);
    }
    for(let j=0 ; j < 12 ;j++){
        svg_to_file(i+j, 1);
    }

}//function


svg_to_svg();
