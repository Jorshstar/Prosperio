import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export default function Menu() {
  return (
    <div className='flex flex-col items-center justify-between w-[20vw] h-[100vh]'>
      <div className='flex flex-col items-center justify-between h-[50vh] w-[100%]'>
        <div className='bg-red-500 w-full h-[10vh] rounded-lg flex items-center justify-center gap-10'><div className='border-2 border-white rounded-[50%] w-[35px] h-[35px] text-center text-white'>p</div><div className='font-bold'>Prosperio</div></div>
      <Link to='/dashboard/board' className='font-semi-bold text-xl text-[20px]'>Dashboard</Link> 
      <Link to='/dashboard/products' className='font-semi-bold text-xl text-[20px]'>Products</Link>
      <Link to='/dashboard/accounts' className='font-semi-bold text-xl text-[20px]'>Accounts</Link>
      <Link to='/dashboard/issues' className='font-semi-bold text-xl text-[20px]'>Report issues</Link>
      </div>
      <Link to='/dashboard/settings' className='font-semi-bold text-xl text-[20px]'>Settings</Link>
    </div>
  )
}
