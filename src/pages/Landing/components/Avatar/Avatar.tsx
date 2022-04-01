import avatar from "./avatar.webp"
import wave from "./wave.svg"

export default function Avatar() {
    return <div className="text-center text-gray-700">
        <img src={avatar} className="rounded-full h-64 w-64 m-auto mt-5" />
        <div className="mt-8 text-3xl">
            Hi
            <img draggable={false} src={wave} className="h-[30px] w-[30px] inline-grid mx-2" />
            I'm Rishabh Arora
        </div>
        <div className="px-12 py-4">
            I'm a full stack web and software
            developer based in India
        </div>
    </div>
}