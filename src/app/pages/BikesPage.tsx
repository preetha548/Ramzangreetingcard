import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { Search, Star, Filter, Bike as BikeIcon } from 'lucide-react';
import { bikes } from '../data/bikes';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { motion } from 'motion/react';

export function BikesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedAvailability, setSelectedAvailability] = useState<string>('all');

  const types = ['all', 'mountain', 'road', 'electric', 'city', 'hybrid', 'bmx'];

  const filteredBikes = useMemo(() => {
    return bikes.filter((bike) => {
      const matchesSearch =
        bike.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bike.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bike.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesType = selectedType === 'all' || bike.type === selectedType;
      const matchesAvailability = 
        selectedAvailability === 'all' || 
        (selectedAvailability === 'available' && bike.available) ||
        (selectedAvailability === 'rented' && !bike.available);

      return matchesSearch && matchesType && matchesAvailability;
    });
  }, [searchQuery, selectedType, selectedAvailability]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Browse Bikes</h1>
            <p className="text-xl text-green-100">
              Find the perfect bike for your next adventure
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search bikes by name or brand..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6 text-lg"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="size-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Type:</span>
              {types.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedType(type)}
                  className="capitalize"
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium text-gray-700">Availability:</span>
            {['all', 'available', 'rented'].map((availability) => (
              <Button
                key={availability}
                variant={selectedAvailability === availability ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedAvailability(availability)}
                className="capitalize"
              >
                {availability}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Found <span className="font-semibold text-gray-900">{filteredBikes.length}</span> bike
            {filteredBikes.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Bikes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBikes.map((bike, index) => (
            <motion.div
              key={bike.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link to={`/bikes/${bike.id}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={bike.image}
                      alt={bike.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white text-gray-900 capitalize">
                        {bike.type}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full font-semibold">
                      ${bike.pricePerDay}/day
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Badge className={bike.available ? 'bg-green-500' : 'bg-red-500'}>
                        {bike.available ? 'Available' : 'Rented'}
                      </Badge>
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
                      <span className="text-sm text-gray-600 font-medium">${bike.pricePerWeek}/week</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredBikes.length === 0 && (
          <div className="text-center py-16">
            <BikeIcon className="size-24 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600 mb-4">No bikes found</p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setSelectedType('all');
                setSelectedAvailability('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
