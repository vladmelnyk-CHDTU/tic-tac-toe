import { RootState } from '@/store/store';
import { logout } from '@/store/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router';
const Navbar = () => {
  const userName = useSelector((state: RootState) => state.user.name);
  const dispatch = useDispatch();

  return (
    <nav className="w-full flex justify-center py-4">
      <ul className="flex gap-4 items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <div className="h-1/2 border border-white" />
        {userName !== null ? (
          <>
            <li>{userName}</li>
            <li>
              <button onClick={() => dispatch(logout())}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
