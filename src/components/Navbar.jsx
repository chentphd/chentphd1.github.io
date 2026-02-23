export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50 px-8 py-4 flex justify-between items-center">
      <span className="font-bold text-xl text-blue-700">Chen T. | Data Analytics</span>
      <div className="flex gap-6 text-gray-600 font-medium">
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#skills" className="hover:text-blue-600">Skills</a>
        <a href="#projects" className="hover:text-blue-600">Projects</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </div>
    </nav>
  );
}