import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function HeaderLeft() {
    return (
        <>
         <Button 
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className=" h-20 w-20 border-0"
            >
                <Icon name='menu' size='3xl'/>
            </Button>
            <Icon name='description' size='5xl' color='blue'/>
            <h1 className=" ml-2  sm:mr-5 text-lg font-semibold text-gray-700 text-center">
            Docs
            </h1>
        </>
    )
}

export default HeaderLeft
