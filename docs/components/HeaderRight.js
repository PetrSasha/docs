import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useSession } from "next-auth/react";
function HeaderRight() {
    const {data:session} = useSession()
    return (
        <>
             <div className="">
                  <Button
                color="gray"
                buttonType="outline"
                rounded={false}
                iconOnly={true}
                ripple="dark"
                className='mx-5 md:ml-20  h-12 w-16 border-0'
            >
                <Icon name='apps' size='3xl'
                />
            </Button>

            </div>
          
            <img 
                loading='lazy'
                // onClick={signOut}
                className='cursor-pointer h-12 w-12 rounded-full ml-2'
                // src={session.user.image}
                src={session?.user?.image}
                alt=""
            />
            
     </>
    )
}

export default HeaderRight
