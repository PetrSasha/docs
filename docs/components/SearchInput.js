import Icon from "@material-tailwind/react/Icon";


function SearchInput() {
    return (
        <div className="flex items-center justify-center p-3 flex-grow bg-gray-100 text-gray-600 rounded-md  max-w-3xl
        focus-within:bg-white focus-within:shadow-md focus-within:border-t-2 transition transform duration-200">
            <Icon name='search' size='3xl' color='darkgray'/>
            <input
            className='outline-none placeholder-gray-500 bg-transparent px-3 flex-grow text-base'
            type="search" placeholder='Search' />
        </div>
    )
}

export default SearchInput
