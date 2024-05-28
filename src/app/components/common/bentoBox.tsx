

type BentoBox = {
    children?: React.ReactNode
}

function BentoBox({children}:BentoBox){
    return(
        <>
            <div className="bg-[#121212] border border-solid border-neutral-900 rounded-md h-full w-full">
                {children}
            </div>
        </>
    )
}

export default BentoBox;