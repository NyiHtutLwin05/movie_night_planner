import React, { useState } from "react";
import {
  Calendar,
  Film,
  Users,
  MessageCircle,
  Search,
  Lock,
  Globe,
  MessageSquare,
} from "lucide-react";
import { format } from "date-fns";

function App() {
  const [showCreateEvent, setShowCreateEvent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-text">
      {/* Header */}
      <header className="border-b border-background-lighter">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Film className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold">Movie Night Planner</h1>
            </div>
            <button
              onClick={() => setShowCreateEvent(true)}
              className="px-4 py-2 bg-primary hover:bg-primary-dark rounded-lg font-medium transition-colors"
            >
              Create Event
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {showCreateEvent ? (
        <CreateEventPage onClose={() => setShowCreateEvent(false)} />
      ) : (
        <LandingPage />
      )}
    </div>
  );
}

function CreateEventPage({ onClose }: { onClose: () => void }) {
  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    date: format(new Date(), "yyyy-MM-dd"),
    time: "19:00",
    theme: "general",
    isPublic: false,
    enableVoting: true,
    enableChat: true,
  });

  const themes = [
    { value: "general", label: "🎬 General" },
    { value: "horror", label: "🎃 Horror" },
    { value: "romance", label: "❤️ Romance" },
    { value: "comedy", label: "🎉 Comedy" },
    { value: "action", label: "💥 Action" },
    { value: "scifi", label: "🚀 Sci-Fi" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Event data:", eventData);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          🍿 Plan Your Movie Night!
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-background-lighter rounded-xl p-8 shadow-lg"
        >
          {/* Event Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Event Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Event Name
                </label>
                <input
                  type="text"
                  value={eventData.name}
                  onChange={(e) =>
                    setEventData({ ...eventData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-background rounded-lg border border-background-lighter focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="Weekend Movie Marathon"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <textarea
                  value={eventData.description}
                  onChange={(e) =>
                    setEventData({ ...eventData, description: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-background rounded-lg border border-background-lighter focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors h-24"
                  placeholder="Let's wear pajamas and watch our favorite movies!"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <input
                    type="date"
                    value={eventData.date}
                    onChange={(e) =>
                      setEventData({ ...eventData, date: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-background rounded-lg border border-background-lighter focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Time</label>
                  <input
                    type="time"
                    value={eventData.time}
                    onChange={(e) =>
                      setEventData({ ...eventData, time: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-background rounded-lg border border-background-lighter focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Theme</label>
                <select
                  value={eventData.theme}
                  onChange={(e) =>
                    setEventData({ ...eventData, theme: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-background rounded-lg border border-background-lighter focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                >
                  {themes.map((theme) => (
                    <option key={theme.value} value={theme.value}>
                      {theme.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {/* Movie Search */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Movie Suggestions</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted w-5 h-5" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 bg-background rounded-lg border border-background-lighter focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                placeholder="Search for movies..."
              />
            </div>
          </section>

          {/* Invite Friends */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Invite Friends</h2>
            <button className="px-4 py-2 bg-primary hover:bg-primary-dark rounded-lg font-medium transition-colors">
              Generate Invite Link
            </button>
          </section>

          {/* Event Settings */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Event Settings</h2>
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={eventData.isPublic}
                  onChange={(e) =>
                    setEventData({ ...eventData, isPublic: e.target.checked })
                  }
                  className="w-5 h-5 rounded border-background-lighter text-primary focus:ring-primary"
                />
                <span className="flex items-center space-x-2">
                  {eventData.isPublic ? (
                    <Globe className="w-5 h-5" />
                  ) : (
                    <Lock className="w-5 h-5" />
                  )}
                  <span>Make event public</span>
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={eventData.enableVoting}
                  onChange={(e) =>
                    setEventData({
                      ...eventData,
                      enableVoting: e.target.checked,
                    })
                  }
                  className="w-5 h-5 rounded border-background-lighter text-primary focus:ring-primary"
                />
                <span className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>Enable movie voting</span>
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={eventData.enableChat}
                  onChange={(e) =>
                    setEventData({ ...eventData, enableChat: e.target.checked })
                  }
                  className="w-5 h-5 rounded border-background-lighter text-primary focus:ring-primary"
                />
                <span className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5" />
                  <span>Enable chat room</span>
                </span>
              </label>
            </div>
          </section>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-background rounded-lg font-medium transition-colors hover:bg-background-lighter"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-primary hover:bg-primary-dark rounded-lg font-medium transition-colors"
            >
              🎬 Create Event
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

function LandingPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Plan Your Perfect Movie Night
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Create memorable movie nights with friends. Vote on films, chat in
          real-time, and make every viewing special.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          icon={<Calendar className="w-6 h-6" />}
          title="Easy Scheduling"
          description="Pick a date and time that works for everyone with our calendar sync feature."
        />
        <FeatureCard
          icon={<Users className="w-6 h-6" />}
          title="Group Voting"
          description="Vote on movie suggestions and make decisions together in real-time."
        />
        <FeatureCard
          icon={<MessageCircle className="w-6 h-6" />}
          title="Live Chat"
          description="Chat with friends before the movie starts and during breaks."
        />
      </div>

      {/* Movie Night Preview */}
      <div className="mt-16 bg-background-lighter rounded-xl p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80"
              alt="Movie night setup"
              className="rounded-lg w-full h-[300px] object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">
              Upcoming: Horror Movie Marathon
            </h3>
            <p className="text-text-muted mb-4">
              Join us this Friday for a spine-chilling night of classic horror
              films. Vote for your favorites and bring your courage!
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-primary">8 friends joined</span>
              <span className="text-text-muted">•</span>
              <span className="text-text-muted">4 movies suggested</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-background-lighter p-6 rounded-xl">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-text-muted">{description}</p>
    </div>
  );
}

export default App;
