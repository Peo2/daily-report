import logo from './logo.svg';
import { Head } from './Components/Header';
import { Entry } from './Components/Main';

function App() {
  return (
    <div className="bg-mainbg h-[844px] pt-20 lg:max-h-[640px] ">
      <div className='  bg-white max-w-[310px] ml-7 h-[400px]  mt-20 lg:max-w-[800px] lg:ml-64 lg:mt-10 lg:pt-12 lg:pl-48'>
      <Head/>
      <Entry/>
      </div>
    </div>
  );
}

export default App;
