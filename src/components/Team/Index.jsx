import List from "../List"
import Button from "../Button"



function Team() {

  return (
    <div  data-color="white" className='team section font-[SansitaReg] py-20'>
      <div className="head1">
        <h1 className="text-5xl sm:text-6xl text-center tracking-tight">
          Our Team
        </h1>
      </div>
      <div className="list mt-10 w-full px-8">
        {/* //single list */}
        <List />
        <div className='flex items-center justify-center py-20'>
        <button 
  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded"
  onClick={() => window.location.href = 'http://localhost:5500'}
>
GET STARTED
</button>
        </div>
      </div>
    </div>
  )
}

export default Team
