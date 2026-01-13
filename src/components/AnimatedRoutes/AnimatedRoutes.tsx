import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { FeedPage } from '../../pages/Feed';
import { WatchPage } from '../../pages/Watch';
import { PageTransition } from '../PageTransition';
import { NavigationProgress } from '../NavigationProgress';

export function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <NavigationProgress />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <FeedPage />
            </PageTransition>
          }
        />
        <Route
          path="/watch/:videoId"
          element={
            <PageTransition>
              <WatchPage />
            </PageTransition>
          }
        />
        <Route
          path="/shorts/:videoId"
          element={
            <PageTransition>
              <WatchPage />
            </PageTransition>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
    </>
  );
}
