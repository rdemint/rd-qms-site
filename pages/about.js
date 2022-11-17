import Container from '@/components/Container'

export default function About() {
    return (
            <div className="bg-[url('../public/background_design_o20.svg')]">
                <div className="backdrop-blur-sm">
                <div className="flex justify-center max-w-3xl mx-auto bg-white bg-opacity-80">
                <div class="prose pt-8">
                <h2 className="text-slate-800">About Raines</h2>
                <p>Raines has been serving medical device teams since 2014, and has felt the challenges of the industry first-hand. He channels his experiences into his mission to improve the way quality management systems are designed, built, maintained, and audited.</p>
                <p>Raines believes;</p>
                <ul>
                    <li>The QMS should serve as a framework, not busywork.</li>
                     <li>The QMS should be a toolkit, not checkbox compliance.</li>
                    <li>The QMS should be a starter, to avoid reinventing the wheel.</li>
                </ul>
            <p>He seeks to apply learnings from related disciplines such as software development, user experience design, systems engineering, technical writing, content management, and issue management to improve on current industry practices and tools.</p>
            <p>Raines would love to hear your thoughts on the following.</p>
            <ul>
                <li>Where is your QMS causing the most friction for your team?</li>
                <li>What RAQA-related tooling do you need most to get to market and stay there?</li>
                <li>What do you most value in a consultant, coach, auditor, or trainer for your team?</li>
                    </ul>
                <div className="flex justify-center items-center">
                        <p className="mr-2 text-slate-500">Reach out on </p>
                        <a key="linkedin" href="https://linkedin.com/in/raines-demint" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">{"LinkedIn"}</span>
                        <img src="linkedin-icon.svg" className="h-7 border" />
                        </a>
                    </div>
                </div>
                    </div>
                </div>
            </div>
    )
}