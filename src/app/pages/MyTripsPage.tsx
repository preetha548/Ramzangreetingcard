import { useState } from 'react';
import { Link } from 'react-router';
import { Calendar, MapPin, Clock, Trash2, Plus } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { motion } from 'motion/react';

interface Trip {
  id: string;
  destinationId: string;
  destinationName: string;
  destinationImage: string;
  country: string;
  startDate: string;
  endDate: string;
  travelers: number;
  price: number;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export function MyTripsPage() {
  const [trips, setTrips] = useState<Trip[]>([
    {
      id: '1',
      destinationId: '1',
      destinationName: 'Maldives',
      destinationImage: 'https://images.unsplash.com/photo-1714412192114-61dca8f15f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzczOTcyMDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      country: 'Maldives',
      startDate: '2026-04-15',
      endDate: '2026-04-22',
      travelers: 2,
      price: 4998,
      status: 'upcoming',
    },
    {
      id: '2',
      destinationId: '2',
      destinationName: 'Paris',
      destinationImage: 'https://images.unsplash.com/photo-1725806760874-96040618865c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMGNpdHklMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzczOTM4NzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      country: 'France',
      startDate: '2025-12-10',
      endDate: '2025-12-16',
      travelers: 1,
      price: 1899,
      status: 'completed',
    },
  ]);

  const [activeTab, setActiveTab] = useState<'all' | 'upcoming' | 'completed'>('all');

  const filteredTrips = trips.filter((trip) => {
    if (activeTab === 'all') return true;
    return trip.status === activeTab;
  });

  const handleDeleteTrip = (tripId: string) => {
    setTrips(trips.filter((trip) => trip.id !== tripId));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Trips</h1>
            <p className="text-xl text-blue-100">
              Manage your travel plans and view your trip history
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b">
          {['all', 'upcoming', 'completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              className={`px-4 py-2 font-medium capitalize transition-colors ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {tab}
              {tab !== 'all' && (
                <span className="ml-2 text-sm">
                  ({trips.filter((t) => t.status === tab).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Trips List */}
        {filteredTrips.length > 0 ? (
          <div className="space-y-6">
            {filteredTrips.map((trip, index) => (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-4">
                    {/* Image */}
                    <div className="relative h-48 md:h-auto">
                      <img
                        src={trip.destinationImage}
                        alt={trip.destinationName}
                        className="w-full h-full object-cover"
                      />
                      <Badge
                        className={`absolute top-4 right-4 capitalize ${getStatusColor(
                          trip.status
                        )}`}
                      >
                        {trip.status}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-3 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{trip.destinationName}</h3>
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="size-4" />
                            <span>{trip.country}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">
                            ${trip.price}
                          </div>
                          <p className="text-sm text-gray-600">
                            {trip.travelers} {trip.travelers === 1 ? 'traveler' : 'travelers'}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-3">
                          <Calendar className="size-5 text-gray-500" />
                          <div>
                            <p className="text-sm text-gray-600">Check-in</p>
                            <p className="font-medium">
                              {new Date(trip.startDate).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Calendar className="size-5 text-gray-500" />
                          <div>
                            <p className="text-sm text-gray-600">Check-out</p>
                            <p className="font-medium">
                              {new Date(trip.endDate).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Link to={`/destinations/${trip.destinationId}`} className="flex-1">
                          <Button variant="outline" className="w-full">
                            View Details
                          </Button>
                        </Link>
                        {trip.status === 'upcoming' && (
                          <Button
                            variant="destructive"
                            onClick={() => handleDeleteTrip(trip.id)}
                            className="gap-2"
                          >
                            <Trash2 className="size-4" />
                            Cancel
                          </Button>
                        )}
                        {trip.status === 'completed' && (
                          <Button
                            variant="outline"
                            onClick={() => handleDeleteTrip(trip.id)}
                            className="gap-2"
                          >
                            <Trash2 className="size-4" />
                            Remove
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <MapPin className="size-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">No trips found</h3>
            <p className="text-gray-600 mb-6">
              {activeTab === 'all'
                ? "You haven't booked any trips yet"
                : `No ${activeTab} trips`}
            </p>
            <Link to="/destinations">
              <Button className="gap-2">
                <Plus className="size-4" />
                Browse Destinations
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
