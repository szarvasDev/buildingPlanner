function generateHtml(boxes){
    var html=`
    <html>
    <head>
      <style>
        *{
            margin:0px;
        }
        .listing{
            padding-left:30px;
            margin-bottom:15px;
            margin-top:10px;
        }
        .heading{
            margin-top:30px;
            padding-left:30px;
            text-align:center;
            margin-bottom:30px;
        }
        .line{
            height:2px;
           background:black
        }
        .total{
            text-align:right;
            padding-top:10px;
            padding-right:30px;
        }
      </style>
    </head>
    <body>
      <div class="heading">
            <h1>Szarvas Renovation Planner</h1>
          <h2>2020</h2>
      </div>`
    var totalprice = 0;
    Object.keys(boxes).forEach(key=>{
        const { left, top, title, isCollided, value, values, image } = boxes[key]
        if(!isCollided){
            return;
        }
        var curretntVal = value;
        var currentPrice = values[value];
        var currentState = "";
        var bg = "white";
        
        
        totalprice+=currentPrice;
        switch(curretntVal){
            case 0:{
                currentState = "Basic renovation";
                bg = "rgba(173, 36, 36, 0.5)"
                break;
            }
            case 1:{
                currentState = "Mid. renovation";
                bg = "rgba(174, 0, 255, 0.705);"
                break;
            }
            case 2:{
                currentState = "Advanced renovation";
                bg = "rgba(0, 219, 73, 0.5)"
                break;
            }
        }
        html+=`<div class="listing">
        <h4>${title}</h4>
        <h5 style="background-color:${bg}">Renovation type: ${currentState} </h5>
        <h5>Renovation price: ${currentPrice} mil. HUF</h5>
        </div>`;
    })
    html+=`<hr class="line">
    <div class="total"> 
          <h4>Total price: ${totalprice} mil. HUF</h4>
    </div>
  </body>
</html>`
    return html;
}

export default generateHtml
