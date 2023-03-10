import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            
            <img 
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" />
            
            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/103320946?v=4" />

                <strong>Rodrigo Macario</strong>
                <span>Web developer</span>
            </div>
            
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar perfil
                </a>
            
            </footer>
        </aside>
    )
}