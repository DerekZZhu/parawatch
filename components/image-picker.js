"use client"
import classes from "./image-picker.module.css"
import Image from "next/image"
import { useRef, useState } from "react"

export default function ImagePicker({label, name}) {
    const imageInputRef = useRef()
    const [pickedImage, setPickedImage] = useState()

    function handlePickClick() {
        imageInputRef.current.click()
    }

    function handleImageChange(event) {
        const file = event.target.files[0]

        if (!file) {
            return
        }

        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }

    return <div  className={classes.picker}>
        <label htmlFor={name} >{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet</p>}
                {pickedImage && <Image src={pickedImage} fill/>}
            </div>
            <input 
                className={classes.input} 
                type="file" 
                id="image" 
                accept="image/png, image/jpeg" 
                name={name} 
                ref={imageInputRef}
                onChange={handleImageChange}
                required
            />
        </div>
        <button className={classes.button} type="button" onClick={handlePickClick}>
            Pick an Image
        </button>
    </div>
}