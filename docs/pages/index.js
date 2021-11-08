import Head from 'next/head'
import Header from '../components/Header'
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from 'next/image'


export default function Home() {
  
  return (
    <div className="">
      <Head>
        <title>Google docs </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <section className="bg-[#F8F9FA] pb-10 px-10">
        <div className="max-w-3xl mx-auto pt-4 ">
          <div className="flex items-center justify-between py-6 shadow-sm mb-3 px-2 ">
            <h2 className="text-gray-600 text-lg ">Start new Docs Blank </h2>
            <Button 
            className="border-0"
            color="gray"
            iconOnly={true}
            ripple="dark"
            buttonType="outline"
            >
              <Icon name="more_vert" size="3xl"/>
            </Button>
          </div>
          <div>
            <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700 transform transition duration-150 ease-in active:scale-90">
              <Image src='https://links.papareact.com/pju'
                layout='fill'/>
            </div>
              <p className="text-lg text-gray-500 my-2">Blank</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-10 md:px-0">
        <div className="max-w-3xl mx-auto py-8 text-sm text-gray-600"> 
          <div className="flex items-center justify-between pb-5">
            <h2 className="font-medium flex-grow">My Documents</h2>
            <p className="mr-12">Date Created</p>
            <Icon name='folder' size='3xl' color='gray'/>
          </div>
        </div>
      </section>

    </div>
  )
}
