import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


const Transaction = ({t}) => {

  const {deleteTransaction} = useContext(GlobalContext);

    const sign = t.amount < 0 ? '-' : '+';
  return (
    <li className={t.amount < 0 ? 'minus' : 'plus'}>
        {t.text} <span>{sign} Rs {Math.abs(t.amount)}</span><button className='delete-btn' onClick={()=>deleteTransaction(t.id)}>X</button>
    </li>
  )
}

export default Transaction