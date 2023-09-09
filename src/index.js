import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './componentes/Primeiro.jsx'
import BomDia from './componentes/bomDia.jsx'

ReactDOM.render(<div>
                <Primeiro/>
                <BomDia nome="Matheus"/>

</div>
, document.getElementById('root'))