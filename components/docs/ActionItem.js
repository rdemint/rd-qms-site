export default function ActionItem({ children }) {
  return (
    <>
      <form>
        <input
          type="checkbox"
          className="shadow checked:bg-rose-500 hover:scale-105 focus:text-rose-500 focus:ring-rose-500"
        />
        <label className="mt-4 p-4">{children}</label>
      </form>
    </>
  )
}
