import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const UserActivityTracker = () => {
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);
  const startTimeRef = useRef(Date.now());
  const clickCountRef = useRef(0);
  const maxScrollRef = useRef(0);

  // Click and scroll event handlers
  const handleClick = () => clickCountRef.current++;
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.floor((scrollTop / docHeight) * 100);
    maxScrollRef.current = Math.max(maxScrollRef.current, scrollPercent);
  };

  // Send data to backend
  const sendUserActivity = (path) => {
    const endTime = Date.now();
    const duration = Math.floor((endTime - startTimeRef.current) / 1000);

    const activity = {
      page: path,
      duration,
      clicks: clickCountRef.current,
      maxScroll: maxScrollRef.current,
      timestamp: new Date().toISOString(),
    };

    navigator.sendBeacon(
      'https://googlecarpointproject.onrender.com/api/user-activity',
      new Blob([JSON.stringify(activity)], { type: 'application/json' })
    );

    // Reset counters
    startTimeRef.current = Date.now();
    clickCountRef.current = 0;
    maxScrollRef.current = 0;
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      sendUserActivity(prevPathRef.current);
      prevPathRef.current = location.pathname;
    }

    return () => {
      sendUserActivity(location.pathname); // in case of unmount
    };
  }, [location]);

  return null;
};

export default UserActivityTracker;
