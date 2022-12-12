import { GiphyFetch } from "@giphy/js-fetch-api";
import { IGif } from "@giphy/js-types";
import {
  Grid
} from "@giphy/react-components";
import React, { useState, useEffect } from "react";


export default function Carousel({sendToChat}) {
    const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

    const [value,setValue] = useState('')

    const fetchGifs = (offset: number) => {
        if(value === ''){
 return giphyFetch.trending({ offset, limit: 10 })}
else{
   return giphyFetch.search(value, { offset, limit: 10 })
}}

    

    return <div className="absolute top-2/3 -bottom-3/4 left-2/3 overflow-y-scroll bg-[#adb6fa] border-t-[30px] border-r-[10px] border-b-[20px] border-l-[10px] border-[#adb6fa]"> 
    <input type="text" value={value} onChange={value => setValue(value.target.value)} ></input>
    <Grid

    onGifClick={(gif, e) => {
        sendToChat(gif.images.original.url);
        e.preventDefault();
      }}
    fetchGifs={fetchGifs}
    width={300}
    columns={3}
    gutter={6}
    key={value}
  />;</div>
  }