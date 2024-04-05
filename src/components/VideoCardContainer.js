import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ReactSimplyCarousel from 'react-simply-carousel';

const VideoCardContainer = () => {

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const videos = useSelector((state)=>state.movieSlice.videos);
    // console.log(videos)

  return (
    <div>
        <p>Official Videos</p>
        <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 5,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        { 
            videos.length > 0 && 
            videos.map((elem,index)=>{
                return(
                    <div key={index} className='ml-4 p-4'>
                        <iframe 
                        width={"250px"}
                        height={"200px"}
                        src={`https://www.youtube.com/embed/${elem.key}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        // allowFullScreen
                        title="Embedded youtube"
                        />
                    </div>
                )
            })
        }
      </ReactSimplyCarousel>
    </div>
  )
}

export default VideoCardContainer