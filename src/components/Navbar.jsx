import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <nav className={`p-4 flex justify-between items-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
      <div className="flex items-center gap-10">
        <span className="text-2xl font-bold">TextUtils</span>

        <div className="flex gap-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </div>
      </div>

      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        onClick={() => dispatch(toggleTheme())}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
}
