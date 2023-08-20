import { LogOut } from 'lucide-react'
import Image from 'next/image'

export default function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <div className="relative h-10 w-10 overflow-hidden rounded-full">
        <Image
          className="h-10 w-10"
          layout="fill"
          src="https://github.com/ederross.png"
          alt="Profile Picture"
        />
      </div>

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-white">Eder Rosa</span>
        <span className="truncate text-sm text-zinc-500">
          ederross@icloud.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
