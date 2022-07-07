import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"
import data from "./data"

// console.log(data)

export default function App(){
    
    const cards = data.map(item => {
        return(
            <Card
                 key={item.id}
                 {...item}
                //  title={item.title}
                //  location={item.location}
                //  googleMapsUrl={item.googleMapsUrl}
                //  startDate={item.startDate}
                //  endDate={item.endDate}
                //  description={item.description}
                //  imageUrl={item.imageUrl}
            />
        )
    })
    
    return(
        <div className="container">
            <Header />
             {cards} 
            <Footer />
        </div>
    )
}

        
    
  