
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  
} from 'react-native';
import HeaderSection from './Components/HeaderSection';
import InstructorSection from './Components/InstructorSection';
import CourseSection from './Components/CourseSection';




function App(){

  return(
    <SafeAreaView>
      <ScrollView>
     <HeaderSection />
     <InstructorSection/>
     <CourseSection/>
      </ScrollView>
    </SafeAreaView>
  )
}


export default App;
