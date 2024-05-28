
import ButtonAnimation from "../common/ButtonAnimation";

interface MenuItemsProps {
    text: string,
    onClick: () => void
}

function MenuItems({ text, onClick }: MenuItemsProps) {
    return (
        <>
            <div className="opacity-0 transition-opacity ease-in-out duration-300" onClick={onClick}>
                <ButtonAnimation buttonText={text} />
            </div>
        </>
    )
}

export default MenuItems;