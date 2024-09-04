//logo import demo:
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';

// import {  } from './components/ui/card';

function App() {
  return (
    <>
      <div>
        <h2 className='text-3xl'>there is new tailwind property component</h2>
        <h1 className='text-6xl font-bold underline bg-orange-700'>
          Vite + React
        </h1>
        <Button>click me</Button>
        <Card>hhfgfgfgf</Card>
      </div>
    </>
  );
}

export default App;
