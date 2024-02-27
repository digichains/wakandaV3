<<<<<<< HEAD
=======
// import React, { useState } from 'react'
// import Navbar from '../components/Navbar/Navbar2'
// import about from '../assets/about.jpg'
// import about2 from '../assets/about2.jpg'
// import { GoArrowUpRight } from 'react-icons/go'
// import Footer from '../components/Footer'
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
// import HrtOverview from '../modals/HrtOverview'
// import Distribution from '../modals/Distribution'
// import GovernanceView from '../modals/GovernanceView'
// import {
//   Container,
//   Typography,
//   Button,
//   Grid,
//   Card,
//   CardContent,
//   CardHeader,
//   Divider,
//   makeStyles,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
// } from '@material-ui/core'

// const useStyles = makeStyles((theme) => ({
//   backgroundImage: {
//     width: '100%',
//     height: '100px',
//     backgroundImage: `url(${about})`,
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',

//   },
//   headerText: {
//     paddingTop: theme.spacing(2),
//     paddingLeft: theme.spacing(60),
//     color: '#FFFFFF',
//   },
//   section: {
//     backgroundColor: '#000',
//     padding: theme.spacing(7),
//     minHeight: '80vh',
//   },
//   sectionHeader: {
//     color: '#CAFFBB',
//     fontSize: '25px',
//   },
//   sectionContent: {
//     color: '#ABABAF',
//     fontSize: '13px',
//   },
//   button: {
//     marginTop: theme.spacing(2),
//     width: '40%',
//     backgroundColor: '#fff',
//   },
//   image: {
//     marginLeft: theme.spacing(8),
//     borderRadius: '80px 0 0 80px',
//     width: '60%',
//   },
//   card: {
//     backgroundColor: '#4D4D4D',
//     border: '1px solid white',
//   },
//   cardTitle: {
//     color: 'white',
//   },
//   accordion: {
//     marginBottom: theme.spacing(1),
//   },
// }))

// const About = () => {
//   const classes = useStyles()
//   const [showTokenOverview, setShowTokenOverview] = useState(false)
//   const [showDistribution, setShowDistribution] = useState(false)
//   const [showGovernanceView, setShowGovernanceView] = useState(false)

//   const toggleTokenOverview = () => {
//     setShowTokenOverview(!showTokenOverview)
//   }
//   const toggleShowDistribution = () => {
//     setShowDistribution(!showDistribution)
//   }
//   const toggleShowGovernanceView = () => {
//     setShowGovernanceView(!showGovernanceView)
//   }

//   return (
//     <>
//       <div>
//         <Navbar
//           toggleWalletModal={() => {
//             throw new Error('Function not implemented.')
//           }}
//         />

//         <div className={classes.backgroundImage}>
//           <Typography variant="h3" className={classes.headerText}>
//             About Us
//           </Typography>
//         </div>

//         <div className={classes.section}>
//           <Typography variant="h4" className={classes.sectionHeader}>
//             Background
//           </Typography>
//           <Typography variant="body1" className={classes.sectionContent}>
//             In the evolving digital landscape, community engagement and participation have become crucial for the growth and sustainability
//             of blockchain ecosystems. DAO Wakanda addresses the need for a more inclusive, participatory, and rewarding platform within
//             Algorand Nigeria.
//           </Typography>

//           <Grid container spacing={3} className={classes.sectionContent}>
//             <Grid item xs={6}>
//               <Typography variant="body1">Designed to revolutionize community engagement within the Algorand Nigeria ecosystem.</Typography>
//               <Typography variant="body1">
//                 Through innovative use of NFTs, developer incentives, task-based rewards, and community rewards, DAO Wakanda aims to create
//                 a vibrant, incentivized environment that empowers community members and amplifies their collective voice.
//               </Typography>
//               <Button className={classes.button}>
//                 Become a community member <GoArrowUpRight className="color-[#000] m-1 " />
//               </Button>
//             </Grid>
//             <Grid item xs={6}>
//               <img src={about2} alt="about" className={classes.image} />
//             </Grid>
//           </Grid>
//         </div>

//         <Grid container spacing={3} className={classes.section}>
//           <Grid item xs={4}>
//             <Card className={classes.card}>
//               <CardHeader title="Vision & Goals" className={classes.cardTitle} />
//               <Divider />
//               <CardContent>
//                 <Typography variant="body1" className={classes.sectionContent}>
//                   DAO Wakanda's vision is to foster a dynamic and empowered community that actively contributes to and benefits from the
//                   Algorand Nigeria ecosystem. Its goals include enhancing developer engagement, facilitating community-driven
//                   decision-making, and rewarding contributions through a comprehensive tokenomics model.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//           <Grid item xs={4}>
//             <Card className={classes.card}>
//               <CardHeader title="Blockchain Foundation" className={classes.cardTitle} />
//               <Divider />
//               <CardContent>
//                 <Typography variant="body1" className={classes.sectionContent}>
//                   DAO Wakanda is built on the Algorand blockchain, known for its speed, security, and scalability. This section will detail
//                   the technical architecture, smart contracts, and how NFTs integrate with the DAO.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//           <Grid item xs={4}>
//             <Card className={classes.card}>
//               <CardHeader title="Tokenomics" className={classes.cardTitle} />
//               <Divider />
//               <Accordion expanded={showTokenOverview} className={classes.accordion} onChange={toggleTokenOverview}>
//                 <AccordionSummary expandIcon={<FaChevronUp className="text-white" />} aria-controls="panel1a-content">
//                   <Typography className={classes.sectionContent}>$HRT Token Overview</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                   <HrtOverview />
//                 </AccordionDetails>
//               </Accordion>
//               <Divider />
//               <Accordion expanded={showDistribution} className={classes.accordion} onChange={toggleShowDistribution}>
//                 <AccordionSummary expandIcon={<FaChevronUp className="text-white" />} aria-controls="panel2a-content">
//                   <Typography className={classes.sectionContent}>Distribution</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                   <Distribution />
//                 </AccordionDetails>
//               </Accordion>
//               <Divider />
//               <Accordion expanded={showGovernanceView} className={classes.accordion} onChange={toggleShowGovernanceView}>
//                 <AccordionSummary expandIcon={<FaChevronUp className="text-white" />} aria-controls="panel3a-content">
//                   <Typography className={classes.sectionContent}>Governance</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                   <GovernanceView />
//                 </AccordionDetails>
//               </Accordion>
//               <Divider />
//             </Card>
//           </Grid>
//         </Grid>

//         <Footer />
//       </div>
//     </>
//   )
// }

// export default About

>>>>>>> master
import Navbar from '../components/Navbar/Navbar2'
import about from '../assets/about.jpg'
import about2 from '../assets/about2.jpg'
import { GoArrowUpRight } from 'react-icons/go'
import Footer from '../components/Footer'
<<<<<<< HEAD

const About = () => {
=======
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import HrtOverview from '../modals/HrtOverview'
import Distribution from '../modals/Distribution'
import GovernanceView from '../modals/GovernanceView'
import { useState } from 'react'

const About = () => {
  const [showTokenOverview, setShowTokenOverview] = useState(false)
  const [showDistribution, setShowDistribution] = useState(false)
  const [showGovernanceView, setShowGovernanceView] = useState(false)

  const toggleTokenOverview = () => {
    setShowTokenOverview(!showTokenOverview)
  }
  const toggleShowDistribution = () => {
    setShowDistribution(!showDistribution)
  }
  const toggleShowGovernanceView = () => {
    setShowGovernanceView(!showGovernanceView)
  }

>>>>>>> master
  return (
    <>
      <div>
        <Navbar
          toggleWalletModal={function (): void {
            throw new Error('Function not implemented.')
          }}
        />

        <div
<<<<<<< HEAD
=======
          className="hidden md:block"
>>>>>>> master
          style={{
            width: '100%',
            height: '100px',
            backgroundImage: `url(${about})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'brightness(70%)',
          }}
        >
          <h1 className="text-3xl font-bold text-white pl-[500px] pt-7" style={{ filter: 'brightness(100%)' }}>
            About Us
          </h1>
        </div>
<<<<<<< HEAD

        <div className="bg-[#000] p-[60px] w-full h-[80vh]">
          <h1 className="text-[#CAFFBB] text-[25px]">Background</h1>
          <p className="text-[#ABABAF]">
            In the evolving digital landscape, community engagement and participation have become crucial for the growth and sustainability
            of blockchain ecosystems. DAO Wakanda addresses the need for a more inclusive, participatory, and rewarding platform within
            Algorand Nigeria.
          </p>

          <div className="flex justify-between mt-[60px]">
            <div className="w-[50%]">
              <h1 className="text-white text-[18px]">
=======
        <div className="bg-[#000] w-full  px-[20px] py-[10px] md:w-[100%] h-[80vh]">
          <div className="w-[100%] px-1 py-[5px] md:w-full overflow-hidden  md:overflow-visible">
            <h1 className="text-[#CAFFBB] text-[30px] ml-1 md:text-[30px] pb-2">Background</h1>
            <p className="text-[#ABABAF] w-[90%] text-[15px]">
              In the evolving digital landscape, community engagement and participation have become crucial for the growth and
              sustainability of blockchain ecosystems. DAO Wakanda addresses the need for a more inclusive, participatory, and rewarding
              platform within Algorand Nigeria.
            </p>
          </div>

          <div className="flex flex-col-reverse md:flex-row md:flex md:justify-between mt-[60px]">
            <div className="w-full md:w-1/2 md:mr-5">
              <h1 className="text-white text-[20px]">
>>>>>>> master
                Designed to revolutionize community engagement within the Algorand Nigeria ecosystem.
              </h1>
              <p className="text-[#ABABAF] text-[13px]">
                Through innovative use of NFTs, developer incentives, task-based rewards, and community rewards, DAO Wakanda aims to create
                a vibrant, incentivized environment that empowers community members and amplifies their collective voice.
              </p>
<<<<<<< HEAD

              <button className="mt-10 w-[40%] justify-center bg-[#fff] p-2 rounded-lg text-sm flex">
                Become a community member <GoArrowUpRight className="color-[#000] m-1 " />
              </button>
            </div>

            <div className="w-[50%]">
              <img src={about2} alt="about" width={'60%'} className="ml-[250px] rounded-tl-[80px] " />
            </div>
          </div>
        </div>
        <div className="flex justify-between p-[60px] bg-[#000] w-[100%]">
          <div className="bg-[#4D4D4D4D] w-[30%] p-5 rounded-lg" style={{ border: '1px solid white' }}>
=======
              <button className="mt-10 w-[80%] md:w-[40%] justify-center bg-[#fff] p-2 rounded-lg text-sm flex">
                Become a community member <GoArrowUpRight className="color-[#000] m-1 " />
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={about2}
                alt="about"
                className="mt-5 md:ml-[160px] md:mt-0 rounded-tl-[50px] rounded-br-[50px]"
                style={{ width: '100%', maxWidth: '350px' }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-[#000] px-5 py-20 md:flex-row md:space-x-4">
          <div className="bg-[#4D4D4D4D] w-full md:w-[30%] p-5 rounded-lg mb-4 md:mb-0" style={{ border: '1px solid white' }}>
>>>>>>> master
            <h1 className="text-white">Vision & Goals</h1>
            <hr className="mb-5" />
            <p className="text-white text-[13px] mb-5">
              DAO Wakanda's vision is to foster a dynamic and empowered community that actively contributes to and benefits from the
              Algorand Nigeria ecosystem. Its goals include enhancing developer engagement, facilitating community-driven decision-making,
              and rewarding contributions through a comprehensive tokenomics model.
            </p>
          </div>

<<<<<<< HEAD
          <div className="bg-[#4D4D4D4D] w-[30%] p-5 rounded-lg" style={{ border: '1px solid white' }}>
=======
          <div className="bg-[#4D4D4D4D] w-full md:w-[30%] p-5 rounded-lg mb-4 md:mb-0" style={{ border: '1px solid white' }}>
>>>>>>> master
            <h1 className="text-white">Blockchain Foundation</h1>
            <hr className="mb-5" />
            <p className="text-white text-[13px] mb-5">
              DAO Wakanda is built on the Algorand blockchain, known for its speed, security, and scalability. This section will detail the
              technical architecture, smart contracts, and how NFTs integrate with the DAO.
            </p>
          </div>

<<<<<<< HEAD
          <div className="bg-[#4D4D4D4D] w-[30%] p-5 rounded-lg" style={{ border: '1px solid white' }}>
            <h1 className="text-white">Blockchain Foundation</h1>
            <hr className="mb-5" />
            <p className="text-white text-[13px] mb-5">
              DAO Wakanda is built on the Algorand blockchain, known for its speed, security, and scalability. This section will detail the
              technical architecture, smart contracts, and how NFTs integrate with the DAO.
            </p>
=======
          <div className="bg-[#4D4D4D4D] w-full md:w-[30%] p-5 rounded-lg mb-4 md:mb-0" style={{ border: '1px solid white' }}>
            <h1 className="text-white">Tokenomics</h1>
            <hr className="mb-1" />
            <div className="flex justify-between" onClick={toggleTokenOverview}>
              <p className="text-[#919094] text-[13px]">$HRT Token Overview</p>
              {showTokenOverview ? <FaChevronUp className="text-white" /> : <FaChevronDown className="text-white" />}
            </div>
            <hr className="mb-1" />
            {showTokenOverview && <HrtOverview />}
            <hr className="mb-1" />

            <div className="flex justify-between" onClick={toggleShowDistribution}>
              <p className="text-[#919094] text-[13px]">Distribution</p>
              {showDistribution ? <FaChevronUp className="text-white" /> : <FaChevronDown className="text-white" />}
            </div>
            <hr className="mb-1" />
            {showDistribution && <Distribution />}
            <hr className="mb-1" />

            <div className="flex justify-between" onClick={toggleShowGovernanceView}>
              <p className="text-[#919094] text-[13px]">Governance</p>
              {showGovernanceView ? <FaChevronUp className="text-white" /> : <FaChevronDown className="text-white" />}
            </div>
            <hr className="mb-1" />
            {showGovernanceView && <GovernanceView />}
            <hr className="mb-1" />
>>>>>>> master
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default About
