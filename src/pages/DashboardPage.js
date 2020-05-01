import React from 'react'
import { Link } from 'react-router-dom'

const DahboardPage = () => (
    <section>
        <h1>Dahboard</h1>
        <p>Welcome to my Dashboard...Nixon</p>

        <Link to="/posts" className="button">
            View Posts
        </Link>
    </section>
)
export default DahboardPage