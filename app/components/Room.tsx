import Link from "next/link";
import Image from "next/image";
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";

interface RoomProps {
  room: {
    id: string;
    name: string;
    image: string;
    size: number;
    maxPerson: number;
    description: string;
    price: number;
  };
}

const Room: React.FC<RoomProps> = ({ room }) => {
  const { id, name, image, size, maxPerson, description, price } = room;
  return (
    <div className="bg-white shadow-2xl min-h-[500px] group">
      <div className="overflow-hidden">
        <Image
          className="group-hover:scale-110 transition-all duration-300 w-full"
          src={image}
          alt="Image"
        />
      </div>
      {/* details */}
      <div className="bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base">
        <div className="flex justify-between w-[80%]">
          {/* size */}
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <BsArrowsFullscreen className="text-[15px]" />
            </div>
            <div className="flex gap-x-1">
              <div className="text-[12px]">size</div>
              <div className="text-[12px]">{size}m2</div>
            </div>
          </div>
          {/* room capacity */}
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <BsPeople className="text-[18px]" />
            </div>
            <div className="flex gap-x-1">
              <div className="text-[12px]">Max People</div>
              <div className="text-[12px]">{maxPerson}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Name */}
      <div className="text-center">
        <Link href={`/room${id}`}>
          <h3 className="h3">{name}</h3>
        </Link>
        <p className="max-w-[300px] mx-auto mb-3 lg:mb-6">
          {description.slice(0, 56)}
        </p>
      </div>
      {/* button */}
      <Link
        href={`/room/${id}`}
        className="btn btn-secondary btn-sm max-w-[240px] mx-auto text-[10px]"
      >
        Book now from: ${price}
      </Link>
    </div>
  );
};

export default Room;
