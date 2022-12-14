import {useState, useEffect} from 'react'
export default function file(props){
    const [imageSrc,setImageSrc]= useState('');

    useEffect(()=> {
        const reader = new FileReader();
        reader.readAsDataURL(props.blob);
        reader.onloadend = function() {
            setImageSrc(reader.result)
        }
    }, [props.blob]);
    return (
        <img className='w-[500px]' src={imageSrc} alt={props.fileName}/>
    )
}