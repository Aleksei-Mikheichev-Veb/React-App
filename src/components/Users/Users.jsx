import React from 'react';
import s from './Users.module.css';




const Users = (props) => {
    {
        props.setUsers([
            {
                id: 1, usersAvatar: 'https://s3.cdn.eg.ru/wp-content/uploads/2021/02/12444063017014551.jpg',
                followed: true, userName: 'Aleksei', status: 'I am frondend developer', location: { country: 'Russia', userCity: 'Kostroma' }
            },
            {
                id: 2, usersAvatar: 'https://s3.cdn.eg.ru/wp-content/uploads/2021/02/12444063017014551.jpg',
                followed: true, userName: 'Dmitrii', status: 'I am boss it-kamasutra', location: { country: 'Belarus', userCity: 'Minsk' }
            },
            {
                id: 3, usersAvatar: 'https://s3.cdn.eg.ru/wp-content/uploads/2021/02/12444063017014551.jpg',
                followed: false, userName: 'Zelenskii', status: 'I am president', location: { country: 'Ukraine', userCity: 'Kiev' }
            },
            {
                id: 4, usersAvatar: 'https://s3.cdn.eg.ru/wp-content/uploads/2021/02/12444063017014551.jpg',
                followed: true, userName: 'Anastasia', status: 'I am wife Aleksei', location: { country: 'Russia', userCity: 'Kostroma' }
            }
        ])
    }


    return <div className={s.wrapper}>
        <div className={s.title}>Users</div>
        {props.users.map(elem => (
            <div key={elem.id} className={s.user}>
                <div className={s.left}>
                    <img src={elem.usersAvatar} className={s.avatar} />
                    {elem.followed
                        ? <button onClick={() => { props.unFollow(elem.id) }} className={s.button}>Unfollow</button>
                        : <button onClick={() => { props.follow(elem.id) }} className={s.button}>Follow</button>}
                </div>
                <div className={s.description}>
                    <div className={s.description__left}>
                        <div className={s.description__name}>{elem.userName}</div>
                        <div className={s.description__status}>{elem.status}</div>
                    </div>
                    <div className={s.description__location}>
                        <div className={s.description__country}>{elem.location.country}</div>
                        <div className={s.description__city}>{elem.location.userCity}</div>
                    </div>
                </div>
            </div>
        ))}
    </div>
}


export default Users;