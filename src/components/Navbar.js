export default function Navbar() {
  return (
    <div className="flex justify-between px-4 py-3 bg-blue-500 text-lg font-bold text-white">
      {/* the left sided items */}
      <div className="flex gap-8">
        <p className="bg-red-500 px-2 rounded-md">Home</p>
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
