function circuitBreaker(originalFunction, 
failureThreshold, recoveryTime) {
  let failureCount = 0;
  let lastFailureTime = null;
  let isOpen = false;

  return function(...args) {
    if (isOpen) {
      const timeSinceFailure = new Date() - lastFailureTime;
      if (timeSinceFailure > recoveryTime) {
        isOpen = false;
      } else {
        throw new Error('Service is unavailable');
      }
    }

    try {
      const result = originalFunction(...args);
      failureCount = 0;
      return result;
    } catch (error) {
      failureCount++;
      lastFailureTime = new Date();

      if (failureCount >= failureThreshold) {
        isOpen = true;
      }

      throw error;
    }
  };
}
