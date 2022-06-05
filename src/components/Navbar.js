export default function Navbar() {
  return (
    <div className="flex justify-between px-2 py-2 bg-slate-500 text-lg">
      {/* the left sided items */}
      <div className="flex gap-7">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>

      {/* the right sided items  */}
      <div>
        <p>Menu</p>
      </div>
    </div>
  );
}
