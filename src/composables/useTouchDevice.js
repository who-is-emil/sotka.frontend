export function useTouchDevice() {
  const isTouchDevice = () => {
    return (
      !!(
        typeof window !== 'undefined' &&
        ('ontouchstart' in window || (window.DocumentTouch && typeof document !== 'undefined' && document instanceof window.DocumentTouch))
      ) || !!(typeof navigator !== 'undefined' && (navigator.maxTouchPoints || navigator.msMaxTouchPoints))
    );
  };

  return {
    isTouchDevice,
  };
}
