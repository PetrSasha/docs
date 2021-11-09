import {getProviders, signIn as SignInToProvider} from "next-auth/react"
import Header from '/components/Header';
import LoginCard from '/components/LoginCard';
import Body from '/components/Body';
import {useSession} from 'next-auth/react'
import Button from "@material-tailwind/react/Button";

function signIn({providers}) {
const {data:session} = useSession()
    return (
    <>
        <Header/>
        
        {Object.values(providers).map((provider) => (
        <div key={provider.name} className=''>
        {session? (
            <Body/>
        ) : (
          
        <div className="flex items-center justify-center flex-col">
            <LoginCard />
                
                <Button
                className='mt-3'
                color="lightBlue"
                buttonType="link"
                size="lg"
                ripple="dark"
                onClick={() =>SignInToProvider(provider.id,{callbackUrl: '/'})}> Get started with {provider.name} 
            </Button>
        
           
        </div>
        )}
        </div>
            ))}</>
        )}

export async function getServerSideProps() {
    const providers = await  getProviders()

    return {
        props: {
            providers,
        },
    };
}


export default signIn
