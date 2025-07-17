const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="relative">
        {/* Animated logo */}
        <div className="text-4xl font-bold text-primary animate-pulse">
          SS
        </div>
        
        {/* Loading spinner */}
        <div className="absolute -inset-4">
          <div className="w-16 h-16 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        </div>
        
        {/* Progress dots */}
        <div className="flex space-x-2 mt-8 justify-center">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
