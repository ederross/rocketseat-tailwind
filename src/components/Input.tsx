import { ComponentProps } from 'react'

export type InputRootProps = ComponentProps<'div'>

export function Root(props: InputRootProps) {
  return (
    <div
      {...props}
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 bg-white px-3 py-2 shadow-sm"
    ></div>
  )
}

export type InputControlProps = ComponentProps<'input'>

export function Control(props: InputControlProps) {
  return (
    <>
      <input
        className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-400 outline-none"
        {...props}
      />
    </>
  )
}

export type InputPrefixProps = ComponentProps<'div'>

export function Prefix(props: InputPrefixProps) {
  return <div {...props}></div>
}
