/*৯. আরেকটা কম্পোনেন্ট বানাও। যেটার নাম হবে। Mobile সেখানে একটা বাটন থাকবে। বাটন এর নাম হবে "battery down" আর উপরে একটা সংখ্যা থাকবে। ১০০। (এইটা দিয়ে বুঝবে মোবাইল এর ব্যাটারি ১০০% আছে) এখন তুমি যতবার বাটনে ক্লিক করবে। সেই সংখ্যা এর মান ১০ করে কমতে থাকবে। 

১০. (স্পেশাল চ্যালেঞ্জ) উপরের ব্যাটারী ডাউন বাটনে চাপ দিলে কমবে। তবে কমতে কমতে যখন ব্যাটারি এর পরিমাণ ০ হয়ে যাবে। তারপরে আর বাটনে চাপ দিলে। ব্যাটারি কমবে না। অর্থাৎ নেগেটিভ হবে না। (দেখো এইটা করতে পারো কিনা)

১১. json placeholder এর ওয়েবসাইট এ গিয়ে todo এর ডাটা লোড করে। সেগুলাকে দেখাতে পারো কিনা দেখো। */ 

import { useState } from 'react'
import './App.css'
import Mobile from './Components/Mobile'
import Todo from './Components/Todo/Todo';

function App() {
  const [count, setCount] = useState(100);
  const Counting = () =>{
    count ? setCount(count - 10) : 'not found';
  }
  return (
    <div className="App">
      <h2>Mobile:{count}</h2>
       <Mobile Counting={Counting}></Mobile>
       <div>
         <Todo></Todo>
       </div>
    </div>

  )
}

export default App
