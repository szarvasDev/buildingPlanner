import React, { Component } from 'react'

export class pdfHtml extends Component {
    render() {
        return (
        <html>
          <body>
            <div class="centered">
              <h1>SZARVAS RENOVATION MANAGER</h1>
              <h2>2020. ARON KARPATI | DAVID SZOKE</h2>
            </div> 
            <div class="left levering">
             
            </div>
            <hr/>
            <div class="left">
                <h2>Tétel 1</h2>
            </div>
            <hr/>
            <div class="right">
              <h2>Total price: 300</h2>
            </div>
          </body>
        </html>
        )
    }
}

export default pdfHtml
