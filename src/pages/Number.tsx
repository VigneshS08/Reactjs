import { useEffect, useState } from 'react'

function Home() {
    const [number,setNumber]=useState<number[]>([]);
    var [count,setCount] = useState<number>(10);
    const AddMore = ()=>{
        setCount(count+10);
        var arrayCount:number[]=[];
        for(var i=1;i<count;i++)
        {
            arrayCount.push(i);
        }
        setNumber(arrayCount);
    }
    useEffect(()=>{
        AddMore();
    },[]);
  return (
    <div>
      {
        number.map((value,index)=>{
            return(
                <div key={index}>
                    {value}
                </div>
            )
        })
      }
      <button onClick={()=>AddMore()}>LoadMore</button>
    </div>
  )
}

export default Home
