import { Link } from 'react-router-dom'
import classes from './style.module.css'


export default function Header() {
    return (
        <div className={classes.header}>
            <h3>Mern Blog App</h3>
            <ul>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/addblog'}><li>Add Blog</li></Link>
            </ul>
        </div>
    )
}