import '../styles/output.css';
import { RiSendPlaneLine } from 'react-icons/ri';
import { AiOutlinePaperClip } from 'react-icons/ai';

export default function message() {
  return (
    <div className="w-[78.4%] h-[94.4vh] ml-80 grid grid-rows-4 justify-item-end bg-white rounded-l-2xl">
      <div className="flex flex-col mt-5">
        <div className="flex justify-end mr-4">
          <div className="mr-2 py-3 px-4 bg-[#adb6fa] rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
            Welcome to group everyone !
          </div>
          <img
            src="https://cdna.artstation.com/p/assets/images/images/044/872/734/large/rodion-vlasov-fin1-1.jpg?1641375316"
            className="object-cover h-8 w-8 rounded-full"
            alt=""
          />
        </div>
        <div className="flex justify-start mb-4 ml-6 w-6/12">
          <img
            src="https://cdna.artstation.com/p/assets/images/images/044/872/734/large/rodion-vlasov-fin1-1.jpg?1641375316"
            className="object-cover h-8 w-8 rounded-full"
            alt=""
          />
          <div className="ml-2 py-3 px-4 bg-[#A46ED3] rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at
            praesentium, aut ullam delectus odio error sit rem. Architecto nulla
            doloribus laborum illo rem enim dolor odio saepe, consequatur quas?
          </div>
        </div>

      </div>
      <div></div>
      <div></div>
      <div className="inputSize">
          <input
            className="bg-[#f3f3f3] focus:outline-none mb-3 "
            size={90}
            type="text"
            placeholder="type your message here..."
          />
          <button type="submit" className="text-xl ml-72 mt-3 pr-2 ">
            <AiOutlinePaperClip />
          </button>
          <button type="submit" className="text-xl">
            <RiSendPlaneLine />
          </button>
        </div>
    </div>
  );
}
