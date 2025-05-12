
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const classSchedule = {
  Monday: [
    { time: '06:00 AM', name: 'Morning HIIT', trainer: 'Alex Morgan', duration: '45 min', intensity: 'High', spots: '10/20' },
    { time: '09:00 AM', name: 'Yoga Flow', trainer: 'Leila Chen', duration: '60 min', intensity: 'Medium', spots: '8/15' },
    { time: '12:00 PM', name: 'Core Power', trainer: 'Marcus Williams', duration: '45 min', intensity: 'Medium', spots: '12/20' },
    { time: '05:30 PM', name: 'Strength Training', trainer: 'Alex Morgan', duration: '60 min', intensity: 'High', spots: '15/20' },
    { time: '07:00 PM', name: 'Spin Class', trainer: 'Sarah Johnson', duration: '45 min', intensity: 'High', spots: '18/25' },
  ],
  Tuesday: [
    { time: '07:00 AM', name: 'CrossTraining', trainer: 'Marcus Williams', duration: '60 min', intensity: 'High', spots: '12/20' },
    { time: '10:00 AM', name: 'Pilates', trainer: 'Leila Chen', duration: '60 min', intensity: 'Low', spots: '10/15' },
    { time: '12:00 PM', name: 'Express Burn', trainer: 'Sarah Johnson', duration: '30 min', intensity: 'Medium', spots: '8/15' },
    { time: '06:00 PM', name: 'Kettlebell Flow', trainer: 'Marcus Williams', duration: '45 min', intensity: 'Medium', spots: '14/20' },
    { time: '07:30 PM', name: 'Power Yoga', trainer: 'Leila Chen', duration: '60 min', intensity: 'Medium', spots: '12/20' },
  ],
  Wednesday: [
    { time: '06:00 AM', name: 'Cardio Kickboxing', trainer: 'Marcus Williams', duration: '45 min', intensity: 'High', spots: '15/20' },
    { time: '09:30 AM', name: 'Mobility Flow', trainer: 'Leila Chen', duration: '45 min', intensity: 'Low', spots: '10/15' },
    { time: '12:00 PM', name: 'Express Abs', trainer: 'Alex Morgan', duration: '30 min', intensity: 'Medium', spots: '16/20' },
    { time: '05:30 PM', name: 'Circuit Training', trainer: 'Sarah Johnson', duration: '60 min', intensity: 'High', spots: '18/20' },
    { time: '07:00 PM', name: 'Body Sculpt', trainer: 'Alex Morgan', duration: '45 min', intensity: 'Medium', spots: '14/20' },
  ],
  Thursday: [
    { time: '07:00 AM', name: 'HIIT Rush', trainer: 'Marcus Williams', duration: '45 min', intensity: 'High', spots: '12/20' },
    { time: '10:00 AM', name: 'Senior Fitness', trainer: 'Sarah Johnson', duration: '60 min', intensity: 'Low', spots: '8/15' },
    { time: '12:00 PM', name: 'Core Crusher', trainer: 'Alex Morgan', duration: '30 min', intensity: 'Medium', spots: '15/20' },
    { time: '06:00 PM', name: 'Power Lifting', trainer: 'Alex Morgan', duration: '60 min', intensity: 'High', spots: '10/15' },
    { time: '07:30 PM', name: 'Yoga Restore', trainer: 'Leila Chen', duration: '60 min', intensity: 'Low', spots: '12/20' },
  ],
  Friday: [
    { time: '06:00 AM', name: 'Morning Circuit', trainer: 'Marcus Williams', duration: '45 min', intensity: 'High', spots: '14/20' },
    { time: '09:00 AM', name: 'Pilates', trainer: 'Leila Chen', duration: '60 min', intensity: 'Medium', spots: '10/15' },
    { time: '12:00 PM', name: 'Express HIIT', trainer: 'Sarah Johnson', duration: '30 min', intensity: 'High', spots: '15/20' },
    { time: '05:30 PM', name: 'Full Body Strength', trainer: 'Alex Morgan', duration: '60 min', intensity: 'Medium', spots: '16/20' },
    { time: '07:00 PM', name: 'Friday Night Dance', trainer: 'Sarah Johnson', duration: '60 min', intensity: 'Medium', spots: '20/25' },
  ],
  Saturday: [
    { time: '08:00 AM', name: 'Weekend Warriors', trainer: 'Marcus Williams', duration: '60 min', intensity: 'High', spots: '18/20' },
    { time: '10:00 AM', name: 'Family Fitness', trainer: 'Sarah Johnson', duration: '45 min', intensity: 'Low', spots: '15/20' },
    { time: '12:00 PM', name: 'Yoga Flow', trainer: 'Leila Chen', duration: '60 min', intensity: 'Medium', spots: '12/15' },
    { time: '02:00 PM', name: 'Strength & Conditioning', trainer: 'Alex Morgan', duration: '60 min', intensity: 'Medium', spots: '14/20' },
  ],
  Sunday: [
    { time: '09:00 AM', name: 'Sunday Stretch', trainer: 'Leila Chen', duration: '45 min', intensity: 'Low', spots: '10/15' },
    { time: '11:00 AM', name: 'Bodyweight Basics', trainer: 'Marcus Williams', duration: '45 min', intensity: 'Medium', spots: '12/20' },
    { time: '01:00 PM', name: 'Core & More', trainer: 'Sarah Johnson', duration: '45 min', intensity: 'Medium', spots: '14/20' },
  ],
};

const ClassSchedule = () => {
  const [activeDay, setActiveDay] = useState('Monday');
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const getIntensityColor = (intensity: string) => {
    switch (intensity.toLowerCase()) {
      case 'low':
        return 'bg-green-500/20 text-green-400';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'high':
        return 'bg-primary/20 text-primary';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };
  
  return (
    <section className="py-20 bg-gym-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold text-sm uppercase tracking-wider mb-3 reveal">Weekly Schedule</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 reveal animate-delay-100">
            Plan Your <span className="gradient-text">Workout Week</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto reveal animate-delay-200">
            Find the perfect class that fits your schedule. Join us for a variety of engaging workouts throughout the week.
          </p>
        </div>
        
        <div className="reveal animate-delay-300">
          <Tabs defaultValue="Monday" onValueChange={setActiveDay}>
            <TabsList className="grid grid-cols-7 mb-8">
              {daysOfWeek.map((day) => (
                <TabsTrigger 
                  key={day} 
                  value={day}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white py-3"
                >
                  <span className="hidden md:inline">{day}</span>
                  <span className="md:hidden">{day.substring(0, 3)}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {daysOfWeek.map((day) => (
              <TabsContent key={day} value={day}>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead className="bg-black/30">
                      <tr>
                        <th className="px-4 py-3 text-left text-white">Time</th>
                        <th className="px-4 py-3 text-left text-white">Class</th>
                        <th className="px-4 py-3 text-left text-white">Trainer</th>
                        <th className="px-4 py-3 text-left text-white">Duration</th>
                        <th className="px-4 py-3 text-left text-white">Intensity</th>
                        <th className="px-4 py-3 text-left text-white">Availability</th>
                        <th className="px-4 py-3 text-left text-white"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {classSchedule[day as keyof typeof classSchedule].map((classItem, index) => (
                        <tr 
                          key={index} 
                          className={`border-b border-gray-800 hover:bg-black/30 transition-colors ${index % 2 === 0 ? 'bg-black/10' : ''}`}
                        >
                          <td className="px-4 py-4 text-white">{classItem.time}</td>
                          <td className="px-4 py-4 text-white font-medium">{classItem.name}</td>
                          <td className="px-4 py-4 text-gray-300">{classItem.trainer}</td>
                          <td className="px-4 py-4 text-gray-300">{classItem.duration}</td>
                          <td className="px-4 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getIntensityColor(classItem.intensity)}`}>
                              {classItem.intensity}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-gray-300">{classItem.spots}</td>
                          <td className="px-4 py-4 text-right">
                            <button className="bg-primary hover:bg-primary/80 text-white px-4 py-1 rounded-full text-sm">
                              Book
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ClassSchedule;
