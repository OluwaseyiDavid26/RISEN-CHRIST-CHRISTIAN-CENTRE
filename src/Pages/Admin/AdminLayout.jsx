import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const AdminLayout = () => {
    const navigate = useNavigate();
    const auth = getAuth();

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate("/admin/login");
        });
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white flex flex-col">
                <div className="h-16 flex items-center justify-center font-bold text-xl border-b border-gray-700">
                    Admin Dashboard
                </div>
                <nav className="flex-1 px-4 py-6 space-y-2">
                    <Link
                        to="/admin/events"
                        className="block px-4 py-2 rounded hover:bg-gray-800"
                    >
                        Events
                    </Link>
                    <Link
                        to="/admin/livestream"
                        className="block px-4 py-2 rounded hover:bg-gray-800"
                    >
                        Live Stream
                    </Link>
                    <Link
                        to="/admin/resources"
                        className="block px-4 py-2 rounded hover:bg-gray-800"
                    >
                        Resources
                    </Link>
                    <Link
                        to="/admin/commitments"
                        className="block px-4 py-2 rounded hover:bg-gray-800"
                    >
                        Form Submissions
                    </Link>
                </nav>
                <div className="p-4 border-t border-gray-700">
                    <button
                        onClick={handleLogout}
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded transition"
                    >
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-8">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
