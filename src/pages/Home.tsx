import { useEffect, useState } from 'react'
import { Card, CardDescription, CardTitle } from '../components/ui/card'
import axios from 'axios';
import { Button } from '../components/ui/button';

export interface Loops{  //initialize the values of objects
    id?:number,
    author?:string,
    content?:string,
    tags?:string[],
    authorSlug?:string,
    dateAdded?:Date,
    dateModified?:Date
}

//for initialize the array with hooks useState<Loops[]>
//for initialize the array variable array 
//  var handleResponse : Loops[]=[]
// or
// var handleResponse : string[]=[];
//array = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//array.slice(1,2) // in this 1 is index (inclusive), 2 is index (exclusive)  so output => orange

//array.slice(-5,-3) // in this -5 count from end and start the index, and -3 its remove it from the end => "Banana", "Orange"

//array.slice(-5,2) // in this -5 count from end and start the index, and 2 it will show till 2 index => "Banana", "Orange"

// array.splice(1,2,'Kiwi','Tomato'); // in this start the index at 1 and remove it from the 1 index of 2 count of values and add kiwi and tomato so => "Banana",'Kiwi','Tomato',"Apple", "Mango"
export default function Home() {
    const [quote,setQuote]= useState<Loops[]>([]);
    const accessQuote = ()=>{
        axios.get('https://api.freeapi.app/api/v1/public/quotes/quote/random').then(function (response) {
            var responseData = response.data.data;
            var tagArray : string[]=[]; //for initialize the array string values
            tagArray.push(responseData.tags);
            var handleResponse : Loops={  // here we need to initialize the value with interface loops, because we assign values with objects
                id:responseData.id,
                author:responseData.author,
                content:responseData.content,
                tags:tagArray,
                authorSlug:responseData.authorSlug,
                dateAdded:responseData.dateAdded,
                dateModified:responseData.dateModified
            };
            var quoteArray : Loops[]=[...quote,handleResponse];  // this variables i having an array with objects so we need to initialize the interface loops
            // quoteArray.push(handleResponse);
            setQuote(quoteArray);
        }).catch(function (error) {
            console.log(error);
        })
    }

    useEffect(()=>{
        accessQuote();
    },[]);
  return (
        <div className='flex justify-center items-center'>
            <div className='max-w-[600px]'>
                {
                    quote.map((value,index)=>{
                        return (
                            <div key={index} className='py-3'>
                                <Card className='px-4'>
                                    <div className='flex justify-between items-center'>
                                        <CardTitle>{value.author}</CardTitle>
                                        <Button>{value?.dateAdded?.toString()}</Button>
                                    </div>
                                    <CardDescription>{value.content}</CardDescription>
                                </Card>
                            </div>
                        )
                    })
                }
                <div className="flex justify-center items-center">
                    <Button variant="outline" onClick={()=>accessQuote()}>LoadMore</Button>
                </div>
            </div>
        </div>
  )
}

