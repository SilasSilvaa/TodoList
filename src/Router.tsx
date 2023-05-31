import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Layout } from './layouts/DefaultLayout';
import { Completed } from './pages/Completed';
import { NotFound } from './pages/NotFound';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/completed" element={<Completed />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
