import { useParams, Link } from 'react-router';
import { destinations } from '../data/destinations';
import { Star, MapPin, Calendar, Clock, ArrowLeft, Heart, Share2, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { motion } from 'motion/react';
import { useState } from 'react';
import { toast } from 'sonner';

export function DestinationDetailPage() {
  const { id } = useParams();
  const destination = destinations.find((d) => d.id === id);
  const [isBookmarked, setIsBookmarked] = useState(false);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Destination not found</h1>
          <Link to="/destinations">
            <Button>Back to Destinations</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleBookTrip = () => {
    toast.success(`Trip to ${destination.name} added to your trips!`);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast.success(isBookmarked ? 'Removed from favorites' : 'Added to favorites');
  };

  const handleShare = () => {
    toast.success('Link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-[500px]">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Back Button */}
        <div className="absolute top-8 left-4 sm:left-8">
          <Link to="/destinations">
            <Button variant="secondary" className="gap-2">
              <ArrowLeft className="size-4" />
              Back
            </Button>
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-8 right-4 sm:right-8 flex gap-2">
          <Button
            variant="secondary"
            size="icon"
            onClick={handleBookmark}
            className={isBookmarked ? 'bg-red-500 hover:bg-red-600 text-white' : ''}
          >
            <Heart className={`size-5 ${isBookmarked ? 'fill-white' : ''}`} />
          </Button>
          <Button variant="secondary" size="icon" onClick={handleShare}>
            <Share2 className="size-5" />
          </Button>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 capitalize bg-white text-gray-900">
                {destination.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {destination.name}
              </h1>
              <div className="flex items-center gap-4 text-white">
                <div className="flex items-center gap-1">
                  <MapPin className="size-5" />
                  <span className="text-lg">{destination.country}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">{destination.rating}</span>
                  <span className="text-gray-200">({destination.reviews} reviews)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">About This Destination</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {destination.description}
                </p>
              </CardContent>
            </Card>

            {/* Highlights */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Best Time to Visit */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Best Time to Visit</h2>
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar className="size-6 text-blue-600" />
                  <span className="text-lg">{destination.bestTimeToVisit}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    ${destination.price}
                  </div>
                  <p className="text-gray-600">per person</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock className="size-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Duration</p>
                      <p className="text-sm text-gray-600">{destination.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="size-5 text-gray-500" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-gray-600">
                        {destination.country}, {destination.continent}
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full py-6 text-lg"
                  onClick={handleBookTrip}
                >
                  Book This Trip
                </Button>

                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-600 text-center">
                    Free cancellation up to 48 hours before departure
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Destinations */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destinations
              .filter((d) => d.id !== destination.id && d.category === destination.category)
              .slice(0, 3)
              .map((dest) => (
                <Link key={dest.id} to={`/destinations/${dest.id}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full font-semibold">
                        ${dest.price}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-1">{dest.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{dest.country}</p>
                      <div className="flex items-center gap-1">
                        <Star className="size-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{dest.rating}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
