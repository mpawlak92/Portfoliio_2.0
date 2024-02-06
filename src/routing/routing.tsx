import { Route, Routes } from 'react-router-dom';

import HomePage from '../layout/Home';
import PortfolioPage from '../layout/Portfolio';

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/temp" element={<PortfolioPage />} />
      </Routes>
    </>
  );
};
export default Routing;
