import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { signIn, useSession,signOut,getProviders } from "next-auth/react";



function HeaderRight({name, id, key, ...providers}) {
    const {data:session} = useSession()
    return ( 

        <div className="w-[35%] flex items-center  justify-end mr-2" >
            
                <div key={name}>
                    {session? ( 
                        <>
            <div className="flex">
                <Button onClick={signOut} className='text-sm text-gray-700 w-[6rem] text-center border-0 active:outline-none'>Sing Out</Button>
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

                <img 
                loading='lazy'
                onClick={signOut}
                className='cursor-pointer h-12 w-12 rounded-full ml-2'
                src={session.user.image}
                // src={session?.user?.image}
                alt=""
            />

            </div>
        

            </>
            ):(
            <div className="flex items-center space-x-3">
            <Button  className="text-gray-700" onClick={()=>signIn(id)}> Sign In</Button>
            <Button
                onClick={()=>signIn(id)}
                color="gray"
                buttonType="outline"
                rounded={false}
                iconOnly={true}
                ripple="dark"
                className=' text-gray-700 h-12 w-16 border-0 animate-pulse'
            >
            <Icon name='home' size='3xl' 
                
                />
            </Button>
        </div>
            )}
                </div>
            

         
        </div>
)
}


export async function getServerSideProps() {
    const providers = await  getProviders()

    return {
        props: {
            providers,
        },
    };
}
export default HeaderRight


// <div >


// {Object.values(providers).map((provider) => (
//     <div key={provider.name}>
//     {session ? (
//         <>
//             <div className="flex items">
//                 <Button onClick={signOut} className='text-sm text-gray-700 w-[6rem] text-center border-0 active:outline-none'>Sing Out</Button>
//                 <Button
//                 color="gray"
//                 buttonType="outline"
//                 rounded={false}
//                 iconOnly={true}
//                 ripple="dark"
//                 className='mx-5 md:ml-20  h-12 w-16 border-0'
//             >
//                 <Icon name='apps' size='3xl'
//                 />
//             </Button>

//             </div>
        
//             <img 
//                 loading='lazy'
//                 onClick={() => signIn(provider.id)}
//                 className='cursor-pointer h-12 w-12 rounded-full ml-2'
//                 src={session.user.image}
//                 // src={session?.user?.image}
//                 alt=""
//             />
//            </>
            
//     ) : (
       
//         <div className="flex items-center space-x-3">
//             <Button  className="text-gray-700" onClick={signIn}> Sign In</Button>
//             <Button
//                 onClick={signIn}
//                 color="gray"
//                 buttonType="outline"
//                 rounded={false}
//                 iconOnly={true}
//                 ripple="dark"
//                 className=' text-gray-700 h-12 w-16 border-0 animate-pulse'
//             >
//             <Icon name='home' size='3xl' 
                
//                 />
//             </Button>
//         </div>
// )}


// )

//     </div> 