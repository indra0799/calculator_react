
import { Button, Flex, Heading, Image } from '@chakra-ui/react';
import './App.css';
import Bnt from './components/Bnt';
import { useState } from 'react';
import {BiArrowBack} from 'react-icons/bi'; 

function App() {

  const[ num , setNum ] = useState("");
  const[ oparator , setOparator ] = useState("");
  const[num1,setNum1] = useState("");

  const a = num.length<=11;
  const b = num.length>11 && num.length<=16;
  const c = num.length>16;
  if(c){
    setNum("ERROR");
    setOparator("");
    setNum1("");
  }
  

  return (
    <div className="App">
      <Flex justifyContent="center"
        alignItems="center"
        flexDirection="column"
        bgColor="grey"
        height="100vh"
        // border="2px solid red"
      >

          <Flex 
          h={70}
          w="400px"
          bgColor="black"
          color="white"
          justifyContent="center"
          alignItems="center"
          >
            <Heading>CALCULATOR</Heading>

          
          </Flex>




          <Flex
            height="100%"
            bgColor="black"
            w="400px"
            h={700}
            // border="2px solid red"
            flexDirection="column"
          >
                <Flex color="white" justifyContent="flex-end" >
                <Button onClick={()=>{setNum(num.slice(0, -1))}} leftIcon={<BiArrowBack />} colorScheme="black" size="lg">
                  
                </Button>
                
                </Flex>
                <Flex h={90} width="100%"  justifyContent="flex-end" alignItems="flex-end">



                {a && <Heading margin={3} fontSize={60} color="white">{num}</Heading>}
                {b  && <Heading margin={3} fontSize={40} color="white">{num}</Heading>}
                {c  && <Heading margin={3} fontSize={70} color="white" >ERROR</Heading>}
                {/* <Heading margin={3} fontSize={60} color="white">{num}</Heading> */}
                </Flex>


                <Flex justifyContent="space-between" margin={3}>
                <Button
                    padding="24px" // Adjust padding
                    fontSize="30px" // Adjust font size
                    width="75px" // Adjust width
                    height="75px" // Adjust height
                    bgColor={'#bfbfbf'} color={'black'} borderRadius={100}
                    onClick={()=>{
                      setNum("");
                      setNum1("");
                    }}
                    > 
                    { num + num1==""  ? <>AC</> : <>C</> }
                </Button>
               
                  <Bnt bb={1}  text={"+/-"} setNum={setNum} num={num} oparator={oparator} setOparator={setOparator} setNum1={setNum1} num1={num1}/>
                  <Bnt bb={1}   text={"%"} setNum={setNum} num={num} oparator={oparator} setOparator={setOparator} setNum1={setNum1} num1={num1}  />
                  <Bnt bb={2}   text={"÷"} setNum={setNum} num={num}  oparator={oparator} setOparator={setOparator} setNum1={setNum1} num1={num1}  />
                  {/* ÷ */}
                </Flex>
                <Flex justifyContent="space-between" margin={3}>
                  <Bnt bb={3}   text={"1"} setNum={setNum} num={num}  />
                  <Bnt bb={3}   text={"2"} setNum={setNum} num={num}  />
                  <Bnt bb={3}   text={"3"} setNum={setNum} num={num}  />
                  <Bnt bb={2}   text={"×"} setNum={setNum} num={num} oparator={oparator} setOparator={setOparator} setNum1={setNum1} num1={num1} />
                 
                </Flex>
                <Flex justifyContent="space-between" margin={3}>
                  <Bnt bb={3}   text={"4"}  setNum={setNum} num={num}  />
                  <Bnt bb={3}   text={"5"}  setNum={setNum} num={num}  />
                  <Bnt bb={3}   text={"6"}  setNum={setNum} num={num}  />
                  <Bnt bb={2}   text={"−"}  setNum={setNum} num={num} oparator={oparator} setOparator={setOparator} setNum1={setNum1} num1={num1} />
                 
                </Flex>
                <Flex justifyContent="space-between" margin={3}>
                  <Bnt bb={3}   text={"7"}   setNum={setNum} num={num}  />
                  <Bnt bb={3}   text={"8"}   setNum={setNum} num={num}  />
                  <Bnt bb={3}   text={"9"}   setNum={setNum} num={num}  />
                  <Bnt bb={2}   text={"+"}   setNum={setNum} num={num} oparator={oparator} setOparator={setOparator} setNum1={setNum1} num1={num1} />
                 
                </Flex>
                <Flex justifyContent="space-between" margin={3}>
                <Button
                    padding="24px" // Adjust padding
                    fontSize="30px" // Adjust font size
                    width="170px" // Adjust width
                    height="75px" // Adjust height
                    bgColor="#626262" color="white" borderRadius={100}
                    onClick={()=>{ setNum(num+"0")}}
                    > 
                    0
                </Button>
                   <Bnt bb={3}   text={"."}  setNum={setNum} num={num} oparator={oparator} setOparator={setOparator} setNum1={setNum1} num1={num1} />
                   <Bnt bb={2}   text={"="}  setNum={setNum} num={num} oparator={oparator} setOparator={setOparator} setNum1={setNum1} num1={num1}  />
                </Flex>
                {/* ＝ */}

          </Flex>




      </Flex>
    </div>
  );
}

export default App;

{/* <Button
 padding="24px" // Adjust padding
 fontSize="30px" // Adjust font size
 width="75px" // Adjust width
 height="75px" // Adjust height
 bgColor="grey" color="black" borderRadius={100}> 
  AC
</Button>
<Button
 padding="24px" // Adjust padding
 fontSize="30px" // Adjust font size
 width="75px" // Adjust width
 height="75px" // Adjust height
 bgColor="grey" color="black" borderRadius={100}> 
  AC
</Button> */}