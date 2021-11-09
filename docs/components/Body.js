import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from 'next/image'
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import {useState} from 'react'
function Body() {
    const [showModal, setShowModal] = useState(false);
    const [input, setInput] = useState("");

    const createDocument = () =>  {

    }

    const modal = (
        <Modal
        size="sm"
        active={showModal}
        toggler={ () => setShowModal(false)}
        >
            <ModalHeader toggler={() => setShowModal(false)}>
                    Modal Title
                </ModalHeader>
                <ModalBody>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        className="outline-none w-full"
                        placeholder="Enter name of document..."
                        onKeyDown={(e) => e.key === 'Enter' && createDocument()}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button 
                        color="red"
                        buttonType="link"
                        onClick={(e) => setShowModalCode(false)}
                        ripple="dark"
                    >
                        Close
                    </Button>

                    <Button
                        color="green"
                        onClick={(e) => setShowModalCode(true)}
                        ripple="light"
                    >
                        Save Changes
                    </Button>
                </ModalFooter>
        </Modal>
    )
    return (
        
        <div>
        <section className="bg-[#f1f8ff] pb-10 px-10">
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
            <div onClick={() => setShowModal(true)}
             className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700 transform transition duration-150 ease-in active:scale-90">
              <Image src='https://links.papareact.com/pju'
                layout='fill'/>
            </div>
              <p className="text-lg text-gray-500 my-2">Blank</p>
          </div>
        </div>
      </section>
        {modal}

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

export default Body
