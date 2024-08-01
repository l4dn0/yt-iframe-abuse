import { useState } from "react";
import "./app.css"


// https://www.youtube.com/embed/aoKy8UEAES4
export default function App() {
    let [videoInput, setVideoInput] = useState("")
    let [finishedVideoUrl, setFinishedVideoUrl] = useState()
    let videoId = ""

    function changeurl (input) {
        console.log(input)
        try {
            let url = new URL(input)
            if ((url.host === 'www.youtube.com' || url.host === 'youtube.com') && url.pathname === '/watch') {
                videoId = url.searchParams.get('v')
                setFinishedVideoUrl('https://www.youtube.com/embed/' + videoId)
            }
            else if (url.host === 'youtu.be') {
                videoId = url.pathname.substring(1)
                setFinishedVideoUrl('https://www.youtube.com/embed/' + videoId)
            }
        }
        catch (e) {
            alert('Вы ввели неправильную ссылку!')
        }
    }
    function inputHandler (e) {
        changeurl(e.target.value)
        setVideoInput(e.target.value)

    }

    return (
        <div className="flex flex-col w-full h-full bg-[#1b1b1f] p-4">
            <div className="basis-1/4 flex justify-center text-center items-end">
                <h1 className="text-4xl text-white font-bold mb-8">Просмотр видео без "лагов"</h1>
            </div>
            <div className="basis-1/2">
                <iframe src={finishedVideoUrl} className="max-w-3xl w-full aspect-video mx-auto rounded-xl" title="Stunt Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="basis-1/4 flex justify-center">
                <input type="text" value={videoInput} className="mx-auto max-w-96 w-full h-12 bg-[#5d5d6b] p-2 rounded-xl text-center text-white" placeholder="Закиньте сюда ссылку на видео" onInput={inputHandler}/>
            </div>
        </div>
    );
}