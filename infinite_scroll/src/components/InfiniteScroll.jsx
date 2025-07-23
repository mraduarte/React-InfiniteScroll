import { useState, useEffect } from "react"
import axios from "axios"

const InfiniteScroll = () => {
    return (
        <div>
            <h1>Infinite Scroll</h1>
            <ul>
                <li>
                    <h3>Título</h3>
                    <p>Corpo</p>
                </li>
            </ul>
        </div>
    )
}

export default InfiniteScroll