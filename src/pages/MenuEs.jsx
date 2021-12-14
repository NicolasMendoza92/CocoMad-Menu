import React from 'react'
import { Bebidas } from '../componentes/menuEs/Bebidas'
import { Bolleria } from '../componentes/menuEs/Bolleria'
import { Brunch } from '../componentes/menuEs/Brunch'
import { Cafeteria } from '../componentes/menuEs/Cafeteria'
import { Desayunos } from '../componentes/menuEs/Desayunos'
import { Pasteleria } from '../componentes/menuEs/Pasteleria'
import { Salado } from '../componentes/menuEs/Salado'



export default function MenuEs() {
    return (
        <div className='mb-2'>
            <div>
                <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1639425564/cocoMAD/MenuheaderEs_a8t1sl.png" alt="" className="header-menu" />
            </div>
            <Desayunos />
            <Cafeteria />
            <Pasteleria />
            <Bolleria />
            <Salado />
            <Bebidas />
            <Brunch />
        </div>
    )
}
