import { Link } from 'react-router';
import { Home, Bike } from 'lucide-react';
import { Button } from '../components/ui/button';
import { motion } from 'motion/react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="mb-8">
          <Bike className="size-24 text-green-600 mx-auto mb-4" />
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Route Not Found
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
            Looks like you've taken a wrong turn. Let's get you back on track!
          </p>
        </div>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/">
            <Button size="lg" className="gap-2">
              <Home className="size-5" />
              Go Home
            </Button>
          </Link>
          <Link to="/bikes">
            <Button size="lg" variant="outline" className="gap-2">
              <Bike className="size-5" />
              Browse Bikes
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}