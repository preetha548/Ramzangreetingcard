import { Link } from 'react-router';
import { Search, MapPin, Calendar, Star, ArrowRight } from 'lucide-react';
import { destinations } from '../data/destinations';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { motion } from 'motion/react';

export function HomePage() {
  const featuredDestinations = destinations.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1714412192114-61dca8f15f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzczOTcyMDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Explore the World
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-100"
          >
            Discover amazing destinations and create unforgettable memories
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/destinations">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                Browse Destinations
                <ArrowRight className="ml-2 size-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="size-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Amazing Destinations</h3>
              <p className="text-gray-600">
                Handpicked destinations from around the world to suit every traveler
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="size-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Planning</h3>
              <p className="text-gray-600">
                Plan your perfect trip with our intuitive booking system
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="size-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Experiences</h3>
              <p className="text-gray-600">
                Curated experiences to make your journey truly memorable
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Destinations</h2>
            <p className="text-xl text-gray-600">
              Start your journey with these popular destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/destinations/${destination.id}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
                        ${destination.price}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-1">{destination.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{destination.country}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="size-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{destination.rating}</span>
                          <span className="text-sm text-gray-500">({destination.reviews})</span>
                        </div>
                        <span className="text-sm text-gray-600">{destination.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/destinations">
              <Button variant="outline" size="lg">
                View All Destinations
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready for Your Next Adventure?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of happy travelers and start exploring the world today
            </p>
            <Link to="/destinations">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Exploring
                <ArrowRight className="ml-2 size-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
