import { Route, Routes } from 'react-router-dom'
import { GlobalPageLayout } from './layout/GlobalPageLayout'
import { Homepage } from './pages/Homepage'
import { WatchListPage } from './pages/WatchListPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<GlobalPageLayout />}>
        <Route index element={<Homepage />} />
        <Route path='/watch_list' element={<WatchListPage />} />
      </Route>
    </Routes>
  );
}

export default App
