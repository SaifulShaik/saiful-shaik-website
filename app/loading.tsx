export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative">
        {/* Main loading animation */}
        <div className="flex flex-col items-center space-y-8">
          {/* Animated logo */}
          <div className="relative">
            <div className="text-4xl font-bold text-primary animate-pulse">
              Saiful Shaik
            </div>
            <div className="absolute -inset-4">
              <div className="w-24 h-24 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
            </div>
          </div>
          
          {/* Loading text */}
          <div className="text-text-secondary">
            Loading...
          </div>
          
          {/* Progress dots */}
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
