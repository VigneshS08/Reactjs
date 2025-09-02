import { useEffect, useState } from 'react'
import { Card, CardDescription, CardTitle } from '../components/ui/card'
import axios from 'axios';
import { Button } from '../components/ui/button';
import { Badge } from "@/components/ui/badge";

export interface Loops{  //initialize the values of objects
    id:number,
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

// array.splice(1,2,'Kiwi','Tomato'); // in this start the index at 1 and remove it from the (1 index) of 2 count of values and add kiwi and tomato so => "Banana",'Kiwi','Tomato',"Apple", "Mango"
export default function Home() {
    const [quote,setQuote]= useState<Loops[]>([]);
    const[filter,SetFilter]=useState<Loops>();
    const accessQuote = ()=>{
        axios.get('https://api.freeapi.app/api/v1/public/quotes/quote/random').then(function (response) {
            var responseData = response.data.data;
            var tagArray : string[]=[]; //for initialize the array string values
            tagArray=[...tagArray,...responseData.tags];
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

    const View =(id:number)=>{
        var getFilter=quote.filter((value)=>{
            return value.id==id;
        });
        SetFilter(getFilter[0]);
    }

    useEffect(()=>{
        accessQuote();
    },[]);
    return (
        <div className='flex justify-center items-center px-4'>
            <div className='max-w-screen-xl'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-3'>
                    <div>
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
                                            <div className='flex gap-3'>
                                            {
                                                value?.tags?.map((tag,key1)=>{
                                                    return (
                                                        <Badge key={key1} variant="outline">{tag}</Badge>
                                                    )
                                                })
                                            }
                                            </div>
                                            <div className="flex justify-center items-center">
                                                <Button className="w-25" variant="outline" onClick={()=>View(value.id)}>View</Button>
                                            </div>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='sticky top-3 h-fit py-3'>
                        <Card className='px-4'>
                            <div className='flex justify-between items-center'>
                                <CardTitle>{filter?.author}</CardTitle>
                                <Button>{filter?.dateAdded?.toString()}</Button>
                            </div>
                            <CardDescription>{filter?.content}</CardDescription>
                            <div className='flex gap-3'>
                            {
                                filter?.tags?.map((tag1,key1)=>{
                                    return (
                                            <Badge key={key1} variant="outline">{tag1}</Badge>
                                        )
                                    })
                            }
                            </div>
                        </Card>
                    </div>
                    <div className="flex justify-center items-center">
                        <Button variant="outline" onClick={()=>accessQuote()}>LoadMore</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

