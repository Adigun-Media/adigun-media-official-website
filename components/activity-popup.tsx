"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NIGERIAN_NAMES, SERVICE_NAMES } from "@/lib/constants";
import { X } from "lucide-react";
import { ActivityNotification } from "@/lib/types";

const generateRandomActivity = (): ActivityNotification => {
  const randomName =
    NIGERIAN_NAMES[Math.floor(Math.random() * NIGERIAN_NAMES.length)];
  const randomService =
    SERVICE_NAMES[Math.floor(Math.random() * SERVICE_NAMES.length)];

  return {
    id: Math.random().toString(36).substr(2, 9),
    name: randomName,
    service: randomService,
    timestamp: new Date(),
  };
};

export function ActivityPopup() {
  const [activity, setActivity] = useState<ActivityNotification | null>(null);
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Show initial activity
    setActivity(generateRandomActivity());

    // Generate new activity every 60 seconds
    const interval = setInterval(() => {
      setActivity(generateRandomActivity());
    }, 60000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const removeActivity = () => {
    setActivity(null);
  };

  // Don't show on mobile to prevent scroll blocking
  if (isMobile) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 max-w-sm pointer-events-none">
      <AnimatePresence>
        {activity && (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: 100, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            onAnimationComplete={() => {
              // Auto-remove after 8 seconds
              const timer = setTimeout(() => removeActivity(), 8000);
              return () => clearTimeout(timer);
            }}
            className="mb-3 bg-background border border-border rounded-lg p-4 shadow-lg backdrop-blur-sm pointer-events-auto"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3 flex-1">
                <div className="text-2xl flex-shrink-0">✨</div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground text-sm">
                    {activity.name}{" "}
                    <span className="text-accent">inquired</span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {activity.service}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeActivity()}
                className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors pointer-events-auto"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
