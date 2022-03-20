import React from 'react';
import style from './_Examples.module.scss'
import {Skeleton} from "skeleton/skeleton";
import avatar from 'assets/images/avatar.jpg'
const ExamplesPage = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.title}>
                    <h3>Article mode</h3>
                </div>
                <h4 className={style.animation}>Pulse mode</h4>
                <Skeleton mode={'article'} animation={'pulse'}/>

                <h4 className={style.animation}>Wave mode</h4>
                <Skeleton mode={'article'} animation={'wave'}/>

                <div className={style.content}>
                    <h3>Lorem ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci aliquid asperiores autem delectus dicta eos facilis inventore, iusto maiores molestiae neque obcaecati omnis quibusdam quisquam repellendus rerum sunt?</p>
                </div>
            </div>
            <div className={style.wrapper}>
                <div className={style.title}>
                    <h3>Profile mode</h3>
                </div>
                <h4 className={style.animation}>Pulse mode</h4>
                <Skeleton mode={'profile'} animation={'pulse'}/>
                <h4 className={style.animation}>Wave mode</h4>
                <Skeleton mode={'profile'} animation={'wave'}/>

                <div className={style.content}>
                    <div className={style.profile_header}>
                        <img src={avatar}
                             alt="avatar"/>
                        <h3>Lorem ipsum dolor.</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci aliquid asperiores autem delectus dicta eos facilis inventore, iusto maiores molestiae neque obcaecati omnis quibusdam quisquam repellendus rerum sunt?</p>
                </div>
            </div>
        </div>
    );
};

export {ExamplesPage};