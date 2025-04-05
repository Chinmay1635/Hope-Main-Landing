
import styles from './Style.module.css';
import { LuArrowUpRight } from "react-icons/lu";
import Button from  '../Button'

function Footer() {
  return (
    

      <div className="downfoot w-full h-fit bg-[var(--black)] px-8 py-10 sm:py-32">
        <div className='flex sm:flex-row sm:items-start justify-between space-y-4 sm:space-y-0 sm:space-x-4'>
          <div className=' hidden sm:inline-block '>
            {["Home", "Solutions", "About", "Team", "Contact"].map((item, index) => {
              return (
                <div key={index} className='pb-4'>
                  <h3 className='font-[SansitaReg] text-[2.5vh] text-white font-semibold'>
                    {item}
                  </h3>  
                </div>
              ) 
            })}
          </div>
          {/* <div className=''>
            <h1 className='text-white pb-10 font-[SansitaReg] text-[2.8vh] font-semibold'>Join our mailing list for the latest updates.</h1>
            <div className='flex items-center gap-6'>
              <input 
                type="text" 
                placeholder="Enter your email address" 
                className="bg-[var(--light)] w-full sm:w-[350px] h-[5.9vh] px-4 text-[2vh]"
              />
              <Button text="SUBSCRIBE" bgColor="bg-[#f5f19c]" />
            </div>
          </div> */}
          <div className=' hidden sm:inline-block '>
            {["Insights", "Newsroom", "Resources", "Careers", "Contact"].map((item, index) => {
              return (
                <div key={index} className='pb-4'>
                  <h3 className='font-[SansitaReg] text-[2.5vh] text-white font-semibold'>
                    {item}
                  </h3>  
                </div>
              ) 
            })}
          </div>  
        </div>
      </div>
  )
}

export default Footer
