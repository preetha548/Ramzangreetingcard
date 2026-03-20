import { Link } from 'react-router';
import { Bike, MapPin, Clock, Star, ArrowRight, Shield, Zap } from 'lucide-react';
import { bikes } from '../data/bikes';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { motion } from 'motion/react';
import { Badge } from '../components/ui/badge';

export function HomePage() {
  const featuredBikes = bikes.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1468352965811-8b57e9a0781f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGJpa2luZyUyMGFkdmVudHVyZSUyMHN1bnNldHxlbnwxfHx8fDE3NzM5OTAwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Ride the Adventure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-100"
          >
            Rent premium bikes and explore breathtaking routes
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Link to="/bikes">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6">
                <Bike className="mr-2 size-5" />
                Browse Bikes
              </Button>
            </Link>
            <Link to="/routes">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
                <MapPin className="mr-2 size-5" />
                View Routes
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
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Bike className="size-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Bikes</h3>
              <p className="text-gray-600">
                Top-quality bikes for every riding style and experience level
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="size-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Curated Routes</h3>
              <p className="text-gray-600">
                Discover the best cycling routes from scenic trails to city tours
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
                <Shield className="size-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Insured</h3>
              <p className="text-gray-600">
                All rentals include insurance and 24/7 roadside assistance
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Bikes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Bikes</h2>
            <p className="text-xl text-gray-600">
              Choose from our premium selection of bikes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBikes.map((bike, index) => (
              <motion.div
                key={bike.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/bikes/${bike.id}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group h-full">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={bike.image}
                        alt={bike.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 capitalize bg-white text-gray-900">
                        {bike.type}
                      </Badge>
                      <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full font-semibold">
                        ${bike.pricePerDay}/day
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-bold text-xl mb-1">{bike.name}</h3>
                      <p className="text-gray-600 mb-3">{bike.brand}</p>
                      <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                        {bike.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="size-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{bike.rating}</span>
                          <span className="text-sm text-gray-500">({bike.reviews})</span>
                        </div>
                        <span className={`text-sm px-2 py-1 rounded ${bike.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {bike.available ? 'Available' : 'Rented'}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/bikes">
              <Button variant="outline" size="lg">
                View All Bikes
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              Get riding in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Bike</h3>
              <p className="text-gray-600">
                Browse our selection and pick the perfect bike for your adventure
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Book & Pay</h3>
              <p className="text-gray-600">
                Select your dates, complete the booking, and you're all set
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Riding</h3>
              <p className="text-gray-600">
                Pick up your bike and hit the road for an amazing experience
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Adventure?</h2>
            <p className="text-xl mb-8 text-green-100">
              Join thousands of cyclists and explore the best routes today
            </p>
            <Link to="/bikes">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Rent a Bike Now
                <ArrowRight className="ml-2 size-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
