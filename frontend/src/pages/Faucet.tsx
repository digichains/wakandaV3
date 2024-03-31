import React, { useState } from 'react'
import { useWallet } from '@txnlab/use-wallet'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import payment from '../assets/Online-payment.png'
import { RiArrowRightSLine } from 'react-icons/ri'

interface FaucetProps {
  toggleWalletModal: () => void
}

const Faucet: React.FC<FaucetProps> = ({ toggleWalletModal }) => {
  const { activeAddress } = useWallet()

  // State variables to track task completion status
  const [followed, setFollowed] = useState(false)
  const [likedAndRetweeted, setLikedAndRetweeted] = useState(false)
  const [joinedTelegram, setJoinedTelegram] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')

  // State variable to store clipboard text
  const [clipboardText, setClipboardText] = useState('')

  // Function to handle paste button click
  const handlePasteButtonClick = (fieldName: string) => {
    // Attempt to read text from the clipboard
    navigator.clipboard
      .readText()
      .then((text) => {
        // Set the clipboard text to state
        setClipboardText(text)
        // Set the clipboard text to the specified field
        setFieldValue(fieldName, text)
      })
      .catch((error) => {
        console.error('Failed to read from clipboard:', error)
      })
  }

  // Function to update the value of the specified field
  const setFieldValue = (fieldName: string, value: string) => {
    switch (fieldName) {
      case 'twitter':
        setTwitterValue(value)
        break
      case 'retweet':
        setRetweetValue(value)
        break
      case 'telegram':
        setTelegramValue(value)
        break
      case 'walletAddress':
        setWalletAddressValue(value)
        break
      default:
        console.error('Invalid field name:', fieldName)
    }
  }

  // State variables to store values of input fields
  const [twitterValue, setTwitterValue] = useState('')
  const [retweetValue, setRetweetValue] = useState('')
  const [telegramValue, setTelegramValue] = useState('')
  const [walletAddressValue, setWalletAddressValue] = useState('')

  // Function to handle button click
  const handleClaimNFT = () => {
    // Check if all tasks are completed
    if (followed && likedAndRetweeted && joinedTelegram && walletAddressValue !== '') {
      // Perform NFT claiming logic
      console.log('Claiming NFT...')
    } else {
      // Tasks are not completed, do nothing or show a message
      console.log('Please complete all tasks before claiming NFT.')
    }
  }

  return (
    <>
      <div className="bg-[#000] text-white" style={{ fontFamily: "'Avenue', sans-serif" }}>
        <div>
          <Navbar toggleWalletModal={toggleWalletModal} />
        </div>
        <div className="w-full m-2">
          <div className="flex justify-center items-center m-2">
            <div>
              <h1 className="text-2xl font-bold m-5 text-[#4EE248]">Claim FREE TestNet NFT</h1>
              <hr className="bg-gray-100 border-0 h-px my-4" />
            </div>
          </div>
          <div className="w-[100%] m-2 flex justify-center items-center md:w-full md:flex md:justify-center md:items-center text-gray-300">
            <p className="w-[90%] text-center md:w-full md:flex md:justify-center md:items-center">
              Obtain Wakanda NFT to participate in governance and proposals
            </p>
          </div>
        </div>

        <div className=" flex justify-center items-center">
          <div className="w-[100%] m-5 bg-[#333333] md:w-[50%] md:p-5 border border-white rounded-2xl ">
            <h1 className="text-[13px] m-5 md:m-0 md:text-[#FFF] md:text-[18px]">Complete the tasks below:</h1>
            <div className="m-5 md:m-0 text-[#d8d8d8d0]">
              <div className="relative mb-1">
                <div className="mb-5">
                  <div className="flex">
                    <label className="block m-2 text-sm font-medium text-white">1.</label>
                    <p className="m-2 text-sm">
                      Follow us on X{' '}
                      <a href="https://twitter.com/DaoWakanda">
                        <span className="text-[#68BBE3] cursor-pointer">@daoWakanda</span>
                      </a>{' '}
                      and input your profile link below :
                    </p>
                  </div>
                  <div className="ml-7 flex bg-[#000] rounded-md text-sm">
                    <input
                      type="text"
                      name="twitter"
                      placeholder="Enter twitter url (e.g www.twitter.com/userexample)"
                      className=" p-2 md:p-2 pr-10 block w-[90%] shadow-sm sm:text-sm bg-[#4D4D4D] rounded-md"
                      value={twitterValue}
                      onChange={(e) => setTwitterValue(e.target.value)} // Update state when input changes
                    />
                    <button className="m-3 text-[12px]" onClick={() => handlePasteButtonClick('twitter')}>
                      Paste
                    </button>
                  </div>
                </div>
              </div>

              <div className="mb-5 w-[100%]">
                <div className="flex">
                  <h1 className="m-2 text-sm font-medium text-white">2.</h1>
                  <div className="w-full flex bg-[#000] rounded-md text-sm">
                    <input
                      type="text"
                      name="retweet"
                      placeholder="Like and retweet pinned tweet"
                      className=" p-2 md:p-2 pr-10 block w-[90%] shadow-sm sm:text-sm bg-[#4D4D4D] rounded-md"
                      value={retweetValue}
                      onChange={(e) => setRetweetValue(e.target.value)} // Update state when input changes
                    />
                    <button className="m-3 text-[12px]" onClick={() => handlePasteButtonClick('retweet')}>
                      Paste
                    </button>
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <div className="flex">
                  <label className="block m-2 text-sm font-medium text-white">3.</label>
                  <p className="m-2 text-sm">
                    Join our Telegram group{' '}
                    <a href="https://t.me/daowakanda">
                      <span className="text-[#68BBE3] cursor-pointer">@daoWakanda</span>
                    </a>{' '}
                    and input your username below :
                  </p>
                </div>
                <div className="ml-7 flex bg-[#000] rounded-md text-sm">
                  <input
                    type="text"
                    name="telegram"
                    placeholder="Enter telegram username (e.g @userexample)"
                    className=" p-2 md:p-2 pr-10 block w-[90%] shadow-sm sm:text-sm bg-[#4D4D4D] rounded-md"
                    value={telegramValue}
                    onChange={(e) => setTelegramValue(e.target.value)} // Update state when input changes
                  />
                  <button className="m-3 text-[12px]" onClick={() => handlePasteButtonClick('telegram')}>
                    Paste
                  </button>
                </div>
              </div>

              <div className="mb-5 w-[100%]">
                <div className="flex">
                  <h1 className="m-2 text-sm font-medium text-white">4.</h1>
                  <div className="w-full flex bg-[#000] text-sm rounded-md">
                    <input
                      type="text"
                      name="walletAddress"
                      placeholder="Enter Wallet Address"
                      className=" p-2 md:p-2 pr-10 block w-[90%] shadow-sm sm:text-sm bg-[#4D4D4D] rounded-md"
                      value={walletAddressValue}
                      onChange={(e) => setWalletAddressValue(e.target.value)} // Update state when input changes
                    />
                    <button className="m-3 text-[12px]" onClick={() => handlePasteButtonClick('walletAddress')}>
                      Paste
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleClaimNFT}
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-2xl shadow-sm text-sm font-medium ${
                    // Conditional class to make the button inactive
                    followed && likedAndRetweeted && joinedTelegram && walletAddressValue !== ''
                      ? 'text-black bg-[#4EE248]'
                      : 'text-black bg-[#DAF7A6] cursor-not-allowed'
                  }`}
                  disabled={!followed || !likedAndRetweeted || !joinedTelegram || walletAddressValue === ''}
                >
                  Claim NFT
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="m-10">
          <div className="flex justify-center items-center flex-col">
            <h1 className="flex justify-center text-center items-center mb-5 text-[16px] md:text-[25px] font-bold">
              Can I receive the Wakanda NFT more than once?
            </h1>
            <p className="text-[#d8d8d8d0] text-center text-[13px] md:text-[16px]">
              The Wakanda NFT Fuacet dispenses once to each wallet. To request in bulk please complete this form.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Faucet
