import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  SquareStack,
  Users,
} from 'lucide-react'

import { NavItem } from './NavItem'

export function Sidebar() {
  return (
    <>
      <aside className="flex flex-col gap-6 border-zinc-200 bg-zinc-100 bg-sidebar-texture px-3 py-8">
        <div className="w-full">
          <nav className="space-y-0.5 ">
            <NavItem title={'Home'} icon={Home} />
            <NavItem title={'Dashboard'} icon={BarChart} />
            <NavItem title={'Projects'} icon={SquareStack} />
            <NavItem title={'Tasks'} icon={CheckSquare} />
            <NavItem title={'Reporting'} icon={Flag} />
            <NavItem title={'Users'} icon={Users} />
          </nav>

          <div className="mt-auto flex flex-col gap-6">
            <nav className="space-y-0.5">
              <NavItem title="Support" icon={LifeBuoy} />
              <NavItem title="Settings" icon={Cog} />
            </nav>
          </div>
        </div>
      </aside>
    </>
  )
}
