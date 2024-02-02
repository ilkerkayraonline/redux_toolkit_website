import React from 'react'
import { removeFromCart } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'

const CartComp = ({cart}) => {
  const dispatch = useDispatch()
  return (
    <div className='my-10 flex items-center justify-between'>
      <img className='w-[150px] h-[150px] object-cover' src={cart?.image} alt="" />
      <div className='w-[476px]'>
        <div className='text-xl'>{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className='font-bold text-2xl '>{cart?.price} ({cart?.quantity}) TL</div>
      <div onClick={() => dispatch(removeFromCart(cart?.id))} className='bg-red-500 text-white w-[150px] h-12 flex items-center justify-center cursor-pointer rounded-md'>Ürünü Sil</div>
    </div>
  )
}

export default CartComp