import ReactTypingEffect from 'react-typing-effect'

export default function Hero() {
    return (
        <div className="text-center mt-12 mb-2 px-4">
            <ReactTypingEffect
                text={["Design. Build. Train. Audit."]}
                eraseSpeed={50}
                eraseDelay={5000}
                typingDelay={100}
                speed={75}
                cursorClassName={"text-xl sm:text-2xl md:text-4xl text-slate-300"}

                displayTextRenderer={
                    (text, i) => {
                        return <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl text-slate-700">{text}</h2>
                    }
                }
            />
            <p className="mx-auto mt-3 max-w-xs text-base text-gray-600 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                for better medical device quality management systems. 
            </p>
           
        </div>
)
}