import {getProviders, signIn as SignInToProvider} from "next-auth/react"
function signIn({providers}) {
    return (
        
        <>
            {Object.values(providers).map((provider) => (
                <div className=" flex items-center justify-center h-[100vh] ">
                    <div key={provider.name} className="border w-[30vw] h-52">
                <button onClick={() => SignInToProvider(provider.id)}>
                    Sign in with {provider.name}
                </button>
                </div>
                </div>
                
            ))}
        </>
        
    )
}

export async function getServerSideProps() {
    const providers = await  getProviders()

    return {
        props: {
            providers
        }
    }
}

export default signIn
