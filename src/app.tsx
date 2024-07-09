import { MapPin, Calendar, ArrowRight } from 'lucide-react'

export function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full p-6 text-center space-y-10">
        <div className='flex flex-col items-center gap-3'>
          <img src="/logo.svg" alt="plann.er icon" />
        <p className="text-zinc-300 text-lg">Invite your friends and plan your next trip!</p>
        </div>
        

        <div className="h-16 bg-zinc-900 p-4 rounded-xl flex items-center shadow-shape gap-3">
          <div className='flex gap-2 items-center w-80'> {/*flex-1 */}
            <MapPin className='size-5 text-zinc-400'/>
            <input type="text" placeholder="Where are you going?" className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full" />
          </div>

          <div className='flex gap-2 items-center'>
            <Calendar className='size-5 text-zinc-400'/>
            <input type="text" placeholder="When?" className="bg-transparent text-lg placeholder-zinc-400 outline-none w-40" />
          </div>

          <div className='w-px h-6 bg-zinc-800'></div>

          <button className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 ml-3'>
            Continue
            <ArrowRight className='size-5'/>
          </button>
        </div>

        <p className="text-sm text-zinc-500">
          By planning your trip through plann.er, you automatically agree <br /> to our <a className="text-zinc-300 underline" href="#">terms of use</a> and <a className="text-zinc-300 underline" href="#">privacy policies</a>.
        </p>
      </div>
    </div>
  )
}
