import { useState } from 'react';
import { routes } from '../data/bikes';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { MapPin, Clock, TrendingUp, Star, Mountain, Bike } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';

export function RoutesPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const difficulties = ['all', 'easy', 'moderate', 'hard', 'expert'];

  const filteredRoutes = routes.filter((route) => {
    return selectedDifficulty === 'all' || route.difficulty === selectedDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-orange-100 text-orange-800';
      case 'expert':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cycling Routes</h1>
            <p className="text-xl text-green-100">
              Discover scenic trails and exciting paths for your next ride
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Difficulty Filter */}
        <div className="mb-8">
          <div className="flex items-center gap-2 flex-wrap">
            <Mountain className="size-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Difficulty:</span>
            {difficulties.map((difficulty) => (
              <Button
                key={difficulty}
                variant={selectedDifficulty === difficulty ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedDifficulty(difficulty)}
                className="capitalize"
              >
                {difficulty}
              </Button>
            ))}
          </div>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredRoutes.map((route, index) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full">
                <div className="relative h-64">
                  <img
                    src={route.image}
                    alt={route.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge
                    className={`absolute top-4 left-4 capitalize ${getDifficultyColor(
                      route.difficulty
                    )}`}
                  >
                    {route.difficulty}
                  </Badge>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {route.name}
                    </h3>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4 text-gray-600">
                    <MapPin className="size-4" />
                    <span>{route.location}</span>
                  </div>

                  <p className="text-gray-700 mb-6">{route.description}</p>

                  {/* Route Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <MapPin className="size-4 text-gray-500" />
                      </div>
                      <p className="text-sm text-gray-600">Distance</p>
                      <p className="font-semibold text-gray-900">{route.distance}</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Clock className="size-4 text-gray-500" />
                      </div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-semibold text-gray-900">{route.duration}</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <TrendingUp className="size-4 text-gray-500" />
                      </div>
                      <p className="text-sm text-gray-600">Elevation</p>
                      <p className="font-semibold text-gray-900">{route.elevation}</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {route.highlights.map((highlight, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Best Bike Types */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-3">Recommended Bikes</h4>
                    <div className="flex flex-wrap gap-2">
                      {route.bestBikeType.map((bikeType, i) => (
                        <Badge key={i} className="capitalize bg-green-600">
                          <Bike className="size-3 mr-1" />
                          {bikeType}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <Star className="size-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{route.rating}</span>
                      <span className="text-sm text-gray-500">({route.reviews} reviews)</span>
                    </div>
                    <Button size="sm">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredRoutes.length === 0 && (
          <div className="text-center py-16">
            <MapPin className="size-24 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600 mb-4">No routes found</p>
            <Button onClick={() => setSelectedDifficulty('all')}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
