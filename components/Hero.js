import ReactTypingEffect from 'react-typing-effect'

export default function Hero() {
    return (
        <div className="text-center mt-12 mb-6">
            <ReactTypingEffect
                text={["Design. Build. Train. Audit."]}
                eraseSpeed={100}
                eraseDelay={5000}
                typingDelay={100}
                speed={100}
                cursorClassName={"text-4xl sm:text-5xl md:text-6xl text-slate-300"}

                displayTextRenderer={
                    (text, i) => {
                        return <h2 className="text-4xl sm:text-5xl md:text-6xl text-slate-700">{text}</h2>
                    }
                }
            />
            <p className="mx-auto my-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                for better medical device quality management systems. 
            </p>
           
        </div>
)
}