import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { Search, Star, Filter } from 'lucide-react';
import { destinations } from '../data/destinations';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { motion } from 'motion/react';

export function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedContinent, setSelectedContinent] = useState<string>('all');

  const categories = ['all', 'beach', 'city', 'adventure', 'culture', 'nature'];
  const continents = ['all', ...Array.from(new Set(destinations.map(d => d.continent)))];

  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      const matchesSearch =
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || dest.category === selectedCategory;
      const matchesContinent = selectedContinent === 'all' || dest.continent === selectedContinent;

      return matchesSearch && matchesCategory && matchesContinent;
    });
  }, [searchQuery, selectedCategory, selectedContinent]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Destinations</h1>
            <p className="text-xl text-blue-100">
              Find your perfect travel destination from our curated collection
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
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6 text-lg"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="size-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Category:</span>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium text-gray-700">Continent:</span>
            {continents.map((continent) => (
              <Button
                key={continent}
                variant={selectedContinent === continent ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedContinent(continent)}
                className="capitalize"
              >
                {continent}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Found <span className="font-semibold text-gray-900">{filteredDestinations.length}</span> destination
            {filteredDestinations.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link to={`/destinations/${destination.id}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white text-gray-900 capitalize">
                        {destination.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">
                      ${destination.price}
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-xl mb-1">{destination.name}</h3>
                    <p className="text-gray-600 mb-3">{destination.country}</p>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                      {destination.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="size-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{destination.rating}</span>
                        <span className="text-sm text-gray-500">({destination.reviews})</span>
                      </div>
                      <span className="text-sm text-gray-600 font-medium">{destination.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 mb-4">No destinations found</p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedContinent('all');
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
