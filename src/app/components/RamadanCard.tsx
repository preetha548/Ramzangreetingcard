import { motion } from 'motion/react';
import { Moon, Star, Sparkles } from 'lucide-react';

export function RamadanCard() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 p-4">
      {/* Floating stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-200/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star size={12 + Math.random() * 8} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-2xl w-full"
      >
        <div className="relative bg-gradient-to-br from-emerald-50 to-amber-50 rounded-3xl shadow-2xl overflow-hidden">
          {/* Decorative pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          {/* Top decorative arc with moon */}
          <div className="relative h-48 bg-gradient-to-b from-emerald-700 via-emerald-600 to-transparent">
            <motion.div
              className="absolute top-8 left-1/2 -translate-x-1/2"
              animate={{
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="relative">
                <Moon size={80} className="text-amber-300 fill-amber-200" />
                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                >
                  <Sparkles size={24} className="text-yellow-300" />
                </motion.div>
              </div>
            </motion.div>

            {/* Decorative stars around moon */}
            <motion.div
              className="absolute top-12 left-1/4 text-amber-200"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star size={16} fill="currentColor" />
            </motion.div>
            <motion.div
              className="absolute top-20 right-1/4 text-amber-200"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <Star size={20} fill="currentColor" />
            </motion.div>
          </div>

          {/* Card content */}
          <div className="relative px-8 pb-12 pt-4 text-center">
            {/* Main greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-700 via-amber-600 to-emerald-700 bg-clip-text text-transparent mb-4">
                Ramadan Mubarak
              </h1>
            </motion.div>

            {/* Arabic greeting */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-3xl md:text-4xl mb-6 text-emerald-800 font-semibold"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              رمضان مبارك
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6"
            />

            {/* Message */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-700 max-w-lg mx-auto leading-relaxed"
            >
              May this blessed month bring you peace, prosperity, and countless blessings. 
              Wishing you and your family a blessed Ramadan filled with joy and spiritual growth.
            </motion.p>

            {/* Bottom decorative elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="mt-8 flex justify-center gap-4"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  <Star size={24} className="text-amber-500 fill-amber-400" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom decorative arc */}
          <div className="h-20 bg-gradient-to-t from-emerald-700 to-transparent" />
        </div>

        {/* Outer glow effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-amber-500/20 via-emerald-500/20 to-purple-500/20 blur-2xl rounded-3xl" />
      </motion.div>
    </div>
  );
}
