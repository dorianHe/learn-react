import React, {Component} from 'react'
import { useParams } from 'react-router'

const detailData = [
    {id:'01', subject:'subject 1', content:'hi 01'},
    {id:'02', subject:'subject 2', content:'hi 02'},
    {id:'03', subject:'subject 3', content:'hi 03'},
]

// using function component for useParams because of react-router v6

export default function Detail() {
    // receiving params 
    const {detailId} = useParams()
    console.log(detailId)
    return (
        <div>
            <ul>
                <li>ID: {detailId}</li>
                <li>Subject: {detailData.filter(detail => detail.id === detailId)[0].subject}</li>
                <li>Content: {detailData.filter(detail => detail.id === detailId)[0].content}</li>
            </ul>
        </div>
    )
}