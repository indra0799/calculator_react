import { Button } from '@chakra-ui/react'
import React from 'react'

const Bnt = (props) => {


    const handleChange = () => {

        let str=props.text;
        if(props.num ==="ERROR"){
            props.setNum("");
            return;
        }
        if(props.num === "0" ) props.setNum("");
        
        if(str === "=" ){
            let n1 = parseFloat(props.num);
            let n2 = parseFloat(props.num1);
            let n3 = 0;
            if(props.oparator==="+"){
                n3=n1+n2;
            }
            else if(props.oparator==="−"){
                n3=n2-n1;
            }
            else if(props.oparator==="×"){
                n3=n1*n2;
            }
            else if(props.oparator==="÷"){
                n3=n2/n1;
            }
            let ans = String(n3) ;
            props.setNum(ans);
        }
        else if(str === "." ){
            let n=props.num + ".";
            props.setNum(n);
        }

        else if(str === "%" ){
            let n=props.num/100;
            props.setNum(String(n));
        }

        else if(str==="+/-"){
            let n=props.num;
            n=n*(-1);
            props.setNum(String(n));
        } 

        else if(/^\d+$/.test(str) === false){
            props.setOparator(str);
            props.setNum1(props.num);
            props.setNum("");
            
        }

        else{

            let test=props.num+props.text;
            
            
                if(props.num === "0"){
                    props.setNum( props.text);
                }
                else
                props.setNum(props.num + props.text);
            
        }
    }



    if(props.bb == 1){
        return (
            <>
             <Button
                padding="24px" // Adjust padding
                fontSize="30px" // Adjust font size
                width="75px" // Adjust width
                height="75px" // Adjust height
                bgColor={'#bfbfbf'} color={'black'} borderRadius={100}
                onClick={handleChange }
                > 
                {props.text}
            </Button>
              
            </>
          )
    }
    if(props.bb == 2){
        return (
            <>
             <Button
                padding="24px" // Adjust padding
                fontSize="30px" // Adjust font size
                width="75px" // Adjust width
                height="75px" // Adjust height
                bgColor={'orange' } color={'white'} borderRadius={100} 
                onClick={handleChange }> 
                
                {props.text}
            </Button>
              
            </>
          )
    }
    if(props.bb == 3){
        return (
            <>
             <Button
                padding="24px" // Adjust padding
                fontSize="30px" // Adjust font size
                width="75px" // Adjust width
                height="75px" // Adjust height
                bgColor={'#626262'} color={'white'} borderRadius={100}
                onClick={handleChange }> 
                
                {props.text}
            </Button>
              
            </>
          )
    }

 
}

export default Bnt
