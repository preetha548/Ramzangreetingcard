import { Outlet, Link, useLocation } from 'react-router';
import { Plane, MapPin, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function RootLayout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/my-trips', label: 'My Trips' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-2 rounded-lg">
                <Plane className="size-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                WanderWorld
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors ${
                    isActive(link.path)
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 px-4 ${
                    isActive(link.path)
                      ? 'text-blue-600 font-semibold bg-blue-50'
                      : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Plane className="size-6" />
                <span className="text-xl font-bold">WanderWorld</span>
              </div>
              <p className="text-gray-400">
                Discover amazing destinations around the world and create unforgettable memories.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
                <li><Link to="/my-trips" className="hover:text-white transition-colors">My Trips</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@wanderworld.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Travel St, Adventure City</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2026 WanderWorld. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
