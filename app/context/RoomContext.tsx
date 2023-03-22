"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import { roomData } from "../data";

export type Room = {
  id: number;
  name: string;
  maxPerson: number;
  price: number;
};

type RoomContextType = {
  rooms: Room[];
  adults: string;
  setAdults: (value: string) => void;
  kids: string;
  setKids: (value: string) => void;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  loading: boolean;
};

type Props = {
  children: ReactNode;
};

export const RoomContext = createContext<RoomContextType>({
  rooms: [],
  adults: "1 Adult",
  setAdults: () => {},
  kids: "0 Kids",
  setKids: () => {},
  handleClick: () => {},
  loading: false,
});

const RoomProvider: React.FC<Props> = ({ children }) => {
  const [rooms, setRooms] = useState<Room[]>(roomData);
  const [adults, setAdults] = useState<string>("1 Adult");
  const [kids, setKids] = useState<string>("0 Kids");
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  }, [adults, kids]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setLoading(true);
    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson;
    });
    setTimeout(() => {
      setRooms(newRooms);
      setLoading(false);
    }, 3000);
  };

  const contextValue: RoomContextType = {
    rooms,
    adults,
    setAdults,
    kids,
    setKids,
    handleClick,
    loading,
  };

  return (
    <RoomContext.Provider value={contextValue}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
