
import TextAnimation from "../common/TextAnimation";
import ContactButton from "../common/ContactButton";



function Intro() {
    return (
        <>
            <div className="min-h-screen bg-black sm:px-8">
                <div className="grid min-h-screen w-full place-items-center overflow-clip h-full">
                    <div className="h-full w-full [grid-area:1/1]">
                        <div className="h-1/2 w-1/2 rounded-[2vw] grid place-items-center"></div>
                    </div>
                    <div className="[grid-area:1/1]">
                        <h1 className="text-[83px] max-w-[980px] text-white leading-[88px] max-sm:text-[28px] max-sm:leading-[48px]">
                            <TextAnimation text="Hi, Iam Ehsan Khajeh" />
                            <TextAnimation text="Front End Developer" className="intro-text" duration={0.9} />
                            <TextAnimation text="From Mashhad" />
                        </h1>
                        <ContactButton text="Contact Me" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;
