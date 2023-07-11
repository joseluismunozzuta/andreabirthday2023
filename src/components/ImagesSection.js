import React from "react";
import TextAccordion from "./TextAccordion";
import { IconButton } from "@material-tailwind/react";
import { Link } from 'react-scroll';

const ImagesSection = ({ imageUrlsArr }) => {
    return (
        <>
            <div className="h-screen overflow-auto flex items-center flex-col justify-center relative">

                <IconButton color="purple" className="rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg>
                </IconButton>

                <div className="flex flex-col justify-center my-3 py-3 items-center">
                    <div className="w-auto carousel carousel-vertical rounded-box mx-auto border border-black" style={{ height: "27rem" }}>
                        {imageUrlsArr.map((url, index) => (
                            <div className="carousel-item h-full justify-center">
                                <img src={url} alt={`i${index}`} />
                            </div>
                        ))}
                    </div>
                </div>

                <TextAccordion></TextAccordion>

                <Link to="component1" smooth={true} duration={500} className='absolute top-0 right-0 p-4'>
                    <IconButton color="white" className="rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" /></svg>
                    </IconButton>
                </Link>
                <Link to="component3" smooth={true} duration={500} className='absolute top-0 left-0 p-4'>
                    <IconButton color="white" className="rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                    </IconButton>
                </Link>


            </div>
        </>

    );
}

export default ImagesSection;