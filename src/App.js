
import Stories from './Components/Stories'
import Chats from './Components/Chats'


function App() {
  return (
    <>
      <div className="flex justify-center bg-gray-300 bg-fixed">
      <section className="flex-col overflow-hidden bg-blue-100 w-[350px]">
        <p className="w-auto h-10 py-7 px-3 relative flex text-md font-bold">
          New Connections
        </p>
        <Stories />
        <Chats />
      </section>
      </div>
    </>
  );
}

export default App;
