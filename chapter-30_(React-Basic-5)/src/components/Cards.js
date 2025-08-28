


import React from 'react'
import Card from './Card';
import { useState } from 'react';
const Cards =(props)=> {
  let courses=props.courses;
  let category=props.category;
 const [likedCourses, setlikedCourses] = useState ([]);

  function getCourses(){
    if(category =="All"){
       let allCourses =[];
    Object.values(courses).forEach(array=>{
      array.forEach(courseData => {
        allCourses.push(courseData);
      })
    })
    return allCourses;
  }
  else{
    // main shif specific category ka data pass karunga 
     return courses[category];
  }

    }

   
    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
         {
          getCourses().map ((course) => (
            <Card key ={course.id}
             course={course}
              likedCourses={likedCourses}
              setlikedCourses={setlikedCourses}/>
          ))
         }

        </div>
    )
}

export default Cards