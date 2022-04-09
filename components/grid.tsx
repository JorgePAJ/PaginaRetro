import Image from "next/image";
import Player from "../components/MultiPlayer";

const Grid = () => {
  return (
    <div className="text-center w-full h-full border grid grid-cols-3 gap-4">
      <div className="place-items-center grid items-end">
        <div className="w-[7rem] box-shadow-hover">
          <Player
            back="https://spaceplace.nasa.gov/planets/planets-09.sp.png"
            url={"https://www.mboxdrive.com/1.mp3"}
          />
        </div>
      </div>
      <div className="grid place-items-center box-shadow-hover items-center">
        <div className="w-[7rem] mb-16 box-shadow-hover">
          <Player
            url={"https://www.mboxdrive.com/2.mp3"}
            back="https://spaceplace.nasa.gov/planets/planets-10.sp.png"
          />
        </div>
      </div>
      <div className="grid place-items-center box-shadow-hover items-end">
        <div className="w-[7rem] box-shadow-hover">
          <Player
            url={"https://www.mboxdrive.com/3.mp3"}
            back="https://spaceplace.nasa.gov/planets/planets-11.sp.png"
          />
        </div>
      </div>
      <div className="grid place-items-start  items-center w-[7rem] ml-6 box-shadow-hover">
        <Player
          url={"https://www.mboxdrive.com/4.mp3"}
          back="https://spaceplace.nasa.gov/planets/planets-16.sp.png"
        />
      </div>
      <div className="grid place-items-center box-shadow-hover items-center box-shadow-hover">
        <Player
          back={"https://i.ibb.co/WVL7DVT/1255px-Alien-icon-svg.png"}
          url={
            "https://www.mboxdrive.com/y2mate.com%20-%20XFiles%20theme%20song%20full%20version.mp3"
          }
        />
      </div>
      <div className="grid place-items-end items-center ">
        <div className="w-[7rem] mr-6 box-shadow-hover">
          <Player
            url={"https://www.mboxdrive.com/5.mp3"}
            back="https://spaceplace.nasa.gov/planets/planets-12.sp.png"
          />
        </div>
      </div>
      <div className="grid place-items-center box-shadow-hover  items-start">
        <div className="w-[7rem] box-shadow-hover">
          <Player
            url={"https://www.mboxdrive.com/6.mp3"}
            back="https://spaceplace.nasa.gov/planets/planets-13.png"
          />
        </div>
      </div>
      <div className="grid place-items-center box-shadow-hover items-center">
        <div className="w-[7rem] mt-16 box-shadow-hover">
          <Player
            url={"https://www.mboxdrive.com/7.mp3"}
            back="https://spaceplace.nasa.gov/planets/planets-14.sp.png"
          />
        </div>
      </div>
      <div className="grid place-items-center box-shadow-hover items-start">
        <div className="w-[7rem] box-shadow-hover">
          <Player
            url={"https://www.mboxdrive.com/9.mp3"}
            back="https://spaceplace.nasa.gov/planets/planets-15.sp.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Grid;
