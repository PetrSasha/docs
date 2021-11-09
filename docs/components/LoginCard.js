import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import InputIcon from "@material-tailwind/react/InputIcon";
import H5 from "@material-tailwind/react/Heading5";
import {getProviders, signIn as SignInToProvider,useSession} from "next-auth/react"

function LoginCard({providers}) {
  
    return (
    <div className='flex justify-center mt-10'>
  
        <div   className=' w-[35rem] '>
        <Card >
            <CardHeader color="lightBlue" size="lg">
                <H5 color="white">Login</H5>
            </CardHeader>

            <CardBody>
                
                <div className="mb-8 px-4">
                    <InputIcon
                        type="email"
                        color="lightBlue"
                        placeholder="Email Address"
                        iconName="email"
                    />
                </div>
                <div className="mb-4 px-4">
                    <InputIcon
                        type="password"
                        color="lightBlue"
                        placeholder="password"
                        iconName="lock"
                    />
                </div>
            </CardBody>
        </Card>
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

export default LoginCard
