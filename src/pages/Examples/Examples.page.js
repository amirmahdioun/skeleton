import React from 'react';
import style from './_Examples.module.scss'
import {Skeleton} from "skeleton/skeleton";
import avatar from 'assets/images/avatar.jpg'
import postImage from 'assets/images/post.jpg'

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
                <Skeleton mode={'profile'} animation={'pulse'} sx={{width: '50%'}}/>
                <h4 className={style.animation}>Wave mode</h4>
                <Skeleton mode={'profile'} animation={'wave'} sx={{width: '50%'}}/>

                <div className={style.content}>
                    <div className={style.profile_header}>
                        <img src={avatar}
                             alt="avatar"/>
                        <h3>Lorem ipsum dolor.</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci aliquid asperiores autem delectus dicta eos facilis inventore, iusto maiores molestiae neque obcaecati omnis quibusdam quisquam repellendus rerum sunt?</p>
                </div>
            </div>
            <div className={style.wrapper}>
                <div className={style.title}>
                    <h3>Typography mode</h3>
                </div>

                <h4 className={style.animation}>Heading H1 (wave mode/pulse mode)</h4>
                <Skeleton animation={'wave'} mode={'h1'} sx={{width: '50%'}}/>
                <Skeleton animation={'pulse'} mode={'h1'} sx={{width: '50%'}}/>
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, eius!</h1>

                <h4 className={style.animation}>Heading H2 (wave mode/pulse mode)</h4>
                <Skeleton animation={'wave'} mode={'h2'} sx={{width: '50%'}}/>
                <Skeleton animation={'pulse'} mode={'h2'} sx={{width: '50%'}}/>
                <h2 style={{border:'none'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, tempore?</h2>

                <h4 className={style.animation}>Heading H3 (wave mode/pulse mode)</h4>
                <Skeleton animation={'wave'} mode={'h3'} sx={{width: '50%'}}/>
                <Skeleton animation={'pulse'} mode={'h3'} sx={{width: '50%'}}/>
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, eius.</h3>

                <h4 className={style.animation}>Heading H4 (wave mode/pulse mode)</h4>
                <Skeleton animation={'wave'} mode={'h4'} sx={{width: '50%'}}/>
                <Skeleton animation={'pulse'} mode={'h4'} sx={{width: '50%'}}/>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, veniam!</h4>

                <h4 className={style.animation}>Heading H5 (wave mode/pulse mode)</h4>
                <Skeleton animation={'wave'} mode={'h5'} sx={{width: '50%'}}/>
                <Skeleton animation={'pulse'} mode={'h5'} sx={{width: '50%'}}/>
                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, unde!</h5>

                <h4 className={style.animation}>Heading H6 (wave mode/pulse mode)</h4>
                <Skeleton animation={'wave'} mode={'h6'} sx={{width: '50%'}}/>
                <Skeleton animation={'pulse'} mode={'h6'} sx={{width: '50%'}}/>
                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, quis?</h6>

                <h4 className={style.animation}>Title (wave mode/pulse mode)</h4>
                <Skeleton animation={'wave'} mode={'title'} sx={{width: '50%'}}/>
                <Skeleton animation={'pulse'} mode={'title'} sx={{width: '50%'}}/>
                <span style={{fontSize: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, rem.</span>

                <h4 className={style.animation}>Body (wave mode/pulse mode)</h4>
                <Skeleton animation={'wave'} mode={'body'} sx={{width: '50%'}}/>
                <Skeleton animation={'pulse'} mode={'body'} sx={{width: '50%'}}/>
                <span style={{fontSize: '16px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, culpa.</span>

                <h4 className={style.animation}>Caption (wave mode/pulse mode)</h4>
                <Skeleton animation={'wave'} mode={'caption'} sx={{width: '50%'}}/>
                <Skeleton animation={'pulse'} mode={'caption'} sx={{width: '50%'}}/>
                <span style={{fontSize: '11px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, praesentium.</span>
            </div>
            <div className={style.wrapper}>
                <div className={style.title}>
                    <h3>Post mode</h3>
                </div>
                <h4 className={style.animation}>Wave mode</h4>
                <div className={style.post}>
                    <Skeleton animation={'wave'} mode={'post'} sx={{width: '15rem', height: '12rem'}}/>
                    <Skeleton animation={'wave'} mode={'post'} sx={{width: '15rem', height: '12rem'}}/>
                    <Skeleton animation={'wave'} mode={'post'} sx={{width: '15rem', height: '12rem'}}/>
                    <Skeleton animation={'wave'} mode={'post'} sx={{width: '15rem', height: '12rem'}}/>
                    <Skeleton animation={'wave'} mode={'post'} sx={{width: '15rem', height: '12rem'}}/>
                </div>
                <h4 className={style.animation}>Pulse mode</h4>
                <div className={style.post}>
                    <Skeleton animation={'pulse'} mode={'post'} sx={{width: '15rem', height: '12rem'}}/>
                    <Skeleton animation={'pulse'} mode={'post'} sx={{width: '15rem', height: '12rem'}}/>
                    <Skeleton animation={'pulse'} mode={'post'} sx={{width: '15rem', height: '12rem'}}/>
                    <Skeleton animation={'pulse'} mode={'post'} sx={{width: '15rem', height: '12rem'}}/>
                    <Skeleton animation={'pulse'} mode={'post'} sx={{width: '15rem', height: '12rem'}}/>
                </div>
                <div className={style.post}>
                    <div className={style.postCard}>
                        <div className={style.postCard__image}>
                            <img src={postImage} alt={'post'}/>
                        </div>
                        <span style={{fontSize: '20px'}}>Don Diablo </span>
                        <span style={{fontSize:'11px', color: 'gray'}}>396 k views • a week ago</span>
                    </div>
                    <div className={style.postCard}>
                        <div className={style.postCard__image}>
                            <img src={postImage} alt={'post'}/>
                        </div>
                        <span style={{fontSize: '20px'}}>Don Diablo </span>
                        <span style={{fontSize:'11px', color: 'gray'}}>396 k views • a week ago</span>
                    </div>
                    <div className={style.postCard}>
                        <div className={style.postCard__image}>
                            <img src={postImage} alt={'post'}/>
                        </div>
                        <span style={{fontSize: '20px'}}>Don Diablo </span>
                        <span style={{fontSize:'11px', color: 'gray'}}>396 k views • a week ago</span>
                    </div>
                    <div className={style.postCard}>
                        <div className={style.postCard__image}>
                            <img src={postImage} alt={'post'}/>
                        </div>
                        <span style={{fontSize: '20px'}}>Don Diablo </span>
                        <span style={{fontSize:'11px', color: 'gray'}}>396 k views • a week ago</span>
                    </div>
                    <div className={style.postCard}>
                        <div className={style.postCard__image}>
                            <img src={postImage} alt={'post'}/>
                        </div>
                        <span style={{fontSize: '20px'}}>Don Diablo </span>
                        <span style={{fontSize:'11px', color: 'gray'}}>396 k views • a week ago</span>
                    </div>
                </div>
            </div>
        </div>
    );
};



export {ExamplesPage};