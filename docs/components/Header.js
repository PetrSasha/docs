
import HeaderLeft from "./HeaderLeft";
import SearchInput from "./SearchInput";
import HeaderRight from "./HeaderRight";



function Header() {
    
    return (
        <div className="flex items-center justify-between h-[7rem] sticky top-0 z-50 px-4 py-2 shadow-lg bg-white ">
            <div className="w-[35%] flex items-center "><HeaderLeft/></div>
            <div className="w-[40%] flex items-center"><SearchInput/></div>
            <div className="w-[35%] flex items-center  justify-end"> <HeaderRight/></div>
        </div>
    )
}

export default Header
