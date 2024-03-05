import Image from 'next/image'
import Navbar from './components/Navbar'
import { getCurrentUser } from './lib/session'
import Container from './components/container/Container'
import Page from "./components/page"


export default async function Home() {
  const user = await getCurrentUser()
  // console.log(user)
  return (
    <div>
      <div className='px-5 max-w-[1400px] mx-auto'>
        <Navbar/>
      </div>
      
      <Page/>
      <div className='px-5 max-w-[1300px] mx-auto'>
      
        <hr />
        <Container/>
      </div>
      
    </div>
    
  )
}
