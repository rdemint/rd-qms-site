import ActionItem from '@/components/docs/ActionItem'

export default function Subtask({ actionitem, children }) {
  return (
    <div className="my-16 bg-gray-50 border-l-2 border-accent-600 px-2 py-2">
      <ActionItem>{actionitem}</ActionItem>
      <div className="mt-2 p-2 tracking-tight">{children}</div>
    </div>
  )
}
