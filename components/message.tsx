import "../styles/output.css";
import { RiSendPlaneLine } from 'react-icons/ri'

export default function message() {
  return (
    <div className="w-full px-5 flex flex-col justify-between">
      <div className="flex flex-col mt-5">
        <div className="flex justify-end mb-4">
          <div className="mr-2 py-3 px-4 bg-[#adb6fa] rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
            Welcome to group everyone !
          </div>
          <img
            src="#"
            className="object-cover h-8 w-8 rounded-full"
            alt=""
          />
        </div>
        <div className="flex justify-start mb-4">
          <img
            src="#"
            className="object-cover h-8 w-8 rounded-full"
            alt=""
          />
          <div className="ml-2 py-3 px-4 bg-[#A46ED3] rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at
            praesentium, aut ullam delectus odio error sit rem. Architecto nulla
            doloribus laborum illo rem enim dolor odio saepe, consequatur quas?
          </div>

          </div>
          <div>
            <input
              className="w-11/12 bg-[#f3f3f3] py-5 px-3 rounded-xl "
              type="text"
              placeholder="type your message here..."              
            />
        <button type="submit" className="text-2xl"><RiSendPlaneLine/></button>
        </div>
      </div>
    </div>
  );
}
