'use client'
import {useFormStatus} from 'react-dom'

export default function WatchFormSubmit() {
    const {pending} = useFormStatus()

    return <button disable>
        {pending ? 'Submitting' : 'Begin Watch'}
    </button>
}